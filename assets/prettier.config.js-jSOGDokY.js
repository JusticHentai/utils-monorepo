import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{P as l}from"./prettier.config-DdZQVH6u.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function e(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"prettierconfigjs",children:"prettier.config.js"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Prettier 配置文件（根目录）"}),`
`]}),`
`,n.jsx(i.h2,{id:"配置",children:"配置"}),`
`,n.jsx(c,{language:"javascript",children:l}),`
`,n.jsx(i.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(i.h3,{id:"import-prettierconfig-from-packagesconfig-utilsprettierconfigjs",children:n.jsx(i.code,{children:"import prettierConfig from './packages/config-utils/prettier.config.js'"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"作用"}),"：从配置工具包中导入 Prettier 配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"说明"}),"：",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["复用 ",n.jsx(i.code,{children:"packages/config-utils"})," 中的统一 Prettier 配置"]}),`
`,n.jsx(i.li,{children:"避免在根目录重复配置相同的格式化规则"}),`
`,n.jsx(i.li,{children:"便于统一管理整个 monorepo 的代码格式"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"export-default-prettierconfig",children:n.jsx(i.code,{children:"export default prettierConfig"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"作用"}),"：导出 Prettier 配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"说明"}),"：",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"直接使用配置工具包中的配置"}),`
`,n.jsx(i.li,{children:"根目录的 Prettier 配置与所有子包保持一致"}),`
`,n.jsx(i.li,{children:"确保整个项目的代码格式统一"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"配置来源",children:"配置来源"}),`
`,n.jsxs(i.p,{children:["根目录的 Prettier 配置继承自 ",n.jsx(i.code,{children:"packages/config-utils/prettier.config.js"}),"，该配置包含："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"代码宽度"}),"：",n.jsx(i.code,{children:"printWidth: 80"}),"（每行最多 80 个字符）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"缩进"}),"：",n.jsx(i.code,{children:"tabWidth: 2"}),"（使用 2 个空格）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"引号"}),"：",n.jsx(i.code,{children:"singleQuote: true"}),"（使用单引号）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"分号"}),"：",n.jsx(i.code,{children:"semi: false"}),"（不使用分号）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"尾随逗号"}),"：",n.jsx(i.code,{children:"trailingComma: 'es5'"}),"（ES5 兼容的尾随逗号）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"换行符"}),"：",n.jsx(i.code,{children:"endOfLine: 'lf'"}),"（使用 LF 换行符）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"插件"}),"：",n.jsx(i.code,{children:"prettier-plugin-organize-imports"}),"（自动整理 import 语句）"]}),`
`]}),`
`,n.jsx(i.h3,{id:"优势",children:"优势"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"统一格式"}),"：整个 monorepo 使用相同的代码格式"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"易于维护"}),"：修改配置工具包即可影响所有项目"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"减少重复"}),"：避免在每个包中重复配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"一致性"}),"：确保所有代码遵循相同的格式规范"]}),`
`]})]})}function p(r={}){const{wrapper:i}={...s(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(e,{...r})}):e(r)}export{p as default};
