import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import flatten from '../../../packages/js-utils/src/flatten'

const basicDemo = () => {
  action('flatten - 展开一层')({
    输入: [1, [2, [3, [4]], 5]],
    结果: flatten([1, [2, [3, [4]], 5]]),
    说明: '只展开一层嵌套',
  })
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import flattenDeep from '../../../packages/js-utils/src/flattenDeep'

const deepDemo = () => {
  action('flattenDeep - 完全展开')({
    输入: [1, [2, [3, [4]], 5]],
    结果: flattenDeep([1, [2, [3, [4]], 5]]),
    说明: '递归展开所有嵌套',
  })
}

export default deepDemo
`,d=`import { action } from 'storybook/actions'
import flattenDepth from '../../../packages/js-utils/src/flattenDepth'

const depthDemo = () => {
  action('flattenDepth - 展开 2 层')({
    输入: [1, [2, [3, [4]], 5]],
    深度: 2,
    结果: flattenDepth([1, [2, [3, [4]], 5]], 2),
  })
}

export default depthDemo
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"flatten",children:"flatten"}),`
`,n.jsx(e.p,{children:"将嵌套数组展开为平坦数组。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"flatten"})," 系列函数用于展开嵌套数组。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flatten"})," - 展开一层"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flattenDeep"})," - 完全展开所有嵌套"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flattenDepth"})," - 指定展开深度"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"处理嵌套数据结构"}),`
`,n.jsx(e.li,{children:"合并多层数组"}),`
`,n.jsx(e.li,{children:"数据扁平化"}),`
`]}),`
`,n.jsx(e.h2,{id:"flatten---展开一层",children:"flatten - 展开一层"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"flattendeep---完全展开",children:"flattenDeep - 完全展开"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"flattendepth---指定深度",children:"flattenDepth - 指定深度"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"any[]"})}),n.jsx("td",{children:"要展开的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"depth"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"展开深度（flattenDepth）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：展开后的新数组"}),`
`]})]})}function f(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{f as default};
