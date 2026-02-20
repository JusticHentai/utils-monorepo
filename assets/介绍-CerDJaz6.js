import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const x=`import { action } from 'storybook/actions'
import indexOf from '../../../packages/js-utils/src/indexOf'
import lastIndexOf from '../../../packages/js-utils/src/lastIndexOf'

const basicDemo = () => {
  const array = [1, 2, 1, 2]

  // 基础查找
  action('indexOf - 基础查找')({
    'indexOf(2)': indexOf(array, 2),
    'indexOf(2, 2)': indexOf(array, 2, 2),
    '找不到': indexOf(array, 3),
  })

  // lastIndexOf 从右查找
  action('lastIndexOf - 从右查找')({
    'lastIndexOf(2)': lastIndexOf(array, 2),
    'lastIndexOf(2, 2)': lastIndexOf(array, 2, 2),
  })

  // 负数 fromIndex
  action('indexOf - 负数 fromIndex')({
    'indexOf([1,2,1,2], 1, -2)': indexOf(array, 1, -2),
  })

  // 空数组
  action('indexOf - 空数组')(indexOf([], 1))
}

export default basicDemo
`;function r(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"indexof",children:"indexOf"}),`
`,n.jsx(e.p,{children:"返回首次找到值的索引。同时提供 lastIndexOf。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"indexOf"})," 在数组中查找值的第一个索引。",n.jsx(e.code,{children:"lastIndexOf"})," 从右开始查找。找不到返回 -1。"]}),`
`,n.jsx(e.h2,{id:"查找索引",children:"查找索引"}),`
`,n.jsx(i,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要搜索的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"fromIndex"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始位置"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：索引（-1为未找到）"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"indexOf/index.ts"})," 导出 indexOf（default）和 lastIndexOf（named）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历数组，SameValueZero 比较找到第一个/最后一个匹配"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 正向/逆向遍历、fromIndex 支持负数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 数组 → 遍历比较 → 返回匹配索引"]}),`
`]})]})}function j(d={}){const{wrapper:e}={...s(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(r,{...d})}):r(d)}export{j as default};
