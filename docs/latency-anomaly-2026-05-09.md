# Latency Watch Note: 2026-05-09

The 2026-05-09 benchmark run stayed healthy on success rate but showed a slower tail sample.

## Evidence

- Run: https://github.com/apinode-pro/ai-api-gateway-benchmark/actions/runs/25593591587
- Success rate: 100.0%
- Average latency: 2471ms
- P50 latency: 2072ms
- P95 latency: 4339ms
- Output present: yes for all 5 samples

## Interpretation

This is not an incident because all samples succeeded and returned output. It is worth watching because P95 increased from 2701ms on 2026-05-08 to 4339ms on 2026-05-09.

## Next Check

- Confirm the next scheduled run succeeds.
- Compare P95 against the 3-day trend.
- If P95 remains above 4000ms for two consecutive daily runs, add an investigation note with timestamps and request ids if available.

