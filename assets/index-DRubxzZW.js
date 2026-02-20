const m=e=>{const{onCombo:l,onClose:n,duration:c}=e;let t=0,o=null;return()=>{t++,l(t),o&&clearTimeout(o),o=setTimeout(()=>{t=0,n(),o=null},c)}};export{m as c};
