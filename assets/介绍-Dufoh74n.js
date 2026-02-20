import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onwindowresize",children:"onWindowResize"}),`
`,n.jsx(e.p,{children:"监听窗口尺寸变化。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onWindowResize"})," 用于监听浏览器窗口尺寸变化，支持节流优化。"]}),`
`,n.jsx(e.p,{children:"常用场景："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"响应式布局调整"}),`
`,n.jsx(e.li,{children:"图表/Canvas 重绘"}),`
`,n.jsx(e.li,{children:"虚拟列表尺寸更新"}),`
`,n.jsx(e.li,{children:"移动端横竖屏切换"}),`
`]}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import onWindowResize from '@justichentai/element-utils/onWindowResize'

const stop = onWindowResize(({ width, height }) => {
  console.log('窗口尺寸:', width, 'x', height)
})

// 带节流
const stop2 = onWindowResize(
  ({ width, height }) => console.log(width, height),
  { throttle: 100 }
)
`})}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(params: WindowResizeParams) => void"})}),n.jsx("td",{children:"尺寸变化回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.throttle"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"节流时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.immediate"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否立即执行一次"})]})]})]}),`
`,n.jsx(e.h2,{id:"windowresizeparams-类型",children:"WindowResizeParams 类型"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface WindowResizeParams {
  width: number   // window.innerWidth
  height: number  // window.innerHeight
}
`})})]})}function o(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{o as default};
