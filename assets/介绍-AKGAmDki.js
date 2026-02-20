import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import uniq from '../../../packages/js-utils/src/uniq'

const basicDemo = () => {
  // 基础去重
  action('uniq - 基础去重')({
    输入: [2, 1, 2],
    结果: uniq([2, 1, 2]),
  })

  // 字符串去重
  action('uniq - 字符串去重')({
    输入: ['a', 'b', 'a', 'c', 'b'],
    结果: uniq(['a', 'b', 'a', 'c', 'b']),
  })

  // 空数组
  action('uniq - 空数组')(uniq([]))
}

export default basicDemo
`,o=`import { action } from 'storybook/actions'
import uniqBy from '../../../packages/js-utils/src/uniqBy'

const uniqByDemo = () => {
  // Math.floor 去重
  action('uniqBy - Math.floor 去重')({
    输入: [2.1, 1.2, 2.3],
    结果: uniqBy([2.1, 1.2, 2.3], Math.floor),
  })

  // 按属性去重
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice2' },
  ]
  action('uniqBy - 按属性函数去重')({
    输入: users,
    结果: uniqBy(users, (u) => u.id),
  })
}

export default uniqByDemo
`,d=`import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'
import isEqual from '../../../packages/js-utils/src/isEqual'

const uniqWithDemo = () => {
  // 深度比较去重
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ]
  action('uniqWith - 深度比较去重')({
    输入: objects,
    结果: uniqWith(objects, isEqual),
  })
}

export default uniqWithDemo
`;function r(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"uniq",children:"uniq"}),`
`,n.jsx(i.p,{children:"创建一个去重后的数组副本。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"uniq"})," 系列函数用于数组去重，保留首次出现的元素。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"uniq"})," - SameValueZero 比较去重"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"uniqBy"})," - 按迭代函数返回值去重"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"uniqWith"})," - 自定义比较器去重"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数组去重"}),`
`,n.jsx(i.li,{children:"按属性去重对象数组"}),`
`,n.jsx(i.li,{children:"自定义去重逻辑"}),`
`]}),`
`,n.jsx(i.h2,{id:"uniq---基础去重",children:"uniq - 基础去重"}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(i.h2,{id:"uniqby---按属性去重",children:"uniqBy - 按属性去重"}),`
`,n.jsx(e,{language:"typescript",children:o}),`
`,n.jsx(i.h2,{id:"uniqwith---自定义比较",children:"uniqWith - 自定义比较"}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要去重的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"Function | string"})}),n.jsx("td",{children:"迭代函数或属性名（uniqBy）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"Function"})}),n.jsx("td",{children:"比较函数（uniqWith）"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：去重后的新数组"}),`
`]})]})}function m(s={}){const{wrapper:i}={...c(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
