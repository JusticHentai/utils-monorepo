import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import floor from '../../../packages/js-utils/src/floor'

const floorDemo = () => {
  action('floor 演示')({ '4.006': floor(4.006), '0.046精度2': floor(0.046, 2), '4060精度-2': floor(4060, -2) })
}

export default floorDemo
`,c=`import { action } from 'storybook/actions'
import floor from '../../../packages/js-utils/src/floor'

const edgeCaseDemo = () => {
  action('floor - 边界情况')({
    'floor(4.906)': floor(4.906),
    'floor(0.046, 2)': floor(0.046, 2),
    'floor(4060, -2)': floor(4060, -2),
    'floor(0)': floor(0),
    'floor(-4.006)': floor(-4.006),
  })
}

export default edgeCaseDemo
`;function s(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"floor",children:"floor"}),`
`,n.jsx(o.p,{children:"根据精度向下舍入数值"}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"floor"})," 根据指定精度对数值向下舍入（取不大于该精度的最近值）。"]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"价格截断（保留两位小数，不四舍五入）"}),`
`,n.jsx(o.li,{children:"数据展示时控制小数位数"}),`
`,n.jsx(o.li,{children:"需要向下取整到指定精度的数学计算"}),`
`]}),`
`,n.jsx(o.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(o.p,{children:["点击按钮查看 ",n.jsx(o.code,{children:"floor"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(o.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(o.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"number"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"要舍入的数值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"precision"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"精度，默认为 0"})]})]})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"number"})]}),`
`,n.jsx(o.li,{children:"描述：返回舍入后的数值"}),`
`]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.p,{children:["以 ",n.jsx(o.code,{children:"floor(0.046, 2)"})," 为例，核心思路是",n.jsx(o.strong,{children:"先放大、再取整、再缩回"}),"："]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{children:`factor = Math.pow(10, 2) = 100    // 缩放因子，将小数点右移 precision 位

0.046 * 100 = 4.6                 // 放大：小数变成可操作的数
Math.floor(4.6) = 4               // 取整：向下舍入
4 / 100 = 0.04                    // 缩回：恢复到原来的数量级

最终返回：0.04
`})}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Math.pow(10, precision)"})," 的作用就是生成缩放因子，让 ",n.jsx(o.code,{children:"Math.floor"})," 能作用在指定的小数位上。"]})]})}function p(r={}){const{wrapper:o}={...l(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(s,{...r})}):s(r)}export{p as default};
