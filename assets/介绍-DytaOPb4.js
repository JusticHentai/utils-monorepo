import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import createThrottleFn from '../../../packages/element-utils/src/createThrottleFn'

const basicDemo = () => {
  let callCount = 0
  const throttledFn = createThrottleFn((value: string) => {
    callCount++
    action('节流函数执行')({ value, callCount })
    return value
  }, 500)

  action('开始连续调用')('每 100ms 调用一次，持续 1 秒')

  // 模拟连续调用 10 次
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      throttledFn(\`第 \${i + 1} 次调用\`)
    }, i * 100)
  }

  action('提示')('由于节流，500ms 内只会执行一次')
}

export default basicDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createthrottlefn",children:"createThrottleFn"}),`
`,n.jsx(e.p,{children:"创建节流函数的工具。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createThrottleFn"})," 创建一个节流函数，确保在指定时间间隔内函数最多执行一次。与防抖不同，节流会在时间间隔内定期执行。"]}),`
`,n.jsx(e.p,{children:"常用场景："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"滚动事件处理"}),`
`,n.jsx(e.li,{children:"窗口 resize 事件"}),`
`,n.jsx(e.li,{children:"鼠标移动事件"}),`
`,n.jsx(e.li,{children:"游戏循环中的输入处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础节流",children:"基础节流"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"fn"}),n.jsx("td",{children:n.jsx("code",{children:"T extends (...args: any[]) => any"})}),n.jsx("td",{children:"要节流的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"等待时间（毫秒），默认 1000"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.leading"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在延迟开始前调用，默认 true"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.trailing"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在延迟结束后调用，默认 true"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"throttledFn"}),n.jsx("td",{children:n.jsx("code",{children:"ThrottledFn<T>"})}),n.jsx("td",{children:"节流后的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"throttledFn.cancel"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"取消待执行的节流函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"throttledFn.flush"}),n.jsx("td",{children:n.jsx("code",{children:"() => ReturnType<T>"})}),n.jsx("td",{children:"立即执行节流函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 包含节流函数的完整实现"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"首次调用时根据 leading 配置决定是否立即执行"}),`
`,n.jsx(e.li,{children:"后续调用会被限制在 wait 时间间隔内"}),`
`,n.jsx(e.li,{children:"trailing 模式会在时间间隔结束时执行最后一次调用"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用时间戳判断是否应该执行"}),`
`,n.jsx(e.li,{children:"支持 leading 和 trailing 两种模式"}),`
`,n.jsx(e.li,{children:"提供 cancel 和 flush 方法控制执行"}),`
`]}),`
`]}),`
`]})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{a as default};
