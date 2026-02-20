import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import curryRight from '../../../packages/js-utils/src/curryRight'

const curryRightDemo = () => {
  const abc = (a, b, c) => [a, b, c]
  const curried = curryRight(abc)
  action('curryRight 演示')({
    'curried(3)(2)(1)': curried(3)(2)(1),
    'curried(2, 3)(1)': curried(2, 3)(1),
  })
}

export default curryRightDemo
`,d=`import { action } from 'storybook/actions'
import curryRight from '../../../packages/js-utils/src/curryRight'

const edgeCaseDemo = () => {
  const abc = (a, b, c) => [a, b, c]
  const curried = curryRight(abc)
  action('curryRight - 边界情况')({
    '右向柯里化': curried(3)(2)(1),
    '一次传多参': curried(2, 3)(1),
  })
}

export default edgeCaseDemo
`;function e(c){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"curryright",children:"curryRight"}),`
`,n.jsx(r.p,{children:"类似 curry，但从右向左接受参数"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"curryRight"})," 类似 curry，但从右向左接受参数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据处理和转换"}),`
`,n.jsx(r.li,{children:"功能组合和增强"}),`
`,n.jsx(r.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"curryRight"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要柯里化的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"arity"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"需要提供给 func 的参数数量，默认为 func.length"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"unknown"})]}),`
`,n.jsx(r.li,{children:"描述：返回柯里化后的函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"curryRight/index.ts"})," 导出 curryRight 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 类似 curry，但从右向左接受参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(c={}){const{wrapper:r}={...s(),...c.components};return r?n.jsx(r,{...c,children:n.jsx(e,{...c})}):e(c)}export{a as default};
