import { readFile, writeFile } from "node:fs/promises";

const data = JSON.parse(await readFile("results/last-run.json", "utf8"));
const { summary } = data;

const successPercent = `${(summary.success_rate * 100).toFixed(1)}%`;
const generatedAt = summary.date.replace("T", " ").replace(/\.\d+Z$/, " UTC");

const markdown = `# Latest Benchmark Summary

Generated: ${generatedAt}

| Provider | Model | Samples | Success Rate | Avg Latency | P50 | P95 |
|---|---:|---:|---:|---:|---:|---:|
| ${summary.provider} | ${summary.model} | ${summary.samples} | ${successPercent} | ${summary.average_latency_ms ?? "n/a"}ms | ${summary.p50_latency_ms ?? "n/a"}ms | ${summary.p95_latency_ms ?? "n/a"}ms |

Full run details: [results/last-run.md](results/last-run.md)
`;

await writeFile("SUMMARY.md", markdown);

