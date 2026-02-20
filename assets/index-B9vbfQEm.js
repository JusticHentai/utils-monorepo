const l=(e,t)=>{if(!e)return"";if(t===void 0)return e.trimEnd();const i=new Set(t.split(""));let n=e.length-1;for(;n>=0&&i.has(e[n]);)n--;return e.slice(0,n+1)};export{l as t};
