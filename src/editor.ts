import {z} from "zod";
import {audioTracksSchema} from "./audio-tracks";
import {backgroundSchema} from "./backgrounds";
import {advancedCameraSchema} from "./advanced-camera";
import {environmentSchema} from "./environment";
import {cursorSettingsSchema} from "./cursor-settings";
import {clipSchema} from "./timeline";
import {defaultScene} from "./scene";
export const editorSchema=z.object({
 audioTracks:audioTracksSchema.default([]),
 canvasBackground:backgroundSchema.default(backgroundSchema.parse({})),
 advancedCamera:advancedCameraSchema.default(advancedCameraSchema.parse({})),
 environment:environmentSchema.default(environmentSchema.parse({})),
 cursorSettings:cursorSettingsSchema.default(cursorSettingsSchema.parse({})),
 intro:z.string().max(160).default("Découvrez Tilo"),
 outro:z.string().max(160).default("Apprendre autrement"),
 zoom:z.number().min(1).max(1.7).default(1.06),
 autoZoom:z.boolean().default(true),
 cursor:z.boolean().default(true),
 background:z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#101827"),
 radius:z.number().int().min(0).max(48).default(24),
 shadow:z.boolean().default(true),
 scene:z.object({fit:z.enum(["contain","cover"]),scale:z.number().min(.5).max(1.5),offsetX:z.number().min(-1).max(1),offsetY:z.number().min(-1).max(1)}).default(defaultScene),
 clips:z.array(clipSchema).default([]),
 camera:z.array(z.object({t:z.number().nonnegative(),x:z.number().min(0).max(1),y:z.number().min(0).max(1),scale:z.number().min(1).max(2)})).default([])
});
export type EditorSettings=z.infer<typeof editorSchema>;
export const defaultEditorSettings=():EditorSettings=>editorSchema.parse({});
