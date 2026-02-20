import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const windowDemo = () => {
  const result = isScrollTarget(window)

  action('isScrollTarget(window)')(result)
  action('Window 是有效的滚动目标')(\`返回 \${result}\`)
}

export default windowDemo
`,o=`import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const elementDemo = () => {
  const element = document.body
  const result = isScrollTarget(element)

  action('isScrollTarget(Element)')(result)
  action('Element 是有效的滚动目标')(\`返回 \${result}\`)
}

export default elementDemo
`,i=`import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const eventTargetDemo = () => {
  // 创建一个非 Window/Element 的 EventTarget
  const customTarget = new EventTarget()
  const result = isScrollTarget(customTarget)

  action('isScrollTarget(EventTarget)')(result)
  action('普通 EventTarget 不是有效的滚动目标')(\`返回 \${result}\`)
}

export default eventTargetDemo
`;function l(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isscrolltarget",children:"isScrollTarget"}),`
`,e.jsx(n.p,{children:"判断目标是否为可滚动元素（Window 或 Element），用于类型守卫和滚动事件处理。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isScrollTarget"})," 是一个类型守卫函数，用于判断传入的 ",e.jsx(n.code,{children:"EventTarget"})," 是否为有效的滚动目标。"]}),`
`,e.jsxs(n.p,{children:["在处理滚动事件时，事件的 ",e.jsx(n.code,{children:"target"})," 或 ",e.jsx(n.code,{children:"currentTarget"})," 属性返回的是 ",e.jsx(n.code,{children:"EventTarget"})," 类型，但滚动相关的 API（如 ",e.jsx(n.code,{children:"scrollTop"}),"、",e.jsx(n.code,{children:"scrollLeft"}),"、",e.jsx(n.code,{children:"scrollX"}),"、",e.jsx(n.code,{children:"scrollY"}),"）只存在于 ",e.jsx(n.code,{children:"Window"})," 和 ",e.jsx(n.code,{children:"Element"})," 上。此函数帮助我们安全地进行类型收窄，确保后续操作的类型安全。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"使用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"滚动事件回调中判断事件目标"}),`
`,e.jsxs(n.li,{children:["需要从 ",e.jsx(n.code,{children:"EventTarget"})," 收窄到 ",e.jsx(n.code,{children:"ScrollTarget"})," 类型时"]}),`
`,e.jsxs(n.li,{children:["配合 ",e.jsx(n.code,{children:"getScrollPosition"})," 等滚动相关工具使用"]}),`
`]}),`
`,e.jsx(n.h2,{id:"检测-window-对象",children:"检测 Window 对象"}),`
`,e.jsx(n.p,{children:"Window 对象是最常见的滚动容器，代表整个浏览器窗口的滚动。"}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"检测-element-对象",children:"检测 Element 对象"}),`
`,e.jsxs(n.p,{children:["任何 DOM 元素都可以成为滚动容器，只要设置了 ",e.jsx(n.code,{children:"overflow: auto/scroll"})," 样式。"]}),`
`,e.jsx(t,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"检测其他-eventtarget",children:"检测其他 EventTarget"}),`
`,e.jsx(n.p,{children:"对于不是 Window 或 Element 的 EventTarget（如自定义事件目标），函数返回 false。"}),`
`,e.jsx(t,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"EventTarget"})}),e.jsx("td",{children:"要判断的事件目标"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"target is ScrollTarget"})}),e.jsx("td",{children:"类型谓词，为 true 时 target 被收窄为 Window | Element"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),": 导出 ",e.jsx(n.code,{children:"isScrollTarget"})," 类型守卫函数"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"检查 target 是否等于 window 对象"}),`
`,e.jsx(n.li,{children:"检查 target 是否是 Element 的实例"}),`
`,e.jsx(n.li,{children:"满足任一条件返回 true，TypeScript 自动收窄类型"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 TypeScript 的类型谓词 ",e.jsx(n.code,{children:"target is ScrollTarget"})," 实现类型守卫"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"instanceof Element"})," 判断是否为 DOM 元素"]}),`
`,e.jsxs(n.li,{children:["复用 ",e.jsx(n.code,{children:"ScrollTarget"})," 类型定义，与 ",e.jsx(n.code,{children:"getScrollPosition"})," 保持一致"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据流向"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`EventTarget → isScrollTarget() → boolean (类型守卫)
                                    ↓
                            target 被收窄为 ScrollTarget
`})})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{m as default};
