# Manual recorder DOM event probe

This diagnostic compares two independent event sources **before recording begins**:

1. `syntheticProbe`: Playwright mouse movement.
2. `domProbe`: explicit `PointerEvent` and `MouseEvent` dispatched to the element under the center of the page.

Both probes run before the capture timer starts, so their events are not written to `events.json`.

After a new recording, inspect `output/<id>/event-diagnostics.json`.

- DOM probe increments listener counts but Playwright probe does not: Chromium input routing/focus is suspect.
- Neither probe increments counts: event listeners are not attached to the effective DOM event path, or page scripts interfere.
- DOM counts increase but bridge count does not: inspect the exposed binding and delivery errors.
- Both probes succeed but real user input does not: confirm interactions occur in the Chromium capture window, not a separate browser.

Do not infer the root cause from `bridgeCount=1` alone. This PR is diagnostic and does not yet guarantee restored recording.
