# Final production gates — audio, animation, capture

This PR extends the existing Studio E2E suite rather than introducing a separate application or test runner.

## Automated

1. **Animations** — Save X/Y keyframes, custom temporal Bézier and spatial tangent handles through the Studio API; reload and assert exact persistence.
2. **Audio** — Generate temporary WAV tones using FFmpeg (ambience 220 Hz, voiceover 880 Hz), add them to the editor project, render the real Remotion composition, assert AAC audio is present and FFmpeg reports non-silent audio.
3. **Video** — Execute the three-format matrix (landscape, portrait, square), verify H.264, dimensions and duration.
4. **Existing regression** — Vitest, TypeScript, Next.js production build, Chromium pointer smoke, Studio browser timeline and project API tests.

## Remaining manual/macOS gates

Closing the actual headed Chromium window must finalize capture and preserve a playable WebM plus events, scenario and manifest. Test both the Studio Stop button and closing Chromium, then verify the Studio state changes to Ready. A forcibly killed browser may not produce a finalized WebM and must be reported as a failure, not silently treated as successful.

Audio tests verify presence and non-silence, **not** perceptual quality or exact ducking envelope. Complex audio trim/drag interactions, crash recovery, and multi-minute performance still need further end-to-end coverage.

## Commands

```bash
pnpm test
pnpm typecheck
pnpm studio:build
pnpm exec tsx src/audit-studio-e2e.ts
TILO_AUDIT_AUDIO=1 TILO_AUDIT_RENDER=landscape pnpm exec tsx src/audit-studio-e2e.ts
```

The video export workflow runs all three formats with `TILO_AUDIT_AUDIO=1` on GitHub Actions. Do not mark production readiness complete until all CI jobs pass and the headed macOS lifecycle is validated.
