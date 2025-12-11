import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BG77pm9a.js";import{C as l}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const c=`{
  "name": "@justichentai/config-utils",
  "version": "1.0.0",
  "description": "各种配置",
  "license": "ISC",
  "author": "justichentai",
  "type": "module",
  "files": [
    "eslint.config.js",
    "prettier.config.js",
    "package.json",
    "README.md"
  ],
  "dependencies": {
    "@eslint/js": "^9.39.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-react-hooks": "7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier-plugin-organize-imports": "^4.3.0",
    "prettier-plugin-packagejson": "^2.5.20",
    "typescript-eslint": "^8.49.0"
  },
  "peerDependencies": {
    "eslint": "^9.39.1",
    "prettier": "^3.7.4",
    "typescript": "^5.9.3"
  }
}
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"packagejson",children:"package.json"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"项目配置文件"}),`
`]}),`
`,n.jsx(e.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"json",children:c}),`
`,n.jsx(e.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(e.h3,{id:"dependencies直接依赖",children:"dependencies（直接依赖）"}),`
`,n.jsx(e.p,{children:"这些依赖会被安装到使用该配置包的项目中"}),`
`,n.jsx(e.h4,{id:"eslintjs-991",children:n.jsx(e.code,{children:"@eslint/js: ^9.9.1"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：ESLint 官方 JavaScript 核心规则集"}),`
`,n.jsx(e.li,{children:"功能：提供基础的 JavaScript 代码质量检查规则"}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中通过 ",n.jsx(e.code,{children:"js.configs.recommended"})," 使用"]}),`
`]}),`
`,n.jsx(e.h4,{id:"eslint-config-prettier-910",children:n.jsx(e.code,{children:"eslint-config-prettier: ^9.1.0"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：关闭所有与 Prettier 冲突的 ESLint 格式化规则"}),`
`,n.jsx(e.li,{children:"功能：避免 ESLint 和 Prettier 的格式化规则冲突"}),`
`,n.jsxs(e.li,{children:["使用场景：与 ",n.jsx(e.code,{children:"eslint-plugin-prettier"})," 配合使用，确保代码格式化由 Prettier 统一处理"]}),`
`]}),`
`,n.jsx(e.h4,{id:"eslint-plugin-prettier-521",children:n.jsx(e.code,{children:"eslint-plugin-prettier: ^5.2.1"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：将 Prettier 作为 ESLint 规则运行"}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将 Prettier 格式化问题作为 ESLint 错误报告"}),`
`,n.jsx(e.li,{children:"在 ESLint 中统一代码风格检查"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中通过 ",n.jsx(e.code,{children:"eslint-plugin-prettier/recommended"})," 使用"]}),`
`]}),`
`,n.jsx(e.h4,{id:"eslint-plugin-react-hooks-510-rc-fb9a90fa48-20240614",children:n.jsx(e.code,{children:"eslint-plugin-react-hooks: 5.1.0-rc-fb9a90fa48-20240614"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：React Hooks 规则插件"}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"检查 Hooks 调用规则（必须在顶层调用）"}),`
`,n.jsxs(e.li,{children:["检查依赖数组完整性（",n.jsx(e.code,{children:"exhaustive-deps"}),"）"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中检查 React Hooks 使用规范"]}),`
`]}),`
`,n.jsx(e.h4,{id:"eslint-plugin-react-refresh-0411",children:n.jsx(e.code,{children:"eslint-plugin-react-refresh: ^0.4.11"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：React Fast Refresh 支持插件"}),`
`,n.jsx(e.li,{children:"功能：确保组件导出符合 Fast Refresh 要求，避免热更新失效"}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中检查组件导出规范"]}),`
`]}),`
`,n.jsx(e.h4,{id:"globals-1590",children:n.jsx(e.code,{children:"globals: ^15.9.0"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：全局变量定义库"}),`
`,n.jsx(e.li,{children:"功能：提供不同环境（浏览器、Node.js、ES2021 等）的全局变量定义"}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中通过 ",n.jsx(e.code,{children:"globals.browser"})," 定义浏览器全局变量"]}),`
`]}),`
`,n.jsx(e.h4,{id:"prettier-plugin-organize-imports-400",children:n.jsx(e.code,{children:"prettier-plugin-organize-imports: ^4.0.0"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：Prettier 插件，自动整理 import 语句"}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动排序 import 语句"}),`
`,n.jsx(e.li,{children:"合并来自同一模块的多个 import"}),`
`,n.jsx(e.li,{children:"移除未使用的 import"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"prettier.config.js"})," 中作为插件使用"]}),`
`]}),`
`,n.jsx(e.h4,{id:"prettier-plugin-packagejson-252",children:n.jsx(e.code,{children:"prettier-plugin-packagejson: ^2.5.2"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["作用：Prettier 插件，格式化 ",n.jsx(e.code,{children:"package.json"})," 文件"]}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["自动排序 ",n.jsx(e.code,{children:"package.json"})," 中的字段"]}),`
`,n.jsx(e.li,{children:"统一字段顺序和格式"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"prettier.config.js"})," 中作为插件使用（虽然当前配置中未显式使用，但已安装）"]}),`
`]}),`
`,n.jsx(e.h4,{id:"typescript-eslint-830",children:n.jsx(e.code,{children:"typescript-eslint: ^8.3.0"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：TypeScript ESLint 集成工具"}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"提供 TypeScript 专用的 ESLint 规则"}),`
`,n.jsxs(e.li,{children:["提供 TypeScript 配置工具（",n.jsx(e.code,{children:"tsEslint.config"}),"）"]}),`
`,n.jsx(e.li,{children:"包含类型感知的 linting 规则"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用场景：在 ",n.jsx(e.code,{children:"eslint.config.js"})," 中通过 ",n.jsx(e.code,{children:"typescript-eslint"})," 使用 TypeScript 规则"]}),`
`]}),`
`,n.jsx(e.h3,{id:"peerdependencies-peer-依赖",children:"peerDependencies（ peer 依赖）"}),`
`,n.jsx(e.p,{children:"这些依赖需要在使用该配置包的项目中安装，不会被自动安装。"}),`
`,n.jsx(e.h4,{id:"eslint-991",children:n.jsx(e.code,{children:"eslint: ^9.9.1"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：ESLint 核心库"}),`
`,n.jsx(e.li,{children:"说明：作为 peer 依赖，确保使用该配置的项目安装兼容版本的 ESLint"}),`
`,n.jsx(e.li,{children:"原因：ESLint 配置包需要 ESLint 运行时，但不应强制安装特定版本"}),`
`]}),`
`,n.jsx(e.h4,{id:"prettier-333",children:n.jsx(e.code,{children:"prettier: ^3.3.3"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：Prettier 代码格式化工具"}),`
`,n.jsx(e.li,{children:"说明：作为 peer 依赖，确保项目安装 Prettier"}),`
`,n.jsx(e.li,{children:"原因：配置中使用了 Prettier 插件，需要 Prettier 运行时"}),`
`]}),`
`,n.jsx(e.h4,{id:"typescript-593",children:n.jsx(e.code,{children:"typescript: ^5.9.3"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：TypeScript 编译器"}),`
`,n.jsx(e.li,{children:"说明：作为 peer 依赖，确保项目安装 TypeScript"}),`
`,n.jsx(e.li,{children:"原因：配置中包含 TypeScript ESLint 规则，需要 TypeScript 支持"}),`
`]})]})}function o(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{o as default};
