import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/index.ts'],
  format: ['esm'],
  minify: true,
  clean: true,
  dts: true,
  target: 'es5',
  external: ['@swc/helpers'],
  sourcemap: true,
})
`;function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"tsupconfigts",children:"tsup.config.ts"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"tsup 打包工具配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"defineconfig",children:n.jsx(s.code,{children:"defineConfig"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：tsup 提供的配置函数，提供类型提示和配置验证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["从 ",n.jsx(s.code,{children:"tsup"})," 包导入的配置辅助函数"]}),`
`,n.jsx(s.li,{children:"提供完整的 TypeScript 类型支持"}),`
`,n.jsx(s.li,{children:"帮助在编写配置时获得 IDE 自动补全和类型检查"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"类型安全"}),"：编译时检查配置错误"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"智能提示"}),"：IDE 自动补全可用选项"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文档支持"}),"：鼠标悬停可查看选项说明"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"entry-srcts",children:n.jsx(s.code,{children:"entry: ['src/**/*.ts']"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定打包的入口文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 glob 模式匹配要打包的文件"}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"src/**/*.ts"})," 表示 ",n.jsx(s.code,{children:"src"})," 目录及其所有子目录中的 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`,n.jsx(s.li,{children:"每个匹配的文件都会作为独立的入口点进行打包"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"匹配规则"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"src/"}),"：src 目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**"}),"：匹配任意深度的子目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"*.ts"}),"：匹配所有 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 单入口
entry: ['src/index.ts']

// 多入口（当前配置）
entry: ['src/**/*.ts']
// 会打包：
// - src/index.ts -> dist/index.js
// - src/utils/helper.ts -> dist/utils/helper.js
// - src/utils/validator.ts -> dist/utils/validator.js
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"多入口打包"}),"：支持按需导入，每个文件独立打包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tree-shaking 友好"}),"：只导入需要的文件，未使用的代码会被移除"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"灵活导入"}),"：可以这样导入 ",n.jsx(s.code,{children:"import { helper } from '@justichentai/utils-template/utils/helper'"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"format-esm",children:n.jsx(s.code,{children:"format: ['esm']"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定输出格式为 ES 模块（ESM）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"esm"})," 表示输出 ES 模块格式，使用 ",n.jsx(s.code,{children:"import/export"})," 语法"]}),`
`,n.jsx(s.li,{children:"支持现代 JavaScript 的模块系统"}),`
`,n.jsxs(s.li,{children:["与 ",n.jsx(s.code,{children:"package.json"})," 中的 ",n.jsx(s.code,{children:'"type": "module"'})," 配合使用"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"可选值"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'esm'"}),"：ES 模块格式（推荐用于现代项目）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'cjs'"}),"：CommonJS 格式（Node.js 传统格式）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'iife'"}),"：立即执行函数表达式（浏览器全局变量）"]}),`
`,n.jsxs(s.li,{children:["可以同时指定多个格式：",n.jsx(s.code,{children:"['esm', 'cjs']"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 输出 ESM 格式
export function helper() { }

// 而不是 CommonJS 格式
// module.exports = { helper() { } }
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"现代标准"}),"：符合 ES 模块规范"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tree-shaking"}),"：打包工具可以更好地进行代码优化"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"浏览器原生支持"}),"：现代浏览器原生支持 ES 模块"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"minify-true",children:n.jsx(s.code,{children:"minify: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：启用代码压缩，减小输出文件体积"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"压缩 JavaScript 代码，移除空白、注释，缩短变量名等"}),`
`,n.jsx(s.li,{children:"使用 esbuild 内置的压缩功能，速度极快"}),`
`,n.jsx(s.li,{children:"生产环境推荐启用"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"压缩效果"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 压缩前
export function calculateSum(a: number, b: number): number {
  return a + b;
}

// 压缩后（示例）
export function calculateSum(a,b){return a+b}
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减小体积"}),"：减少文件大小，提升加载速度"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提升性能"}),"：更小的文件意味着更快的下载和解析"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"节省带宽"}),"：减少服务器和用户的带宽消耗"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"压缩后的代码可读性差，不适合调试"}),`
`,n.jsx(s.li,{children:"开发环境通常关闭压缩以便调试"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"clean-true",children:n.jsx(s.code,{children:"clean: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：在构建前清理输出目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["每次构建前自动删除输出目录（通常是 ",n.jsx(s.code,{children:"dist"}),"）中的旧文件"]}),`
`,n.jsx(s.li,{children:"确保输出目录只包含最新构建的文件"}),`
`,n.jsx(s.li,{children:"避免旧文件残留导致的问题"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"工作原理"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 构建流程
1. 清理 dist 目录（删除所有旧文件）
2. 编译 TypeScript 代码
3. 生成新的输出文件到 dist 目录
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"避免残留"}),"：防止旧文件干扰新构建"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"保持干净"}),"：输出目录始终是最新的构建结果"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减少错误"}),"：避免引用已删除但仍在目录中的文件"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"dts-true",children:n.jsx(s.code,{children:"dts: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：生成 TypeScript 类型定义文件（",n.jsx(s.code,{children:".d.ts"}),"）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["自动为每个入口文件生成对应的 ",n.jsx(s.code,{children:".d.ts"})," 类型定义文件"]}),`
`,n.jsx(s.li,{children:"这些文件提供 TypeScript 类型信息，供其他项目使用"}),`
`,n.jsxs(s.li,{children:["与 ",n.jsx(s.code,{children:"package.json"})," 中的 ",n.jsx(s.code,{children:"types"})," 字段配合使用"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"生成示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// src/index.ts
export function helper(): void { }

// 自动生成 dist/index.d.ts
export declare function helper(): void;
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"类型支持"}),"：使用该包的项目可以获得完整的 TypeScript 类型提示"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"自动生成"}),"：无需手动维护类型定义文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提升体验"}),"：IDE 自动补全、类型检查等功能正常工作"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["需要安装 ",n.jsx(s.code,{children:"typescript"})," 作为开发依赖"]}),`
`,n.jsxs(s.li,{children:["类型定义文件会与 JavaScript 文件一起输出到 ",n.jsx(s.code,{children:"dist"})," 目录"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"target-es5",children:n.jsx(s.code,{children:"target: 'es5'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定编译目标为 ES5，确保兼容性"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"将现代 JavaScript 语法转换为 ES5 语法"}),`
`,n.jsx(s.li,{children:"ES5 是广泛支持的 JavaScript 版本，兼容性最好"}),`
`,n.jsx(s.li,{children:"确保代码可以在旧版浏览器和 Node.js 环境中运行"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"转换示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 源代码（ES6+）
const arrow = () => { }
class MyClass { }

// 编译为 ES5
var arrow = function() { }
function MyClass() { }
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"可选值"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'es5'"}),"：ES5 语法（最佳兼容性）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'es2015'"})," / ",n.jsx(s.code,{children:"'es6'"}),"：ES2015 语法"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'es2017'"}),"：ES2017 语法"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'es2020'"}),"：ES2020 语法（现代浏览器）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"'esnext'"}),"：最新语法（需要运行时支持）"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"权衡"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ES5"}),"：兼容性最好，但文件体积较大（需要更多转换代码）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ES2020+"}),"：文件体积小，但需要现代环境支持"]}),`
`,n.jsx(s.li,{children:"根据目标用户选择合适的目标版本"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"external-swchelpers",children:n.jsx(s.code,{children:"external: ['@swc/helpers']"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：将指定包标记为外部依赖，不打包进输出文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"@swc/helpers"})," 不会被打包进输出文件"]}),`
`,n.jsxs(s.li,{children:["运行时从 ",n.jsx(s.code,{children:"node_modules"})," 中加载该依赖"]}),`
`,n.jsxs(s.li,{children:["与 SWC 的 ",n.jsx(s.code,{children:"externalHelpers: true"})," 配置配合使用"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"工作原理"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 源代码
import { _classCallCheck } from '@swc/helpers'

// 打包后（external 配置）
import { _classCallCheck } from '@swc/helpers'
// @swc/helpers 不会被内联，保持 import 语句

// 如果不设置 external
// @swc/helpers 的代码会被打包进输出文件
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减小体积"}),"：不重复打包外部依赖"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"共享代码"}),"：多个包可以共享同一份 ",n.jsx(s.code,{children:"@swc/helpers"})," 代码"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"便于更新"}),"：更新依赖时只需更新 ",n.jsx(s.code,{children:"node_modules"}),"，无需重新打包"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"大型依赖库（如 React、Vue）"}),`
`,n.jsxs(s.li,{children:["共享的辅助函数库（如 ",n.jsx(s.code,{children:"@swc/helpers"}),"）"]}),`
`,n.jsxs(s.li,{children:["Node.js 内置模块（如 ",n.jsx(s.code,{children:"fs"}),"、",n.jsx(s.code,{children:"path"}),"）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"sourcemap-true",children:n.jsx(s.code,{children:"sourcemap: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：生成 source map 文件，便于调试"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["生成 ",n.jsx(s.code,{children:".map"})," 文件，映射编译后的代码到原始源代码"]}),`
`,n.jsx(s.li,{children:"调试时可以查看原始 TypeScript 代码而不是编译后的 JavaScript"}),`
`,n.jsx(s.li,{children:"生产环境通常关闭以减小文件体积"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"生成文件"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 输出文件
dist/index.js
dist/index.js.map  // source map 文件
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"便于调试"}),"：在浏览器调试工具中查看原始 TypeScript 代码"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"错误定位"}),"：错误堆栈指向原始源代码位置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"开发体验"}),"：提升开发时的调试效率"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"工作原理"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 原始代码 (src/index.ts:5)
export function helper() {
  console.log('Hello')
}

// 编译后 (dist/index.js:1)
export function helper(){console.log("Hello")}

// source map 将 dist/index.js:1 映射回 src/index.ts:5
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"source map 文件会增加构建时间"}),`
`,n.jsxs(s.li,{children:["生产环境可以考虑关闭或使用 ",n.jsx(s.code,{children:"hidden"})," source map（不暴露给浏览器）"]}),`
`]}),`
`]}),`
`]})]})}function p(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}export{p as default};
