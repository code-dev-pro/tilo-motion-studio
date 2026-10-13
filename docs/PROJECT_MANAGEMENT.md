# Project management — duplicate and delete

The Library panel now exposes contextual **Duplicate** and **Delete** actions for every local recording.

## Duplicate
- Proposes a collision-free name such as `tilo-demo-copy`.
- Copies the entire project folder, including `capture.webm`, `events.json`, `editor.json`, audio files, scenario, and existing exports.
- Updates the duplicated manifest and scenario identifiers.
- Opens the newly duplicated project, leaving the original unchanged.
- Rejects invalid names and existing destinations. Copy is staged in a temporary directory before publication.

## Delete
- Requires an explicit browser confirmation describing permanent deletion.
- Requires a matching confirmation header on the local-only API.
- Removes the project's directory, including media, audio and exports.
- Clears the editor when the currently open project is deleted.
- Blocks deleting the currently recording project in the UI.

## Validation
```bash
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

Create a sample project with audio and animation settings. Duplicate it, compare media, events and settings, modify the copy, and confirm the original remains intact. Cancel a delete confirmation, then delete only the copy and confirm the original is still available.

**Caution:** Delete is permanent and has no recycle bin. Only use the local Studio endpoint on port 3333. The API does not yet coordinate with a separate active recording process; avoid project management while a recording is running.
