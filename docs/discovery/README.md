# Agent discovery

SperaxOS publishes machine-readable surfaces so agents and tools can find what it offers without scraping. Every URL below was checked against production.

| Surface | URL |
| --- | --- |
| x402 resource list | <https://chat.sperax.io/.well-known/x402> |
| OpenAPI 3.1 | <https://chat.sperax.io/openapi.json> |
| A2A agent card | <https://chat.sperax.io/.well-known/agent-card.json> |
| Agent descriptor | <https://chat.sperax.io/.well-known/agent.json> |
| ERC-8004 registration | <https://chat.sperax.io/.well-known/erc8004-registration.json> |
| MCP | <https://chat.sperax.io/webapi/mcp> |
| llms.txt / llms-full.txt | <https://chat.sperax.io/llms.txt> |
| Capabilities / tools | <https://chat.sperax.io/capabilities.json>, <https://chat.sperax.io/tools.json> |
| security.txt | <https://chat.sperax.io/.well-known/security.txt> |
| Sitemap | <https://chat.sperax.io/sitemap.xml> |

`/.well-known/openapi.json` is not served. The OpenAPI document is at `/openapi.json`.
