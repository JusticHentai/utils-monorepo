import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import zip from '../../../packages/js-utils/src/zip'

const zipDemo = () => {
  // 基础：2个数组
  action('zip - 2个数组')(zip(['a', 'b', 'c'], [1, 2, 3]))

  // 3个数组
  action('zip - 3个数组')(zip(['a', 'b'], [1, 2], [true, false]))

  // 不等长数组
  action('zip - 不等长数组')(zip(['a', 'b', 'c'], [1, 2]))

  // 空数组
  action('zip - 空数组')(zip())

  // 0-tuples
  action('zip - 0-tuples')(zip([], []))

  // zip 是可逆的（zip(zip(...)) 还原）
  const original = zip(['barney', 'fred'], [36, 40])
  const reversed = zip(...original)
  action('zip - 可逆性')({
    'zip后': original,
    '再zip还原': reversed,
  })
}

export default zipDemo
`,p=`import { action } from 'storybook/actions'
import zipObject from '../../../packages/js-utils/src/zipObject'
import zipObjectDeep from '../../../packages/js-utils/src/zipObjectDeep'
import zipWith from '../../../packages/js-utils/src/zipWith'

const zipObjectDemo = () => {
  // zipObject - 键值数组合并为对象
  action('zipObject - 基础')(zipObject(['barney', 'fred'], [36, 40]))

  // 忽略多余的值
  action('zipObject - 忽略多余值')(zipObject(['a'], [1, 2]))

  // 多余的键赋值 undefined
  action('zipObject - 多余键为 undefined')(zipObject(['a', 'b'], [1]))

  // zipObjectDeep - 支持深层路径
  action('zipObjectDeep - 深层路径')(zipObjectDeep(['a.b.c'], [1]))

  // zipWith - 自定义组合
  action('zipWith - 求和')(
    zipWith([[1, 2, 3], [10, 20, 30], [100, 200, 300]], (...values: number[]) =>
      values.reduce((a, b) => a + b, 0)
    )
  )
}

export default zipObjectDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"zip",children:"zip"}),`
`,n.jsx(i.p,{children:"将多个数组按索引分组。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"zip"})," 将多个数组按索引分组。还提供 ",n.jsx(i.code,{children:"zipObject"}),"（创建键值对象）、",n.jsx(i.code,{children:"zipObjectDeep"}),"（支持路径）、",n.jsx(i.code,{children:"zipWith"}),"（自定义组合）。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"合并对应位置的数据"}),`
`,n.jsx(i.li,{children:"从两个数组创建对象"}),`
`,n.jsx(i.li,{children:"矩阵转置"}),`
`]}),`
`,n.jsx(i.h2,{id:"按索引分组",children:"按索引分组"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"zip"})," 将多个数组按索引位置分组。"]}),`
`,n.jsx(c,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"zipobject-和-zipwith",children:"zipObject 和 zipWith"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"zipObject"})," 从两个数组创建对象，",n.jsx(i.code,{children:"zipWith"})," 自定义组合逻辑。"]}),`
`,n.jsx(c,{language:"typescript",children:p}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"...arrays"}),n.jsx("td",{children:n.jsx("code",{children:"T[][]"})}),n.jsx("td",{children:"要分组的数组"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[][]"})," / ",n.jsx(i.code,{children:"Record<K, V>"})," / ",n.jsx(i.code,{children:"R[]"})]}),`
`,n.jsx(i.li,{children:"描述：分组后的数组或对象"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 提供 zip、zipObject、zipObjectDeep、zipWith"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 找到最长数组长度 → 按索引位置收集各数组元素"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": zipObject 将键数组和值数组组合为对象，zipWith 对每组应用组合函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 多个数组 → 按索引分组 → 返回分组结果"]}),`
`]})]})}function z(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{z as default};
