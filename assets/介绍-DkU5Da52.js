import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import after from '../../../packages/js-utils/src/after'

let callCount = 0
const wrapped = after(3, () => {
  return '函数被执行了！'
})

const afterDemo = () => {
  callCount++
  const result = wrapped()

  action(\`after(3, fn) - 第\${callCount}次调用\`)({
    当前调用次数: callCount,
    阈值: 3,
    是否执行: callCount >= 3 ? '✅ 已执行' : '❌ 未达阈值',
    返回值: result,
    说明:
      callCount < 3
        ? \`还需调用 \${3 - callCount} 次才会执行\`
        : '已达阈值，每次调用都会执行',
  })
}

export default afterDemo
`,l=`import { action } from 'storybook/actions'
import after from '../../../packages/js-utils/src/after'

const edgeCaseDemo = () => {
  // after(0, fn) - 调用 1 次就执行
  let count0 = 0
  const afterZero = after(0, () => {
    count0++
  })
  afterZero()

  // after(1, fn) - 调用 1 次执行
  let count1 = 0
  const afterOne = after(1, () => {
    count1++
  })
  afterOne()

  // after(5, fn) 调用 4 次不执行，调用 5 次执行 1 次
  let count5 = 0
  const afterFive = after(5, () => {
    count5++
  })
  for (let i = 0; i < 4; i++) afterFive()
  const beforeThreshold = count5
  afterFive()
  const afterThreshold = count5

  action('after - 边界情况')({
    'after(0, fn) 调用1次': { 执行次数: count0, 说明: 'n=0 时调用1次即执行' },
    'after(1, fn) 调用1次': { 执行次数: count1, 说明: 'n=1 时第1次调用即执行' },
    'after(5, fn) 调用4次': {
      执行次数: beforeThreshold,
      说明: '未达阈值不执行',
    },
    'after(5, fn) 调用5次': {
      执行次数: afterThreshold,
      说明: '第5次调用时执行',
    },
  })
}

export default edgeCaseDemo
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"after",children:"after"}),`
`,n.jsx(e.p,{children:"创建一个在被调用 n 次之后才执行的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"after(n, func)"})," 创建一个新函数，该函数在被调用 ",n.jsx(e.code,{children:"n"})," 次之后才会真正执行 ",n.jsx(e.code,{children:"func"}),"。在达到阈值之前的调用不会触发 ",n.jsx(e.code,{children:"func"}),"，达到阈值后每次调用都会执行。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"确保所有异步操作完成后再执行回调"}),`
`,n.jsx(e.li,{children:"等待多个事件触发后执行汇总操作"}),`
`,n.jsx(e.li,{children:"限制函数的最早执行时机"}),`
`]}),`
`,n.jsx(e.h2,{id:"多次调用观察",children:"多次调用观察"}),`
`,n.jsx(e.p,{children:"多次点击按钮观察：前 2 次点击不会执行函数，第 3 次及之后每次都会执行。"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsxs(e.p,{children:["验证不同阈值下的行为：",n.jsx(e.code,{children:"after(0, fn)"})," 在调用 1 次后执行，",n.jsx(e.code,{children:"after(5, fn)"})," 调用 4 次不执行、第 5 次才执行。"]}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"需要调用的次数阈值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"达到阈值后要执行的函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...args) => ReturnType<T> | undefined"})]}),`
`,n.jsx(e.li,{children:"描述：新函数，在达到调用次数阈值前返回 undefined，之后返回 func 的执行结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"after/index.ts"})," 导出 after 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 内部维护计数器，每次调用自增，达到 n 后执行 func"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 闭包保存调用计数状态"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 调用包装函数 → 计数器自增 → 判断是否 >= n → 达到则执行 func 并返回结果"]}),`
`]})]})}function j(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
