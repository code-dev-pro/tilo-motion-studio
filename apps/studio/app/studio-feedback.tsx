"use client";
import {useEffect,useState} from "react";
import {CheckCircle2,AlertCircle,X} from "lucide-react";
type Notice={id:number;message:string;kind:"success"|"error"|"info"};
export function useStudioNotices(){
 const [notices,setNotices]=useState<Notice[]>([]);
 const notify=(message:string,kind:Notice["kind"]="info")=>setNotices(prev=>[...prev.slice(-3),{id:Date.now()+Math.random(),message,kind}]);
 const dismiss=(id:number)=>setNotices(prev=>prev.filter(n=>n.id!==id));
 return {notices,notify,dismiss};
}
export function StudioToasts({notices,dismiss}:{notices:Notice[];dismiss:(id:number)=>void}){
 return <div className="studio-toast-stack" role="region" aria-label="Notifications">{notices.map(n=><div className="studio-toast" data-kind={n.kind} key={n.id} role={n.kind==="error"?"alert":"status"}>{n.kind==="error"?<AlertCircle size={17}/>:<CheckCircle2 size={17}/>}<span>{n.message}</span><button aria-label="Fermer la notification" onClick={()=>dismiss(n.id)}><X size={15}/></button></div>)}</div>;
}
type DialogProps={kind:"duplicate"|"delete";name:string;initialName:string;busy:boolean;onCancel:()=>void;onConfirm:(value:string)=>void};
export function ProjectDialog({kind,name,initialName,busy,onCancel,onConfirm}:DialogProps){
 const [value,setValue]=useState(initialName);
 useEffect(()=>{setValue(initialName)},[initialName,kind]);
 return <div className="studio-dialog-backdrop" onPointerDown={e=>{if(e.target===e.currentTarget&&!busy)onCancel()}}><div role="dialog" aria-modal="true" aria-labelledby="studio-dialog-title" className="studio-dialog" onKeyDown={e=>{if(e.key==="Escape"&&!busy)onCancel()}}>
  <h2 id="studio-dialog-title">{kind==="delete"?"Supprimer le projet":"Dupliquer le projet"}</h2>
  <p>{kind==="delete"?<>Supprimer définitivement <strong>{name}</strong> et tous ses médias ? Cette action est irréversible.</>:<>Choisissez un nom pour la copie de <strong>{name}</strong>.</>}</p>
  {kind==="duplicate"&&<label>Nom de la copie<input autoFocus value={value} maxLength={80} onChange={e=>setValue(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")onConfirm(value)}}/></label>}
  <div className="studio-dialog-actions"><button className="btn" disabled={busy} onClick={onCancel}>Annuler</button><button className={"btn "+(kind==="delete"?"danger":"primary")} disabled={busy||kind==="duplicate"&&!value.trim()} onClick={()=>onConfirm(value)}>{kind==="delete"?"Supprimer définitivement":"Dupliquer"}</button></div>
 </div></div>;
}
