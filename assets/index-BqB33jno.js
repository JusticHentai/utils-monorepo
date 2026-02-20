const u=(c,r)=>{const n=[],o=new Set;for(const t of c)if(t?.length)for(const e of t){const s=r(e);o.has(s)||(o.add(s),n.push(e))}return n};export{u};
