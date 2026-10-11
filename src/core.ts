import {z} from "zod";
export const formatSchema=z.enum(["landscape","portrait","square"]);
export type Format=z.infer<typeof formatSchema>;
export const sizes:Record<Format,{width:number;height:number}>={
 landscape:{width:1920,height:1080},portrait:{width:1080,height:1920},square:{width:1080,height:1080}
};
export const actionSchema=z.discriminatedUnion("type",[
 z.object({type:z.literal("navigate"),path:z.string().startsWith("/")}),
 z.object({type:z.literal("click"),selector:z.string().min(1)}),
 z.object({type:z.literal("drag"),selector:z.string().min(1),x:z.number(),y:z.number(),steps:z.number().int().positive().default(40)}),
 z.object({type:z.literal("wait"),ms:z.number().nonnegative()}),
 z.object({type:z.literal("bridge"),method:z.enum(["openDocument","selectObject","playAnimation","seekAnimation","setCamera"]),args:z.array(z.unknown())})
]);
export const scenarioSchema=z.object({
 id:z.string().regex(/^[a-z0-9-]+$/),title:z.string().min(1),
 viewport:z.object({width:z.number().int().positive(),height:z.number().int().positive()}).default({width:1920,height:1080}),
 actions:z.array(actionSchema).min(1),
 video:z.object({fps:z.number().int().min(24).max(60).default(30),duration:z.number().positive(),intro:z.string().default(""),outro:z.string().default(""),zoom:z.number().min(1).max(2).default(1.06)})
});
export type Scenario=z.infer<typeof scenarioSchema>;
export const defineScenario=(s:z.input<typeof scenarioSchema>):Scenario=>scenarioSchema.parse(s);
