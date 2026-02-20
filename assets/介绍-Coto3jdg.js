import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getScrollDirection from '../../../packages/element-utils/src/getScrollDirection'

const basicDemo = () => {
  // 模拟向下滚动：从 (0, 0) 到 (0, 100)
  const downParams = { x: 0, y: 100, lastX: 0, lastY: 0 }
  const downDirection = getScrollDirection(downParams)
  action('向下滚动方向')({ params: downParams, direction: downDirection })

  // 模拟向上滚动：从 (0, 100) 到 (0, 50)
  const upParams = { x: 0, y: 50, lastX: 0, lastY: 100 }
  const upDirection = getScrollDirection(upParams)
  action('向上滚动方向')({ params: upParams, direction: upDirection })

  // 模拟向右滚动：从 (0, 0) 到 (100, 0)
  const rightParams = { x: 100, y: 0, lastX: 0, lastY: 0 }
  const rightDirection = getScrollDirection(rightParams)
  action('向右滚动方向')({ params: rightParams, direction: rightDirection })

  // 模拟向左滚动：从 (100, 0) 到 (50, 0)
  const leftParams = { x: 50, y: 0, lastX: 100, lastY: 0 }
  const leftDirection = getScrollDirection(leftParams)
  action('向左滚动方向')({ params: leftParams, direction: leftDirection })

  // 没有滚动：位置不变
  const noneParams = { x: 100, y: 100, lastX: 100, lastY: 100 }
  const noneDirection = getScrollDirection(noneParams)
  action('无滚动方向')({ params: noneParams, direction: noneDirection })
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import getScrollDirection from '../../../packages/element-utils/src/getScrollDirection'

const scrollContainerDemo = () => {
  // 模拟斜向滚动：垂直方向变化大于水平方向
  const diagonalDownParams = { x: 50, y: 150, lastX: 0, lastY: 0 }
  const diagonalDownDirection = getScrollDirection(diagonalDownParams)
  action('斜向滚动（垂直优先）')({
    params: diagonalDownParams,
    direction: diagonalDownDirection,
  })

  // 模拟斜向滚动：水平方向变化大于垂直方向
  const diagonalRightParams = { x: 150, y: 50, lastX: 0, lastY: 0 }
  const diagonalRightDirection = getScrollDirection(diagonalRightParams)
  action('斜向滚动（水平优先）')({
    params: diagonalRightParams,
    direction: diagonalRightDirection,
  })

  // 模拟快速滚动：大幅度位置变化
  const fastScrollParams = { x: 0, y: 1000, lastX: 0, lastY: 0 }
  const fastScrollDirection = getScrollDirection(fastScrollParams)
  action('快速向下滚动')({
    params: fastScrollParams,
    direction: fastScrollDirection,
  })

  // 模拟微小滚动：判断边界情况
  const tinyScrollParams = { x: 1, y: 1, lastX: 0, lastY: 0 }
  const tinyScrollDirection = getScrollDirection(tinyScrollParams)
  action('微小滚动（相等时返回水平方向）')({
    params: tinyScrollParams,
    direction: tinyScrollDirection,
  })
}

export default scrollContainerDemo
`;function t(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"getscrolldirection",children:"getScrollDirection"}),`
`,n.jsx(i.p,{children:"根据当前滚动位置和上一次滚动位置计算滚动方向。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"getScrollDirection"})," 是一个纯函数，用于计算两个滚动位置之间的方向变化。它通过比较当前位置和上一次位置的差值（delta），判断滚动是向上、向下、向左、向右还是没有移动。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"核心逻辑"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"计算水平方向变化量（deltaX）和垂直方向变化量（deltaY）"}),`
`,n.jsx(i.li,{children:"比较两个方向的绝对值，返回变化更大的方向"}),`
`,n.jsx(i.li,{children:"当两个方向变化量相等时，优先返回水平方向"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"滚动监听回调中判断用户滚动方向"}),`
`,n.jsx(i.li,{children:"实现滚动方向相关的 UI 交互（如导航栏隐藏/显示）"}),`
`,n.jsx(i.li,{children:"无限滚动加载时判断滚动方向"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(i.p,{children:"演示不同滚动方向的计算结果："}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"滚动容器方向检测",children:"滚动容器方向检测"}),`
`,n.jsx(i.p,{children:"演示斜向滚动和边界情况的处理："}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"GetScrollDirectionOptions"})}),n.jsx("td",{children:"配置选项对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.x"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"当前滚动位置 X"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.y"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"当前滚动位置 Y"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.lastX"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"上一次滚动位置 X"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.lastY"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"上一次滚动位置 Y"})]})]})]}),`
`,n.jsx(i.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"返回值"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"direction"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollDirection"})}),n.jsx("td",{children:"滚动方向：'up' | 'down' | 'left' | 'right' | 'none'"})]})})]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(i.h3,{id:"文件职责",children:"文件职责"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"index.ts"}),"：主入口文件，导出 ",n.jsx(i.code,{children:"getScrollDirection"})," 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"interface.ts"}),"：类型定义文件，定义 ",n.jsx(i.code,{children:"ScrollDirection"}),"、",n.jsx(i.code,{children:"GetScrollDirectionOptions"})," 等类型"]}),`
`]}),`
`,n.jsx(i.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["接收当前位置 ",n.jsx(i.code,{children:"(x, y)"})," 和上一次位置 ",n.jsx(i.code,{children:"(lastX, lastY)"})]}),`
`,n.jsxs(i.li,{children:["计算水平方向变化量 ",n.jsx(i.code,{children:"deltaX = x - lastX"})]}),`
`,n.jsxs(i.li,{children:["计算垂直方向变化量 ",n.jsx(i.code,{children:"deltaY = y - lastY"})]}),`
`,n.jsx(i.li,{children:"比较两个方向绝对值，返回变化更大的方向"}),`
`,n.jsx(i.li,{children:"若变化量相等，优先返回水平方向"}),`
`,n.jsxs(i.li,{children:["若没有变化，返回 ",n.jsx(i.code,{children:"'none'"})]}),`
`]}),`
`,n.jsx(i.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"纯函数设计"}),"：无副作用，相同输入始终返回相同输出"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"方向优先级"}),"：垂直方向变化大于水平时优先返回垂直方向，相等时返回水平方向"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"早返回模式"}),"：使用条件判断快速返回结果，避免深层嵌套"]}),`
`]})]})}function m(r={}){const{wrapper:i}={...e(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(t,{...r})}):t(r)}export{m as default};
