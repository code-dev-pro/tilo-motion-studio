import {describe,it,expect} from "vitest";
import {fitInside} from "../src/layout";
describe("aspect ratio",()=>{
 it("preserves 16:10 in 16:9",()=>{
  const frame=fitInside({width:1440,height:900},{width:1728,height:853.2});
  expect(frame.width/frame.height).toBeCloseTo(1.6,8);
  expect(frame.height).toBeCloseTo(853.2,6);
 });
 it("preserves 16:9 in portrait",()=>{
  const frame=fitInside({width:1920,height:1080},{width:972,height:1516.8});
  expect(frame.width/frame.height).toBeCloseTo(16/9,8);
 });
});
