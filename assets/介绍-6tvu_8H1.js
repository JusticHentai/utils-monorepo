import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import isObject from '../../../packages/js-utils/src/isObject'

const objectDemo = () => {
  // 普通对象返回 true
  action('isObject - 对象类型')({
    '{}': isObject({}),
    '{ a: 1 }': isObject({ a: 1 }),
  })

  // 非普通对象返回 false（注意：此实现只匹配 [object Object]）
  action('isObject - 非 [object Object] 返回 false')({
    '[]': isObject([1, 2]),
    'new Date()': isObject(new Date()),
    '/x/': isObject(/x/),
    'function': isObject(() => {}),
    'null': isObject(null),
    '1': isObject(1),
    '"string"': isObject('string'),
  })
}

export default objectDemo
`;function n(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"isobject",children:"isObject"}),`
`,e.jsxs(t.p,{children:["判断值是否为 ",e.jsx(t.code,{children:"[object Object]"})," 类型。"]}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(t.p,{children:["使用 ",e.jsx(t.code,{children:"Object.prototype.toString.call(obj)"})," 检查值是否为纯 Object 类型。注意此实现与 lodash 不同：lodash 的 ",e.jsx(t.code,{children:"isObject"})," 对数组、函数等也返回 true，而此实现仅匹配 ",e.jsx(t.code,{children:"[object Object]"})," 标签。"]}),`
`,e.jsx(t.h2,{id:"isobject---类型检测",children:"isObject - 类型检测"}),`
`,e.jsx(i,{language:"typescript",children:o}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"obj"}),e.jsx("td",{children:e.jsx("code",{children:"any"})}),e.jsx("td",{children:"要检测的值"})]})})]}),`
`,e.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["类型：",e.jsx(t.code,{children:"boolean"})]}),`
`,e.jsx(t.li,{children:"描述：如果是 [object Object] 返回 true"}),`
`]}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"文件职责"}),": ",e.jsx(t.code,{children:"isObject/index.ts"})," 导出 isObject"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"核心流程"}),": ",e.jsx(t.code,{children:"Object.prototype.toString.call(obj)"})," 标签检查"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"关键技术点"}),": 只匹配 ",e.jsx(t.code,{children:"[object Object]"}),"，不匹配数组/函数等"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"数据流向"}),": value → toString → 比较标签 → 返回布尔值"]}),`
`]})]})}function b(c={}){const{wrapper:t}={...s(),...c.components};return t?e.jsx(t,{...c,children:e.jsx(n,{...c})}):n(c)}export{b as default};
