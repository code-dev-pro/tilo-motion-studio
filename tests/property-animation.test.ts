import {describe,it,expect} from "vitest";
import {sampleProperty,upsertPropertyKeyframe,animationTracksSchema} from "../src/property-animation";
describe("property animation",()=>{
 it("returns default with no track",()=>expect(sampleProperty(undefined,1,7)).toBe(7));
 it("interpolates position",()=>expect(sampleProperty({id:"property-y",property:"y",keyframes:[{t:0,value:100,easing:"linear"},{t:1,value:0,easing:"linear"}]},.5,0)).toBe(50));
 it("inserts and replaces keyframe",()=>{const one=upsertPropertyKeyframe([],"opacity",0,0);expect(upsertPropertyKeyframe(one,"opacity",0,1)[0].keyframes).toHaveLength(1)});
 it("rejects unknown property",()=>expect(()=>animationTracksSchema.parse([{id:"x",property:"unknown",keyframes:[]}])).toThrow());
});
