import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import dropRight from '../../../packages/js-utils/src/dropRight'

const dropRightDemo = () => {
  action('dropRight 演示')({
    '默认去掉最后 1 个': dropRight([1, 2, 3]),
    '去掉最后 2 个': dropRight([1, 2, 3], 2),
    '去掉最后 5 个（超出长度）': dropRight([1, 2, 3], 5),
  })
}

export default dropRightDemo
`,t=`import { action } from 'storybook/actions'
import dropRight from '../../../packages/js-utils/src/dropRight'

const edgeCaseDemo = () => {
  action('dropRight - 边界情况')({
    '丢弃1个': dropRight([1,2,3]), '丢弃2个': dropRight([1,2,3], 2), '空数组': dropRight([]), '丢弃超过长度': dropRight([1,2], 5)
  })
}

export default edgeCaseDemo
`;function d(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"dropright",children:"dropRight"}),`
`,n.jsx(r.p,{children:"创建一个切片数组，去除数组末尾的 n 个元素"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"dropRight"})," 创建一个切片数组，去除数组末尾的 n 个元素。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据处理和转换"}),`
`,n.jsx(r.li,{children:"功能组合和增强"}),`
`,n.jsx(r.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"dropRight"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要去除的元素个数，默认为 1"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T[]"})]}),`
`,n.jsx(r.li,{children:"描述：返回数组的剩余切片"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"dropRight/index.ts"})," 导出 dropRight 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 创建一个切片数组，去除数组末尾的 n 个元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(i={}){const{wrapper:r}={...e(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(d,{...i})}):d(i)}export{g as default};
