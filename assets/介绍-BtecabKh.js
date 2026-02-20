import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import supportIntersectionObserver from '../../../packages/element-utils/src/supportIntersectionObserver'

const basicDemo = () => {
  const result = supportIntersectionObserver()

  action('supportIntersectionObserver 检测结果')({
    supported: result,
    message: result
      ? 'IntersectionObserver 可用，可以使用懒加载等功能'
      : 'IntersectionObserver 不可用，需要使用 polyfill',
  })
}

export default basicDemo
`;function s(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supportintersectionobserver",children:"supportIntersectionObserver"}),`
`,e.jsx(n.p,{children:"检测浏览器是否支持 IntersectionObserver API。IntersectionObserver 用于异步观察目标元素与视口的交叉状态变化。"}),`
`,e.jsx(n.h2,{id:"什么是-intersectionobserver",children:"什么是 IntersectionObserver？"}),`
`,e.jsx(n.p,{children:"IntersectionObserver 是一个浏览器原生 API，用于观察目标元素与其祖先元素或视口之间的交叉状态："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────┐
│           Viewport (视口)            │
│  ┌──────────────────────────────┐   │
│  │                              │   │
│  │    ┌────────────────┐        │   │
│  │    │  Target Element │ ← 被观察的目标元素
│  │    │   (目标元素)    │        │   │
│  │    └────────────────┘        │   │
│  │                              │   │
│  └──────────────────────────────┘   │
│              Root (根元素)           │
└─────────────────────────────────────┘
`})}),`
`,e.jsx(n.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(n.p,{children:"检测当前浏览器是否支持 IntersectionObserver API。"}),`
`,e.jsx(i,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 IntersectionObserver API"})]})})]}),`
`,e.jsx(n.h2,{id:"主要使用场景",children:"主要使用场景"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"懒加载"}),e.jsx("td",{children:"图片/内容进入视口时才加载"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"无限滚动"}),e.jsx("td",{children:"滚动到底部时加载更多内容"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"曝光统计"}),e.jsx("td",{children:"统计广告/内容的可见性"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"动画触发"}),e.jsx("td",{children:"元素进入视口时播放动画"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"视频播放"}),e.jsx("td",{children:"可见时播放，离开时暂停"})]})]})]}),`
`,e.jsx(n.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 创建观察器
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('元素进入视口', entry.target)
        console.log('可见比例:', entry.intersectionRatio)
      }
    })
  },
  {
    root: null,        // 根元素，null 表示视口
    rootMargin: '0px', // 根元素的边距
    threshold: 0       // 触发回调的阈值 (0-1)
  }
)

// 开始观察
observer.observe(element)

// 停止观察
observer.unobserve(element)

// 断开所有观察
observer.disconnect()
`})}),`
`,e.jsx(n.h2,{id:"与传统方案对比",children:"与传统方案对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"传统方案 (scroll + getBoundingClientRect)"}),e.jsx("th",{children:"IntersectionObserver"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"在主线程同步执行，可能造成卡顿"}),e.jsx("td",{children:"异步执行，不阻塞主线程"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"需要手动节流/防抖"}),e.jsx("td",{children:"自动优化回调频率"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"频繁触发 reflow"}),e.jsx("td",{children:"无 reflow 开销"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"代码复杂"}),e.jsx("td",{children:"API 简洁直观"})]})]})]}),`
`,e.jsx(n.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"51+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"55+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"12.1+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"15+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"❌ 不支持"})]})]})]}),`
`,e.jsx(n.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportIntersectionObserver = (): boolean => {
  return isBrowser() && 'IntersectionObserver' in window
}
`})}),`
`,e.jsxs(n.p,{children:["通过检测 ",e.jsx(n.code,{children:"window.IntersectionObserver"})," 是否存在来判断浏览器支持情况。"]})]})}function p(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
