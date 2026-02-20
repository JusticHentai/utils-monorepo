import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import ary from '../../../packages/js-utils/src/ary'

const aryDemo = () => {
  const withoutAry = ['6', '8', '10'].map(parseInt)
  const withAry = ['6', '8', '10'].map(ary(parseInt, 1))

  action('ary - 修复 map + parseInt')({
    '直接使用 parseInt': withoutAry,
    '使用 ary(parseInt, 1)': withAry,
  })

  const fn = (...args: unknown[]) => args
  action('ary - 限制参数数量')({
    '原函数接收所有参数': fn('a', 'b', 'c', 'd'),
    'ary(fn, 2) 只取前2个': ary(fn, 2)('a', 'b', 'c', 'd'),
    'ary(fn, 0) 不取参数': ary(fn, 0)('a', 'b'),
  })
}

export default aryDemo
`,t=`import { action } from 'storybook/actions'
import ary from '../../../packages/js-utils/src/ary'

const defaultAndNestedDemo = () => {
  // 默认使用 func.length
  const fn3 = (a: unknown, b: unknown, c: unknown) => [a, b, c]
  const capped = ary(fn3)

  action('ary - 默认使用 func.length')({
    'func.length': fn3.length,
    '传4个参数的结果': capped('a', 'b', 'c', 'd'),
    说明: '未指定 n 时，使用 func.length (3) 作为限制',
  })

  // 嵌套 ary：使用更小的 cap
  const fn = (...args: unknown[]) => args
  const innerCap = ary(fn, 1)
  const outerCap = ary(innerCap, 2)

  action('ary - 嵌套使用更小的 cap')({
    'ary(fn, 1) 传3个参数': innerCap('a', 'b', 'c'),
    'ary(ary(fn, 1), 2) 传3个参数': outerCap('a', 'b', 'c'),
    说明: '内层限制为 1，外层限制为 2，实际只取 1 个参数',
  })
}

export default defaultAndNestedDemo
`;function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"ary",children:"ary"}),`
`,n.jsx(r.p,{children:"创建一个最多接受 n 个参数的函数，忽略多余参数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"ary(func, n)"})," 用于限制传递给函数的参数数量。在函数式编程中，当函数作为高阶函数的回调时（如 ",n.jsx(r.code,{children:"map"}),"），可能会收到不需要的额外参数，",n.jsx(r.code,{children:"ary"})," 可以避免这个问题。"]}),`
`,n.jsxs(r.p,{children:["最经典的场景是 ",n.jsx(r.code,{children:"['6', '8', '10'].map(parseInt)"})," 的问题："]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Array.prototype.map"})," 的回调会接收三个参数 ",n.jsx(r.code,{children:"(value, index, array)"}),"，而 ",n.jsx(r.code,{children:"parseInt"})," 的签名是 ",n.jsx(r.code,{children:"parseInt(string, radix)"}),"，这意味着 ",n.jsx(r.code,{children:"map"})," 传递的 ",n.jsx(r.code,{children:"index"})," 会被 ",n.jsx(r.code,{children:"parseInt"})," 当作 ",n.jsx(r.code,{children:"radix"}),"（进制）使用："]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"调用次数"}),n.jsx("th",{children:"map 传给回调的参数"}),n.jsx("th",{children:"parseInt 接收到的参数"}),n.jsx("th",{children:"结果"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"第 1 次"}),n.jsx("td",{children:n.jsx("code",{children:"'6', 0, [...]"})}),n.jsxs("td",{children:[n.jsx("code",{children:"parseInt('6', 0)"})," — radix=0 按十进制解析"]}),n.jsx("td",{children:n.jsx("code",{children:"6"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"第 2 次"}),n.jsx("td",{children:n.jsx("code",{children:"'8', 1, [...]"})}),n.jsxs("td",{children:[n.jsx("code",{children:"parseInt('8', 1)"})," — radix=1 无效进制"]}),n.jsx("td",{children:n.jsx("code",{children:"NaN"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"第 3 次"}),n.jsx("td",{children:n.jsx("code",{children:"'10', 2, [...]"})}),n.jsxs("td",{children:[n.jsx("code",{children:"parseInt('10', 2)"})," — radix=2 按二进制解析"]}),n.jsx("td",{children:n.jsx("code",{children:"2"})})]})]})]}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"ary(parseInt, 1)"})," 后，只传第 1 个参数 ",n.jsx(r.code,{children:"value"}),"，",n.jsx(r.code,{children:"radix"})," 不会被错误传入，结果为 ",n.jsx(r.code,{children:"[6, 8, 10]"}),"。"]}),`
`,n.jsx(r.h2,{id:"限制参数数量",children:"限制参数数量"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"默认值与嵌套用法",children:"默认值与嵌套用法"}),`
`,n.jsxs(r.p,{children:["不传 n 时默认使用 ",n.jsx(r.code,{children:"func.length"}),"；嵌套使用 ",n.jsx(r.code,{children:"ary"})," 时，较小的 cap 生效。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"T extends (...args: any[]) => any"})}),n.jsx("td",{children:"要限制参数的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大参数数量，默认为 func.length"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(r.li,{children:"描述：参数受限的新函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"ary/index.ts"})," 导出 ary（default）和 unary（named）"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 返回新函数，内部对 arguments 进行 slice 截取前 n 个后调用原函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": ",n.jsx(r.code,{children:"Array.prototype.slice"})," 截取参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 新函数接收参数 → 截取前 n 个 → 传递给原函数"]}),`
`]})]})}function p(e={}){const{wrapper:r}={...c(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}export{p as default};
