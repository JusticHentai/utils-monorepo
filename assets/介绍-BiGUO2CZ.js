import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import ceil from '../../../packages/js-utils/src/round'
import floor from '../../../packages/js-utils/src/floor'
import round from '../../../packages/js-utils/src/round'

const roundDemo = () => {
  action('ceil - 向上舍入')({
    'ceil(4.006)': ceil(4.006),
    'ceil(6.004, 2)': ceil(6.004, 2),
    'ceil(6040, -2)': ceil(6040, -2),
  })

  action('floor - 向下舍入')({
    'floor(4.006)': floor(4.006),
    'floor(0.046, 2)': floor(0.046, 2),
    'floor(4060, -2)': floor(4060, -2),
  })

  action('round - 四舍五入')({
    'round(4.006)': round(4.006),
    'round(4.006, 2)': round(4.006, 2),
    'round(4060, -2)': round(4060, -2),
  })
}

export default roundDemo
`;function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"round",children:"round"}),`
`,n.jsx(r.p,{children:"数值舍入函数集。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:["提供 ",n.jsx(r.code,{children:"ceil"}),"（向上舍入）、",n.jsx(r.code,{children:"floor"}),"（向下舍入）、",n.jsx(r.code,{children:"round"}),"（四舍五入）函数，均支持精度参数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"价格计算（保留小数位）"}),`
`,n.jsx(r.li,{children:"数据展示格式化"}),`
`,n.jsx(r.li,{children:"数学运算精度控制"}),`
`]}),`
`,n.jsx(r.h2,{id:"数值舍入",children:"数值舍入"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"ceil"}),"、",n.jsx(r.code,{children:"floor"}),"、",n.jsx(r.code,{children:"round"})," 进行不同方式的数值舍入。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"number"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"要舍入的数值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"precision"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"精度位数，默认 0，负数表示小数点前"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"number"})]}),`
`,n.jsx(r.li,{children:"描述：舍入后的数值"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 提供 ceil、floor、round 三个函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 根据精度参数计算倍数 → 乘以倍数 → 执行舍入 → 除以倍数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 精度处理（10 的幂次方），支持负精度"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 数值 + 精度 → 放大 → 舍入 → 缩小 → 返回结果"]}),`
`]})]})}function u(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{u as default};
