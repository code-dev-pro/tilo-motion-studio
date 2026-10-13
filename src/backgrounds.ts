import {z} from "zod";
export const backgroundSchema=z.object({
 mode:z.enum(["color","gradient","preset"]).default("gradient"),
 color:z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#101827"),
 color2:z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#405cb5"),
 angle:z.number().min(0).max(360).default(135),
 preset:z.enum(["aurora","sunset","ocean","violet","graphite","peach","midnight","mint","ember"]).default("aurora")
});
export type BackgroundSettings=z.infer<typeof backgroundSchema>;
export const defaultBackground=():BackgroundSettings=>backgroundSchema.parse({});
export const presetColors:Record<BackgroundSettings["preset"],[string,string,string]>={
 aurora:["#071a34","#3157bc","#9c65b7"],sunset:["#25104e","#ed6679","#ffc58a"],
 ocean:["#081c3b","#1367aa","#3bd6cd"],violet:["#160f36","#6236aa","#e288cf"],
 graphite:["#090b11","#293342","#798393"],peach:["#4b214b","#dc6677","#f9caa0"],
 midnight:["#050916","#112c63","#5261b2"],mint:["#0b343a","#2a958d","#b7e3bd"],
 ember:["#2a0921","#a43b43","#f19a45"]
};
export function backgroundCSS(b:BackgroundSettings):string{
 if(b.mode==="color")return b.color;
 if(b.mode==="gradient")return `linear-gradient(${b.angle}deg,${b.color},${b.color2})`;
 const c=presetColors[b.preset];return `radial-gradient(ellipse at 20% 10%,${c[2]} 0%,transparent 52%),linear-gradient(${b.angle}deg,${c[0]},${c[1]})`;
}
