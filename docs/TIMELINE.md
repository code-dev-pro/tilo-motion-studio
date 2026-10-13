# Non-destructive timeline (initial version)

Select a recording. In the video track, click a clip to select it. Use **Couper** at the playhead to split, delete to ripple-remove, drag clips onto another clip to reorder, and Scene inspector trim buttons to adjust in/out points by 0.25 seconds. The original capture.webm remains unchanged.

The editor persists sourceIn/sourceOut/start in editor.json. Remotion preview and MP4 export use the same source segments through Sequence.

This is an initial timeline, not yet a full NLE. Precision trim handles, multi-source imports, audio tracks, snapping to other tracks, transition overlays and undo/redo are not implemented. Validate real footage in both preview and MP4 before merging.

Checks: pnpm test; pnpm typecheck; pnpm studio:build; pnpm studio.
