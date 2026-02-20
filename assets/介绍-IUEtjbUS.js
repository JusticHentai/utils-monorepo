import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import uniqueId from '../../../packages/element-utils/src/uniqueId'

const generateDemo = () => {
  const id1 = uniqueId()
  const id2 = uniqueId()
  const id3 = uniqueId()

  action('生成的唯一ID')({ id1, id2, id3 })
}

export default generateDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"uniqueid",children:"uniqueId"}),`
`,n.jsxs(e.p,{children:["生成唯一标识符的工具函数，格式为 ",n.jsx(e.code,{children:"v4-{timestamp}-{random}"}),"。"]}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["uniqueId 是一个简单的 ID 生成函数，核心作用是：",n.jsx(e.strong,{children:"生成一个在当前运行环境中几乎不会重复的唯一标识符"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Date.now()"}),"：获取毫秒级时间戳"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Math.random().toString(36)"}),"：生成 36 进制随机字符串"]}),`
`,n.jsx(e.li,{children:"字符串拼接：组合多个来源保证唯一性"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React key：列表渲染时的唯一 key"}),`
`,n.jsx(e.li,{children:"临时 ID：创建新数据时的临时标识"}),`
`,n.jsx(e.li,{children:"日志追踪：请求或操作的追踪 ID"}),`
`,n.jsx(e.li,{children:"缓存键：生成唯一的缓存标识"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"纯前端生成，无需服务端"}),`
`,n.jsx(e.li,{children:"组合时间戳和随机数，碰撞概率极低"}),`
`,n.jsx(e.li,{children:"格式简洁可读"}),`
`]}),`
`,n.jsx(e.h2,{id:"生成唯一id",children:"生成唯一ID"}),`
`,n.jsx(e.p,{children:"通过组合时间戳和随机字符串生成唯一标识符，适用于需要在前端生成唯一 key 的场景。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"-"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"无参数"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsxs(e.li,{children:["描述：唯一标识字符串，格式为 ",n.jsx(e.code,{children:"v4-{timestamp}-{random}"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 uniqueId 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"Date.now()"})," 获取当前时间戳"]}),`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"Math.random().toString(36).slice(2, 11)"})," 生成 9 位随机字符串"]}),`
`,n.jsxs(e.li,{children:["拼接返回 ",n.jsx(e.code,{children:"v4-{timestamp}-{random}"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["实现：",n.jsx(e.code,{children:"`v4-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toString(36)"})," 将随机数转为 36 进制（0-9 + a-z）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"slice(2, 11)"}),' 跳过 "0." 前缀，取 9 位字符']}),`
`,n.jsx(e.li,{children:"时间戳 + 随机数双重保障唯一性"}),`
`]})]})}function a(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
