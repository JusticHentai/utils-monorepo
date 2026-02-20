import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import bind from '../../../packages/js-utils/src/bind'

const bindDemo = () => {
  // 基础绑定 this
  const greet = function(this: { name: string }, greeting: string) {
    return \`\${greeting}, \${this.name}!\`
  }

  const boundGreet = bind(greet, { name: 'Alice' })
  action('bind - 绑定 this')({
    结果: boundGreet('Hello'),
    说明: 'this.name 被绑定为 Alice',
  })

  // 部分应用参数
  const fn = function(this: { id: number }, a: string, b: string, c: string) {
    return { thisId: this.id, args: [a, b, c] }
  }

  const obj = { id: 1 }
  const bound1 = bind(fn, obj, 'a')
  const bound2 = bind(fn, obj, 'a', 'b')

  action('bind - 部分应用参数')({
    '预设1个参数后调用': bound1('b', 'c'),
    '预设2个参数后调用': bound2('c'),
    说明: '预设的参数会排在调用参数前面',
  })
}

export default bindDemo
`,c=`import { action } from 'storybook/actions'
import bind from '../../../packages/js-utils/src/bind'

const edgeCaseDemo = () => {
  // 无预设参数，仅绑定 this
  const getThis = function (this: { v: number }) {
    return this.v
  }
  const bound0 = bind(getThis, { v: 42 })

  // 预设全部参数
  const sum = function (this: unknown, a: number, b: number, c: number) {
    return a + b + c
  }
  const boundAll = bind(sum, null, 1, 2, 3)

  // 预设参数 + 调用参数合并
  const collect = function (this: unknown, ...args: unknown[]) {
    return args
  }
  const boundPartial = bind(collect, null, 'a', 'b')

  // this 为 null
  const noThis = function (this: unknown, x: number) {
    return x * 2
  }
  const boundNull = bind(noThis, null, 5)

  action('bind - 边界情况')({
    '仅绑定 this': bound0(),
    '预设全部参数': boundAll(),
    '预设参数 + 调用参数': boundPartial('c', 'd'),
    'this 为 null': boundNull(),
  })
}

export default edgeCaseDemo
`;function t(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"bind",children:"bind"}),`
`,n.jsx(i.p,{children:"创建一个绑定到指定对象的函数，支持预设参数。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"bind(func, thisArg, ...partials)"})," 创建一个新函数，将 ",n.jsx(i.code,{children:"func"})," 的 ",n.jsx(i.code,{children:"this"})," 绑定到 ",n.jsx(i.code,{children:"thisArg"}),"，同时可以预设部分参数（partial application）。"]}),`
`,n.jsxs(i.p,{children:["调用绑定函数时，预设参数排在前面，新传入的参数排在后面，合并后通过 ",n.jsx(i.code,{children:"apply"})," 调用原函数。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["将函数的 ",n.jsx(i.code,{children:"this"})," 绑定到特定对象"]}),`
`,n.jsx(i.li,{children:"创建偏函数（partial application），预设部分参数简化后续调用"}),`
`,n.jsx(i.li,{children:"事件处理函数需要固定上下文时"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"bind"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"Function"})}),n.jsx("td",{children:"要绑定的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"thisArg"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"绑定的 this 值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...partials"}),n.jsx("td",{children:n.jsx("code",{children:"any[]"})}),n.jsx("td",{children:"预设的参数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Function"})]}),`
`,n.jsx(i.li,{children:"描述：绑定了 this 和预设参数的新函数"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"bind/index.ts"})," 导出 bind 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 通过闭包保存 ",n.jsx(i.code,{children:"thisArg"})," 和预设参数 ",n.jsx(i.code,{children:"partials"}),"，返回新函数；调用时合并 ",n.jsx(i.code,{children:"[...partials, ...args]"})," 并通过 ",n.jsx(i.code,{children:"apply"})," 绑定 ",n.jsx(i.code,{children:"this"})," 调用原函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": ",n.jsx(i.code,{children:"Function.prototype.apply"})," 绑定 this，展开运算符合并参数"]}),`
`,n.jsxs(i.li,{children:[n.jsxs(i.strong,{children:["与原生 ",n.jsx(i.code,{children:"Function.prototype.bind"})," 的区别"]}),": 功能类似，但实现更简洁，不处理 ",n.jsx(i.code,{children:"new"})," 调用场景"]}),`
`]})]})}function a(s={}){const{wrapper:i}={...d(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(t,{...s})}):t(s)}export{a as default};
