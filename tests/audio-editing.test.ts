import {describe,it,expect} from "vitest";
import {clampAudioStart,duckingGain,waveformPeaks} from "../src/audio-editing";
import {audioTrackSchema} from "../src/audio-tracks";
const a=audioTrackSchema.parse({id:"amb",file:"audio-amb.mp3",kind:"ambience",name:"Music",start:0,duration:10});
const v=audioTrackSchema.parse({id:"voice",file:"audio-voice.mp3",kind:"voiceover",name:"Voice",start:3,duration:3});
describe("audio editing",()=>{
 it("ducks ambience under narration",()=>expect(duckingGain(a,[a,v],4)).toBeCloseTo(.35));
 it("restores music after narration",()=>expect(duckingGain(a,[a,v],8)).toBe(1));
 it("does not duck voice",()=>expect(duckingGain(v,[a,v],4)).toBe(1));
 it("snaps dragged clips to frames",()=>expect(clampAudioStart(2.01,10,3)).toBeCloseTo(2));
 it("generates waveform peaks",()=>expect(waveformPeaks(new Float32Array([0,.5,-1,.2]),2)).toEqual([.5,1]));
});
