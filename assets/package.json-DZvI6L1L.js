import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BG77pm9a.js";import{C as l}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const c=`{
  "name": "@justichentai/utils-monorepo",
  "version": "1.0.0",
  "description": "持续集成工具链 monorepo",
  "license": "ISC",
  "author": "justichentai",
  "type": "module",
  "scripts": {
    "build": "pnpm run -r build",
    "cli": "tsx ./cli/src/index.ts",
    "cli:init": "pnpm run -F @justichentai/cli link:global",
    "md": "storybook dev -p 6006",
    "md:build": "storybook build"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "4.1.3",
    "@storybook/addon-docs": "10.1.6",
    "@storybook/react-vite": "10.1.6",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "eslint": "^9.39.1",
    "prettier": "^3.7.4",
    "prop-types": "15.8.1",
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "storybook": "10.1.6",
    "tsx": "^4.21.0",
    "typescript": "^5.9.3"
  }
}
`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"packagejson",children:"package.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"项目根目录配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"json",children:c}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"项目基本信息",children:"项目基本信息"}),`
`,n.jsx(s.h4,{id:"name-justichentaiutils-monorepo",children:n.jsx(s.code,{children:'name: "@justichentai/utils-monorepo"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：项目名称"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用 scoped package 命名（",n.jsx(s.code,{children:"@justichentai/"})," 前缀）"]}),`
`]}),`
`,n.jsx(s.h4,{id:"version-100",children:n.jsx(s.code,{children:'version: "1.0.0"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：项目版本号"]}),`
`]}),`
`,n.jsx(s.h4,{id:"description-持续集成工具链-monorepo",children:n.jsx(s.code,{children:'description: "持续集成工具链 monorepo"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：项目描述"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：说明这是一个持续集成工具链的 monorepo 项目"]}),`
`]}),`
`,n.jsx(s.h4,{id:"type-module",children:n.jsx(s.code,{children:'type: "module"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定项目使用 ES 模块"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["启用 ES6 模块语法（",n.jsx(s.code,{children:"import/export"}),"）"]}),`
`,n.jsxs(s.li,{children:["所有 ",n.jsx(s.code,{children:".js"})," 文件默认被视为 ES 模块"]}),`
`,n.jsxs(s.li,{children:["无需使用 ",n.jsx(s.code,{children:".mjs"})," 扩展名"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"脚本命令",children:"脚本命令"}),`
`,n.jsx(s.h4,{id:"build-pnpm-run--r-build",children:n.jsx(s.code,{children:'build: "pnpm run -r build"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：构建所有包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-r"}),"：递归执行，在所有 workspace 包中运行"]}),`
`,n.jsx(s.li,{children:"构建 monorepo 中的所有包"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"cli-tsx-clisrcindexts",children:n.jsx(s.code,{children:'cli: "tsx ./cli/src/index.ts"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：运行 CLI 工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用 ",n.jsx(s.code,{children:"tsx"})," 直接运行 TypeScript 文件"]}),`
`]}),`
`,n.jsx(s.h4,{id:"cliinit-pnpm-run--f-justichentaicli-linkglobal",children:n.jsx(s.code,{children:'cli:init: "pnpm run -F @justichentai/cli link:global"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：全局安装 CLI 工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-F"}),"：过滤，只运行指定包的命令"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"link:global"}),"：将 CLI 工具链接到全局"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"md-storybook-dev--p-6006",children:n.jsx(s.code,{children:'md: "storybook dev -p 6006"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：启动 Storybook 开发服务器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"在端口 6006 上运行 Storybook"}),`
`,n.jsx(s.li,{children:"用于查看和开发组件文档"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"mdbuild-storybook-build",children:n.jsx(s.code,{children:'md:build: "storybook build"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：构建 Storybook 静态站点"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：生成用于部署的静态文件"]}),`
`]}),`
`,n.jsx(s.h3,{id:"devdependencies开发依赖",children:"devDependencies（开发依赖）"}),`
`,n.jsx(s.p,{children:"这些依赖只在开发时需要，不会被打包到生产代码中。"}),`
`,n.jsx(s.h4,{id:"chromatic-comstorybook-413",children:n.jsx(s.code,{children:"@chromatic-com/storybook: 4.1.3"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Chromatic Storybook 集成"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：用于视觉测试和组件审查"]}),`
`]}),`
`,n.jsx(s.h4,{id:"storybookaddon-docs-1016",children:n.jsx(s.code,{children:"@storybook/addon-docs: 10.1.6"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Storybook 文档插件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：生成组件文档和 MDX 支持"]}),`
`]}),`
`,n.jsx(s.h4,{id:"storybookreact-vite-1016",children:n.jsx(s.code,{children:"@storybook/react-vite: 10.1.6"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Storybook React + Vite 集成"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：使用 Vite 作为构建工具运行 Storybook"]}),`
`]}),`
`,n.jsxs(s.h4,{id:"typesreact-1927typesreact-dom-1923",children:[n.jsx(s.code,{children:"@types/react: ^19.2.7"}),"、",n.jsx(s.code,{children:"@types/react-dom: ^19.2.3"})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：React 和 React DOM 的 TypeScript 类型定义"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：提供 React 的类型支持"]}),`
`]}),`
`,n.jsx(s.h4,{id:"eslint-9391",children:n.jsx(s.code,{children:"eslint: ^9.39.1"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：ESLint 代码检查工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：检查代码质量和规范"]}),`
`]}),`
`,n.jsx(s.h4,{id:"prettier-374",children:n.jsx(s.code,{children:"prettier: ^3.7.4"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Prettier 代码格式化工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：自动格式化代码"]}),`
`]}),`
`,n.jsxs(s.h4,{id:"react-1921react-dom-1921",children:[n.jsx(s.code,{children:"react: ^19.2.1"}),"、",n.jsx(s.code,{children:"react-dom: ^19.2.1"})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：React 库"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：用于 Storybook 中展示 React 组件"]}),`
`]}),`
`,n.jsx(s.h4,{id:"storybook-1016",children:n.jsx(s.code,{children:"storybook: 10.1.6"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Storybook 核心库"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：组件开发和文档工具"]}),`
`]}),`
`,n.jsx(s.h4,{id:"tsx-4210",children:n.jsx(s.code,{children:"tsx: ^4.21.0"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：TypeScript 执行工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：直接运行 TypeScript 文件，无需编译"]}),`
`]}),`
`,n.jsx(s.h4,{id:"typescript-593",children:n.jsx(s.code,{children:"typescript: ^5.9.3"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：TypeScript 编译器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：提供类型检查和编译功能"]}),`
`]})]})}function j(i={}){const{wrapper:s}={...r(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{j as default};
