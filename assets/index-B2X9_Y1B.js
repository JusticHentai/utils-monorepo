const o=(r,n)=>{if(r==null)return!1;for(const e of Object.keys(n)){const s=n[e],t=r[e];if(t===void 0&&!(e in r)||!s(t))return!1}return!0},f=r=>n=>o(n,r);export{o as a,f as c};
