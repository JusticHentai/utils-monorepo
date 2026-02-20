import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import fromPairs from '../../../packages/js-utils/src/fromPairs'

const basicDemo = () => {
  // 基础：二维数组转对象
  action('fromPairs - 二维数组转对象')(
    fromPairs([['a', 1], ['b', 2]]),
  )

  // 不支持深层路径 — key 是字面量字符串
  action('fromPairs - 点路径作为字面量 key')(
    fromPairs([['a.b', 1]]),
  )

  // 空数组
  action('fromPairs - 空数组')(
    fromPairs([]),
  )
}

export default basicDemo
`;function i(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"frompairs",children:"fromPairs"}),`
`,n.jsx(r.p,{children:"将键值对数组转换为对象。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"fromPairs"})," 接收一个 ",n.jsx(r.code,{children:"[key, value]"})," 键值对数组，返回由这些键值对组成的对象。是 ",n.jsx(r.code,{children:"toPairs"})," 的逆操作。常用于将 Map 或 entries 转换为普通对象。"]}),`
`,n.jsx(r.h2,{id:"将键值对转为对象",children:"将键值对转为对象"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"pairs"}),n.jsx("td",{children:n.jsx("code",{children:"[K, V][]"})}),n.jsx("td",{children:"键值对数组"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"Record<K, V>"})]}),`
`,n.jsx(r.li,{children:"描述：生成的对象"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"fromPairs/index.ts"})," 导出 ",n.jsx(r.code,{children:"fromPairs"})," 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 遍历键值对数组，将每对的 key 和 value 设置到结果对象"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": reduce 累积构建对象"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 键值对数组 → 遍历 → 设置到对象 → 返回对象"]}),`
`]})]})}function a(s={}){const{wrapper:r}={...e(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
