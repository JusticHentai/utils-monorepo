import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useState } from 'react'
import useDebounceEffect from '../../../packages/element-utils/src/useDebounceEffect'
import { action } from 'storybook/actions'

const UseDebounceEffectDemo = () => {
  const [value, setValue] = useState('')
  const [effectCount, setEffectCount] = useState(0)

  useDebounceEffect(
    () => {
      if (value) {
        setEffectCount((c) => c + 1)
        action('防抖 effect 执行')({ value })
      }
    },
    [value],
    { delay: 500 }
  )

  return (
    <div>
      <input
        placeholder="输入内容..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8, width: 200, marginBottom: 20 }}
      />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>输入值: {value}</p>
        <p>effect 执行次数: {effectCount}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：停止输入 500ms 后才会触发 effect
        </p>
      </div>
    </div>
  )
}

export default UseDebounceEffectDemo
`;function s(c){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usedebounceeffect",children:"useDebounceEffect"}),`
`,e.jsx(n.p,{children:"为 useEffect 增加防抖能力。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDebounceEffect"})," 是一个带防抖功能的 effect hook，只有在依赖停止变化一段时间后才会执行 effect。它在 ",e.jsx(n.code,{children:"useEffect"})," 的基础上封装了 ",e.jsx(n.code,{children:"useDebounce"}),"，使得依赖变化时不会立即触发 effect，而是等到依赖停止变化达到指定延迟时间后才执行。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"搜索输入框"}),"：用户停止输入后才发起搜索请求，避免每次按键都请求接口"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"表单自动保存"}),"：表单字段频繁变化时，延迟保存，减少不必要的写操作"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"频繁状态处理"}),"：依赖值高频变化时，控制 effect 执行频率，提升性能"]}),`
`]}),`
`,e.jsxs(n.p,{children:["相比直接在 ",e.jsx(n.code,{children:"useEffect"})," 内部手动写 ",e.jsx(n.code,{children:"setTimeout"}),"，",e.jsx(n.code,{children:"useDebounceEffect"})," 自动管理定时器的创建和清理，避免内存泄漏和竞态问题。"]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(i,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"effect"}),e.jsx("td",{children:e.jsx("code",{children:"EffectCallback"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"防抖后执行的副作用函数，支持返回清理函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"依赖数组，依赖变化时触发防抖计时"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.delay"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"1000"})}),e.jsx("td",{children:"防抖延迟时间（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.immediate"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否在首次触发时立即执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.maxWait"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"最大等待时间（毫秒），超过此时间强制执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounceEffect/index.ts"}),"：核心入口，组合 ",e.jsx(n.code,{children:"useDebounce"})," 和 ",e.jsx(n.code,{children:"useUpdateEffectHook"})," 实现防抖 effect"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounce/index.ts"}),"：底层防抖 hook，提供 ",e.jsx(n.code,{children:"run"}),"、",e.jsx(n.code,{children:"cancel"}),"、",e.jsx(n.code,{children:"flush"}),"、",e.jsx(n.code,{children:"isPending"})," 方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useUpdateEffectHook/index.ts"}),"：跳过首次渲染的 effect hook，只在依赖真正更新时执行"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["内部维护一个 ",e.jsx(n.code,{children:"flag"})," 状态对象（",e.jsx(n.code,{children:"useState({})"}),"）"]}),`
`,e.jsxs(n.li,{children:["当 ",e.jsx(n.code,{children:"deps"})," 变化时，通过 ",e.jsx(n.code,{children:"useEffect"})," 调用 ",e.jsx(n.code,{children:"useDebounce"})," 返回的 ",e.jsx(n.code,{children:"run"})," 方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"run"})," 启动防抖定时器，延迟结束后调用 ",e.jsx(n.code,{children:"setFlag({})"})," 生成新的对象引用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flag"})," 变化触发 ",e.jsx(n.code,{children:"useUpdateEffectHook"}),"，最终执行用户传入的 ",e.jsx(n.code,{children:"effect"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState({})"})," 创建引用类型 flag，每次 ",e.jsx(n.code,{children:"setFlag({})"})," 都会生成新对象，确保触发重渲染"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useUpdateEffectHook"}),"（基于 ",e.jsx(n.code,{children:"createUpdateEffect"}),"）跳过首次渲染，避免组件挂载时就执行 effect"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounce"})," 内部通过 ",e.jsx(n.code,{children:"useRef"})," 存储最新回调，解决闭包陈旧问题"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据流向"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deps 变化"})," → ",e.jsx(n.code,{children:"useEffect"})," 触发 → 调用 ",e.jsx(n.code,{children:"run()"})," 启动防抖 → 延迟到期后 ",e.jsx(n.code,{children:"setFlag({})"})," → ",e.jsx(n.code,{children:"flag 变化"})," → ",e.jsx(n.code,{children:"useUpdateEffectHook"})," 执行 ",e.jsx(n.code,{children:"effect"})]}),`
`]}),`
`]}),`
`]})]})}function f(c={}){const{wrapper:n}={...d(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{f as default};
