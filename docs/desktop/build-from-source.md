# Build the desktop app from source

Requirements: Node.js 22+, pnpm 10+, Xcode Command Line Tools on macOS. The web export needs a large heap (16 GB RAM recommended).

```bash
git clone https://github.com/nirholas/sperax.git
cd sperax
pnpm install
cd apps/desktop && pnpm install-isolated && cd ../..

# Static web export + unsigned, unpacked app (first stage takes 10-20 minutes)
bun run desktop:build-local     # or: npm run desktop:build-local
```

Launch on Apple Silicon:

```bash
open apps/desktop/release/mac-arm64/speraxos-desktop-dev.app
```

On Intel Macs the app is at `apps/desktop/release/mac/speraxos-desktop-dev.app`.

After changing only Electron code in `apps/desktop/src`, skip the web export:

```bash
cd apps/desktop && pnpm build-local
```

Installer builds (`.dmg`, Windows installer, Linux packages) use `pnpm build:mac`, `pnpm build:win` and `pnpm build:linux` in `apps/desktop`. The upstream guide is [docs/desktop-macos.md](https://github.com/nirholas/sperax/blob/main/docs/desktop-macos.md).

The renderer reads optional `.env.desktop` and `.env.desktop.local` from the repository root. Without them the app uses production defaults.
