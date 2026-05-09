# Weekly Benchmark Review Template

Use this template when reviewing the committed benchmark history each week.

## Snapshot

```text
week:
latest run:
success rate:
average latency:
p50 latency:
p95 latency:
sample size:
notable workflow runs:
```

## Checks

- Success rate stayed at or above 95%.
- Each run produced output text.
- No GitHub Actions workflow failed.
- P95 did not change sharply without a known reason.
- `SUMMARY.md`, `TREND.md`, and `results/last-run.md` are all present and current.

## Notes

Record only evidence that is visible in committed benchmark files or GitHub Actions logs. Do not turn a small sample into a broad performance claim.

## Publishable Summary

```text
API NODE benchmark remained healthy this week: <success-rate> success across <days> committed daily runs. Latest committed run: <link>. Sample size remains intentionally small, so treat this as a health signal rather than a ranking claim.
```

