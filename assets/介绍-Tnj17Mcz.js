import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isEqual from '../../../packages/js-utils/src/isEqual'

const basicDemo = () => {
  // 原始值
  action('isEqual - 原始值')({
    '1 === 1': isEqual(1, 1),
    "'a' === 'a'": isEqual('a', 'a'),
    'null === null': isEqual(null, null),
    'NaN === NaN': isEqual(NaN, NaN),
    '1 !== 2': isEqual(1, 2),
    '1 !== "1"': isEqual(1, '1'),
  })

  // Date
  action('isEqual - Date')({
    '相同时间': isEqual(new Date(2024, 0, 1), new Date(2024, 0, 1)),
    '不同时间': isEqual(new Date(2024, 0, 1), new Date(2024, 0, 2)),
  })

  // RegExp
  action('isEqual - RegExp')({
    '相同正则': isEqual(/x/g, /x/g),
    '不同正则': isEqual(/x/g, /y/g),
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import isEqual from '../../../packages/js-utils/src/isEqual'

const objectDemo = () => {
  // 深层对象
  action('isEqual - 深层对象')({
    '相等': isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }),
    '不等': isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }),
  })

  // 数组
  action('isEqual - 数组')({
    '相等': isEqual([1, 2, 3], [1, 2, 3]),
    '长度不同': isEqual([1, 2], [1, 2, 3]),
    '嵌套相等': isEqual([[1], [2]], [[1], [2]]),
  })

  // Map
  const map1 = new Map([['a', 1]])
  const map2 = new Map([['a', 1]])
  const map3 = new Map([['a', 2]])
  action('isEqual - Map')({
    '相等': isEqual(map1, map2),
    '不等': isEqual(map1, map3),
  })

  // Set
  const set1 = new Set([1, 2, 3])
  const set2 = new Set([1, 2, 3])
  const set3 = new Set([1, 2])
  action('isEqual - Set')({
    '相等': isEqual(set1, set2),
    '不等': isEqual(set1, set3),
  })
}

export default objectDemo
`;function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"isequal",children:"isEqual"}),`
`,n.jsx(s.p,{children:"深度比较两个值是否相等。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"isEqual"})," 函数用于深度比较两个值，支持比较对象、数组、Date、RegExp 等类型。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"支持的类型"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"原始类型（使用 SameValueZero 比较）"}),`
`,n.jsx(s.li,{children:"对象和数组（递归比较）"}),`
`,n.jsx(s.li,{children:"Date 和 RegExp"}),`
`,n.jsx(s.li,{children:"Map 和 Set"}),`
`,n.jsx(s.li,{children:"Buffer 和 TypedArray"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"与 === 的区别"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"==="})," 只比较引用"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"isEqual"})," 深度比较内容"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"状态变化检测"}),`
`,n.jsx(s.li,{children:"缓存键比较"}),`
`,n.jsx(s.li,{children:"测试断言"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础比较",children:"基础比较"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"深度对象比较",children:"深度对象比较"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"要比较的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"other"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"另一个要比较的值"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：是否相等"}),`
`]})]})}function u(e={}){const{wrapper:s}={...a(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}export{u as default};
