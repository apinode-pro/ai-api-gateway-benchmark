# Embedding Benchmark Plan

This benchmark repo currently focuses on text generation through the Responses API. Embeddings should be tracked separately because the success and latency signals are different.

## Proposed Metrics

- HTTP success rate.
- Non-empty embedding vector.
- Vector dimension.
- Input order preserved.
- Average latency.
- P50 latency.
- P95 latency.

## Minimal Sample Set

Use short, non-private strings:

```text
hello world
OpenAI-compatible endpoint
retrieval smoke test
```

## Request Shape

```json
{
  "model": "embedding-model",
  "input": ["hello world"],
  "encoding_format": "float"
}
```

## Success Criteria

A sample succeeds when:

- HTTP status is 2xx.
- Response has `data[0].embedding`.
- Embedding is a non-empty numeric array.
- `index` is either absent or matches the input position.

## Publishing Notes

Do not compare embedding quality from this smoke test. It is a transport and compatibility signal only.

Publish:

- Endpoint family.
- Model.
- Sample count.
- Vector dimension.
- Success rate.
- Latency percentiles.
