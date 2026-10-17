# Capture clock and audio fade regression

## Root causes

1. Playwright's `recordVideo` begins recording when the page is created, whereas `start` was previously assigned **after** navigation, listener checks and synthetic probes. The WebM and pointer events therefore had different time origins. Changing cursor easing cannot correct this.
2. Looping audio uses Remotion's default `loopVolumeCurveBehavior="repeat"`. This restarts the volume callback on every audio loop, so an envelope designed to fade out at the end of the *timeline clip* may never reach its final fade.

## Changes

- The recorder displays a 48×48 magenta calibration marker in the top-left corner for 500ms after diagnostic probes, before real interaction capture begins.
- FFmpeg scans the actual recorded WebM frames for the marker's last frame. On successful detection, it removes preroll with an accurate VP9 re-encode and uses the resulting media duration for the project.
- If trimming fails, the raw WebM is preserved and pointer events are offset to the marker position in the video; a warning is logged.
- If calibration cannot run, the recording is retained but its diagnostics explicitly identify the uncalibrated state.
- Iframe coordinates are translated before being clamped to the viewport.
- Looping audio uses `loopVolumeCurveBehavior="extend"`, keeping fade-in/out tied to clip duration rather than each music loop.
- Fade envelope calculation is extracted and unit-tested.

## Requirements

**FFmpeg and FFprobe must be on PATH** for automatic calibration. On macOS: `brew install ffmpeg`. The first finalized recording can take longer because the capture is re-encoded once to remove preroll.

## Validation before merge

Run `pnpm test`, `pnpm typecheck`, `pnpm studio:build` and the existing E2E suite. Then on macOS record a page with a moving slider, two distinct click targets, and no zoom. Confirm `event-diagnostics.json` reports a successful calibration and compare the raw slider thumb with the overlaid cursor in the preview and exported MP4. Repeat with auto zoom.

For audio, use a short looping ambience source (e.g. 1 second) placed on a 6-second clip with 2-second fade-in and 2-second fade-out. Export and verify the level rises initially and falls during the last 2 seconds; also check a non-looping voiceover.

## Limitations

A marker-based calibration removes **constant start-time offset**; it does not automatically correct clock drift, lost pointer events, variable frame pacing or nested transformed iframes. Pixel-perfect fidelity must be established by real-frame comparisons, not unit tests alone. If the marker cannot be detected, do not treat the capture as synchronized. Existing recordings are not retroactively modified.
