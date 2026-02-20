import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import mergeClass from '../../../packages/element-utils/src/mergeClass'

const basicDemo = () => {
  const result = mergeClass('class1', ['class2', 'class3'], {
    class4: true,
    class5: false,
  })

  action('合并多种类型 class')({ className: result })
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import mergeClass from '../../../packages/element-utils/src/mergeClass'

const falsyDemo = () => {
  const result = mergeClass('class1', undefined, null, false, 'class2')

  action('过滤 falsy 值')({ className: result })
}

export default falsyDemo
`;function c(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...l.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.h1,{id:"mergeclass",children:"mergeClass"}),`
`,s.jsx(n.p,{children:"合并多种类型 class 名称，支持字符串、数组、对象等格式。"}),`
`,s.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,s.jsxs(n.p,{children:["mergeClass 是一个 CSS 类名合并函数，核心作用是：",s.jsx(n.strong,{children:"将多种格式的 class 名称合并为一个去重后的字符串"}),"。"]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"类型判断：区分字符串、数组、对象"}),`
`,s.jsx(n.li,{children:"Set 去重：避免重复的 class 名称"}),`
`,s.jsx(n.li,{children:"条件 class：对象格式支持条件开关"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"类似库"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"clsx：轻量级 class 名称构造工具"}),`
`,s.jsx(n.li,{children:"classnames：React 社区常用的 class 合并库"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"条件样式：根据状态动态添加/移除 class"}),`
`,s.jsx(n.li,{children:"组件封装：合并用户传入的 class 和内部 class"}),`
`,s.jsx(n.li,{children:"样式组合：组合多个 CSS 模块的类名"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"优势"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"支持多种输入格式，灵活便捷"}),`
`,s.jsx(n.li,{children:"自动去重，避免重复 class"}),`
`,s.jsx(n.li,{children:"自动过滤 falsy 值"}),`
`]}),`
`,s.jsx(n.h2,{id:"合并多种类型",children:"合并多种类型"}),`
`,s.jsx(e,{language:"typescript",children:r}),`
`,s.jsx(n.h2,{id:"过滤-falsy-值",children:"过滤 falsy 值"}),`
`,s.jsx(e,{language:"typescript",children:d}),`
`,s.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"参数名"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"描述"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"...args"}),s.jsx("td",{children:s.jsx("code",{children:"Arg[]"})}),s.jsx("td",{children:"可变参数，支持 string、string[]、Record<string, boolean>"})]})})]}),`
`,s.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["类型：",s.jsx(n.code,{children:"string"})]}),`
`,s.jsx(n.li,{children:"描述：合并去重后的 class 字符串，空格分隔"}),`
`]}),`
`,s.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,s.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"index.ts"})," - 唯一源文件，包含 mergeClass 函数实现"]}),`
`]}),`
`,s.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsx(n.li,{children:"创建 Set 存储所有 class 名称"}),`
`,s.jsxs(n.li,{children:["遍历参数数组，根据类型处理：",`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"字符串：按空格分割后加入 Set"}),`
`,s.jsx(n.li,{children:"数组：遍历每个元素加入 Set"}),`
`,s.jsx(n.li,{children:"对象：遍历键，值为 true 的键加入 Set"}),`
`]}),`
`]}),`
`,s.jsx(n.li,{children:"过滤 falsy 值"}),`
`,s.jsxs(n.li,{children:["使用 ",s.jsx(n.code,{children:"Array.from(set).join(' ')"})," 转为字符串"]}),`
`]}),`
`,s.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"使用 Set 自动去重"}),`
`,s.jsxs(n.li,{children:["对象格式：",s.jsx(n.code,{children:"{ active: true, disabled: false }"})," → ",s.jsx(n.code,{children:"'active'"})]}),`
`,s.jsxs(n.li,{children:["支持字符串中包含多个 class：",s.jsx(n.code,{children:"'a b c'"})," → ",s.jsx(n.code,{children:"['a', 'b', 'c']"})]}),`
`]})]})}function m(l={}){const{wrapper:n}={...i(),...l.components};return n?s.jsx(n,{...l,children:s.jsx(c,{...l})}):c(l)}export{m as default};
