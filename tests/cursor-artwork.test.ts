import {describe,it,expect} from "vitest";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {CursorArtwork} from "../src/cursor-artwork";
describe("cursor style thumbnails",()=>{
 it("renders each style as actual cursor artwork",()=>{
  const styles=["default","white","hand","circle","modern","retro"] as const;
  const html=styles.map(style=>renderToStaticMarkup(React.createElement(CursorArtwork,{style,size:28})));
  expect(html.every(markup=>markup.includes("<svg"))).toBe(true);
  expect(html[2]).toContain('viewBox="0 0 32 42"');
  expect(html[3]).toContain("<circle");
  expect(html[1]).toContain('fill="#fff"');
  expect(html[0]).toContain('fill="#151b2a"');
 });
});
