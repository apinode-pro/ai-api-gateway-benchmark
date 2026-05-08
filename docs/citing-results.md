# How to Cite Benchmark Results

When sharing benchmark results, link to the committed files so readers can verify the run.

Use this format:

```text
API NODE benchmark, YYYY-MM-DD
Endpoint: https://apinode.pro
Model: gpt-5.5
API: OpenAI Responses API
Latest summary: https://github.com/apinode-pro/ai-api-gateway-benchmark/blob/main/SUMMARY.md
Trend: https://github.com/apinode-pro/ai-api-gateway-benchmark/blob/main/TREND.md
Benchmark code: https://github.com/apinode-pro/ai-api-gateway-benchmark/blob/main/benchmark.mjs
```

## Good Short Citation

```text
Latest API NODE benchmark summary: https://github.com/apinode-pro/ai-api-gateway-benchmark/blob/main/SUMMARY.md
```

## Better Citation With Context

```text
The latest committed benchmark run shows success rate, latency percentiles, output presence, sample size, model, endpoint, and benchmark code:
https://github.com/apinode-pro/ai-api-gateway-benchmark/blob/main/SUMMARY.md
```

## Avoid

Avoid copying only a latency number without:

- Date.
- Sample size.
- Endpoint.
- Model.
- Benchmark code.
- Trend link.

Benchmarks are more credible when the context travels with the number.
