import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import '../../.css/index.css'
import useCounter from '../../../packages/element-utils/src/useCounter'
import { action } from 'storybook/actions'

const UseCounterDemo = () => {
  // 基础用法
  const [count, { inc, dec, set, reset }] = useCounter(0)
  // 带边界值
  const [limitedCount, limitedActions] = useCounter(5, { min: 0, max: 10 })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础计数器</div>
      <div style={{ marginBottom: 8, fontSize: 24 }}>
        计数：<span style={{ color: '#1890ff' }}>{count}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          inc()
          action('inc()')('增加 1')
        }}
      >
        inc() +1
      </div>
      <div
        className="button"
        onClick={() => {
          dec()
          action('dec()')('减少 1')
        }}
      >
        dec() -1
      </div>
      <div
        className="button"
        onClick={() => {
          inc(5)
          action('inc(5)')('增加 5')
        }}
      >
        inc(5) +5
      </div>
      <div
        className="button"
        onClick={() => {
          dec(5)
          action('dec(5)')('减少 5')
        }}
      >
        dec(5) -5
      </div>
      <div
        className="button"
        onClick={() => {
          set(100)
          action('set(100)')('设置为 100')
        }}
      >
        set(100)
      </div>
      <div
        className="button"
        onClick={() => {
          reset()
          action('reset()')('重置为初始值')
        }}
      >
        reset()
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>
        带边界值计数器 (min: 0, max: 10)
      </div>
      <div style={{ marginBottom: 8, fontSize: 24 }}>
        计数：<span style={{ color: '#52c41a' }}>{limitedCount}</span>
        <span style={{ fontSize: 14, color: '#999', marginLeft: 8 }}>
          [min: 0, max: 10]
        </span>
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.inc()
          action('limited inc()')('增加 1（最大 10）')
        }}
      >
        inc() +1
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.dec()
          action('limited dec()')('减少 1（最小 0）')
        }}
      >
        dec() -1
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.set(5)
          action('limited set(5)')('设置为 5')
        }}
      >
        set(5)
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.reset()
          action('limited reset()')('重置为初始值 5')
        }}
      >
        reset()
      </div>
    </div>
  )
}

export default UseCounterDemo
`;function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usecounter",children:"useCounter"}),`
`,e.jsx(n.p,{children:"管理计数器的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"useCounter 提供了一套完整的计数器管理方案，支持增加、减少、设置值、重置等操作，并支持设置最大值和最小值边界。"}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"商品数量选择器"}),`
`,e.jsx(n.li,{children:"分页页码管理"}),`
`,e.jsx(n.li,{children:"步骤进度控制"}),`
`,e.jsx(n.li,{children:"任何需要数值增减的场景"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(c,{language:"tsx",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"initialValue"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:"初始值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.min"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"最小值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.max"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"最大值"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"current"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"当前值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.inc"}),e.jsx("td",{children:e.jsx("code",{children:"(delta?: number) => void"})}),e.jsx("td",{children:"增加，默认 +1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.dec"}),e.jsx("td",{children:e.jsx("code",{children:"(delta?: number) => void"})}),e.jsx("td",{children:"减少，默认 -1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.set"}),e.jsx("td",{children:e.jsx("code",{children:"(value: number | ((c: number) => number)) => void"})}),e.jsx("td",{children:"设置值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"actions.reset"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置为初始值"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：Hook 主逻辑，管理计数状态和操作方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：类型定义，包括 UseCounterOptions、CounterActions、ValueParam"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["初始化时通过 ",e.jsx(n.code,{children:"clamp"})," 函数根据 min/max 约束初始值"]}),`
`,e.jsxs(n.li,{children:["每次更新值时通过 ",e.jsx(n.code,{children:"clamp"})," 函数确保值在边界范围内"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useMemoizedFn"})," 包装 inc/dec/set/reset 操作方法，保证引用稳定"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"clamp 函数"}),"：从 ",e.jsx(n.code,{children:"@justichentai/js-utils/clamp"})," 导入，负责将值约束在 min/max 范围内"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useMemoizedFn"}),"：包装操作方法，保证函数引用在组件生命周期内稳定"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ValueParam 类型"}),"：支持直接传数值或传函数 ",e.jsx(n.code,{children:"(c: number) => number"}),"，类似 setState 的用法"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`inc/dec/set/reset 调用 → setValue 统一处理 → clamp 约束边界 → setCurrent 更新状态
`})})]})}function a(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default};
