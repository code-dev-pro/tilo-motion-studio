# Arc UI resizable workspace

This PR integrates the **actual free Arc UI ResizablePanels source** from https://uiarc.dev/components/resizable-panels into `apps/studio/components/arc/resizable-panels`, with its CSS module and motion tokens. MIT license and attribution are retained in `apps/studio/components/arc/LICENSE`.

## Behavior

- Drag the divider between Library / Preview / Inspector to resize panels.
- Library and Inspector collapse when dragged beyond their minimum and can be restored using the Arc UI handle.
- Resize handles support keyboard navigation (Arrow keys, Home, End, Enter).
- Widths are persisted in browser localStorage.
- Drag the top edge of the timeline to change its height (160–600 px); ArrowUp / ArrowDown adjust it by 20px when focused.
- Existing recording, Player, scene controls and export logic are preserved.

## Install / validation

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Test on desktop: resize and collapse each side panel, reload and confirm widths persist, resize timeline and reload, select a capture, play/scrub, save settings and export MP4.

The new `motion` dependency is required by the Arc UI source. Do not deploy this local-only editor publicly.

## Next steps

The resizable layout is a foundation for migrating the inspector to more Arc UI components (Tabs, Slider, Select, Scroll Area, Tooltip, Dialog). This PR intentionally does **not** replace every existing control or change the Remotion engine.
