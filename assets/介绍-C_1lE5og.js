import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as n}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import endsWith from '../../../packages/js-utils/src/endsWith'

const endsWithDemo = () => {
  const str = 'abc'

  // 基础匹配
  action('endsWith - 基础匹配')({
    '"abc" 以 "c" 结尾': endsWith(str, 'c'),
    '"abc" 以 "b" 结尾': endsWith(str, 'b'),
  })

  // 指定 position
  action('endsWith - 指定 position')({
    'endsWith("abc", "b", 2)': endsWith(str, 'b', 2),
    'endsWith("abc", "ab", 2.2)': endsWith(str, 'ab', 2.2),
  })

  // position >= length 仍正常工作
  action('endsWith - position >= length')({
    'position=3': endsWith(str, 'c', 3),
    'position=5': endsWith(str, 'c', 5),
    'position=Infinity': endsWith(str, 'c', Infinity),
  })

  // 负数 position 视为 0
  action('endsWith - 负数 position')({
    'position=-1 检查 "a"': endsWith(str, 'a', -1),
    'position=-1 检查 ""': endsWith(str, '', -1),
  })
}

export default endsWithDemo
`,o=`import { action } from 'storybook/actions'
import startsWith from '../../../packages/js-utils/src/startsWith'

const startsWithDemo = () => {
  action('startsWith')({
    '"abc" 以 "a" 开头': startsWith('abc', 'a'),
    '"abc" 以 "b" 开头': startsWith('abc', 'b'),
    '"abc" 从位置1以 "b" 开头': startsWith('abc', 'b', 1),
  })
}

export default startsWithDemo
`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(s.h1,{id:"endswith",children:"endsWith"}),`
`,t.jsxs(s.p,{children:["检查字符串是否以指定字符串结尾，同时提供 ",t.jsx(s.code,{children:"startsWith"})," 检查开头。"]}),`
`,t.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,t.jsxs(s.p,{children:[t.jsx(s.code,{children:"endsWith"})," 检查字符串是否以给定目标字符串结尾，可选指定检查的位置。",t.jsx(s.code,{children:"startsWith"})," 检查是否以给定目标字符串开头。两者均支持指定位置参数。"]}),`
`,t.jsx(s.h2,{id:"endswith---检查结尾",children:"endsWith - 检查结尾"}),`
`,t.jsx(n,{language:"typescript",children:d}),`
`,t.jsx(s.h2,{id:"startswith---检查开头",children:"startsWith - 检查开头"}),`
`,t.jsx(n,{language:"typescript",children:o}),`
`,t.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"参数名"}),t.jsx("th",{children:"类型"}),t.jsx("th",{children:"描述"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"string"}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"要检查的字符串"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"target"}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"目标字符串"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"position"}),t.jsx("td",{children:t.jsx("code",{children:"number"})}),t.jsx("td",{children:"检查的位置（可选）"})]})]})]}),`
`,t.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,t.jsxs(s.ul,{children:[`
`,t.jsxs(s.li,{children:["类型：",t.jsx(s.code,{children:"boolean"})]}),`
`,t.jsx(s.li,{children:"描述：是否匹配"}),`
`]}),`
`,t.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,t.jsxs(s.ol,{children:[`
`,t.jsxs(s.li,{children:[t.jsx(s.strong,{children:"文件职责"}),": ",t.jsx(s.code,{children:"endsWith/index.ts"})," 导出 endsWith（default）和 startsWith（named）"]}),`
`,t.jsxs(s.li,{children:[t.jsx(s.strong,{children:"核心流程"}),": 根据 position 截取字符串的相应部分，检查是否与 target 匹配"]}),`
`,t.jsxs(s.li,{children:[t.jsx(s.strong,{children:"关键技术点"}),": ",t.jsx(s.code,{children:"String.prototype.slice"})," 截取、",t.jsx(s.code,{children:"String.prototype.indexOf"})," 比较"]}),`
`,t.jsxs(s.li,{children:[t.jsx(s.strong,{children:"数据流向"}),": string + position → 截取目标区域 → 与 target 比较 → 返回布尔值"]}),`
`]})]})}function p(i={}){const{wrapper:s}={...r(),...i.components};return s?t.jsx(s,{...i,children:t.jsx(e,{...i})}):e(i)}export{p as default};
