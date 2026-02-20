import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import pullAllWith from '../../../packages/js-utils/src/pullAllWith'

const pullAllWithDemo = () => {
  const array = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]
  pullAllWith(array, [{ x: 1, y: 2 }, { x: 5, y: 6 }], (a, b) => a.x === b.x && a.y === b.y)
  action('pullAllWith 演示')({ '自定义比较移除后': array })
}

export default pullAllWithDemo
`,c=`import { action } from 'storybook/actions'
import pullAllWith from '../../../packages/js-utils/src/pullAllWith'

const edgeCaseDemo = () => {
  const a = [{ x: 1 }, { x: 2 }, { x: 3 }]
  pullAllWith(a, [{ x: 1 }], (a, b) => a.x === b.x)

  action('pullAllWith - 边界情况')({
    '自定义比较移除': a,
  })
}

export default edgeCaseDemo
`;function e(s){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"pullallwith",children:"pullAllWith"}),`
`,n.jsx(l.p,{children:"类似于 pullAll，但可以指定比较器"}),`
`,n.jsx(l.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(l.p,{children:[n.jsx(l.code,{children:"pullAllWith"})," 类似于 pullAll，但可以指定比较器。"]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"数据处理和转换"}),`
`,n.jsx(l.li,{children:"功能组合和增强"}),`
`,n.jsx(l.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(l.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(l.p,{children:["点击按钮查看 ",n.jsx(l.code,{children:"pullAllWith"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(l.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(l.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(l.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要修改的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"values"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要移除的值数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"比较器函数"})]})]})]}),`
`,n.jsx(l.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["类型：",n.jsx(l.code,{children:"unknown"})]}),`
`,n.jsx(l.li,{children:"描述：返回修改后的数组"}),`
`]}),`
`,n.jsx(l.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"文件职责"}),": ",n.jsx(l.code,{children:"pullAllWith/index.ts"})," 导出 pullAllWith 函数"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"核心流程"}),": 类似于 pullAll，但可以指定比较器"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(s={}){const{wrapper:l}={...r(),...s.components};return l?n.jsx(l,{...s,children:n.jsx(e,{...s})}):e(s)}export{p as default};
