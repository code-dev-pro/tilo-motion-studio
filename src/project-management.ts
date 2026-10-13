export const projectIdPattern=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function validProjectId(id:unknown):id is string{return typeof id==="string"&&id.length>0&&id.length<=80&&projectIdPattern.test(id)}
export function copyProjectName(id:string,existing:readonly string[]):string{
 let candidate=id+"-copy",index=2;
 while(existing.includes(candidate)){candidate=id+"-copy-"+index;index++}
 return candidate;
}
