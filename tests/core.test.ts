import {describe,it,expect} from "vitest";
import {defineScenario,sizes,scenarioSchema} from "../src/core";
describe("scenarios",()=>{
 it("sets defaults",()=>expect(defineScenario({id:"demo",title:"Demo",actions:[{type:"wait",ms:0}],video:{duration:2}}).video.fps).toBe(30));
 it("rejects traversal",()=>expect(()=>scenarioSchema.parse({id:"../secret",title:"X",actions:[{type:"wait",ms:1}],video:{duration:2}})).toThrow());
 it("rejects empty click selectors",()=>expect(()=>defineScenario({id:"a",title:"A",actions:[{type:"click",selector:""}],video:{duration:2}})).toThrow());
 it("exports vertical geometry",()=>expect(sizes.portrait.height).toBeGreaterThan(sizes.portrait.width));
});
