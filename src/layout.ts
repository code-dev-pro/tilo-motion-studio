export type Dimensions={width:number;height:number};
export function fitInside(source:Dimensions,bounds:Dimensions):Dimensions{
 if(source.width<=0||source.height<=0||bounds.width<=0||bounds.height<=0)throw Error("Dimensions must be positive");
 const factor=Math.min(bounds.width/source.width,bounds.height/source.height);
 return {width:source.width*factor,height:source.height*factor};
}
