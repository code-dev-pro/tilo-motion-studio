# Audio Mixer Pro

This release adds a configurable non-destructive mixer to the existing audio tracks.

- Master volume: 0–200%.
- Solo and mute per track.
- Automatic ambience ducking when voiceover is active.
- Ducking music level: 0–100% (35% by default).
- Attack and release: independently configurable from 0.01–3 seconds.
- Controls use Arc Slider rolling counters and Arc Switch.
- The same deterministic frame-local gain function is used in Remotion preview and MP4 export.
- Backward compatibility: older projects without `audioMixer` receive defaults, and tracks without `solo` default to false when validated.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Create a project with an ambience and a voiceover, test mute and solo, set the ducking level to 20%, and export MP4. Confirm fade attack/release, master volume, persistence after reload, and audio parity in the exported file.

## Scope

This PR improves mixing controls; the existing waveform drag and trim implementation is unchanged. No noise reduction, limiter, loudness normalization or automatic speech detection is included. Ducking uses voiceover clip intervals, not voice activity detection.
