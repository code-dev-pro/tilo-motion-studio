import {describe,it,expect} from "vitest";
import {buildCameraTrack,easeCinematic,interpolateTrack,smoothCursor} from "../src/cinematic-v2";
describe("cinematic v2",()=>{
 it("eases with bounded cubic",()=>{expect(easeCinematic(-3)).toBe(0);expect(easeCinematic(4)).toBe(1);expect(easeCinematic(.5)).toBe(.5)});
 it("creates anticipatory zoom",()=>{const keys=buildCameraTrack([{t:3,type:"click",x:800,y:450}],8,{width:1600,height:900});expect(keys.some(k=>k.scale>1.4)).toBe(true);expect(keys[0].scale).toBe(1);expect(keys.at(-1)?.scale).toBe(1)});
 it("limits clustered zooms",()=>{const keys=buildCameraTrack([{t:2,type:"click",x:100,y:100},{t:2.1,type:"click",x:200,y:200}],7,{width:1600,height:900});expect(keys.filter(k=>k.scale>1).length).toBe(2)});
 it("interpolates keyframes",()=>{const a=interpolateTrack([{t:0,x:.5,y:.5,scale:1},{t:2,x:.7,y:.3,scale:1.5}],1);expect(a.scale).toBeCloseTo(1.25)});
 it("smooths cursor",()=>{const p=smoothCursor([{t:0,type:"move",x:0,y:0},{t:1,type:"move",x:100,y:100}],.5);expect(p?.x).toBeCloseTo(50)});
});
