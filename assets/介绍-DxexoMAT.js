import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import mapKeys from '../../../packages/js-utils/src/mapKeys'

const mapKeysDemo = () => {
  // lodash 测试: 使用 String 转换键
  const obj = { a: 1, b: 2 }
  action('mapKeys - 基础')({
    输入: obj,
    'mapKeys(obj, String)': mapKeys(obj, (value) => String(value)),
    期望: { '1': 1, '2': 2 },
  })

  // 自定义转换
  action('mapKeys - 拼接键值')({
    结果: mapKeys(obj, (value, key) => key + value),
    期望: { a1: 1, b2: 2 },
  })

  // null/undefined 安全
  action('mapKeys - null 安全')({
    'mapKeys(null)': mapKeys(null as any, (v) => v),
    说明: '返回空对象 {}',
  })

  // 只遍历自身属性 (lodash 测试)
  action('mapKeys - 说明')({
    说明: 'mapKeys 只遍历对象自身的字符串键属性，不包含原型链',
  })
}

export default mapKeysDemo`,c=`import { action } from 'storybook/actions'
import mapValues from '../../../packages/js-utils/src/mapValues'

const mapValuesDemo = () => {
  // lodash 测试: 使用 String 转换值
  const obj = { a: 1, b: 2 }
  action('mapValues - 基础')({
    输入: obj,
    'mapValues(obj, String)': mapValues(obj, (value) => String(value)),
    期望: { a: '1', b: '2' },
  })

  // 提取嵌套属性
  const users = { alice: { age: 25 }, bob: { age: 30 } }
  action('mapValues - 提取嵌套属性')({
    输入: users,
    结果: mapValues(users, (u: any) => u.age),
    期望: { alice: 25, bob: 30 },
  })
}

export default mapValuesDemo`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"mapkeys",children:"mapKeys"}),`
`,n.jsx(e.p,{children:"创建一个对象，键经过迭代器处理。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mapKeys"})," 创建新对象，键为迭代器处理后的值，值保持不变。",n.jsx(e.code,{children:"mapValues"})," 则处理值保持键不变。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"对象键名转换（如 camelCase 转 snake_case）"}),`
`,n.jsx(e.li,{children:"添加键前缀/后缀"}),`
`,n.jsx(e.li,{children:"值的批量转换"}),`
`]}),`
`,n.jsx(e.h2,{id:"mapkeys-转换键名",children:"mapKeys 转换键名"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"mapKeys"})," 对对象的键名进行转换。"]}),`
`,n.jsx(l,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"mapvalues-转换值",children:"mapValues 转换值"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"mapValues"})," 对对象的值进行转换。"]}),`
`,n.jsx(l,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要处理的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value, key, object) => string"})}),n.jsx("td",{children:"迭代器函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Record<string, unknown>"})]}),`
`,n.jsx(e.li,{children:"描述：键或值经过转换的新对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 mapKeys 和 mapValues 两个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历对象属性 → 调用迭代器转换键/值 → 构建新对象"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 保持另一半（键或值）不变，仅转换目标部分"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 输入对象 + 迭代器 → 遍历属性 → 转换键/值 → 返回新对象"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
