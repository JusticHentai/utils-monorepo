import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import toNumber from '../../../packages/js-utils/src/toNumber'

const toNumberDemo = () => {
  action('toNumber 演示')({
    '3.2': toNumber(3.2),
    'Number.MIN_VALUE': toNumber(Number.MIN_VALUE),
    '"3.2"': toNumber('3.2'),
    'true': toNumber(true),
    'null': toNumber(null),
  })
}

export default toNumberDemo
`,l=`import { action } from 'storybook/actions'
import toNumber from '../../../packages/js-utils/src/toNumber'

const edgeCaseDemo = () => {
  action('toNumber - 边界情况')({
    '3.2': toNumber(3.2), '"3.2"': toNumber('3.2'), '""空': toNumber(''), 'true': toNumber(true), 'null': toNumber(null)
  })
}

export default edgeCaseDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tonumber",children:"toNumber"}),`
`,e.jsx(n.p,{children:"将 value 转换为数值"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toNumber"})," 将 value 转换为数值。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据类型标准化"}),`
`,e.jsx(n.li,{children:"用户输入处理"}),`
`,e.jsx(n.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"toNumber"})," 的基本使用效果。"]}),`
`,e.jsx(d,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(d,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"描述：返回转换后的数值"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toNumber"})," 采用",e.jsx(n.strong,{children:"类型分支策略"}),"，按 ",e.jsx(n.code,{children:"typeof"})," 结果逐一处理不同类型的输入："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const toNumber = (value: unknown): number => {
  if (typeof value === 'number') { return value }         // 分支1
  if (typeof value === 'symbol') { return NaN }           // 分支2
  if (typeof value === 'string') { /* 进制解析 */ }       // 分支3
  return Number(value)                                     // 分支4：兜底
}
`})}),`
`,e.jsxs(n.h3,{id:"分支1typeof-value--number--直接返回",children:["分支1：",e.jsx(n.code,{children:"typeof value === 'number'"})," — 直接返回"]}),`
`,e.jsx(n.p,{children:"已经是 number 类型的值无需任何转换，直接返回。这包括所有合法的 number 值："}),`
`,e.jsxs(n.p,{children:[`| 输入 | 返回 | 说明 |
|------|------|------|
| `,e.jsx(n.code,{children:"3.2"})," | ",e.jsx(n.code,{children:"3.2"}),` | 普通数值 |
| `,e.jsx(n.code,{children:"NaN"})," | ",e.jsx(n.code,{children:"NaN"}),` | NaN 也是 number 类型 |
| `,e.jsx(n.code,{children:"Infinity"})," | ",e.jsx(n.code,{children:"Infinity"}),` | 无穷大也是 number 类型 |
| `,e.jsx(n.code,{children:"0"})," | ",e.jsx(n.code,{children:"0"})," | 零 |"]}),`
`,e.jsxs(n.h3,{id:"分支2typeof-value--symbol--返回-nan",children:["分支2：",e.jsx(n.code,{children:"typeof value === 'symbol'"})," — 返回 NaN"]}),`
`,e.jsxs(n.p,{children:["Symbol 是 ES6 引入的原始类型，",e.jsx(n.strong,{children:"无法"}),"通过 ",e.jsx(n.code,{children:"Number()"})," 转换——直接调用 ",e.jsx(n.code,{children:"Number(Symbol())"})," 会",e.jsx(n.strong,{children:"抛出 TypeError"}),"。所以这里提前拦截，安全地返回 ",e.jsx(n.code,{children:"NaN"}),"。"]}),`
`,e.jsxs(n.h3,{id:"分支3typeof-value--string--字符串解析",children:["分支3：",e.jsx(n.code,{children:"typeof value === 'string'"})," — 字符串解析"]}),`
`,e.jsx(n.p,{children:"字符串是最复杂的分支，需要处理多种数值格式："}),`
`,e.jsxs(n.h4,{id:"31-去除空白valuetrim",children:["3.1 去除空白：",e.jsx(n.code,{children:"value.trim()"})]}),`
`,e.jsxs(n.p,{children:["先去掉首尾空白字符，避免 ",e.jsx(n.code,{children:'" 123 "'})," 这类输入干扰后续正则匹配。"]}),`
`,e.jsx(n.h4,{id:"32-空字符串--0",children:"3.2 空字符串 → 0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"trimmed === ''"})," 时返回 ",e.jsx(n.code,{children:"0"}),"，与 ",e.jsx(n.code,{children:"Number('')"})," 的行为一致。纯空白字符串（如 ",e.jsx(n.code,{children:'"   "'}),"）trim 后也变为空字符串。"]}),`
`,e.jsxs(n.h4,{id:"33-二进制字面量0b01i",children:["3.3 二进制字面量：",e.jsx(n.code,{children:"/^0b[01]+$/i"})]}),`
`,e.jsxs(n.p,{children:["匹配 ",e.jsx(n.code,{children:"0b"})," 或 ",e.jsx(n.code,{children:"0B"})," 开头、后跟一个或多个 ",e.jsx(n.code,{children:"0"}),"/",e.jsx(n.code,{children:"1"})," 的字符串："]}),`
`,e.jsxs(n.p,{children:[`| 正则部分 | 含义 |
|---------|------|
| `,e.jsx(n.code,{children:"^0b"})," | 以 ",e.jsx(n.code,{children:"0b"})," 开头（",e.jsx(n.code,{children:"i"}),` 标志使其不区分大小写） |
| `,e.jsx(n.code,{children:"[01]+"}),` | 一个或多个二进制数字 |
| `,e.jsx(n.code,{children:"$"})," | 到字符串结尾，确保整体匹配 |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"parseInt"})," 不认识 ",e.jsx(n.code,{children:"0b"})," 前缀，所以用 ",e.jsx(n.code,{children:"slice(2)"})," 去掉前两个字符，再以",e.jsx(n.strong,{children:"基数 2"})," 解析。例如 ",e.jsx(n.code,{children:"'0b1010'"})," → ",e.jsx(n.code,{children:"parseInt('1010', 2)"})," → ",e.jsx(n.code,{children:"10"}),"。"]}),`
`,e.jsxs(n.h4,{id:"34-八进制字面量0o0-7i",children:["3.4 八进制字面量：",e.jsx(n.code,{children:"/^0o[0-7]+$/i"})]}),`
`,e.jsxs(n.p,{children:["同理，匹配 ",e.jsx(n.code,{children:"0o"})," 开头 + 八进制数字（0-7）。",e.jsx(n.code,{children:"slice(2)"})," 去掉前缀后以",e.jsx(n.strong,{children:"基数 8"})," 解析。例如 ",e.jsx(n.code,{children:"'0o17'"})," → ",e.jsx(n.code,{children:"parseInt('17', 8)"})," → ",e.jsx(n.code,{children:"15"}),"。"]}),`
`,e.jsxs(n.h4,{id:"35-十六进制字面量0x0-9a-fi",children:["3.5 十六进制字面量：",e.jsx(n.code,{children:"/^0x[0-9a-f]+$/i"})]}),`
`,e.jsxs(n.p,{children:["匹配 ",e.jsx(n.code,{children:"0x"})," 开头 + 十六进制数字（0-9, a-f）。",e.jsx(n.code,{children:"parseInt"})," 原生支持 ",e.jsx(n.code,{children:"0x"})," 前缀，所以",e.jsx(n.strong,{children:"无需 slice"}),"，直接传入以",e.jsx(n.strong,{children:"基数 16"})," 解析。例如 ",e.jsx(n.code,{children:"'0xff'"})," → ",e.jsx(n.code,{children:"parseInt('0xff', 16)"})," → ",e.jsx(n.code,{children:"255"}),"。"]}),`
`,e.jsxs(n.h4,{id:"36-其他字符串--numbertrimmed",children:["3.6 其他字符串 → ",e.jsx(n.code,{children:"Number(trimmed)"})]}),`
`,e.jsxs(n.p,{children:["不匹配任何进制前缀的字符串，交给 ",e.jsx(n.code,{children:"Number()"})," 处理。",e.jsx(n.code,{children:"Number()"})," 能解析十进制数字、科学计数法等："]}),`
`,e.jsxs(n.p,{children:[`| 输入 | Number() 结果 |
|------|--------------|
| `,e.jsx(n.code,{children:"'3.14'"})," | ",e.jsx(n.code,{children:"3.14"}),` |
| `,e.jsx(n.code,{children:"'1e5'"})," | ",e.jsx(n.code,{children:"100000"}),` |
| `,e.jsx(n.code,{children:"'abc'"})," | ",e.jsx(n.code,{children:"NaN"})," |"]}),`
`,e.jsxs(n.h3,{id:"分支4兜底--numbervalue",children:["分支4：兜底 — ",e.jsx(n.code,{children:"Number(value)"})]}),`
`,e.jsxs(n.p,{children:["所有不属于 number / symbol / string 的类型（boolean、null、undefined、object 等）统一用 ",e.jsx(n.code,{children:"Number()"})," 转换："]}),`
`,e.jsxs(n.p,{children:[`| 输入 | Number() 结果 | 说明 |
|------|--------------|------|
| `,e.jsx(n.code,{children:"true"})," | ",e.jsx(n.code,{children:"1"}),` | 布尔值转换 |
| `,e.jsx(n.code,{children:"false"})," | ",e.jsx(n.code,{children:"0"}),` | 布尔值转换 |
| `,e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"0"}),` | null 转为 0 |
| `,e.jsx(n.code,{children:"undefined"})," | ",e.jsx(n.code,{children:"NaN"}),` | undefined 转为 NaN |
| `,e.jsx(n.code,{children:"[]"})," | ",e.jsx(n.code,{children:"0"})," | 空数组先 toString 得 ",e.jsx(n.code,{children:'""'}),`，再 Number 得 0 |
| `,e.jsx(n.code,{children:"[3]"})," | ",e.jsx(n.code,{children:"3"})," | 单元素数组 toString 得 ",e.jsx(n.code,{children:'"3"'}),` |
| `,e.jsx(n.code,{children:"{}"})," | ",e.jsx(n.code,{children:"NaN"})," | 对象 toString 得 ",e.jsx(n.code,{children:'"[object Object]"'})," |"]}),`
`,e.jsxs(n.h3,{id:"为什么不直接用-number-处理所有情况",children:["为什么不直接用 ",e.jsx(n.code,{children:"Number()"})," 处理所有情况？"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Number()"})," 有两个问题："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Symbol 会抛错"}),"：",e.jsx(n.code,{children:"Number(Symbol())"})," 直接 TypeError，不安全"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"不支持二进制/八进制字面量的一致解析"}),"：虽然现代引擎的 ",e.jsx(n.code,{children:"Number('0b1010')"})," 能正确返回 ",e.jsx(n.code,{children:"10"}),"，但通过 ",e.jsx(n.code,{children:"parseInt"})," + 正则显式处理更可控，且与旧环境兼容性更好"]}),`
`]})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{m as default};
