import {describe,it,expect} from "vitest";
import {audioTrackSchema} from "../src/audio-tracks";
import {audioMixerSchema,defaultAudioMixer} from "../src/audio-mixer";
import {mixedAudioGain} from "../src/audio-editing";
const music=audioTrackSchema.parse({id:"music",file:"audio-music.mp3",name:"Music",kind:"ambience",start:0,duration:20});
const voice=audioTrackSchema.parse({id:"voice",file:"audio-voice.wav",name:"Voice",kind:"voiceover",start:4,duration:4});
describe("Audio Mixer Pro",()=>{
 it("provides safe defaults",()=>expect(defaultAudioMixer().duckingLevel).toBe(.35));
 it("validates attack and gain",()=>expect(()=>audioMixerSchema.parse({attack:0})).toThrow());
 it("ducks music under narration",()=>expect(mixedAudioGain(music,[music,voice],5,defaultAudioMixer())).toBeCloseTo(.35));
 it("preserves voice gain",()=>expect(mixedAudioGain(voice,[music,voice],5,defaultAudioMixer())).toBe(1));
 it("uses independent attack and release",()=>{const m=defaultAudioMixer();expect(mixedAudioGain(music,[music,voice],3.875,m)).toBeGreaterThan(.35);expect(mixedAudioGain(music,[music,voice],8.2,m)).toBeGreaterThan(.35)});
 it("honors solo",()=>expect(mixedAudioGain(music,[music,{...voice,solo:true}],5,defaultAudioMixer())).toBe(0));
 it("honors mute and master",()=>expect(mixedAudioGain({...voice,muted:true},[voice],5,defaultAudioMixer())).toBe(0));
 it("can disable ducking",()=>expect(mixedAudioGain(music,[music,voice],5,{...defaultAudioMixer(),duckingEnabled:false})).toBe(1));
});
