import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BG77pm9a.js";import{C as r}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const c=`import eslintConfig from './packages/config-utils/eslint.config.js'

export default eslintConfig
`;function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"eslintconfigjs",children:"eslint.config.js"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"ESLint 配置文件（根目录）"}),`
`]}),`
`,n.jsx(i.h2,{id:"配置",children:"配置"}),`
`,n.jsx(r,{language:"javascript",children:c}),`
`,n.jsx(i.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(i.h3,{id:"import-eslintconfig-from-packagesconfig-utilseslintconfigjs",children:n.jsx(i.code,{children:"import eslintConfig from './packages/config-utils/eslint.config.js'"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"作用"}),"：从配置工具包中导入 ESLint 配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"说明"}),"：",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["复用 ",n.jsx(i.code,{children:"packages/config-utils"})," 中的统一 ESLint 配置"]}),`
`,n.jsx(i.li,{children:"避免在根目录重复配置相同的规则"}),`
`,n.jsx(i.li,{children:"便于统一管理整个 monorepo 的代码规范"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"export-default-eslintconfig",children:n.jsx(i.code,{children:"export default eslintConfig"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"作用"}),"：导出 ESLint 配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"说明"}),"：",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"直接使用配置工具包中的配置"}),`
`,n.jsx(i.li,{children:"根目录的 ESLint 配置与所有子包保持一致"}),`
`,n.jsx(i.li,{children:"确保整个项目的代码风格统一"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"配置来源",children:"配置来源"}),`
`,n.jsxs(i.p,{children:["根目录的 ESLint 配置继承自 ",n.jsx(i.code,{children:"packages/config-utils/eslint.config.js"}),"，该配置包含："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"JavaScript 核心规则"}),"：",n.jsx(i.code,{children:"@eslint/js"})," 推荐规则"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"TypeScript 规则"}),"：",n.jsx(i.code,{children:"typescript-eslint"})," 推荐规则"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Prettier 集成"}),"：",n.jsx(i.code,{children:"eslint-plugin-prettier"})," 集成配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"React Hooks 规则"}),"：",n.jsx(i.code,{children:"eslint-plugin-react-hooks"})," 规则"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"React Fast Refresh"}),"：",n.jsx(i.code,{children:"eslint-plugin-react-refresh"})," 规则"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"浏览器环境"}),"：",n.jsx(i.code,{children:"globals.browser"})," 全局变量定义"]}),`
`]}),`
`,n.jsx(i.h3,{id:"优势",children:"优势"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"统一配置"}),"：整个 monorepo 使用相同的代码规范"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"易于维护"}),"：修改配置工具包即可影响所有项目"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"减少重复"}),"：避免在每个包中重复配置"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"一致性"}),"：确保所有代码遵循相同的规范"]}),`
`]})]})}function x(s={}){const{wrapper:i}={...l(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{x as default};
