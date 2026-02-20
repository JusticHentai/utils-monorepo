import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import pickBy from '../../../packages/js-utils/src/pickBy'

const pickByDemo = () => {
  // 基本谓词筛选 (lodash: pickBy({a:1,b:2,c:3,d:4}, n => n==1||n==3) => {a:1,c:3})
  const object = { a: 1, b: 2, c: 3, d: 4 }
  action('pickBy - 选取1和3')(pickBy(object, (v) => v === 1 || v === 3))

  // 类型筛选
  const mixed = { a: 1, b: null, c: 3, d: undefined, e: '' } as Record<string, unknown>
  action('pickBy - 过滤空值')(pickBy(mixed, (v) => v != null))
  action('pickBy - 仅数字')(pickBy(mixed, (v) => typeof v === 'number'))

  // 带点号的键不作为深层路径 (lodash: pickBy({'a.b.c': 1}, stubTrue) => {'a.b.c': 1})
  const dotObj = { 'a.b.c': 1 } as Record<string, unknown>
  action('pickBy - 带点号的键')(pickBy(dotObj, () => true))

  // 使用 key 参数进行筛选
  action('pickBy - 按key筛选')(pickBy(object, (_v, k) => k === 'a' || k === 'd'))
}

export default pickByDemo`;function e(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c.h1,{id:"pickby",children:"pickBy"}),`
`,n.jsx(c.p,{children:"创建仅包含满足条件属性的对象。"}),`
`,n.jsx(c.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"pickBy"})," 创建一个新对象，仅包含满足谓词函数条件的属性。"]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"过滤对象的空值属性"}),`
`,n.jsx(c.li,{children:"按条件选择对象属性"}),`
`,n.jsx(c.li,{children:"数据清洗"}),`
`]}),`
`,n.jsx(c.h2,{id:"按条件选择属性",children:"按条件选择属性"}),`
`,n.jsxs(c.p,{children:["使用 ",n.jsx(c.code,{children:"pickBy"})," 按条件过滤对象属性。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(c.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"源对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(value, key) => boolean"})}),n.jsx("td",{children:"谓词函数"})]})]})]}),`
`,n.jsx(c.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["类型：",n.jsx(c.code,{children:"Partial<T>"})]}),`
`,n.jsx(c.li,{children:"描述：满足条件的属性组成的新对象"}),`
`]}),`
`,n.jsx(c.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"文件职责"}),": ",n.jsx(c.code,{children:"index.ts"})," 实现条件属性选择"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"核心流程"}),": 遍历对象属性 → 对每个属性执行谓词 → 满足条件则保留"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"关键技术点"}),": Object.keys 遍历，谓词函数同时接收值和键"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"数据流向"}),": 对象 + 谓词 → 遍历属性 → 判断保留 → 返回新对象"]}),`
`]})]})}function p(i={}){const{wrapper:c}={...s(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(e,{...i})}):e(i)}export{p as default};
