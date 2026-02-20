import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import groupBy from '../../../packages/js-utils/src/groupBy'

const functionDemo = () => {
  const array = [6.1, 4.2, 6.3]

  // 按函数返回值分组
  action('groupBy - Math.floor 分组')(
    groupBy(array, Math.floor),
  )

  // 按属性名分组（字符串 shorthand）
  action('groupBy - 属性名分组')(
    groupBy(['one', 'two', 'three'], (s) => s.length),
  )

  // hasOwnProperty / constructor 作为 key 不冲突
  action('groupBy - 特殊 key 名不冲突')(
    groupBy(array, (n) =>
      Math.floor(n) > 4 ? 'hasOwnProperty' : 'constructor',
    ),
  )
}

export default functionDemo
`,c=`import { action } from 'storybook/actions'
import groupBy from '../../../packages/js-utils/src/groupBy'

const propertyDemo = () => {
  // 按对象属性分组
  const users = [
    { name: 'Alice', dept: 'eng' },
    { name: 'Bob', dept: 'sales' },
    { name: 'Charlie', dept: 'eng' },
    { name: 'Dave', dept: 'sales' },
  ]
  action('groupBy - 按部门分组')(
    groupBy(users, 'dept'),
  )

  // 二维数组按索引分组
  const data = [
    [1, 'a'],
    [2, 'a'],
    [2, 'b'],
  ] as [number, string][]
  action('groupBy - 二维数组按第一列分组')(
    groupBy(data, (item) => item[0]),
  )
}

export default propertyDemo
`;function t(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"groupby",children:"groupBy"}),`
`,n.jsx(r.p,{children:"根据迭代函数的返回值对集合元素进行分组。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"groupBy"})," 函数用于将数组或对象按照指定规则分组，返回分组后的对象。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据分类统计"}),`
`,n.jsx(r.li,{children:"将列表按类别分组展示"}),`
`,n.jsx(r.li,{children:"数据聚合分析"}),`
`]}),`
`,n.jsx(r.h2,{id:"按函数分组",children:"按函数分组"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"按属性分组",children:"按属性分组"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[] | object"})}),n.jsx("td",{children:"要分组的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"Function | string"})}),n.jsx("td",{children:"分组依据的函数或属性名"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"Record<string, T[]>"})]}),`
`,n.jsx(r.li,{children:"描述：分组后的对象，键为分组依据，值为元素数组"}),`
`]})]})}function j(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{j as default};
