import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isBrowser from '../../../packages/element-utils/src/isBrowser'

const basicDemo = () => {
  const result = isBrowser()

  action('isBrowser 检测结果')({
    isBrowser: result,
    hasWindow: typeof window !== 'undefined',
    hasDocument: typeof document !== 'undefined',
  })
}

export default basicDemo
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isbrowser",children:"isBrowser"}),`
`,n.jsx(e.p,{children:"检测当前代码是否运行在浏览器环境中。这是一个基础工具函数，被其他所有环境检测工具依赖。"}),`
`,n.jsx(e.h2,{id:"为什么需要环境检测",children:"为什么需要环境检测？"}),`
`,n.jsx(e.p,{children:"在同构/SSR（Server-Side Rendering）应用中，代码会同时在 Node.js 服务器和浏览器中运行："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                      同构应用执行流程                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [服务端渲染]              [客户端激活]                     │
│        ↓                        ↓                          │
│   Node.js 环境              浏览器环境                       │
│   ❌ 无 window              ✅ 有 window                    │
│   ❌ 无 document            ✅ 有 document                  │
│   ❌ 无 DOM API             ✅ 有 DOM API                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"基础检测",children:"基础检测"}),`
`,n.jsxs(e.p,{children:["检测当前是否在浏览器环境中运行，通过判断 ",n.jsx(e.code,{children:"window"})," 和 ",n.jsx(e.code,{children:"document"})," 对象是否存在。"]}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在浏览器环境中运行"})]})})]}),`
`,n.jsx(e.h2,{id:"典型使用场景",children:"典型使用场景"}),`
`,n.jsx(e.h3,{id:"ssr-兼容代码",children:"SSR 兼容代码"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import isBrowser from '@justichentai/element-utils/isBrowser'

// 在组件中安全使用 DOM API
const getScrollPosition = () => {
  if (!isBrowser()) {
    return { x: 0, y: 0 }
  }
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}
`})}),`
`,n.jsx(e.h3,{id:"条件初始化",children:"条件初始化"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import isBrowser from '@justichentai/element-utils/isBrowser'

// 只在浏览器端初始化第三方库
if (isBrowser()) {
  import('analytics-library').then(analytics => {
    analytics.init()
  })
}
`})}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 isBrowser 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["检查 ",n.jsx(e.code,{children:"typeof window !== 'undefined'"})]}),`
`,n.jsxs(e.li,{children:["检查 ",n.jsx(e.code,{children:"typeof document !== 'undefined'"})]}),`
`,n.jsx(e.li,{children:"两个条件都满足返回 true"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["实现：",n.jsx(e.code,{children:"typeof window !== 'undefined' && typeof document !== 'undefined'"})]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"typeof"})," 而非直接访问，避免 ReferenceError"]}),`
`,n.jsx(e.li,{children:"同时检查 window 和 document，排除 Web Worker 环境"}),`
`]}),`
`,n.jsx(e.h2,{id:"常见问题",children:"常见问题"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"问题"}),n.jsx("th",{children:"解决方案"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"SSR 中访问 window 报错"}),n.jsxs("td",{children:["使用 ",n.jsx("code",{children:"isBrowser()"})," 包裹 DOM 操作代码"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Web Worker 中返回 false"}),n.jsx("td",{children:"Web Worker 无 document，需单独处理"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Jest 测试环境"}),n.jsx("td",{children:"jsdom 模拟了 window/document，返回 true"})]})]})]})]})}function a(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
