import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import conformsTo from '../../../packages/js-utils/src/conformsTo'

const conformsToDemo = () => {
  const obj = { a: 1, b: 'hello' }

  action('conformsTo - 满足约束')(
    conformsTo(obj, {
      a: (v: unknown) => typeof v === 'number' && (v as number) > 0,
      b: (v: unknown) => typeof v === 'string',
    }),
  )

  action('conformsTo - 不满足约束')(
    conformsTo(obj, {
      a: (v: unknown) => (v as number) > 10,
    }),
  )
}

export default conformsToDemo
`,t=`import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const conformsDemo = () => {
  const isAdult = conforms({
    age: (v: unknown) => (v as number) >= 18,
  })

  action('conforms - 创建验证函数')({
    '{ age: 20 }': isAdult({ age: 20 }),
    '{ age: 10 }': isAdult({ age: 10 }),
  })
}

export default conformsDemo
`;function e(s){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"conformsto",children:"conformsTo"}),`
`,n.jsx(o.p,{children:"检查对象是否符合源对象的约束条件。"}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"conformsTo"})," 检查对象的属性值是否满足对应的断言函数。",n.jsx(o.code,{children:"conforms"})," 则创建一个可复用的验证函数。常用于数据验证场景，例如检查用户输入是否符合规则。"]}),`
`,n.jsx(o.h2,{id:"conformsto---检查对象约束",children:"conformsTo - 检查对象约束"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(o.h2,{id:"conforms---创建约束函数",children:"conforms - 创建约束函数"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要检查的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, (value) => boolean>"})}),n.jsx("td",{children:"约束条件对象，每个属性值是一个断言函数"})]})]})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"boolean"})]}),`
`,n.jsx(o.li,{children:"描述：是否符合所有约束"}),`
`]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"文件职责"}),": ",n.jsx(o.code,{children:"conformsTo/index.ts"})," 导出 conformsTo（default）和 conforms（named）"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"核心流程"}),": 遍历 source 的每个属性，用其断言函数检查 object 对应属性的值"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"关键技术点"}),": ",n.jsx(o.code,{children:"Object.keys"})," 遍历约束属性，",n.jsx(o.code,{children:"every"})," 确保全部满足"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"数据流向"}),": 对象属性值 → 传入对应断言函数 → 所有断言返回 true 则整体为 true"]}),`
`]})]})}function a(s={}){const{wrapper:o}={...c(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(e,{...s})}):e(s)}export{a as default};
