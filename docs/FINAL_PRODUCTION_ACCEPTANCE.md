# Tilo Motion Studio — final production acceptance

## Automated CI gates

- `pnpm test`, `pnpm typecheck`, `pnpm studio:build`.
- Chromium pointer capture and Studio browser E2E.
- Video export integration matrix: landscape 1920×1080, portrait 1080×1920, square 1080×1080.
- FFprobe must confirm H.264 and 3.00 seconds ± 0.15 seconds for each synthetic fixture.

The matrix is available from GitHub Actions → **Video export integration** → **Run workflow**. It also runs on PRs touching rendering/audio or the test workflow.

## Real-world Tilo acceptance (macOS)

Create a fresh project (do not reuse a production project). Capture 20–40 seconds of Tilo with clicks, cursor movement and scrolling. Close the capture Chromium window normally and verify that Studio shows the completed project, `capture.webm`, `events.json` with actual events, `manifest.json`, and `scenario.json`.

Edit the recording: scrub the playhead, trim the right edge while the ruler stays fixed, split and reorder clips, add at least two X/Y keyframes and a custom Bézier easing. Add ambience and voiceover, adjust trim handles, fade and ducking. Save, reload, and confirm no settings or media were lost. Undo/redo several gestures and compare preview with output.

Export each format. Verify cursor position/click effects, transitions, zoom focus, no black frames, correct audio mix, no distortion and acceptable encoding time. Test canceling deletion, duplicating the project, editing the copy, and deleting only the copy.

## Release decision

Automated green status is **necessary, not sufficient**. Do not declare production ready until the headed macOS close-window scenario, real audio-bearing MP4, complex animation save/reload, and subjective playback quality are confirmed.

## Known gaps

- Full headed Chromium close lifecycle has no automated macOS E2E gate.
- FFprobe synthetic fixture does not currently contain an audio track, so audio codec/mix fidelity is unverified.
- No automated performance benchmark for long captures or large timelines.
- Permanent project deletion lacks a recycle bin.

Record any failures as GitHub issues with exact reproduction steps, logs and expected behavior.
