import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import chunk from '../../../packages/js-utils/src/chunk'

const basicDemo = () => {
  action('chunk - 均匀分块')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 3,
    结果: chunk([0, 1, 2, 3, 4, 5], 3),
  })

  action('chunk - 最后一组为剩余元素')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 4,
    结果: chunk([0, 1, 2, 3, 4, 5], 4),
    说明: '不能整除时，最后一组包含剩余元素',
  })

  // 默认 size 为 1
  action('chunk - 默认 size 为 1')({
    输入: ['a', 'b', 'c'],
    结果: chunk(['a', 'b', 'c']),
    说明: '不传 size 时默认为 1，每个元素独立成组',
  })
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import chunk from '../../../packages/js-utils/src/chunk'

const edgeCaseDemo = () => {
  // size 为浮点数时向下取整
  action('chunk - 浮点数 size 向下取整')({
    输入: [0, 1, 2, 3, 4, 5],
    size: 1.5,
    结果: chunk([0, 1, 2, 3, 4, 5], 1.5),
    说明: 'Math.floor(1.5) = 1，每个元素独立成组',
  })

  // 空数组
  action('chunk - 空数组')({
    结果: chunk([], 2),
    说明: '空数组返回空数组',
  })

  // size 为 0 或负数
  action('chunk - size <= 0 的处理')({
    'size=0': chunk([1, 2, 3], 0),
    'size=-1': chunk([1, 2, 3], -1),
    说明: '当前实现将 size <= 0 钳位为 1（注意：与 lodash 返回空数组的行为不同）',
  })
}

export default edgeCaseDemo
`;function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"chunk",children:"chunk"}),`
`,n.jsx(s.p,{children:"将数组拆分成指定大小的分块。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"chunk"})," 函数将数组按照指定大小分割成多个小数组。如果数组不能被均匀分割，最后一块将包含剩余的元素。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"分页显示数据"}),`
`,n.jsx(s.li,{children:"批量处理数据（如批量 API 请求）"}),`
`,n.jsx(s.li,{children:"将长列表分组展示（如网格布局）"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础分块",children:"基础分块"}),`
`,n.jsx(s.p,{children:"均匀分块、不均匀分块以及默认 size 为 1 的情况。"}),`
`,n.jsx(i,{language:"typescript",children:h}),`
`,n.jsx(s.h2,{id:"边界情况",children:"边界情况"}),`
`,n.jsx(s.p,{children:"浮点数 size 向下取整、空数组处理、size 为 0 或负数的行为。"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要分块的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"size"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"每个块的长度，默认为 1"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T[][]"})]}),`
`,n.jsx(s.li,{children:"描述：分块后的二维数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"chunk/index.ts"})," 导出 chunk 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 计算有效 size → 循环按 size 步长切片 → 收集切片结果"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": ",n.jsx(s.code,{children:"Math.max(Math.floor(size), 1)"})," 确保 size 至少为 1，",n.jsx(s.code,{children:"Array.prototype.slice"})," 截取子数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 输入数组 → 按 chunkSize 循环切片 → push 到结果数组 → 返回二维数组"]}),`
`]})]})}function u(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
