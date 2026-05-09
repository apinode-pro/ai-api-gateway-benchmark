# P95 Watch Procedure

Use this when the benchmark success rate is healthy but tail latency rises.

## Trigger

Start watching when either condition is true:

- P95 increases by more than 50% from the previous committed daily run.
- P95 is above 4000ms for one run.

## Escalate To Investigation

Escalate when either condition is true:

- P95 stays above 4000ms for two consecutive committed daily runs.
- Success rate falls below 95%.

## Check Sequence

1. Confirm every sample returned output text.
2. Compare P50 and average latency, not only P95.
3. Check the GitHub Actions run time and logs.
4. Confirm the benchmark sample size did not change.
5. Record whether the change is a single slow sample or broad slowdown.

## Output

Add a short dated note under `docs/` with:

- Run URL.
- Success rate.
- Average, P50, and P95.
- Whether output was present for all samples.
- Next check threshold.

