const c=(t,s,n)=>{if(!t?.length)return 0;const h=n(s);let e=0,l=t.length;for(;e<l;){const o=Math.floor((e+l)/2);n(t[o])<h?e=o+1:l=o}return e};export{c as s};
