import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const basicDemo = () => {
  const debouncedFn = createDebounceFn((value: string) => {
    action('防抖函数执行')(value)
    return value
  }, 500)

  // 模拟连续调用
  action('开始连续调用')('将在 500ms 后执行最后一次')

  debouncedFn('第1次调用')
  setTimeout(() => debouncedFn('第2次调用'), 100)
  setTimeout(() => debouncedFn('第3次调用'), 200)
  setTimeout(() => debouncedFn('第4次调用'), 300)

  action('提示')('只有最后一次调用会在 500ms 后执行')
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const leadingDemo = () => {
  const debouncedFn = createDebounceFn(
    (value: string) => {
      action('防抖函数执行')(value)
      return value
    },
    500,
    { leading: true, trailing: false }
  )

  action('leading 模式')('函数会在调用开始时立即执行')

  debouncedFn('第1次调用 - 立即执行')
  setTimeout(() => debouncedFn('第2次调用 - 被忽略'), 100)
  setTimeout(() => debouncedFn('第3次调用 - 被忽略'), 200)
}

export default leadingDemo
`,l=`import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const cancelDemo = () => {
  const debouncedFn = createDebounceFn((value: string) => {
    action('防抖函数执行')(value)
    return value
  }, 500)

  debouncedFn('调用后取消')

  // 200ms 后取消
  setTimeout(() => {
    debouncedFn.cancel()
    action('已取消')('防抖函数被取消，不会执行')
  }, 200)
}

export default cancelDemo
`;function s(c){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createdebouncefn",children:"createDebounceFn"}),`
`,n.jsx(e.p,{children:"创建防抖函数的工具，用于限制函数的执行频率。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createDebounceFn"})," 是一个创建防抖函数的工厂函数。防抖（debounce）是一种优化技术，用于确保函数在一定时间内只执行一次，通常在连续触发事件时，只在最后一次触发后的指定延迟时间后执行。"]}),`
`,n.jsx(e.p,{children:"常用场景："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"搜索框输入：用户停止输入后才发起搜索请求"}),`
`,n.jsx(e.li,{children:"窗口 resize：用户停止调整窗口后才执行布局计算"}),`
`,n.jsx(e.li,{children:"按钮防重复点击：防止用户快速点击导致多次提交"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础防抖",children:"基础防抖"}),`
`,n.jsx(e.p,{children:"默认情况下，防抖函数会在最后一次调用后的等待时间结束时执行（trailing 模式）。"}),`
`,n.jsx(d,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"leading-模式",children:"Leading 模式"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"leading: true"})," 后，函数会在第一次调用时立即执行，后续调用在等待时间内被忽略。"]}),`
`,n.jsx(d,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"取消防抖",children:"取消防抖"}),`
`,n.jsxs(e.p,{children:["可以调用 ",n.jsx(e.code,{children:"cancel()"})," 方法取消待执行的防抖函数。"]}),`
`,n.jsx(d,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"fn"}),n.jsx("td",{children:n.jsx("code",{children:"T extends (...args: any[]) => any"})}),n.jsx("td",{children:"要防抖的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"等待时间（毫秒），默认 1000"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.leading"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在延迟开始前调用，默认 false"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.trailing"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在延迟结束后调用，默认 true"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.maxWait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大等待时间（毫秒）"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"debouncedFn"}),n.jsx("td",{children:n.jsx("code",{children:"DebouncedFn<T>"})}),n.jsx("td",{children:"防抖后的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"debouncedFn.cancel"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"取消待执行的防抖函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"debouncedFn.flush"}),n.jsx("td",{children:n.jsx("code",{children:"() => ReturnType<T>"})}),n.jsx("td",{children:"立即执行防抖函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 包含防抖函数的完整实现和类型定义"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"调用时记录参数和时间戳"}),`
`,n.jsx(e.li,{children:"通过 setTimeout 延迟执行"}),`
`,n.jsx(e.li,{children:"支持 leading（前置执行）和 trailing（后置执行）两种模式"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用闭包保存状态（定时器 ID、最后调用时间等）"}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"shouldInvoke"})," 判断是否应该执行"]}),`
`,n.jsxs(e.li,{children:["支持 ",n.jsx(e.code,{children:"maxWait"})," 确保长时间连续调用时也能执行"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 调用 → 记录参数 → 设置定时器 → 定时器触发时执行原函数"]}),`
`]})]})}function m(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{m as default};
