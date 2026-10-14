import {describe,it,expect} from "vitest";
import {defaultEditorSettings,editorSchema} from "../src/editor";
import {upsertPropertyKeyframe,sampleProperty,setPropertyBezier} from "../src/property-animation";
import {spatialPoints} from "../src/spatial-path";
import {spatialPosition,updateSpatialHandle} from "../src/spatial-handles";
import {trimAudioEdge,mixedAudioGain} from "../src/audio-editing";
import {audioTrackSchema} from "../src/audio-tracks";
import {createHistory,commitHistory,undoHistory,redoHistory} from "../src/timeline-pro";
describe("production editing integration",()=>{
 it("round-trips keyframes and spatial tangents through editor schema",()=>{
  const settings=defaultEditorSettings();let tracks=upsertPropertyKeyframe([],"x",0,0);tracks=upsertPropertyKeyframe(tracks,"x",2,200);tracks=upsertPropertyKeyframe(tracks,"y",2,100);
  settings.animationTracks=setPropertyBezier(tracks,"x",1,{x1:.3,y1:0,x2:.7,y2:1});
  settings.spatialHandles=updateSpatialHandle([], {t:0,x:0,y:0},"out",40,90);
  const loaded=editorSchema.parse(JSON.parse(JSON.stringify(settings)));
  expect(loaded).toEqual(settings);
  expect(sampleProperty(loaded.animationTracks.find(t=>t.property==="x"),1,0)).toBeGreaterThan(0);
  expect(spatialPosition(spatialPoints(loaded.animationTracks),loaded.spatialHandles,1).y).toBeGreaterThan(0);
 });
 it("undoes and redoes a grouped editing gesture",()=>{
  const initial=defaultEditorSettings();
  const next={...initial,animationTracks:upsertPropertyKeyframe([], "y",1,120)};
  const h=commitHistory(createHistory(initial),next);
  expect(undoHistory(h).present).toEqual(initial);
  expect(redoHistory(undoHistory(h)).present).toEqual(next);
 });
 it("trims audio and ducks ambience during voiceover",()=>{
  const ambience=audioTrackSchema.parse({id:"ambience",file:"audio-ambience.mp3",name:"Music",kind:"ambience",start:0,trimStart:0,duration:10,volume:1,muted:false,solo:false,fadeIn:0,fadeOut:0,loop:false});
  const voice=audioTrackSchema.parse({id:"voice",file:"audio-voice.mp3",name:"Voice",kind:"voiceover",start:2,trimStart:0,duration:4,volume:1,muted:false,solo:false,fadeIn:0,fadeOut:0,loop:false});
  const trimmed=trimAudioEdge(ambience,"right",-2,10);
  expect(trimmed.duration).toBe(8);
  const mixer=defaultEditorSettings().audioMixer;
  expect(mixedAudioGain(trimmed,[trimmed,voice],3,mixer)).toBeLessThan(mixedAudioGain(trimmed,[trimmed,voice],0,mixer));
 });
});
