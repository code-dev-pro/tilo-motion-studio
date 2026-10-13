# Professional Studio Workspace

The UI is reorganized into three areas: media library/recording on the left, Remotion Player with transport and timeline in the center, contextual inspector on the right.

## Workflow

1. Run `pnpm install`, `pnpm test`, `pnpm typecheck`, `pnpm studio:build`.
2. Start Tilo on localhost:3000, then `pnpm studio`.
3. Record or select an existing capture.
4. Preview in the central player, scrub the ruler, click interaction markers.
5. Add a camera keyframe at the playhead; select it in the timeline to edit its timing and focal coordinates.
6. Adjust camera, appearance and title tabs in the inspector.
7. Save, then export MP4.

## Scope and limitations

This is a shadcn-inspired dark workspace implemented with a local CSS design system and Lucide icons, **not yet a fully generated shadcn/ui component library**. The timeline has three visible lanes and editable keyframe properties, but it does not yet implement draggable clips, snapping, resize handles, or multiple audio/video tracks. Existing recording and rendering APIs are preserved.

Validate macOS browser rendering and the production build before merging. The Player preview and final export share the same Remotion composition.
