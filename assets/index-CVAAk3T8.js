const r=(n,s)=>{if(!n.length)return[];const h=Math.max(...n.map(t=>t?.length||0)),e=[];for(let t=0;t<h;t++){const o=[];for(const l of n)o.push(l?.[t]);e.push(s(...o))}return e};export{r as z};
