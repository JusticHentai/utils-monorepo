import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { useCallback, useState } from 'react'
import { action } from 'storybook/actions'
import useConditionalOnce from '../../../packages/element-utils/src/useConditionalOnce'
import '../../.css/index.css'

const UseConditionalOnceDemo = () => {
  const [count, setCount] = useState(0)
  const [threshold] = useState(3)

  // 当 count >= threshold 时，只执行一次
  const { executed, reset } = useConditionalOnce(
    count >= threshold,
    useCallback(() => {
      action('条件满足，执行回调')(\`count(\${count}) >= threshold(\${threshold})\`)
      return () => {
        action('清理函数执行')('组件卸载或重置时调用')
      }
    }, [count, threshold])
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>
        条件满足时只执行一次
      </div>
      <div style={{ marginBottom: 8 }}>
        当前计数：<span style={{ fontWeight: 'bold' }}>{count}</span>
      </div>
      <div style={{ marginBottom: 8 }}>
        触发阈值：<span style={{ fontWeight: 'bold' }}>{threshold}</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        执行状态：
        <span
          style={{
            color: executed ? '#52c41a' : '#ff4d4f',
            fontWeight: 'bold',
          }}
        >
          {executed ? '已执行' : '未执行'}
        </span>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('增加计数')(count + 1)
        }}
      >
        增加计数 (+1)
      </div>

      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置计数')(0)
        }}
      >
        重置计数为 0
      </div>

      <div
        className="button"
        onClick={() => {
          reset()
          action('调用 reset')('允许再次执行')
        }}
      >
        调用 reset（允许再次执行）
      </div>

      {/* 演示区域 */}
      <div className="area">
        <div
          style={{
            width: 280,
            padding: 20,
            background: executed
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : count >= threshold - 1
                ? 'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)'
                : 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
            borderRadius: 8,
            color: 'white',
            textAlign: 'center',
            transition: 'all 0.3s',
          }}
        >
          <div style={{ fontSize: 14, marginBottom: 8 }}>
            {executed
              ? '✅ 回调已执行'
              : count >= threshold - 1
                ? '⚠️ 即将触发'
                : '⏳ 等待条件满足'}
          </div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>
            {executed
              ? '调用 reset 后可再次触发'
              : \`还需增加 \${Math.max(0, threshold - count)} 次\`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseConditionalOnceDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useconditionalonce",children:"useConditionalOnce"}),`
`,e.jsx(n.p,{children:"当条件为 true 时只执行一次的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"useConditionalOnce 是一个条件执行 Hook，当指定条件首次满足时执行回调函数，之后即使条件持续满足也不会重复执行。支持返回清理函数和手动重置状态。"}),`
`,e.jsx(n.h3,{id:"核心特性",children:"核心特性"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"条件触发"}),"：只有当条件为 true 时才执行"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"执行一次"}),"：条件满足后只执行一次，不会重复触发"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"清理函数"}),"：支持返回清理函数，在组件卸载或重置时调用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"手动重置"}),"：提供 reset 方法，允许再次执行"]}),`
`]}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据加载完成时上报"}),"：当数据首次加载完成时发送埋点"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"用户首次登录引导"}),"：首次登录时显示欢迎弹窗"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"一次性初始化"}),"：某些条件满足时执行初始化逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"首次进入视口"}),"：元素首次可见时触发动画或加载"]}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(t,{language:"tsx",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"condition"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"触发条件，为 true 时执行回调"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"execute"}),e.jsx("td",{children:e.jsx("code",{children:"() => void | (() => void)"})}),e.jsx("td",{children:"要执行的函数，可返回清理函数"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"executed"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否已执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reset"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置执行状态，允许再次执行。会先调用清理函数"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：Hook 主逻辑，管理执行状态和清理函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：类型定义，包括 ExecuteFn 和返回值类型"]}),`
`]}),`
`,e.jsx(n.h3,{id:"文件职责-1",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：Hook 主逻辑，管理执行状态和清理函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：类型定义，包括 ExecuteFn 和 UseConditionalOnceReturn"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState"})," 管理执行状态 ",e.jsx(n.code,{children:"executed"}),"，使用 ",e.jsx(n.code,{children:"useRef"}),"（cleanupRef）存储清理函数"]}),`
`,e.jsxs(n.li,{children:["在 ",e.jsx(n.code,{children:"useEffect"})," 中判断：如果已执行过或条件不满足，直接返回"]}),`
`,e.jsxs(n.li,{children:["条件满足时，调用 ",e.jsx(n.code,{children:"setExecuted(true)"})," 标记已执行，执行回调并保存清理函数"]}),`
`,e.jsx(n.li,{children:"组件卸载时，如果有清理函数则调用"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset"})," 方法：先调用清理函数，再 ",e.jsx(n.code,{children:"setExecuted(false)"})," 重置执行状态"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useState 管理执行状态"}),"：使用 ",e.jsx(n.code,{children:"useState(false)"})," 管理 ",e.jsx(n.code,{children:"executed"})," 状态，状态变化会触发组件重渲染，让外部感知执行状态"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useRef 管理清理函数"}),"：使用 ",e.jsx(n.code,{children:"useRef"})," 存储清理函数引用，不触发重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useCallback 包装 reset"}),"：确保 reset 引用稳定，避免不必要的重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"依赖数组"}),"：effect 依赖 condition 和 execute，条件变化时重新评估"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`condition 变化 → useEffect 触发 → 检查 executed 状态
  ↓
条件满足且未执行 → setExecuted(true) → 执行 execute → 保存清理函数到 cleanupRef
  ↓
reset 调用 → 执行 cleanupRef.current() → setExecuted(false) → 允许再次执行
`})})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{a as default};
