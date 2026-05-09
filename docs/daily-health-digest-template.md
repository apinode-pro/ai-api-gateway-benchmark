# Daily Health Digest Template

Use this template to turn the latest committed benchmark files into a short daily health note.

```text
Date:
Latest run:
Success rate:
Average latency:
P50 latency:
P95 latency:
Output present:
Workflow status:
Action:
```

## Decision Rules

- `OK`: success rate is at least 95%, output is present, and workflow succeeded.
- `Watch`: success rate is healthy but P95 is above 4000ms or changed sharply.
- `Investigate`: success rate is below 95%, output is missing, or workflow failed.

## Example

```text
Date: 2026-05-09
Latest run: https://github.com/apinode-pro/ai-api-gateway-benchmark/actions/runs/25593591587
Success rate: 100.0%
Average latency: 2471ms
P50 latency: 2072ms
P95 latency: 4339ms
Output present: yes, all samples
Workflow status: success
Action: Watch tail latency on the next scheduled run.
```

