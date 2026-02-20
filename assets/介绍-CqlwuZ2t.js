import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import loadImage from '../../../packages/element-utils/src/loadImage'

const basicDemo = async () => {
  const [img, err] = await loadImage('https://via.placeholder.com/150')

  if (err) {
    action('加载图片成功')({ success: false, error: err.message })
    return
  }

  action('加载图片成功')({
    success: true,
    width: img?.width,
    height: img?.height,
  })
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import loadImage from '../../../packages/element-utils/src/loadImage'

const errorDemo = async () => {
  const [img, err] = await loadImage('https://invalid-url.png')

  if (err) {
    action('加载图片失败')({ success: false, error: err.message })
    return
  }

  action('加载图片失败')({
    success: true,
    width: img?.width,
    height: img?.height,
  })
}

export default errorDemo
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"loadimage",children:"loadImage"}),`
`,n.jsx(e.p,{children:"异步加载图片并返回加载结果。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["loadImage 是一个图片预加载函数，核心作用是：",n.jsx(e.strong,{children:"异步加载图片，返回加载结果（成功或失败）"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"new Image()"}),"：创建 HTMLImageElement"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onload/onerror"})," 事件：监听图片加载状态"]}),`
`,n.jsx(e.li,{children:"Promise：将回调式 API 包装为 Promise"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"图片预加载：提前加载图片避免显示时闪烁"}),`
`,n.jsx(e.li,{children:"懒加载：进入视口后异步加载图片"}),`
`,n.jsx(e.li,{children:"图片校验：检测图片 URL 是否有效"}),`
`,n.jsx(e.li,{children:"Canvas 绑定：在绑定到 Canvas 前等待加载完成"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Promise 形式，支持 async/await"}),`
`,n.jsxs(e.li,{children:["返回元组 ",n.jsx(e.code,{children:"[data, error]"})," 形式，便于错误处理"]}),`
`,n.jsx(e.li,{children:"成功时可获取完整的 HTMLImageElement 对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"加载成功",children:"加载成功"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"加载失败",children:"加载失败"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"url"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"图片地址"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<[HTMLImageElement | undefined, Error | undefined]>"})]}),`
`,n.jsxs(e.li,{children:["描述：元组形式，",n.jsx(e.code,{children:"[image, error]"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["成功：",n.jsx(e.code,{children:"[HTMLImageElement, undefined]"})]}),`
`,n.jsxs(e.li,{children:["失败：",n.jsx(e.code,{children:"[undefined, Error]"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 loadImage 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["创建 ",n.jsx(e.code,{children:"new Image()"})," 对象"]}),`
`,n.jsxs(e.li,{children:["设置 ",n.jsx(e.code,{children:"onload"})," 回调：resolve ",n.jsx(e.code,{children:"[image, undefined]"})]}),`
`,n.jsxs(e.li,{children:["设置 ",n.jsx(e.code,{children:"onerror"})," 回调：resolve ",n.jsx(e.code,{children:"[undefined, error]"})]}),`
`,n.jsxs(e.li,{children:["设置 ",n.jsx(e.code,{children:"img.src = url"})," 触发加载"]}),`
`,n.jsx(e.li,{children:"返回 Promise"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"new Image()"})," 创建离屏图片元素"]}),`
`,n.jsx(e.li,{children:"设置 src 后浏览器自动发起请求"}),`
`,n.jsx(e.li,{children:"返回元组而非 reject，调用方无需 try/catch"}),`
`]})]})}function m(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
