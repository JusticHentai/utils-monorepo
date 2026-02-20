import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import supportResizeObserver from '../../../packages/element-utils/src/supportResizeObserver'

const basicDemo = () => {
  const result = supportResizeObserver()

  action('supportResizeObserver 检测结果')({
    supported: result,
    message: result
      ? 'ResizeObserver 可用，可以监听元素尺寸变化'
      : 'ResizeObserver 不可用，需要使用 polyfill',
  })
}

export default basicDemo
`;function s(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"supportresizeobserver",children:"supportResizeObserver"}),`
`,e.jsx(r.p,{children:"检测浏览器是否支持 ResizeObserver API。ResizeObserver 用于监听元素尺寸的变化。"}),`
`,e.jsx(r.h2,{id:"什么是-resizeobserver",children:"什么是 ResizeObserver？"}),`
`,e.jsx(r.p,{children:"ResizeObserver 是一个浏览器原生 API，用于异步观察元素的尺寸变化："}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    元素尺寸变化监听                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────────────┐           │
│   │   Element    │  →   │      Element         │           │
│   │  200 x 100   │      │    300 x 150         │           │
│   └──────────────┘      └──────────────────────┘           │
│         ↓                                                   │
│   ResizeObserver 检测到变化                                  │
│         ↓                                                   │
│   回调函数执行，获取新尺寸信息                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(r.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(r.p,{children:"检测当前浏览器是否支持 ResizeObserver API。"}),`
`,e.jsx(i,{language:"typescript",children:t}),`
`,e.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 ResizeObserver API"})]})})]}),`
`,e.jsx(r.h2,{id:"主要使用场景",children:"主要使用场景"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"响应式组件"}),e.jsx("td",{children:"根据容器尺寸调整布局"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"图表重绘"}),e.jsx("td",{children:"容器尺寸变化时重新绘制图表"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"虚拟列表"}),e.jsx("td",{children:"计算可视区域可显示的项数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"文本截断"}),e.jsx("td",{children:"根据容器宽度动态截断文本"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Canvas 适配"}),e.jsx("td",{children:"根据容器尺寸调整 Canvas 大小"})]})]})]}),`
`,e.jsx(r.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`// 创建观察器
const observer = new ResizeObserver((entries) => {
  entries.forEach(entry => {
    const { width, height } = entry.contentRect
    console.log(\`元素尺寸: \${width} x \${height}\`)
    
    // 获取边框盒尺寸
    const borderBoxSize = entry.borderBoxSize[0]
    console.log(\`边框盒: \${borderBoxSize.inlineSize} x \${borderBoxSize.blockSize}\`)
  })
})

// 开始观察
observer.observe(element)

// 指定盒模型
observer.observe(element, { box: 'border-box' })

// 停止观察
observer.unobserve(element)

// 断开所有观察
observer.disconnect()
`})}),`
`,e.jsx(r.h2,{id:"resizeobserverentry-属性",children:"ResizeObserverEntry 属性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element"})}),e.jsx("td",{children:"被观察的元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"contentRect"}),e.jsx("td",{children:e.jsx("code",{children:"DOMRectReadOnly"})}),e.jsx("td",{children:"内容区域的尺寸信息"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"borderBoxSize"}),e.jsx("td",{children:e.jsx("code",{children:"ResizeObserverSize[]"})}),e.jsx("td",{children:"边框盒尺寸"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"contentBoxSize"}),e.jsx("td",{children:e.jsx("code",{children:"ResizeObserverSize[]"})}),e.jsx("td",{children:"内容盒尺寸"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"devicePixelContentBoxSize"}),e.jsx("td",{children:e.jsx("code",{children:"ResizeObserverSize[]"})}),e.jsx("td",{children:"设备像素内容盒尺寸"})]})]})]}),`
`,e.jsx(r.h2,{id:"盒模型选项",children:"盒模型选项"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"选项值"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"content-box"}),e.jsx("td",{children:"内容区域（默认）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"border-box"}),e.jsx("td",{children:"包含内边距和边框"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"device-pixel-content-box"}),e.jsx("td",{children:"设备像素单位的内容区域"})]})]})]}),`
`,e.jsx(r.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"64+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"69+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"13.1+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"79+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"❌ 不支持"})]})]})]}),`
`,e.jsx(r.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportResizeObserver = (): boolean => {
  return isBrowser() && 'ResizeObserver' in window
}
`})}),`
`,e.jsxs(r.p,{children:["通过检测 ",e.jsx(r.code,{children:"window.ResizeObserver"})," 是否存在来判断浏览器支持情况。"]})]})}function b(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
