import {describe,it,expect} from "vitest";
import {environmentSchema,defaultEnvironment} from "../src/environment";
describe("environment",()=>{
 it("defaults to no lighting",()=>expect(defaultEnvironment().light).toBe("none"));
 it("validates softness",()=>expect(()=>environmentSchema.parse({softness:2})).toThrow());
 it("supports lighting presets",()=>expect(environmentSchema.parse({light:"foliage"}).light).toBe("foliage"));
});
