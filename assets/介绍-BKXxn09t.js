import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import throttle from '../../../packages/element-utils/src/throttle'

let throttleFn: (() => void) | null = null

const basicDemo = () => {
  if (!throttleFn) {
    throttleFn = throttle({
      cb: () => {
        action('节流回调执行')('节流回调执行')
      },
      duration: 1000,
    })
  }

  throttleFn()
  action('节流函数（延迟执行）')('已触发节流函数，1秒后可再次执行')
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import throttle from '../../../packages/element-utils/src/throttle'

let throttleFn: (() => void) | null = null

const immediateDemo = () => {
  if (!throttleFn) {
    throttleFn = throttle({
      cb: () => {
        action('立即执行回调')('立即执行回调')
      },
      duration: 1000,
      immediate: true,
    })
  }

  throttleFn()
  action('节流函数（立即执行）')('立即执行回调，1秒内再次调用会被忽略')
}

export default immediateDemo
`;function l(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"throttle",children:"throttle"}),`
`,n.jsx(e.p,{children:"节流函数，用于限制函数在一定时间内只能执行一次。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["节流（throttle）是一种函数调用控制策略，核心思想是：",n.jsx(e.strong,{children:"在指定时间间隔内，无论触发多少次，函数只执行一次"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"闭包：保存定时器引用和执行状态"}),`
`,n.jsx(e.li,{children:"setTimeout：实现延迟执行和时间间隔控制"}),`
`,n.jsx(e.li,{children:"高阶函数：接收函数返回函数"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"滚动事件：限制滚动处理函数的执行频率"}),`
`,n.jsx(e.li,{children:"拖拽事件：限制 mousemove 回调频率"}),`
`,n.jsx(e.li,{children:"游戏循环：控制帧率或技能冷却"}),`
`,n.jsx(e.li,{children:"按钮点击：限制连续点击的触发频率"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"与防抖的区别"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"防抖：连续触发时，只在最后一次触发后执行"}),`
`,n.jsx(e.li,{children:"节流：连续触发时，按固定间隔执行"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'保证函数按固定频率执行，不会被"饿死"'}),`
`,n.jsx(e.li,{children:"平滑处理高频事件，提升性能"}),`
`,n.jsx(e.li,{children:"用户体验更连贯，有规律的响应反馈"}),`
`]}),`
`,n.jsx(e.h2,{id:"延迟执行",children:"延迟执行"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"立即执行",children:"立即执行"}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"options.cb"}),n.jsx("td",{children:n.jsx("code",{children:"(...params: any[]) => any"})}),n.jsx("td",{children:"需要节流的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.duration"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"节流时间间隔（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.immediate"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否立即执行。true: 立即执行后计时；false: 计时结束后执行"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...params: any[]) => void"})]}),`
`,n.jsx(e.li,{children:"描述：返回节流后的函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 throttle 函数实现和类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"throttle({ cb, duration, immediate })"})," 创建节流函数"]}),`
`,n.jsx(e.li,{children:"返回的函数被调用时，检查是否有正在执行的定时器"}),`
`,n.jsx(e.li,{children:'有定时器则直接返回（本次调用被"节流"）'}),`
`,n.jsxs(e.li,{children:["无定时器则根据 ",n.jsx(e.code,{children:"immediate"})," 参数决定执行时机：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"immediate=true"}),"：立即执行，然后设置定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"immediate=false"}),"：设置定时器，duration 后执行"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用闭包保存 ",n.jsx(e.code,{children:"timeout"})," 定时器引用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"if (timeout) return"}),' 实现"冷却中跳过"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"immediate"})," 模式使用 ",n.jsx(e.code,{children:"!timeout"})," 判断是否首次调用"]}),`
`]})]})}function a(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{a as default};
