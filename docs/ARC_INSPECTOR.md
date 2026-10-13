# Arc native Inspector migration

The Studio now uses native Arc UI Tabs for inspector sections, Arc Slider for zoom, cursor size and video frame parameters, and Arc Select for source fit and output aspect ratio. The existing Arc Button and Switch are retained.

All components are the MIT-licensed Arc UI implementations vendored in `apps/studio/components/arc`, using Arc's native neutral theme tokens.

## Test

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Check every inspector tab, keyboard tab navigation, sliders updating Remotion preview, 16:9/9:16/1:1 selection, contain/cover, saving editor.json and MP4 export.

## Still to migrate

A number of dynamic sliders, switch controls, selection groups and custom inputs remain legacy UI. Future changes should replace these with Arc primitives carefully, preserving controlled values and avoiding excessive rerenders of Remotion Player. Menu, Dialog, Tooltip and Command Palette are not yet installed.
