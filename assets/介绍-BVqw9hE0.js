import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runBasicDemo = async () => {
  const code = \`const foo={a:1,b:2,c:3};function bar(x,y){return x+y}\`

  action('原始代码')(code)

  const result = await formatCode(code)

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
`,i=`import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runTypescriptDemo = async () => {
  const code = \`interface User{name:string;age:number}const getUser=(id:number):User=>({name:'test',age:18})\`

  action('原始代码')(code)

  const result = await formatCode(code, { language: 'typescript' })

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
`,d=`import { action } from 'storybook/actions'
import formatCode from '../../../packages/element-utils/src/formatCode'

export const runJsonDemo = async () => {
  const code = \`{"name":"test","age":18,"address":{"city":"Beijing","street":"xxx"}}\`

  action('原始代码')(code)

  const result = await formatCode(code, { language: 'json' })

  if (result.success) {
    action('格式化成功')(result.code)
  } else {
    action('格式化失败')(result.error)
  }
}
`,l=`import { action } from 'storybook/actions'
import { formatCodeBatch } from '../../../packages/element-utils/src/formatCode'

export const runBatchDemo = async () => {
  const codes = [
    {
      code: \`const a=1;const b=2\`,
      options: { language: 'javascript' as const },
    },
    { code: \`{"a":1,"b":2}\`, options: { language: 'json' as const } },
    {
      code: \`.foo{color:red;font-size:14px}\`,
      options: { language: 'css' as const },
    },
  ]

  action('原始代码')(codes.map((c) => c.code))

  const results = await formatCodeBatch(codes)

  action('批量格式化结果')(results)
}
`;function c(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"formatcode",children:"formatCode"}),`
`,n.jsx(e.p,{children:"formatCode 是一个基于 Prettier 的代码格式化工具，支持多种语言格式化。"}),`
`,n.jsx(e.h2,{id:"支持的语言",children:"支持的语言"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"JavaScript / TypeScript / JSX / TSX"}),`
`,n.jsx(e.li,{children:"JSON"}),`
`,n.jsx(e.li,{children:"HTML / Vue"}),`
`,n.jsx(e.li,{children:"CSS / SCSS / Less"}),`
`,n.jsx(e.li,{children:"Markdown"}),`
`,n.jsx(e.li,{children:"YAML"}),`
`,n.jsx(e.li,{children:"GraphQL"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础示例---javascript",children:"基础示例 - JavaScript"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"typescript-示例",children:"TypeScript 示例"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"json-示例",children:"JSON 示例"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"批量格式化示例",children:"批量格式化示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"formatcodecode-options",children:"formatCode(code, options?)"}),`
`,n.jsx(e.h4,{id:"code",children:"code"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：需要格式化的代码字符串"}),`
`]}),`
`,n.jsx(e.h4,{id:"options",children:"options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"FormatCodeOptions"})]}),`
`,n.jsx(e.li,{children:"描述：可选配置对象"}),`
`]}),`
`,n.jsx(e.h5,{id:"optionslanguage",children:"options.language"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"CodeLanguage"})]}),`
`,n.jsx(e.li,{children:"描述：代码语言类型，不传会自动检测"}),`
`,n.jsxs(e.li,{children:["可选值：",n.jsx(e.code,{children:"'javascript' | 'typescript' | 'jsx' | 'tsx' | 'json' | 'html' | 'css' | 'scss' | 'less' | 'markdown' | 'yaml' | 'graphql' | 'vue'"})]}),`
`]}),`
`,n.jsx(e.h5,{id:"optionsprettieroptions",children:"options.prettierOptions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Partial<PrettierOptions>"})]}),`
`,n.jsx(e.li,{children:"描述：Prettier 配置选项，会与默认配置合并"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<FormatCodeResult>"})]}),`
`,n.jsxs(e.li,{children:["描述：返回格式化结果对象",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code"}),": 格式化后的代码"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"success"}),": 是否成功"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"error"}),": 错误信息（如果失败）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"其他方法",children:"其他方法"}),`
`,n.jsx(e.h3,{id:"needsformattingcode-options",children:"needsFormatting(code, options?)"}),`
`,n.jsxs(e.p,{children:["检查代码是否需要格式化，返回 ",n.jsx(e.code,{children:"Promise<boolean>"})]}),`
`,n.jsx(e.h3,{id:"formatcodebatchcodes",children:"formatCodeBatch(codes)"}),`
`,n.jsxs(e.p,{children:["批量格式化代码，返回 ",n.jsx(e.code,{children:"Promise<FormatCodeResult[]>"})]})]})}function u(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{u as default};
