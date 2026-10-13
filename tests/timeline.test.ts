import {describe,it,expect} from "vitest";
import {arrange,splitClip,trimClip,moveClip,removeClip,sourceTimeAt,validateClips} from "../src/timeline";
const clips=arrange([{id:"a",start:0,sourceIn:0,sourceOut:4},{id:"b",start:4,sourceIn:4,sourceOut:10}]);
describe("non destructive timeline",()=>{
 it("splits without losing source duration",()=>{const out=splitClip(clips,"a",2);expect(out).toHaveLength(3);expect(out[1].sourceIn).toBe(2);expect(out[2].start).toBe(4)});
 it("trims and closes gaps",()=>{const out=trimClip(clips,"a","right",-1,10);expect(out[1].start).toBe(3)});
 it("reorders",()=>{const out=moveClip(clips,1,0);expect(out[0].id).toBe("b");expect(out[1].start).toBe(6)});
 it("deletes and ripples",()=>expect(removeClip(clips,"a")[0].start).toBe(0));
 it("maps edited time to original media",()=>expect(sourceTimeAt(clips,5)).toBe(5));
 it("rejects source overflow",()=>expect(()=>validateClips([{id:"x",start:0,sourceIn:0,sourceOut:15}],10)).toThrow());
});
