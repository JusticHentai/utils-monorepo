import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isEmpty from '../../../packages/js-utils/src/isEmpty'

const basicDemo = () => {
  // 空值返回 true
  action('isEmpty - 空值返回 true')({
    'null': isEmpty(null),
    'undefined': isEmpty(undefined),
    '[]': isEmpty([]),
    '{}': isEmpty({}),
    "''": isEmpty(''),
    'true': isEmpty(true),
    '1': isEmpty(1),
    'NaN': isEmpty(NaN),
  })

  // 非空值返回 false
  action('isEmpty - 非空值返回 false')({
    '[0]': isEmpty([0]),
    '{ a: 0 }': isEmpty({ a: 0 }),
    "'a'": isEmpty('a'),
  })

  // 有 length 属性的对象不为空
  action('isEmpty - length 属性对象')({
    '{ length: 0 }': isEmpty({ length: 0 }),
    说明: '有 key 的对象不为空',
  })

  // Map 和 Set
  action('isEmpty - Map/Set')({
    'new Map()': isEmpty(new Map()),
    'new Set()': isEmpty(new Set()),
    'Map(1项)': isEmpty(new Map([['a', 1]])),
    'Set(1项)': isEmpty(new Set([1])),
  })
}

export default basicDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isempty",children:"isEmpty"}),`
`,n.jsx(e.p,{children:"检查值是否为空。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isEmpty"}),' 函数用于检查值是否为"空"。']}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"空的定义"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"null"})," 和 ",n.jsx(e.code,{children:"undefined"})," 为空"]}),`
`,n.jsxs(e.li,{children:["空数组 ",n.jsx(e.code,{children:"[]"})," 为空"]}),`
`,n.jsxs(e.li,{children:["空对象 ",n.jsx(e.code,{children:"{}"})," 为空"]}),`
`,n.jsxs(e.li,{children:["空字符串 ",n.jsx(e.code,{children:"''"})," 为空"]}),`
`,n.jsx(e.li,{children:"空 Map/Set 为空"}),`
`,n.jsx(e.li,{children:"原始类型（数字、布尔值等）视为空"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"表单验证"}),`
`,n.jsx(e.li,{children:"条件渲染"}),`
`,n.jsx(e.li,{children:"数据检查"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(l,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：是否为空"}),`
`]})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
