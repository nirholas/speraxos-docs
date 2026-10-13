# Install the desktop app

SperaxOS Desktop is an Electron shell around the SperaxOS web workspace. It adds native menus, notifications and automatic updates, and signs in against `https://chat.sperax.io` by default.

## Current availability

No desktop installer has been published yet. Check <https://chat.sperax.io/download>, which reads the latest GitHub release and lists installers per platform. If it shows "No desktop release is published yet", [build from source](build-from-source.md) or use the web workspace at <https://chat.sperax.io>.

## When an installer is published

1. macOS: open the `.dmg` and drag SperaxOS to Applications.
2. Windows: run the `-setup.exe` and follow the installer.
3. Linux: `chmod +x` the `.AppImage` and run it, or install the `.deb` or `.rpm`.
4. Sign in with your SperaxOS account. The app updates itself afterwards.

Verify checksums from the release page before running an installer.
