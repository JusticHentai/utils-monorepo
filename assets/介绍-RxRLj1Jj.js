import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const normalDemo = () => {
  const res = lerp(1, 5, 0.5)
  action('线性插值 1 和 5 之间 0.5 位置')(res)
}

export default normalDemo
`,d=`import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const zeroDemo = () => {
  const res = lerp(1, 5, 0)
  action('线性插值 1 和 5 之间进度为 0 位置')(res)
}

export default zeroDemo
`,o=`import { action } from 'storybook/actions'
import lerp from '../../../packages/js-utils/src/lerp'

const oneDemo = () => {
  const res = lerp(1, 5, 1)
  action('线性插值 1 和 5 之间进度为 1 位置')(res)
}

export default oneDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"lerp",children:"lerp"}),`
`,n.jsx(e.p,{children:"线性插值函数，用于在两个值之间按比例取值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["lerp（Linear Interpolation，线性插值）是图形学和动画中最基础的插值算法，核心作用是：",n.jsx(e.strong,{children:"根据比例 n，在 a 和 b 之间取一个中间值"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["线性插值公式：",n.jsx(e.code,{children:"(1 - n) * a + n * b"})]}),`
`,n.jsx(e.li,{children:'参数化方程：n 表示从 a 到 b 的"进度"'}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"动画过渡：计算动画过程中的中间状态"}),`
`,n.jsx(e.li,{children:"颜色渐变：RGB 值的平滑过渡"}),`
`,n.jsx(e.li,{children:"缓动函数：配合 easing 曲线实现加速/减速"}),`
`,n.jsx(e.li,{children:"相机移动：平滑跟随目标位置"}),`
`,n.jsx(e.li,{children:"数值平滑：将突变转为渐变"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"公式解释"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"n = 0"})," 时，返回 a（起点）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"n = 1"})," 时，返回 b（终点）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"n = 0.5"})," 时，返回 a 和 b 的中点"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"计算简单高效"}),`
`,n.jsx(e.li,{children:"适用于任意数值类型"}),`
`,n.jsx(e.li,{children:"是更复杂插值算法的基础"}),`
`]}),`
`,n.jsx(e.h2,{id:"正常示例",children:"正常示例"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"n0-示例",children:"n=0 示例"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"n1-示例",children:"n=1 示例"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"a"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始值（低点）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"b"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"结束值（高点）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"插值比例，范围 [0, 1]"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：线性插值结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 lerp 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"接收起点 a、终点 b、比例 n"}),`
`,n.jsxs(e.li,{children:["计算 ",n.jsx(e.code,{children:"(1 - n) * a + n * b"})]}),`
`,n.jsx(e.li,{children:"返回插值结果"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["实现：",n.jsx(e.code,{children:"(1 - n) * a + n * b"})]}),`
`,n.jsxs(e.li,{children:["等价形式：",n.jsx(e.code,{children:"a + n * (b - a)"}),"（先算差值再偏移）"]}),`
`,n.jsx(e.li,{children:"n ∈ [0, 1] 时结果在 [a, b] 范围内"}),`
`,n.jsx(e.li,{children:"n 可以超出 [0, 1]，实现外插（Extrapolation）"}),`
`]})]})}function m(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{m as default};
