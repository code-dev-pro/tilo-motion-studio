# Studio E2E regression suite

This PR adds a **real Chromium browser test** against the Next.js production server, using a disposable Playwright-generated WebM recording. It runs automatically in the main CI after the production build.

## Automated in PR CI

- Starts the production Studio at `127.0.0.1:3333`.
- Creates a valid temporary project with WebM, events, scenario and editor settings.
- Confirms project listing and detail retrieval.
- Rejects project deletion without the required confirmation header.
- Rejects duplicate creation with an invalid/same destination ID.
- Duplicates the project and verifies its manifest identifier.
- Opens the project in the Studio UI.
- Drags the timeline ruler and checks that the playhead time changes.
- Confirms the draggable playhead is visible.
- Trims the video clip using its right handle and verifies the timeline ruler remains fixed.
- Deletes the duplicate and confirms the original still exists.
- Cleans up temporary project directories and the server process group.

## On-demand export validation

GitHub Actions → **Video export integration** → Run workflow → choose landscape, portrait or square.

The same fixture is rendered through the actual Remotion CLI. FFprobe checks the MP4's duration and expected video dimensions.

Local equivalent after `pnpm studio:build` and `pnpm exec playwright install chromium`:

```bash
pnpm exec tsx src/audit-studio-e2e.ts
TILO_AUDIT_RENDER=landscape pnpm exec tsx src/audit-studio-e2e.ts
```

FFprobe must be installed for the export check.

## Not yet covered

- Closing headed Chromium and finalizing manual recording (requires a dedicated recorder lifecycle test).
- Dragging audio handles and validating mixed audio in the exported MP4.
- Save/reload of complex animations and Bézier handles.
- Undo/Redo across long drag gestures.
- Performance and audiovisual quality on macOS.

**Status:** test code has been added, but its results are pending GitHub Actions. Do not claim E2E success until CI is green.
