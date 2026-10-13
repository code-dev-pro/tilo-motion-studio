# Recorder diagnostic — live pointer self-test

This PR fixes a concrete bug: `frameStats` was initialized as an empty array but never populated before the browser context was closed. It now collects browser listener statistics **before** `context.close()`.

At startup, before the capture timer begins, Playwright performs a short **synthetic mouse movement** and records the bridge count delta plus frame listener stats. The synthetic movement is **not** written to `events.json`. It is diagnostic only.

After a new manual capture inspect `output/<id>/event-diagnostics.json`.

- `syntheticProbe.bridgeDelta > 0`: injected Playwright pointer movement reached the Node binding.
- `syntheticProbe.bridgeDelta === 0`: listeners did not transmit even synthetic pointer events. Inspect `syntheticProbe.stats` and any `RECORDER_FRAME_INSTALL_FAILED` logs.
- `frameStats[].stats.counts.pointermove > 0` but `summary.total === 0`: investigate bridge delivery/timing and active page.
- `syntheticProbe.bridgeDelta > 0` but final event counts remain zero: the real user interaction is likely occurring outside the recorded Chromium page, or browser input is not reaching the page.

Run `pnpm test && pnpm typecheck && pnpm studio:build` and record a fresh capture. The startup test moves the pointer but does not click anything. No synthetic event is included in the final event list.
