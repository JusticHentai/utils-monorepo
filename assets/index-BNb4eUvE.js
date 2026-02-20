const u=(t,e)=>{if(!t?.length)return[];const n=[t[0]];let o=e(t[0]);for(let s=1;s<t.length;s++){const l=e(t[s]);l!==o&&(n.push(t[s]),o=l)}return n};export{u as s};
