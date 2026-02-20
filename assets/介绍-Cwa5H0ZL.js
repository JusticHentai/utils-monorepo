import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'

const startCaseDemo = () => {
  action('startCase 演示')({
    '"--foo-bar--"': startCase('--foo-bar--'),
    '"fooBar"': startCase('fooBar'),
    '"__FOO_BAR__"': startCase('__FOO_BAR__'),
  })
}

export default startCaseDemo
`,d=`import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'

const edgeCaseDemo = () => {
  action('startCase - 边界情况')({
    'hello world': startCase('hello world'), 'camelCase': startCase('camelCase'), '空字符串': startCase(''), 'snake_case': startCase('snake_case')
  })
}

export default edgeCaseDemo
`;function t(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h1,{id:"startcase",children:"startCase"}),`
`,s.jsx(e.p,{children:"转换字符串为 Start Case（每个单词首字母大写）"}),`
`,s.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"startCase"})," 转换字符串为 Start Case（每个单词首字母大写）。"]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"处理流程"}),"："]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["去除撇号：",s.jsx(e.code,{children:"'"}),"（普通撇号）和 ",s.jsx(e.code,{children:"\\u2019"}),"（",s.jsx(e.code,{children:"'"})," 右单引号，macOS/iOS/Word 中常自动替换），避免 ",s.jsx(e.code,{children:`"don't"`})," 被拆分为 ",s.jsx(e.code,{children:'["don", "t"]'})]}),`
`,s.jsxs(e.li,{children:["调用 ",s.jsx(e.code,{children:"words"})," 拆分单词（支持 camelCase、snake_case、kebab-case 等格式）"]}),`
`,s.jsx(e.li,{children:"每个单词首字母大写，用空格拼接"}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"标题格式化"}),`
`,s.jsx(e.li,{children:"变量名转可读文本"}),`
`,s.jsx(e.li,{children:"UI 展示用的标签文案"}),`
`]}),`
`,s.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,s.jsxs(e.p,{children:["点击按钮查看 ",s.jsx(e.code,{children:"startCase"})," 的基本使用效果。"]}),`
`,s.jsx(r,{language:"typescript",children:i}),`
`,s.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,s.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,s.jsx(r,{language:"typescript",children:d}),`
`,s.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"参数名"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"描述"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"string"}),s.jsx("td",{children:s.jsx("code",{children:"unknown"})}),s.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,s.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["类型：",s.jsx(e.code,{children:"string"})]}),`
`,s.jsx(e.li,{children:"描述：返回转换后的字符串"}),`
`]}),`
`,s.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"文件职责"}),": ",s.jsx(e.code,{children:"startCase/index.ts"})," 导出 startCase 函数"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"核心流程"}),": 去除撇号 → ",s.jsx(e.code,{children:"words"})," 拆分单词 → 首字母大写 → 空格拼接"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"关键技术点"}),": ",s.jsx(e.code,{children:"replace(/['\\u2019]/g, '')"})," 同时处理普通撇号 ",s.jsx(e.code,{children:"'"})," 和 Unicode 右单引号 ",s.jsx(e.code,{children:"'"}),"（",s.jsx(e.code,{children:"\\u2019"}),"），防止撇号导致单词被错误拆分"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"数据流向"}),": 字符串 → 去撇号 → words 拆分 → map 首字母大写 → join(' ') → 返回"]}),`
`]})]})}function m(n={}){const{wrapper:e}={...c(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(t,{...n})}):t(n)}export{m as default};
