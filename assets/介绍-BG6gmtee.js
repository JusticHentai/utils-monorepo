import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import random from '../../../packages/js-utils/src/random'

const normalDemo = () => {
  // 基本范围
  const result = random(1, 10)
  action('random - 1到10之间')(result)

  // 范围验证: 结果 >= min 且 < max
  const r = random(5, 10)
  action('random - 范围验证')({
    result: r,
    inRange: r >= 5 && r < 10,
  })

  // 多次调用产生不同结果
  const results = Array.from({ length: 10 }, () => random(0, 100))
  action('random - 10次调用')(results)

  // 负数范围
  action('random - 负数范围')(random(-10, -1))
}

export default normalDemo
`;function s(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"random",children:"random"}),`
`,n.jsx(r.p,{children:"生成指定范围内随机整数的函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:["random 是一个简单的随机数生成函数，核心作用是：",n.jsx(r.strong,{children:"返回 [min, max) 范围内的随机整数"}),"（包含 min，不包含 max）。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Math.random()：生成 [0, 1) 的随机小数"}),`
`,n.jsx(r.li,{children:"Math.floor()：向下取整得到整数"}),`
`,n.jsx(r.li,{children:"区间映射：将 [0, 1) 映射到 [min, max)"}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"随机索引：从数组中随机选取元素"}),`
`,n.jsx(r.li,{children:"游戏开发：随机生成怪物属性、掉落物品"}),`
`,n.jsx(r.li,{children:"随机颜色：生成 RGB 值"}),`
`,n.jsx(r.li,{children:"随机延迟：实现随机等待时间"}),`
`,n.jsx(r.li,{children:"抽奖/洗牌：随机排序或选择"}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"优势"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"简洁易用，两个参数直接指定范围"}),`
`,n.jsx(r.li,{children:"返回整数，无需额外处理"}),`
`,n.jsx(r.li,{children:"可用于数组索引等整数场景"}),`
`]}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:e}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"min"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最小值（包含）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"max"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大值（不包含）"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"number"})]}),`
`,n.jsx(r.li,{children:"描述：[min, max) 范围内的随机整数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(r.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"index.ts"})," - 唯一源文件，包含 random 函数实现"]}),`
`]}),`
`,n.jsx(r.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Math.random()"})," 生成 [0, 1) 的随机小数"]}),`
`,n.jsxs(r.li,{children:["乘以 ",n.jsx(r.code,{children:"(max - min)"})," 映射到 [0, max-min) 范围"]}),`
`,n.jsxs(r.li,{children:["加上 ",n.jsx(r.code,{children:"min"})," 偏移到 [min, max) 范围"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Math.floor()"})," 向下取整得到整数"]}),`
`]}),`
`,n.jsx(r.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["实现：",n.jsx(r.code,{children:"Math.floor(Math.random() * (max - min)) + min"})]}),`
`,n.jsx(r.li,{children:"Math.random() 范围是 [0, 1)，永远小于 1"}),`
`,n.jsx(r.li,{children:"结果范围是 [min, max)，包含 min 不包含 max"}),`
`]})]})}function m(i={}){const{wrapper:r}={...d(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
