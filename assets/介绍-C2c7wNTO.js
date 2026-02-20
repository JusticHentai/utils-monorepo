import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import set from '../../../packages/js-utils/src/set'

const basicDemo = () => {
  const object = { a: [{ b: { c: 3 } }] }
  set(object, 'a[0].b.c', 4)

  action('set - 设置嵌套值')({
    结果: object,
    说明: 'a[0].b.c 被设置为 4',
  })

  const object2 = { a: { b: 2 } }
  set(object2, ['x', '0', 'y', 'z'], 5)

  action('set - 数组路径')({
    结果: object2,
    说明: '使用数组格式的路径',
  })
}

export default basicDemo
`,o=`import { action } from 'storybook/actions'
import set from '../../../packages/js-utils/src/set'

const createDemo = () => {
  const object = {}
  set(object, 'a.b.c', 1)

  action('set - 自动创建中间路径')({
    初始对象: {},
    路径: 'a.b.c',
    值: 1,
    结果: object,
    说明: '自动创建不存在的中间路径',
  })

  const object2 = {}
  set(object2, 'a[0].b', 2)

  action('set - 创建数组')({
    结果: object2,
    说明: '路径包含数字索引时创建数组',
  })
}

export default createDemo
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"set",children:"set"}),`
`,n.jsx(e.p,{children:"根据路径设置对象的嵌套属性值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"set"})," 函数用于设置对象的嵌套属性值，如果路径不存在会自动创建。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"路径格式"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["字符串：",n.jsx(e.code,{children:"'a.b.c'"})," 或 ",n.jsx(e.code,{children:"'a[0].b.c'"})]}),`
`,n.jsxs(e.li,{children:["数组：",n.jsx(e.code,{children:"['a', '0', 'b', 'c']"})]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"动态设置深层嵌套属性"}),`
`,n.jsx(e.li,{children:"构建复杂数据结构"}),`
`,n.jsx(e.li,{children:"表单数据处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础路径设置",children:"基础路径设置"}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"自动创建路径",children:"自动创建路径"}),`
`,n.jsx(c,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"object"})}),n.jsx("td",{children:"要修改的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"属性路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"要设置的值"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"object"})]}),`
`,n.jsx(e.li,{children:"描述：修改后的对象（原对象）"}),`
`]})]})}function b(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{b as default};
