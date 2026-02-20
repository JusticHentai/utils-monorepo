import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import supportPassiveEvents from '../../../packages/element-utils/src/supportPassiveEvents'

const basicDemo = () => {
  const result = supportPassiveEvents()

  action('supportPassiveEvents 检测结果')({
    supported: result,
    message: result
      ? 'Passive Events 可用，可以提升滚动性能'
      : 'Passive Events 不可用，使用传统事件监听',
    usage: result
      ? "element.addEventListener('touchstart', handler, { passive: true })"
      : "element.addEventListener('touchstart', handler, false)",
  })
}

export default basicDemo
`;function t(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"supportpassiveevents",children:"supportPassiveEvents"}),`
`,e.jsx(s.p,{children:"检测浏览器是否支持被动事件监听器（Passive Event Listeners）。Passive 选项可以显著提升滚动性能。"}),`
`,e.jsx(s.h2,{id:"什么是-passive-event-listeners",children:"什么是 Passive Event Listeners？"}),`
`,e.jsxs(s.p,{children:["当使用 ",e.jsx(s.code,{children:"addEventListener"})," 时，可以传入 ",e.jsx(s.code,{children:"{ passive: true }"})," 选项，告诉浏览器：",e.jsxs(s.strong,{children:["这个事件处理器不会调用 ",e.jsx(s.code,{children:"preventDefault()"})]}),"。"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    没有 Passive 时                           │
├─────────────────────────────────────────────────────────────┤
│  用户触摸滚动 → 浏览器等待 JS 执行 → 才能开始滚动            │
│                    ↑                                         │
│            浏览器不知道你会不会调用 preventDefault()          │
│            所以必须等待，造成滚动卡顿                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    使用 Passive 后                           │
├─────────────────────────────────────────────────────────────┤
│  用户触摸滚动 → 浏览器立即开始滚动 + JS 并行执行             │
│                    ↑                                         │
│            浏览器知道不会 preventDefault()，无需等待          │
│            滚动更流畅                                        │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(s.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(s.p,{children:"检测当前浏览器是否支持 passive 事件监听选项。"}),`
`,e.jsx(d,{language:"typescript",children:i}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 passive 事件监听选项"})]})})]}),`
`,e.jsx(s.h2,{id:"性能对比",children:"性能对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"无 Passive"}),e.jsx("th",{children:"有 Passive"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"触摸滚动响应"}),e.jsx("td",{children:"延迟 100-300ms"}),e.jsx("td",{children:"立即响应"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"滚动帧率"}),e.jsx("td",{children:"可能掉帧"}),e.jsx("td",{children:"稳定 60fps"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"用户体验"}),e.jsx("td",{children:"卡顿感"}),e.jsx("td",{children:"流畅"})]})]})]}),`
`,e.jsx(s.h2,{id:"实际使用示例",children:"实际使用示例"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import supportPassiveEvents from '@justichentai/element-utils/supportPassiveEvents'

const passiveSupported = supportPassiveEvents()
const options = passiveSupported ? { passive: true } : false

document.addEventListener('touchstart', onTouchStart, options)
document.addEventListener('touchmove', onTouchMove, options)
document.addEventListener('wheel', onWheel, options)
`})}),`
`,e.jsx(s.h2,{id:"适用的事件类型",children:"适用的事件类型"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"事件"}),e.jsx("th",{children:"推荐使用 Passive"}),e.jsx("th",{children:"原因"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"touchstart"}),e.jsx("td",{children:"✅ 是"}),e.jsx("td",{children:"提升移动端滚动性能"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"touchmove"}),e.jsx("td",{children:"✅ 是"}),e.jsx("td",{children:"提升移动端滚动性能"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"wheel"}),e.jsx("td",{children:"✅ 是"}),e.jsx("td",{children:"提升鼠标滚轮性能"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"scroll"}),e.jsx("td",{children:"✅ 是"}),e.jsx("td",{children:"滚动事件本身不可取消"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"click"}),e.jsx("td",{children:"❌ 否"}),e.jsx("td",{children:"可能需要 preventDefault"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"submit"}),e.jsx("td",{children:"❌ 否"}),e.jsx("td",{children:"可能需要阻止表单提交"})]})]})]}),`
`,e.jsx(s.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"51+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"49+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"10+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"16+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"❌ 不支持"})]})]})]}),`
`,e.jsx(s.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const supportPassiveEvents = (): boolean => {
  let supportsPassive = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassive = true
        return true
      },
    })
    window.addEventListener('testPassive', null as any, opts)
    window.removeEventListener('testPassive', null as any, opts)
  } catch {
    supportsPassive = false
  }
  return supportsPassive
}
`})}),`
`,e.jsxs(s.p,{children:["通过创建带有 getter 的选项对象，如果浏览器访问了 ",e.jsx(s.code,{children:"passive"})," 属性，说明支持该特性。"]}),`
`,e.jsx(s.h2,{id:"注意事项",children:"注意事项"}),`
`,e.jsxs(s.p,{children:["⚠️ ",e.jsxs(s.strong,{children:["在 passive 监听器中调用 ",e.jsx(s.code,{children:"preventDefault()"})," 会被忽略并在控制台输出警告"]}),"："]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Unable to preventDefault inside passive event listener invocation.
`})}),`
`,e.jsxs(s.p,{children:["如果你确实需要阻止默认行为，不要使用 ",e.jsx(s.code,{children:"{ passive: true }"}),"。"]})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default};
