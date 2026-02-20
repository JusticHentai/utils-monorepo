import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useRafInterval 示例集合
 */
const UseRafIntervalDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useRafInterval - RAF 定时器</h2>
      <p>使用 requestAnimationFrame 实现的定时器，更加流畅</p>
      <BasicDemo />
    </div>
  )
}

export default UseRafIntervalDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"userafinterval",children:"useRafInterval"}),`
`,e.jsx(n.p,{children:"管理 requestAnimationFrame 的 interval Hook，使用 requestAnimationFrame 实现的定时器，更加流畅。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useRafInterval"})," 是基于 requestAnimationFrame 实现的定时器 Hook，相比 setInterval 更加流畅且节能。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"requestAnimationFrame API：与浏览器刷新率同步"}),`
`,e.jsx(n.li,{children:"后台标签页优化：浏览器会自动暂停后台标签页的 RAF"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"需要流畅动画效果的定时任务"}),`
`,e.jsx(n.li,{children:"替代 setInterval 实现更平滑的更新"}),`
`,e.jsx(n.li,{children:"与屏幕刷新率同步的定时操作"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"与屏幕刷新同步，动画更流畅"}),`
`,e.jsx(n.li,{children:"后台标签页自动暂停，节省资源"}),`
`,e.jsx(n.li,{children:"支持 immediate 选项"}),`
`]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(i,{language:"tsx",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"fn"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"执行函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsx("td",{children:e.jsx("code",{children:"number | undefined"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"间隔时间（毫秒），设置为 undefined 停止定时器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.immediate"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否在首次渲染时立即执行"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清除定时器函数"})]})})]}),`
`,e.jsx(n.h2,{id:"与-setinterval-对比",children:"与 setInterval 对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"特性"}),e.jsx("th",{children:"useRafInterval"}),e.jsx("th",{children:"setInterval"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"帧同步"}),e.jsx("td",{children:"✅ 与屏幕刷新同步"}),e.jsx("td",{children:"❌ 不同步"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"性能"}),e.jsx("td",{children:"✅ 后台自动暂停"}),e.jsx("td",{children:"❌ 始终执行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"精度"}),e.jsx("td",{children:"受帧率影响"}),e.jsx("td",{children:"更精确"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"适用场景"}),e.jsx("td",{children:"动画、UI 更新"}),e.jsx("td",{children:"精确计时"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"useRafInterval"})," Hook，基于 ",e.jsx(n.code,{children:"requestAnimationFrame"})," 递归调用模拟 interval 定时器"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useRef"})," 保存最新的回调函数（",e.jsx(n.code,{children:"fnRef.current = fn"}),"），每次渲染直接赋值"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useRef"})," 保存定时器 ID（",e.jsx(n.code,{children:"timerRef"}),"）和起始时间戳（",e.jsx(n.code,{children:"startTimeRef"}),"）"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"useCallback"})," 创建稳定的 ",e.jsx(n.code,{children:"clear"})," 函数，用于取消 RAF"]}),`
`,e.jsxs(n.li,{children:["在 ",e.jsx(n.code,{children:"useEffect"})," 中判断 delay 有效性，有效则启动 RAF 循环，返回 ",e.jsx(n.code,{children:"clear"})," 作为清理函数"]}),`
`,e.jsxs(n.li,{children:["若 ",e.jsx(n.code,{children:"immediate"})," 为 true，在启动循环前立即执行一次回调"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"useRef"})," 保存回调"]}),"：",e.jsx(n.code,{children:"fnRef.current = fn"})," 每次渲染直接赋值（非 ",e.jsx(n.code,{children:"useLatest"}),"），确保 RAF 回调中始终调用最新函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"递归 RAF 调用"}),"：",e.jsx(n.code,{children:"loop"})," 函数内部调用 ",e.jsx(n.code,{children:"requestAnimationFrame(loop)"})," 形成循环"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"时间戳比较"}),"：通过 ",e.jsx(n.code,{children:"timestamp - startTimeRef.current >= delay"})," 判断是否达到间隔，达到后重置起始时间"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"isNumber"})," 守卫"]}),"：使用 ",e.jsx(n.code,{children:"isNumber(delay) && delay >= 0"})," 判断有效性，delay 为 undefined 时不启动定时器"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`fn → fnRef.current（每次渲染更新）
delay/immediate → useEffect 依赖
       ↓
useEffect 启动 → immediate? → fnRef.current()
       ↓
requestAnimationFrame(loop)
       ↓
loop(timestamp) → elapsed >= delay? → fnRef.current() → 重置 startTime → 继续 RAF
                                    → 否 → 继续 RAF
       ↓
返回 clear 函数 → cancelAnimationFrame
`})})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{a as default};
