"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import {normalizeHandles,type BezierHandles} from "../../../src/bezier";
type Props={handles:BezierHandles;onChange:(handles:BezierHandles)=>void};
export function BezierCurveEditor({handles,onChange}:Props){
 const svg=useRef<SVGSVGElement>(null);
 const active=useRef<"in"|"out"|null>(null);
 const h=normalizeHandles(handles);
 const point=(x:number,y:number)=>({x:10+x*180,y:190-y*180});
 const a=point(h.x1,h.y1),b=point(h.x2,h.y2);
 function move(e:ReactPointerEvent<SVGSVGElement>){
  if(!active.current||!svg.current)return;
  const r=svg.current.getBoundingClientRect();
  const x=Math.max(0,Math.min(1,((e.clientX-r.left)/r.width*200-10)/180));
  const y=Math.max(-2,Math.min(3,(190-(e.clientY-r.top)/r.height*200)/180));
  onChange(active.current==="in"?{...h,x1:x,y1:y}:{...h,x2:x,y2:y});
 }
 return <div className="bezier-curve-editor"><svg ref={svg} viewBox="0 0 200 200" aria-label="Courbe de vitesse Bézier" role="img" onPointerMove={move} onPointerUp={e=>{move(e);active.current=null;e.currentTarget.releasePointerCapture(e.pointerId)}} onPointerCancel={()=>{active.current=null}}>
  <rect x="0" y="0" width="200" height="200" rx="8" fill="#242424"/>
  {[.25,.5,.75].map(v=><g key={v} stroke="#414141" strokeWidth=".65"><line x1={10+v*180} x2={10+v*180} y1="10" y2="190"/><line x1="10" x2="190" y1={10+v*180} y2={10+v*180}/></g>)}
  <path d="M10 190 L190 10" stroke="#777" strokeWidth="1" strokeDasharray="3 5" fill="none"/>
  <path d={`M10 190 L${a.x} ${a.y} M190 10 L${b.x} ${b.y}`} stroke="#9A9A9A" strokeWidth="1.6" strokeDasharray="5 4" fill="none"/>
  <path d={`M10 190 C${a.x} ${a.y} ${b.x} ${b.y} 190 10`} stroke="#F5F5F5" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
  <circle cx="10" cy="190" r="4" fill="#fff"/><circle cx="190" cy="10" r="4" fill="#fff"/>
  {([["in",a],["out",b]] as const).map(([id,p])=><circle key={id} cx={p.x} cy={p.y} r="8" fill="#292929" stroke="#FFFFFF" strokeWidth="2.5" style={{cursor:"grab",touchAction:"none"}} onPointerDown={e=>{e.preventDefault();e.stopPropagation();active.current=id;svg.current?.setPointerCapture(e.pointerId)}}/>)}
 </svg><div className="bezier-readout">P1 ({h.x1.toFixed(2)}, {h.y1.toFixed(2)}) · P2 ({h.x2.toFixed(2)}, {h.y2.toFixed(2)})</div></div>;
}
