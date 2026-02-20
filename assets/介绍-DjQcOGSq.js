import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import matchPattern from '../../../packages/element-utils/src/matchPattern'

const stringDemo = () => {
  const patterns = ['api', 'cdn', 'static']

  // 测试不同的 URL
  const urls = [
    'https://api.example.com/users',
    'https://cdn.example.com/image.png',
    'https://www.example.com/page',
    'https://static.example.com/file.js',
  ]

  const results = urls.map((url) => ({
    url,
    matched: matchPattern(url, patterns),
  }))

  action('字符串匹配规则')(patterns)
  action('测试 URL 列表')(urls)
  action('匹配结果')(results)
  // 输出:
  // api.example.com -> true (包含 'api')
  // cdn.example.com -> true (包含 'cdn')
  // www.example.com -> false (不包含任何规则)
  // static.example.com -> true (包含 'static')
}

export default stringDemo
`,l=`import { action } from 'storybook/actions'
import matchPattern from '../../../packages/element-utils/src/matchPattern'

const regexDemo = () => {
  // 混合使用字符串和正则表达式
  const patterns = [
    'localhost', // 字符串匹配
    /^https:\\/\\/api\\./, // 以 https://api. 开头
    /\\.(jpg|png|gif)$/, // 以图片扩展名结尾
  ]

  const urls = [
    'http://localhost:3000/api',
    'https://api.example.com/data',
    'https://cdn.example.com/image.png',
    'https://www.example.com/page.html',
  ]

  const results = urls.map((url) => ({
    url,
    matched: matchPattern(url, patterns),
  }))

  action('混合匹配规则')([
    'localhost',
    '/^https:\\\\/\\\\/api\\\\./',
    '/\\\\.(jpg|png|gif)$/',
  ])
  action('测试 URL 列表')(urls)
  action('匹配结果')(results)
  // 输出:
  // localhost:3000 -> true (包含 'localhost')
  // api.example.com -> true (匹配正则 ^https://api.)
  // image.png -> true (匹配正则 .(jpg|png|gif)$)
  // page.html -> false (不匹配任何规则)
}

export default regexDemo
`;function r(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"matchpattern",children:"matchPattern"}),`
`,n.jsx(t.p,{children:"判断字符串是否匹配给定的规则列表。支持字符串包含匹配和正则表达式匹配，常用于 URL 过滤、日志筛选、错误信息匹配等场景。"}),`
`,n.jsx(t.h2,{id:"字符串匹配",children:"字符串匹配"}),`
`,n.jsxs(t.p,{children:["使用字符串规则时，会检查目标值是否",n.jsx(t.strong,{children:"包含"}),"该字符串。适用于简单的关键词过滤场景。"]}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"正则表达式匹配",children:"正则表达式匹配"}),`
`,n.jsx(t.p,{children:"支持混合使用字符串和正则表达式，正则表达式可以实现更复杂的匹配逻辑，如开头/结尾匹配、模式匹配等。"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要匹配的目标字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"patterns"}),n.jsx("td",{children:n.jsx("code",{children:"(string | RegExp)[]"})}),n.jsx("td",{children:"匹配规则列表，支持字符串和正则表达式混合"})]})]})]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否匹配任一规则"})]})})]}),`
`,n.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(t.h3,{id:"indexts",children:"index.ts"}),`
`,n.jsxs(t.p,{children:["核心实现文件，使用 ",n.jsx(t.code,{children:"Array.some()"})," 遍历规则列表："]}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"字符串规则"}),"：使用 ",n.jsx(t.code,{children:"String.includes()"})," 检查目标值是否包含该字符串"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"正则规则"}),"：使用 ",n.jsx(t.code,{children:"RegExp.test()"})," 检查目标值是否匹配正则表达式"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"短路求值"}),"：一旦匹配任一规则立即返回 ",n.jsx(t.code,{children:"true"}),"，提升性能"]}),`
`]})]})}function m(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{m as default};
