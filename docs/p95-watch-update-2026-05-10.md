# P95 Watch Update - 2026-05-10

Latest committed benchmark:

```text
Generated:    2026-05-09 06:02:06 UTC
Success rate: 100.0%
Average:      2471ms
P50:          2072ms
P95:          4339ms
Samples:      5
```

## Status

This is a watch item, not an incident.

The success rate remains healthy at 100.0%, and all samples produced output. The P95 value crossed 4000ms, so the next growth-safe action is to keep the result visible without making performance claims.

## Next Check

- Confirm the next scheduled benchmark commits a fresh `SUMMARY.md` and `TREND.md`.
- If P95 remains above 4000ms for two more committed runs, open a latency investigation note.
- If success rate drops below 95%, treat it as an incident signal.

## Public Framing

Use conservative language:

```text
The benchmark is a small recurring smoke signal. It is useful for availability and rough latency trend checks, not a statistically complete performance claim.
```
