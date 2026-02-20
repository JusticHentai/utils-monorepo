import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import partial from '../../../packages/js-utils/src/partial'

const partialDemo = () => {
  const greet = (greeting: string, name: string) => greeting + ', ' + name + '!'
  const sayHello = partial(greet, 'Hello')

  action('partial - 预设 greeting')({
    sayHello_Alice: sayHello('Alice'),
    sayHello_Bob: sayHello('Bob'),
  })
}

export default partialDemo
`,c=`import { action } from 'storybook/actions'
import partialRight from '../../../packages/js-utils/src/partialRight'

const partialRightDemo = () => {
  const greet = (greeting: string, name: string) => greeting + ', ' + name + '!'
  const greetAlice = partialRight(greet, 'Alice')

  action('partialRight - 预设 name')({
    Hello_Alice: greetAlice('Hello'),
    Hi_Alice: greetAlice('Hi'),
  })
}

export default partialRightDemo
`;function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"partial",children:"partial"}),`
`,n.jsx(i.p,{children:"创建预设部分参数的函数。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"partial"})," 创建一个函数，预设部分参数（从左侧）。",n.jsx(i.code,{children:"partialRight"})," 从右侧预设参数。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"参数柯里化的替代方案"}),`
`,n.jsx(i.li,{children:"创建特定配置的函数变体"}),`
`,n.jsx(i.li,{children:"减少重复参数传递"}),`
`]}),`
`,n.jsx(i.h2,{id:"左侧预设参数",children:"左侧预设参数"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"partial"})," 从左侧预设部分参数。"]}),`
`,n.jsx(r,{language:"typescript",children:s}),`
`,n.jsx(i.h2,{id:"右侧预设参数",children:"右侧预设参数"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"partialRight"})," 从右侧预设部分参数。"]}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要预设参数的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...partials"}),n.jsx("td",{children:n.jsx("code",{children:"unknown[]"})}),n.jsx("td",{children:"预设的参数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(i.li,{children:"描述：预设部分参数的新函数"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 提供 partial 和 partialRight"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 接收函数和预设参数 → 返回新函数 → 调用时合并预设和新参数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": partial 将预设参数放前面，partialRight 放后面"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 原函数 + 预设参数 → 创建闭包 → 调用时合并参数 → 执行原函数"]}),`
`]})]})}function p(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{p as default};
