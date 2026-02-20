const n=(e,l)=>{if(!e?.length)return[];let t=0;for(;t<e.length&&l(e[t],t,e);)t++;return e.slice(0,t)};export{n as t};
