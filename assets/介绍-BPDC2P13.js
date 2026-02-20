import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import '../../.css/index.css'
import { useState } from 'react'
import useKeyPress from '../../../packages/element-utils/src/useKeyPress'
import { action } from 'storybook/actions'

const UseKeyPressDemo = () => {
  const [counter, setCounter] = useState(0)
  const [lastKey, setLastKey] = useState('')

  // 监听方向键
  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1)
    setLastKey('↑ ArrowUp')
    action('ArrowUp')('计数 +1')
  })

  useKeyPress('downarrow', () => {
    setCounter((s) => s - 1)
    setLastKey('↓ ArrowDown')
    action('ArrowDown')('计数 -1')
  })

  // 监听 Enter 键
  useKeyPress('enter', () => {
    setLastKey('↵ Enter')
    action('Enter')('Enter 键被按下')
  })

  // 监听组合键 Ctrl+S
  useKeyPress(
    'ctrl.s',
    (event) => {
      event.preventDefault()
      setLastKey('Ctrl + S')
      action('Ctrl+S')('组合键被按下')
    },
    { exactMatch: true }
  )

  // 监听多个按键
  useKeyPress(['a', 'b', 'c'], (_event, key) => {
    setLastKey(String(key).toUpperCase())
    action('A/B/C')(key)
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>键盘按键监听</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          计数器：<span style={{ color: '#1890ff', fontSize: 24 }}>{counter}</span>
        </div>
        <div>
          最后按下的键：
          <span style={{ color: '#52c41a', fontWeight: 'bold' }}>
            {lastKey || '无'}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: 16, color: '#666' }}>
        <div style={{ marginBottom: 8, fontWeight: 'bold' }}>尝试以下操作：</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>按 <code>↑</code> 方向键：计数 +1</li>
          <li>按 <code>↓</code> 方向键：计数 -1</li>
          <li>按 <code>Enter</code> 键</li>
          <li>按 <code>Ctrl + S</code> 组合键</li>
          <li>按 <code>A</code>、<code>B</code>、<code>C</code> 键</li>
        </ul>
      </div>

      <div
        className="button"
        onClick={() => {
          setCounter(0)
          setLastKey('')
          action('重置')('计数器已重置')
        }}
      >
        重置计数器
      </div>
    </div>
  )
}

export default UseKeyPressDemo
`;function d(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"usekeypress",children:"useKeyPress"}),`
`,e.jsx(s.p,{children:"监听键盘按键的 Hook。"}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(s.p,{children:"useKeyPress 提供了强大的键盘事件监听功能，支持单个按键、多个按键、组合键的监听，并支持自定义事件类型和精确匹配模式。"}),`
`,e.jsx(s.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"快捷键功能"}),`
`,e.jsx(s.li,{children:"游戏控制"}),`
`,e.jsx(s.li,{children:"表单提交（Enter 键）"}),`
`,e.jsx(s.li,{children:"模态框关闭（Esc 键）"}),`
`,e.jsx(s.li,{children:"导航控制（方向键）"}),`
`]}),`
`,e.jsx(s.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(c,{language:"tsx",children:i}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"keyFilter"}),e.jsx("td",{children:e.jsx("code",{children:"KeyFilter"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"按键过滤器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"eventHandler"}),e.jsx("td",{children:e.jsx("code",{children:"(event: KeyboardEvent, key: KeyType) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"事件处理函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.events"}),e.jsx("td",{children:e.jsx("code",{children:"KeyEvent[]"})}),e.jsx("td",{children:e.jsx("code",{children:"['keydown']"})}),e.jsx("td",{children:"触发事件类型"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.target"}),e.jsx("td",{children:e.jsx("code",{children:"Target"})}),e.jsx("td",{children:e.jsx("code",{children:"window"})}),e.jsx("td",{children:"目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.exactMatch"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"精确匹配"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.useCapture"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"使用捕获阶段"})]})]})]}),`
`,e.jsx(s.h3,{id:"keyfilter-类型",children:"KeyFilter 类型"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`type KeyFilter = 
  | KeyType                           // 单个按键
  | KeyType[]                         // 多个按键
  | ((event: KeyboardEvent) => boolean)  // 自定义过滤函数

type KeyType = string | number
`})}),`
`,e.jsx(s.h3,{id:"支持的按键别名",children:"支持的按键别名"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["数字键：",e.jsx(s.code,{children:"0-9"})]}),`
`,e.jsxs(s.li,{children:["字母键：",e.jsx(s.code,{children:"a-z"})]}),`
`,e.jsxs(s.li,{children:["功能键：",e.jsx(s.code,{children:"f1-f12"})]}),`
`,e.jsxs(s.li,{children:["控制键：",e.jsx(s.code,{children:"enter"}),"、",e.jsx(s.code,{children:"esc"}),"、",e.jsx(s.code,{children:"tab"}),"、",e.jsx(s.code,{children:"space"}),"、",e.jsx(s.code,{children:"backspace"}),"、",e.jsx(s.code,{children:"delete"})]}),`
`,e.jsxs(s.li,{children:["方向键：",e.jsx(s.code,{children:"uparrow"}),"、",e.jsx(s.code,{children:"downarrow"}),"、",e.jsx(s.code,{children:"leftarrow"}),"、",e.jsx(s.code,{children:"rightarrow"})]}),`
`,e.jsxs(s.li,{children:["修饰键：",e.jsx(s.code,{children:"ctrl"}),"、",e.jsx(s.code,{children:"shift"}),"、",e.jsx(s.code,{children:"alt"}),"、",e.jsx(s.code,{children:"meta"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"组合键",children:"组合键"}),`
`,e.jsxs(s.p,{children:["使用 ",e.jsx(s.code,{children:"."})," 连接多个按键，例如："]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ctrl.s"})," - Ctrl + S"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ctrl.shift.a"})," - Ctrl + Shift + A"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"meta.k"})," - Cmd/Win + K"]}),`
`]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"index.ts"}),"：React Hook 主体，负责响应式事件绑定与生命周期管理"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"interface.ts"}),"：自身类型定义（",e.jsx(s.code,{children:"KeyEvent"}),"、",e.jsx(s.code,{children:"Target"}),"、",e.jsx(s.code,{children:"UseKeyPressOptions"}),"），同时 re-export ",e.jsx(s.code,{children:"onKeyPress/interface"})," 中的共享类型（",e.jsx(s.code,{children:"KeyType"}),"、",e.jsx(s.code,{children:"KeyFilter"}),"、",e.jsx(s.code,{children:"KeyPredicate"}),"）"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["与 ",e.jsx(s.code,{children:"onKeyPress"})," 的关系"]}),`：
`,e.jsx(s.code,{children:"useKeyPress"})," 是一层薄 Hook 封装，键盘匹配相关的核心逻辑（别名映射、修饰键检测、组合键解析）全部从 ",e.jsx(s.code,{children:"onKeyPress"})," 模块导入，自身只处理 React 生命周期。"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"useLatest"})," 存储最新引用"]}),"：",e.jsx(s.code,{children:"eventHandler"}),"、",e.jsx(s.code,{children:"keyFilter"}),"、",e.jsx(s.code,{children:"events"})," 都通过 ",e.jsx(s.code,{children:"useLatest"})," 存入 ref。因为这些参数可能在每次渲染时都是新的引用（如内联函数），如果直接放入 ",e.jsx(s.code,{children:"useEffect"})," 依赖项会导致监听器反复解绑重绑，用 ref 可以始终读取到最新值而不触发 effect 重新执行"]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"getTargetElement"})," 解析目标元素"]}),"：支持 ",e.jsx(s.code,{children:"RefObject"}),"、DOM 元素、函数等多种 ",e.jsx(s.code,{children:"target"})," 传入方式，统一解析为实际的 DOM 节点，默认为 ",e.jsx(s.code,{children:"window"})]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"callbackHandler"})," 事件处理"]}),"：",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["调用 ",e.jsx(s.code,{children:"genKeyFormatter"}),"（来自 ",e.jsx(s.code,{children:"onKeyPress"}),"）将 ",e.jsx(s.code,{children:"keyFilter"})," 标准化为判断函数——因为 ",e.jsx(s.code,{children:"keyFilter"})," 支持函数、单键、数组等多种格式，需要统一为 ",e.jsx(s.code,{children:"(event) => KeyType | boolean"})," 的判断接口"]}),`
`,e.jsxs(s.li,{children:["执行判断函数得到 ",e.jsx(s.code,{children:"keyGuard"}),"，它可能是匹配到的按键标识或 ",e.jsx(s.code,{children:"false"})]}),`
`,e.jsxs(s.li,{children:["通过 ",e.jsx(s.code,{children:"isValidKeyType"}),"（来自 ",e.jsx(s.code,{children:"onKeyPress"}),"）判断 ",e.jsx(s.code,{children:"keyGuard"})," 是否为有效按键类型——如果是（如 ",e.jsx(s.code,{children:"'ctrl.s'"}),"）则作为 ",e.jsx(s.code,{children:"firedKey"})," 传给用户回调，否则回退到 ",e.jsx(s.code,{children:"event.key"}),"，确保用户回调始终能拿到有意义的按键信息"]}),`
`,e.jsx(s.li,{children:"匹配成功时调用用户回调"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["遍历 ",e.jsx(s.code,{children:"events"})," 数组注册监听"]}),"：支持同时监听 ",e.jsx(s.code,{children:"keydown"})," 和 ",e.jsx(s.code,{children:"keyup"}),"（如需要在按下和松开时分别响应），为每个事件类型都注册同一个 ",e.jsx(s.code,{children:"callbackHandler"})]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"useEffect"})," 返回清理函数"]}),"：组件卸载或依赖项变化时移除所有事件监听，防止内存泄漏。依赖项中不包含 ",e.jsx(s.code,{children:"ref"})," 引用的值（",e.jsx(s.code,{children:"eventHandler"}),"、",e.jsx(s.code,{children:"keyFilter"}),"），只包含真正影响监听器绑定方式的参数（",e.jsx(s.code,{children:"target"}),"、",e.jsx(s.code,{children:"exactMatch"}),"、",e.jsx(s.code,{children:"useCapture"}),"）"]}),`
`]})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{a as default};
