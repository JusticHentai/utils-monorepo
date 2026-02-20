import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import toStringValue from '../../../packages/js-utils/src/toStringValue'

const toStringValueDemo = () => {
  action('toStringValue 演示')({
    'null': toStringValue(null),
    '-0': toStringValue(-0),
    '[1, 2, 3]': toStringValue([1, 2, 3]),
    'Symbol("a")': toStringValue(Symbol('a')),
    '123': toStringValue(123),
  })
}

export default toStringValueDemo
`,c=`import { action } from 'storybook/actions'
import toStringValue from '../../../packages/js-utils/src/toStringValue'

const edgeCaseDemo = () => {
  action('toStringValue - 边界情况')({
    'null': toStringValue(null), '数组': toStringValue([1, 2, 3]), '数字': toStringValue(-0), 'Symbol': toStringValue(Symbol('a'))
  })
}

export default edgeCaseDemo
`;function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tostringvalue",children:"toStringValue"}),`
`,e.jsx(n.p,{children:"将 value 转换为字符串"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toStringValue"})," 将 value 转换为字符串。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据类型标准化"}),`
`,e.jsx(n.li,{children:"用户输入处理"}),`
`,e.jsx(n.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"toStringValue"})," 的基本使用效果。"]}),`
`,e.jsx(l,{language:"typescript",children:s}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(l,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"描述：返回转换后的字符串"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toStringValue"})," 按类型分支逐一处理，每个分支都有其设计意图："]}),`
`,e.jsxs(n.h3,{id:"第一步value--null--空值返回空字符串",children:["第一步：",e.jsx(n.code,{children:"value == null"})," — 空值返回空字符串"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (value == null) return ''
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"== null"})," 同时匹配 ",e.jsx(n.code,{children:"null"})," 和 ",e.jsx(n.code,{children:"undefined"}),"（宽松相等）。不用 ",e.jsx(n.code,{children:"String(null)"})," → ",e.jsx(n.code,{children:"'null'"}),"，而是返回空字符串 ",e.jsx(n.code,{children:"''"}),"，在拼接场景中更安全。"]}),`
`,e.jsxs(n.h3,{id:"第二步typeof-value--string--字符串直接返回",children:["第二步：",e.jsx(n.code,{children:"typeof value === 'string'"})," — 字符串直接返回"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (typeof value === 'string') return value
`})}),`
`,e.jsx(n.p,{children:"已经是字符串，无需任何转换，直接返回。提前拦截避免后续不必要的判断。"}),`
`,e.jsxs(n.h3,{id:"第三步arrayisarrayvalue--数组递归转换",children:["第三步：",e.jsx(n.code,{children:"Array.isArray(value)"})," — 数组递归转换"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (Array.isArray(value)) {
  return value.map(item => item == null ? '' : toStringValue(item)).join(',')
}
`})}),`
`,e.jsxs(n.p,{children:["对数组的每个元素递归调用 ",e.jsx(n.code,{children:"toStringValue"}),"，然后用逗号拼接。其中 ",e.jsx(n.code,{children:"null"}),"/",e.jsx(n.code,{children:"undefined"})," 元素转为空字符串而非 ",e.jsx(n.code,{children:"'null'"}),"/",e.jsx(n.code,{children:"'undefined'"}),"。"]}),`
`,e.jsxs(n.p,{children:["示例：",e.jsx(n.code,{children:"[1, null, [2, 3]]"})," → ",e.jsx(n.code,{children:"'1,,2,3'"})]}),`
`,e.jsxs(n.h3,{id:"第四步1--value---infinity--负零-0检测",children:["第四步：",e.jsx(n.code,{children:"1 / value === -Infinity"})," — 负零（-0）检测"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (typeof value === 'number' && 1 / value === -Infinity) {
  return '-0'
}
`})}),`
`,e.jsxs(n.p,{children:["这是整个函数中最巧妙的一步，专门处理 ",e.jsx(n.strong,{children:"-0（负零）"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"为什么需要特殊处理？"})," 因为 JS 内置的转换会",e.jsx(n.strong,{children:"丢失负零的符号"}),"："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"表达式"}),e.jsx("th",{children:"结果"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"String(-0)"})}),e.jsx("td",{children:e.jsx("code",{children:"'0'"})}),e.jsx("td",{children:"符号丢失！变成了正零的字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"(-0).toString()"})}),e.jsx("td",{children:e.jsx("code",{children:"'0'"})}),e.jsx("td",{children:"同样丢失符号"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-0 === 0"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"全等比较也无法区分 -0 和 +0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-0 > 0"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"大小比较也无法区分"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"如何检测 -0？"})," 利用 IEEE 754 浮点数的除法特性："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"表达式"}),e.jsx("th",{children:"结果"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"1 / -0"})}),e.jsx("td",{children:e.jsx("code",{children:"-Infinity"})}),e.jsx("td",{children:"正数除以负零得到负无穷"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"1 / +0"})}),e.jsx("td",{children:e.jsx("code",{children:"Infinity"})}),e.jsx("td",{children:"正数除以正零得到正无穷"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-Infinity !== Infinity"}),"，所以 ",e.jsx(n.code,{children:"1 / value === -Infinity"})," 能准确区分 -0 和 +0。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"-0 的应用场景"}),'：在动画、物理模拟等场景中，-0 表示"从负方向趋近于零"，保留符号信息可以正确判断运动方向。']}),`
`,e.jsxs(n.h3,{id:"第五步stringvalue--兜底转换",children:["第五步：",e.jsx(n.code,{children:"String(value)"})," — 兜底转换"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`return String(value)
`})}),`
`,e.jsxs(n.p,{children:["其他所有类型（number、boolean、symbol、bigint、object 等）统一用 ",e.jsx(n.code,{children:"String()"})," 转换："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"输入"}),e.jsx("th",{children:"String() 结果"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"42"})}),e.jsx("td",{children:e.jsx("code",{children:"'42'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"'true'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Symbol('x')"})}),e.jsx("td",{children:e.jsx("code",{children:"'Symbol(x)'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{})}),e.jsx("td",{children:e.jsx("code",{children:"'[object Object]'"})})]})]})]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{u as default};
