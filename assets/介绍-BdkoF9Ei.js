import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import visibility from '../../../packages/element-utils/src/visibility'

let removeListener: (() => void) | null = null

const initBasicDemo = () => {
  // 先移除旧的监听器，避免重复监听
  if (removeListener) {
    removeListener()
  }

  removeListener = visibility({
    visible: () => {
      action('可见性回调')('页面可见')
    },
    hidden: () => {
      action('可见性回调')('页面隐藏')
    },
  })

  action('添加可见性监听')('已添加可见性监听')
}

const removeBasicDemo = () => {
  if (removeListener) {
    removeListener()
    removeListener = null
    action('移除可见性监听')('已移除可见性监听')
  }
}

export { initBasicDemo, removeBasicDemo }
`,t=`import { action } from 'storybook/actions'
import visibility from '../../../packages/element-utils/src/visibility'

const onceDemo = () => {
  // once: true - 只触发一次，触发后自动移除监听
  // safariCompat: true - 兼容 Safari 的 pagehide 事件
  visibility({
    hidden: () => {
      action('一次性回调')('页面隐藏 - 只触发一次')
    },
    once: true,
    safariCompat: true,
  })

  action('添加一次性监听')('已添加，切换标签页后自动移除')
}

export default onceDemo
`;function r(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"visibility",children:"visibility"}),`
`,n.jsx(i.p,{children:"监听页面可见性变化（visibilitychange）事件。"}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["监听页面的可见性变化，当页面变为可见或隐藏时触发对应的回调函数。底层使用 ",n.jsx(i.code,{children:"document.visibilityState"})," 判断当前状态。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"一次性监听safari-兼容",children:"一次性监听（Safari 兼容）"}),`
`,n.jsxs(i.p,{children:["设置 ",n.jsx(i.code,{children:"once: true"})," 后回调只触发一次并自动移除监听。设置 ",n.jsx(i.code,{children:"safariCompat: true"})," 会额外监听 ",n.jsx(i.code,{children:"pagehide"})," 事件，解决 Safari 不触发 ",n.jsx(i.code,{children:"visibilitychange"})," 的问题。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"options.visible"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"页面变为可见时触发的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.hidden"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"页面变为隐藏时触发的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.once"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否只执行一次，执行后自动移除监听"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.safariCompat"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否兼容 Safari 的 pagehide 事件"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"移除事件监听的清理函数"})]})})]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"index.ts"}),": 核心实现，监听 ",n.jsx(i.code,{children:"visibilitychange"})," 事件，通过 ",n.jsx(i.code,{children:"document.visibilityState"})," 判断页面状态。支持 ",n.jsx(i.code,{children:"once"})," 模式自动清理，支持 ",n.jsx(i.code,{children:"safariCompat"})," 模式额外监听 ",n.jsx(i.code,{children:"pagehide"})," 事件解决 Safari 兼容问题。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"interface.ts"}),": 定义 ",n.jsx(i.code,{children:"VisibilityOptions"})," 接口，包含 ",n.jsx(i.code,{children:"visible"}),"、",n.jsx(i.code,{children:"hidden"}),"、",n.jsx(i.code,{children:"once"}),"、",n.jsx(i.code,{children:"safariCompat"})," 四个可选配置项。"]}),`
`]})]})}function m(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{m as default};
