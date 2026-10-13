# Draggable playhead and fixed timeline scale

The timeline ruler is now independent from the movie's edited duration.

- **Movie duration** remains the actual duration of video clips, used by Remotion Player and export.
- **Timeline scale duration** is `max(sourceDuration, movieDuration)`. Trimming the right edge of a video clip therefore shortens the video **without rescaling the ruler or the positions of keyframes/audio clips**. The unused time remains visible on the timeline.
- The playhead can be dragged horizontally using its top triangular handle, or by scrubbing the ruler.
- Keyboard support: left/right arrows move one frame; Home goes to the start; End goes to the movie end.
- The playhead is clamped to the playable movie duration.
- Timeline zoom (1x–8x) remains a separate horizontal scroll/scale control.
- Audio/video clips and camera/property/click keyframes all use the same fixed timeline time axis.

## Validate

```bash
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

1. Open a 12-second recording and confirm ruler ends at 12 seconds.
2. Drag playhead from 2 to 8 seconds, checking the preview follows.
3. Trim the video right edge to 7 seconds. The clip becomes shorter but ruler stays at 12 seconds.
4. Drag playhead toward 10 seconds; it stops at 7 seconds.
5. Change timeline zoom to 4x, scroll and scrub again.
6. Verify audio and camera keyframes retain their original positions on the ruler.

Note: existing clip trim behavior still ripple-arranges subsequent video clips. This PR stabilizes the **timeline scale**, not the relative positions of later clips. Browser interaction and export validation are required before merge.
