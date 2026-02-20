import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getDistance from '../../../packages/js-utils/src/getDistance'

const normalDemo = () => {
  const res = getDistance({ x: 0, y: 0 }, { x: 3, y: 4 })
  action('起点')({ x: 0, y: 0 })
  action('终点')({ x: 3, y: 4 })
  action('计算两点间距离')(res)
}

export default normalDemo
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"getdistance",children:"getDistance"}),`
`,n.jsx(s.p,{children:"计算两点间距离的函数。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:["getDistance 是一个几何计算函数，核心作用是：",n.jsx(s.strong,{children:"计算二维平面上两点之间的欧几里得距离"}),"。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["勾股定理：",n.jsx(s.code,{children:"c = √(a² + b²)"})]}),`
`,n.jsx(s.li,{children:"Math.sqrt()：计算平方根"}),`
`,n.jsxs(s.li,{children:["坐标差值：",n.jsx(s.code,{children:"dx = x2 - x1"}),"，",n.jsx(s.code,{children:"dy = y2 - y1"})]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"游戏开发：判断碰撞检测、攻击范围"}),`
`,n.jsx(s.li,{children:"地图应用：计算两点间直线距离"}),`
`,n.jsx(s.li,{children:"拖拽交互：计算拖拽距离"}),`
`,n.jsx(s.li,{children:"动画：基于距离计算动画时长"}),`
`,n.jsx(s.li,{children:"手势识别：判断滑动距离是否达标"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"优势"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"简单直观，直接传入两个点坐标"}),`
`,n.jsx(s.li,{children:"返回精确的浮点数距离"}),`
`]}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"start"}),n.jsx("td",{children:n.jsx("code",{children:"Point"})}),n.jsx("td",{children:"起点坐标，包含 x 和 y 属性"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"end"}),n.jsx("td",{children:n.jsx("code",{children:"Point"})}),n.jsx("td",{children:"终点坐标，包含 x 和 y 属性"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"number"})]}),`
`,n.jsx(s.li,{children:"描述：两点间的欧几里得距离"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(s.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index.ts"})," - 唯一源文件，包含 getDistance 函数实现"]}),`
`]}),`
`,n.jsx(s.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:["计算 x 坐标差值：",n.jsx(s.code,{children:"dx = end.x - start.x"})]}),`
`,n.jsxs(s.li,{children:["计算 y 坐标差值：",n.jsx(s.code,{children:"dy = end.y - start.y"})]}),`
`,n.jsxs(s.li,{children:["应用勾股定理：",n.jsx(s.code,{children:"Math.sqrt(dx * dx + dy * dy)"})]}),`
`]}),`
`,n.jsx(s.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["实现：",n.jsx(s.code,{children:"Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2)"})]}),`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"**"})," 幂运算符代替 ",n.jsx(s.code,{children:"Math.pow()"})]}),`
`,n.jsxs(s.li,{children:["结果为浮点数，可用 ",n.jsx(s.code,{children:"Math.round()"})," 取整"]}),`
`]})]})}function a(e={}){const{wrapper:s}={...d(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
