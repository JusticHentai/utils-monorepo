import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isWindow from '../../../packages/js-utils/src/isWindow'

const windowDemo = () => {
  const res = isWindow(window)
  action('检测 window 对象')(res)
}

export default windowDemo
`,t=`import { action } from 'storybook/actions'
import isWindow from '../../../packages/js-utils/src/isWindow'

const notWindowDemo = () => {
  const res = isWindow({})
  action('检测普通对象 {}')(res)
}

export default notWindowDemo
`;function e(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"iswindow",children:"isWindow"}),`
`,n.jsx(o.p,{children:"isWindow 是一个用于判断对象是否是 window 的函数。"}),`
`,n.jsx(o.h2,{id:"window-示例",children:"window 示例"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(o.h2,{id:"非-window-示例",children:"非 window 示例"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(o.h3,{id:"el",children:"el"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"any"})]}),`
`,n.jsx(o.li,{children:"描述：要检测的对象"}),`
`]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"el is Window | T"})]}),`
`,n.jsxs(o.li,{children:["描述：如果对象是 window 则返回 ",n.jsx(o.code,{children:"true"}),"，否则返回 ",n.jsx(o.code,{children:"false"})]}),`
`]})]})}function a(i={}){const{wrapper:o}={...d(),...i.components};return o?n.jsx(o,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
