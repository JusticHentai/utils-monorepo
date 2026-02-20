const s=(e,l=0,r=" ")=>{if(e==null)return"";const t=String(e);if(l<=t.length||!r)return t;const i=l-t.length;let n="";for(;n.length<i;)n+=r;return t+n.slice(0,i)};export{s as p};
