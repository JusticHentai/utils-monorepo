const f=(t,i,e)=>{if(!t?.length)return-1;const s=e!==void 0?Math.min(e,t.length-1):t.length-1;for(let n=s;n>=0;n--)if(i(t[n],n,t))return n;return-1};export{f};
