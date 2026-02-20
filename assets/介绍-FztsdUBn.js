import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import now from '../../../packages/js-utils/src/now'

const nowDemo = () => {
  // lodash 测试: 返回自 Unix 纪元以来的毫秒数
  const stamp = Date.now()
  const actual = now()

  action('now - 时间戳')({
    'now()': actual,
    'Date.now()': stamp,
    '>= Date.now()': actual >= stamp,
    说明: 'now() 应返回 >= Date.now() 的值',
  })

  // 计时用途
  const t1 = now()
  let sum = 0
  for (let i = 0; i < 1000000; i++) sum += i
  const t2 = now()

  action('now - 计时')({
    耗时ms: t2 - t1,
    't2 > t1': t2 > t1,
  })
}

export default nowDemo`;function e(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"now",children:"now"}),`
`,n.jsx(s.p,{children:"获取当前时间的 Unix 时间戳（毫秒）。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"now"})," 获取当前时间的 Unix 时间戳（毫秒），内部调用 ",n.jsx(s.code,{children:"Date.now()"}),"。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"性能计时"}),`
`,n.jsx(s.li,{children:"生成时间戳 ID"}),`
`,n.jsx(s.li,{children:"时间差计算"}),`
`]}),`
`,n.jsx(s.h2,{id:"获取当前时间戳",children:"获取当前时间戳"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"now"})," 获取当前的 Unix 时间戳。"]}),`
`,n.jsx(t,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"number"})]}),`
`,n.jsx(s.li,{children:"描述：当前时间的 Unix 时间戳（毫秒）"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 封装 Date.now()"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 调用 Date.now() 返回时间戳"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用原生 Date.now() API"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 调用 → Date.now() → 返回时间戳数值"]}),`
`]})]})}function a(o={}){const{wrapper:s}={...i(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(e,{...o})}):e(o)}export{a as default};
