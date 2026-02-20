import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import take from '../../../packages/js-utils/src/take'
import takeRight from '../../../packages/js-utils/src/takeRight'

const takeDemo = () => {
  const arr = [1, 2, 3]

  // 基础：取前2个
  action('take - 前2个')(take(arr, 2))

  // 默认取1个
  action('take - 默认取1个')(take(arr))

  // n < 1 返回空数组
  action('take - n=0 返回空数组')(take(arr, 0))
  action('take - n=-1 返回空数组')(take(arr, -1))

  // n >= length 返回全部
  action('take - n=3 返回全部')(take(arr, 3))
  action('take - n=100 返回全部')(take(arr, 100))

  // takeRight
  action('takeRight - 后2个')(takeRight(arr, 2))
  action('takeRight - 默认取最后1个')(takeRight(arr))
  action('takeRight - n=0 返回空数组')(takeRight(arr, 0))
  action('takeRight - n >= length 返回全部')(takeRight(arr, 100))
}

export default takeDemo
`,s=`import { action } from 'storybook/actions'
import takeWhile from '../../../packages/js-utils/src/takeWhile'
import takeRightWhile from '../../../packages/js-utils/src/takeRightWhile'

const takeWhileDemo = () => {
  const arr = [1, 2, 3, 4]

  // takeWhile：从头开始取，直到条件不满足
  action('takeWhile - n < 3')({
    输入: arr,
    结果: takeWhile(arr, (n) => n < 3),
  })

  // takeRightWhile：从尾部取，直到条件不满足
  action('takeRightWhile - n > 2')({
    输入: arr,
    结果: takeRightWhile(arr, (n) => n > 2),
  })

  // 全部满足条件
  action('takeWhile - 全部满足')({
    输入: arr,
    结果: takeWhile(arr, (n) => n < 10),
  })

  // 首元素不满足 => 空数组
  action('takeWhile - 首元素不满足')({
    输入: arr,
    结果: takeWhile(arr, (n) => n > 5),
  })

  // takeRightWhile 尾元素不满足 => 空数组
  action('takeRightWhile - 尾元素不满足')({
    输入: arr,
    结果: takeRightWhile(arr, (n) => n < 1),
  })
}

export default takeWhileDemo
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"take",children:"take"}),`
`,n.jsx(e.p,{children:"提取数组前 n 个元素。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"take"})," 提取数组前 n 个元素。还有 ",n.jsx(e.code,{children:"takeRight"}),"（从末尾取）、",n.jsx(e.code,{children:"takeWhile"}),"/",n.jsx(e.code,{children:"takeRightWhile"}),"（按条件取）。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"获取前 N 条数据"}),`
`,n.jsx(e.li,{children:"分页数据截取"}),`
`,n.jsx(e.li,{children:"条件截取"}),`
`]}),`
`,n.jsx(e.h2,{id:"提取元素",children:"提取元素"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"take"})," 和 ",n.jsx(e.code,{children:"takeRight"})," 从数组前后提取元素。"]}),`
`,n.jsx(i,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"按条件提取",children:"按条件提取"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"takeWhile"})," 和 ",n.jsx(e.code,{children:"takeRightWhile"})," 按条件从数组前后提取元素。"]}),`
`,n.jsx(i,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"提取数量，默认 1"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(value, index, array) => boolean"})}),n.jsx("td",{children:"断言函数（While 变体使用）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：提取的元素数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 take、takeRight、takeWhile、takeRightWhile"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": take 用 slice(0, n)；takeWhile 从头遍历直到条件不满足"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": slice 截取，while 循环条件检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 数组 + 数量/条件 → 截取 → 返回子数组"]}),`
`]})]})}function k(t={}){const{wrapper:e}={...h(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{k as default};
