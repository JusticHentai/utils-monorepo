import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import shouldSample from '../../../packages/element-utils/src/shouldSample'

const basicDemo = () => {
  // 全量采集
  action('采样率 1.0')(shouldSample(1))

  // 不采集
  action('采样率 0')(shouldSample(0))

  // 50% 采样 - 执行 10 次看命中率
  let hits = 0
  for (let i = 0; i < 10; i++) {
    if (shouldSample(0.5)) hits++
  }
  action('采样率 0.5（10 次测试）')(\`命中 \${hits} 次\`)
}

export default basicDemo
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"shouldsample",children:"shouldSample"}),`
`,n.jsx(e.p,{children:"根据采样率判断是否需要采集。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"shouldSample"})," 是一个简单的采样率判断函数，根据传入的采样率（0~1）返回是否命中采样。采样率为 1 时总是返回 ",n.jsx(e.code,{children:"true"}),"，为 0 时总是返回 ",n.jsx(e.code,{children:"false"}),"，其他值通过 ",n.jsx(e.code,{children:"Math.random()"})," 进行概率判断。"]}),`
`,n.jsx(e.p,{children:"常用于监控 SDK 中控制数据采集量，避免全量采集对性能的影响。"}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"sampleRate"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"采样率，范围 0~1，默认为 1（全量采集）"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"boolean"}),"，",n.jsx(e.code,{children:"true"})," 表示命中采样。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心逻辑"}),"：",n.jsx(e.code,{children:"sampleRate >= 1"})," 直接返回 ",n.jsx(e.code,{children:"true"}),"，",n.jsx(e.code,{children:"sampleRate <= 0"})," 直接返回 ",n.jsx(e.code,{children:"false"}),"，其他通过 ",n.jsx(e.code,{children:"Math.random() < sampleRate"})," 判断"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：边界值处理保证了 0 和 1 的确定性结果"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{j as default};
