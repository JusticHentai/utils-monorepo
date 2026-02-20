const s=(r,n)=>{if(r==null)return r;for(const f of Object.keys(r))if(n(r[f],f,r)===!1)break;return r};export{s as f};
