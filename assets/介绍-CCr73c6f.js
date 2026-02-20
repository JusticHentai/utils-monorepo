import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import countdown from '../../../packages/js-utils/src/countdown'

const startCountDownDemo = () => {
  const endTs = Math.floor(Date.now() / 1000) + 5 // 5秒后

  /** 返回清除定时器的函数 */
  return countdown({
    endTs,
    cb: (remaining) => {
      action('剩余秒数:')(remaining)
    },
  })
}

export default startCountDownDemo
`,c=`import { action } from 'storybook/actions'

const clearCountdownDemo = (clear?: (() => void) | null) => {
  clear?.()

  action('倒计时已清除')()
}

export default clearCountdownDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"countdown",children:"countdown"}),`
`,n.jsx(e.p,{children:"倒计时定时器函数，每秒触发回调。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["countdown 是一个倒计时工具函数，核心作用是：",n.jsx(e.strong,{children:"根据目标时间戳，每秒计算剩余时间并触发回调"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"setInterval：每秒触发定时器"}),`
`,n.jsx(e.li,{children:"时间戳计算：目标时间 - 当前时间 = 剩余时间"}),`
`,n.jsx(e.li,{children:"清理函数：返回 clearInterval 包装"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"活动倒计时：距离活动开始还有 XX:XX:XX"}),`
`,n.jsx(e.li,{children:"验证码倒计时：60 秒后重新获取"}),`
`,n.jsx(e.li,{children:"限时抢购：倒计时结束后商品下架"}),`
`,n.jsx(e.li,{children:"考试时间：距离考试结束还有多长时间"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"基于时间戳计算，不累积误差"}),`
`,n.jsx(e.li,{children:"返回清理函数，便于组件卸载时清除"}),`
`,n.jsx(e.li,{children:"回调返回剩余秒数，便于格式化显示"}),`
`]}),`
`,n.jsx(e.h2,{id:"开始倒计时示例",children:"开始倒计时示例"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"清除倒计时示例",children:"清除倒计时示例"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"options.endTs"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"结束时间戳（秒级）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.cb"}),n.jsx("td",{children:n.jsx("code",{children:"(remaining: number) => void"})}),n.jsx("td",{children:"每秒触发的回调，参数为剩余秒数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"() => void"})]}),`
`,n.jsx(e.li,{children:"描述：清除定时器的函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 countdown 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["计算初始剩余时间：",n.jsx(e.code,{children:"endTs - Math.floor(Date.now() / 1000)"})]}),`
`,n.jsx(e.li,{children:"立即调用一次回调"}),`
`,n.jsxs(e.li,{children:["启动 ",n.jsx(e.code,{children:"setInterval"}),"，每秒执行：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"重新计算剩余时间"}),`
`,n.jsx(e.li,{children:"调用回调传入剩余秒数"}),`
`,n.jsx(e.li,{children:"剩余时间 ≤ 0 时清除定时器"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"返回 clearInterval 包装函数"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"每次都重新计算时间戳差值，避免累积误差"}),`
`,n.jsxs(e.li,{children:["使用秒级时间戳：",n.jsx(e.code,{children:"Math.floor(Date.now() / 1000)"})]}),`
`,n.jsx(e.li,{children:"自动清理：倒计时结束后自动清除定时器"}),`
`]})]})}function u(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{u as default};
