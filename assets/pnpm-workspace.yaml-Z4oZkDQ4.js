import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BG77pm9a.js";import{C as l}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const r=`packages:
  - 'packages/**'
  - 'cli/**'
  - 'debug/**'
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"pnpm-workspaceyaml",children:"pnpm-workspace.yaml"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"pnpm workspace 配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"yaml",children:r}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"packages",children:n.jsx(s.code,{children:"packages:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义 workspace 中包含的包目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：pnpm workspace 用于管理 monorepo 项目结构"]}),`
`]}),`
`,n.jsx(s.h3,{id:"包目录配置",children:"包目录配置"}),`
`,n.jsx(s.h4,{id:"packages-1",children:n.jsx(s.code,{children:"'packages/**'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：包含 ",n.jsx(s.code,{children:"packages"})," 目录下的所有子目录作为独立包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 glob 模式匹配所有子目录"}),`
`,n.jsxs(s.li,{children:["每个子目录应包含独立的 ",n.jsx(s.code,{children:"package.json"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例包"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"packages/config-utils/"})}),`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"packages/components/"})}),`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"packages/element-utils/"})}),`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"packages/js-utils/"})}),`
`,n.jsx(s.li,{children:"等等"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"cli",children:n.jsx(s.code,{children:"'cli/**'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：将 ",n.jsx(s.code,{children:"cli"})," 目录作为独立包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：CLI 工具包，可以独立开发和发布"]}),`
`]}),`
`,n.jsx(s.h4,{id:"debug",children:n.jsx(s.code,{children:"'debug/**'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：将 ",n.jsx(s.code,{children:"debug"})," 目录作为独立包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：调试和开发工具包"]}),`
`]}),`
`,n.jsx(s.h3,{id:"workspace-的优势",children:"workspace 的优势"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一依赖管理"}),"：所有包共享相同的依赖版本"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"本地包引用"}),"：可以直接引用 workspace 内的其他包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一构建"}),"：可以一次性构建所有包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"版本同步"}),"：便于管理相关包的版本"]}),`
`]}),`
`,n.jsx(s.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Monorepo 项目"}),"：多个相关包在同一个仓库中"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"共享配置"}),"：配置工具包可以被其他包引用"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一开发"}),"：所有包使用相同的开发工具和规范"]}),`
`]})]})}function t(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{t as default};
