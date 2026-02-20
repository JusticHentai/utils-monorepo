import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'

export const cleanupDemo = () => {
  action('清理完成')()
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createlazyloadobserver",children:"createLazyLoadObserver"}),`
`,n.jsx(e.p,{children:"创建懒加载观察器。批量监听多个元素的可见性，当元素进入视口时执行加载函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createLazyLoadObserver"})," 是用于批量懒加载的工具函数，每个元素只会加载一次，加载后自动停止观察该元素。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"IntersectionObserver API：浏览器原生的元素可见性检测"}),`
`,n.jsx(e.li,{children:"WeakSet：使用弱引用集合记录已加载元素"}),`
`,n.jsx(e.li,{children:"批量观察：一个观察器监听多个元素"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"图片懒加载：大量图片只在进入视口时加载"}),`
`,n.jsx(e.li,{children:"列表项懒渲染：长列表中的项目按需渲染"}),`
`,n.jsx(e.li,{children:"广告位懒加载：广告内容延迟加载"}),`
`,n.jsx(e.li,{children:"组件懒初始化：复杂组件延迟初始化"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"批量处理，一个观察器管理多个元素"}),`
`,n.jsx(e.li,{children:"自动去重，每个元素只加载一次"}),`
`,n.jsx(e.li,{children:"支持提前加载（rootMargin）"}),`
`,n.jsx(e.li,{children:"统一清理函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"elements"}),n.jsx("td",{children:n.jsx("code",{children:"Element[]"})}),n.jsx("td",{children:"要懒加载的元素数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"loadFn"}),n.jsx("td",{children:n.jsx("code",{children:"(element: Element) => void"})}),n.jsx("td",{children:"加载函数，接收元素作为参数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"LazyLoadObserverOptions"})}),n.jsx("td",{children:"可选，观察器配置选项"})]})]})]}),`
`,n.jsx(e.h3,{id:"lazyloadobserveroptions",children:"LazyLoadObserverOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"root"}),n.jsx("td",{children:n.jsx("code",{children:"Element | Document | null"})}),n.jsx("td",{children:"用作视口的元素，默认为浏览器视口"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"rootMargin"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:'根元素的外边距，可实现提前加载，如 "200px"'})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"threshold"}),n.jsx("td",{children:n.jsx("code",{children:"number | number[]"})}),n.jsx("td",{children:"触发回调的可见比例阈值"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止所有观察"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 主函数实现"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["创建 ",n.jsx(e.code,{children:"WeakSet"})," 记录已加载的元素"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createIntersectionObserver"})," 观察所有元素"]}),`
`,n.jsx(e.li,{children:"元素进入视口时检查是否已加载"}),`
`,n.jsx(e.li,{children:"未加载则执行加载函数，标记为已加载，并取消对该元素的观察"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"WeakSet"})," 避免内存泄漏"]}),`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"observer.unobserve(target)"})," 单独停止已加载元素的观察"]}),`
`,n.jsxs(e.li,{children:["统一的 ",n.jsx(e.code,{children:"stop"})," 函数用于清理所有观察"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{a as default};
