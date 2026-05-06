# AI API Gateway Benchmark

Small reproducible benchmark for OpenAI-compatible AI API gateways.

The default target is API NODE:

```text
Base URL: https://apinode.pro
Model:    gpt-5.5
API:      OpenAI Responses API
```

[Try API NODE](https://apinode.pro)

## Metrics

This benchmark records:

- Success rate.
- Average latency.
- P50 latency.
- P95 latency.
- HTTP status.
- Whether `output_text` is present.

## Run Locally

```bash
export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_MODEL="gpt-5.5"
export BENCHMARK_SAMPLES="5"
npm run benchmark
```

Results are written to:

```text
results/last-run.json
results/last-run.md
```

## GitHub Actions

Add `APINODE_API_KEY` as a repository secret, then run the benchmark workflow manually.

The scheduled workflow is intentionally conservative. Increase sample size only after confirming cost and rate limits.

## Reproducibility Notes

When publishing benchmark results, include:

- Date and time.
- Runtime region.
- Sample size.
- Timeout.
- Model name.
- Endpoint.
- Whether requests were streaming or non-streaming.

Do not publish inflated claims. Developers trust benchmarks that are boring, transparent, and repeatable.

