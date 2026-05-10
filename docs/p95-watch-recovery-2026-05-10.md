# P95 Watch Recovery - 2026-05-10

The 2026-05-10 committed benchmark recovered from the prior P95 watch state.

```text
Generated:    2026-05-10 06:21:00 UTC
Success rate: 100.0%
Average:      2102ms
P50:          2151ms
P95:          3001ms
Samples:      5
```

Previous committed run:

```text
Generated:    2026-05-09 06:02:06 UTC
Success rate: 100.0%
Average:      2471ms
P50:          2072ms
P95:          4339ms
```

## Decision

Downgrade from watch to normal monitoring.

The success rate stayed at 100.0%, all samples produced output, and P95 returned
below the 4000ms watch threshold on the next committed run.

## Public Framing

Keep claims conservative:

```text
The benchmark is a small recurring smoke signal. The latest run recovered from
the prior P95 watch state, while success rate stayed at 100.0%.
```
