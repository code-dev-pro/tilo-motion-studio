# Motion Studio — Canvas and Arc UI adoption

This change adds a first production-ready canvas background inspector with nine procedural gradient presets, custom colors and angle. The same background settings are consumed by Remotion Player and MP4 renderer.

## Arc UI

The Studio now contains `apps/studio/components.json` configured with the official `@uiarc` registry and a local `@/*` TypeScript alias. **Arc components are not yet installed or imported by the application.** The existing UI remains operational without installing Arc.

After testing the current PR, install Arc components deliberately from the Studio package directory:

```bash
cd apps/studio
pnpm dlx shadcn@latest add @uiarc/arc-foundation
pnpm dlx shadcn@latest add @uiarc/button @uiarc/dialog @uiarc/slider @uiarc/tabs
```

Then import `@/components/arc/foundation.css` in `app/layout.tsx` after verifying the generated path. Migrate one panel at a time; do not overwrite the Remotion Player or timeline engine.

The Arc free library is MIT licensed; Pro components have separate licensing terms. Review https://uiarc.dev/license before using Pro code.

## Validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
```

Open a capture, select Canvas, change between color, gradient and preset modes, save and export. Compare the preview with the MP4.

## Known limitations

No user-image upload or background image library in this PR. Backgrounds are CSS gradients; they do not require network access. Arc UI itself is configured but not yet visually integrated. The next UI PR should migrate the toolbar and inspector to actual Arc components and add resizable panels.
