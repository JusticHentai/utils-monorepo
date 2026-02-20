import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import isPlainObject from '../../../packages/js-utils/src/isPlainObject'

const isPlainObjectDemo = () => {
  // 普通对象
  action('isPlainObject - 普通对象')({
    '{}': isPlainObject({}),
    '{ a: 1 }': isPlainObject({ a: 1 }),
    'Object.create(null)': isPlainObject(Object.create(null)),
    'new Object()': isPlainObject(new Object()),
  })

  // 非普通对象
  class Foo { a = 1 }
  action('isPlainObject - 非普通对象')({
    '[]': isPlainObject([]),
    'new Date()': isPlainObject(new Date()),
    'new Foo()': isPlainObject(new Foo()),
    'null': isPlainObject(null),
    '"string"': isPlainObject('string'),
    '1': isPlainObject(1),
    'function': isPlainObject(() => {}),
  })
}

export default isPlainObjectDemo
`;function i(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isplainobject",children:"isPlainObject"}),`
`,e.jsx(n.p,{children:"检查值是否为普通对象。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isPlainObject"})," 判断一个值是否为",e.jsx(n.strong,{children:"普通对象"}),"——即由 ",e.jsx(n.code,{children:"{}"})," 字面量、",e.jsx(n.code,{children:"new Object()"})," 或 ",e.jsx(n.code,{children:"Object.create(null)"})," 创建的对象，而非 ",e.jsx(n.code,{children:"new Date()"}),"、",e.jsx(n.code,{children:"new Array()"})," 等特殊对象。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"深拷贝/深合并时区分普通对象和特殊对象（Date、RegExp 等需要特殊处理）"}),`
`,e.jsx(n.li,{children:"配置对象验证：确保传入的是纯数据对象"}),`
`,e.jsx(n.li,{children:"序列化前检查：只有普通对象才能安全地 JSON 序列化"}),`
`]}),`
`,e.jsx(n.h2,{id:"普通对象检测",children:"普通对象检测"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"isPlainObject"})," 检测各种值是否为普通对象。"]}),`
`,e.jsx(r,{language:"typescript",children:s}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"value is Record<string, unknown>"})]}),`
`,e.jsx(n.li,{children:"描述：值是否为普通对象"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.p,{children:"分三层判断："}),`
`,e.jsx(n.h3,{id:"第一层基础过滤",children:"第一层：基础过滤"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`if (value == null || typeof value !== 'object') return false
`})}),`
`,e.jsxs(n.p,{children:["排除 ",e.jsx(n.code,{children:"null"}),"、",e.jsx(n.code,{children:"undefined"}),"、数字、字符串、函数等非对象值。"]}),`
`,e.jsx(n.h3,{id:"第二层原型为-null",children:"第二层：原型为 null"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const proto = Object.getPrototypeOf(value)
if (proto === null) return true
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Object.create(null)"})," 创建的对象没有原型，也算普通对象。"]}),`
`,e.jsx(n.h3,{id:"第三层构造函数三重验证",children:"第三层：构造函数三重验证"}),`
`,e.jsxs(n.p,{children:["从原型上取到 ",e.jsx(n.code,{children:"constructor"}),"，然后做三个判断："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`typeof Ctor === 'function' &&
Ctor instanceof Ctor &&
Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
`})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["① ",e.jsx(n.code,{children:"typeof Ctor === 'function'"})]})," — 构造函数必须是函数"]}),`
`,e.jsxs(n.p,{children:["如果原型上没有 ",e.jsx(n.code,{children:"constructor"}),"（被删除了），",e.jsx(n.code,{children:"Ctor"})," 会是 ",e.jsx(n.code,{children:"false"}),"（因为 ",e.jsx(n.code,{children:"hasOwnProperty"})," 返回 false，",e.jsx(n.code,{children:"&&"})," 短路），直接排除。"]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["② ",e.jsx(n.code,{children:"Ctor instanceof Ctor"})]})," — 构造函数是自身的实例"]}),`
`,e.jsxs(n.p,{children:["这是最巧妙的一步。只有 ",e.jsx(n.code,{children:"Object"})," 满足这个条件："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`Object instanceof Object   // true  ← Object 的原型链: Object → Function.prototype → Object.prototype ✓
Array instanceof Array     // false ← Array 的原型链: Array → Function.prototype → Object.prototype（没有 Array.prototype）
Date instanceof Date       // false
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Object"})," 之所以特殊，是因为 ",e.jsx(n.code,{children:"Function.prototype"})," 的原型是 ",e.jsx(n.code,{children:"Object.prototype"}),"，形成了闭环。"]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["③ ",e.jsx(n.code,{children:"Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)"})]})," — 源码字符串一致"]}),`
`,e.jsxs(n.p,{children:["处理",e.jsx(n.strong,{children:"跨 iframe/realm"})," 的情况。不同 iframe 中的 ",e.jsx(n.code,{children:"Object"})," 不是同一个引用（",e.jsx(n.code,{children:"==="})," 会失败），但它们的源码字符串都是 ",e.jsx(n.code,{children:"'function Object() { [native code] }'"}),"，所以通过比较 toString 结果来确认。"]})]})}function x(c={}){const{wrapper:n}={...t(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(i,{...c})}):i(c)}export{x as default};
