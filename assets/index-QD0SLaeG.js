const r=i=>{const{cb:e,duration:l,immediate:n}=i;let t=null;return(...o)=>{if(!t)if(n){const u=!t;t=setTimeout(()=>{t=null},l),u&&e(...o)}else t=setTimeout(()=>{e(...o),t=null},l)}};export{r as t};
