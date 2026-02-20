import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import zipWith from '../../../packages/js-utils/src/zipWith'

const zipWithDemo = () => {
  action('zipWith 演示')(zipWith([1, 2, 3]))
}

export default zipWithDemo
`,c=`import { action } from 'storybook/actions'
import zipWith from '../../../packages/js-utils/src/zipWith'

const edgeCaseDemo = () => {
  action('zipWith - 边界情况')({
    '求和': zipWith([1,2], [10,20], (a,b) => a+b), '空数组': zipWith([], [], (a,b) => a+b)
  })
}

export default edgeCaseDemo
`;function r(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"zipwith",children:"zipWith"}),`
`,n.jsx(i.p,{children:"类似于 zip，但可以指定如何组合分组的值"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"zipWith"})," 类似于 zip，但可以指定如何组合分组的值。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据处理和转换"}),`
`,n.jsx(i.li,{children:"功能组合和增强"}),`
`,n.jsx(i.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"zipWith"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"arrays"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"迭代器函数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"unknown"})]}),`
`,n.jsx(i.li,{children:"描述：返回分组元素的数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"zipWith/index.ts"})," 导出 zipWith 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 类似于 zip，但可以指定如何组合分组的值"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 使用 Math 内置方法"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{a as default};
