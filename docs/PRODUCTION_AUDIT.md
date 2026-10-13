# Tilo Motion Studio — production readiness audit

Date: 2026-10-13

This document distinguishes **confirmed source inspection**, **automated checks added**, and **manual validation pending**. No CI run or macOS export is claimed successful until results are observed.

## Findings from source inspection

| ID | Severity | Finding | Evidence | Required action |
|---|---|---|---|---|
| A-01 | High | Existing CI runs tests and typecheck but omits Next.js production build | .github/workflows/ci.yml | Add build gate (included in this PR) |
| A-02 | High | Browser-close handler can exit without running recording finalization | src/manual-recorder.ts, browser disconnected callback | Add robust close/finalization lifecycle and regression test |
| A-03 | Medium | Final frame statistics may be null if page is already closed | src/manual-recorder.ts, collectFrameStats | Persist periodic counters before closure |
| A-04 | Medium | Video trim uses ripple arrangement of later clips | src/timeline.ts, trimClip calls arrange | Add explicit ripple/no-ripple mode, then test |
| A-05 | Medium | Timeline history is snapshot-based and some gestures may produce multiple entries | apps/studio/app/page.tsx, patch and gesture code | Transactional history for all pointer gestures |
| A-06 | High | Permanent project deletion has no recovery bin | apps/studio/app/api/recordings/[id]/manage/route.ts | Add trash/recovery or backup policy |
| A-07 | Medium | Render path requires end-to-end validation of MP4, cursor, camera and audio | src/composition.tsx, src/render.ts | Add automated fixture render and media probe |
| A-08 | Medium | Capture data uses event timestamps that require sync validation against video | src/manual-recorder.ts | Compare frame-aligned events and source video |
| A-09 | Medium | Project operations may conflict with an active capture process | project management API | Add process-level locking |
| A-10 | Medium | Browser event smoke test absent from existing CI | recorderInitScript and CI | Add Chromium smoke (included in this PR) |

## Test matrix

| Stage | Test | Status |
|---|---|---|
| 1 | pnpm install --frozen-lockfile | CI configured, result pending |
| 2 | pnpm test | CI configured, result pending |
| 3 | pnpm typecheck | CI configured, result pending |
| 4 | pnpm studio:build | CI configured, result pending |
| 5 | Real Chromium pointer move/click | CI configured, result pending |
| 6 | Manual record start/stop and close-window finalization | Manual + automation needed |
| 7 | Timeline trim, scrubbing, zoom, Undo/Redo | Browser E2E needed |
| 8 | Animation keyframes, spatial tangents, save/reload | Browser E2E needed |
| 9 | Audio upload, voiceover, mix and ducking | Browser + export E2E needed |
| 10 | MP4 render validation with ffprobe | Automated integration needed |
| 11 | Duplicate/delete project with media | API integration needed |
| 12 | Mac-specific hardware/browser validation | User Mac required |

## Exit criteria for production 1.0

- CI green for tests, typecheck, production build and Chromium smoke.
- No critical/high-severity data-loss or export defects.
- Recording closes cleanly and always persists valid capture + events.
- Trim and scrubbing are accurate at 1× and 4× zoom.
- Save/reload reproduces the same scene and audio mix.
- MP4 export completes for landscape, portrait and square, with verified duration, dimensions and audio.
- Deletion requires confirmation and offers an intentional recovery/backup strategy.
- A complete real-world Tilo recording is produced end-to-end on macOS.

## Commands

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm studio:build
pnpm exec playwright install chromium
pnpm exec tsx src/audit-pointer-smoke.ts
```

This audit is an initial baseline; failures found by CI and end-to-end testing must be recorded and fixed before declaring the product production-ready.
