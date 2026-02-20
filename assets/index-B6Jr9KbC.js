const c=(t,u)=>{if(!t||t.length===0)return[];const e=new Set,n=[];for(const s of t){const o=u(s);e.has(o)||(e.add(o),n.push(s))}return n};export{c as u};
