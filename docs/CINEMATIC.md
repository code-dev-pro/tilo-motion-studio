# Cinematic engine

The capture records timestamped cursor interactions to `output/<scenario>/events.json`.
The renderer reads those events and generates automatic zoom keyframes. Remotion renders a separate synthetic cursor and a framed application window with shadows.

## Current limits
- Real-time Playwright capture still has variable source FPS.
- Events are collected at Playwright mouse API level (not arbitrary user interaction inside Tilo).
- A browser-local `file://` video URL may require replacing with a served HTTP asset URL for reliable Chromium rendering.
- Zoom framing is an initial heuristic based on click coordinates.
- No motion-blur shader, multi-track editor, deterministic 3D frames, audio mixing, or template manager yet.
- A complete production release requires successful CI, MP4 smoke tests, and Tilo bridge integration.

## Manual validation
```bash
pnpm install
pnpm exec playwright install chromium
pnpm test
pnpm typecheck
python3 -m http.server 4173 --directory fixture
# In another terminal:
pnpm video:render --scenario fixture --format landscape
```
