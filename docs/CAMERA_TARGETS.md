# Visual Camera Targets

This feature builds on Advanced Camera PR #19.

## Usage

1. Select a recording and choose **Éditer les cibles** in the preview toolbar.
2. Seek to a moment using the timeline transport.
3. Click directly on the raw video to add a camera target at that time.
4. Drag the numbered target to adjust its focal point; clicking a marker seeks to its time.
5. Choose **Terminer les cibles** to return to the cinematic Remotion preview.
6. Save and export. Target keyframes are persisted in editor.json.

The editing surface intentionally displays the **untransformed source capture** so target coordinates remain stable despite camera zoom, 3D tilt or output aspect ratio. Target coordinates are normalized to the source viewport.

## Limitations

This is the first visual target editor. Bezier path handles, per-keyframe easing, drag-to-retime in the overlay, target snapping, and perspective-correct overlay coordinates are not included. Verify actual rendered zooms in both Player and MP4. The source must be readable in the browser.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
```
