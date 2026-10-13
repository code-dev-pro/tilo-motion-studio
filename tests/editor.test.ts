import {describe,it,expect} from "vitest";
import {editorSchema,defaultEditorSettings} from "../src/editor";
describe("editor configuration",()=>{
 it("has safe defaults",()=>expect(defaultEditorSettings().zoom).toBeGreaterThanOrEqual(1));
 it("rejects invalid backgrounds",()=>expect(()=>editorSchema.parse({background:"url(javascript:alert(1))"})).toThrow());
 it("validates camera coordinates",()=>expect(()=>editorSchema.parse({camera:[{t:1,x:2,y:.5,scale:1.4}]})).toThrow());
});
