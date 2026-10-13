# Arc UI — native neutral design system

The Studio defaults to `data-theme="dark" data-accent="neutral"` and imports the **original Arc UI foundation.css** before the Studio stylesheet. Legacy Studio colors are mapped to Arc semantic tokens rather than custom blue values.

The PR vendors the free MIT-licensed Arc UI Button, Tabs, Slider, Switch and Select components (including CSS modules) into `apps/studio/components/arc`. The header actions use the actual Arc Button and camera toggles use Arc Switch. The other components are available for the next migration stage; existing controls remain functional while they are migrated.

The Arc UI resizable panels from the previous PR remain in place. Free component source: https://github.com/kuratlielia/arc-library. License preserved in `apps/studio/components/arc/LICENSE`.

## Validate

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Verify neutral dark theme, no blue-tinted chrome, Arc header buttons and camera switches, resizable panels, timeline editing, save/export, preview and MP4. If a compile error occurs, do not merge until resolved.

## Remaining migration

Arc Tabs, Slider and Select are installed but not yet used in all inspector sections. Context menus, dialogs, tooltips, theme switch and other controls will be integrated in follow-up work. This PR does **not** claim full component migration.
