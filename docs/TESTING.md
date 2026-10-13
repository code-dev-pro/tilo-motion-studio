# Global validation (macOS)

## Install

```bash
corepack enable
pnpm install
pnpm exec playwright install chromium
pnpm test
pnpm typecheck
pnpm studio:build
```

## Automated smoke test

```bash
pnpm smoke
```

The smoke test runs a local fixture server, captures Chromium WebM, renders H.264 MP4 with Remotion and checks the output signature.

## Studio manual acceptance

```bash
python3 -m http.server 4173 --directory fixture
# Separate terminal
pnpm studio
```

Open http://127.0.0.1:3333. Create a project, add timeline captions and camera keyframes, set intro/outro, enable cursor, save, export landscape, portrait and square, open the output videos. Check that projects survive a restart.

## Tilo integration

Replace the fixture scenario with real URLs and selectors. Tilo's Demo Bridge must be implemented separately in an internal authenticated deployment. Never enable the bridge on the public application.

## Known limitations

The editing UI controls a declarative timeline, not a drag-and-drop multitrack video editor. There is no GPU motion blur, perspective-3D keyframe editor, background removal, deterministic WebGL recording, cloud queue or AI-driven camera tracking. Browser capture source FPS is not guaranteed. Treat these as follow-on work, not implemented capabilities.
