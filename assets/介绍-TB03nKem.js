import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as m}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import clamp from '../../../packages/js-utils/src/clamp'

const basicDemo = () => {
  // 范围内的值不变
  action('clamp - 范围内不变')({
    'value=4, min=-5, max=5': clamp({ value: 4, min: -5, max: 5 }),
    'value=-4, min=-5, max=5': clamp({ value: -4, min: -5, max: 5 }),
    'value=0, min=-5, max=5': clamp({ value: 0, min: -5, max: 5 }),
    'value=5(边界), min=-5, max=5': clamp({ value: 5, min: -5, max: 5 }),
    'value=-5(边界), min=-5, max=5': clamp({ value: -5, min: -5, max: 5 }),
  })

  // 超出范围被限制
  action('clamp - 超出范围被限制')({
    'value=10, max=5': clamp({ value: 10, min: -5, max: 5 }),
    'value=-10, min=-5': clamp({ value: -10, min: -5, max: 5 }),
    'value=Infinity, max=5': clamp({ value: Infinity, min: -5, max: 5 }),
    'value=-Infinity, min=-5': clamp({ value: -Infinity, min: -5, max: 5 }),
  })
}

export default basicDemo
`,s=`import { action } from 'storybook/actions'
import clamp from '../../../packages/js-utils/src/clamp'

const edgeCaseDemo = () => {
  // 只有 max（无 min）
  action('clamp - 只限制最大值')({
    'value=5, max=3': clamp({ value: 5, max: 3 }),
    'value=1, max=3': clamp({ value: 1, max: 3 }),
  })

  // 只有 min（无 max）
  action('clamp - 只限制最小值')({
    'value=-5, min=0': clamp({ value: -5, min: 0 }),
    'value=5, min=0': clamp({ value: 5, min: 0 }),
  })

  // 小数
  action('clamp - 小数处理')({
    'value=-10.2, min=-5.5, max=5.5': clamp({ value: -10.2, min: -5.5, max: 5.5 }),
    'value=10.6, min=-5.6, max=5.4': clamp({ value: 10.6, min: -5.6, max: 5.4 }),
  })

  // min > max 时自动交换
  action('clamp - min > max 自动交换')({
    'value=3, min=5, max=0': clamp({ value: 3, min: 5, max: 0 }),
    说明: '自动将 min=5, max=0 调整为 lower=0, upper=5',
  })
}

export default edgeCaseDemo
`;function a(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...m(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"clamp",children:"clamp"}),`
`,n.jsx(e.p,{children:"将数值限制在指定范围内。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"clamp"})," 将数值约束在 ",n.jsx(e.code,{children:"[min, max]"})," 区间内。值在范围内时原样返回，超出范围时返回对应边界值。支持只限制最小值或只限制最大值。当 ",n.jsx(e.code,{children:"min > max"})," 时会自动交换。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"滑块/进度条范围限制"}),`
`,n.jsx(e.li,{children:"游戏中角色坐标/血量约束"}),`
`,n.jsx(e.li,{children:"动画进度值 0-1 限制"}),`
`,n.jsx(e.li,{children:"表单数字输入范围校验"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础范围限制",children:"基础范围限制"}),`
`,n.jsx(e.p,{children:"范围内的值不变，超出范围的值被限制到边界。"}),`
`,n.jsx(l,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"边界情况",children:"边界情况"}),`
`,n.jsx(e.p,{children:"只限制单侧、小数处理、min > max 自动交换。"}),`
`,n.jsx(l,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"要限制的数值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"min"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最小值边界（可选）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"max"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大值边界（可选）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：限制在范围内的数值"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"clamp/index.ts"})," 导出 clamp 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 判断 min/max 是否同时存在 → 同时存在时自动处理 min > max → 使用 Math.min/Math.max 限制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": ",n.jsx(e.code,{children:"Math.min"}),"、",n.jsx(e.code,{children:"Math.max"})," 组合实现区间限制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 输入 ",(value,min,max)," → 计算有效边界 → 返回限制后的值"]}),`
`]})]})}function j(i={}){const{wrapper:e}={...m(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{j as default};
