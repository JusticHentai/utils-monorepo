import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import supportRequestAnimationFrame from '../../../packages/element-utils/src/supportRequestAnimationFrame'

const basicDemo = () => {
  const result = supportRequestAnimationFrame()

  action('supportRequestAnimationFrame 检测结果')({
    supported: result,
    message: result
      ? 'requestAnimationFrame 可用，可以实现流畅动画'
      : 'requestAnimationFrame 不可用，需要使用 setTimeout 降级',
  })

  // 如果支持，演示使用
  if (result) {
    let frameCount = 0
    const maxFrames = 5

    const animate = () => {
      frameCount++
      action('动画帧')({
        frame: frameCount,
        timestamp: performance.now().toFixed(2) + 'ms',
      })

      if (frameCount < maxFrames) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }
}

export default basicDemo
`;function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"supportrequestanimationframe",children:"supportRequestAnimationFrame"}),`
`,n.jsx(e.p,{children:"检测浏览器是否支持 requestAnimationFrame API。requestAnimationFrame 用于创建流畅的动画效果。"}),`
`,n.jsx(e.h2,{id:"什么是-requestanimationframe",children:"什么是 requestAnimationFrame？"}),`
`,n.jsx(e.p,{children:"requestAnimationFrame 是一个浏览器原生 API，用于在下一次重绘之前执行动画回调："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    动画帧时间线 (60fps)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  帧1        帧2        帧3        帧4        帧5            │
│   │          │          │          │          │            │
│   ▼          ▼          ▼          ▼          ▼            │
│  ─●──────────●──────────●──────────●──────────●─────→ 时间  │
│   │          │          │          │          │            │
│ 16.67ms   16.67ms    16.67ms    16.67ms    16.67ms         │
│   │          │          │          │          │            │
│ 回调执行   回调执行   回调执行   回调执行   回调执行          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"基础检测",children:"基础检测"}),`
`,n.jsx(e.p,{children:"检测当前浏览器是否支持 requestAnimationFrame API，并演示动画帧执行。"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否支持 requestAnimationFrame API"})]})})]}),`
`,n.jsx(e.h2,{id:"与-settimeout-对比",children:"与 setTimeout 对比"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特性"}),n.jsx("th",{children:"setTimeout"}),n.jsx("th",{children:"requestAnimationFrame"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"执行时机"}),n.jsx("td",{children:"固定时间间隔"}),n.jsx("td",{children:"与显示器刷新率同步"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"后台标签页"}),n.jsx("td",{children:"继续执行"}),n.jsx("td",{children:"自动暂停，节省资源"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"帧率"}),n.jsx("td",{children:"不稳定，可能跳帧"}),n.jsx("td",{children:"稳定 60fps"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"精确度"}),n.jsx("td",{children:"受任务队列影响"}),n.jsx("td",{children:"高精度时间戳"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"电池消耗"}),n.jsx("td",{children:"持续消耗"}),n.jsx("td",{children:"更省电"})]})]})]}),`
`,n.jsx(e.h2,{id:"主要使用场景",children:"主要使用场景"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"场景"}),n.jsx("th",{children:"说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"CSS 动画替代"}),n.jsx("td",{children:"需要 JS 控制的复杂动画"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Canvas 动画"}),n.jsx("td",{children:"游戏、数据可视化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"滚动效果"}),n.jsx("td",{children:"平滑滚动、视差效果"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"DOM 动画"}),n.jsx("td",{children:"元素位置、尺寸动画"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"性能监控"}),n.jsx("td",{children:"FPS 计算、性能统计"})]})]})]}),`
`,n.jsx(e.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 基础动画循环
function animate(timestamp) {
  // timestamp 是高精度时间戳
  updateAnimation(timestamp)
  renderFrame()
  
  // 继续下一帧
  requestAnimationFrame(animate)
}

// 开始动画
const animationId = requestAnimationFrame(animate)

// 停止动画
cancelAnimationFrame(animationId)
`})}),`
`,n.jsx(e.h2,{id:"基于时间的动画示例",children:"基于时间的动画示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import supportRequestAnimationFrame from '@justichentai/element-utils/supportRequestAnimationFrame'

if (supportRequestAnimationFrame()) {
  const element = document.querySelector('.box')
  const duration = 1000 // 动画持续 1 秒
  let startTime = null

  function animate(timestamp) {
    if (!startTime) startTime = timestamp
    
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // 应用缓动函数
    const easeProgress = easeOutCubic(progress)
    
    // 更新位置 (0 -> 300px)
    element.style.transform = \`translateX(\${easeProgress * 300}px)\`
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

// 缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}
`})}),`
`,n.jsx(e.h2,{id:"fps-计算示例",children:"FPS 计算示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`let frameCount = 0
let lastTime = performance.now()
let fps = 0

function calculateFPS(timestamp) {
  frameCount++
  
  if (timestamp - lastTime >= 1000) {
    fps = frameCount
    frameCount = 0
    lastTime = timestamp
    console.log(\`FPS: \${fps}\`)
  }
  
  requestAnimationFrame(calculateFPS)
}

requestAnimationFrame(calculateFPS)
`})}),`
`,n.jsx(e.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"浏览器"}),n.jsx("th",{children:"支持版本"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Chrome"}),n.jsx("td",{children:"10+"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Firefox"}),n.jsx("td",{children:"4+"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Safari"}),n.jsx("td",{children:"6+"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Edge"}),n.jsx("td",{children:"12+"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"IE"}),n.jsx("td",{children:"10+"})]})]})]}),`
`,n.jsx(e.h2,{id:"检测原理",children:"检测原理"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportRequestAnimationFrame = (): boolean => {
  return isBrowser() && 'requestAnimationFrame' in window
}
`})}),`
`,n.jsxs(e.p,{children:["通过检测 ",n.jsx(e.code,{children:"window.requestAnimationFrame"})," 是否存在来判断浏览器支持情况。"]}),`
`,n.jsx(e.h2,{id:"性能优化技巧",children:"性能优化技巧"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"技巧"}),n.jsx("th",{children:"说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"避免在回调中创建对象"}),n.jsx("td",{children:"减少 GC 压力"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"使用 transform 而非 left/top"}),n.jsx("td",{children:"触发 GPU 加速"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"合并多个动画到一个回调"}),n.jsx("td",{children:"减少回调次数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"页面不可见时停止动画"}),n.jsx("td",{children:"使用 visibilitychange 事件"})]})]})]})]})}function x(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
