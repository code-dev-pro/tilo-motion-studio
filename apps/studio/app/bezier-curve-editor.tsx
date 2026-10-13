"use client";
import {useRef} from "react";
import {bezierProgress,defaultBezier,normalizeHandles,type BezierHandles} from "../../../src/bezier";
type Props={handles:BezierHandles;onChange:(handles:BezierHandles)=>void};
export function BezierCurveEditor({handles,onChange}:Props){
 const ref=useRef<SVGSVGElement>(null);
 const drag=useRef<"in"|"out"|null>(null);
 const h=normalizeHandles(handles);
 function update(e:React.PointerEvent<SVGSVGElement>){
  if(!drag.current||!ref.current)return;
  const r=ref.current.getBoundingClientRect();
  const x=Math.max(0,Math.min(1,(e.clientX-r.left)/Math.max(1,r.width)));
  const y=Math.max(-2,Math.min(3,1-(e.clientY-r.top)/Math.max(1,r.height)));
  onChange(drag.current==="in"?{...h,x1:x,y1:y}:{...h,x2:x,y2:y});
 }
 const p=(x:number,y:number)=>({x:10+x*180,y:190-y*180});
 const a=p(h.x1,h.y1),b=p(h.x2,h.y2);
 return <div className="bezier-curve-editor"><svg ref={ref} viewBox="0 0 200 200" role="img" aria-label="Éditeur de courbe Bézier" onPointerMove={update} onPointerUp={e=>{update(e);drag.current=null}} onPointerCancel={()=>{drag.current=null}}>
  <rect width="200" height="200" fill="var(--surface-muted)" rx="8"/>
  {[.25,.5,.75].map(v=><g key={v} stroke="var(--border)"><line x1={10+v*180} x2={10+v*180} y1="10" y2="190"/><line x1="10" x2="190" y1={10+v*180} y2={10+v*180}/></g>)}
  <path d={`M10 190 C${a.x} ${a.y} ${b.x} ${b.y} 190 10`} stroke="var(--foreground)" strokeWidth="2.5" fill="none"/>
  <path d={`M10 190 L${a.x} ${a.y} M190 10 L${b.x} ${b.y}`} stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
  {([["in",a],["out",b]] as const).map(([id,v])=><circle key={id} cx={v.x} cy={v.y} r="9" fill="var(--accent)" stroke="var(--foreground)" strokeWidth="2" onPointerDown={e=>{e.stopPropagation();drag.current=id;e.currentTarget.setPointerCapture(e.pointerId)}}/>)}
 </svg><div className="bezier-readout">({h.x1.toFixed(2)}, {h.y1.toFixed(2)}) → ({h.x2.toFixed(2)}, {h.y2.toFixed(2)})</div></div>;
}
