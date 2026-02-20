import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import unzip from '../../../packages/js-utils/src/unzip'
import unzipWith from '../../../packages/js-utils/src/unzipWith'

const unzipDemo = () => {
  // 基础：2-tuples
  action('unzip - 2元组')({
    输入: [['barney', 36], ['fred', 40]],
    结果: unzip([['barney', 36], ['fred', 40]] as any),
  })

  // 3-tuples
  action('unzip - 3元组')({
    输入: [['barney', 36, false], ['fred', 40, true]],
    结果: unzip([['barney', 36, false], ['fred', 40, true]] as any),
  })

  // 不等长数组
  action('unzip - 不等长')({
    输入: [['barney', 36], ['fred', 40, false]],
    结果: unzip([['barney', 36], ['fred', 40, false]] as any),
  })

  // 空数组
  action('unzip - 空数组')(unzip([]))

  // unzipWith - 聚合函数
  action('unzipWith - 求和')({
    输入: [[1, 4], [2, 5], [3, 6]],
    结果: unzipWith([[1, 4], [2, 5], [3, 6]], (...values: number[]) =>
      values.reduce((a, b) => a + b, 0)
    ),
  })

  // zip/unzip 可逆
  const original = [['a', 'b'], [1, 2]]
  const unzipped = unzip(original as any)
  const reZipped = unzip(unzipped as any)
  action('unzip - zip/unzip 互逆')({
    原始: original,
    unzip后: unzipped,
    再次unzip: reZipped,
  })
}

export default unzipDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"unzip",children:"unzip"}),`
`,n.jsx(i.p,{children:"将分组数组重新按索引分组。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"unzip"})," 是 zip 的逆操作，将分组数组按原始索引重新分组。",n.jsx(i.code,{children:"unzipWith"})," 支持自定义组合逻辑。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"分离组合数据"}),`
`,n.jsx(i.li,{children:"矩阵转置"}),`
`,n.jsx(i.li,{children:"数据重组"}),`
`]}),`
`,n.jsx(i.h2,{id:"数组解组",children:"数组解组"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"unzip"})," 将分组数组重新分组。"]}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[][]"})}),n.jsx("td",{children:"要解组的分组数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(...values) => R"})}),n.jsx("td",{children:"组合函数（unzipWith 使用）"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[][]"})," / ",n.jsx(i.code,{children:"R[]"})]}),`
`,n.jsx(i.li,{children:"描述：重新分组后的数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 提供 unzip 和 unzipWith"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 确定最长子数组长度 → 按索引位置重新分组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 矩阵转置思想，unzipWith 对每组应用组合函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 分组数组 → 按索引重组 → 返回新分组"]}),`
`]})]})}function x(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
