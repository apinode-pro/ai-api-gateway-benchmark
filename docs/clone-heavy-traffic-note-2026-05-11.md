# Clone-Heavy Traffic Note - 2026-05-11

The Monday traffic check shows clone counts far above page views:

```text
examples repo:          210 clones, 3 views
benchmark repo:         229 clones, 2 views
starter templates repo: 150 clones, 0 views
```

## Interpretation

This is useful distribution signal, but it is not the same as reader
understanding. The public repos need strong post-clone entrypoints because many
users may interact through local checkouts, automation, or template copies.

## Decision

- Keep benchmark output files stable and machine-readable.
- Put human context in short `docs/` notes.
- Link clone-friendly setup indexes from README files.
