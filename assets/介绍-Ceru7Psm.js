import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import pad from '../../../packages/js-utils/src/pad'

const padDemo = () => {
  // 基本空格填充 (lodash: pad('abc', 8) => '  abc   ')
  action('pad - 空格填充到8')(pad('abc', 8))

  // 自定义填充字符，截断多余字符 (lodash: pad('abc', 8, '_-') => '_-abc_-_')
  action('pad - 自定义字符 _-')(pad('abc', 8, '_-'))

  // 字符串已达目标长度，不需要填充
  action('pad - 长度不足，不填充')(pad('abc', 2))
  action('pad - 长度相等，不填充')(pad('abc', 3))

  // 负数长度视为0，返回原字符串
  action('pad - 负数长度')(pad('abc', -2))

  // pad('abc', 6) => ' abc  ' (左侧1空格，右侧2空格)
  action('pad - 长度6')(pad('abc', 6))
}

export default padDemo`,i=`import { action } from 'storybook/actions'
import padStart from '../../../packages/js-utils/src/padStart'
import padEnd from '../../../packages/js-utils/src/padEnd'

const padStartEndDemo = () => {
  // padStart: 左侧填充 (lodash: padStart('abc', 6) => '   abc')
  action('padStart - 默认空格')(padStart('abc', 6))

  // 截断填充字符 (lodash: padStart('abc', 6, '_-') => '_-_abc')
  action('padStart - 自定义字符')(padStart('abc', 6, '_-'))

  // 补零场景
  action('padStart - 补零')(padStart('5', 3, '0'))

  // padEnd: 右侧填充 (lodash: padEnd('abc', 6) => 'abc   ')
  action('padEnd - 默认空格')(padEnd('abc', 6))

  // 截断填充字符 (lodash: padEnd('abc', 6, '_-') => 'abc_-_')
  action('padEnd - 自定义字符')(padEnd('abc', 6, '_-'))

  // 长度不足不填充
  action('padStart - 不填充')(padStart('abc', 2))
  action('padEnd - 不填充')(padEnd('abc', 2))
}

export default padStartEndDemo`;function r(a){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(d.h1,{id:"pad",children:"pad"}),`
`,n.jsx(d.p,{children:"字符串填充工具。"}),`
`,n.jsx(d.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"pad"})," 在字符串两侧填充字符至指定长度。",n.jsx(d.code,{children:"padStart"})," 仅左侧填充，",n.jsx(d.code,{children:"padEnd"})," 仅右侧填充。"]}),`
`,n.jsxs(d.p,{children:[n.jsx(d.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsx(d.li,{children:"数字格式化（如补零）"}),`
`,n.jsx(d.li,{children:"文本对齐"}),`
`,n.jsx(d.li,{children:"固定宽度字符串"}),`
`]}),`
`,n.jsx(d.h2,{id:"双侧填充",children:"双侧填充"}),`
`,n.jsxs(d.p,{children:["使用 ",n.jsx(d.code,{children:"pad"})," 在字符串两侧填充字符。"]}),`
`,n.jsx(c,{language:"typescript",children:s}),`
`,n.jsx(d.h2,{id:"单侧填充",children:"单侧填充"}),`
`,n.jsxs(d.p,{children:["使用 ",n.jsx(d.code,{children:"padStart"})," 和 ",n.jsx(d.code,{children:"padEnd"})," 分别在左侧和右侧填充。"]}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(d.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要填充的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"length"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"目标长度，默认 0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"chars"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"填充字符，默认空格"})]})]})]}),`
`,n.jsx(d.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsxs(d.li,{children:["类型：",n.jsx(d.code,{children:"string"})]}),`
`,n.jsx(d.li,{children:"描述：填充后的字符串"}),`
`]}),`
`,n.jsx(d.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(d.ol,{children:[`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"文件职责"}),": ",n.jsx(d.code,{children:"index.ts"})," 提供 pad、padStart、padEnd 三个函数"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"核心流程"}),": 计算需要填充的长度 → 生成填充字符串 → 拼接到对应位置"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"关键技术点"}),": pad 平分左右填充（奇数时右侧多一个），repeat 和 slice 控制填充长度"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"数据流向"}),": 字符串 + 目标长度 + 填充字符 → 计算填充量 → 拼接 → 返回结果"]}),`
`]})]})}function j(a={}){const{wrapper:d}={...t(),...a.components};return d?n.jsx(d,{...a,children:n.jsx(r,{...a})}):r(a)}export{j as default};
