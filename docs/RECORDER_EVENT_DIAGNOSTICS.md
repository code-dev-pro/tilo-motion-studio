# Diagnosing empty manual capture events

The recorder now instruments both pointer and mouse events at the window capture phase. A pointer event is preferred; mouse events are used as a fallback. The browser script is registered with context.addInitScript and reinstalled idempotently in every existing frame after navigation.

After a new manual recording, inspect `output/<id>/event-diagnostics.json`:

- `bridgeCount`: number of messages delivered to the Playwright binding (including the startup probe).
- `sourceCounts`: binding messages grouped by frame URL.
- `frameStats`: each frame's installed flag and counts for pointermove, mousemove, pointerdown, mousedown, wheel, delivered and failed.
- `pageUrls`: page navigations and popup URLs.
- `summary`: events actually saved in `events.json`.

Interpretation: if all browser event counters are zero, the captured page did not receive physical pointer input (check the active Chromium window and frames). If counters are positive but delivered is zero, the binding failed. If delivered is positive but summary is empty, investigate timing or frame coordinate mapping.

Run `pnpm test && pnpm typecheck && pnpm studio:build` before merging. The presence of event counters is instrumentation, not proof of a successful capture.
