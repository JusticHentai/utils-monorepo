import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BG77pm9a.js";import{C as o}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const l=`/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
`;function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"maints",children:"main.ts"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Storybook 主配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(o,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"类型注释",children:"类型注释"}),`
`,n.jsx(s.h4,{id:"-type--importstorybookreact-vitestorybookconfig--",children:n.jsx(s.code,{children:"/** @type { import('@storybook/react-vite').StorybookConfig } */"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：TypeScript JSDoc 类型注释"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"为配置对象提供类型提示"}),`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"@storybook/react-vite"})," 包中的 ",n.jsx(s.code,{children:"StorybookConfig"})," 类型"]}),`
`,n.jsx(s.li,{children:"提供代码自动补全和类型检查"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"配置对象",children:"配置对象"}),`
`,n.jsx(s.h4,{id:"stories-",children:n.jsx(s.code,{children:"stories: [...]"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定 Storybook 要加载的故事文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用 glob 模式匹配文件路径"]}),`
`]}),`
`,n.jsx(s.h5,{id:"storiesmdx",children:n.jsx(s.code,{children:"'../stories/**/*.mdx'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：加载所有 MDX 文档文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"../stories/"}),"：从 ",n.jsx(s.code,{children:".storybook"})," 目录向上一级，进入 ",n.jsx(s.code,{children:"stories"})," 目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**/*.mdx"}),"：匹配所有子目录中的 ",n.jsx(s.code,{children:".mdx"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：组件文档、配置说明等 MDX 格式的文档"]}),`
`]}),`
`,n.jsx(s.h5,{id:"storiesstoriesjsjsxmjststsx",children:n.jsx(s.code,{children:"'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：加载所有故事文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**/*.stories."}),"：匹配所有以 ",n.jsx(s.code,{children:".stories."})," 开头的文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"@(js|jsx|mjs|ts|tsx)"}),"：匹配指定的文件扩展名"]}),`
`,n.jsx(s.li,{children:"支持 JavaScript、JSX、ESM、TypeScript 和 TSX 格式"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：组件示例和交互式演示"]}),`
`]}),`
`,n.jsx(s.h4,{id:"addons-",children:n.jsx(s.code,{children:"addons: [...]"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：配置 Storybook 插件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：启用额外的功能和工具"]}),`
`]}),`
`,n.jsx(s.h5,{id:"chromatic-comstorybook",children:n.jsx(s.code,{children:"'@chromatic-com/storybook'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Chromatic Storybook 集成插件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"视觉测试和组件审查"}),`
`,n.jsx(s.li,{children:"自动截图对比"}),`
`,n.jsx(s.li,{children:"组件变更检测"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h5,{id:"storybookaddon-docs",children:n.jsx(s.code,{children:"'@storybook/addon-docs'"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：Storybook 文档插件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"功能"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"自动生成组件文档"}),`
`,n.jsx(s.li,{children:"支持 MDX 格式"}),`
`,n.jsx(s.li,{children:"显示组件 Props 表格"}),`
`,n.jsx(s.li,{children:"代码示例展示"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"framework--name-storybookreact-vite-options--",children:n.jsx(s.code,{children:"framework: { name: '@storybook/react-vite', options: {} }"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定 Storybook 使用的框架和构建工具"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"name: '@storybook/react-vite'"}),"：使用 React + Vite 框架"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"options: {}"}),"：框架选项（当前为空对象，使用默认配置）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h5,{id:"框架选择说明",children:"框架选择说明"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.code,{children:"@storybook/react-vite"})}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 Vite 作为构建工具"}),`
`,n.jsx(s.li,{children:"快速的热模块替换（HMR）"}),`
`,n.jsx(s.li,{children:"现代化的构建体验"}),`
`,n.jsx(s.li,{children:"适合 React 项目"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"导出配置",children:"导出配置"}),`
`,n.jsx(s.h4,{id:"export-default-config",children:n.jsx(s.code,{children:"export default config"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：导出 Storybook 配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：Storybook 会自动读取此文件作为配置"]}),`
`]}),`
`,n.jsx(s.h3,{id:"配置文件位置",children:"配置文件位置"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"路径"}),"：",n.jsx(s.code,{children:".storybook/main.ts"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：Storybook 默认读取此文件作为主配置文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"格式"}),"：TypeScript 文件（",n.jsx(s.code,{children:".ts"}),"），也可以使用 JavaScript（",n.jsx(s.code,{children:".js"}),"）"]}),`
`]}),`
`,n.jsx(s.h3,{id:"优势",children:"优势"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"类型安全"}),"：使用 TypeScript 和类型注释，提供类型检查"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"快速构建"}),"：使用 Vite 作为构建工具，启动和构建速度快"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文档支持"}),"：集成文档插件，支持 MDX 格式的文档"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"视觉测试"}),"：集成 Chromatic，支持组件视觉测试"]}),`
`]})]})}function j(i={}){const{wrapper:s}={...e(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
