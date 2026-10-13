import {describe,it,expect} from "vitest";
import {validProjectId,copyProjectName} from "../src/project-management";
describe("project management",()=>{
 it("accepts safe ids",()=>expect(validProjectId("tilo-demo-2")).toBe(true));
 it("rejects path traversal",()=>expect(validProjectId("../tilo-demo")).toBe(false));
 it("rejects hidden and empty names",()=>{expect(validProjectId(".hidden")).toBe(false);expect(validProjectId("")).toBe(false)});
 it("rejects uppercase and spaces",()=>expect(validProjectId("My Project")).toBe(false));
 it("suggests noncolliding names",()=>expect(copyProjectName("demo",["demo-copy","demo-copy-2"])).toBe("demo-copy-3"));
});
