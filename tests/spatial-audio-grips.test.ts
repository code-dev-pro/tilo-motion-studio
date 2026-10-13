import {describe,it,expect} from "vitest";
import {spatialPoints,spatialPath} from "../src/spatial-path";
import {upsertPropertyKeyframe} from "../src/property-animation";
import {pointerDeltaSeconds} from "../src/trim-geometry";
import {trimAudioEdge} from "../src/audio-editing";
import {audioTrackSchema} from "../src/audio-tracks";
describe("spatial motion and audio grips",()=>{
 it("combines x and y keyframes by time",()=>{let t=upsertPropertyKeyframe([],"x",0,0);t=upsertPropertyKeyframe(t,"x",2,200);t=upsertPropertyKeyframe(t,"y",1,40);expect(spatialPoints(t).map(p=>p.t)).toEqual([0,1,2])});
 it("creates a smooth cubic path",()=>{const d=spatialPath([{t:0,x:0,y:0},{t:1,x:80,y:60}],400,300);expect(d).toContain(" C");expect(d).toContain("M200 150")});
 it("uses full track width for audio trim at zoom",()=>expect(pointerDeltaSeconds(100,1000,20)).toBe(2));
 it("keeps source audio immutable when trimming",()=>{const a=audioTrackSchema.parse({id:"a",file:"audio-a.mp3",kind:"ambience",name:"Music",start:1,duration:10});const next=trimAudioEdge(a,"left",2,20);expect(next.start).toBe(3);expect(next.trimStart).toBe(2);expect(a.start).toBe(1)});
});
