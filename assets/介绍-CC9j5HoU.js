import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import wrap from '../../../packages/js-utils/src/wrap'

const wrapDemo = () => {
  // 基础：字符串包装
  const hello = wrap('Hello', (value: string, name: unknown) => value + ', ' + name + '!')
  action('wrap - 字符串包装')({
    'hello("World")': hello('World'),
    'hello("Alice")': hello('Alice'),
  })

  // 包装函数接收正确参数：[value, ...args]
  let capturedArgs: unknown[] = []
  const noop = () => {}
  const wrapped = wrap(noop, (...args: unknown[]) => {
    capturedArgs = args
  })
  wrapped(1, 2, 3)
  action('wrap - 包装函数接收 [value, ...args]')({
    参数长度: capturedArgs.length,
    '第一个是原函数': capturedArgs[0] === noop,
    '后续参数': [capturedArgs[1], capturedArgs[2], capturedArgs[3]],
  })

  // 数值包装
  const double = wrap(2, (multiplier: number, value: unknown) => multiplier * (value as number))
  action('wrap - 数值包装')({
    'double(5)': double(5),
    'double(10)': double(10),
  })

  // HTML 包装
  const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const p = wrap(escapeHtml, (func: (s: string) => string, text: unknown) =>
    '<p>' + func(text as string) + '</p>'
  )
  action('wrap - HTML 包装')(p('fred, barney, & pebbles'))
}

export default wrapDemo
`;function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"wrap",children:"wrap"}),`
`,n.jsx(r.p,{children:"创建包装函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"wrap"})," 创建一个函数，将指定值作为第一个参数传入包装函数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"函数装饰器模式"}),`
`,n.jsx(r.li,{children:"在函数调用前后添加逻辑"}),`
`,n.jsx(r.li,{children:"参数注入"}),`
`]}),`
`,n.jsx(r.h2,{id:"函数包装",children:"函数包装"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"wrap"})," 创建一个包装函数，将指定值注入为第一个参数。"]}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要包装的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wrapper"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T, ...args) => R"})}),n.jsx("td",{children:"包装函数"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => R"})]}),`
`,n.jsx(r.li,{children:"描述：包装后的函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 实现函数包装"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 接收值和包装函数 → 返回新函数 → 调用时将值作为第一个参数传入包装函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 闭包捕获值，参数前置"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 值 + 包装函数 → 创建闭包 → 调用时 [value, ...args] → 包装函数执行"]}),`
`]})]})}function x(e={}){const{wrapper:r}={...l(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
