import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isNil from '../../../packages/js-utils/src/isNil'

const isNilDemo = () => {
  // null 和 undefined 返回 true
  action('isNil - 返回 true')({
    'null': isNil(null),
    'undefined': isNil(undefined),
    'void 0': isNil(void 0),
  })

  // 其他 falsey 值返回 false
  action('isNil - falsey 值返回 false')({
    'NaN': isNil(NaN),
    '0': isNil(0),
    "''": isNil(''),
    'false': isNil(false),
  })
}

export default isNilDemo
`;function i(l){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isnil",children:"isNil"}),`
`,n.jsx(e.p,{children:"检查值是否为 null 或 undefined。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isNil"})," 用于判断一个值是否为 ",n.jsx(e.code,{children:"null"})," 或 ",n.jsx(e.code,{children:"undefined"}),"。"]}),`
`,n.jsxs(e.h3,{id:"-的特殊规则",children:[n.jsx(e.code,{children:"=="})," 的特殊规则"]}),`
`,n.jsxs(e.p,{children:["实现只有一行：",n.jsx(e.code,{children:"value == null"}),"。这里用的是 ",n.jsx(e.code,{children:"=="}),"（宽松相等）而不是 ",n.jsx(e.code,{children:"==="}),"（严格相等）。"]}),`
`,n.jsxs(e.p,{children:["JS 规范中，",n.jsx(e.code,{children:"=="})," 对 ",n.jsx(e.code,{children:"null"})," 和 ",n.jsx(e.code,{children:"undefined"})," 有一条",n.jsx(e.strong,{children:"特殊规定"}),"：它们互相相等，且不等于任何其他值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`null == undefined   // true  ← 互相相等
null == null        // true
undefined == undefined // true

null == 0           // false ← 不会隐式转换为数字
null == ''          // false ← 不会隐式转换为字符串
null == false       // false ← 不会隐式转换为布尔值
`})}),`
`,n.jsxs(e.p,{children:["所以 ",n.jsx(e.code,{children:"value == null"})," 恰好能同时命中 ",n.jsx(e.code,{children:"null"})," 和 ",n.jsx(e.code,{children:"undefined"}),' 两种情况，是判断"空值"的经典简写。']}),`
`,n.jsxs(e.p,{children:["如果用 ",n.jsx(e.code,{children:"==="})," 严格相等，就必须写成 ",n.jsx(e.code,{children:"value === null || value === undefined"}),"，效果一样但更冗长。"]}),`
`,n.jsx(e.h3,{id:"常用场景",children:"常用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"参数默认值处理"}),"：判断参数是否传了值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空值保护"}),"：在访问属性前排除 null/undefined"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据验证"}),'：区分"没有值"和"值为 0/空字符串/false"']}),`
`]}),`
`,n.jsx(e.h2,{id:"空值检测",children:"空值检测"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"isNil"})," 检查各种值是否为 null 或 undefined。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"value is null | undefined"})]}),`
`,n.jsx(e.li,{children:"描述：值是否为 null 或 undefined"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.p,{children:["实现只有一行：",n.jsx(e.code,{children:"value == null"})]}),`
`,n.jsxs(e.p,{children:["利用了 JS 宽松相等（",n.jsx(e.code,{children:"=="}),"）的特殊规则："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"null == null"})," → true"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"undefined == null"})," → true"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"其他任何值"})," ",n.jsx(e.code,{children:"== null"})," → false（包括 ",n.jsx(e.code,{children:"0"}),"、",n.jsx(e.code,{children:"''"}),"、",n.jsx(e.code,{children:"false"}),"、",n.jsx(e.code,{children:"NaN"}),"）"]}),`
`]}),`
`,n.jsxs(e.p,{children:["这是 JS 中 ",n.jsx(e.code,{children:"=="})," 极少数",n.jsx(e.strong,{children:"推荐使用的场景"}),"之一。通常我们都用 ",n.jsx(e.code,{children:"==="})," 避免隐式转换的坑，但 ",n.jsx(e.code,{children:"== null"})," 是公认的例外，因为它的行为非常明确且实用——ESLint 的 ",n.jsx(e.code,{children:"eqeqeq"})," 规则也提供了 ",n.jsx(e.code,{children:'"allow-null"'})," 选项来放行这种写法。"]})]})}function t(l={}){const{wrapper:e}={...d(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(i,{...l})}):i(l)}export{t as default};
