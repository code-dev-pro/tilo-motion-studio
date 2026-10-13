import {describe,it,expect} from "vitest";
import {pointFromRect,upsertCameraTarget} from "../src/camera-targets";
describe("camera target editor",()=>{
 it("maps pointer to normalized viewport",()=>expect(pointFromRect(150,100,{left:50,top:50,width:200,height:100})).toEqual({x:.5,y:.5}));
 it("clamps outside pointer",()=>expect(pointFromRect(999,-1,{left:0,top:0,width:200,height:100})).toEqual({x:1,y:0}));
 it("inserts ordered keyframes",()=>expect(upsertCameraTarget([{t:2,x:.5,y:.5,scale:1}],1,.2,.3,1.5)[0].t).toBe(1));
 it("updates same frame",()=>expect(upsertCameraTarget([{t:1,x:.5,y:.5,scale:1}],1,.2,.3,1.5)).toHaveLength(1));
});
