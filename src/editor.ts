import {z} from "zod";
export const editorSchema=z.object({
 intro:z.string().max(160).default("Découvrez Tilo"),
 outro:z.string().max(160).default("Apprendre autrement"),
 zoom:z.number().min(1).max(1.7).default(1.06),
 autoZoom:z.boolean().default(true),
 cursor:z.boolean().default(true),
 background:z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#101827"),
 radius:z.number().int().min(0).max(48).default(24),
 shadow:z.boolean().default(true),
 camera:z.array(z.object({t:z.number().nonnegative(),x:z.number().min(0).max(1),y:z.number().min(0).max(1),scale:z.number().min(1).max(2)})).default([])
});
export type EditorSettings=z.infer<typeof editorSchema>;
export const defaultEditorSettings=():EditorSettings=>editorSchema.parse({});
