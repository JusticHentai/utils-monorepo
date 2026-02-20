import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import defaults from '../../../packages/js-utils/src/defaults'

const defaultsDemo = () => {
  // 基础：不覆盖已有属性
  action('defaults - 不覆盖已有属性')(
    defaults({ a: 1 }, { a: 2, b: 2 }),
  )

  // 多个源对象，第一个源优先
  action('defaults - 多源对象')(
    defaults({ a: 1, b: 2 }, { b: 3 }, { c: 3 }),
  )

  // null 不会被覆盖
  action('defaults - null 不被覆盖')(
    defaults({ a: null }, { a: 1 }),
  )

  // undefined 会被覆盖
  action('defaults - undefined 被覆盖')(
    defaults({ a: undefined }, { a: 1 }),
  )

  // 源中的 undefined 也会被赋值
  action('defaults - 源的 undefined 会赋值')(
    defaults({}, { a: undefined, b: 1 }),
  )
}

export default defaultsDemo
`,a=`import { action } from 'storybook/actions'
import defaultsDeep from '../../../packages/js-utils/src/defaultsDeep'

const defaultsDeepDemo = () => {
  // 深层合并：不覆盖已有嵌套属性
  action('defaultsDeep - 深层合并')(
    defaultsDeep(
      { a: { b: 2 }, d: 4 },
      { a: { b: 3, c: 3 }, e: 5 },
    ),
  )

  // 多源深层合并
  action('defaultsDeep - 多源深层合并')(
    defaultsDeep(
      { a: { b: 2 } },
      { a: { b: 3 } },
      { a: { c: 3 } },
    ),
  )

  // 不覆盖 null
  action('defaultsDeep - 不覆盖 null')(
    defaultsDeep({ a: { b: null } }, { a: { b: 2 } }),
  )

  // 覆盖 undefined
  action('defaultsDeep - 覆盖 undefined')(
    defaultsDeep({ a: { b: undefined } }, { a: { b: 2 } }),
  )
}

export default defaultsDeepDemo
`;function t(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"defaults",children:"defaults"}),`
`,n.jsx(e.p,{children:"分配来源属性到目标对象，不覆盖已有属性。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"defaults"})," 将源对象的属性分配到目标对象，但不会覆盖目标对象上已存在的属性。",n.jsx(e.code,{children:"defaultsDeep"})," 是递归版本，会深层合并。常用于为配置对象提供默认值。"]}),`
`,n.jsx(e.h2,{id:"defaults---浅层默认值",children:"defaults - 浅层默认值"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"defaultsdeep---深层默认值",children:"defaultsDeep - 深层默认值"}),`
`,n.jsx(s,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"目标对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"sources"}),n.jsx("td",{children:n.jsx("code",{children:"Partial<T>[]"})}),n.jsx("td",{children:"来源对象"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T"})]}),`
`,n.jsx(e.li,{children:"描述：修改后的目标对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"defaults/index.ts"})," 导出 defaults（default）和 defaultsDeep（named）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历源对象属性，仅当目标属性值为 undefined 时才赋值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 属性存在性检查，递归合并（deep版本）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 源对象属性 → 检查目标是否已有 → 无则赋值 → 返回目标对象"]}),`
`]})]})}function x(d={}){const{wrapper:e}={...l(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(t,{...d})}):t(d)}export{x as default};
