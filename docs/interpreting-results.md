# Interpreting Benchmark Results

This benchmark is a small operational health signal for an OpenAI-compatible endpoint. It is not a universal model quality ranking.

Default target:

```text
Base URL: https://apinode.pro
Model:    gpt-5.5
API:      OpenAI Responses API
```

## What Matters First

Read results in this order:

1. Success rate.
2. Output present.
3. P50 latency.
4. P95 latency.
5. Average latency.

A 100% success rate with non-empty output is the main trust signal. Latency numbers are useful only when the sample size, model, endpoint, and run context are visible.

## When to Investigate

Investigate when:

- Success rate drops below 95%.
- Output is missing for any successful HTTP response.
- A scheduled workflow fails.
- P95 latency changes sharply across multiple runs.
- The model or endpoint changed without a matching note.

## What Not to Claim

Do not use one small benchmark run to claim:

- Fastest provider.
- Cheapest provider.
- Universal reliability.
- Production SLA.

Use the benchmark as a reproducible smoke signal and link to the code and history when sharing it.

## Useful Links

- [Latest summary](../SUMMARY.md)
- [Trend](../TREND.md)
- [Latest detailed result](../results/last-run.md)
- [Benchmark script](../benchmark.mjs)
