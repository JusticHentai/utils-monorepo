const a=n=>new Promise(r=>{const o=new Image;o.src=n,o.crossOrigin="anonymous",o.onload=()=>r([o,void 0]),o.onerror=()=>r([void 0,new Error(`[loadImage][图片加载失败]: ${n}`)])});export{a as l};
