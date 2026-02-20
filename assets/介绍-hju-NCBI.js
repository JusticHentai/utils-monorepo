import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function i(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"debounce",children:"debounce"}),`
`,n.jsx(e.p,{children:"创建一个防抖函数，在最后一次调用后的指定时间内没有新调用才执行。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"debounce"})," 函数用于限制函数的执行频率，常用于处理高频触发的事件。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"与 throttle 的区别"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"debounce：延迟执行，连续触发时重置计时器"}),`
`,n.jsx(e.li,{children:"throttle：固定频率执行，不管触发多频繁"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"搜索框输入：用户停止输入后再发起搜索请求"}),`
`,n.jsx(e.li,{children:"窗口调整：resize 事件结束后再执行计算"}),`
`,n.jsx(e.li,{children:"按钮点击：防止重复提交"}),`
`]}),`
`,n.jsx(e.h2,{id:"各场景执行流程",children:"各场景执行流程"}),`
`,n.jsx(e.h3,{id:"场景一默认模式trailing-true-leading-false",children:"场景一：默认模式（trailing: true, leading: false）"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`调用: ──X───X───X──────────────────▶ 时间
            ↓   ↓   ↓
          重置  重置  启动 wait 定时器
                          │
                          ▼ wait 到期
                        执行 func ✅
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["每次调用 ",n.jsx(e.code,{children:"debounced()"})," → 保存参数，重置定时器"]}),`
`,n.jsxs(e.li,{children:["最后一次调用后等待 ",n.jsx(e.code,{children:"wait"})," 毫秒"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timerExpired"})," 触发 → ",n.jsx(e.code,{children:"shouldInvoke"})," 为 true → ",n.jsx(e.code,{children:"trailingEdge"})," 执行 ",n.jsx(e.code,{children:"func"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"场景二leading-模式leading-true-trailing-false",children:"场景二：leading 模式（leading: true, trailing: false）"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`调用: ──X───X───X──────────────────▶ 时间
        ↓
      立即执行 ✅（后续调用被忽略）
                          │
                          ▼ wait 到期
                        不执行（trailing: false）
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["首次调用 → ",n.jsx(e.code,{children:"shouldInvoke"})," 为 true，",n.jsx(e.code,{children:"timerId"})," 为空 → 进入 ",n.jsx(e.code,{children:"leadingEdge"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"leadingEdge"}),"：记录 ",n.jsx(e.code,{children:"lastInvokeTime"}),"，启动定时器，",n.jsx(e.code,{children:"leading"})," 为 true 则立即 ",n.jsx(e.code,{children:"invokeFunc"})]}),`
`,n.jsxs(e.li,{children:["后续调用在 wait 内 → ",n.jsx(e.code,{children:"shouldInvoke"})," 为 false → 只更新参数，不执行"]}),`
`,n.jsxs(e.li,{children:["定时器到期 → ",n.jsx(e.code,{children:"trailingEdge"})," 中 ",n.jsx(e.code,{children:"trailing"})," 为 false → 不执行"]}),`
`]}),`
`,n.jsx(e.h3,{id:"场景三leading--trailing-都开启",children:"场景三：leading + trailing 都开启"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`调用: ──X───X───X──────────────────▶ 时间
        ↓                     ↓
      立即执行 ✅           wait 到期再执行 ✅
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["首次调用 → ",n.jsx(e.code,{children:"leadingEdge"})," 立即执行"]}),`
`,n.jsxs(e.li,{children:["后续调用 → 更新 ",n.jsx(e.code,{children:"lastArgs"}),"，定时器继续"]}),`
`,n.jsxs(e.li,{children:["定时器到期 → ",n.jsx(e.code,{children:"trailingEdge"})," 检查 ",n.jsx(e.code,{children:"lastArgs"})," 存在 → 再次执行（使用最后一次调用的参数）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"场景四maxwait-模式",children:"场景四：maxWait 模式"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`调用: ──X─X─X─X─X─X─X─X─X─X─────▶ 时间
        ↓         ↓         ↓
      启动    maxWait到达   wait到期
              强制执行 ✅   执行 ✅
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"首次调用 → 启动定时器"}),`
`,n.jsxs(e.li,{children:["持续高频调用 → 不断重置 ",n.jsx(e.code,{children:"lastArgs"})," 和 ",n.jsx(e.code,{children:"lastCallTime"})]}),`
`,n.jsxs(e.li,{children:["当 ",n.jsx(e.code,{children:"timeSinceLastInvoke >= maxWait"})," → ",n.jsx(e.code,{children:"shouldInvoke"})," 为 true，",n.jsx(e.code,{children:"maxing"})," 为 true → 直接 ",n.jsx(e.code,{children:"invokeFunc"})," 并重启定时器"]}),`
`,n.jsxs(e.li,{children:["保证即使不断有新调用，最多等 ",n.jsx(e.code,{children:"maxWait"})," 毫秒就会执行一次"]}),`
`]}),`
`,n.jsx(e.h3,{id:"辅助方法流程",children:"辅助方法流程"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"cancel()"})}),"：清除定时器，重置所有状态 → 丢弃待执行的调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"flush()"})}),"：如果有待执行的定时器 → 立即触发 ",n.jsx(e.code,{children:"trailingEdge"})," → 执行 ",n.jsx(e.code,{children:"func"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"pending()"})}),"：检查 ",n.jsx(e.code,{children:"timerId"})," 是否存在 → 判断是否有待执行的调用"]}),`
`]}),`
`,n.jsx(e.h2,{id:"配置选项",children:"配置选项"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"选项"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"leading"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"是否在延迟开始前调用"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"trailing"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"true"}),n.jsx("td",{children:"是否在延迟结束后调用"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"maxWait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"最大等待时间"})]})]})]}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"Function"})}),n.jsx("td",{children:"要防抖的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"等待时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"DebounceOptions"})}),n.jsx("td",{children:"配置选项"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsx(e.p,{children:"返回的防抖函数包含以下方法："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cancel()"})," - 取消延迟的函数调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flush()"})," - 立即执行延迟的函数调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pending()"})," - 检查是否有待执行的调用"]}),`
`]}),`
`,n.jsx(e.h2,{id:"实现原理",children:"实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心状态"}),"：",n.jsx(e.code,{children:"timerId"}),"（定时器）、",n.jsx(e.code,{children:"lastArgs"}),"（最新参数）、",n.jsx(e.code,{children:"lastCallTime"}),"（最后调用时间）、",n.jsx(e.code,{children:"lastInvokeTime"}),"（最后执行时间）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"调用入口"}),"：",n.jsx(e.code,{children:"debounced()"})," → 保存参数 → ",n.jsx(e.code,{children:"shouldInvoke"})," 判断是否需要执行 → 分发到 ",n.jsx(e.code,{children:"leadingEdge"})," 或等待定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"定时器回调"}),"：",n.jsx(e.code,{children:"timerExpired"})," → 再次 ",n.jsx(e.code,{children:"shouldInvoke"})," 判断 → 为 true 则 ",n.jsx(e.code,{children:"trailingEdge"})," 执行，否则重新计算剩余时间继续等待"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"maxWait 机制"}),"：",n.jsx(e.code,{children:"shouldInvoke"})," 中额外判断 ",n.jsx(e.code,{children:"timeSinceLastInvoke >= maxWait"}),"，确保高频调用下仍能定期执行"]}),`
`]})]})}function t(d={}){const{wrapper:e}={...l(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{t as default};
