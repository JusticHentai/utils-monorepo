import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import '../../.css/index.css'
import { useEffect, useState } from 'react'
import onKeyPress from '../../../packages/element-utils/src/onKeyPress'
import { action } from 'storybook/actions'

const OnKeyPressDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [lastKey, setLastKey] = useState('')

  useEffect(() => {
    if (!isListening) return

    // 监听 Escape 键
    const stopEscape = onKeyPress('Escape', (event) => {
      setLastKey('Escape')
      action('按下 Escape')(event.key)
    })

    // 监听上下箭头
    const stopArrows = onKeyPress(['ArrowUp', 'ArrowDown'], (event) => {
      setLastKey(event.key)
      action('按下箭头键')(event.key)
    })

    // 监听 Ctrl+S
    const stopCtrlS = onKeyPress(
      's',
      (event) => {
        event.preventDefault()
        setLastKey('Ctrl+S')
        action('按下 Ctrl+S')('保存操作')
      },
      { modifiers: { ctrl: true } }
    )

    action('开始监听')('Escape, 上下箭头, Ctrl+S')

    return () => {
      stopEscape()
      stopArrows()
      stopCtrlS()
    }
  }, [isListening])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听键盘
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>最后按键: {lastKey || '无'}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          监听: Escape, ↑↓箭头, Ctrl+S
        </p>
      </div>
    </div>
  )
}

export default OnKeyPressDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onkeypress",children:"onKeyPress"}),`
`,e.jsx(n.p,{children:"监听键盘按键事件的工具函数。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onKeyPress"})," 是一个用于监听特定键盘按键事件的工具函数，它封装了原生的 ",e.jsx(n.code,{children:"keydown"}),"、",e.jsx(n.code,{children:"keyup"}),"、",e.jsx(n.code,{children:"keypress"})," 事件监听逻辑，提供了更简洁的 API 和更强大的功能支持。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心特性"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"按键匹配"}),"：支持 ",e.jsx(n.code,{children:"event.key"}),"（如 ",e.jsx(n.code,{children:"'Escape'"}),"）或 ",e.jsx(n.code,{children:"event.code"}),"（如 ",e.jsx(n.code,{children:"'KeyS'"}),"）两种匹配方式"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"多键监听"}),"：支持同时监听多个按键，传入数组即可"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"修饰键组合"}),"：支持 Ctrl、Alt、Shift、Meta（Mac Command）修饰键组合"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"事件类型"}),"：支持 ",e.jsx(n.code,{children:"keydown"}),"、",e.jsx(n.code,{children:"keyup"}),"、",e.jsx(n.code,{children:"keypress"})," 三种事件类型"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"自定义目标"}),"：可指定监听的 DOM 元素，默认为 ",e.jsx(n.code,{children:"window"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"快捷键监听（如 Ctrl+S 保存、Ctrl+Z 撤销）"}),`
`,e.jsx(n.li,{children:"导航键监听（如方向键控制）"}),`
`,e.jsx(n.li,{children:"Escape 键关闭弹窗/模态框"}),`
`,e.jsx(n.li,{children:"游戏键盘控制"}),`
`,e.jsx(n.li,{children:"表单输入增强（如 Enter 提交）"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(c,{language:"tsx",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"key"}),e.jsx("td",{children:e.jsx("code",{children:"string | string[]"})}),e.jsx("td",{children:"要监听的按键，支持 event.key（如 'Escape'）或 event.code（如 'KeyS'）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(event: KeyboardEvent) => void"})}),e.jsx("td",{children:"按键触发时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"OnKeyPressOptions"})}),e.jsx("td",{children:"可选配置项"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.type"}),e.jsx("td",{children:e.jsx("code",{children:"'keydown' | 'keyup' | 'keypress'"})}),e.jsx("td",{children:"键盘事件类型，默认 'keydown'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.target"}),e.jsx("td",{children:e.jsx("code",{children:"EventTarget"})}),e.jsx("td",{children:"事件监听目标，默认 window"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.modifiers"}),e.jsx("td",{children:e.jsx("code",{children:"KeyModifiers"})}),e.jsx("td",{children:"修饰键要求配置"})]})]})]}),`
`,e.jsx(n.h2,{id:"keymodifiers-类型",children:"KeyModifiers 类型"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"ctrl"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否需要按住 Ctrl 键"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"alt"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否需要按住 Alt 键"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"shift"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否需要按住 Shift 键"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"meta"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否需要按住 Meta 键（Mac 上的 Command 键）"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清理函数，调用后停止监听键盘事件"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：主入口文件，实现 ",e.jsx(n.code,{children:"onKeyPress"})," 监听逻辑，同时作为模块统一出口，re-export ",e.jsx(n.code,{children:"core/"})," 下的共享工具"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：TypeScript 类型定义，包含 ",e.jsx(n.code,{children:"onKeyPress"})," 自身类型（",e.jsx(n.code,{children:"CleanupFn"}),"、",e.jsx(n.code,{children:"OnKeyPressOptions"}),"、",e.jsx(n.code,{children:"KeyModifiers"}),"）以及键盘共享类型（",e.jsx(n.code,{children:"KeyType"}),"、",e.jsx(n.code,{children:"KeyFilter"}),"、",e.jsx(n.code,{children:"KeyPredicate"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/aliasKeyCodeMap.ts"}),"：键盘按键别名与 keyCode 的映射表"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/modifierKey.ts"}),"：修饰键检测映射"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/genFilterKey.ts"}),"：按键匹配核心逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/genKeyFormatter.ts"}),"：将 ",e.jsx(n.code,{children:"KeyFilter"})," 预处理为统一的 ",e.jsx(n.code,{children:"KeyPredicate"})," 判断函数"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"模块依赖链"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`aliasKeyCodeMap ← modifierKey ← genFilterKey ← genKeyFormatter
`})}),`
`,e.jsxs(n.h3,{id:"onkeypress-核心流程",children:[e.jsx(n.code,{children:"onKeyPress"})," 核心流程"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"isBrowser()"})," 环境检查"]}),"：因为该工具可能在 SSR（Node.js）环境中被引用，此时 ",e.jsx(n.code,{children:"window"})," 不存在，直接返回空函数避免报错"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"将按键参数统一为数组"}),"：API 允许传入 ",e.jsx(n.code,{children:"string | string[]"}),"，内部统一转为数组后用 ",e.jsx(n.code,{children:"includes"})," 匹配，简化后续判断逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"先检查修饰键，再匹配按键"}),"：修饰键检查是前置条件，不满足时直接 ",e.jsx(n.code,{children:"return"})," 可以避免不必要的按键匹配计算"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["同时匹配 ",e.jsx(n.code,{children:"event.key"})," 和 ",e.jsx(n.code,{children:"event.code"})]}),"：",e.jsx(n.code,{children:"event.key"})," 返回的是按键字符（受键盘布局影响），",e.jsx(n.code,{children:"event.code"})," 返回的是物理按键码（不受布局影响），两者都检查可以兼容不同键盘布局和不同浏览器的行为差异"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["通过 ",e.jsx(n.code,{children:"createEventListener"})," 注册监听"]}),"：封装了 ",e.jsx(n.code,{children:"addEventListener"})," / ",e.jsx(n.code,{children:"removeEventListener"})," 的配对操作，返回清理函数，调用方无需手动管理事件解绑"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"core-共享工具实现细节",children:[e.jsx(n.code,{children:"core/"})," 共享工具实现细节"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"aliasKeyCodeMap"})}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["提供 102 项按键别名到 ",e.jsx(n.code,{children:"keyCode"})," 的映射（如 ",e.jsx(n.code,{children:"'enter'"})," → ",e.jsx(n.code,{children:"13"}),"、",e.jsx(n.code,{children:"'esc'"})," → ",e.jsx(n.code,{children:"27"}),"），因为原生 ",e.jsx(n.code,{children:"event.keyCode"})," 是数字，而用户更习惯用字符串别名（",e.jsx(n.code,{children:"'ctrl.s'"}),"）来描述按键，需要一个映射表来桥接"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"meta"})," 键在 Mac 上对应左 Command（keyCode 91）和右 Command（keyCode 93），在 Windows 上对应左 Win（91）和右 Win（92），因此通过 ",e.jsx(n.code,{children:"isAppleDevice()"})," 动态返回不同的 keyCode 数组"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"modifierKey"})}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["对 ",e.jsx(n.code,{children:"ctrl"}),"、",e.jsx(n.code,{children:"shift"}),"、",e.jsx(n.code,{children:"alt"})," 直接使用 ",e.jsx(n.code,{children:"event.ctrlKey"})," 等布尔属性即可检测"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"meta"})," 键的 ",e.jsx(n.code,{children:"keyup"})," 事件需要特殊处理：浏览器在 ",e.jsx(n.code,{children:"keyup"})," 时 ",e.jsx(n.code,{children:"event.metaKey"})," 可能已经为 ",e.jsx(n.code,{children:"false"}),"（因为 meta 键本身就是被释放的键），所以改用 ",e.jsx(n.code,{children:"event.keyCode"})," 与 ",e.jsx(n.code,{children:"aliasKeyCodeMap.meta"})," 比对来兜底"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"genFilterKey"})}),"——判断一次键盘事件是否匹配指定的按键过滤器，匹配成功返回 ",e.jsx(n.code,{children:"keyFilter"})," 本身，失败返回 ",e.jsx(n.code,{children:"false"}),"："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"空事件守卫"}),"：浏览器自动补全 input 时会触发 ",e.jsx(n.code,{children:"keyDown"}),"/",e.jsx(n.code,{children:"keyUp"}),"，但 ",e.jsx(n.code,{children:"event.key"})," 为空，直接跳过"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数字类型快速路径"}),"：如果 ",e.jsx(n.code,{children:"keyFilter"})," 是数字（如 ",e.jsx(n.code,{children:"13"}),"），直接与 ",e.jsx(n.code,{children:"event.keyCode"})," 比对，最简单的匹配方式"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"字符串组合键解析"}),"：按 ",e.jsx(n.code,{children:"."})," 拆分字符串（如 ",e.jsx(n.code,{children:"'ctrl.s'"})," → ",e.jsx(n.code,{children:"['ctrl', 's']"}),"），逐段匹配：",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["先查 ",e.jsx(n.code,{children:"modifierKey[key]"}),"——如果是修饰键（",e.jsx(n.code,{children:"ctrl"}),"/",e.jsx(n.code,{children:"shift"}),"/",e.jsx(n.code,{children:"alt"}),"/",e.jsx(n.code,{children:"meta"}),"），调用对应的检测函数判断该修饰键是否处于按下状态"]}),`
`,e.jsxs(n.li,{children:["再查 ",e.jsx(n.code,{children:"aliasKeyCodeMap[key]"}),"——将别名（如 ",e.jsx(n.code,{children:"'s'"}),"）映射为 keyCode（",e.jsx(n.code,{children:"83"}),"），与 ",e.jsx(n.code,{children:"event.keyCode"})," 比对"]}),`
`,e.jsx(n.li,{children:"两者满足其一就算该段匹配成功，计数 +1"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"最终判定"}),"：",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"非精确模式"}),"：只要所有段都匹配就算成功。比如用户按了 ",e.jsx(n.code,{children:"Ctrl+Shift+S"}),"，过滤器是 ",e.jsx(n.code,{children:"'ctrl.s'"}),"，也能匹配"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"精确模式"}),"：额外要求 ",e.jsx(n.code,{children:"countKeyByEvent(event)"})," 统计的激活按键数量恰好等于过滤器段数，这样 ",e.jsx(n.code,{children:"Ctrl+Shift+S"})," 就不会匹配 ",e.jsx(n.code,{children:"'ctrl.s'"}),"（激活了 3 个键，但过滤器只有 2 段）"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"countKeyByEvent"})}),"——统计当前事件中实际激活的按键数量，服务于精确匹配："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"遍历四个修饰键检测函数，累加处于激活状态的修饰键数量"}),`
`,e.jsxs(n.li,{children:["keyCode ",e.jsx(n.code,{children:"[16,17,18,91,92]"})," 是修饰键本身的物理键码，如果用户按的恰好就是修饰键，则不额外 +1；否则在修饰键数量基础上 +1（代表被按下的普通键）"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"genKeyFormatter"})}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"KeyFilter"})," 支持多种输入格式（函数、单键、数组），但事件回调内部需要统一的判断接口，因此 ",e.jsx(n.code,{children:"genKeyFormatter"})," 将所有格式标准化为 ",e.jsx(n.code,{children:"KeyPredicate"})," 函数"]}),`
`,e.jsxs(n.li,{children:["函数类型直接透传；单键类型包装为调用 ",e.jsx(n.code,{children:"genFilterKey"})," 的闭包；数组类型遍历每个元素调用 ",e.jsx(n.code,{children:"genFilterKey"}),"，找到第一个匹配项即返回"]}),`
`]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{a as default};
