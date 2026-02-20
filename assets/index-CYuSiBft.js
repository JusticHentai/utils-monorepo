const l=(e,i)=>{if(!e?.length)return[];let t=e.length-1;for(;t>=0&&i(e[t],t,e);)t--;return e.slice(t+1)};export{l as t};
