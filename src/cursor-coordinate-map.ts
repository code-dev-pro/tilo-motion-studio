export type Size={width:number;height:number};
export function mapVideoPoint(x:number,y:number,source:Size,target:Size,fit:"contain"|"cover"="contain"){
 if(source.width<=0||source.height<=0||target.width<=0||target.height<=0)throw Error("Invalid video dimensions");
 const scale=fit==="cover"?Math.max(target.width/source.width,target.height/source.height):Math.min(target.width/source.width,target.height/source.height);
 return {x:(target.width-source.width*scale)/2+x*scale,y:(target.height-source.height*scale)/2+y*scale};
}
