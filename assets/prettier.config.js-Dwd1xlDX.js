import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-CJRiz8xl.js";import{C as r}from"./blocks-BQlzN-aX.js";import"./iframe-BNypc-Hr.js";import"./index-B1AKrtt8.js";const c=`import importPlugin from 'prettier-plugin-organize-imports'

const prettierConfig = {
  printWidth: 80, // 最长 80 个字符
  tabWidth: 2, // tab 变成两个空格
  useTabs: false, // tab 变空格
  semi: false, // 不要 ;
  singleQuote: true, // json 除外的 "" 变 ''
  quoteProps: 'as-needed', // object 的 key 只有需要时才加 ''
  jsxSingleQuote: false, // jsx 保留双引号
  trailingComma: 'es5', // 逗号在 ES5 中有效（对象、数组等） TypeScript 中的类型参数没有尾部逗号
  arrowParens: 'always', // 箭头函数 单个参数 也加括号
  endOfLine: 'lf', // 换行符 lf
  plugins: [
    importPlugin, // import 排序 组合 去除无用
  ],
}

export default prettierConfig
`,t=`import prettierConfig from './packages/config-utils/prettier.config.js'

export default prettierConfig
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"prettierconfigjs",children:"prettier.config.js"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".prettier.config.js"})," 文件用于配置 prettier 的代码格式化规则"]}),`
`,n.jsx(e.h2,{id:"外部使用",children:"外部使用"}),`
`,n.jsx(r,{language:"javascript",children:t}),`
`,n.jsx(e.h2,{id:"配置",children:"配置"}),`
`,n.jsx(r,{language:"javascript",children:c}),`
`,n.jsx(e.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(e.h4,{id:"printwidth-80",children:n.jsx(e.code,{children:"printWidth: 80"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：指定每行代码的最大字符数，超过此长度会自动换行"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 超过 80 个字符会自动换行
const veryLongVariableName = someFunctionCall(parameter1, parameter2, parameter3)
// 格式化后：
const veryLongVariableName = someFunctionCall(
  parameter1,
  parameter2,
  parameter3
)
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"tabwidth-2",children:n.jsx(e.code,{children:"tabWidth: 2"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：指定缩进使用的空格数，设置为 2 表示使用 2 个空格缩进"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 使用 2 个空格缩进
function example() {
  if (condition) {
    return true
  }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"usetabs-false",children:n.jsx(e.code,{children:"useTabs: false"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：使用空格而不是 Tab 字符进行缩进"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：与 ",n.jsx(e.code,{children:"tabWidth"})," 配合使用，确保代码在不同编辑器中的显示一致"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 使用空格缩进（不是 Tab 字符）
const obj = {
  key: 'value'
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"semi-false",children:n.jsx(e.code,{children:"semi: false"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：不在语句末尾添加分号"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 格式化后不添加分号
const name = 'John'
const age = 30
function greet() {
  return 'Hello'
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"singlequote-true",children:n.jsx(e.code,{children:"singleQuote: true"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：使用单引号而不是双引号（JSON 文件除外）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 格式化后使用单引号
const message = 'Hello World'
const name = 'John'

// JSON 文件仍然使用双引号
// { "key": "value" }
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"quoteprops-as-needed",children:n.jsx(e.code,{children:"quoteProps: 'as-needed'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：对象的属性名只在需要时才添加引号（如包含特殊字符、关键字等）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 不需要引号的属性名
const obj1 = {
  name: 'John',
  age: 30
}

// 需要引号的属性名（包含特殊字符或关键字）
const obj2 = {
  'first-name': 'John',
  'class': 'student',
  default: 'value'
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"jsxsinglequote-false",children:n.jsx(e.code,{children:"jsxSingleQuote: false"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：在 JSX 中使用双引号而不是单引号"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// JSX 中使用双引号
<div className="container">
  <button onClick={handleClick}>Click me</button>
</div>

// 普通 JavaScript 中使用单引号
const className = 'container'
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"trailingcomma-es5",children:n.jsx(e.code,{children:"trailingComma: 'es5'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：在 ES5 有效的地方（对象、数组等）添加尾随逗号，但 TypeScript 类型参数中不添加"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"好处"}),"：减少 Git diff，添加新项时只需修改一行"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 对象和数组添加尾随逗号
const obj = {
  name: 'John',
  age: 30, // 尾随逗号
}

const arr = [
  'item1',
  'item2', // 尾随逗号
]

// TypeScript 类型参数不添加尾随逗号
function example<T extends string>(param: T) {
  // ...
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"arrowparens-always",children:n.jsx(e.code,{children:"arrowParens: 'always'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：箭头函数的参数始终使用括号，即使只有一个参数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 单个参数也加括号
const single = (x) => x * 2
const multiple = (x, y) => x + y
const noParams = () => 'Hello'

// 如果不设置 always，单个参数可能没有括号：
// const single = x => x * 2
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"endofline-lf",children:n.jsx(e.code,{children:"endOfLine: 'lf'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：使用 LF（Line Feed，",n.jsx(e.code,{children:"\\n"}),"）作为换行符，而不是 CRLF（",n.jsx(e.code,{children:"\\r\\n"}),"）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：LF 是 Unix/Linux/macOS 系统的标准换行符，确保跨平台一致性"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"好处"}),"：避免在不同操作系统间切换时产生不必要的 Git diff"]}),`
`]}),`
`,n.jsx(e.h3,{id:"plugins-importplugin",children:n.jsx(e.code,{children:"plugins: [importPlugin]"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：使用 ",n.jsx(e.code,{children:"prettier-plugin-organize-imports"})," 插件自动整理 import 语句"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"功能"}),"：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动排序 import 语句"}),`
`,n.jsx(e.li,{children:"合并来自同一模块的多个 import"}),`
`,n.jsx(e.li,{children:"移除未使用的 import"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 格式化前
import { c, a, b } from './utils'
import React from 'react'
import { useState } from 'react'
import { unused } from './other'

// 格式化后（自动整理）
import React, { useState } from 'react'
import { a, b, c } from './utils'
// unused 被自动移除
`})}),`
`]}),`
`]})]})}function x(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
