import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-cWiy7Bet.js";import{S as l}from"./settings-CAtO43k5.js";import{C as c}from"./blocks-DWl2brnh.js";import"./iframe-C0m4eGTF.js";import"./index-CDLX9aEH.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"settingsjson",children:"settings.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"VS Code 编辑器配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(c,{language:"json",children:l}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"prettier-配置",children:"Prettier 配置"}),`
`,n.jsx(s.h4,{id:"prettierconfigpath-packagesconfig-utilsprettierrc",children:n.jsx(s.code,{children:'"prettier.configPath": "packages/config-utils/.prettierrc"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定 Prettier 配置文件路径"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"告诉 VS Code 的 Prettier 扩展使用指定的配置文件"}),`
`,n.jsx(s.li,{children:"路径相对于工作区根目录"}),`
`,n.jsx(s.li,{children:"vscode 的 prettier 插件不支持 prettier.config.js 文件，所以需要使用 .prettierrc 文件"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一格式"}),"：整个工作区使用相同的 Prettier 配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"复用配置"}),"：避免在每个项目中重复配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于维护"}),"：修改配置工具包的配置即可影响整个工作区"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"编辑器标签自定义",children:"编辑器标签自定义"}),`
`,n.jsx(s.h4,{id:"workbencheditorcustomlabelsenabled-true",children:n.jsx(s.code,{children:'"workbench.editor.customLabels.enabled": true'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：启用自定义编辑器标签功能"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"允许自定义文件标签的显示格式"}),`
`,n.jsx(s.li,{children:"在 VS Code 的标签栏中显示自定义的文件名格式"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：在 monorepo 项目中更容易识别文件所属的包"]}),`
`]}),`
`,n.jsx(s.h4,{id:"workbencheditorcustomlabelspatterns",children:n.jsx(s.code,{children:'"workbench.editor.customLabels.patterns"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义自定义标签的匹配模式和格式"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用对象定义不同文件路径的标签格式"]}),`
`]}),`
`,n.jsx(s.h5,{id:"packages-dirname-3-filename",children:n.jsx(s.code,{children:'"**/packages/**/*": "[${dirname(-3)}] ${filename}"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：为 ",n.jsx(s.code,{children:"packages"})," 目录下的文件自定义标签格式"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:'"**/packages/**/*"'}),"：匹配所有 ",n.jsx(s.code,{children:"packages"})," 目录下的文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"[${dirname(-3)}]"}),"：显示从文件路径向上三级目录的名称（即包名）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"${filename}"}),"：显示文件名"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["文件路径：",n.jsx(s.code,{children:"packages/components/src/button/index.tsx"})]}),`
`,n.jsxs(s.li,{children:["标签显示：",n.jsx(s.code,{children:"[components] index.tsx"})]}),`
`,n.jsxs(s.li,{children:["文件路径：",n.jsx(s.code,{children:"packages/config-utils/eslint.config.js"})]}),`
`,n.jsxs(s.li,{children:["标签显示：",n.jsx(s.code,{children:"[config-utils] eslint.config.js"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"快速识别"}),"：在标签栏中直接看到文件所属的包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减少混淆"}),"：在 monorepo 中打开多个同名文件时，更容易区分"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提升效率"}),"：无需查看完整路径即可知道文件位置"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"变量说明",children:"变量说明"}),`
`,n.jsx(s.h4,{id:"dirname-3",children:n.jsx(s.code,{children:"${dirname(-3)}"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：获取文件路径中向上三级目录的名称"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dirname"}),"：目录名函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-3"}),"：向上三级目录"]}),`
`,n.jsxs(s.li,{children:["对于 ",n.jsx(s.code,{children:"packages/components/src/button/index.tsx"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-1"}),"：",n.jsx(s.code,{children:"button"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-2"}),"：",n.jsx(s.code,{children:"src"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"-3"}),"：",n.jsx(s.code,{children:"components"}),"（包名）"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"filename",children:n.jsx(s.code,{children:"${filename}"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：获取文件名（不含路径）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：只显示文件名和扩展名"]}),`
`]}),`
`,n.jsx(s.h3,{id:"配置文件位置",children:"配置文件位置"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"路径"}),"：",n.jsx(s.code,{children:".vscode/settings.json"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用域"}),"：工作区级别配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"只影响当前工作区"}),`
`,n.jsx(s.li,{children:"团队成员共享相同的编辑器配置"}),`
`,n.jsx(s.li,{children:"可以提交到版本控制"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"优势",children:"优势"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一体验"}),"：团队成员使用相同的编辑器配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提升效率"}),"：自定义标签让 monorepo 项目更易导航"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"配置复用"}),"：使用共享的 Prettier 配置，保持代码格式一致"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于维护"}),"：配置集中管理，修改方便"]}),`
`]})]})}function g(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{g as default};
