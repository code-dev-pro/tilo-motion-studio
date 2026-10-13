import {z} from "zod";
export const cursorSettingsSchema=z.object({
 visible:z.boolean().default(true),hideWhenIdle:z.boolean().default(false),
 style:z.enum(["default","white","hand","circle","modern","retro"]).default("modern"),
 size:z.number().min(.5).max(3).default(1.5),
 clickEffect:z.enum(["none","ripple","pulse","confetti"]).default("ripple"),
 movement:z.enum(["precise","subtle","smooth","fluid"]).default("smooth")
});
export type CursorSettings=z.infer<typeof cursorSettingsSchema>;
export const defaultCursorSettings=():CursorSettings=>cursorSettingsSchema.parse({});
