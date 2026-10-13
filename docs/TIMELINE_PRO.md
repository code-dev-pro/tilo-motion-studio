# Timeline Pro — first interaction pass

Adds project editor Undo/Redo history (50 snapshots), keyboard shortcuts, timeline zoom with horizontal scroll, magnetic snapping for camera keyframes and additive video clip selection.

Shortcuts: Cmd/Ctrl+Z undo, Cmd/Ctrl+Shift+Z or Ctrl+Y redo, Space play/pause, Delete/Backspace delete selected clips. Shift/Cmd/Ctrl click a clip for additive selection. Snap can be toggled in the timeline toolbar. Zoom buttons adjust 1× to 8×.

Existing source clips and media remain non-destructive. The new history is in-memory only and resets when switching recordings.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Verify: split a clip, undo and redo, drag a camera keyframe near an audio/video edge, turn snapping off, zoom timeline and scroll, select multiple clips, delete, reload, and export MP4.

## Known limitations

History is snapshot-based, not yet transaction-aware for all continuous slider changes. Camera drag history commits at pointer-up; UI inputs may still create multiple history entries while dragging. Timeline zoom is implemented via content width and horizontal scroll; advanced virtualized time-scale rendering, audio multi-selection, and fully draggable video trim handles are future work.
