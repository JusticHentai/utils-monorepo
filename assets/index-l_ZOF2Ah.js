const n=(t,i)=>{if(!t)return"";if(i===void 0)return t.trimStart();const r=new Set(i.split(""));let e=0;for(;e<t.length&&r.has(t[e]);)e++;return t.slice(e)};export{n as t};
