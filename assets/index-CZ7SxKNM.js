const u=(n,e)=>{const o=[];for(const s of n)if(s?.length)for(const t of s)o.some(r=>e(r,t))||o.push(t);return o};export{u};
