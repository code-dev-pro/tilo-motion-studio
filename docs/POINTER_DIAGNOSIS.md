# Isolated pointer capture diagnosis

Run Tilo locally on port 3000, then from the repository root:

```bash
pnpm install
pnpm diagnose:pointer > pointer-diagnosis.json
```

This opens headless Chromium twice: once on a minimal HTML page, then on Tilo (`TILO_BASE_URL` or `http://localhost:3000/fr`). Each page receives the same installed recorder listeners, direct DOM pointer dispatch, Playwright mouse movement and a click. Results include listener counters, bridge delivery, first events and page errors.

- Minimal page fails: focus on recorder listener implementation, serialization, or Playwright runtime.
- Minimal succeeds, Tilo fails: investigate Tilo-specific page behavior, navigation and scripts.
- Both succeed: investigate the headed manual recorder lifecycle, active window and timing.

This diagnostic does not modify Tilo, save videos, or produce `events.json`. It does not generate synthetic events in production captures.

**Note:** `src/recorder-listeners.ts` currently mixes document and window listener targets and does not consistently abort all prior handlers. That should be fixed after obtaining comparative results rather than blindly adding more listeners.
