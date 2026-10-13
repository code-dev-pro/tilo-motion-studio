# Tilo Motion Studio

Independent local video production tool for Tilo: Playwright browser capture, timestamped interactions, Remotion cinematic compositions and a Next.js project editor.

## Quick start

Requirements: Node 22+, pnpm 10+, Playwright Chromium and a macOS/Linux environment capable of rendering Remotion videos.

```bash
corepack enable
pnpm install
pnpm exec playwright install chromium
pnpm test
pnpm typecheck
pnpm studio:build
pnpm smoke
```

## Studio

Start a fixture site in a separate terminal:

```bash
python3 -m http.server 4173 --directory fixture
```

Start the studio:

```bash
pnpm studio
```

Open **http://127.0.0.1:3333**. Create/save a project, edit its intro/outro, caption timeline, camera keyframes, cursor, colors, audio volume and framing, then export.

Projects persist as JSON in `projects/`; outputs are written to `output/<scenario>/`. These directories are intentionally gitignored.

## CLI

```bash
pnpm video:render --scenario fixture --format landscape
pnpm video:batch --scenario fixture
pnpm video:render --project video-example
```

The last command requires an existing `projects/video-example.json`.

## Architecture

- `src/core.ts` — Zod scenario validation and export formats
- `src/capture.ts` — Playwright capture and interaction metadata
- `src/cinematic.ts` — camera easing, auto-zoom, cursor interpolation
- `src/composition.tsx` — Remotion scene with title cards, captions, synthetic cursor and audio
- `src/media.ts` — temporary localhost media server for Remotion Chromium
- `src/render.ts` — MP4 export
- `src/project.ts` — project schema and persistence
- `apps/studio` — local Next.js dashboard, project API, export browser
- `scripts/smoke.ts` — real browser capture and MP4 smoke test

## Status

This is a development implementation awaiting macOS smoke tests and actual Tilo integration. The existing `moon-phases` scenario is a placeholder until the real application route and demo hooks are supplied. A fully visual multi-track editor, deterministic 3D capture, perspective transforms, advanced motion blur, and automatic subject detection remain outside this implementation.

See [global test procedure](docs/TESTING.md) and [cinematic notes](docs/CINEMATIC.md).
