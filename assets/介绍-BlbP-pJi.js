import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import supportPerformanceObserver from '../../../packages/element-utils/src/supportPerformanceObserver'

const basicDemo = () => {
  const result = supportPerformanceObserver()

  action('supportPerformanceObserver 检测结果')({
    supported: result,
    message: result
      ? 'PerformanceObserver 可用，可以监听性能指标'
      : 'PerformanceObserver 不可用',
  })
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import {
  getSupportedEntryTypes,
  supportEntryType,
} from '../../../packages/element-utils/src/supportPerformanceObserver'

const entryTypesDemo = () => {
  const supportedTypes = getSupportedEntryTypes()

  // 检测常用的 entry types
  const commonTypes = [
    'paint',
    'largest-contentful-paint',
    'first-input',
    'layout-shift',
    'longtask',
    'resource',
    'navigation',
    'event',
  ]

  const typeSupport = commonTypes.reduce(
    (acc, type) => {
      acc[type] = supportEntryType(type)
      return acc
    },
    {} as Record<string, boolean>
  )

  action('支持的 Entry Types')(supportedTypes)
  action('常用类型支持情况')(typeSupport)
}

export default entryTypesDemo
`;function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supportperformanceobserver",children:"supportPerformanceObserver"}),`
`,e.jsx(n.p,{children:"检测浏览器是否支持 PerformanceObserver API。PerformanceObserver 用于监听各种性能指标。"}),`
`,e.jsx(n.h2,{id:"什么是-performanceobserver",children:"什么是 PerformanceObserver？"}),`
`,e.jsx(n.p,{children:"PerformanceObserver 是一个浏览器原生 API，用于异步观察性能度量事件："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    性能指标时间线                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  导航开始    FP     FCP     LCP          FID    CLS        │
│     │        │       │       │            │      │         │
│     ▼        ▼       ▼       ▼            ▼      ▼         │
│  ───●────────●───────●───────●────────────●──────●────→ 时间 │
│     │        │       │       │            │      │         │
│     │        │       │       │            │      │         │
│     └────────┴───────┴───────┴────────────┴──────┘         │
│                       ↓                                     │
│              PerformanceObserver 收集                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(n.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(n.p,{children:"检测当前浏览器是否支持 PerformanceObserver API。"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"entry-types-检测",children:"Entry Types 检测"}),`
`,e.jsx(n.p,{children:"检测浏览器支持哪些性能指标类型。"}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 PerformanceObserver API"})]})})]}),`
`,e.jsx(n.h2,{id:"导出的其他函数",children:"导出的其他函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数名"}),e.jsx("th",{children:"返回类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"getSupportedEntryTypes"}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"获取浏览器支持的所有 entry types"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"supportEntryType"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"检测是否支持指定的 entry type"})]})]})]}),`
`,e.jsx(n.h2,{id:"常用-entry-types",children:"常用 Entry Types"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Entry Type"}),e.jsx("th",{children:"用途"}),e.jsx("th",{children:"对应指标"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paint"}),e.jsx("td",{children:"绘制事件"}),e.jsx("td",{children:"FP, FCP"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"largest-contentful-paint"}),e.jsx("td",{children:"最大内容绘制"}),e.jsx("td",{children:"LCP"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"first-input"}),e.jsx("td",{children:"首次输入延迟"}),e.jsx("td",{children:"FID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"layout-shift"}),e.jsx("td",{children:"布局偏移"}),e.jsx("td",{children:"CLS"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"longtask"}),e.jsx("td",{children:"长任务"}),e.jsx("td",{children:"TBT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resource"}),e.jsx("td",{children:"资源加载"}),e.jsx("td",{children:"资源加载时间"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"navigation"}),e.jsx("td",{children:"页面导航"}),e.jsx("td",{children:"TTFB, DOM 解析时间"})]})]})]}),`
`,e.jsx(n.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 创建观察器
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach(entry => {
    console.log(\`\${entry.name}: \${entry.startTime}ms\`)
  })
})

// 观察特定类型
observer.observe({ 
  type: 'largest-contentful-paint',
  buffered: true  // 获取页面加载前已发生的条目
})

// 观察多个类型
observer.observe({ 
  entryTypes: ['paint', 'longtask', 'resource'] 
})

// 停止观察
observer.disconnect()
`})}),`
`,e.jsx(n.h2,{id:"core-web-vitals-监控示例",children:"Core Web Vitals 监控示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import supportPerformanceObserver, { 
  supportEntryType 
} from '@justichentai/element-utils/supportPerformanceObserver'

if (supportPerformanceObserver()) {
  // LCP - 最大内容绘制
  if (supportEntryType('largest-contentful-paint')) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1]
      console.log('LCP:', lcp.startTime)
    }).observe({ type: 'largest-contentful-paint', buffered: true })
  }

  // FID - 首次输入延迟
  if (supportEntryType('first-input')) {
    new PerformanceObserver((list) => {
      const fid = list.getEntries()[0]
      console.log('FID:', fid.processingStart - fid.startTime)
    }).observe({ type: 'first-input', buffered: true })
  }
}
`})}),`
`,e.jsx(n.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"52+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"57+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"11+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"79+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"❌ 不支持"})]})]})]}),`
`,e.jsx(n.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportPerformanceObserver = (): boolean => {
  return isBrowser() && 'PerformanceObserver' in window
}

export const getSupportedEntryTypes = (): string[] => {
  if (!supportPerformanceObserver()) return []
  return PerformanceObserver.supportedEntryTypes || []
}

export const supportEntryType = (type: string): boolean => {
  return getSupportedEntryTypes().includes(type)
}
`})}),`
`,e.jsxs(n.p,{children:["通过检测 ",e.jsx(n.code,{children:"window.PerformanceObserver"})," 是否存在来判断浏览器支持情况，并使用 ",e.jsx(n.code,{children:"supportedEntryTypes"})," 静态属性检测具体的 entry type 支持。"]})]})}function j(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
