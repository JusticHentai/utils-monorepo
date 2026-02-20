import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import uniqueId from '../../../packages/js-utils/src/uniqueId'

const uniqueIdDemo = () => {
  // 无前缀 - 返回纯数字字符串
  const id1 = uniqueId()
  const id2 = uniqueId()
  action('uniqueId - 无前缀递增')({
    id1,
    id2,
    类型: typeof id1,
    递增: Number(id2) > Number(id1),
  })

  // 带前缀
  action('uniqueId - 带前缀')({
    contact_: uniqueId('contact_'),
    contact_2: uniqueId('contact_'),
  })

  // 不同前缀共享计数器
  action('uniqueId - 不同前缀共享计数器')({
    user_: uniqueId('user_'),
    item_: uniqueId('item_'),
  })

  // 生成多个唯一 ID
  const ids = Array.from({ length: 5 }, () => uniqueId('id_'))
  const allUnique = new Set(ids).size === ids.length
  action('uniqueId - 批量生成验证唯一性')({
    ids,
    全部唯一: allUnique,
  })
}

export default uniqueIdDemo
`;function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"uniqueid",children:"uniqueId"}),`
`,n.jsx(i.p,{children:"生成递增的唯一 ID。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"uniqueId"})," 生成递增的唯一 ID，可指定前缀。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"临时 DOM 元素 ID"}),`
`,n.jsx(i.li,{children:"组件 key 生成"}),`
`,n.jsx(i.li,{children:"唯一标识符"}),`
`]}),`
`,n.jsx(i.h2,{id:"生成唯一id",children:"生成唯一ID"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"uniqueId"})," 生成递增的唯一标识符。"]}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"prefix"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"可选前缀，默认空字符串"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"string"})]}),`
`,n.jsx(i.li,{children:"描述：唯一 ID 字符串"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 实现递增 ID 生成"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 维护内部计数器 → 每次调用递增 → 拼接前缀和计数器"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 闭包/模块级变量保存计数状态"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 前缀 → 计数器递增 → 拼接 → 返回 ID 字符串"]}),`
`]})]})}function j(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{j as default};
