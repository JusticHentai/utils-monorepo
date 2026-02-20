import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import eq from '../../../packages/js-utils/src/eq'

const eqDemo = () => {
  const object = { a: 1 }

  // SameValueZero 比较 — 从 lodash 测试用例提取
  action('eq - 相等的情况')({
    'eq(undefined, undefined)': eq(undefined, undefined),
    'eq(0, -0)': eq(0, -0),
    'eq(NaN, NaN)': eq(NaN, NaN),
    'eq(1, 1)': eq(1, 1),
    'eq(object, object)': eq(object, object),
  })

  action('eq - 不相等的情况')({
    'eq(null, undefined)': eq(null, undefined),
    'eq(1, Object(1))': eq(1, Object(1)),
    'eq(1, "1")': eq(1, '1'),
    'eq(object, { a: 1 })': eq(object, { a: 1 }),
  })
}

export default eqDemo
`,i=`import { action } from 'storybook/actions'
import eq from '../../../packages/js-utils/src/eq'

const edgeCaseDemo = () => {
  action('eq - 边界情况')({
    'NaN vs NaN': eq(NaN, NaN),
    '0 vs -0': eq(0, -0),
    'null vs undefined': eq(null, undefined),
    'null vs null': eq(null, null),
    "1 vs '1'": eq(1, '1'),
    '引用相同对象': eq(Object, Object),
    '不同对象字面量': eq({}, {}),
  })
}

export default edgeCaseDemo
`;function r(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"eq",children:"eq"}),`
`,e.jsx(n.p,{children:"使用 SameValueZero 算法比较两个值是否相等。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"eq"})," 与 ",e.jsx(n.code,{children:"==="})," 严格相等几乎相同，唯一区别是对 ",e.jsx(n.strong,{children:"NaN"})," 的处理："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"==="}),"：",e.jsx(n.code,{children:"NaN === NaN"})," 为 ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"eq"}),"：",e.jsx(n.code,{children:"eq(NaN, NaN)"})," 为 ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["这就是 ",e.jsx(n.a,{href:"https://tc39.es/ecma262/#sec-samevaluezero",rel:"nofollow",children:"SameValueZero"})," 算法，也是 ",e.jsx(n.code,{children:"Map"}),"、",e.jsx(n.code,{children:"Set"}),"、",e.jsx(n.code,{children:"Array.includes"})," 内部使用的比较方式。"]}),`
`,e.jsx(n.h3,{id:"nan-检测原理",children:"NaN 检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (value !== value && other !== other) {
  return true
}
`})}),`
`,e.jsxs(n.p,{children:["JavaScript 中 ",e.jsx(n.code,{children:"NaN"})," 是",e.jsx(n.strong,{children:"唯一一个不等于自身的值"}),"："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"表达式"}),e.jsx("th",{children:"结果"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"NaN !== NaN"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"NaN 不等于自身"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value !== value"})}),e.jsxs("td",{children:["仅当 value 为 NaN 时为 ",e.jsx("code",{children:"true"})]}),e.jsx("td",{children:"利用这个特性检测 NaN"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"1 !== 1"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"其他值都等于自身"})]})]})]}),`
`,e.jsxs(n.p,{children:["因此 ",e.jsx(n.code,{children:"value !== value && other !== other"})," 等价于「两者都是 NaN」，此时返回 ",e.jsx(n.code,{children:"true"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"需要将 NaN 视为相等的比较场景"}),`
`,e.jsxs(n.li,{children:["lodash 内部许多方法（如 ",e.jsx(n.code,{children:"indexOf"}),"、",e.jsx(n.code,{children:"includes"}),"）的基础比较"]}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"eq"})," 的基本使用效果。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"第一个值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"other"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"第二个值"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"描述：两个值 SameValueZero 相等时返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"eq/index.ts"})," 导出 eq 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 先检查两者是否都是 NaN（",e.jsx(n.code,{children:"value !== value && other !== other"}),"），是则返回 true；否则使用 ",e.jsx(n.code,{children:"==="})," 比较"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 利用 NaN 是唯一不等于自身的值这一特性来检测 NaN"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"与 === 的区别"}),": 仅 ",e.jsx(n.code,{children:"NaN"})," 处理不同，",e.jsx(n.code,{children:"0 === -0"})," 仍为 true（SameValueZero 不区分 ±0）"]}),`
`]})]})}function u(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{u as default};
