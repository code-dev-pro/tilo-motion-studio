import {describe,it,expect} from "vitest";
import {advancedCameraSchema,defaultAdvancedCamera,clamp01} from "../src/advanced-camera";
describe("advanced camera",()=>{
 it("has safe default",()=>expect(defaultAdvancedCamera().mode).toBe("auto"));
 it("accepts animated camera",()=>expect(advancedCameraSchema.parse({mode:"animate",tiltY:25}).tiltY).toBe(25));
 it("rejects invalid rotation",()=>expect(()=>advancedCameraSchema.parse({tiltX:80})).toThrow());
 it("clamps targets",()=>expect(clamp01(1.5)).toBe(1));
});
