import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function d(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"throttle",children:"throttle"}),`
`,n.jsx(e.p,{children:"创建一个节流函数，在指定时间内只执行一次。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"throttle"})," 函数用于限制函数的执行频率，保证在指定时间间隔内最多执行一次。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"时间戳：记录上次执行时间"}),`
`,n.jsx(e.li,{children:"定时器：处理 trailing 调用"}),`
`,n.jsx(e.li,{children:"闭包：保存状态和上下文"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"滚动事件：限制滚动监听的执行频率"}),`
`,n.jsx(e.li,{children:"鼠标移动：限制 mousemove 事件处理"}),`
`,n.jsx(e.li,{children:"按钮点击：防止短时间内多次点击"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"与 debounce 的区别"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"throttle：固定频率执行，保证一定时间内至少执行一次"}),`
`,n.jsx(e.li,{children:"debounce：延迟执行，连续触发时重置计时器"}),`
`]}),`
`,n.jsx(e.h2,{id:"配置选项",children:"配置选项"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"选项"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"leading"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"true"}),n.jsx("td",{children:"是否在延迟开始前调用"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"trailing"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"true"}),n.jsx("td",{children:"是否在延迟结束后调用"})]})]})]}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"Function"})}),n.jsx("td",{children:"要节流的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"节流时间间隔（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"ThrottleOptions"})}),n.jsx("td",{children:"配置选项"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsx(e.p,{children:"返回的节流函数包含以下方法："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cancel()"})," - 取消延迟的函数调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flush()"})," - 立即执行延迟的函数调用"]}),`
`]}),`
`,n.jsx(e.h2,{id:"实现原理",children:"实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"记录上次执行时间"}),`
`,n.jsx(e.li,{children:"每次调用时检查是否超过等待时间"}),`
`,n.jsx(e.li,{children:"超过则立即执行并更新时间戳"}),`
`,n.jsx(e.li,{children:"未超过则设置定时器在剩余时间后执行"}),`
`,n.jsx(e.li,{children:"leading 和 trailing 控制首尾执行行为"}),`
`]})]})}function j(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{j as default};
