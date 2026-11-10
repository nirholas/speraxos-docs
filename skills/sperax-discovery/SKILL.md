---
name: sperax-discovery
description: Verify and query the SperaxOS discovery surface at chat.sperax.io (/.well-known/x402, the MCP catalog, the agent card, OpenAPI). Use when asked to check a SperaxOS deployment, list its x402 paid resources, or find its MCP endpoints.
---

# SperaxOS discovery

The docs in this repo describe the public discovery files served by a SperaxOS deployment. Default origin: `https://chat.sperax.io`. Every command below is a read-only GET.

## Check every surface

`snippets/check-discovery.sh` prints the status code and content type of each path. Pass another origin as the first argument.

```bash
bash snippets/check-discovery.sh https://chat.sperax.io
```

Paths checked: `/.well-known/x402`, `/openapi.json`, `/.well-known/agent-card.json`, `/.well-known/agent.json`, `/.well-known/erc8004-registration.json`, `/.well-known/security.txt`, `/webapi/mcp`, `/llms.txt`, `/llms-full.txt`, `/capabilities.json`, `/tools.json`, `/sitemap.xml`, `/robots.txt`. A healthy production deployment returns 200 for all of them.

## List x402 paid resources

`/.well-known/x402` returns JSON with `version` and a `resources` array of URLs under `/api/x402/`.

```bash
node snippets/list-x402-resources.mjs https://chat.sperax.io   # Node 18+
curl -s https://chat.sperax.io/.well-known/x402 | jq '.resources[:3]'
```

Requesting a resource without payment returns the x402 challenge (for example `curl -i https://chat.sperax.io/api/x402/fear-greed`). Do not pay for a resource without the user's explicit approval of recipient, amount and chain. `/openapi.json` (OpenAPI 3.1) describes the same paths, such as `/api/x402/markets` and `/api/x402/yields`.

## List MCP endpoints

The root `https://chat.sperax.io/webapi/mcp` returns a JSON catalog `{"groups":[{"id","title","description","tools":[...]}]}`. Scoped servers (for example `/webapi/mcp/market`) are listed in the agent card.

```bash
curl -s https://chat.sperax.io/webapi/mcp | jq '.groups[] | {id, title, tools: (.tools | length)}'
node snippets/list-mcp-endpoints.mjs https://chat.sperax.io
curl -s https://chat.sperax.io/.well-known/agent-card.json | jq -r '.additionalInterfaces[].url'
```

## More

Further guides live in `docs/discovery/` (`agent-card.md`, `llms-txt.md`, `mcp.md`, `security-txt.md`, `x402.md`), `docs/prompts/task-prompts.md` and `docs/tutorials/`. This repo has no application code: the snippets only call the public endpoints.
