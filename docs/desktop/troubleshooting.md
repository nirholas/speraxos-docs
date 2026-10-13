# Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| Export step runs out of memory | The web export needs a 16 GB Node heap. Close other heavy apps or use a machine with 24 GB+. |
| App will not open on macOS ("unidentified developer") | Local builds are unsigned. Right-click the app, choose Open. |
| Cannot sign in | The app signs in against `https://chat.sperax.io`. Check connectivity there first. |
| Rebuild is slow | Only Electron code changed? Run `pnpm build-local` in `apps/desktop` and skip the web export. |
