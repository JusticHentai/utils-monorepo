import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import supportMutationObserver from '../../../packages/element-utils/src/supportMutationObserver'

const basicDemo = () => {
  const result = supportMutationObserver()

  action('supportMutationObserver 检测结果')({
    supported: result,
    message: result
      ? 'MutationObserver 可用，可以监听 DOM 变化'
      : 'MutationObserver 不可用',
  })
}

export default basicDemo
`;function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supportmutationobserver",children:"supportMutationObserver"}),`
`,e.jsx(n.p,{children:"检测浏览器是否支持 MutationObserver API。MutationObserver 用于监听 DOM 树的变化。"}),`
`,e.jsx(n.h2,{id:"什么是-mutationobserver",children:"什么是 MutationObserver？"}),`
`,e.jsx(n.p,{children:"MutationObserver 是一个浏览器原生 API，用于异步观察 DOM 树的变化："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    DOM 变化监听                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [DOM 变化事件]                                             │
│       ↓                                                     │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│   │ 子节点增删   │    │ 属性变化    │    │ 文本内容变化 │    │
│   │ childList  │    │ attributes │    │ characterData│    │
│   └─────────────┘    └─────────────┘    └─────────────┘    │
│       ↓                   ↓                   ↓            │
│                   MutationObserver                         │
│                         ↓                                  │
│                   回调函数执行                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(n.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(n.p,{children:"检测当前浏览器是否支持 MutationObserver API。"}),`
`,e.jsx(d,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 MutationObserver API"})]})})]}),`
`,e.jsx(n.h2,{id:"主要使用场景",children:"主要使用场景"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"DOM 监控"}),e.jsx("td",{children:"监听页面元素的动态变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"第三方库集成"}),e.jsx("td",{children:"响应其他库对 DOM 的修改"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"表单验证"}),e.jsx("td",{children:"监听表单元素的属性变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"自动化测试"}),e.jsx("td",{children:"等待 DOM 变化完成"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"编辑器实现"}),e.jsx("td",{children:"追踪用户的编辑操作"})]})]})]}),`
`,e.jsx(n.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 创建观察器
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log('变化类型:', mutation.type)
    console.log('目标元素:', mutation.target)
    
    if (mutation.type === 'childList') {
      console.log('新增节点:', mutation.addedNodes)
      console.log('删除节点:', mutation.removedNodes)
    }
    
    if (mutation.type === 'attributes') {
      console.log('变化属性:', mutation.attributeName)
      console.log('旧值:', mutation.oldValue)
    }
  })
})

// 开始观察
observer.observe(targetNode, {
  childList: true,      // 监听子节点增删
  attributes: true,     // 监听属性变化
  characterData: true,  // 监听文本内容变化
  subtree: true,        // 监听后代节点
  attributeOldValue: true  // 记录属性旧值
})

// 停止观察
observer.disconnect()
`})}),`
`,e.jsx(n.h2,{id:"监听配置选项",children:"监听配置选项"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"选项"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"childList"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"监听子节点的增加或删除"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"attributes"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"监听元素属性的变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"characterData"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"监听文本节点内容的变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"subtree"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"监听所有后代节点"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"attributeOldValue"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"记录属性变化前的旧值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"characterDataOldValue"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"记录文本变化前的旧值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"attributeFilter"}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"只监听指定的属性"})]})]})]}),`
`,e.jsx(n.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"26+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"14+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"7+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"12+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"11"})]})]})]}),`
`,e.jsx(n.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportMutationObserver = (): boolean => {
  return isBrowser() && 'MutationObserver' in window
}
`})}),`
`,e.jsxs(n.p,{children:["通过检测 ",e.jsx(n.code,{children:"window.MutationObserver"})," 是否存在来判断浏览器支持情况。"]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
