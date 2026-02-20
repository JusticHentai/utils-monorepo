import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import union from '../../../packages/js-utils/src/union'

const unionDemo = () => {
  action('union - 基础')(union([1, 2], [2, 3], [3, 4]))
}

export default unionDemo
`,d=`import { action } from 'storybook/actions'
import unionBy from '../../../packages/js-utils/src/unionBy'
import unionWith from '../../../packages/js-utils/src/unionWith'

const unionByDemo = () => {
  action('unionBy - 取整去重')(
    unionBy([[1.1, 2.3], [2.4, 3.1]], Math.floor)
  )

  action('unionWith - 自定义比较')(
    unionWith(
      [[{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }]],
      (a, b) => a.x === b.x
    )
  )
}

export default unionByDemo
`;function e(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"union",children:"union"}),`
`,n.jsx(i.p,{children:"创建多个数组的并集。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"union"})," 创建包含所有唯一值的并集数组。",n.jsx(i.code,{children:"unionBy"})," 支持迭代器，",n.jsx(i.code,{children:"unionWith"})," 支持比较器。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"合并去重多个数组"}),`
`,n.jsx(i.li,{children:"数据集合并"}),`
`,n.jsx(i.li,{children:"标签/分类合并"}),`
`]}),`
`,n.jsx(i.h2,{id:"数组并集",children:"数组并集"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"union"})," 创建多个数组的并集（去重）。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"unionby-和-unionwith",children:"unionBy 和 unionWith"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"unionBy"}),"（迭代器去重）和 ",n.jsx(i.code,{children:"unionWith"}),"（比较器去重）。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"...arrays"}),n.jsx("td",{children:n.jsx("code",{children:"T[][]"})}),n.jsx("td",{children:"要合并的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => K"})}),n.jsx("td",{children:"迭代器（unionBy 使用）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"(a, b) => boolean"})}),n.jsx("td",{children:"比较器（unionWith 使用）"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：合并去重后的数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 提供 union、unionBy、unionWith"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 扁平化所有数组 → 按规则去重"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": union 用 Set 去重，unionBy 先迭代器映射再去重，unionWith 用比较器"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 多个数组 → 扁平化 → 去重 → 返回结果数组"]}),`
`]})]})}function a(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{a as default};
