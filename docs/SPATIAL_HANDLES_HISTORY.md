# Spatial handles and transactional Undo

The spatial trajectory overlay now exposes independent in/out tangent handles for X/Y keyframes. Drag a tangent to reshape the cubic path, or drag a numbered node to move a keyframe. Handles are stored as `spatialHandles` in editor.json and the same cubic interpolation is used by Remotion preview and MP4 export.

Pointer gestures on the spatial overlay are grouped into one Undo entry instead of creating a snapshot on every pointermove. The existing Undo/Redo history is in memory and capped at 50 entries.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Create at least two X/Y keyframes, open Trajectoire X/Y, drag a tangent, verify the rendered movement follows the curve, Undo once and confirm the entire drag is undone, Redo, save/reload and export MP4.

## Known limits

Temporal easing and spatial interpolation are separate. With custom spatial handles, the spatial curve uses linear segment time, while the existing temporal Bézier controls still govern other animated properties. A unified time-reparameterized spatial path and keyboard-accessible tangent handles remain future work. Continuous drags outside the spatial overlay may still create multiple Undo entries.
