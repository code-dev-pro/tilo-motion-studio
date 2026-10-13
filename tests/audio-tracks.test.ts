import {describe,it,expect} from "vitest";
import {audioTrackSchema,moveAudioTrack,trimAudioTrack} from "../src/audio-tracks";
const track=audioTrackSchema.parse({id:"voice-1",file:"audio-test.webm",kind:"voiceover",name:"Narration",start:1,duration:5});
describe("audio tracks",()=>{
 it("validates audio track",()=>expect(track.volume).toBe(1));
 it("rejects path traversal",()=>expect(()=>audioTrackSchema.parse({...track,file:"../secrets.mp3"})).toThrow());
 it("moves non destructively",()=>{expect(moveAudioTrack([track],track.id,4)[0].start).toBe(4);expect(track.start).toBe(1)});
 it("trims",()=>expect(trimAudioTrack([track],track.id,2)[0].duration).toBe(2));
});
