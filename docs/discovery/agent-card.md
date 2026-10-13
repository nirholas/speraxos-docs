# A2A agent card

`/.well-known/agent-card.json` describes SperaxOS as an A2A agent: `name`, `description`, `skills`, `securitySchemes`, and `additionalInterfaces` listing MCP endpoints (`/webapi/mcp/market`, `/onchain`, `/defi`, `/risk`, `/news`, and others).

```bash
curl -s https://chat.sperax.io/.well-known/agent-card.json | jq '{name, version, url, interfaces: [.additionalInterfaces[].url]}'
```

`/.well-known/agent.json` and `/.well-known/erc8004-registration.json` carry the agent descriptor and the ERC-8004 on-chain registration.
