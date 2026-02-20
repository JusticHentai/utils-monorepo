import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import toPairs from '../../../packages/js-utils/src/toPairs'
import toPairsIn from '../../../packages/js-utils/src/toPairsIn'

const toPairsDemo = () => {
  // 基础：对象转键值对
  action('toPairs - 基础')({
    输入: { a: 1, b: 2 },
    结果: toPairs({ a: 1, b: 2 }),
  })

  // 区分自有属性 vs 含继承属性
  function Foo(this: any) { this.a = 1 }
  Foo.prototype.b = 2
  const instance = new (Foo as any)()

  action('toPairs - 仅自有属性')({
    描述: 'Foo { a: 1 }, prototype.b = 2',
    结果: toPairs(instance),
  })

  action('toPairsIn - 含继承属性')({
    描述: 'Foo { a: 1 }, prototype.b = 2',
    结果: toPairsIn(instance),
  })

  // 包含 length 属性的对象
  action('toPairs - 含 length 属性的对象')({
    输入: { '0': 'a', '1': 'b', length: 2 },
    结果: toPairs({ '0': 'a', '1': 'b', length: 2 } as any),
  })

  // null 安全
  action('toPairs - null 返回空数组')({
    输入: null,
    结果: toPairs(null as any),
  })
}

export default toPairsDemo
`;function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"topairs",children:"toPairs"}),`
`,n.jsx(s.p,{children:"将对象转为键值对数组。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"toPairs"})," 创建由对象自有可枚举键值对组成的数组。",n.jsx(s.code,{children:"toPairsIn"})," 包含继承属性。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"对象转 Map"}),`
`,n.jsx(s.li,{children:"对象遍历"}),`
`,n.jsx(s.li,{children:"序列化"}),`
`]}),`
`,n.jsx(s.h2,{id:"对象转键值对",children:"对象转键值对"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"toPairs"})," 将对象转为键值对数组。"]}),`
`,n.jsx(t,{language:"typescript",children:e}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要转换的对象"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"[string, unknown][]"})]}),`
`,n.jsx(s.li,{children:"描述：键值对数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 toPairs、toPairsIn、entries、entriesIn"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 获取对象键名 → 映射为 [key, value] 数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": Object.keys vs for...in 区分自有和继承属性"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 对象 → 获取键 → 映射为键值对 → 返回数组"]}),`
`]})]})}function j(i={}){const{wrapper:s}={...o(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
