import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import isArray from '../../../packages/js-utils/src/isArray'

const arrayDemo = () => {
  // 数组返回 true
  action('isArray - 数组返回 true')({
    '[1, 2, 3]': isArray([1, 2, 3]),
    '[]': isArray([]),
  })

  // 非数组返回 false
  action('isArray - 非数组返回 false')({
    'true': isArray(true),
    'new Date': isArray(new Date()),
    'new Error': isArray(new Error()),
    '{ 0: 1, length: 1 }': isArray({ 0: 1, length: 1 }),
    '1': isArray(1),
    '/x/': isArray(/x/),
    '"a"': isArray('a'),
    'null': isArray(null),
    'undefined': isArray(undefined),
  })
}

export default arrayDemo
`;function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"isarray",children:"isArray"}),`
`,r.jsx(n.p,{children:"检测值是否为数组。"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:["使用 ",r.jsx(n.code,{children:"Object.prototype.toString.call()"})," 检测值是否为数组类型。对数组返回 ",r.jsx(n.code,{children:"true"}),"，对其他所有值（包括类数组对象）返回 ",r.jsx(n.code,{children:"false"}),"。"]}),`
`,r.jsx(n.h2,{id:"isarray---类型检测",children:"isArray - 类型检测"}),`
`,r.jsx(t,{language:"typescript",children:o}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"obj"}),r.jsx("td",{children:r.jsx("code",{children:"any"})}),r.jsx("td",{children:"要检测的值"})]})})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"boolean"})]}),`
`,r.jsx(n.li,{children:"描述：如果是数组返回 true"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"isArray/index.ts"})," 导出 isArray"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": 使用 ",r.jsx(n.code,{children:"Object.prototype.toString.call(obj)"})," 判断"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": toString 标签比较 ",r.jsx(n.code,{children:"[object Array]"})]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": value → toString → 比较标签 → 返回布尔值"]}),`
`]})]})}function j(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{j as default};
