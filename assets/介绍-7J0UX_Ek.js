import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import '../../.css/index.css'
import { useRef, useState } from 'react'
import useClickAway from '../../../packages/element-utils/src/useClickAway'
import { action } from 'storybook/actions'

const UseClickAwayDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useClickAway(
    () => {
      if (isOpen) {
        setIsOpen(false)
        action('点击外部')('下拉菜单已关闭')
      }
    },
    [dropdownRef, buttonRef]
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>点击外部关闭</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        点击按钮打开下拉菜单，点击外部区域关闭：
      </div>

      <div style={{ position: 'relative' }}>
        <div
          ref={buttonRef}
          className="button"
          onClick={() => {
            setIsOpen(!isOpen)
            action('点击按钮')(isOpen ? '关闭' : '打开')
          }}
        >
          {isOpen ? '点击关闭' : '点击打开'} 下拉菜单
        </div>

        {isOpen && (
          <div
            ref={dropdownRef}
            style={{
              marginTop: 8,
              padding: 16,
              background: 'white',
              border: '1px solid #d9d9d9',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <div style={{ marginBottom: 8 }}>菜单项 1</div>
            <div style={{ marginBottom: 8 }}>菜单项 2</div>
            <div>菜单项 3</div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 24, color: '#999', fontSize: 12 }}>
        提示：点击下拉菜单外部区域会触发关闭
      </div>
    </div>
  )
}

export default UseClickAwayDemo
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useclickaway",children:"useClickAway"}),`
`,e.jsx(n.p,{children:"监听目标元素外的点击事件。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"useClickAway 用于检测点击是否发生在目标元素外部，常用于实现点击外部关闭下拉菜单、弹窗等功能。支持监听多个目标元素和多种事件类型。"}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"下拉菜单点击外部关闭"}),`
`,e.jsx(n.li,{children:"弹窗点击外部关闭"}),`
`,e.jsx(n.li,{children:"侧边栏点击外部收起"}),`
`,e.jsx(n.li,{children:"右键菜单点击外部关闭"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(r,{language:"tsx",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"onClickAway"}),e.jsx("td",{children:e.jsx("code",{children:"(event: T) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"点击外部时的回调"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"BasicTarget | BasicTarget[]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"目标元素（支持数组）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"eventName"}),e.jsx("td",{children:e.jsx("code",{children:"DocumentEventKey | DocumentEventKey[]"})}),e.jsx("td",{children:e.jsx("code",{children:"'click'"})}),e.jsx("td",{children:"事件名称"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"监听 document 上的点击事件"}),`
`,e.jsx(n.li,{children:"检查点击目标是否在指定元素内部"}),`
`,e.jsx(n.li,{children:"如果点击在所有目标元素外部，则触发回调"}),`
`,e.jsx(n.li,{children:"支持多个目标元素和多种事件类型"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键实现细节",children:"关键实现细节"}),`
`,e.jsx(n.h4,{id:"子元素点击检测",children:"子元素点击检测"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"Element.contains()"})," 方法判断点击位置："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const isInsideTarget = targets.some((item) => {
  const targetElement = getTargetElement(item)
  return !targetElement || targetElement.contains(event.target as Node)
})
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contains()"})," 方法的特性："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["如果 ",e.jsx(n.code,{children:"event.target"})," 是目标元素",e.jsx(n.strong,{children:"本身"}),"，返回 ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:["如果 ",e.jsx(n.code,{children:"event.target"})," 是目标元素的",e.jsx(n.strong,{children:"任意子孙节点"}),"，也返回 ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:["只有点击目标元素",e.jsx(n.strong,{children:"外部"}),"时才返回 ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["这意味着点击目标元素或其任何子元素都",e.jsx(n.strong,{children:"不会触发"})," ",e.jsx(n.code,{children:"onClickAway"})," 回调。"]}),`
`,e.jsx(n.h4,{id:"多目标元素支持",children:"多目标元素支持"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"Array.isArray()"})," 统一处理单个和多个目标："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const targets = Array.isArray(target) ? target : [target]
`})}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"some()"})," 方法，只要点击在",e.jsx(n.strong,{children:"任意一个"}),"目标元素内部，就不触发回调。"]}),`
`,e.jsx(n.h4,{id:"多事件类型支持",children:"多事件类型支持"}),`
`,e.jsxs(n.p,{children:["支持监听多种事件（如 ",e.jsx(n.code,{children:"click"}),"、",e.jsx(n.code,{children:"mousedown"}),"、",e.jsx(n.code,{children:"touchstart"})," 等）："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const eventNames = Array.isArray(eventNameRef.current)
  ? eventNameRef.current
  : [eventNameRef.current]

const cleanups = eventNames.map((event) =>
  createEventListener(document, event, handler)
)
`})}),`
`,e.jsx(n.h4,{id:"使用-uselatest-保持引用稳定",children:"使用 useLatest 保持引用稳定"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const onClickAwayRef = useLatest(onClickAway)
const eventNameRef = useLatest(eventName)
`})}),`
`,e.jsx(n.p,{children:"确保回调函数始终是最新的，同时避免不必要的 effect 重新执行。"})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
