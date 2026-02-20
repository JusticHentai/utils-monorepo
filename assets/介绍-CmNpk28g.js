import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import defer from '../../../packages/js-utils/src/defer'

const deferDemo = () => {
  action('defer - 同步代码先执行')('① 开始')

  // 传递额外参数给延迟函数
  defer((...args: unknown[]) => {
    action('defer - 延迟后执行，接收参数')({ args })
  }, 'arg1', 'arg2')

  action('defer - 同步代码继续')('② 结束（此时 defer 回调尚未执行）')
}

export default deferDemo
`,c=`import { action } from 'storybook/actions'
import defer from '../../../packages/js-utils/src/defer'

const cancelDemo = () => {
  // defer 返回 timerId，可以用 clearTimeout 取消
  const timerId = defer(() => {
    action('defer - 不应该看到这条')('已被取消')
  })
  clearTimeout(timerId)
  action('defer - 已取消')('调用 clearTimeout(timerId) 取消了延迟执行')
}

export default cancelDemo
`,o=`import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const delayDemo = () => {
  action('delay - 立即输出')('开始计时')
  delay(
    (msg: string) => {
      action('delay - 1秒后执行')(msg)
    },
    1000,
    '延迟1秒的消息',
  )
}

export default delayDemo
`;function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"defer",children:"defer"}),`
`,e.jsxs(n.p,{children:["延迟调用函数直到当前调用栈清空。同时提供 ",e.jsx(n.code,{children:"delay"})," 延迟指定时间后调用。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"defer"})," 将函数推迟到当前调用栈清空后执行（类似 ",e.jsx(n.code,{children:"setTimeout(fn, 1)"}),"）。",e.jsx(n.code,{children:"delay"})," 则延迟指定的毫秒数后执行。两者均返回 timerId，可通过 ",e.jsx(n.code,{children:"clearTimeout"})," 取消。"]}),`
`,e.jsx(n.h2,{id:"defer---延迟执行与参数传递",children:"defer - 延迟执行与参数传递"}),`
`,e.jsx(d,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"defer---取消延迟执行",children:"defer - 取消延迟执行"}),`
`,e.jsx(d,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"delay---延迟指定毫秒",children:"delay - 延迟指定毫秒"}),`
`,e.jsx(d,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"func"}),e.jsx("td",{children:e.jsx("code",{children:"T extends (...args: any[]) => any"})}),e.jsx("td",{children:"要延迟执行的函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"wait"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"延迟的毫秒数（delay 专用）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"args"}),e.jsx("td",{children:e.jsx("code",{children:"Parameters<T>"})}),e.jsx("td",{children:"传递给函数的参数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"ReturnType<typeof setTimeout>"})]}),`
`,e.jsx(n.li,{children:"描述：定时器 ID，可用于取消"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"defer/index.ts"})," 导出 defer（default）和 delay（named）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 使用 ",e.jsx(n.code,{children:"setTimeout"})," 将函数推入事件队列"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": defer 使用 1ms 延迟，返回 timerId 支持 clearTimeout 取消"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": func + args → setTimeout → 事件循环下一轮执行"]}),`
`]})]})}function f(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{f as default};
