import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import isNaNValue from '../../../packages/js-utils/src/isNaNValue'

const isNaNValueDemo = () => {
  action('isNaNValue 演示')({
    'NaN': isNaNValue(NaN),
    'undefined': isNaNValue(undefined),
    '0': isNaNValue(0),
    'null': isNaNValue(null),
    '"NaN"': isNaNValue('NaN'),
  })
}

export default isNaNValueDemo
`,r=`import { action } from 'storybook/actions'
import isNaNValue from '../../../packages/js-utils/src/isNaNValue'

const edgeCaseDemo = () => {
  const results = {
    'NaN': isNaNValue(NaN),
    'Number(NaN)': isNaNValue(Number('abc')),
    'undefined': isNaNValue(undefined),
    '0': isNaNValue(0),
    'null': isNaNValue(null),
  }

  action('isNaNValue - 边界情况')(results)
}

export default edgeCaseDemo
`;function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isnanvalue",children:"isNaNValue"}),`
`,e.jsx(n.p,{children:"检查 value 是否是 NaN"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isNaNValue"})," 用于精确判断一个值是否为 ",e.jsx(n.code,{children:"NaN"}),"。"]}),`
`,e.jsx(n.h3,{id:"nan-的特殊性",children:"NaN 的特殊性"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NaN"}),"（Not a Number）是 JS 中最特殊的值，它有一个独一无二的特性：",e.jsx(n.strong,{children:"NaN 是唯一一个不等于自身的值"}),"。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`NaN === NaN   // false ← 违反直觉，但这是 IEEE 754 浮点数标准的规定
NaN !== NaN   // true  ← 利用这个特性可以判断 NaN
`})}),`
`,e.jsxs(n.p,{children:["JS 中没有任何其他值满足 ",e.jsx(n.code,{children:"value !== value"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`0 !== 0             // false
'' !== ''           // false
null !== null       // false
undefined !== undefined  // false
`})}),`
`,e.jsxs(n.h3,{id:"为什么不用全局-isnan",children:["为什么不用全局 ",e.jsx(n.code,{children:"isNaN()"}),"？"]}),`
`,e.jsxs(n.p,{children:["全局 ",e.jsx(n.code,{children:"isNaN()"})," 会先把参数",e.jsx(n.strong,{children:"隐式转换为数字"}),"，导致误判："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`isNaN('hello')     // true ← 'hello' 先转成 Number('hello') → NaN
isNaN(undefined)   // true ← undefined 先转成 Number(undefined) → NaN
isNaN({})          // true ← {} 先转成 Number({}) → NaN
`})}),`
`,e.jsxs(n.p,{children:["而 ",e.jsx(n.code,{children:"isNaNValue"})," 先用 ",e.jsx(n.code,{children:"typeof === 'number'"})," 过滤，只有真正的数字类型 ",e.jsx(n.code,{children:"NaN"})," 才会返回 ",e.jsx(n.code,{children:"true"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`isNaNValue('hello')     // false ← typeof 'hello' 是 'string'，直接排除
isNaNValue(undefined)   // false ← typeof undefined 是 'undefined'
isNaNValue(NaN)         // true  ← typeof NaN 是 'number'，且 NaN !== NaN
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Number.isNaN()"})," 也能精确判断，但 ",e.jsx(n.code,{children:"isNaNValue"})," 兼容性更好（不依赖 ES6）。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"isNaNValue"})," 的基本使用效果。"]}),`
`,e.jsx(l,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(l,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"描述：如果是 NaN，返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:["实现只有一行：",e.jsx(n.code,{children:"typeof value === 'number' && value !== value"})]}),`
`,e.jsx(n.p,{children:"分两步判断："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"typeof value === 'number'"})}),"：确保是数字类型，排除字符串、对象等（",e.jsx(n.code,{children:"typeof NaN"})," 结果是 ",e.jsx(n.code,{children:"'number'"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"value !== value"})}),"：利用 NaN 不等于自身的特性，只有 NaN 满足这个条件"]}),`
`]}),`
`,e.jsx(n.p,{children:"两个条件缺一不可："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["只有第一步 → ",e.jsx(n.code,{children:"typeof 123 === 'number'"})," 也成立，会误判正常数字"]}),`
`,e.jsx(n.li,{children:"只有第二步 → 理论上够用，但加 typeof 是为了类型收窄，让 TS 更安全"}),`
`]})]})}function j(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
