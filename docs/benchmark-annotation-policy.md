# Benchmark Annotation Policy

Use short annotations when a benchmark result needs context but does not require an incident.

## Annotate When

- Success rate is healthy but P95 changes sharply.
- A workflow succeeds but a metric crosses a watch threshold.
- A benchmark input changes, such as sample count or model name.
- A result is useful as a health signal but too small for a performance claim.

## Do Not Overclaim

Avoid language like:

```text
fastest
best
guaranteed
production SLA
```

Prefer:

```text
latest committed health check
small sample
watch signal
daily trend
```

## Annotation Shape

```text
Date:
Run:
Signal:
Why it matters:
Next check:
```

