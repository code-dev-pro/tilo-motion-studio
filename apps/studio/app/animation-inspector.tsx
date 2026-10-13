"use client";
import {Slider} from "@/components/arc/slider/slider";
import {Tooltip} from "./tooltip";
import {upsertPropertyKeyframe,sampleProperty,propertyDefaults,type AnimationTrack,type AnimatedProperty} from "../../../src/property-animation";
type Props={tracks:AnimationTrack[];time:number;onChange:(tracks:AnimationTrack[])=>void};
const properties:[AnimatedProperty,string,number,number,number][]=[["x","Position X",-1000,1000,1],["y","Position Y",-1000,1000,1],["scale","Échelle",.1,3,.01],["rotation","Rotation",-180,180,1],["opacity","Opacité",0,1,.01]];
export function AnimationInspector({tracks,time,onChange}:Props){
 return <section className="animation-inspector"><div className="section-title">Animation</div><p className="hint">Déplace la tête de lecture puis ajuste une propriété pour créer une keyframe.</p>
 {properties.map(([property,label,min,max,step])=>{const track=tracks.find(t=>t.property===property);const value=sampleProperty(track,time,propertyDefaults[property]);const active=track?.keyframes.some(k=>Math.abs(k.t-time)<1/60);
 return <div key={property} className="animation-property-row"><Slider label={label} min={min} max={max} step={step} value={value} onValueChange={v=>onChange(upsertPropertyKeyframe(tracks,property,time,v))}/><Tooltip content={active?"Keyframe présente":"Ajouter une keyframe"}><button className={"btn icon property-diamond "+(active?"active":"")} aria-label={"Ajouter une keyframe "+label} onClick={()=>onChange(upsertPropertyKeyframe(tracks,property,time,value))}>◆</button></Tooltip></div>})}
 </section>;
}
