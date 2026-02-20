import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import last from '../../../packages/js-utils/src/last'

const basicDemo = () => {
  // 基础用法
  action('last - 获取最后一个元素')({
    'last([1, 2, 3, 4])': last([1, 2, 3, 4]),
    期望: 4,
  })

  // 空数组返回 undefined
  action('last - 空数组')({
    'last([])': last([]),
    期望: undefined,
  })

  // 作为 map 的迭代器 (lodash 测试)
  const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  action('last - 作为 map 迭代器')({
    输入: arrays,
    'arrays.map(last)': arrays.map((arr) => last(arr)),
    期望: [3, 6, 9],
  })

  // 单元素数组
  action('last - 单元素')({
    'last([42])': last([42]),
    期望: 42,
  })
}

export default basicDemo`;function t(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"last",children:"last"}),`
`,n.jsx(s.p,{children:"获取数组的最后一个元素。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"last"})," 函数用于获取数组的最后一个元素。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"获取列表的最后一项"}),`
`,n.jsx(s.li,{children:"取出栈顶元素（不移除）"}),`
`,n.jsx(s.li,{children:"获取最新的数据项"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要查询的数组"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T | undefined"})]}),`
`,n.jsx(s.li,{children:"描述：数组的最后一个元素，空数组返回 undefined"}),`
`]})]})}function j(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(t,{...r})}):t(r)}export{j as default};
