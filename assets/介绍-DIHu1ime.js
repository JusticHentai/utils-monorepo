import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import isNative from '../../../packages/js-utils/src/isNative'

const isNativeDemo = () => {
  action('isNative 演示')({
    'Array.prototype.push': isNative(Array.prototype.push),
    'Object.keys': isNative(Object.keys),
    '箭头函数': isNative(() => {}),
    'null': isNative(null),
  })
}

export default isNativeDemo
`,o=`import { action } from 'storybook/actions'
import isNative from '../../../packages/js-utils/src/isNative'

const edgeCaseDemo = () => {
  const results = {
    'Array.prototype.push': isNative(Array.prototype.push),
    '自定义函数': isNative(() => {}),
    'null': isNative(null),
  }

  action('isNative - 边界情况')(results)
}

export default edgeCaseDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isnative",children:"isNative"}),`
`,n.jsx(e.p,{children:"检查 value 是否是原生函数"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isNative"})," 用于判断一个函数是否是",n.jsx(e.strong,{children:"原生函数"}),"。"]}),`
`,n.jsx(e.h3,{id:"什么是原生函数",children:"什么是原生函数？"}),`
`,n.jsxs(e.p,{children:["原生函数（Native Function）是 JS 引擎（V8、SpiderMonkey 等）用 ",n.jsx(e.strong,{children:"C/C++ 实现"}),"的内置函数，不是用户用 JavaScript 编写的。"]}),`
`,n.jsx(e.p,{children:"常见的原生函数："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数组方法"}),"：",n.jsx(e.code,{children:"Array.prototype.push"}),"、",n.jsx(e.code,{children:"Array.prototype.map"}),"、",n.jsx(e.code,{children:"Array.isArray"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"对象方法"}),"：",n.jsx(e.code,{children:"Object.keys"}),"、",n.jsx(e.code,{children:"Object.assign"}),"、",n.jsx(e.code,{children:"Object.getPrototypeOf"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"构造函数"}),"：",n.jsx(e.code,{children:"Promise"}),"、",n.jsx(e.code,{children:"Map"}),"、",n.jsx(e.code,{children:"Set"}),"、",n.jsx(e.code,{children:"WeakMap"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"工具函数"}),"：",n.jsx(e.code,{children:"JSON.stringify"}),"、",n.jsx(e.code,{children:"parseInt"}),"、",n.jsx(e.code,{children:"encodeURIComponent"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"宿主 API"}),"：",n.jsx(e.code,{children:"console.log"}),"、",n.jsx(e.code,{children:"setTimeout"}),"（由浏览器/Node 提供）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"判断依据",children:"判断依据"}),`
`,n.jsxs(e.p,{children:["每个函数都可以通过 ",n.jsx(e.code,{children:"Function.prototype.toString()"}),' 获取其"源码"字符串：']}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 用户函数 → 返回实际 JS 源码
Function.prototype.toString.call(() => {})
// '() => {}'

// 原生函数 → 返回固定格式，源码被替换为 [native code]
Function.prototype.toString.call(Array.prototype.push)
// 'function push() { [native code] }'
`})}),`
`,n.jsxs(e.p,{children:["因为原生函数是 C/C++ 实现的，没有 JS 源码可展示，所以引擎统一用 ",n.jsx(e.code,{children:"[native code]"})," 占位。",n.jsx(e.code,{children:"isNative"})," 就是通过正则 ",n.jsx(e.code,{children:"/\\[native code\\]/"})," 来检测这个标记。"]}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"特性检测"}),"：判断某个 API 是否被 polyfill 覆盖（polyfill 后 toString 会显示 JS 源码）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"安全检查"}),"：确认使用的是引擎原始实现，而非被篡改的版本"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"兼容性判断"}),"：检测环境是否原生支持某个 API（如 ",n.jsx(e.code,{children:"Promise"}),"、",n.jsx(e.code,{children:"Proxy"}),"）"]}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"isNative"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：如果是原生函数，返回 true"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:"分两步判断："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"typeof value !== 'function'"})}),"：排除非函数值，",n.jsx(e.code,{children:"null"}),"、数字、字符串等直接返回 false"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"/\\[native code\\]/.test(Function.prototype.toString.call(value))"})}),"：获取函数源码字符串，用正则检测是否包含 ",n.jsx(e.code,{children:"[native code]"})]}),`
`]}),`
`,n.jsxs(e.h3,{id:"为什么用-functionprototypetostringcallvalue-而不是-valuetostring",children:["为什么用 ",n.jsx(e.code,{children:"Function.prototype.toString.call(value)"})," 而不是 ",n.jsx(e.code,{children:"value.toString()"}),"？"]}),`
`,n.jsxs(e.p,{children:["和 ",n.jsx(e.code,{children:"getTag"})," 的原理类似——防止函数自身重写了 ",n.jsx(e.code,{children:"toString"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const fn = () => {}
fn.toString = () => 'function fake() { [native code] }'

fn.toString()                              // 'function fake() { [native code] }' ← 被骗了
Function.prototype.toString.call(fn)       // '() => {}' ← 拿到真实源码
`})}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:".call"})," 强制使用原始的 ",n.jsx(e.code,{children:"Function.prototype.toString"}),"，避免被篡改。"]})]})}function p(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{p as default};
