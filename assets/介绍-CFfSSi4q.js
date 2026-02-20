import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import toInteger from '../../../packages/js-utils/src/toInteger'

const toIntegerDemo = () => {
  action('toInteger 演示')({
    '3.2': toInteger(3.2),
    'Number.MIN_VALUE': toInteger(Number.MIN_VALUE),
    'Infinity': toInteger(Infinity),
    '"3.2"': toInteger('3.2'),
    'null': toInteger(null),
  })
}

export default toIntegerDemo
`,l=`import { action } from 'storybook/actions'
import toInteger from '../../../packages/js-utils/src/toInteger'

const edgeCaseDemo = () => {
  action('toInteger - 边界情况')({
    '3.2': toInteger(3.2), '3.7': toInteger(3.7), 'Infinity': toInteger(Infinity), '"3.2"': toInteger('3.2')
  })
}

export default edgeCaseDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tointeger",children:"toInteger"}),`
`,e.jsx(n.p,{children:"将 value 转换为整数"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toInteger"})," 将 value 转换为整数。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据类型标准化"}),`
`,e.jsx(n.li,{children:"用户输入处理"}),`
`,e.jsx(n.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"toInteger"})," 的基本使用效果。"]}),`
`,e.jsx(d,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(d,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"描述：返回转换后的整数"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toInteger"})," 的实现仅三行代码，但每一步都有其设计意图："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const result = toFinite(value)        // 第一步：归一化
const remainder = result % 1          // 第二步：提取小数部分
return remainder ? result - remainder : result  // 第三步：向零截断
`})}),`
`,e.jsxs(n.h3,{id:"第一步tofinitevalue--归一化为有限数值",children:["第一步：",e.jsx(n.code,{children:"toFinite(value)"})," — 归一化为有限数值"]}),`
`,e.jsxs(n.p,{children:["在做整数截断之前，必须先确保值是一个",e.jsx(n.strong,{children:"有限的 number"}),"。",e.jsx(n.code,{children:"toFinite"})," 负责处理所有非常规输入："]}),`
`,e.jsxs(n.p,{children:[`| 输入 | toFinite 输出 | 说明 |
|------|-------------|------|
| `,e.jsx(n.code,{children:"3.2"})," | ",e.jsx(n.code,{children:"3.2"}),` | 普通数值原样返回 |
| `,e.jsx(n.code,{children:"'3.2'"})," | ",e.jsx(n.code,{children:"3.2"})," | 字符串先通过 ",e.jsx(n.code,{children:"Number()"}),` 转换 |
| `,e.jsx(n.code,{children:"null"})," / ",e.jsx(n.code,{children:"undefined"})," | ",e.jsx(n.code,{children:"0"}),` | 空值转为 0 |
| `,e.jsx(n.code,{children:"NaN"})," | ",e.jsx(n.code,{children:"0"}),` | 非数字转为 0 |
| `,e.jsx(n.code,{children:"Infinity"})," | ",e.jsx(n.code,{children:"1.7976931348623157e+308"})," | 正无穷转为 ",e.jsx(n.code,{children:"Number.MAX_VALUE"}),` |
| `,e.jsx(n.code,{children:"-Infinity"})," | ",e.jsx(n.code,{children:"-1.7976931348623157e+308"})," | 负无穷转为 ",e.jsx(n.code,{children:"-Number.MAX_VALUE"})," |"]}),`
`,e.jsxs(n.p,{children:["经过这一步，",e.jsx(n.code,{children:"result"})," 一定是一个有限的 number，后续的数学运算可以安全进行。"]}),`
`,e.jsxs(n.h3,{id:"第二步result--1--用模运算提取小数部分",children:["第二步：",e.jsx(n.code,{children:"result % 1"})," — 用模运算提取小数部分"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"%"})," 是取余运算符，",e.jsx(n.code,{children:"result % 1"}),' 的含义是"除以 1 的余数"，其效果是',e.jsx(n.strong,{children:"提取小数部分"}),"："]}),`
`,e.jsxs(n.p,{children:[`| result | result % 1 | 说明 |
|--------|-----------|------|
| `,e.jsx(n.code,{children:"3"})," | ",e.jsx(n.code,{children:"0"}),` | 整数模 1 等于 0 |
| `,e.jsx(n.code,{children:"3.7"})," | ",e.jsx(n.code,{children:"0.7"}),` | 提取出小数部分 0.7 |
| `,e.jsx(n.code,{children:"-3.7"})," | ",e.jsx(n.code,{children:"-0.7"}),` | 负数保留符号，小数部分为 -0.7 |
| `,e.jsx(n.code,{children:"0"})," | ",e.jsx(n.code,{children:"0"})," | 零模 1 等于 0 |"]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["为什么用 ",e.jsx(n.code,{children:"% 1"})," 而不是 ",e.jsx(n.code,{children:"Math.floor"}),"？"]})," 因为 ",e.jsx(n.code,{children:"Math.floor"}),' 是"向负无穷取整"（',e.jsx(n.code,{children:"Math.floor(-3.7)"})," = ",e.jsx(n.code,{children:"-4"}),"），而我们需要的是",e.jsx(n.strong,{children:"向零截断"}),"（",e.jsx(n.code,{children:"-3.7"})," → ",e.jsx(n.code,{children:"-3"}),"），",e.jsx(n.code,{children:"% 1"})," 配合减法恰好能实现这个效果。"]}),`
`,e.jsxs(n.h3,{id:"第三步remainder--result---remainder--result--条件截断",children:["第三步：",e.jsx(n.code,{children:"remainder ? result - remainder : result"})," — 条件截断"]}),`
`,e.jsx(n.p,{children:"这是一个三元表达式，根据是否有小数部分决定处理方式："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"remainder"})," 为 ",e.jsx(n.code,{children:"0"})]}),"（即 falsy）：值本身就是整数，直接返回 ",e.jsx(n.code,{children:"result"}),"，无需额外运算"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"remainder"})," 非 ",e.jsx(n.code,{children:"0"})]}),"：用原值减去小数部分，得到整数部分"]}),`
`]}),`
`,e.jsx(n.p,{children:"示例推演："}),`
`,e.jsxs(n.p,{children:[`| 输入 | result | remainder | 返回值 | 计算过程 |
|------|--------|-----------|--------|---------|
| `,e.jsx(n.code,{children:"3.7"})," | ",e.jsx(n.code,{children:"3.7"})," | ",e.jsx(n.code,{children:"0.7"})," | ",e.jsx(n.code,{children:"3"})," | ",e.jsx(n.code,{children:"3.7 - 0.7 = 3"}),` |
| `,e.jsx(n.code,{children:"-3.7"})," | ",e.jsx(n.code,{children:"-3.7"})," | ",e.jsx(n.code,{children:"-0.7"})," | ",e.jsx(n.code,{children:"-3"})," | ",e.jsx(n.code,{children:"-3.7 - (-0.7) = -3"}),` |
| `,e.jsx(n.code,{children:"5"})," | ",e.jsx(n.code,{children:"5"})," | ",e.jsx(n.code,{children:"0"})," | ",e.jsx(n.code,{children:"5"}),` | remainder 为 0，直接返回 |
| `,e.jsx(n.code,{children:"'3.2'"})," | ",e.jsx(n.code,{children:"3.2"})," | ",e.jsx(n.code,{children:"0.2"})," | ",e.jsx(n.code,{children:"3"})," | ",e.jsx(n.code,{children:"3.2 - 0.2 = 3"}),` |
| `,e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"0"})," | ",e.jsx(n.code,{children:"0"})," | ",e.jsx(n.code,{children:"0"})," | remainder 为 0，直接返回 |"]}),`
`,e.jsxs(n.h3,{id:"与-mathtrunc-的对比",children:["与 ",e.jsx(n.code,{children:"Math.trunc"})," 的对比"]}),`
`,e.jsxs(n.p,{children:["这个实现的行为与 ",e.jsx(n.code,{children:"Math.trunc()"})," 完全一致——都是",e.jsx(n.strong,{children:"向零截断"}),"（truncation towards zero）："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["正数：去掉小数部分（等同于 ",e.jsx(n.code,{children:"Math.floor"}),"）"]}),`
`,e.jsxs(n.li,{children:["负数：去掉小数部分（等同于 ",e.jsx(n.code,{children:"Math.ceil"}),"）"]}),`
`]}),`
`,e.jsxs(n.p,{children:["之所以不直接用 ",e.jsx(n.code,{children:"Math.trunc"}),"，是因为 ",e.jsx(n.code,{children:"toInteger"})," 额外集成了 ",e.jsx(n.code,{children:"toFinite"})," 的归一化能力，能安全处理 ",e.jsx(n.code,{children:"null"}),"、",e.jsx(n.code,{children:"undefined"}),"、",e.jsx(n.code,{children:"Infinity"}),"、字符串等非常规输入。"]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{a as default};
