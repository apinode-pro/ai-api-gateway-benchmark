# Benchmark Incident Response Runbook

Use this when the benchmark workflow fails, output is missing, or success rate drops below the alert threshold.

## Alert Conditions

Investigate when:

- Success rate drops below 95%.
- Any successful HTTP response has missing output.
- The GitHub Actions workflow fails.
- The workflow completes but does not commit refreshed results.
- P95 or average latency changes sharply across multiple runs.

## First Checks

1. Open the latest workflow run.
2. Open `results/last-run.md`.
3. Compare `SUMMARY.md` and `TREND.md`.
4. Confirm the configured model and endpoint.
5. Confirm the Actions secret exists, without printing it.

## Safe Manual Re-Run

Use GitHub Actions `workflow_dispatch` when available. Do not paste API keys into logs.

After a manual run:

- Check whether success rate recovered.
- Check whether output text is present.
- Record the result in the operations log.

## Interpreting Outcomes

| Outcome | Meaning | Next step |
|---|---|---|
| Workflow failure before request | CI or dependency problem | inspect logs |
| 401 or auth error | secret or key issue | rotate/check secret outside chat |
| 404 | base URL or path issue | run endpoint readiness checklist |
| 429 or timeout | rate/network issue | re-run later and compare trend |
| HTTP 200 with missing output | response shape issue | update parser or provider config |

## Links

- [Latest summary](../SUMMARY.md)
- [Trend](../TREND.md)
- [Latest result](../results/last-run.md)
- [Latency watch notes](latency-watch.md)
