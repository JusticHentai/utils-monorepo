import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import range from '../../../packages/js-utils/src/range'

const basicDemo = () => {
  action('range(4)')({
    结果: range(4),
    说明: '生成 0 到 3 的数组',
  })

  action('range(1, 5)')({
    结果: range(1, 5),
    说明: '生成 1 到 4 的数组',
  })

  action('range(-4)')({
    结果: range(-4),
    说明: '生成 0 到 -3 的数组',
  })
}

export default basicDemo
`,o=`import { action } from 'storybook/actions'
import range from '../../../packages/js-utils/src/range'

const stepDemo = () => {
  action('range(0, 20, 5)')({
    结果: range(0, 20, 5),
    说明: '步长为 5',
  })

  action('range(0, -4, -1)')({
    结果: range(0, -4, -1),
    说明: '负步长',
  })
}

export default stepDemo
`,d=`import { action } from 'storybook/actions'
import rangeRight from '../../../packages/js-utils/src/rangeRight'

const rightDemo = () => {
  action('rangeRight(4)')({
    结果: rangeRight(4),
    说明: '降序生成数组',
  })

  action('rangeRight(1, 5)')({
    结果: rangeRight(1, 5),
    说明: '从 4 到 1',
  })
}

export default rightDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"range",children:"range"}),`
`,n.jsx(e.p,{children:"创建一个包含指定范围数字的数组。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"range"})," 函数用于生成数字序列数组，类似 Python 的 range 函数。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"range"})," - 升序生成"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rangeRight"})," - 降序生成"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"循环指定次数"}),`
`,n.jsx(e.li,{children:"生成索引数组"}),`
`,n.jsx(e.li,{children:"创建分页页码"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础范围",children:"基础范围"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"自定义步长",children:"自定义步长"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"rangeright---降序",children:"rangeRight - 降序"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"start"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始值（单参数时作为 end，start 默认 0）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"end"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"结束值（不含）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"step"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"步长，默认自动判断"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number[]"})]}),`
`,n.jsx(e.li,{children:"描述：数字数组"}),`
`]})]})}function m(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{m as default};
