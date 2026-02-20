import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import '../../.css/index.css'
import { useState } from 'react'
import useDebounceValue from '../../../packages/element-utils/src/useDebounceValue'
import { action } from 'storybook/actions'

const UseDebounceValueDemo = () => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounceValue(value, { delay: 500 })

  return (
    <div>
      <input
        placeholder="输入内容..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          action('输入变化')(e.target.value)
        }}
        style={{ padding: 8, width: 200, marginBottom: 20 }}
      />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>实时值: {value}</p>
        <p>防抖值: {debouncedValue}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：防抖值在停止输入 500ms 后更新
        </p>
      </div>
    </div>
  )
}

export default UseDebounceValueDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usedebouncevalue",children:"useDebounceValue"}),`
`,e.jsx(n.p,{children:"用来处理值防抖的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDebounceValue"})," 接收一个频繁变化的值，返回其防抖后的版本。只有当原始值停止变化并超过指定延迟时间后，防抖值才会更新。"]}),`
`,e.jsxs(n.p,{children:["它基于 ",e.jsx(n.code,{children:"useDebounce"})," hook 封装，内部维护一个独立的 state 来存储防抖后的值，当原始值变化时启动防抖定时器，延迟到期后才同步更新。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"搜索关键词防抖"}),"：用户停止输入后才用防抖值发起搜索请求，避免每次按键都触发接口调用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"表单验证"}),"：输入字段频繁变化时，等稳定后再执行校验逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"派生计算优化"}),"：某个值频繁变化但下游计算开销大时，用防抖值控制计算频率"]}),`
`]}),`
`,e.jsxs(n.p,{children:["相比 ",e.jsx(n.code,{children:"useDebounceEffect"}),"（控制 effect 执行时机），",e.jsx(n.code,{children:"useDebounceValue"}),' 更适合需要一个"稳定值"直接用于渲染或传递给子组件的场景。']}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(l,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"需要防抖的值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.delay"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"防抖延迟时间（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.immediate"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否在首次触发时立即执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.maxWait"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"最大等待时间（毫秒），超过此时间强制执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"防抖后的值，类型与输入值相同"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounceValue/index.ts"}),"：核心入口，组合 ",e.jsx(n.code,{children:"useDebounce"})," 和 ",e.jsx(n.code,{children:"useState"})," 实现值防抖"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounce/index.ts"}),"：底层防抖 hook，提供 ",e.jsx(n.code,{children:"run"}),"、",e.jsx(n.code,{children:"cancel"}),"、",e.jsx(n.code,{children:"flush"}),"、",e.jsx(n.code,{children:"isPending"})," 方法"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState(value)"})," 初始化防抖值 ",e.jsx(n.code,{children:"debounced"})]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"useDebounce"})," 创建防抖函数 ",e.jsx(n.code,{children:"run"}),"，其回调为 ",e.jsx(n.code,{children:"setDebounced(value)"})]}),`
`,e.jsxs(n.li,{children:["当 ",e.jsx(n.code,{children:"value"})," 变化时，",e.jsx(n.code,{children:"useEffect"})," 调用 ",e.jsx(n.code,{children:"run()"})," 启动防抖定时器"]}),`
`,e.jsxs(n.li,{children:["延迟到期后执行 ",e.jsx(n.code,{children:"setDebounced(value)"}),"，更新防抖值并触发组件重渲染"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useDebounce"})," 内部通过 ",e.jsx(n.code,{children:"useRef"})," 存储最新回调，确保 ",e.jsx(n.code,{children:"setDebounced"})," 始终使用最新的 ",e.jsx(n.code,{children:"value"}),"，解决闭包陈旧问题"]}),`
`,e.jsxs(n.li,{children:["初始值通过 ",e.jsx(n.code,{children:"useState(value)"})," 同步设置，首次渲染时防抖值与原始值一致"]}),`
`,e.jsxs(n.li,{children:["支持 ",e.jsx(n.code,{children:"UseDebounceOptions"})," 的所有配置（",e.jsx(n.code,{children:"delay"}),"、",e.jsx(n.code,{children:"immediate"}),"、",e.jsx(n.code,{children:"maxWait"}),"）"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据流向"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value 变化"})," → ",e.jsx(n.code,{children:"useEffect"})," 触发 → 调用 ",e.jsx(n.code,{children:"run()"})," 启动防抖 → 延迟到期后 ",e.jsx(n.code,{children:"setDebounced(value)"})," → ",e.jsx(n.code,{children:"debounced 更新"})," → 组件重渲染使用新的防抖值"]}),`
`]}),`
`]}),`
`]})]})}function u(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{u as default};
