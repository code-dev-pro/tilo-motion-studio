# Live Motion Studio Editor

The Studio now includes a Remotion Player preview for an existing manual recording.

## Install

```bash
git switch main
git pull origin main
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Open http://127.0.0.1:3333. Record Tilo or select an existing capture from the left sidebar.

## Editing

- Play and scrub the Remotion composition without exporting a new MP4.
- Choose output aspect ratio.
- Click the event markers to seek to recorded clicks.
- Add camera keyframes at the current playhead (t, normalized x/y, scale).
- Adjust automatic zoom, cursor visibility, background, frame radius, shadows, intro/outro.
- Save settings to `output/<id>/editor.json`; export MP4 using the same settings.

The editor is local-only and not intended for public deployment.

## Limitations

This is a live preview and parameter-based camera timeline, **not** yet a full draggable multitrack editor. Audio tracks, GPU motion blur, native macOS screen capture, deterministic 3D frame capture, per-clip transitions and automatic semantic target tracking are not implemented. Validate Player video decoding on macOS before merging.
