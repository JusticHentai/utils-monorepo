import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import sample from '../../../packages/js-utils/src/sample'

const sampleDemo = () => {
  // 随机获取一个元素 (lodash: sample([1,2,3]) => random element)
  const arr = [1, 2, 3, 4, 5]
  action('sample - 随机一个')(sample(arr))
  action('sample - 再来一个')(sample(arr))

  // 字符串数组
  action('sample - 字符串数组')(sample(['apple', 'banana', 'cherry']))

  // 空数组返回 undefined (lodash: sample empty => undefined)
  action('sample - 空数组')(sample([]))

  // 结果一定在原数组中
  const r = sample(arr)
  action('sample - 结果在数组中')({ result: r, includes: arr.includes(r!) })
}

export default sampleDemo`,c=`import { action } from 'storybook/actions'
import sampleSize from '../../../packages/js-utils/src/sampleSize'

const sampleSizeDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 取指定数量 (lodash: sampleSize([1,2,3], 2) => [random 2 elements])
  action('sampleSize - 取2个')(sampleSize(arr, 2))

  // 取全部 (lodash: sampleSize(arr, arr.length).sort() => arr)
  action('sampleSize - 取全部排序')(sampleSize(arr, 5).sort((a, b) => a - b))

  // n超过长度 (lodash: returns all elements)
  action('sampleSize - 超过长度')(sampleSize(arr, 20))

  // n < 1 返回空数组 (lodash: sampleSize(arr, 0) => [])
  action('sampleSize - n=0')(sampleSize(arr, 0))
  action('sampleSize - n=-1')(sampleSize(arr, -1))

  // 空数组 (lodash: sampleSize([], 1) => [])
  action('sampleSize - 空数组')(sampleSize([], 1))
}

export default sampleSizeDemo`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sample",children:"sample"}),`
`,n.jsx(e.p,{children:"从集合中随机获取元素。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"sample"})," 从集合中随机获取一个元素。",n.jsx(e.code,{children:"sampleSize"})," 随机获取 n 个元素。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"随机抽样"}),`
`,n.jsx(e.li,{children:"随机推荐"}),`
`,n.jsx(e.li,{children:"测试数据生成"}),`
`]}),`
`,n.jsx(e.h2,{id:"随机获取单个元素",children:"随机获取单个元素"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"sample"})," 从数组中随机获取一个元素。"]}),`
`,n.jsx(l,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"随机获取多个元素",children:"随机获取多个元素"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"sampleSize"})," 从数组中随机获取指定数量的元素。"]}),`
`,n.jsx(l,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要抽样的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"抽样数量（sampleSize 使用）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T | undefined"})," / ",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：随机获取的元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 sample 和 sampleSize"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": sample 随机索引取一个元素；sampleSize 使用 Fisher-Yates 洗牌取前 n 个"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": Math.random 生成随机索引，Fisher-Yates 算法保证均匀分布"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 集合 → 随机选取 → 返回元素"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
