# Traffic to Content Decisions: 2026-05-11

GitHub traffic shows clone-heavy behavior across the public API NODE repos.

## Snapshot

| Repo | Views | Clones | Stars | Forks | Open issues | Open PRs |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| openai-compatible-ai-gateway-examples | 3 | 210 | 0 | 0 | 0 | 0 |
| ai-api-gateway-benchmark | 2 | 229 | 0 | 0 | 0 | 0 |
| apinode-starter-templates | 0 | 150 | 0 | 0 | 0 | 0 |

## Content Decisions

1. Prioritize clone-aftercare docs over landing-page copy.
2. Add copy-paste templates for repeated high-intent searches such as LiteLLM
   custom headers and provider abstraction.
3. Keep benchmark publishing conservative: link to committed summaries, trend,
   raw results, and workflow runs instead of making standalone performance
   claims.

## Low-Spam Distribution Angle

For external issues, use the direct contribution frame:

```text
The minimal fix is a provider-neutral docs/test patch. I can open a small PR
with redacted config and a regression check if maintainers want it.
```

