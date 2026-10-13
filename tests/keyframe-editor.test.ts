import {describe,it,expect} from "vitest";
import {upsertPropertyKeyframe,movePropertyKeyframe,setPropertyEasing,removePropertyKeyframe,sampleProperty} from "../src/property-animation";
describe("keyframe editor",()=>{
 it("moves a keyframe to a frame-aligned time",()=>{const t=upsertPropertyKeyframe([],"y",0,120);expect(movePropertyKeyframe(t,"y",0,.51)[0].keyframes[0].t).toBeCloseTo(15/30)});
 it("changes easing without altering value",()=>{const t=upsertPropertyKeyframe([],"opacity",1,.5);const next=setPropertyEasing(t,"opacity",0,"linear");expect(next[0].keyframes[0]).toMatchObject({value:.5,easing:"linear"})});
 it("deletes one keyframe",()=>{const t=upsertPropertyKeyframe(upsertPropertyKeyframe([],"x",0,0),"x",1,100);expect(removePropertyKeyframe(t,"x",0)[0].keyframes).toHaveLength(1)});
 it("samples unsorted keyframes correctly",()=>{const t=upsertPropertyKeyframe(upsertPropertyKeyframe([],"x",0,0),"x",2,200);const moved=movePropertyKeyframe(t,"x",0,3);expect(sampleProperty(moved[0],2.5,0)).toBeGreaterThan(100)});
});
