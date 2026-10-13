#!/usr/bin/env bash
set -euo pipefail
origin="${1:-https://chat.sperax.io}"
for p in /.well-known/x402 /openapi.json /.well-known/agent-card.json /.well-known/agent.json \
  /.well-known/erc8004-registration.json /.well-known/security.txt /webapi/mcp /llms.txt \
  /llms-full.txt /capabilities.json /tools.json /sitemap.xml /robots.txt; do
  printf '%s %s\n' "$p" "$(curl -sL -o /dev/null -w '%{http_code} %{content_type}' "$origin$p")"
done
