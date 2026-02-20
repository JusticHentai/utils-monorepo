import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import identity from '../../../packages/js-utils/src/identity'

const basicDemo = () => {
  const object = { name: 'fred' }

  // 返回相同引用
  action('identity - 返回相同引用')({
    'identity(object) === object': identity(object) === object,
  })

  // 常用作默认 iteratee
  action('identity - 各种类型')({
    数字: identity(42),
    字符串: identity('hello'),
    布尔: identity(true),
    null: identity(null),
    undefined: identity(undefined),
  })

  // 实际用途：作为默认迭代器
  action('identity - 作为 filter 迭代器')(
    [0, 1, false, 2, '', 3].filter(identity as any),
  )
}

export default basicDemo
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"identity",children:"identity"}),`
`,n.jsx(e.p,{children:"返回接收到的第一个参数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"identity"})," 看似无用，实际上是函数式编程中非常重要的基础工具，主要用作",n.jsx(e.strong,{children:"默认回调/占位函数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"默认 iteratee"}),"：很多工具函数需要接收转换函数，",n.jsx(e.code,{children:"identity"}),' 作为默认值表示"不做任何转换"，如 ',n.jsx(e.code,{children:"sortBy(arr)"})," 不传 iteratee 时按原值排序"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"过滤假值"}),"：",n.jsx(e.code,{children:"[0, 1, false, 2, '', 3].filter(identity)"})," => ",n.jsx(e.code,{children:"[1, 2, 3]"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"函数组合占位"}),"：在 ",n.jsx(e.code,{children:"flow"}),"/",n.jsx(e.code,{children:"pipe"})," 中作为无操作环节，如 ",n.jsx(e.code,{children:"flow(parse, needFormat ? format : identity, serialize)"})]}),`
`]}),`
`,n.jsx(e.p,{children:'本质上是函数式编程的"零元素"——不改变任何东西，但让接口保持统一。'}),`
`,n.jsx(e.h2,{id:"返回自身",children:"返回自身"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"任意值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T"})]}),`
`,n.jsx(e.li,{children:"描述：传入的值"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"identity/index.ts"})," 导出 ",n.jsx(e.code,{children:"identity"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 直接返回第一个参数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 函数式编程的恒等函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": value → 直接返回 value"]}),`
`]})]})}function a(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{a as default};
