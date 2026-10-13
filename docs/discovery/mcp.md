# MCP

The root MCP endpoint is `https://chat.sperax.io/webapi/mcp`. Domain-scoped servers are listed in the agent card, for example `https://chat.sperax.io/webapi/mcp/market`.

The root endpoint returns a JSON catalog of the form `{"groups":[{"id","title","description","tools":[...]}]}`. Each group has an `id` such as `market`, a title, and its tools with input schemas.

```bash
curl -s https://chat.sperax.io/webapi/mcp | jq '.groups[] | {id, title, tools: (.tools | length)}'
```

List the scoped endpoints:

```bash
curl -s https://chat.sperax.io/.well-known/agent-card.json | jq -r '.additionalInterfaces[].url'
```
