const c=(t,l)=>{if(!t?.length)return;let n=t[0],o=l(n);for(let e=1;e<t.length;e++){const u=l(t[e]);u>o&&(n=t[e],o=u)}return n};export{c as m};
