const e=(n,t)=>{if(!n)return"";const{maxLines:r=10}=t||{};return n.split(`
`).slice(0,r).map(i=>i.trim()).join(`
`)};export{e as f};
