# Call SperaxOS from an agent

1. Discover endpoints:
   ```bash
   curl -s https://chat.sperax.io/.well-known/agent-card.json | jq -r '.additionalInterfaces[].url'
   ```
2. Pick the scoped MCP server you need, such as `/webapi/mcp/market`.
3. Or use the paid HTTP resources listed in [`/.well-known/x402`](https://chat.sperax.io/.well-known/x402). Unpaid requests return an x402 challenge.
4. Read [`/llms.txt`](https://chat.sperax.io/llms.txt) for context to give the model.

See [snippets](../../snippets/README.md) for runnable code.
