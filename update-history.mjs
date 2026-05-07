import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const historyDir = "history";
const lastRun = JSON.parse(await readFile("results/last-run.json", "utf8"));
const { summary } = lastRun;

function dayKey(dateString) {
  return dateString.slice(0, 10);
}

function fmtMs(value) {
  return value == null ? "n/a" : `${value}ms`;
}

function fmtPercent(value) {
  return `${((value || 0) * 100).toFixed(1)}%`;
}

await mkdir(historyDir, { recursive: true });

const historyFile = path.join(historyDir, `${dayKey(summary.date)}.json`);
await writeFile(historyFile, `${JSON.stringify(lastRun, null, 2)}\n`);

const files = (await readdir(historyDir))
  .filter((file) => /^\d{4}-\d{2}-\d{2}\.json$/.test(file))
  .sort();

const entries = [];
for (const file of files) {
  const data = JSON.parse(await readFile(path.join(historyDir, file), "utf8"));
  entries.push(data.summary);
}

const recent = entries.slice(-7);

const rows = recent
  .map((item) => {
    return `| ${dayKey(item.date)} | ${item.provider} | ${item.model} | ${item.samples} | ${fmtPercent(item.success_rate)} | ${fmtMs(item.average_latency_ms)} | ${fmtMs(item.p50_latency_ms)} | ${fmtMs(item.p95_latency_ms)} |`;
  })
  .join("\n");

const successfulEntries = recent.filter((item) => item.success_rate === 1);
const averageSuccessRate = recent.length
  ? recent.reduce((sum, item) => sum + item.success_rate, 0) / recent.length
  : 0;
const averageLatencyValues = recent
  .map((item) => item.average_latency_ms)
  .filter((value) => typeof value === "number");
const averageLatency = averageLatencyValues.length
  ? Math.round(averageLatencyValues.reduce((sum, value) => sum + value, 0) / averageLatencyValues.length)
  : null;

const trend = `# 7 Day Benchmark Trend

Updated: ${summary.date.replace("T", " ").replace(/\.\d+Z$/, " UTC")}

| Date | Provider | Model | Samples | Success Rate | Avg Latency | P50 | P95 |
|---|---|---:|---:|---:|---:|---:|---:|
${rows}

## Rollup

- Days included: ${recent.length}
- Fully successful days: ${successfulEntries.length}
- Average success rate: ${fmtPercent(averageSuccessRate)}
- Average latency: ${fmtMs(averageLatency)}

## Notes

- This trend uses the latest committed benchmark result per UTC day.
- Sample sizes are intentionally small and conservative.
- Treat failures as investigation signals, not standalone performance claims.
`;

await writeFile("TREND.md", trend);
