const i=(n,s)=>{if(n==null)return;const t=Object.keys(n);for(let e=t.length-1;e>=0;e--){const r=t[e];if(s(n[r],r,n))return r}};export{i as f};
