import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import forIn from '../../../packages/js-utils/src/forIn'

const forInDemo = () => {
  const result: string[] = []
  forIn({ a: 1, b: 2, c: 3 }, (value, key) => {
    result.push(\`\${key}: \${value}\`)
  })
  action('forIn - 遍历所有属性')(result)
}

export default forInDemo
`,c=`import { action } from 'storybook/actions'
import forOwn from '../../../packages/js-utils/src/forOwn'

const forOwnDemo = () => {
  const result: string[] = []
  forOwn({ x: 10, y: 20 }, (value, key) => {
    result.push(\`\${key}=\${value}\`)
  })
  action('forOwn - 仅自有属性')(result)
}

export default forOwnDemo
`;function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"forin",children:"forIn"}),`
`,n.jsx(r.p,{children:"遍历对象的所有可枚举属性（包括继承的）。同时提供 forInRight、forOwn、forOwnRight。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"forIn"})," 使用 ",n.jsx(r.code,{children:"for...in"})," 遍历对象所有可枚举属性（包括原型链上继承的）。",n.jsx(r.code,{children:"forOwn"})," 仅遍历自有属性。两者都支持 Right 版本（逆序遍历）。"]}),`
`,n.jsx(r.h2,{id:"forin---遍历包括继承属性",children:"forIn - 遍历包括继承属性"}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"forown---仅遍历自有属性",children:"forOwn - 仅遍历自有属性"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要遍历的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value, key, object) => unknown"})}),n.jsx("td",{children:"遍历回调"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T"})]}),`
`,n.jsx(r.li,{children:"描述：原对象"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"forIn/index.ts"})," 导出 forIn、forInRight、forOwn、forOwnRight"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": forIn 使用 ",n.jsx(r.code,{children:"for...in"}),"，forOwn 使用 ",n.jsx(r.code,{children:"Object.keys"})," + for 循环"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": ",n.jsx(r.code,{children:"for...in"})," vs ",n.jsx(r.code,{children:"Object.keys"})," 区分继承属性"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 对象属性 → 遍历 → iteratee 回调 → 返回原对象"]}),`
`]})]})}function a(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{a as default};
