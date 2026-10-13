import {z} from "zod";
export const environmentSchema=z.object({
 padding:z.number().int().min(0).max(220).default(72),
 radius:z.number().int().min(0).max(70).default(24),
 light:z.enum(["none","window","blinds","rays","lattice","foliage","curtain"]).default("none"),
 opacity:z.number().min(0).max(1).default(.24),
 softness:z.number().min(0).max(1).default(.5),
 angle:z.number().min(-180).max(180).default(-20),
 vignette:z.number().min(0).max(1).default(.12),
 depth:z.number().min(0).max(1).default(.45)
});
export type EnvironmentSettings=z.infer<typeof environmentSchema>;
export const defaultEnvironment=():EnvironmentSettings=>environmentSchema.parse({});
