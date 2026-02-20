import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import getElementSize from '../../../packages/element-utils/src/getElementSize'

const basicDemo = () => {
  const element = document.querySelector('#demo-box')
  const { width, height } = getElementSize(element)

  action('getElementSize 结果')({
    width,
    height,
    description: \`元素尺寸: \${width} x \${height}\`,
  })

  // 测试 null 元素
  const nullResult = getElementSize(null)
  action('null 元素结果')(nullResult)
}

export default basicDemo
`;function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getelementsize",children:"getElementSize"}),`
`,e.jsxs(n.p,{children:["获取 DOM 元素的当前尺寸（宽度和高度）。通过 ",e.jsx(n.code,{children:"getBoundingClientRect"})," API 获取元素的实际渲染尺寸。"]}),`
`,e.jsx(n.h2,{id:"什么是-getboundingclientrect",children:"什么是 getBoundingClientRect？"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getBoundingClientRect"})," 是浏览器原生 API，返回元素的大小及其相对于视口的位置："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                       视口 (Viewport)                        │
│                                                             │
│    ┌─────────────────────────────────────┐                  │
│    │           Element                   │                  │
│    │   ┌───────────────────────────┐     │                  │
│    │   │      Content Box          │     │  ← height        │
│    │   │                           │     │                  │
│    │   └───────────────────────────┘     │                  │
│    │           ← width →                 │                  │
│    └─────────────────────────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["获取指定元素的宽高信息，元素为 null 时返回 ",e.jsx(n.code,{children:"{ width: 0, height: 0 }"}),"。"]}),`
`,e.jsx(s,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"element"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"目标 DOM 元素，可以为 null"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"{ width: number; height: number }"})}),e.jsx("td",{children:"元素尺寸信息"})]})]})]}),`
`,e.jsx(n.h2,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"响应式布局"}),e.jsx("td",{children:"获取容器尺寸进行布局计算"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"动画计算"}),e.jsx("td",{children:"基于元素尺寸计算动画参数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Canvas 适配"}),e.jsx("td",{children:"根据容器尺寸设置 Canvas 大小"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"碰撞检测"}),e.jsx("td",{children:"获取元素尺寸进行碰撞判断"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"虚拟列表"}),e.jsx("td",{children:"计算可视区域可容纳的项数"})]})]})]}),`
`,e.jsx(n.h2,{id:"典型示例",children:"典型示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import getElementSize from '@justichentai/element-utils/getElementSize'

// 获取元素尺寸
const element = document.querySelector('.container')
const { width, height } = getElementSize(element)

// 根据尺寸调整 Canvas
const canvas = document.querySelector('canvas')
if (canvas && element) {
  const { width, height } = getElementSize(element)
  canvas.width = width
  canvas.height = height
}

// 安全处理可能为 null 的元素
const maybeNull = document.querySelector('.maybe-not-exist')
const size = getElementSize(maybeNull)
// size 始终有值: { width: 0, height: 0 } 或实际尺寸
`})}),`
`,e.jsx(n.h2,{id:"与-resizeobserver-配合使用",children:"与 ResizeObserver 配合使用"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import getElementSize from '@justichentai/element-utils/getElementSize'
import { onElementResize } from '@justichentai/element-utils/observer'

const element = document.querySelector('.resizable')

// 获取初始尺寸
let currentSize = getElementSize(element)
console.log('初始尺寸:', currentSize)

// 监听尺寸变化
onElementResize(element, ({ width, height }) => {
  currentSize = { width, height }
  console.log('尺寸变化:', currentSize)
})
`})}),`
`,e.jsx(n.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const getElementSize = (
  element: Element | null
): { width: number; height: number } => {
  if (!element) return { width: 0, height: 0 }

  const rect = element.getBoundingClientRect()
  return {
    width: rect.width,
    height: rect.height,
  }
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"getBoundingClientRect"})," 获取元素的边界矩形"]}),`
`,e.jsx(n.li,{children:"返回值包含元素的实际渲染尺寸（包括边框和内边距）"}),`
`,e.jsxs(n.li,{children:["当元素为 null 时安全返回 ",e.jsx(n.code,{children:"{ width: 0, height: 0 }"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"注意事项",children:"注意事项"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"注意点"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"触发回流"}),e.jsxs("td",{children:[e.jsx("code",{children:"getBoundingClientRect"})," 会触发浏览器回流，频繁调用可能影响性能"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"包含边框"}),e.jsx("td",{children:"返回的尺寸包含元素的 border 和 padding"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"小数精度"}),e.jsx("td",{children:"返回值可能是小数，如需整数请自行处理"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"隐藏元素"}),e.jsxs("td",{children:[e.jsx("code",{children:"display: none"})," 的元素返回 0"]})]})]})]})]})}function m(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
