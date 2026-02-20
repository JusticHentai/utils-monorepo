import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as h}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import shuffle from '../../../packages/js-utils/src/shuffle'

const shuffleDemo = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  // 基本洗牌 (lodash: shuffle(arr) !== arr, sort same)
  const s1 = shuffle(arr)
  action('shuffle - 第一次')(s1)
  action('shuffle - 第二次')(shuffle(arr))

  // 验证返回新数组（不修改原数组）
  action('shuffle - 不同引用')(s1 !== arr)
  action('shuffle - 原数组不变')(arr)

  // 包含相同元素 (lodash: shuffle(arr).sort() => arr)
  action('shuffle - 排序后相同')(shuffle(arr).sort((a, b) => a - b))

  // 小数组洗牌产生不同排列
  const results = Array.from({ length: 5 }, () => shuffle([1, 2]).join(','))
  action('shuffle - 小数组多次')(results)

  // 空数组
  action('shuffle - 空数组')(shuffle([]))
}

export default shuffleDemo`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"shuffle",children:"shuffle"}),`
`,n.jsx(s.p,{children:"打乱数组顺序。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"shuffle"})," 使用 Fisher-Yates 洗牌算法创建一个打乱顺序的新数组。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"随机排序"}),`
`,n.jsx(s.li,{children:"洗牌算法"}),`
`,n.jsx(s.li,{children:"随机展示列表"}),`
`]}),`
`,n.jsx(s.h2,{id:"数组洗牌",children:"数组洗牌"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"shuffle"})," 创建随机排序的新数组。"]}),`
`,n.jsx(h,{language:"typescript",children:i}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要打乱的数组"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T[]"})]}),`
`,n.jsx(s.li,{children:"描述：打乱顺序的新数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 实现 Fisher-Yates 洗牌"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 复制数组 → 从后往前遍历 → 随机交换元素位置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": Fisher-Yates 算法保证均匀随机分布，不修改原数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 原数组 → 复制 → 随机交换 → 返回新数组"]}),`
`]})]})}function j(e={}){const{wrapper:s}={...l(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
