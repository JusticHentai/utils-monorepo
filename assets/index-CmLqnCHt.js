const u=(t,i)=>{if(!t||t.length===0)return[];const s=[];for(const e of t)s.some(n=>i(e,n))||s.push(e);return s};export{u};
