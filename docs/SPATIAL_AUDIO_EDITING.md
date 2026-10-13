# Spatial paths and audio trim handles

## Spatial trajectory

Select a recording, create X/Y animation keyframes, then click **Trajectoire X/Y** above the preview. A smooth curve connects the X/Y positions at their keyed times. Numbered nodes can be dragged to update both X and Y at that exact time. Clicking a node seeks the playhead. The current interpolated position is shown as a white marker.

This is a spatial path visualization/editor for existing X/Y property tracks. It does not yet persist independent spatial tangent handles; the curve uses Catmull–Rom-derived cubic segments. Temporal easing remains controlled by the existing Bézier easing inspector.

## Audio trim

Audio waveform clips now have **distinct left/right white grips**. Drag the middle to move the clip, the left grip to adjust its source-in and timeline start, and the right grip to adjust its duration. The delta is calculated from the full timeline track width, so timeline zoom changes do not amplify trim motion. Grips are keyboard-accessible using left/right arrow keys (1 frame).

## Validate

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Check audio trim at 1x and 4x zoom, waveform clip move, no unintended timeline panel resize, spatial node dragging, save/reload, preview and MP4 export. The current Undo history may create multiple entries during continuous drag; transactional history is future work.
