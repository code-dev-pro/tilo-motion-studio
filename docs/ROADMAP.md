# Production completion checklist

## Implemented
- Local TypeScript CLI, Zod-validated scenarios, Playwright video capture
- Remotion composition, 3 export aspect ratios, Vitest unit tests
- Local-only Next.js launch dashboard with serialized render jobs
- GitHub Actions unit/type checks (not yet confirmed green)

## Still required before production
- Verify `pnpm install`, `pnpm test`, `pnpm typecheck`, and a real MP4 render on macOS
- Add E2E capture tests and visual snapshot assertions
- Confirm browser support for local-file video assets during Remotion bundling
- Add authenticated Tilo demo bridge and deterministic 3D animation hooks
- Implement timeline editing, reusable templates, transitions, cursor animation, audio tracks
- Add project persistence, render history, job cancellation, progress and preview
- Harden dashboard authentication if ever exposed outside localhost
- Validate licenses, resource budgets, output quality and error recovery

Do not describe this branch as production-ready until these gates are passed.
