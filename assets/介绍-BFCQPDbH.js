import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import getWindowSize from '../../../packages/element-utils/src/getWindowSize'

const basicDemo = () => {
  const size = getWindowSize()

  action('窗口尺寸')({
    width: size.width,
    height: size.height,
    description: \`当前窗口宽度 \${size.width}px，高度 \${size.height}px\`,
  })
}

export default basicDemo
`;function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"getwindowsize",children:"getWindowSize"}),`
`,n.jsx(i.p,{children:"获取当前浏览器窗口的尺寸。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"getWindowSize"})," 是一个简单的工具函数，用于获取当前浏览器窗口的宽度和高度。它封装了 ",n.jsx(i.code,{children:"window.innerWidth"})," 和 ",n.jsx(i.code,{children:"window.innerHeight"}),"，返回一个包含 ",n.jsx(i.code,{children:"width"})," 和 ",n.jsx(i.code,{children:"height"})," 的对象。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"核心特点"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"纯函数，无副作用"}),`
`,n.jsx(i.li,{children:"返回值类型明确"}),`
`,n.jsxs(i.li,{children:["可与 ",n.jsx(i.code,{children:"onWindowResize"})," 配合使用监听窗口变化"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"响应式布局判断"}),`
`,n.jsx(i.li,{children:"根据窗口大小调整组件显示"}),`
`,n.jsx(i.li,{children:"计算元素相对于窗口的位置"}),`
`,n.jsx(i.li,{children:"判断移动端/桌面端视图"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(i.p,{children:"获取当前窗口尺寸："}),`
`,n.jsx(r,{language:"typescript",children:h}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.p,{children:"该函数无需传入参数。"}),`
`,n.jsx(i.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"width"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"窗口宽度（像素）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"height"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"窗口高度（像素）"})]})]})]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(i.h3,{id:"文件职责",children:"文件职责"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"index.ts"}),"：主入口文件，导出 ",n.jsx(i.code,{children:"getWindowSize"})," 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"interface.ts"}),"：类型定义文件，定义 ",n.jsx(i.code,{children:"WindowSize"})," 接口"]}),`
`]}),`
`,n.jsx(i.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["读取 ",n.jsx(i.code,{children:"window.innerWidth"})," 获取窗口宽度"]}),`
`,n.jsxs(i.li,{children:["读取 ",n.jsx(i.code,{children:"window.innerHeight"})," 获取窗口高度"]}),`
`,n.jsx(i.li,{children:"返回包含宽高的对象"}),`
`]}),`
`,n.jsx(i.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"window.innerWidth"}),"：返回浏览器窗口视口（viewport）的宽度，包括垂直滚动条（如果存在）"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"window.innerHeight"}),"：返回浏览器窗口视口的高度，包括水平滚动条（如果存在）"]}),`
`]}),`
`,n.jsx(i.h3,{id:"与其他尺寸-api-的区别",children:"与其他尺寸 API 的区别"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"API"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"window.innerWidth/Height"})}),n.jsx("td",{children:"视口尺寸（本工具使用）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"window.outerWidth/Height"})}),n.jsx("td",{children:"整个浏览器窗口尺寸（包括工具栏、边框等）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"document.documentElement.clientWidth/Height"})}),n.jsx("td",{children:"视口尺寸（不包括滚动条）"})]})]})]})]})}function w(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{w as default};
