import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import invert from '../../../packages/js-utils/src/invert'

const invertDemo = () => {
  // 基础反转
  const obj = { a: 1, b: 2 }
  const inverted = invert(obj)
  action('invert - 基础反转')({
    原始: obj,
    反转: inverted,
  })

  // 双重反转
  action('invert - 双重反转')(
    invert(inverted as any),
  )

  // Object.prototype 上的 key 值不冲突
  action('invert - 特殊值不冲突')(
    invert({ a: 'hasOwnProperty', b: 'constructor' } as any),
  )

  // length 属性
  action('invert - length 属性')(
    invert({ '0': 'a', '1': 'b', length: 2 } as any),
  )
}

export default invertDemo
`,c=`import { action } from 'storybook/actions'
import invertBy from '../../../packages/js-utils/src/invertBy'

const invertByDemo = () => {
  const obj = { a: 1, b: 2, c: 1 }

  // 默认分组
  action('invertBy - 默认分组')(
    invertBy(obj),
  )

  // 自定义迭代器
  action('invertBy - 自定义迭代器')(
    invertBy(obj, (value) => 'group' + value),
  )

  // hasOwnProperty / constructor 作为值
  action('invertBy - 特殊值')(
    invertBy({ a: 'hasOwnProperty', b: 'constructor' } as any),
  )
}

export default invertByDemo
`;function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"invert",children:"invert"}),`
`,n.jsx(e.p,{children:"创建一个键值反转的对象。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"invert"})," 函数将对象的键和值互换，生成一个新对象。",n.jsx(e.code,{children:"invertBy"})," 类似但结果值为数组，支持自定义迭代器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"构建反向查找映射"}),`
`,n.jsx(e.li,{children:"枚举值与名称的双向映射"}),`
`,n.jsx(e.li,{children:"数据结构转换"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础键值反转",children:"基础键值反转"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"invert"})," 将对象的键和值互换。如果有重复值，后面的键会覆盖前面的。"]}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"invertby-分组反转",children:"invertBy 分组反转"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"invertBy"})," 将具有相同值的键分组到数组中，并支持自定义迭代器。"]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要反转的对象"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Record<string, string>"})," / ",n.jsx(e.code,{children:"Record<string, string[]>"})]}),`
`,n.jsx(e.li,{children:"描述：键值反转后的新对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 invert 和 invertBy 两个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历对象属性，将值作为新键、原键作为新值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": Object.keys 遍历，invertBy 使用数组收集同值的键"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 输入对象 → 遍历键值对 → 构建反转映射 → 返回新对象"]}),`
`]})]})}function v(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{v as default};
