import {describe,it,expect} from 'vitest';
import {clampScene,timelineTime} from '../src/scene';
describe('scene editing',()=>{
 it('clamps scale and offsets',()=>expect(clampScene({fit:'contain',scale:3,offsetX:2,offsetY:-2})).toEqual({fit:'contain',scale:1.5,offsetX:1,offsetY:-1}));
 it('snaps timeline time',()=>expect(timelineTime(150,0,300,10)).toBe(5));
 it('clamps timeline time',()=>expect(timelineTime(500,0,300,10)).toBe(10));
});
