const i=(r,e=String)=>{const n={};if(r==null)return n;for(const s of Object.keys(r)){const t=e(r[s]);t in n||(n[t]=[]),n[t].push(s)}return n};export{i};
