import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import head from '../../../packages/js-utils/src/head'

const headDemo = () => {
  // 基础：获取第一个元素
  action('head - 获取第一个元素')(
    head([1, 2, 3, 4]),
  )

  // 空数组返回 undefined
  action('head - 空数组返回 undefined')(
    head([]),
  )

  // 可作为 map 迭代器
  action('head - 作为 map 迭代器')(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(head),
  )
}

export default headDemo
`,h=`import { action } from 'storybook/actions'
import head, { first } from '../../../packages/js-utils/src/head'

const firstDemo = () => {
  // first 是 head 的别名
  action('first === head')(first === head)

  action('first - 用法与 head 相同')(
    first(['a', 'b', 'c']),
  )
}

export default firstDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"head",children:"head"}),`
`,n.jsx(e.p,{children:"获取数组的第一个元素。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"head"})," 函数用于获取数组的第一个元素，",n.jsx(e.code,{children:"first"})," 是其别名。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"获取列表的第一项"}),`
`,n.jsx(e.li,{children:"取出队列头部元素"}),`
`,n.jsx(e.li,{children:"获取默认选中项"}),`
`]}),`
`,n.jsx(e.h2,{id:"head-1",children:"head"}),`
`,n.jsx(d,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"first别名",children:"first（别名）"}),`
`,n.jsx(d,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要查询的数组"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T | undefined"})]}),`
`,n.jsx(e.li,{children:"描述：数组的第一个元素，空数组返回 undefined"}),`
`]})]})}function m(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{m as default};
