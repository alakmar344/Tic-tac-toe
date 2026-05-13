# Tic-tac-toe

Minimalist neon Tic-Tac-Toe game with touch-friendly UX.

## Run locally in browser

Open `/home/runner/work/Tic-tac-toe/Tic-tac-toe/web/index.html` in a browser.

## Run tests

```bash
npm test
```

## Build APK locally

```bash
gradle :app:assembleDebug
```

The APK is generated at:

`/home/runner/work/Tic-tac-toe/Tic-tac-toe/app/build/outputs/apk/debug/app-debug.apk`

## GitHub Action

Workflow: `.github/workflows/build-apk.yml`

It builds the Android debug APK and uploads it as an artifact named `neon-tic-tac-toe-apk`.
