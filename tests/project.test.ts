import {describe,it,expect} from "vitest";
import {projectSchema,defaultProject} from "../src/project";
describe("project validation",()=>{
 it("provides defaults",()=>expect(defaultProject("demo").autoZoom).toBe(true));
 it("rejects traversal",()=>expect(()=>defaultProject("../etc")).toThrow());
 it("rejects malformed color",()=>expect(()=>projectSchema.parse({...defaultProject("demo"),background:"url(javascript:alert(1))"})).toThrow());
 it("validates timeline",()=>expect(projectSchema.parse({...defaultProject("demo"),clips:[{id:"intro",start:0,duration:2}]}).clips[0].transition).toBe("fade"));
});
