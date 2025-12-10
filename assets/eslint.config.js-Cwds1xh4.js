import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-XRo_CHS9.js";import{C as l}from"./blocks-D5fvTG9W.js";import"./iframe-BraaSPVI.js";import"./index-BAJDM1kl.js";const c=`import js from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

const tsConfig = tsEslint.config({
  extends: [
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintPluginPrettier,
  ],
  files: ['**/*.{js,ts,tsx}'],
  ignores: ['**/dist/**'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
})

export default tsConfig
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",pre:"pre",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"eslintconfigjs",children:"eslint.config.js"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ESLint 配置文件"}),`
`]}),`
`,n.jsx(e.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"javascript",children:c}),`
`,n.jsx(e.h3,{id:"导入的插件和工具",children:"导入的插件和工具"}),`
`,n.jsx(e.h4,{id:"import-js-from-eslintjs",children:n.jsx(e.code,{children:"import js from '@eslint/js'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：ESLint 官方 JavaScript 规则集"}),`
`,n.jsx(e.li,{children:"说明：提供基础的 JavaScript 代码质量规则"}),`
`]}),`
`,n.jsx(e.h4,{id:"import-eslintpluginprettier-from-eslint-plugin-prettierrecommended",children:n.jsx(e.code,{children:"import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：集成 Prettier 作为 ESLint 规则"}),`
`,n.jsxs(e.li,{children:["功能：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将 Prettier 格式化问题作为 ESLint 错误报告"}),`
`,n.jsx(e.li,{children:"禁用与 Prettier 冲突的 ESLint 格式化规则"}),`
`,n.jsx(e.li,{children:"确保代码风格统一"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"import-reacthooks-from-eslint-plugin-react-hooks",children:n.jsx(e.code,{children:"import reactHooks from 'eslint-plugin-react-hooks'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：React Hooks 规则插件"}),`
`,n.jsx(e.li,{children:"功能：检查 Hooks 使用规范（如依赖数组、调用顺序等）"}),`
`]}),`
`,n.jsx(e.h4,{id:"import-reactrefresh-from-eslint-plugin-react-refresh",children:n.jsx(e.code,{children:"import reactRefresh from 'eslint-plugin-react-refresh'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：React Fast Refresh 支持插件"}),`
`,n.jsx(e.li,{children:"功能：确保组件导出符合 Fast Refresh 要求，避免热更新失效"}),`
`]}),`
`,n.jsx(e.h4,{id:"import-globals-from-globals",children:n.jsx(e.code,{children:"import globals from 'globals'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：全局变量定义库"}),`
`,n.jsx(e.li,{children:"功能：提供浏览器、Node.js 等环境的全局变量定义，避免未定义变量报错"}),`
`]}),`
`,n.jsx(e.h4,{id:"import-tseslint-from-typescript-eslint",children:n.jsx(e.code,{children:"import tsEslint from 'typescript-eslint'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：TypeScript ESLint 集成"}),`
`,n.jsx(e.li,{children:"功能：提供 TypeScript 专用规则和配置工具"}),`
`]}),`
`,n.jsx(e.h3,{id:"配置对象详解",children:"配置对象详解"}),`
`,n.jsx(e.h4,{id:"extends-",children:n.jsx(e.code,{children:"extends: [...]"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：继承预设配置"}),`
`,n.jsxs(e.li,{children:["说明：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"js.configs.recommended"}),"：JavaScript 推荐规则"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"...tsEslint.configs.recommended"}),"：TypeScript 推荐规则"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"eslintPluginPrettier"}),"：Prettier 集成配置"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"files-jststsx",children:n.jsx(e.code,{children:"files: ['**/*.{js,ts,tsx}']"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：指定该配置应用的文件"}),`
`,n.jsxs(e.li,{children:["说明：匹配所有 ",n.jsx(e.code,{children:".js"}),"、",n.jsx(e.code,{children:".ts"}),"、",n.jsx(e.code,{children:".tsx"})," 文件"]}),`
`]}),`
`,n.jsx(e.h4,{id:"ignores-dist",children:n.jsx(e.code,{children:"ignores: ['**/dist/**']"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：忽略指定目录"}),`
`,n.jsxs(e.li,{children:["说明：不检查 ",n.jsx(e.code,{children:"dist"})," 目录下的文件"]}),`
`]}),`
`,n.jsx(e.h4,{id:"languageoptionsecmaversion-2020",children:n.jsx(e.code,{children:"languageOptions.ecmaVersion: 2020"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：指定 ECMAScript 版本"}),`
`,n.jsx(e.li,{children:"说明：启用 ES2020 语法支持（可选链、空值合并等）"}),`
`]}),`
`,n.jsx(e.h4,{id:"languageoptionsglobals-globalsbrowser",children:n.jsx(e.code,{children:"languageOptions.globals: globals.browser"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：定义浏览器全局变量"}),`
`,n.jsxs(e.li,{children:["说明：识别 ",n.jsx(e.code,{children:"window"}),"、",n.jsx(e.code,{children:"document"}),"、",n.jsx(e.code,{children:"console"})," 等，避免未定义报错"]}),`
`,n.jsxs(e.li,{children:["示例：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 不会报错，因为 window 是浏览器全局变量
window.location.href = 'https://example.com'
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"plugins---",children:n.jsx(e.code,{children:"plugins: { ... }"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：注册插件"}),`
`,n.jsxs(e.li,{children:["说明：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'react-hooks'"}),"：React Hooks 规则"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'react-refresh'"}),"：React Fast Refresh 规则"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"rules---",children:n.jsx(e.code,{children:"rules: { ... }"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：自定义规则配置"}),`
`]}),`
`,n.jsx(e.h5,{id:"reacthooksconfigsrecommendedrules",children:n.jsx(e.code,{children:"...reactHooks.configs.recommended.rules"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：应用 React Hooks 推荐规则"}),`
`,n.jsxs(e.li,{children:["包含：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react-hooks/rules-of-hooks"}),"：Hooks 调用规则"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react-hooks/exhaustive-deps"}),"：依赖数组完整性检查"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["示例：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 违反规则：在条件语句中调用 Hook
if (condition) {
  useState(0) // ❌ 错误：Hooks 必须在顶层调用
}

// 正确：在顶层调用
const [count, setCount] = useState(0) // ✅
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h5,{id:"react-refreshonly-export-components-warn--allowconstantexport-true-",children:n.jsx(e.code,{children:"'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"作用：确保文件只导出 React 组件（用于 Fast Refresh）"}),`
`,n.jsxs(e.li,{children:["级别：",n.jsx(e.code,{children:"warn"})]}),`
`,n.jsxs(e.li,{children:["选项：",n.jsx(e.code,{children:"allowConstantExport: true"})," 允许导出常量"]}),`
`,n.jsxs(e.li,{children:["示例：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// ✅ 允许：导出组件
export default function MyComponent() {
  return <div>Hello</div>
}

// ✅ 允许：导出常量（因为 allowConstantExport: true）
export const API_URL = 'https://api.example.com'

// ⚠️ 警告：导出非组件函数
export function helperFunction() {
  return 'helper'
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h5,{id:"typescript-eslintno-explicit-any-off",children:n.jsx(e.code,{children:"'@typescript-eslint/no-explicit-any': 'off'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["作用：关闭禁止使用 ",n.jsx(e.code,{children:"any"})," 类型的规则"]}),`
`,n.jsxs(e.li,{children:["说明：允许使用 ",n.jsx(e.code,{children:"any"}),"，但建议谨慎使用"]}),`
`,n.jsxs(e.li,{children:["示例：",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ 不会报错（规则已关闭）
function processData(data: any) {
  return data.value
}
`})}),`
`]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
