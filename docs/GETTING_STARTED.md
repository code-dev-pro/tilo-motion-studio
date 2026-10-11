# Getting started

Requirements: Node 22+, pnpm 10+, Playwright Chromium, Remotion-compatible rendering environment.

```bash
pnpm install
pnpm exec playwright install chromium
cp .env.example .env
pnpm test
pnpm typecheck
```

Start fixture web server in a separate terminal:

```bash
python3 -m http.server 4173 --directory fixture
pnpm video:render --scenario fixture --format landscape
```

Output: `output/fixture/landscape.mp4`.

To integrate with Tilo, change `TILO_BASE_URL`, update scenario paths, and implement the internal bridge in Tilo's authorized demo deployment.

This branch is a first implementation, **not** a completed production studio. Video export and browser tests have not yet been executed on CI.
