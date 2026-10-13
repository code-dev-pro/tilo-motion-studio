import {z} from "zod";
export const audioMixerSchema=z.object({
 duckingEnabled:z.boolean().default(true),
 duckingLevel:z.number().min(0).max(1).default(.35),
 attack:z.number().min(.01).max(3).default(.25),
 release:z.number().min(.01).max(3).default(.4),
 masterVolume:z.number().min(0).max(2).default(1)
});
export type AudioMixerSettings=z.infer<typeof audioMixerSchema>;
export const defaultAudioMixer=():AudioMixerSettings=>audioMixerSchema.parse({});
