# Generic localhost recording compatibility

Motion Studio is designed to record **any locally hosted web application** at `http://localhost:<port>` or `http://127.0.0.1:<port>`. It does not require Tilo.

## Changed in this PR

- App title and visible product brand now use **Motion Studio**.
- Manual recording descriptions and default project titles are product-neutral.
- Default intro/outro titles no longer mention a specific product.
- URL validation messages explicitly describe the localhost-only restriction.
- Default sample recording ID is `product-demo`.
- Preferences use `motion-studio:*` localStorage keys while reading older `tilo:studio:*` values as a migration fallback.
- Existing recordings and their saved `editor.json`, `scenario.json`, and media are **not rewritten**.

## Compatibility intentionally preserved

- The GitHub repository and npm workspace retain their current names.
- The `TILO_BASE_URL`, `TILO_RECORDING_OPTIONS`, and `TILO_AUDIT_*` environment variables remain supported.
- The browser recorder bridge uses the existing `__tiloRecordEvent` protocol so older diagnostics and recordings continue to work.
- The built-in `moon-phases` sample scenario is retained; it is optional and not required for manual recording.

These historical technical identifiers can be migrated separately with explicit aliases and compatibility tests. Removing them without a migration could break scripts, CI and existing installations.

## Validation

```bash
pnpm test
pnpm typecheck
pnpm studio:build
pnpm exec tsx src/audit-pointer-smoke.ts
pnpm exec tsx src/audit-studio-e2e.ts
```

Check a fresh generic localhost recording and reopen an existing older project to confirm it remains readable. This PR has not yet been executed against a local macOS Studio.
