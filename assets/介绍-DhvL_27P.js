import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'
import TimeElapsed from '../../../packages/js-utils/src/TimeElapsed'

const normalDemo = async () => {
  const timeElapsed = new TimeElapsed()

  // 开始计时
  const startResult = timeElapsed.start()
  action('开始计时')(startResult)

  await sleep(1000)

  // 设置第一个时间节点
  const firstSet = timeElapsed.set()
  action('1000ms 后设置一个时间节点')(firstSet)

  await sleep(2000)

  // 设置第二个时间节点
  const secondSet = timeElapsed.set()
  action('2000ms 后设置一个时间节点')(secondSet)
}

export default normalDemo
`,c=`import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'
import TimeElapsed from '../../../packages/js-utils/src/TimeElapsed'

const directSetDemo = async () => {
  const timeElapsed = new TimeElapsed()

  const firstSet = timeElapsed.set()
  action('首次 set')(firstSet)

  await sleep(1000)

  const secondSet = timeElapsed.set()
  action('1000ms 后第二次 set')(secondSet)
}

export default directSetDemo
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"timeelapsed",children:"TimeElapsed"}),`
`,e.jsx(n.p,{children:"TimeElapsed 是一个用于计算时间差的类，可以记录多个时间节点并计算各节点之间的时间差。"}),`
`,e.jsx(n.h2,{id:"常规使用示例",children:"常规使用示例"}),`
`,e.jsxs(n.p,{children:["先调用 ",e.jsx(n.code,{children:"start()"})," 开始计时，然后通过 ",e.jsx(n.code,{children:"set()"})," 设置时间节点。"]}),`
`,e.jsx(t,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"直接-set-使用示例",children:"直接 set 使用示例"}),`
`,e.jsxs(n.p,{children:["如果没有调用 ",e.jsx(n.code,{children:"start()"}),"，直接调用 ",e.jsx(n.code,{children:"set()"})," 会自动作为首次记录处理。"]}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"方法介绍",children:"方法介绍"}),`
`,e.jsx(n.h3,{id:"start",children:"start"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"() => TimeElapsedReturn"})]}),`
`,e.jsx(n.li,{children:"描述：开始计时，会清空之前的时间记录列表"}),`
`]}),`
`,e.jsx(n.h3,{id:"set",children:"set"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"() => TimeElapsedReturn"})]}),`
`,e.jsxs(n.li,{children:["描述：设置时间节点，如果没有首次记录则等同于 ",e.jsx(n.code,{children:"start()"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值-timeelapsedreturn",children:"返回值 TimeElapsedReturn"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"initialTime"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"开始时间戳"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"currentTime"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"当前时间戳"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"elapsed"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"与上一段的时间差（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"totalElapsed"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"与首次记录的时间差（毫秒）"})]})]})]}),`
`,e.jsx(n.h2,{id:"属性",children:"属性"}),`
`,e.jsx(n.h3,{id:"timelist",children:"timeList"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"TimeElapsedReturn[]"})]}),`
`,e.jsx(n.li,{children:"描述：所有时间记录的列表"}),`
`]})]})}function m(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
