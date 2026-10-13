import {z} from "zod";
export const advancedCameraSchema=z.object({
 mode:z.enum(["auto","manual","animate"]).default("auto"),
 amount:z.number().min(1).max(3).default(1.4),
 tiltX:z.number().min(-45).max(45).default(0),
 tiltY:z.number().min(-45).max(45).default(0),
 spinZ:z.number().min(-45).max(45).default(0),
 targetX:z.number().min(0).max(1).default(.5),
 targetY:z.number().min(0).max(1).default(.5),
 easing:z.enum(["smooth","linear"]).default("smooth")
});
export type AdvancedCameraSettings=z.infer<typeof advancedCameraSchema>;
export const defaultAdvancedCamera=():AdvancedCameraSettings=>advancedCameraSchema.parse({});
export const clamp01=(x:number)=>Math.max(0,Math.min(1,x));
