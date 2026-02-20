const s=({fn:o,retryCount:n})=>async(...a)=>{let r=n,t;for(;r;){const[e,i]=await o(...a);if(e)return[e,void 0];t=i,r--}return[void 0,t]};export{s as r};
