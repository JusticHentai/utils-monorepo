import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import getFps from '../../../packages/element-utils/src/FpsMonitor'

export const runBasicDemo = async () => {
  action('正在检测帧率')('请等待约 1 秒...')
  const fps = await getFps()
  action('帧率检测结果')(\`当前帧率: \${fps} FPS\`)
}
`,o=`import { action } from 'storybook/actions'
import { createFpsMonitor } from '../../../packages/element-utils/src/FpsMonitor'

let stopFn: (() => void) | null = null

export const startMonitor = () => {
  if (stopFn) {
    action('监控已在运行')('请先停止当前监控')
    return
  }

  action('开始监控')('每秒更新一次 FPS')

  stopFn = createFpsMonitor((fps) => {
    action('FPS 更新')(\`当前帧率: \${fps} FPS\`)
  })
}

export const stopMonitor = () => {
  if (!stopFn) {
    action('未在监控')('请先开始监控')
    return
  }

  stopFn()
  stopFn = null
  action('停止监控')('已停止 FPS 监控')
}
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"getfps",children:"getFps"}),`
`,n.jsx(s.p,{children:"获取当前浏览器帧率（FPS）的工具，支持单次测量和持续监控。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:["getFps 是一个性能检测工具，核心作用是：",n.jsx(s.strong,{children:"测量浏览器的实际渲染帧率"}),"。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"requestAnimationFrame"}),"：浏览器渲染循环"]}),`
`,n.jsxs(s.li,{children:["高精度时间戳：",n.jsx(s.code,{children:"performance.now()"})]}),`
`,n.jsx(s.li,{children:"帧率计算：帧数 / 时间"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"FPS 的意义"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"60 FPS：流畅动画的标准（每帧约 16.67ms）"}),`
`,n.jsx(s.li,{children:"30 FPS：可接受的最低帧率"}),`
`,n.jsx(s.li,{children:"< 30 FPS：明显卡顿"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"性能监控：实时显示页面帧率"}),`
`,n.jsx(s.li,{children:"自适应降级：低帧率时简化动画"}),`
`,n.jsx(s.li,{children:"调试工具：定位性能瓶颈"}),`
`,n.jsx(s.li,{children:"游戏开发：监控渲染性能"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"优势"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 RAF 测量，结果准确"}),`
`,n.jsx(s.li,{children:"支持单次测量和持续监控两种模式"}),`
`,n.jsx(s.li,{children:"返回清理函数，便于停止监控"}),`
`]}),`
`,n.jsx(s.h2,{id:"单次测量示例",children:"单次测量示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"持续监控示例",children:"持续监控示例"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"api",children:"API"}),`
`,n.jsx(s.h3,{id:"getfps-1",children:"getFps()"}),`
`,n.jsxs(s.p,{children:["单次测量 FPS，返回 ",n.jsx(s.code,{children:"Promise<number>"})]}),`
`,n.jsx(s.h3,{id:"createfpsmonitoronupdate",children:"createFpsMonitor(onUpdate)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"onUpdate"}),n.jsx("td",{children:n.jsx("code",{children:"(fps: number) => void"})}),n.jsx("td",{children:"FPS 更新时的回调函数"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"() => void"})]}),`
`,n.jsx(s.li,{children:"描述：返回停止监控的函数"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(s.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index.ts"})," - 唯一源文件，包含 getFps 和 createFpsMonitor 函数"]}),`
`]}),`
`,n.jsx(s.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:["记录起始时间 ",n.jsx(s.code,{children:"startTime"})]}),`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"requestAnimationFrame"})," 循环，计数帧数"]}),`
`,n.jsxs(s.li,{children:["达到 1 秒后计算：",n.jsx(s.code,{children:"帧数 * 1000 / (当前时间 - 起始时间)"})]}),`
`,n.jsx(s.li,{children:"返回计算得到的 FPS 值"}),`
`]}),`
`,n.jsx(s.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"performance.now()"})," 获取高精度时间戳"]}),`
`,n.jsxs(s.li,{children:["公式：",n.jsx(s.code,{children:"fps = frames * 1000 / elapsedMs"})]}),`
`,n.jsx(s.li,{children:"持续监控模式：每秒计算一次并调用回调"}),`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"cancelAnimationFrame"})," 停止监控"]}),`
`]})]})}function a(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{a as default};
