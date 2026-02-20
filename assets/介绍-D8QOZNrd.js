import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import onJank from '../../../packages/element-utils/src/JankMonitor'

export const createStartDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    // 如果已经在监听，先停止
    const prevStopFn = getStopFn()
    if (prevStopFn) {
      prevStopFn()
    }

    const statusEl = document.getElementById('status')

    // 开始监听卡顿
    const stopFn = onJank(
      (jank) => {
        action('检测到卡顿')({
          duration: \`\${jank.duration.toFixed(2)}ms\`,
          timestamp: new Date(jank.timestamp).toISOString(),
        })

        // 更新状态显示
        if (statusEl) {
          statusEl.textContent = \`检测到卡顿: \${jank.duration.toFixed(0)}ms\`
          statusEl.style.background =
            'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)'
          setTimeout(() => {
            statusEl.textContent = '监听中...'
            statusEl.style.background =
              'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
          }, 1000)
        }
      },
      { threshold: 100 }
    )

    setStopFn(stopFn)

    // 更新状态显示
    if (statusEl) {
      statusEl.textContent = '监听中...'
      statusEl.style.background =
        'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
    }

    action('开始监听')('阈值: 100ms')
  }
}
`,l=`import { action } from 'storybook/actions'

export const createStopDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()

    if (stopFn) {
      stopFn()
      clearStopFn()

      const statusEl = document.getElementById('status')
      if (statusEl) {
        statusEl.textContent = '已停止监听'
        statusEl.style.background =
          'linear-gradient(135deg, #8c8c8c 0%, #bfbfbf 100%)'
      }

      action('停止监听')('已清理 requestAnimationFrame')
    } else {
      action('停止监听')('当前未在监听状态')
    }
  }
}
`,c=`import { action } from 'storybook/actions'

/**
 * 模拟卡顿：通过同步阻塞主线程来触发卡顿检测
 */
const triggerJankDemo = () => {
  const statusEl = document.getElementById('status')

  if (statusEl) {
    statusEl.textContent = '正在模拟卡顿...'
    statusEl.style.background =
      'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)'
  }

  action('模拟卡顿')('开始阻塞主线程 200ms')

  // 使用 setTimeout 确保 UI 更新后再阻塞
  setTimeout(() => {
    // 同步阻塞主线程 200ms
    const start = performance.now()
    while (performance.now() - start < 200) {
      // 空循环阻塞
    }

    action('模拟卡顿')('阻塞结束，如果正在监听会触发卡顿回调')
  }, 16)
}

export default triggerJankDemo
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onjank",children:"onJank"}),`
`,n.jsx(e.p,{children:"检测页面卡顿的工具函数，当帧间隔超过阈值时触发回调。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onJank"})," 是一个基于 ",n.jsx(e.code,{children:"requestAnimationFrame"})," 的卡顿检测工具。它通过持续监测帧间隔时间来判断页面是否发生卡顿。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心知识点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"requestAnimationFrame"}),"：浏览器在下次重绘之前调用的回调函数，通常每秒 60 次（约 16.67ms 一帧）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"卡顿定义"}),"：当两帧之间的间隔超过设定阈值（默认 100ms）时，认为发生了卡顿"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"performance.now()"}),"：返回高精度时间戳，用于精确测量时间间隔"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"使用场景："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：实时监测页面卡顿情况"}),`
`,n.jsx(e.li,{children:"问题定位：帮助开发者发现性能瓶颈"}),`
`,n.jsx(e.li,{children:"用户体验优化：根据卡顿数据调整页面复杂度"}),`
`]}),`
`,n.jsx(e.h2,{id:"开始监听卡顿",children:"开始监听卡顿"}),`
`,n.jsxs(e.p,{children:["调用 ",n.jsx(e.code,{children:"onJank"})," 传入回调函数，当检测到卡顿时会触发回调，返回停止监听的函数。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"停止监听",children:"停止监听"}),`
`,n.jsxs(e.p,{children:["调用返回的停止函数可以清理 ",n.jsx(e.code,{children:"requestAnimationFrame"}),"，停止卡顿检测。"]}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"模拟卡顿",children:"模拟卡顿"}),`
`,n.jsx(e.p,{children:"通过同步阻塞主线程来模拟卡顿，用于测试卡顿检测功能。"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"入参",children:"入参"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"JankCallback"})}),n.jsx("td",{children:"卡顿回调函数，接收 JankInfo 对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"OnJankOptions"})}),n.jsx("td",{children:"可选配置项"})]})]})]}),`
`,n.jsx(e.h3,{id:"onjankoptions",children:"OnJankOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"threshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"100"}),n.jsx("td",{children:"卡顿阈值（毫秒），帧间隔超过此值触发回调"})]})})]}),`
`,n.jsx(e.h3,{id:"jankinfo回调参数",children:"JankInfo（回调参数）"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"duration"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"卡顿持续时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"timestamp"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"卡顿发生时的时间戳"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"StopListening"})}),n.jsx("td",{children:"停止监听函数，调用后会取消 requestAnimationFrame"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：主入口，导出 ",n.jsx(e.code,{children:"onJank"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义，包含 JankInfo、JankCallback、OnJankOptions 等"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化时记录当前时间戳 ",n.jsx(e.code,{children:"lastFrameTime"})]}),`
`,n.jsxs(e.li,{children:["启动 ",n.jsx(e.code,{children:"requestAnimationFrame"})," 循环"]}),`
`,n.jsxs(e.li,{children:["每一帧计算与上一帧的时间差 ",n.jsx(e.code,{children:"frameDuration"})]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"frameDuration"})," 超过阈值，触发回调并传递卡顿信息"]}),`
`,n.jsxs(e.li,{children:["更新 ",n.jsx(e.code,{children:"lastFrameTime"})," 为当前时间"]}),`
`,n.jsxs(e.li,{children:["返回停止函数，调用时取消 ",n.jsx(e.code,{children:"requestAnimationFrame"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"performance.now()"})," 获取高精度时间戳"]}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"requestAnimationFrame"})," 实现持续监测"]}),`
`,n.jsx(e.li,{children:"闭包保存状态（lastFrameTime、rafId）"}),`
`,n.jsx(e.li,{children:"返回清理函数实现资源释放"}),`
`]})]})}function u(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{u as default};
