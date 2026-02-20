import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        const aTitle = a.title || ''
        const bTitle = b.title || ''

        // "介绍" 始终排在最前面
        if (aTitle === '介绍') return -1
        if (bTitle === '介绍') return 1

        // 判断是否以中文开头
        const chineseRegex = /^[\\u4e00-\\u9fa5]/
        const aIsChinese = chineseRegex.test(aTitle)
        const bIsChinese = chineseRegex.test(bTitle)

        // 中文排在英文前面
        if (aIsChinese && !bIsChinese) return -1
        if (!aIsChinese && bIsChinese) return 1

        // 同类型按 localeCompare 排序
        return aTitle.localeCompare(bTitle, 'zh-CN', { numeric: true })
      },
    },
  },
}

export default preview
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"previewts",children:"preview.ts"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Storybook 预览配置文件"}),`
`]}),`
`,n.jsx(e.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(e.h3,{id:"类型导入",children:"类型导入"}),`
`,n.jsx(e.h4,{id:"import-type--preview--from-storybookreact-vite",children:n.jsx(e.code,{children:"import type { Preview } from '@storybook/react-vite'"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：导入 Preview 类型"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"type"})," 关键字仅导入类型，不会在运行时引入模块"]}),`
`,n.jsx(e.li,{children:"为配置对象提供类型提示和类型检查"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"配置对象",children:"配置对象"}),`
`,n.jsx(e.h4,{id:"parameters---",children:n.jsx(e.code,{children:"parameters: { ... }"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：配置 Storybook 的全局参数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：影响所有故事的默认行为"]}),`
`]}),`
`,n.jsx(e.h5,{id:"options---",children:n.jsx(e.code,{children:"options: { ... }"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：配置 Storybook UI 选项"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：控制侧边栏、工具栏等 UI 行为"]}),`
`]}),`
`,n.jsx(e.h6,{id:"storysort-a-b----",children:n.jsx(e.code,{children:"storySort: (a, b) => { ... }"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：自定义故事排序规则"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["接收两个故事对象 ",n.jsx(e.code,{children:"a"})," 和 ",n.jsx(e.code,{children:"b"})]}),`
`,n.jsxs(e.li,{children:["返回负数表示 ",n.jsx(e.code,{children:"a"})," 排在 ",n.jsx(e.code,{children:"b"})," 前面"]}),`
`,n.jsxs(e.li,{children:["返回正数表示 ",n.jsx(e.code,{children:"b"})," 排在 ",n.jsx(e.code,{children:"a"})," 前面"]}),`
`,n.jsx(e.li,{children:"返回 0 表示顺序不变"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h5,{id:"aidlocalecomparebid-undefined--numeric-true-",children:n.jsx(e.code,{children:"a.id.localeCompare(b.id, undefined, { numeric: true })"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：按文件路径排序"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"localeCompare"}),"：使用本地化字符串比较"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"undefined"}),"：使用默认语言环境"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"{ numeric: true }"}),'：启用数字排序，使 "2" 排在 "10" 前面']}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"效果"}),"：与 IDE 文件排序保持一致"]}),`
`]}),`
`,n.jsx(e.h3,{id:"导出配置",children:"导出配置"}),`
`,n.jsx(e.h4,{id:"export-default-preview",children:n.jsx(e.code,{children:"export default preview"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：导出预览配置"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：Storybook 会自动读取此文件作为预览配置"]}),`
`]}),`
`,n.jsx(e.h3,{id:"配置文件位置",children:"配置文件位置"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"路径"}),"：",n.jsx(e.code,{children:".storybook/preview.ts"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"说明"}),"：Storybook 默认读取此文件作为预览配置文件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"格式"}),"：TypeScript 文件（",n.jsx(e.code,{children:".ts"}),"），也可以使用 JavaScript（",n.jsx(e.code,{children:".js"}),"）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"与-maints-的区别",children:"与 main.ts 的区别"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"main.ts"}),"：配置 Storybook 的构建和加载行为（故事文件路径、插件、框架等）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"preview.ts"}),"：配置 Storybook 的预览和渲染行为（全局参数、装饰器、排序等）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"其他常用配置",children:"其他常用配置"}),`
`,n.jsx(e.h4,{id:"decorators",children:"decorators"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：全局装饰器，包裹所有故事"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：添加全局样式、Provider 等"]}),`
`]}),`
`,n.jsx(e.h4,{id:"globaltypes",children:"globalTypes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"作用"}),"：定义全局工具栏控件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"示例"}),"：主题切换、语言切换等"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
