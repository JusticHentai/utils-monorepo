import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import functions from '../../../packages/js-utils/src/functions'
import functionsIn from '../../../packages/js-utils/src/functionsIn'

const basicDemo = () => {
  // 只返回函数属性名
  const obj = {
    a: 'string',
    b: () => {},
    c: /regex/,
    d: () => {},
  }
  action('functions - 只返回函数属性名')(
    functions(obj).sort(),
  )

  // functions 不包含继承的函数
  class Foo {
    a = () => {}
    b = 'not a function'
  }
  Foo.prototype.c = function() {} as any

  const foo = new Foo()
  action('functions - 不包含继承的函数')(
    functions(foo as any),
  )

  // functionsIn 包含继承的函数
  action('functionsIn - 包含继承的函数')(
    functionsIn(foo as any),
  )
}

export default basicDemo
`;function i(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"functions",children:"functions"}),`
`,n.jsx(s.p,{children:"返回对象自身的函数属性名数组。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"functions"})," 返回对象自身可枚举属性中类型为函数的键名。",n.jsx(s.code,{children:"functionsIn"})," 包含继承的属性。"]}),`
`,n.jsx(s.h2,{id:"functions--functionsin---获取函数属性名",children:"functions / functionsIn - 获取函数属性名"}),`
`,n.jsx(t,{language:"typescript",children:e}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要检查的对象"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string[]"})]}),`
`,n.jsx(s.li,{children:"描述：函数属性名数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"functions/index.ts"})," 导出 functions（default）和 functionsIn（named）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历对象属性，筛选 typeof 为 function 的键"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": Object.keys 获取自身属性，for...in 获取继承属性"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": object → 遍历键 → typeof 检查 → 返回函数名数组"]}),`
`]})]})}function u(o={}){const{wrapper:s}={...c(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(i,{...o})}):i(o)}export{u as default};
