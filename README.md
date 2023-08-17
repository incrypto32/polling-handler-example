### Polling Filter for blockHandlers

filter:
kind: polling
every: 10

The defined handler will be called once for every `n` blocks, where `n` is the value provided in the `every` field. This configuration allows the subgraph to perform specific operations at regular intervals.

Example:

```yaml
blockHandlers:
  - handler: handleBlock
    filter:
      kind: polling
      every: 10
```
