import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import getScrollPosition from '../../../packages/element-utils/src/getScrollPosition'

const windowScrollDemo = () => {
  const position = getScrollPosition(window)

  action('getScrollPosition(window)')(position)
  action('Window 滚动位置')(\`x: \${position.x}, y: \${position.y}\`)
}

export default windowScrollDemo
`,c=`import { action } from 'storybook/actions'
import getScrollPosition from '../../../packages/element-utils/src/getScrollPosition'

const elementScrollDemo = () => {
  const container = document.getElementById('scroll-container') as HTMLElement
  const position = getScrollPosition(container)

  action('getScrollPosition(Element)')(position)
  action('Element 滚动位置')(\`x: \${position.x}, y: \${position.y}\`)
}

export default elementScrollDemo
`;function o(l){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getscrollposition",children:"getScrollPosition"}),`
`,n.jsx(e.p,{children:"获取目标元素的滚动位置，支持 Window 和 Element 两种滚动容器。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getScrollPosition"})," 用于获取滚动容器的当前滚动位置，返回包含水平（x）和垂直（y）坐标的对象。"]}),`
`,n.jsx(e.p,{children:"在 Web 开发中，获取滚动位置是常见需求，但 Window 和 Element 获取滚动位置的 API 不同："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Window"}),": 使用 ",n.jsx(e.code,{children:"scrollX/scrollY"})," 或 ",n.jsx(e.code,{children:"pageXOffset/pageYOffset"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Element"}),": 使用 ",n.jsx(e.code,{children:"scrollLeft/scrollTop"})]}),`
`]}),`
`,n.jsx(e.p,{children:"此函数统一了这两种场景的 API，提供一致的返回格式。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"实现滚动监听功能"}),`
`,n.jsx(e.li,{children:"记录和恢复滚动位置"}),`
`,n.jsx(e.li,{children:"实现滚动相关的动画效果"}),`
`,n.jsx(e.li,{children:"判断元素是否滚动到特定位置"}),`
`]}),`
`,n.jsx(e.h2,{id:"获取-window-滚动位置",children:"获取 Window 滚动位置"}),`
`,n.jsx(e.p,{children:"获取整个页面的滚动位置，通常用于监听页面级滚动。"}),`
`,n.jsx(i,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"获取-element-滚动位置",children:"获取 Element 滚动位置"}),`
`,n.jsx(e.p,{children:"获取可滚动元素的滚动位置，用于监听局部滚动容器。"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollTarget"})}),n.jsx("td",{children:"滚动目标，可以是 Window 或 Element"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollPosition"})}),n.jsx("td",{children:"滚动位置对象，包含 x（水平）和 y（垂直）坐标"})]})]})]}),`
`,n.jsx(e.h3,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`/** 滚动位置 */
interface ScrollPosition {
  /** 水平滚动位置 */
  x: number
  /** 垂直滚动位置 */
  y: number
}

/** 滚动目标类型 */
type ScrollTarget = Window | Element
`})}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件职责"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": 导出 ",n.jsx(e.code,{children:"getScrollPosition"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),": 定义 ",n.jsx(e.code,{children:"ScrollPosition"})," 和 ",n.jsx(e.code,{children:"ScrollTarget"})," 类型"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"isWindow"})," 判断目标是否为 Window 对象"]}),`
`,n.jsxs(e.li,{children:["如果是 Window，使用 ",n.jsx(e.code,{children:"scrollX/scrollY"})," 或兼容性写法 ",n.jsx(e.code,{children:"pageXOffset/pageYOffset"})]}),`
`,n.jsxs(e.li,{children:["如果是 Element，使用 ",n.jsx(e.code,{children:"scrollLeft/scrollTop"})]}),`
`,n.jsxs(e.li,{children:["返回统一格式的 ",n.jsx(e.code,{children:"{ x, y }"})," 对象"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["复用 ",n.jsx(e.code,{children:"@justichentai/js-utils/isWindow"})," 进行类型判断"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"||"})," 运算符提供 ",n.jsx(e.code,{children:"pageXOffset/pageYOffset"})," 兼容性支持（针对旧版浏览器）"]}),`
`,n.jsx(e.li,{children:"统一返回格式，简化调用方代码"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"数据流向"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`ScrollTarget → isWindow() 判断
                   ↓
        Window: scrollX/scrollY
        Element: scrollLeft/scrollTop
                   ↓
            ScrollPosition { x, y }
`})})]})}function m(l={}){const{wrapper:e}={...s(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(o,{...l})}):o(l)}export{m as default};
