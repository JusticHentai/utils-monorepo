import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const emptyDemo = () => {
  const res = isEmptyObject({})
  action('检测空对象 {}')(res)
}

export default emptyDemo
`,r=`import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const notEmptyDemo = () => {
  const res = isEmptyObject({ a: 1 })
  action('检测非空对象 { a: 1 }')(res)
}

export default notEmptyDemo
`,m=`import { action } from 'storybook/actions'
import isEmptyObject from '../../../packages/js-utils/src/isEmptyObject'

const notObjectDemo = () => {
  const res = isEmptyObject([])
  action('检测数组 []')(res)
}

export default notObjectDemo
`;function s(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"isemptyobject",children:"isEmptyObject"}),`
`,n.jsx(t.p,{children:"isEmptyObject 是一个用于判断值是否为空对象的函数。"}),`
`,n.jsx(t.h2,{id:"空对象示例",children:"空对象示例"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"非空对象示例",children:"非空对象示例"}),`
`,n.jsx(o,{language:"typescript",children:r}),`
`,n.jsx(t.h2,{id:"非对象示例",children:"非对象示例"}),`
`,n.jsx(o,{language:"typescript",children:m}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(t.h3,{id:"obj",children:"obj"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"any"})]}),`
`,n.jsx(t.li,{children:"描述：要检测的值"}),`
`]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"boolean"})]}),`
`,n.jsxs(t.li,{children:["描述：如果值是空对象则返回 ",n.jsx(t.code,{children:"true"}),"，否则返回 ",n.jsx(t.code,{children:"false"})]}),`
`]})]})}function x(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
