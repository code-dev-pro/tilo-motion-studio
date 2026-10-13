import {describe,it,expect} from "vitest";
import {cameraFromClicks,sampleCamera,sampleCursor,smooth} from "../src/cinematic";
describe("cinematic interpolation",()=>{
 it("clamps easing",()=>{expect(smooth(-1)).toBe(0);expect(smooth(2)).toBe(1)});
 it("interpolates camera",()=>{const c=sampleCamera([{t:0,x:.5,y:.5,scale:1},{t:2,x:0,y:1,scale:2}],1);expect(c.scale).toBe(1.5);expect(c.x).toBe(.25)});
 it("generates click zoom",()=>expect(cameraFromClicks([{t:2,type:"click",x:100,y:200}],6,{width:200,height:400}).some(k=>k.scale>1)).toBe(true));
 it("tracks cursor",()=>expect(sampleCursor([{t:0,type:"move",x:0,y:0},{t:2,type:"move",x:100,y:100}],1)?.x).toBe(50));
 it("handles no cursor events",()=>expect(sampleCursor([],0)).toBeNull());
});
