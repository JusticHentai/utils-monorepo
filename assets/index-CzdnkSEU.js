const u=(r,f=1)=>{if(!r?.length)return[];const n=(o,s)=>{const t=[];for(const e of o)Array.isArray(e)&&s>0?t.push(...n(e,s-1)):t.push(e);return t};return n(r,f)};export{u as f};
