import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import debounce from '../../../packages/element-utils/src/debounce'

let fn: (() => void) | null = null

export const initBasicDemo = () => {
  fn = debounce({
    cb: () => action('防抖回调执行')(),
    duration: 1000,
  })
  action('初始化防抖函数（延迟执行）')()
}

export const runBasicDemo = () => {
  if (!fn) {
    action('请先初始化')()
    return
  }
  fn()
  action('触发防抖函数')()
}
`,r=`import { action } from 'storybook/actions'
import debounce from '../../../packages/element-utils/src/debounce'

let fn: (() => void) | null = null

export const initImmediateDemo = () => {
  fn = debounce({
    cb: () => action('防抖回调执行')(),
    duration: 1000,
    immediate: true,
  })
  action('初始化防抖函数（立即执行）')()
}

export const runImmediateDemo = () => {
  if (!fn) {
    action('请先初始化')()
    return
  }
  fn()
  action('触发防抖函数')()
}
`;function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"debounce",children:"debounce"}),`
`,n.jsx(i.p,{children:"防抖函数，用于限制函数的执行频率，在连续触发时只执行最后一次。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:["防抖（debounce）是一种函数调用控制策略，核心思想是：",n.jsx(i.strong,{children:"在事件被连续触发时，只有当触发间隔超过指定时间后，才执行函数"}),"。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"闭包：保存定时器引用和执行状态"}),`
`,n.jsx(i.li,{children:"setTimeout/clearTimeout：实现延迟执行和重置计时"}),`
`,n.jsx(i.li,{children:"高阶函数：接收函数返回函数"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"搜索框输入：用户停止输入后才发起搜索请求"}),`
`,n.jsx(i.li,{children:"窗口 resize：调整完成后才重新计算布局"}),`
`,n.jsx(i.li,{children:"表单验证：输入停止后才进行校验"}),`
`,n.jsx(i.li,{children:"按钮点击：防止重复提交"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"优势"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"减少不必要的函数调用，节省计算资源"}),`
`,n.jsx(i.li,{children:"降低 API 请求频率，减轻服务器压力"}),`
`,n.jsx(i.li,{children:"提升用户体验，避免页面频繁刷新"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"立即执行示例",children:"立即执行示例"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.h3,{id:"options",children:"options"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Options"})]}),`
`,n.jsx(i.li,{children:"描述：配置对象"}),`
`]}),`
`,n.jsx(i.h4,{id:"optionscb",children:"options.cb"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(...params: any[]) => any"})]}),`
`,n.jsx(i.li,{children:"描述：需要防抖的回调函数"}),`
`]}),`
`,n.jsx(i.h4,{id:"optionsduration",children:"options.duration"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"number"})]}),`
`,n.jsx(i.li,{children:"描述：防抖延迟时间（毫秒）"}),`
`]}),`
`,n.jsx(i.h4,{id:"optionsimmediate",children:"options.immediate"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"boolean"})]}),`
`,n.jsxs(i.li,{children:["描述：是否立即执行",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"true"}),"：立即执行回调，然后开始计时，duration 内执行会重新计时"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"false"}),"：不会立即执行回调，开始计时，duration 内执行会重新计时"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(...params: any[]) => void"})]}),`
`,n.jsx(i.li,{children:"描述：返回防抖后的函数"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(i.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"index.ts"})," - 唯一源文件，包含 debounce 函数实现和类型定义"]}),`
`]}),`
`,n.jsx(i.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["调用 ",n.jsx(i.code,{children:"debounce({ cb, duration, immediate })"})," 创建防抖函数"]}),`
`,n.jsx(i.li,{children:"返回的函数被调用时，清除之前的定时器"}),`
`,n.jsxs(i.li,{children:["根据 ",n.jsx(i.code,{children:"immediate"})," 参数决定执行时机：",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"immediate=true"}),"：首次调用立即执行，后续调用重置计时"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"immediate=false"}),"：等待 duration 后执行最后一次调用"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["使用闭包保存 ",n.jsx(i.code,{children:"timeout"}),"（定时器）、",n.jsx(i.code,{children:"canExecute"}),"（是否可执行）、",n.jsx(i.code,{children:"pendingParams"}),"（待执行参数）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"clearTimeout"}),' 清除前一个定时器实现"重新计时"']}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"immediate"})," 模式使用 ",n.jsx(i.code,{children:"canExecute"})," 标记控制首次执行"]}),`
`]})]})}function u(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
