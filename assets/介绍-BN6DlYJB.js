import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const basicDemo = () => {
  // 监听窗口 resize 事件
  const stopResize = createEventListener(window, 'resize', (e) => {
    action('窗口尺寸变化')({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  action('监听已启动')('调整浏览器窗口大小查看效果，5秒后自动停止')

  // 5秒后停止监听
  setTimeout(() => {
    stopResize()
    action('监听已停止')('resize 事件监听已移除')
  }, 5000)
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const passiveDemo = () => {
  // 使用 passive 选项优化滚动性能
  const stopScroll = createEventListener(
    document,
    'scroll',
    () => {
      action('滚动事件（passive）')({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      })
    },
    { passive: true }
  )

  action('passive 滚动监听已启动')('滚动页面查看效果，5秒后自动停止')

  setTimeout(() => {
    stopScroll()
    action('监听已停止')('scroll 事件监听已移除')
  }, 5000)
}

export default passiveDemo
`,l=`import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const onceDemo = () => {
  // 使用 once 选项，事件只触发一次
  const stopClick = createEventListener(
    document,
    'click',
    (e) => {
      action('点击事件（once）')({
        x: (e as MouseEvent).clientX,
        y: (e as MouseEvent).clientY,
        message: '此事件只触发一次',
      })
    },
    { once: true }
  )

  action('once 点击监听已启动')('点击页面任意位置，事件只会触发一次')
}

export default onceDemo
`,o=`import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const keyboardDemo = () => {
  // 监听键盘事件
  const stopKeydown = createEventListener(document, 'keydown', (e) => {
    const event = e as KeyboardEvent
    action('键盘按下')({
      key: event.key,
      code: event.code,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      metaKey: event.metaKey,
    })
  })

  action('键盘监听已启动')('按下任意键查看效果，5秒后自动停止')

  setTimeout(() => {
    stopKeydown()
    action('监听已停止')('keydown 事件监听已移除')
  }, 5000)
}

export default keyboardDemo
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createeventlistener",children:"createEventListener"}),`
`,e.jsx(n.p,{children:"创建事件监听器，封装原生 addEventListener/removeEventListener，返回清理函数便于管理事件生命周期。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["createEventListener 是一个事件监听封装函数，核心作用是：",e.jsx(n.strong,{children:"简化事件监听的添加和移除，通过返回清理函数实现声明式的事件管理"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"addEventListener/removeEventListener：原生事件监听 API"}),`
`,e.jsx(n.li,{children:"EventTarget 接口：支持 window、document、Element 等"}),`
`,e.jsx(n.li,{children:"AddEventListenerOptions：capture、passive、once 等选项"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"与直接使用 addEventListener 的区别"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"原生方式需要保存 handler 引用才能 removeEventListener"}),`
`,e.jsx(n.li,{children:"本函数返回清理函数，无需保存 handler 引用"}),`
`,e.jsx(n.li,{children:"自动处理非浏览器环境，返回空函数"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React/Vue 组件中监听全局事件"}),`
`,e.jsx(n.li,{children:"临时事件监听（如拖拽、手势）"}),`
`,e.jsx(n.li,{children:"需要在特定时机移除的事件"}),`
`,e.jsx(n.li,{children:"SSR 环境下的安全事件监听"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"API 简洁，返回清理函数"}),`
`,e.jsx(n.li,{children:"自动处理非浏览器环境"}),`
`,e.jsx(n.li,{children:"TypeScript 类型安全"}),`
`,e.jsx(n.li,{children:"支持所有原生事件选项"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(n.p,{children:"监听窗口 resize 事件，返回的清理函数可在任意时刻调用以移除监听。"}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"passive-优化滚动",children:"passive 优化滚动"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"passive: true"})," 选项可以提升滚动性能，告诉浏览器回调中不会调用 ",e.jsx(n.code,{children:"preventDefault()"}),"。"]}),`
`,e.jsx(t,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"一次性监听",children:"一次性监听"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"once: true"})," 选项，事件只会触发一次后自动移除。"]}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"键盘事件监听",children:"键盘事件监听"}),`
`,e.jsx(n.p,{children:"监听键盘事件，获取按键信息和修饰键状态。"}),`
`,e.jsx(t,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"EventTarget | null"})}),e.jsx("td",{children:"事件目标（window、document、Element 等）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"event"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"事件名称（如 'click'、'resize'、'scroll'）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"handler"}),e.jsx("td",{children:e.jsx("code",{children:"(event: Event) => void"})}),e.jsx("td",{children:"事件处理函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"boolean | AddEventListenerOptions"})}),e.jsx("td",{children:"可选，事件选项（capture、passive、once 等）"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CleanupFn"})}),e.jsx("td",{children:"清理函数，调用后移除事件监听"})]})})]}),`
`,e.jsx(n.h3,{id:"addeventlisteneroptions-说明",children:"AddEventListenerOptions 说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"选项"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"capture"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否在捕获阶段触发"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"passive"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"表示回调不会调用 preventDefault()，可提升滚动性能"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"once"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"事件只触发一次后自动移除"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"signal"}),e.jsx("td",{children:e.jsx("code",{children:"AbortSignal"})}),e.jsx("td",{children:"AbortController 的 signal，用于批量移除监听"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 主函数实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," - 类型定义（CleanupFn、EventListenerOptions）"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["检查是否在浏览器环境（调用 ",e.jsx(n.code,{children:"isBrowser()"}),"）"]}),`
`,e.jsx(n.li,{children:"检查 target 是否为 null"}),`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"target.addEventListener()"})," 添加监听"]}),`
`,e.jsxs(n.li,{children:["返回清理函数，内部调用 ",e.jsx(n.code,{children:"removeEventListener()"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"isBrowser()"})," 判断环境，非浏览器返回空函数 ",e.jsx(n.code,{children:"() => {}"})]}),`
`,e.jsxs(n.li,{children:["泛型 ",e.jsx(n.code,{children:"<K extends keyof WindowEventMap>"})," 提供类型推断"]}),`
`,e.jsxs(n.li,{children:["handler 需要类型断言为 ",e.jsx(n.code,{children:"EventListener"})," 以兼容原生 API"]}),`
`,e.jsx(n.li,{children:"清理函数闭包捕获 target、event、handler、options"}),`
`]})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
