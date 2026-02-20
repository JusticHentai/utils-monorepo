const h=(t,o)=>{if(!t?.length)return 0;let e=0,l=t.length;for(;e<l;){const n=Math.floor((e+l)/2);t[n]<o?e=n+1:l=n}return e};export{h as s};
