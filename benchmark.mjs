import { mkdir, writeFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";

const provider = process.env.BENCHMARK_PROVIDER || "API NODE";
const baseURL = process.env.APINODE_BASE_URL || "https://apinode.pro";
const apiKey = process.env.APINODE_API_KEY;
const model = process.env.APINODE_MODEL || "gpt-5.5";
const samples = Number.parseInt(process.env.BENCHMARK_SAMPLES || "5", 10);
const timeoutMs = Number.parseInt(process.env.BENCHMARK_TIMEOUT_MS || "60000", 10);
const prompt = process.env.BENCHMARK_PROMPT || "Reply with exactly: pong";

if (!apiKey) {
  throw new Error("Set APINODE_API_KEY before running the benchmark.");
}

function percentile(values, p) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, Math.min(index, sorted.length - 1))];
}

async function requestJSON(url, options) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const startedAt = performance.now();
    const response = await fetch(url, { ...options, signal: controller.signal });
    const latencyMs = Math.round(performance.now() - startedAt);
    const text = await response.text();

    let body = null;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      body = { raw: text.slice(0, 500) };
    }

    return {
      ok: response.ok,
      status: response.status,
      latencyMs,
      body,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runSample(index) {
  const result = await requestJSON(`${baseURL}/responses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: prompt,
    }),
  });

  return {
    index,
    ok: result.ok,
    status: result.status,
    latency_ms: result.latencyMs,
    output_present: Boolean(result.body?.output_text),
    error: result.ok ? null : result.body?.error || result.body,
  };
}

function summarize(rawSamples) {
  const successes = rawSamples.filter((sample) => sample.ok);
  const failures = rawSamples.filter((sample) => !sample.ok);
  const latencies = successes.map((sample) => sample.latency_ms);

  return {
    provider,
    base_url: baseURL,
    model,
    date: new Date().toISOString(),
    samples: rawSamples.length,
    successes: successes.length,
    failures: failures.length,
    success_rate: rawSamples.length ? successes.length / rawSamples.length : 0,
    average_latency_ms: latencies.length
      ? Math.round(latencies.reduce((sum, value) => sum + value, 0) / latencies.length)
      : null,
    p50_latency_ms: percentile(latencies, 50),
    p95_latency_ms: percentile(latencies, 95),
  };
}

function renderMarkdown(summary, rawSamples) {
  const successPercent = `${(summary.success_rate * 100).toFixed(1)}%`;
  const generatedAt = summary.date.replace("T", " ").replace(/\.\d+Z$/, " UTC");

  const rows = rawSamples
    .map((sample) => {
      const result = sample.ok ? "ok" : "failed";
      return `| ${sample.index} | ${result} | ${sample.status} | ${sample.latency_ms} | ${sample.output_present ? "yes" : "no"} |`;
    })
    .join("\n");

  return `# AI API Gateway Benchmark Results

Generated: ${generatedAt}

| Provider | Model | Samples | Success Rate | Avg Latency | P50 | P95 |
|---|---:|---:|---:|---:|---:|---:|
| ${summary.provider} | ${summary.model} | ${summary.samples} | ${successPercent} | ${summary.average_latency_ms ?? "n/a"}ms | ${summary.p50_latency_ms ?? "n/a"}ms | ${summary.p95_latency_ms ?? "n/a"}ms |

## Raw Samples

| # | Result | Status | Latency | Output Present |
|---:|---|---:|---:|---|
${rows}
`;
}

const rawSamples = [];

for (let index = 1; index <= samples; index += 1) {
  rawSamples.push(await runSample(index));
}

const summary = summarize(rawSamples);

await mkdir("results", { recursive: true });
await writeFile("results/last-run.json", `${JSON.stringify({ summary, rawSamples }, null, 2)}\n`);
await writeFile("results/last-run.md", renderMarkdown(summary, rawSamples));

console.log(JSON.stringify(summary, null, 2));

