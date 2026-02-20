import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const basicDemo = () => {
  action('字符串')(getTag('hello'))
  action('数字')(getTag(123))
  action('布尔值')(getTag(true))
  action('null')(getTag(null))
  action('undefined')(getTag(undefined))
  action('数组')(getTag([1, 2, 3]))
  action('普通对象')(getTag({ a: 1 }))
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const builtinTypesDemo = () => {
  action('Date')(getTag(new Date()))
  action('RegExp')(getTag(/abc/))
  action('Map')(getTag(new Map()))
  action('Set')(getTag(new Set()))
  action('WeakMap')(getTag(new WeakMap()))
  action('WeakSet')(getTag(new WeakSet()))
  action('Error')(getTag(new Error('test')))
  action('ArrayBuffer')(getTag(new ArrayBuffer(8)))
  action('Uint8Array')(getTag(new Uint8Array()))
  action('Promise')(getTag(Promise.resolve()))
}

export default builtinTypesDemo
`,s=`import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const typeofCompareDemo = () => {
  // typeof 无法区分的情况
  action('typeof null')(typeof null) // 'object'
  action('typeof []')(typeof []) // 'object'
  action('typeof {}')(typeof {}) // 'object'
  action('typeof new Date()')(typeof new Date()) // 'object'
  action('typeof /abc/')(typeof /abc/) // 'object'

  // getTag 可以精确区分
  action('getTag(null)')(getTag(null)) // '[object Null]'
  action('getTag([])')(getTag([])) // '[object Array]'
  action('getTag({})')(getTag({})) // '[object Object]'
  action('getTag(new Date())')(getTag(new Date())) // '[object Date]'
  action('getTag(/abc/)')(getTag(/abc/)) // '[object RegExp]'
}

export default typeofCompareDemo
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"gettag",children:"getTag"}),`
`,e.jsxs(n.p,{children:["获取值的内部类型标签，返回形如 ",e.jsx(n.code,{children:"'[object Type]'"})," 的字符串。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getTag"})," 是类型检测的基础工具，封装了 ",e.jsx(n.code,{children:"Object.prototype.toString.call"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["为什么不用 ",e.jsx(n.code,{children:"typeof"}),"？"]})," 因为 ",e.jsx(n.code,{children:"typeof"})," 对很多类型都返回 ",e.jsx(n.code,{children:"'object'"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`typeof null        // 'object'  ← 著名的 JS bug
typeof []          // 'object'
typeof new Date()  // 'object'
typeof /abc/       // 'object'
typeof new Map()   // 'object'
`})}),`
`,e.jsxs(n.p,{children:["而 ",e.jsx(n.code,{children:"Object.prototype.toString.call"})," 能精确区分所有内置类型，因为它读取对象内部的 ",e.jsx(n.code,{children:"[[Class]]"})," 标签："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`getTag(null)        // '[object Null]'
getTag([])          // '[object Array]'
getTag(new Date())  // '[object Date]'
getTag(/abc/)       // '[object RegExp]'
getTag(new Map())   // '[object Map]'
`})}),`
`,e.jsxs(n.p,{children:["被 ",e.jsx(n.code,{children:"isEqual"}),"、",e.jsx(n.code,{children:"isError"}),"、",e.jsx(n.code,{children:"isTypedArray"}),"、",e.jsx(n.code,{children:"isArray"}),"、",e.jsx(n.code,{children:"isMap"})," 等 17 个类型检测工具内部使用。"]}),`
`,e.jsx(n.h2,{id:"基础类型检测",children:"基础类型检测"}),`
`,e.jsx(n.p,{children:"检测原始类型和常见类型的标签。"}),`
`,e.jsx(c,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"内置对象类型",children:"内置对象类型"}),`
`,e.jsx(n.p,{children:"检测各种内置对象（Date、Map、Set、Error 等）的标签。"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"对比-typeof-的局限",children:"对比 typeof 的局限"}),`
`,e.jsxs(n.p,{children:["展示 ",e.jsx(n.code,{children:"typeof"})," 对多种类型都返回 ",e.jsx(n.code,{children:"'object'"}),"，而 ",e.jsx(n.code,{children:"getTag"})," 能精确区分。"]}),`
`,e.jsx(c,{language:"typescript",children:s}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要获取类型标签的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:["描述：类型标签字符串，格式为 ",e.jsx(n.code,{children:"'[object Type]'"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"常见返回值对照表",children:"常见返回值对照表"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"输入值"}),e.jsx("th",{children:"返回值"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'hello'"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object String]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"123"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Number]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Boolean]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"null"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Null]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Undefined]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Symbol()"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Symbol]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Array]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Object]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"new Date()"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Date]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/abc/"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object RegExp]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"new Map()"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Map]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"new Set()"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Set]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"new Error()"})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Error]'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("code",{children:["() => ","{}"]})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Function]'"})})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:["实现只有一行：",e.jsx(n.code,{children:"Object.prototype.toString.call(value)"})]}),`
`,e.jsxs(n.h3,{id:"为什么用-objectprototypetostring-而不是直接-tostring",children:["为什么用 ",e.jsx(n.code,{children:"Object.prototype.toString"})," 而不是直接 ",e.jsx(n.code,{children:".toString()"}),"？"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`[1,2].toString()        // '1,2'  ← Array 自己重写了 toString
new Date().toString()   // 'Tue Feb 17 2026 ...'  ← Date 也重写了
`})}),`
`,e.jsxs(n.p,{children:["很多类型都重写了 ",e.jsx(n.code,{children:"toString"}),"，返回的是人类可读的字符串，不是类型标签。"]}),`
`,e.jsxs(n.p,{children:["而 ",e.jsx(n.code,{children:"Object.prototype.toString"})," 是",e.jsx(n.strong,{children:"原始版本"}),"，它会读取对象内部的 ",e.jsx(n.code,{children:"Symbol.toStringTag"})," 或 ",e.jsx(n.code,{children:"[[Class]]"})," 属性，返回统一格式的 ",e.jsx(n.code,{children:"'[object Type]'"}),"。"]}),`
`,e.jsxs(n.h3,{id:"为什么用-callvalue",children:["为什么用 ",e.jsx(n.code,{children:".call(value)"}),"？"]}),`
`,e.jsxs(n.p,{children:["因为我们要调用的是 ",e.jsx(n.code,{children:"Object.prototype"})," 上的 ",e.jsx(n.code,{children:"toString"}),"，但要让它作用在 ",e.jsx(n.code,{children:"value"})," 上（改变 ",e.jsx(n.code,{children:"this"})," 指向）："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// 等价于让 value 作为 this 去调用 Object.prototype.toString
Object.prototype.toString.call(value)
// 而不是
value.toString()  // 这会调用 value 自己的 toString，结果不同
`})})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
