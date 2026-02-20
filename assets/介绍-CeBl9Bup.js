import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import map from '../../../packages/js-utils/src/map'

const mapArrayDemo = () => {
  // 基础: 数组映射
  action('map - 数组映射')({
    'map([1, 2], String)': map([1, 2], String),
    期望: ['1', '2'],
  })

  // 平方运算
  action('map - 平方')({
    'map([4, 8], n => n*n)': map([4, 8], (n) => n * n),
    期望: [16, 64],
  })

  // 提取属性
  const users = [{ name: 'Alice' }, { name: 'Bob' }]
  action('map - 提取属性')({
    输入: users,
    'map(users, u => u.name)': map(users, (u) => u.name),
  })

  // 空/falsey 输入返回空数组 (lodash 测试)
  action('map - 空输入')({
    'map(null, ...)': map(null as any, (x: any) => x),
    'map(undefined, ...)': map(undefined as any, (x: any) => x),
    说明: '所有 falsey 输入返回 []',
  })
}

export default mapArrayDemo`,l=`import { action } from 'storybook/actions'
import map from '../../../packages/js-utils/src/map'

const mapObjectDemo = () => {
  // 对象映射 (lodash 测试)
  const obj = { a: 1, b: 2 }

  action('map - 对象映射')({
    'map({ a: 1, b: 2 }, String)': map(obj, String),
    期望: ['1', '2'],
  })

  // iteratee 接收 (value, key, collection)
  action('map - iteratee 参数')({
    结果: map(obj, (value, key) => \`\${key}=\${value}\`),
    说明: 'iteratee 接收 value, key, collection 三个参数',
  })

  // 非数字 length 属性的对象 (lodash 测试)
  const withLength = { length: { value: 'x' } }
  action('map - 非数字 length 属性')({
    输入: withLength,
    结果: map(withLength, (v) => v),
    说明: '对象的 length 属性为非数字时正常处理',
  })
}

export default mapObjectDemo`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"map",children:"map"}),`
`,n.jsx(e.p,{children:"遍历集合，返回每个元素经迭代器处理后的结果数组。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"map"})," 函数创建一个数组，其值为集合中每个元素经迭代器处理后的结果。支持数组和对象。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据转换和映射"}),`
`,n.jsx(e.li,{children:"提取对象数组中的特定属性"}),`
`,n.jsx(e.li,{children:"数据格式化"}),`
`]}),`
`,n.jsx(e.h2,{id:"数组映射",children:"数组映射"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"map"})," 对数组元素进行映射转换。"]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"对象映射",children:"对象映射"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"map"})," 对对象的值进行映射转换。"]}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[] | Record<string, T>"})}),n.jsx("td",{children:"要遍历的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T, key: number | string, collection) => R"})}),n.jsx("td",{children:"迭代器函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"R[]"})]}),`
`,n.jsx(e.li,{children:"描述：迭代器处理结果组成的数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现通用的集合映射操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 判断集合类型 → 遍历元素 → 调用迭代器 → 收集结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 支持数组和对象两种输入类型"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 集合 + 迭代器 → 遍历元素 → 映射转换 → 返回结果数组"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
