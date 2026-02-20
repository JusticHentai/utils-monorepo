import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import parseIntFunc from '../../../packages/js-utils/src/parseInt'

const parseIntDemo = () => {
  // 默认基数10 (lodash: parseInt('10') => 10)
  action('parseInt - 默认十进制')(parseIntFunc('10'))

  // 不同基数 '10' (lodash: parseInt('10', radix) => radix)
  action('parseInt - 基数2')(parseIntFunc('10', 2))
  action('parseInt - 基数8')(parseIntFunc('10', 8))
  action('parseInt - 基数16')(parseIntFunc('10', 16))

  // 前导零字符串 (lodash: parseInt('08') => 8)
  action('parseInt - 前导零08')(parseIntFunc('08'))

  // 十六进制自动检测 (lodash: parseInt('0x20') => 32)
  action('parseInt - 0x20 十六进制')(parseIntFunc('0x20'))
  action('parseInt - 0X20 十六进制')(parseIntFunc('0X20'))

  // 前导空白 (lodash: parseInt('  10') => 10)
  action('parseInt - 前导空白')(parseIntFunc('  42  '))

  // 作为 map 迭代器不受索引影响 (lodash: ['6','08','10'].map(parseInt) => [6,8,10])
  const result = ['6', '08', '10'].map(parseIntFunc)
  action('parseInt - map迭代器')(result)

  // 对比原生 parseInt 的 map 问题
  const nativeResult = ['6', '08', '10'].map(Number.parseInt)
  action('parseInt - 原生map对比(有问题)')(nativeResult)
}

export default parseIntDemo`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"parseint",children:"parseInt"}),`
`,n.jsx(s.p,{children:"将字符串解析为指定基数的整数。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"parseInt"})," 将字符串解析为指定基数的整数，默认基数为 10，自动检测十六进制前缀。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"字符串转数字"}),`
`,n.jsx(s.li,{children:"不同进制数的解析"}),`
`,n.jsx(s.li,{children:"用户输入处理"}),`
`]}),`
`,n.jsx(s.h2,{id:"整数解析",children:"整数解析"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"parseInt"})," 将字符串解析为整数，支持不同进制。"]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要解析的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"radix"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"基数，默认 10"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"number"})]}),`
`,n.jsx(s.li,{children:"描述：解析后的整数"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 封装整数解析功能"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 去除空白 → 检测进制前缀 → 调用原生 parseInt"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 自动检测 0x/0X 前缀，默认基数 10"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 字符串 + 基数 → 预处理 → 原生 parseInt → 返回数值"]}),`
`]})]})}function p(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{p as default};
