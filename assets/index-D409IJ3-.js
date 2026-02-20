const n=(...s)=>{const e=s.reverse();return(...l)=>{let r=e[0](...l);for(let t=1;t<e.length;t++)r=e[t](r);return r}};export{n as f};
