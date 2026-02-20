import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const conformsDemo = () => {
  const objects = [{ a: 2, b: 1 }, { a: 1, b: 2 }]
  action('conforms 演示')({
    'b > 1 的对象': objects.filter(conforms({ b: (n) => n > 1 })),
  })
}

export default conformsDemo
`,d=`import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const edgeCaseDemo = () => {
  const check = conforms({ b: (n: number) => n > 1 })

  action('conforms - 边界情况')({
    '满足': check({ a: 1, b: 2 }),
    '不满足': check({ a: 1, b: 0 }),
  })
}

export default edgeCaseDemo
`;function e(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"conforms",children:"conforms"}),`
`,n.jsx(s.p,{children:"创建一个函数，检查给定的对象是否符合约束条件"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"conforms"})," 创建一个函数，检查给定的对象是否符合约束条件。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"conforms"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"约束条件对象（每个属性为谓词函数）"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：返回新的谓词函数"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"conforms/index.ts"})," 导出 conforms 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 创建一个函数，检查给定的对象是否符合约束条件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(o={}){const{wrapper:s}={...c(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(e,{...o})}):e(o)}export{a as default};
