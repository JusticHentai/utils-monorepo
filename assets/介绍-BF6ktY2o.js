import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import takeRight from '../../../packages/js-utils/src/takeRight'

const takeRightDemo = () => {
  action('takeRight 演示')({
    '默认取最后 1 个': takeRight([1, 2, 3]),
    '取最后 2 个': takeRight([1, 2, 3], 2),
    '取最后 5 个（超出长度）': takeRight([1, 2, 3], 5),
  })
}

export default takeRightDemo
`,c=`import { action } from 'storybook/actions'
import takeRight from '../../../packages/js-utils/src/takeRight'

const edgeCaseDemo = () => {
  action('takeRight - 边界情况')({
    '取1个': takeRight([1,2,3]), '取2个': takeRight([1,2,3], 2), '空数组': takeRight([]), '超过长度': takeRight([1,2], 5)
  })
}

export default edgeCaseDemo
`;function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"takeright",children:"takeRight"}),`
`,n.jsx(e.p,{children:"创建一个切片数组，包含数组末尾的 n 个元素"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"takeRight"})," 创建一个切片数组，包含数组末尾的 n 个元素。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"takeRight"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要提取的元素个数，默认为 1"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：返回数组的切片"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"takeRight/index.ts"})," 导出 takeRight 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 创建一个切片数组，包含数组末尾的 n 个元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default};
