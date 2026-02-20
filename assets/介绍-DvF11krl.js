import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import words from '../../../packages/js-utils/src/words'

const wordsDemo = () => {
  // 各种命名格式
  action('words - camelCase')(words('camelCaseString'))
  action('words - PascalCase')(words('PascalCaseString'))
  action('words - snake_case')(words('snake_case_string'))
  action('words - kebab-case')(words('kebab-case-string'))

  // 复合词（lodash 测试用例）
  action('words - 数字+单词')(words('12ft'))
  action('words - 连续大写')(words('XMLHttp'))
  action('words - XML大写变体')(words('XmlHTTP'))
  action('words - ISO混合')(words('isISO8601'))
  action('words - 大写序列后跟单词')(words('LETTERSAeiouAreVowels'))

  // 带数字的复合词
  action('words - 数字嵌入')(words('tooLegit2Quit'))
  action('words - 大数字')(words('walk500Miles'))

  // 空字符串
  action('words - 空字符串')(words(''))

  // 混合格式
  action('words - 混合 FOO_barBaz')(words('FOO_barBaz'))
}

export default wordsDemo
`;function o(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"words",children:"words"}),`
`,n.jsx(s.p,{children:"将字符串拆分成单词数组。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"words"})," 将字符串拆分为单词数组，支持 camelCase、PascalCase、snake_case、kebab-case 等格式。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"字符串格式转换的基础操作"}),`
`,n.jsx(s.li,{children:"文本分词"}),`
`,n.jsx(s.li,{children:"变量名解析"}),`
`]}),`
`,n.jsx(s.h2,{id:"字符串分词",children:"字符串分词"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"words"})," 将各种格式的字符串拆分为单词数组。"]}),`
`,n.jsx(d,{language:"typescript",children:i}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"str"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要分词的字符串"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string[]"})]}),`
`,n.jsx(s.li,{children:"描述：单词数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 实现字符串分词"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 使用正则匹配单词边界 → 提取所有单词"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 正则处理多种命名约定（驼峰、蛇形、串式等）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 字符串 → 正则匹配 → 提取单词 → 返回数组"]}),`
`]})]})}function j(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(o,{...r})}):o(r)}export{j as default};
