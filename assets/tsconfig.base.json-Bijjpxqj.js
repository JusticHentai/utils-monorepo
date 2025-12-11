import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CJRiz8xl.js";import{C as l}from"./blocks-BQlzN-aX.js";import"./iframe-BNypc-Hr.js";import"./index-B1AKrtt8.js";const c=["stories/**/*.ts","./packages/config-utils/**/*.d.ts"],d={extends:"./packages/config-utils/tsconfig.base.json",include:c},h={target:"ESNext",useDefineForClassFields:!0,lib:["ESNext","DOM","DOM.Iterable"],module:"ESNext",skipLibCheck:!0,moduleResolution:"bundler",allowImportingTsExtensions:!0,isolatedModules:!0,moduleDetection:"force",noEmit:!0,jsx:"react-jsx",importHelpers:!0,allowSyntheticDefaultImports:!0,baseUrl:".",strict:!0,noUnusedLocals:!0,noUnusedParameters:!0,noFallthroughCasesInSwitch:!0,forceConsistentCasingInFileNames:!0},x=["**/node_modules/","**/dist"],j={compilerOptions:h,exclude:x};function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"tsconfigbasejson",children:"tsconfig.base.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"基础 ts 配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"外部使用",children:"外部使用"}),`
`,n.jsxs(s.p,{children:["例如根目录 ",n.jsx(s.code,{children:"tsconfig.json"})]}),`
`,n.jsx(l,{language:"json",children:JSON.stringify(d,null,2)}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["extend",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"继承基础包配置"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:["include",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"将所有 .d.ts 文件全局声明在当前项目中"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"json",children:JSON.stringify(j,null,2)}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"基础编译目标",children:"基础编译目标"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:'target: "ESNext"'})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"编译目标为最新的 ECMAScript 版本"}),`
`,n.jsx(s.li,{children:"生成代码使用最新特性，需现代运行时支持"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"useDefineForClassFields: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用标准类字段语义（ES2022）"}),`
`,n.jsx(s.li,{children:"类字段在构造函数执行前初始化，符合标准"}),`
`,n.jsx(s.li,{children:"旧版 class 内初始化属性，编译后会移到 constructor 中初始化，不符合标准"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:'lib: ["ESNext", "DOM", "DOM.Iterable"]'})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["包含的类型定义库：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"ESNext"}),"：最新 ECMAScript API"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"DOM"}),"：浏览器 DOM API"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"DOM.Iterable"}),"：可迭代 DOM 集合（如 for ... of）"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:'module: "ESNext"'})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用最新的 ES 模块语法（import/export）"}),`
`,n.jsx(s.li,{children:"适合现代打包工具（Vite、Webpack 等）"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"类型检查",children:"类型检查"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"skipLibCheck: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"跳过对声明文件（.d.ts）的类型检查"}),`
`,n.jsx(s.li,{children:"加快编译，减少第三方库类型错误影响"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"模块解析bundler-模式",children:"模块解析（Bundler 模式）"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:'moduleResolution: "bundler"'})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用打包工具友好的模块解析"}),`
`,n.jsxs(s.li,{children:["支持扩展名导入（如 ",n.jsx(s.code,{children:".ts"}),"、",n.jsx(s.code,{children:".tsx"}),"）"]}),`
`,n.jsx(s.li,{children:"旧版是 node 模块解析，会依次解析路径，直到找到文件为止，性能不好"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"allowImportingTsExtensions: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["允许在导入时使用 ",n.jsx(s.code,{children:".ts"}),"、",n.jsx(s.code,{children:".tsx"})," 等扩展名"]}),`
`,n.jsx(s.li,{children:"兼容部分场景"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"isolatedModules: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"确保每个文件可独立编译"}),`
`,n.jsx(s.li,{children:"提升构建工具并行处理能力，避免跨文件依赖"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:'moduleDetection: "force"'})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"强制将所有文件视为模块"}),`
`,n.jsx(s.li,{children:"即使没有 import/export，也按模块处理"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"输出控制",children:"输出控制"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"noEmit: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"不生成 JavaScript 文件"}),`
`,n.jsx(s.li,{children:"仅进行类型检查，输出由打包工具处理"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"jsx-支持",children:"JSX 支持"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:'jsx: "react-jsx"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 React 17+ 的新 JSX 转换"}),`
`,n.jsxs(s.li,{children:["自动从 ",n.jsx(s.code,{children:"react/jsx-runtime"})," 导入，无需手动 ",n.jsx(s.code,{children:"import React"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"辅助函数",children:"辅助函数"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"importHelpers: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["从 ",n.jsx(s.code,{children:"tslib"})," 导入辅助函数（如 ",n.jsx(s.code,{children:"__extends"}),"、",n.jsx(s.code,{children:"__spreadArray"}),"）"]}),`
`,n.jsx(s.li,{children:"减小输出体积，避免重复代码"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"模块导入",children:"模块导入"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"allowSyntheticDefaultImports: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"允许从没有默认导出的模块中使用默认导入，兼容 cjs 和其他"}),`
`,n.jsxs(s.li,{children:["例如：",n.jsx(s.code,{children:"import React from 'react'"}),"（即使 ",n.jsx(s.code,{children:"react"})," 没有默认导出）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"路径解析",children:"路径解析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:'baseUrl: "."'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"设置模块解析的基础路径为当前目录"}),`
`,n.jsxs(s.li,{children:["用于配置 ",n.jsx(s.code,{children:"paths"})," 路径映射"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"严格模式",children:"严格模式"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"strict: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["启用所有严格类型检查选项，包括：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"strictNullChecks"}),"、",n.jsx(s.code,{children:"strictFunctionTypes"}),"、",n.jsx(s.code,{children:"strictBindCallApply"}),"、",n.jsx(s.code,{children:"strictPropertyInitialization"}),"、",n.jsx(s.code,{children:"noImplicitThis"}),"、",n.jsx(s.code,{children:"alwaysStrict"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"代码质量检查",children:"代码质量检查"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"noUnusedLocals: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"禁止未使用的局部变量，编译时报错"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"noUnusedParameters: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"禁止未使用的函数参数，编译时报错"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"noFallthroughCasesInSwitch: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"禁止 switch 语句中的 case 穿透（缺少 break）"}),`
`,n.jsx(s.li,{children:"要求每个 case 明确处理或使用 break/return"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:n.jsx(s.code,{children:"forceConsistentCasingInFileNames: true"})})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"强制文件名大小写一致"}),`
`,n.jsx(s.li,{children:"避免跨平台（Windows/macOS/Linux）的大小写问题"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"排除选项-exclude",children:"排除选项 (exclude)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:'exclude: ["**/node_modules/", "**/dist"]'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["排除 ",n.jsx(s.code,{children:"node_modules"})," 和 ",n.jsx(s.code,{children:"dist"})," 目录"]}),`
`,n.jsx(s.li,{children:"不编译这些目录中的文件，提升性能"}),`
`]}),`
`]}),`
`]})]})}function g(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{g as default};
