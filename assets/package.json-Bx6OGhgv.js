import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-CJRiz8xl.js";import{C as c}from"./blocks-BQlzN-aX.js";import"./iframe-BNypc-Hr.js";import"./index-B1AKrtt8.js";const r=`{
  "name": "@justichentai/utils-template",
  "version": "1.0.0",
  "description": "工具包模板",
  "license": "ISC",
  "author": "justichentai",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "prepublish": "pnpm build"
  },
  "devDependencies": {
    "@swc/core": "^1.15.3",
    "@swc/helpers": "^0.5.17",
    "esbuild": "^0.27.1",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3"
  },
  "sideEffects": false
}
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"packagejson",children:"package.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"项目配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(c,{language:"json",children:r}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"name-justichentaiutils-template",children:n.jsx(s.code,{children:'name: "@justichentai/utils-template"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义包的名称，使用 scoped package 格式（以 ",n.jsx(s.code,{children:"@"})," 开头）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["Scoped package 可以避免包名冲突，所有以 ",n.jsx(s.code,{children:"@justichentai/"})," 开头的包都属于同一个组织"]}),`
`,n.jsxs(s.li,{children:["安装时需要使用完整名称：",n.jsx(s.code,{children:"pnpm add @justichentai/utils-template"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：便于组织管理多个相关包，避免全局命名空间污染"]}),`
`]}),`
`,n.jsx(s.h3,{id:"version-100",children:n.jsx(s.code,{children:'version: "1.0.0"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义包的版本号，遵循语义化版本（Semantic Versioning）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"格式"}),"：",n.jsx(s.code,{children:"主版本号.次版本号.修订号"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"主版本号：不兼容的 API 修改"}),`
`,n.jsx(s.li,{children:"次版本号：向下兼容的功能性新增"}),`
`,n.jsx(s.li,{children:"修订号：向下兼容的问题修正"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`"version": "1.0.0"  // 初始版本
"version": "1.1.0"  // 新增功能
"version": "2.0.0"  // 重大更新（可能不兼容）
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"description-工具包模板",children:n.jsx(s.code,{children:'description: "工具包模板"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：包的简短描述，用于在 npm 等包管理器中显示"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：帮助其他开发者快速了解包的用途"]}),`
`]}),`
`,n.jsx(s.h3,{id:"license-isc",children:n.jsx(s.code,{children:'license: "ISC"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义包的许可证类型"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：ISC（Internet Systems Consortium）许可证是一个简洁的、类似 MIT 的开源许可证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"常见选项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"MIT"}),"：最流行的开源许可证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"Apache-2.0"}),"：Apache 许可证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"GPL-3.0"}),"：GNU 通用公共许可证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"ISC"}),"：简洁的许可证"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"author-justichentai",children:n.jsx(s.code,{children:'author: "justichentai"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义包的作者信息"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：可以是字符串或对象格式"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`// 字符串格式
"author": "justichentai"

// 对象格式
"author": {
  "name": "justichentai",
  "email": "example@email.com",
  "url": "https://example.com"
}
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"type-module",children:n.jsx(s.code,{children:'type: "module"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定包使用 ES 模块（ESM）而不是 CommonJS"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["设置为 ",n.jsx(s.code,{children:'"module"'})," 后，",n.jsx(s.code,{children:".js"})," 文件会被视为 ES 模块"]}),`
`,n.jsxs(s.li,{children:["可以使用 ",n.jsx(s.code,{children:"import/export"})," 语法"]}),`
`,n.jsxs(s.li,{children:["如果不设置或设置为 ",n.jsx(s.code,{children:'"commonjs"'}),"，则使用 ",n.jsx(s.code,{children:"require/module.exports"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// 使用 type: "module" 后可以这样写
import { someFunction } from './utils.js'
export default someFunction

// 而不是 CommonJS 的写法
// const { someFunction } = require('./utils')
// module.exports = someFunction
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"main-distindexjs",children:n.jsx(s.code,{children:'main: "dist/index.js"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义包的入口文件，当其他项目通过 ",n.jsx(s.code,{children:"require()"})," 或 ",n.jsx(s.code,{children:"import"})," 引入包时使用的文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"这是包的默认入口点"}),`
`,n.jsx(s.li,{children:"路径相对于包的根目录"}),`
`,n.jsx(s.li,{children:"通常指向编译后的输出文件"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// 其他项目可以这样引入
import utils from '@justichentai/utils-template'
// 实际会加载 dist/index.js
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"types-distindexdts",children:n.jsx(s.code,{children:'types: "dist/index.d.ts"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义 TypeScript 类型定义文件的路径"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"当使用 TypeScript 开发时，IDE 和编译器会使用此文件提供类型提示"}),`
`,n.jsx(s.li,{children:"路径相对于包的根目录"}),`
`,n.jsxs(s.li,{children:["通常与 ",n.jsx(s.code,{children:"main"})," 字段对应的 ",n.jsx(s.code,{children:".d.ts"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：提供完整的 TypeScript 类型支持，提升开发体验"]}),`
`]}),`
`,n.jsx(s.h3,{id:"files-dist",children:n.jsx(s.code,{children:'files: ["dist"]'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定发布到 npm 时包含的文件和目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"只有列出的文件和目录会被打包发布"}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"package.json"})," 和 ",n.jsx(s.code,{children:"README.md"})," 通常会自动包含"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dist"})," 目录包含编译后的代码"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"减少包体积，不发布源码和开发文件"}),`
`,n.jsx(s.li,{children:"提高安装速度"}),`
`,n.jsx(s.li,{children:"保护源代码不被直接暴露"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意"}),"：某些文件总是会被包含（如 ",n.jsx(s.code,{children:"package.json"}),"），某些文件总是会被忽略（如 ",n.jsx(s.code,{children:".gitignore"})," 中的文件）"]}),`
`]}),`
`,n.jsx(s.h3,{id:"scripts",children:n.jsx(s.code,{children:"scripts"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义可执行的 npm/pnpm 脚本命令"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：可以通过 ",n.jsx(s.code,{children:"pnpm <script-name>"})," 执行"]}),`
`]}),`
`,n.jsx(s.h4,{id:"build-tsup",children:n.jsx(s.code,{children:'build: "tsup"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：构建生产版本"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用 ",n.jsx(s.code,{children:"tsup"})," 工具将 TypeScript 源码编译打包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用"}),"：",n.jsx(s.code,{children:"pnpm build"})]}),`
`]}),`
`,n.jsx(s.h4,{id:"dev-tsup---watch",children:n.jsx(s.code,{children:'dev: "tsup --watch"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：开发模式，监听文件变化自动重新构建"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",n.jsx(s.code,{children:"--watch"})," 参数使 tsup 在文件变化时自动重新编译"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用"}),"：",n.jsx(s.code,{children:"pnpm dev"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：提升开发效率，无需手动重新构建"]}),`
`]}),`
`,n.jsx(s.h4,{id:"prepublish-pnpm-build",children:n.jsx(s.code,{children:'prepublish: "pnpm build"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：发布前的钩子脚本，在 ",n.jsx(s.code,{children:"pnpm publish"})," 之前自动执行"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"npm/pnpm 生命周期钩子，确保发布前代码已构建"}),`
`,n.jsx(s.li,{children:"如果构建失败，发布会被阻止"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：防止发布未构建或构建失败的代码"]}),`
`]}),`
`,n.jsx(s.h3,{id:"devdependencies",children:n.jsx(s.code,{children:"devDependencies"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义开发时需要的依赖包，不会安装到使用该包的项目中"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"这些依赖只在开发、构建、测试时使用"}),`
`,n.jsx(s.li,{children:"安装包的用户不会安装这些依赖"}),`
`,n.jsxs(s.li,{children:["与 ",n.jsx(s.code,{children:"dependencies"})," 的区别：",n.jsx(s.code,{children:"dependencies"})," 是运行时必需的依赖"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"swccore-1153",children:n.jsx(s.code,{children:'@swc/core: "^1.15.3"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：SWC（Speedy Web Compiler）核心库，用于快速编译 TypeScript/JavaScript"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：Rust 编写的编译器，比 Babel 快很多倍"]}),`
`]}),`
`,n.jsx(s.h4,{id:"swchelpers-0517",children:n.jsx(s.code,{children:'@swc/helpers: "^0.5.17"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：SWC 编译器的辅助函数库"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"提供编译过程中需要的辅助函数"}),`
`,n.jsx(s.li,{children:"多个包可共用同一份 swc-helpers 代码节省包体积"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"工作原理"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// 使用 @swc/helpers 时，编译后代码：
import { _classCallCheck } from '@swc/helpers'

// 不使用时, 会在文件中声明一个 polyfill：
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"esbuild-0271",children:n.jsx(s.code,{children:'esbuild: "^0.27.1"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：极速的 JavaScript/TypeScript 打包工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：Go 语言编写，构建速度极快，tsup 底层使用 esbuild"]}),`
`]}),`
`,n.jsx(s.h4,{id:"tsup-851",children:n.jsx(s.code,{children:'tsup: "^8.5.1"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：基于 esbuild 的零配置 TypeScript 打包工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"简化 TypeScript 项目的构建配置"}),`
`,n.jsx(s.li,{children:"自动处理 TypeScript、ESM、类型定义等"}),`
`,n.jsx(s.li,{children:"支持多种输出格式"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"typescript-593",children:n.jsx(s.code,{children:'typescript: "^5.9.3"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：TypeScript 编译器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：提供类型检查和编译功能"]}),`
`]}),`
`,n.jsx(s.h3,{id:"sideeffects-false",children:n.jsx(s.code,{children:"sideEffects: false"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：标记包为无副作用，启用 tree-shaking 优化"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"false"})," 表示包中的所有模块都是纯函数，没有副作用"]}),`
`,n.jsx(s.li,{children:"打包工具（如 webpack、rollup）可以安全地移除未使用的代码"}),`
`,n.jsxs(s.li,{children:["如果包中有副作用代码（如 polyfill、全局样式），应设置为 ",n.jsx(s.code,{children:"true"})," 或指定具体文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"减小最终打包体积"}),`
`,n.jsx(s.li,{children:"提升应用性能"}),`
`,n.jsx(s.li,{children:"优化加载速度"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`// 无副作用（推荐用于工具库）
"sideEffects": false

// 有副作用，需要指定文件
"sideEffects": [
  "./dist/polyfill.js",
  "./dist/styles.css"
]
`})}),`
`]}),`
`]})]})}function o(e={}){const{wrapper:s}={...l(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{o as default};
