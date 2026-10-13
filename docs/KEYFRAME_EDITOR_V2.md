# Keyframe Editor V2

This PR builds on the property-animation tracks introduced in PR #32.

- Drag X/Y/scale/rotation/opacity keyframes directly on their timeline tracks to retime them.
- Click a keyframe to select it, change its easing (linear, ease-in, ease-out, ease-in-out), or delete it.
- Use **Déplacer la scène** above the preview to drag the window and create X/Y keyframes at the current playhead time.
- Contextual tooltips describe the keyframe and its value.
- The original media remains non-destructive; property tracks are persisted in editor.json and rendered through the existing Remotion composition.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Open a capture, set two Y keyframes, retime one, change easing, drag the scene at a new playhead position, save/reload, then export MP4. Check that the preview matches export.

## Limitations

Bezier curve handles, arbitrary object layers and transform handles around individual scene elements are not yet implemented. The drag overlay edits the overall video window. Existing tooltip migration is incremental; older title attributes remain in other controls. Continuous drags may create multiple Undo history entries and need transactional refinement.
