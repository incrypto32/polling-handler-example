### `polling` Filter

The defined handler will be called once for every `n` blocks, where `n` is the value provided in the `every` field. This configuration allows the subgraph to perform specific operations at regular intervals.

Example:

```yaml
blockHandlers:
  - handler: handleBlock
    filter:
      kind: polling
      every: 10
```

### `once` Filter

The `once` filter offers a unique way to perform initialization and data preloading in a subgraph. Employing this filter ensures that the associated handler is executed as the very first handler, before all others, and only once during the entire process of subgraph indexing. This makes it a valuable tool for tasks that need to be performed exactly once, such as setting up initial parameters or preloading specific data.

Example :

```yaml
blockHandlers:
  - handler: handleOnce
    filter:
      kind: once
```

Handler example :

```ts
export function handleOnce(block: ethereum.Block): void {
  let data = new InitialData(Bytes.fromUTF8("initial"));
  data.data = "Setup data here";
  data.save();
}
```
