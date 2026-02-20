import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onclickoutside",children:"onClickOutside"}),`
`,n.jsx(e.p,{children:"监听元素外部的点击事件。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onClickOutside"})," 用于检测用户是否点击了指定元素的外部区域。这是实现下拉菜单、模态框等组件自动关闭功能的常用工具。"]}),`
`,n.jsx(e.p,{children:"常用场景："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"下拉菜单点击外部关闭"}),`
`,n.jsx(e.li,{children:"模态框/弹窗点击外部关闭"}),`
`,n.jsx(e.li,{children:"自定义 Select 组件"}),`
`,n.jsx(e.li,{children:"Popover/Tooltip 组件"}),`
`]}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import onClickOutside from '@justichentai/element-utils/onClickOutside'

const dropdown = document.querySelector('.dropdown')

const stop = onClickOutside(dropdown, (event) => {
  console.log('点击了下拉框外部')
  // 关闭下拉框
})

// 停止监听
stop()
`})}),`
`,n.jsx(e.h2,{id:"忽略特定元素",children:"忽略特定元素"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const stop = onClickOutside(
  modal,
  () => closeModal(),
  { ignore: ['.modal-trigger', toggleButton] }
)
`})}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"Element | Element[] | null"})}),n.jsx("td",{children:"目标元素或元素数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(event: MouseEvent) => void"})}),n.jsx("td",{children:"点击外部时的回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.ignore"}),n.jsx("td",{children:n.jsx("code",{children:"(string | Element)[]"})}),n.jsx("td",{children:"忽略的元素（支持选择器字符串）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.capture"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否在捕获阶段触发，默认 true"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回清理函数 ",n.jsx(e.code,{children:"() => void"}),"。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"使用 composedPath"}),": 获取事件传播路径，准确判断点击位置"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"支持 ignore 选项"}),": 通过选择器或元素引用忽略特定元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"默认使用捕获阶段"}),": 确保在冒泡前处理事件"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
