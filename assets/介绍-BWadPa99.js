import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import isElement from '../../../packages/element-utils/src/isElement'

const basicDemo = () => {
  const div = document.createElement('div')
  const span = document.createElement('span')
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  action('div 元素')(isElement(div))
  action('span 元素')(isElement(span))
  action('svg 元素')(isElement(svg))
  action('document.body')(isElement(document.body))
  action('document.documentElement')(isElement(document.documentElement))
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import isElement from '../../../packages/element-utils/src/isElement'

const falseDemo = () => {
  const testCases = [
    { label: 'null', value: null },
    { label: 'undefined', value: undefined },
    { label: '字符串 "<div>"', value: '<div>' },
    { label: '数字 123', value: 123 },
    { label: '普通对象', value: { nodeType: 1 } },
    { label: '布尔值 true', value: true },
    { label: '文本节点', value: document.createTextNode('text') },
    { label: '注释节点', value: document.createComment('comment') },
  ]

  testCases.forEach(({ label, value }) => {
    action(label)(isElement(value))
  })
}

export default falseDemo
`;function s(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"iselement",children:"isElement"}),`
`,e.jsx(n.p,{children:"判断一个值是否为 DOM Element 实例。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isElement"})," 使用 ",e.jsx(n.code,{children:"instanceof Element"})," 检测传入的值是否为 DOM Element 实例。Element 是所有 DOM 元素（如 ",e.jsx(n.code,{children:"HTMLElement"}),"、",e.jsx(n.code,{children:"SVGElement"}),"）的基类，通过 ",e.jsx(n.code,{children:"instanceof"})," 可以准确判断值是否为真实的 DOM 元素。"]}),`
`,e.jsx(n.p,{children:"常用于在操作 DOM 之前进行类型守卫，确保传入的值是有效的 DOM 元素，避免在非元素值上调用 DOM API 导致运行时错误。"}),`
`,e.jsx(n.h2,{id:"检测-dom-元素",children:"检测 DOM 元素"}),`
`,e.jsxs(n.p,{children:["验证各种通过 ",e.jsx(n.code,{children:"document.createElement"})," 创建的元素、SVG 元素以及 ",e.jsx(n.code,{children:"document.body"})," 等内置元素均能正确识别为 Element 实例。"]}),`
`,e.jsx(t,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"检测非-element-类型",children:"检测非 Element 类型"}),`
`,e.jsxs(n.p,{children:["验证 ",e.jsx(n.code,{children:"null"}),"、",e.jsx(n.code,{children:"undefined"}),"、字符串、数字、普通对象、文本节点、注释节点等非 Element 值均返回 ",e.jsx(n.code,{children:"false"}),"。注意：文本节点（",e.jsx(n.code,{children:"Text"}),"）和注释节点（",e.jsx(n.code,{children:"Comment"}),"）虽然是 DOM 节点，但不是 Element 的子类，因此返回 ",e.jsx(n.code,{children:"false"}),"。"]}),`
`,e.jsx(t,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"待检测的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value is Element"})}),e.jsx("td",{children:"TypeScript 类型谓词，如果值是 Element 实例则返回 true"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 是唯一的源码文件，导出 ",e.jsx(n.code,{children:"isElement"})," 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 使用 ",e.jsx(n.code,{children:"instanceof Element"})," 进行类型检测"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 利用 TypeScript 的类型谓词（",e.jsx(n.code,{children:"value is Element"}),"）实现类型收窄，调用方在 ",e.jsx(n.code,{children:"if (isElement(value))"})," 分支内可安全使用 Element 的所有属性和方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"与 js-utils 的区别"}),": ",e.jsx(n.code,{children:"js-utils"})," 中的 ",e.jsx(n.code,{children:"isElement"})," 使用 ",e.jsx(n.code,{children:"nodeType === 1"})," 判断，支持跨 iframe 场景；",e.jsx(n.code,{children:"element-utils"})," 中使用 ",e.jsx(n.code,{children:"instanceof Element"}),"，更严格且类型推断更精确"]}),`
`]})]})}function j(l={}){const{wrapper:n}={...c(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{j as default};
