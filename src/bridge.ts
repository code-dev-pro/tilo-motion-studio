export interface TiloDemoBridge{
 openDocument(id:string):Promise<void>;
 selectObject(id:string):Promise<void>;
 playAnimation(id:string):Promise<void>;
 seekAnimation(ms:number):Promise<void>;
 setCamera(camera:{x:number;y:number;zoom:number}):Promise<void>;
}
declare global{interface Window{__TILO_DEMO__?:TiloDemoBridge}}
/** Only install on an isolated, authenticated internal demo origin. Never in the public Tilo bundle. */
export function installDemoBridge(handlers:TiloDemoBridge){
 if(typeof window==="undefined")throw Error("Browser only");
 if(window.__TILO_DEMO__)throw Error("Already installed");
 window.__TILO_DEMO__=handlers;
 return ()=>{delete window.__TILO_DEMO__};
}
