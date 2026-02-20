import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useState } from 'react'
import useDoubleClick from '../../../packages/element-utils/src/useDoubleClick'
import { action } from 'storybook/actions'

const UseDoubleClickDemo = () => {
  const [comboCount, setComboCount] = useState(0)
  const [finalCount, setFinalCount] = useState(0)

  const { handleClick, handleTouch } = useDoubleClick({
    onCombo: (count) => {
      setComboCount(count)
      action('连击')(count + ' 连击')
    },
    onComboEnd: (count) => {
      setFinalCount(count)
      action('连击结束')('最终连击次数: ' + count)
      setTimeout(() => setComboCount(0), 100)
    },
    delay: 300,
  })

  return (
    <div>
      <div
        className="button"
        onClick={handleClick}
        onTouchEnd={handleTouch}
      >
        点击测试（连击计数）
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>当前连击次数: <strong>{comboCount}</strong></p>
        {finalCount > 0 && <p>上次最终次数: <strong>{finalCount}</strong></p>}
        <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>
          每次点击触发 onCombo | 连击结束触发 onComboEnd
        </p>
      </div>
    </div>
  )
}

export default UseDoubleClickDemo
`,i=`import { action } from 'storybook/actions'
import useDoubleClick from '../../../packages/element-utils/src/useDoubleClick'

const useBasicDemo = () => {
  const { handleClick, handleTouch } = useDoubleClick({
    onCombo: (count) => {
      action('连击')(count + ' 连击')
    },
    onComboEnd: (count) => {
      action('连击结束')('最终连击次数: ' + count)
    },
    delay: 300,
  })

  return {
    handleClick,
    handleTouch,
  }
}

export default useBasicDemo
`;function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usedoubleclick",children:"useDoubleClick"}),`
`,n.jsxs(e.p,{children:["连续点击处理 Hook，基于 ",n.jsx(e.code,{children:"combo"})," 实现连击计数，支持鼠标点击和触摸事件。"]}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useDoubleClick"})," 用于处理元素上的连续点击事件："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"每次点击"}),"都会递增连击计数，并立即触发 ",n.jsx(e.code,{children:"onCombo(count, event)"})," 回调"]}),`
`,n.jsxs(e.li,{children:["当 ",n.jsx(e.code,{children:"delay"})," 时间内无新点击时，连击结束，触发 ",n.jsx(e.code,{children:"onComboEnd(count)"})," 回传最终连击次数"]}),`
`]}),`
`,n.jsxs(e.p,{children:["调用方可在 ",n.jsx(e.code,{children:"onComboEnd"})," 中根据 ",n.jsx(e.code,{children:"count"})," 自行判定单击、双击或多次连击。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"连击计数（如游戏连击效果）"}),`
`,n.jsx(e.li,{children:"根据连击次数执行不同逻辑"}),`
`,n.jsx(e.li,{children:"需要同时支持鼠标和触摸设备的点击交互"}),`
`]}),`
`,n.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,n.jsx(c,{language:"tsx",children:l}),`
`,n.jsx(e.h3,{id:"basicdemotsx",children:"basicDemo.tsx"}),`
`,n.jsx(c,{language:"tsx",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"options",children:"options"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"onCombo"}),n.jsx("td",{children:n.jsx("code",{children:"(count: number, event: ClickEvent<T>) => void"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"每次点击立即触发，参数为当前连击次数（从 1 开始递增）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"onComboEnd"}),n.jsx("td",{children:n.jsx("code",{children:"(count: number) => void"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"连击结束时触发（delay 内无新点击），参数为最终连击次数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"delay"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:n.jsx("code",{children:"300"})}),n.jsx("td",{children:"连击判定的时间窗口（毫秒），在此时间内无新点击则判定连击结束"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"handleClick"}),n.jsx("td",{children:n.jsx("code",{children:"(event: MouseEvent<T>) => void"})}),n.jsx("td",{children:"绑定到元素的 onClick 事件处理函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"handleTouch"}),n.jsx("td",{children:n.jsx("code",{children:"(event: TouchEvent<T>) => void"})}),n.jsx("td",{children:"绑定到元素的 onTouchEnd 事件处理函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件职责",children:"文件职责"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：实现 ",n.jsx(e.code,{children:"useDoubleClick"})," Hook，基于 ",n.jsx(e.code,{children:"combo"})," 工具封装连击计数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：定义 ",n.jsx(e.code,{children:"ClickEvent"}),"、",n.jsx(e.code,{children:"UseDoubleClickOptions"}),"、",n.jsx(e.code,{children:"UseDoubleClickReturn"})," 类型"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"useLatest"})," 保存最新的 options 引用，避免闭包陷阱"]}),`
`,n.jsxs(e.li,{children:["在 ",n.jsx(e.code,{children:"useEffect"})," 中调用 ",n.jsx(e.code,{children:"combo({ duration, onCombo, onClose })"})," 创建连击函数实例，保存到 ",n.jsx(e.code,{children:"comboFnRef"})]}),`
`,n.jsxs(e.li,{children:["每次点击调用 ",n.jsx(e.code,{children:"comboFnRef.current()"}),"，",n.jsx(e.code,{children:"combo"})," 内部递增计数器并立即触发 ",n.jsx(e.code,{children:"onCombo"}),"，同时重置定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"delay"})," 时间内无新点击时，",n.jsx(e.code,{children:"combo"})," 触发 ",n.jsx(e.code,{children:"onClose"}),"，在其中调用 ",n.jsx(e.code,{children:"onComboEnd"})," 回传最终次数"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["复用 ",n.jsx(e.code,{children:"combo"})," 工具"]}),"：核心连击逻辑（计数递增、定时器重置、超时回调）由 ",n.jsx(e.code,{children:"combo"})," 实现，",n.jsx(e.code,{children:"useDoubleClick"})," 只负责 React 层封装"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"useLatest"})}),"：保持 options 回调始终为最新引用，避免 ",n.jsx(e.code,{children:"useEffect"})," 闭包捕获过期值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"useCallback"})}),"：",n.jsx(e.code,{children:"processClick"}),"、",n.jsx(e.code,{children:"handleClick"}),"、",n.jsx(e.code,{children:"handleTouch"})," 均使用 ",n.jsx(e.code,{children:"useCallback"}),"，保证函数引用稳定"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"comboCountRef"})," 独立计数"]}),"：",n.jsx(e.code,{children:"combo"})," 内部的计数变量在 ",n.jsx(e.code,{children:"onClose"})," 前已归零，因此需要 ",n.jsx(e.code,{children:"comboCountRef"})," 在 ",n.jsx(e.code,{children:"onCombo"})," 中记录最新值，供 ",n.jsx(e.code,{children:"onClose"})," 判定使用"]}),`
`]}),`
`,n.jsx(e.h3,{id:"数据流向",children:"数据流向"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`点击事件 → handleClick / handleTouch → event.preventDefault()
                    ↓
              processClick(event) → lastEventRef = event
                    ↓
              comboFnRef.current()（调用 combo 实例）
                    ↓
              combo 内部: count++ → onCombo(count)
                    ↓                     ↓
              重置 setTimeout         comboCountRef = count
                                      options.onCombo(count, event)
                    ↓
              delay 内无新点击 → combo 内部: count=0 → onClose()
                    ↓
              options.onComboEnd(comboCountRef)
                    ↓
              重置 comboCountRef=0, lastEventRef=null
`})})]})}function m(o={}){const{wrapper:e}={...d(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{m as default};
