import {describe,it,expect} from "vitest";
import {backgroundSchema,backgroundCSS,defaultBackground,presetColors} from "../src/backgrounds";
describe("canvas backgrounds",()=>{
 it("provides gradient default",()=>expect(defaultBackground().mode).toBe("gradient"));
 it("rejects CSS injection",()=>expect(()=>backgroundSchema.parse({color:"url(javascript:alert(1))"})).toThrow());
 it("renders solid color",()=>expect(backgroundCSS(backgroundSchema.parse({mode:"color",color:"#123456"}))).toBe("#123456"));
 it("renders every preset",()=>{for(const preset of Object.keys(presetColors)){const css=backgroundCSS(backgroundSchema.parse({mode:"preset",preset}));expect(css).toContain("linear-gradient")}})
});
