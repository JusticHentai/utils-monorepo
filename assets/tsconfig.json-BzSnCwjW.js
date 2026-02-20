import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`{
  "extends": "./packages/config-utils/tsconfig.base.json",
  "include": ["stories/**/*.ts", "stories/**/*.tsx", "./packages/config-utils/**/*.d.ts"]
}`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"tsconfigjson",children:"tsconfig.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"TypeScript 配置文件（根目录）"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(c,{language:"json",children:r}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"extends-packagesconfig-utilstsconfigbasejson",children:n.jsx(s.code,{children:'extends: "./packages/config-utils/tsconfig.base.json"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：继承基础 TypeScript 配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["从 ",n.jsx(s.code,{children:"packages/config-utils/tsconfig.base.json"})," 继承基础配置"]}),`
`,n.jsx(s.li,{children:"复用共享的编译选项和类型检查规则"}),`
`,n.jsx(s.li,{children:"避免在根目录重复配置相同的选项"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一配置"}),"：确保整个 monorepo 使用相同的 TypeScript 编译标准"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于维护"}),"：修改基础配置即可影响所有项目"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减少重复"}),"：避免在每个配置中重复相同的选项"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"include-storiests-packagesconfig-utilsdts",children:n.jsx(s.code,{children:'include: ["stories/**/*.ts", "./packages/config-utils/**/*.d.ts"]'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定 TypeScript 编译器要包含的文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用数组指定多个 glob 模式"}),`
`,n.jsxs(s.li,{children:["只有被 ",n.jsx(s.code,{children:"include"})," 匹配的文件才会被 TypeScript 处理"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"storiests",children:n.jsx(s.code,{children:'"stories/**/*.ts"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：包含 ",n.jsx(s.code,{children:"stories"})," 目录下的所有 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"stories/"}),"：Storybook 文档目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**/*.ts"}),"：匹配所有子目录中的 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：Storybook 文档中的 TypeScript 代码示例"]}),`
`]}),`
`,n.jsx(s.h4,{id:"packagesconfig-utilsdts",children:n.jsx(s.code,{children:'"./packages/config-utils/**/*.d.ts"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：包含配置工具包中的所有类型声明文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"./packages/config-utils/"}),"：配置工具包目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**/*.d.ts"}),"：匹配所有子目录中的 ",n.jsx(s.code,{children:".d.ts"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"将配置工具包的类型声明全局可用"}),`
`,n.jsx(s.li,{children:"在 Storybook 文档中可以使用这些类型定义"}),`
`,n.jsx(s.li,{children:"确保类型检查能够识别配置工具包的类型"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"配置继承的详细内容",children:"配置继承的详细内容"}),`
`,n.jsx(s.p,{children:"根目录的 TypeScript 配置继承自基础配置，包含以下主要选项："}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"编译目标"}),"：",n.jsx(s.code,{children:'target: "ESNext"'}),"（最新 ECMAScript 版本）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"模块系统"}),"：",n.jsx(s.code,{children:'module: "ESNext"'}),"（ES 模块）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"类型库"}),"：",n.jsx(s.code,{children:'lib: ["ESNext", "DOM", "DOM.Iterable"]'})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"模块解析"}),"：",n.jsx(s.code,{children:'moduleResolution: "bundler"'}),"（打包工具模式）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"严格模式"}),"：",n.jsx(s.code,{children:"strict: true"}),"（启用所有严格类型检查）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"JSX"}),"：",n.jsx(s.code,{children:'jsx: "react-jsx"'}),"（React JSX 支持）"]}),`
`]}),`
`,n.jsx(s.h3,{id:"优势",children:"优势"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一标准"}),"：整个 monorepo 使用相同的 TypeScript 编译标准"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"类型安全"}),"：确保所有代码遵循相同的类型检查规则"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于维护"}),"：修改基础配置即可影响所有项目"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"全局类型"}),"：配置工具包的类型声明在整个项目中可用"]}),`
`]})]})}function g(i={}){const{wrapper:s}={...l(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{g as default};
