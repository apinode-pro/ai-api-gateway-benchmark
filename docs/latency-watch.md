# Latency Watch Notes

Use this note when the benchmark remains healthy but latency moves enough to deserve a human glance.

Latest committed benchmark files:

- [SUMMARY.md](../SUMMARY.md)
- [TREND.md](../TREND.md)
- [results/last-run.md](../results/last-run.md)

## Current Watch Rules

Flag the run when any of these happen:

- Success rate drops below 95%.
- Any successful response has missing output text.
- P95 latency increases by more than 50% across two consecutive days.
- Average latency increases by more than 50% across two consecutive days.
- A workflow fails or does not produce committed output.

## How to Interpret a Latency Move

Latency can move because of:

- Provider routing.
- Model load.
- Network path.
- GitHub Actions runner region.
- Small sample size.

Do not turn one small run into a marketing claim. Use the trend as an investigation trigger.

## Suggested Follow-Up

When a latency alert appears:

1. Re-run the workflow manually.
2. Compare `results/last-run.md` against the prior day.
3. Check whether all samples returned text.
4. Record the observation in the operations log.
