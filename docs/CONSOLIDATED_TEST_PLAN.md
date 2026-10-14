# Consolidated production validation

This branch consolidates recording recovery, animation and audio integration tests into **one PR**.

## Checks

| Check | How | Gate |
|---|---|---|
| Vitest regression suite | `pnpm test` | Every PR |
| Root TypeScript | `pnpm typecheck` | Every PR |
| Next.js production build | `pnpm studio:build` | Every PR |
| Chromium pointer capture | `pnpm exec tsx src/audit-pointer-smoke.ts` | Every PR |
| Studio timeline and project APIs | `pnpm exec tsx src/audit-studio-e2e.ts` | Every PR |
| Editor persistence and Bézier | `tests/production-integration.test.ts` | Every PR |
| Audio trim/ducking | `tests/production-integration.test.ts` | Every PR |
| Recording recovery helpers | `tests/recording-recovery.test.ts` | Every PR |
| MP4 format/duration | Video export integration workflow | On demand |

## Remaining before production

- Headed macOS browser-close lifecycle must be verified end-to-end; recovery helper tests alone do not prove that a force-closed Chromium video is recoverable.
- Full audio-bearing MP4 verification (audio stream, gain, ducking) still needs a real fixture.
- Interactive drag tests for audio grips, spatial tangents and Undo grouping should be added to the browser suite.
- Full landscape/portrait/square export matrix should be run.
- User-facing performance and audiovisual quality must be checked on macOS.

## Merge criteria

Do not merge until CI shows all checks green. For the close-window scenario, do not mark it complete without a headed browser test and valid output files.
