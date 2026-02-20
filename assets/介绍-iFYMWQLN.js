import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import countBy from '../../../packages/js-utils/src/countBy'

const basicDemo = () => {
  // 按 Math.floor 分组计数
  action('countBy - 按 Math.floor 分组')({
    输入: [6.1, 4.2, 6.3],
    结果: countBy([6.1, 4.2, 6.3], Math.floor),
    说明: '6.1 和 6.3 都 floor 为 6，4.2 floor 为 4',
  })

  // 按字符串长度计数
  action('countBy - 按字符串长度')({
    输入: ['one', 'two', 'three'],
    结果: countBy(['one', 'two', 'three'], (s) => s.length),
    说明: '"one" 和 "two" 长度 3，"three" 长度 5',
  })

  // 实际应用：统计状态分布
  const tasks = [
    { status: 'done' }, { status: 'done' },
    { status: 'pending' }, { status: 'error' },
  ]
  action('countBy - 统计状态分布')({
    输入: tasks.map(t => t.status),
    结果: countBy(tasks, (t) => t.status),
  })
}

export default basicDemo
`;function s(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"countby",children:"countBy"}),`
`,n.jsx(t.p,{children:"按迭代器返回值对集合元素进行计数。"}),`
`,n.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"countBy"})," 遍历集合中的每个元素，对每个元素调用迭代器函数，以返回值作为键进行计数统计。常用于数据统计分析场景，如统计各分类出现的次数。"]}),`
`,n.jsx(t.h2,{id:"按条件计数",children:"按条件计数"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要计数的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => K"})}),n.jsx("td",{children:"分组依据的迭代器函数"})]})]})]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"Record<K, number>"})]}),`
`,n.jsx(t.li,{children:"描述：键为分组标识，值为出现次数"}),`
`]}),`
`,n.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"文件职责"}),": ",n.jsx(t.code,{children:"countBy/index.ts"})," 导出 ",n.jsx(t.code,{children:"countBy"})," 函数"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"核心流程"}),": 遍历集合 → 对每个元素执行 iteratee → 以返回值为键累加计数"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"关键技术点"}),": 对象作为计数器，",n.jsx(t.code,{children:"reduce"})," 模式"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"数据流向"}),": 集合元素 → iteratee 计算分组键 → 累加到结果对象的对应键"]}),`
`]})]})}function a(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{a as default};
