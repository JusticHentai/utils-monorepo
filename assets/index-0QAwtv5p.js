const s=(n,r=0,l=" ")=>{if(n==null)return"";const t=String(n);if(r<=t.length||!l)return t;const i=r-t.length;let e="";for(;e.length<i;)e+=l;return e.slice(0,i)+t};export{s as p};
