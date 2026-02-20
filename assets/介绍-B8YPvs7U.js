import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const invokeDemo = () => {
  const object = { a: [{ b: { c: [1, 2, 3, 4] } }] }

  action('invoke 基础用法')({
    '字符串路径调用方法': invoke(object, 'a[0].b.c.slice', 1, 3),
    '数组路径调用方法': invoke(object, ['a', '0', 'b', 'c', 'slice'], 1, 3),
  })
}

export default invokeDemo
`,d=`import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const thisBindingDemo = () => {
  const object = {
    a: {
      value: 42,
      getValue() {
        return (this as any).value
      },
    },
  }

  action('invoke this 绑定')({
    说明: 'invoke 使用 method.apply(parent, args)，this 指向方法所在的父对象',
    结果: invoke(object, 'a.getValue'),
  })
}

export default thisBindingDemo
`,t=`import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const edgeCaseDemo = () => {
  action('invoke - 边界情况')({
    'null 对象': invoke(null as any, 'a.b'),
    '路径不存在': invoke({ a: 1 }, 'x.y.z'),
    '路径指向非函数': invoke({ a: { b: 123 } }, 'a.b'),
  })
}

export default edgeCaseDemo
`;function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"invoke",children:"invoke"}),`
`,n.jsx(e.p,{children:"调用对象指定路径上的方法"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"invoke"})," 根据路径字符串在对象上查找并调用方法，支持点号分隔和中括号路径语法。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心特性"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"toPathArray"})," 解析路径，支持 ",n.jsx(e.code,{children:"'a[0].b.c.slice'"})," 等复杂路径"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"method.apply(parent, args)"})," 调用，确保 ",n.jsx(e.code,{children:"this"})," 指向方法所在的父对象"]}),`
`,n.jsxs(e.li,{children:["路径不存在或目标非函数时安全返回 ",n.jsx(e.code,{children:"undefined"})]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"动态调用对象深层方法"}),`
`,n.jsx(e.li,{children:"配置驱动的方法调用（路径来自配置文件）"}),`
`,n.jsxs(e.li,{children:["调用数组原生方法（如 ",n.jsx(e.code,{children:"slice"}),"、",n.jsx(e.code,{children:"sort"}),"）"]}),`
`]}),`
`,n.jsx(e.h2,{id:"基础路径调用",children:"基础路径调用"}),`
`,n.jsx(e.p,{children:"通过字符串路径或数组路径调用对象深层方法，支持传入参数。"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"this-绑定验证",children:"this 绑定验证"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"invoke"})," 内部通过 ",n.jsx(e.code,{children:"method.apply(parent, args)"})," 调用方法，",n.jsx(e.code,{children:"this"})," 指向路径的倒数第二级对象（即方法的直接父对象），而非根对象。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证 null 对象、不存在路径、路径指向非函数等边界条件。"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"T extends Record<string, unknown>"})}),n.jsx("td",{children:"要查询的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"方法路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...args"}),n.jsx("td",{children:n.jsx("code",{children:"unknown[]"})}),n.jsx("td",{children:"传递给方法的参数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown"})]}),`
`,n.jsxs(e.li,{children:["描述：方法调用的返回值，路径无效或非函数时返回 ",n.jsx(e.code,{children:"undefined"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.p,{children:["以 ",n.jsx(e.code,{children:"invoke(object, 'a[0].b.c.slice', 1, 3)"})," 为例："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`第一步：路径解析
toPathArray('a[0].b.c.slice') => ['a', '0', 'b', 'c', 'slice']

第二步：遍历路径定位父对象（除最后一个 key）
parent = object → object.a → object.a[0] → .b → .c
最终 parent = [1, 2, 3, 4]（数组对象）

第三步：获取方法并调用
methodName = 'slice'
method = parent['slice']  （即 Array.prototype.slice）
method.apply(parent, [1, 3])  => [2, 3]
`})}),`
`,n.jsxs(e.p,{children:["关键点：",n.jsx(e.code,{children:"apply(parent, args)"})," 确保 ",n.jsx(e.code,{children:"this"})," 指向 ",n.jsx(e.code,{children:"parent"}),"（即 ",n.jsx(e.code,{children:"[1, 2, 3, 4]"}),"），所以 ",n.jsx(e.code,{children:"slice"})," 能正确操作该数组。"]})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{m as default};
