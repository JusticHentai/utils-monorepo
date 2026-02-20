import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import method from '../../../packages/js-utils/src/method'

const methodDemo = () => {
  // lodash 测试: 调用对象上指定路径的方法
  const obj = { a: () => 1 }
  const callA = method('a')
  action('method - 基础调用')({
    'method("a")(obj)': callA(obj),
    期望: 1,
  })

  // lodash 测试: 深层路径
  const deep = { a: { b: () => 2 } }
  action('method - 深层路径')({
    'method("a.b")(deep)': method('a.b')(deep),
    期望: 2,
  })

  // lodash 测试: 传递部分参数
  const obj2 = { fn: (...args: number[]) => args }
  action('method - 部分参数')({
    'method("fn", 1, 2, 3)(obj)': method('fn', 1, 2, 3)(obj2),
    期望: [1, 2, 3],
  })

  // lodash 测试: 深层方法的 this 绑定
  const withThis = { a: { b() { return (this as any).c }, c: 1 } }
  action('method - this 绑定')({
    'method("a.b")(withThis)': method('a.b')(withThis),
    说明: '深层方法的 this 绑定到父对象',
  })

  // lodash 测试: 路径不存在返回 undefined
  action('method - 路径不存在')({
    'method("x")(obj)': method('x')(obj),
    'method("a.b.c")({})': method('a.b.c')({}),
    期望: undefined,
  })
}

export default methodDemo`,i=`import { action } from 'storybook/actions'
import methodOf from '../../../packages/js-utils/src/methodOf'

const methodOfDemo = () => {
  const obj = {
    greet: (name: string) => 'Hello, ' + name,
    farewell: (name: string) => 'Goodbye, ' + name,
  }

  const callOnObj = methodOf(obj, 'World')

  action('methodOf - greet')({ 结果: callOnObj('greet') })
  action('methodOf - farewell')({ 结果: callOnObj('farewell') })
}

export default methodOfDemo
`;function d(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"method",children:"method"}),`
`,n.jsx(e.p,{children:"创建调用指定路径方法的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"method"})," 创建一个函数，该函数调用传入对象上指定路径的方法。",n.jsx(e.code,{children:"methodOf"})," 是反向版本，先绑定对象。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"动态方法调用"}),`
`,n.jsx(e.li,{children:"函数式编程中的方法引用"}),`
`,n.jsx(e.li,{children:"配置驱动的对象操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"method-创建方法调用函数",children:"method 创建方法调用函数"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"method"})," 创建一个函数，调用传入对象上指定路径的方法。"]}),`
`,n.jsx(t,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"methodof-绑定对象",children:"methodOf 绑定对象"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"methodOf"})," 先绑定对象，再通过不同路径调用方法。"]}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"方法路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...args"}),n.jsx("td",{children:n.jsx("code",{children:"unknown[]"})}),n.jsx("td",{children:"传递给方法的参数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(object) => unknown"})]}),`
`,n.jsx(e.li,{children:"描述：调用指定路径方法的函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 method 和 methodOf 两个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": method 接收路径和参数 → 返回闭包 → 闭包接收对象并调用路径方法"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 路径解析、参数预设、method/methodOf 互为反向操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 路径 + 参数 → 创建闭包 → 接收对象 → 解析路径 → 调用方法"]}),`
`]})]})}function a(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{a as default};
