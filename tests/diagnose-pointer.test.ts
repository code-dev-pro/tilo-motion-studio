import {describe,it,expect} from "vitest";
import {readFileSync} from "node:fs";
describe("pointer diagnostic harness",()=>{
 it("provides an executable isolated test",()=>{
  const source=readFileSync("src/diagnose-pointer.ts","utf8");
  expect(source).toContain('run("minimal")');
  expect(source).toContain('run("tilo"');
  expect(source).toContain("domProbe");
  expect(source).toContain("mouseProbe");
 });
});
