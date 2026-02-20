import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useState } from 'react'
import { action } from 'storybook/actions'
import useCountDown from '../../../packages/element-utils/src/useCountDown'

const UseCountDownDemo = () => {
  const [initialSeconds] = useState(10)

  const {
    remainingSeconds,
    countDownStatus,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
    endCountdown,
  } = useCountDown({ initialSeconds })

  const statusText = ['空闲', '运行中', '已暂停'][countDownStatus]

  const handleStart = () => {
    startCountdown()
    action('开始倒计时')('状态: 运行中')
  }

  const handlePause = () => {
    pauseCountdown()
    action('暂停倒计时')('状态: 已暂停')
  }

  const handleResume = () => {
    resumeCountdown()
    action('恢复倒计时')('状态: 运行中')
  }

  const handleRestart = () => {
    restartCountdown()
    action('重新开始')(\`重置为 \${initialSeconds} 秒\`)
  }

  const handleEnd = () => {
    endCountdown()
    action('结束倒计时')('状态: 空闲')
  }

  return (
    <div>
      <div className="button" onClick={handleStart}>
        开始倒计时
      </div>
      <div className="button" onClick={handlePause}>
        暂停
      </div>
      <div className="button" onClick={handleResume}>
        恢复
      </div>
      <div className="button" onClick={handleRestart}>
        重新开始
      </div>
      <div className="button" onClick={handleEnd}>
        结束
      </div>

      {/* 演示区域 - 放在按钮下方 */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <div
          style={{
            width: 200,
            height: 120,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 'bold' }}>
            {remainingSeconds}
          </div>
          <div style={{ fontSize: 14, marginTop: 8 }}>秒</div>
          <div
            style={{
              fontSize: 12,
              marginTop: 8,
              padding: '2px 8px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 4,
            }}
          >
            {statusText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCountDownDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usecountdown",children:"useCountDown"}),`
`,n.jsx(e.p,{children:"倒计时 Hook，支持开始、暂停、恢复、重启等操作。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useCountDown"})," 是一个功能完整的倒计时 Hook，提供精确的秒级倒计时功能。"]}),`
`,n.jsx(e.h3,{id:"核心特性",children:"核心特性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态管理"}),": 支持空闲、运行中、暂停三种状态"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"精确计时"}),": 基于时间差计算，避免定时器累积误差"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"完整控制"}),": 提供开始、暂停、恢复、重启、结束等操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"自动清理"}),": 组件卸载时自动清除定时器"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"验证码倒计时"}),`
`,n.jsx(e.li,{children:"活动倒计时"}),`
`,n.jsx(e.li,{children:"考试/答题限时"}),`
`,n.jsx(e.li,{children:"游戏倒计时"}),`
`,n.jsx(e.li,{children:"任意需要倒计时的场景"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(t,{language:"tsx",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"入参-usecountdownoptions",children:"入参 UseCountDownOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"initialSeconds"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"初始倒计时秒数"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"返回值"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"remainingSeconds"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"剩余秒数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"countDownStatus"}),n.jsx("td",{children:n.jsx("code",{children:"COUNT_DOWN_STATUS"})}),n.jsx("td",{children:"当前计时状态（IDLE=0, RUNNING=1, PAUSED=2）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"startCountdown"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"启动倒计时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"pauseCountdown"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"暂停倒计时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"resumeCountdown"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"恢复倒计时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"restartCountdown"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"重新开始倒计时（重置为初始值）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"endCountdown"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"结束倒计时"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件职责",children:"文件职责"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Hook 主逻辑，管理倒计时状态和定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),": 类型定义，包含 ",n.jsx(e.code,{children:"COUNT_DOWN_STATUS"})," 枚举和 ",n.jsx(e.code,{children:"UseCountDownOptions"})," 接口"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"初始化"}),": 设置初始秒数，状态为 IDLE"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"启动"}),": 记录启动时间，启动 setInterval 定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"计时"}),": 每秒计算时间差，更新剩余时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"暂停/恢复"}),": 清除/重启定时器，保留剩余毫秒数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"结束"}),": 清除定时器，重置状态为 IDLE"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsx(e.h4,{id:"1-使用-ref-避免闭包问题",children:"1. 使用 ref 避免闭包问题"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const statusRef = useRef<COUNT_DOWN_STATUS>(COUNT_DOWN_STATUS.IDLE)
const remainingMsRef = useRef<number>(initialSeconds * 1000)
`})}),`
`,n.jsx(e.p,{children:"状态和剩余时间使用 ref 存储，确保在定时器回调中能获取到最新值。"}),`
`,n.jsx(e.h4,{id:"2-基于时间差的精确计时",children:"2. 基于时间差的精确计时"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const now = Date.now()
const elapsed = now - lastTickTimeRef.current
lastTickTimeRef.current = now

remainingMsRef.current = Math.max(0, remainingMsRef.current - elapsed)
`})}),`
`,n.jsx(e.p,{children:"不依赖定时器的固定间隔，而是计算实际经过的时间，避免定时器累积误差。"}),`
`,n.jsx(e.h4,{id:"3-毫秒级存储秒级显示",children:"3. 毫秒级存储，秒级显示"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`remainingMsRef.current = initialSeconds * 1000  // 内部用毫秒
const newSeconds = Math.ceil(remainingMsRef.current / 1000)  // 显示用秒
`})}),`
`,n.jsx(e.p,{children:"内部使用毫秒存储剩余时间，支持暂停后精确恢复；对外显示使用秒，符合用户预期。"}),`
`,n.jsx(e.h4,{id:"4-状态机控制",children:"4. 状态机控制"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// 启动时检查状态
if (statusRef.current === COUNT_DOWN_STATUS.RUNNING) return
if (statusRef.current === COUNT_DOWN_STATUS.IDLE) {
  // 重置剩余时间
}
// PAUSED 状态直接启动
`})}),`
`,n.jsx(e.p,{children:"通过状态机控制各操作的执行条件，避免重复启动或无效操作。"})]})}function j(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
