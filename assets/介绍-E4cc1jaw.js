import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import camelCase from '../../../packages/js-utils/src/camelCase'

const basicDemo = () => {
  action('camelCase - 各种格式转换')({
    'foo bar': camelCase('foo bar'),
    'Foo Bar': camelCase('Foo Bar'),
    'FOO BAR': camelCase('FOO BAR'),
    '--foo-bar--': camelCase('--foo-bar--'),
    '__foo_bar__': camelCase('__foo_bar__'),
    'fooBar': camelCase('fooBar'),
  })

  action('camelCase - 双重转换幂等性')({
    原始: 'foo bar',
    第一次: camelCase('foo bar'),
    第二次: camelCase(camelCase('foo bar')),
    说明: '连续两次转换结果相同',
  })
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import camelCase from '../../../packages/js-utils/src/camelCase'

const numberAndAcronymDemo = () => {
  // 含数字的字符串
  action('camelCase - 含数字处理')({
    '12 feet': camelCase('12 feet'),
    'enable 6h format': camelCase('enable 6h format'),
    'enable 24H format': camelCase('enable 24H format'),
    'too legit 2 quit': camelCase('too legit 2 quit'),
    'walk 500 miles': camelCase('walk 500 miles'),
    'xhr2 request': camelCase('xhr2 request'),
  })

  // 首字母缩略词
  action('camelCase - 首字母缩略词')({
    'safe HTML': camelCase('safe HTML'),
    'safeHTML': camelCase('safeHTML'),
    'escape HTML entities': camelCase('escape HTML entities'),
    'escapeHTMLEntities': camelCase('escapeHTMLEntities'),
    'XMLHttpRequest': camelCase('XMLHttpRequest'),
  })
}

export default numberAndAcronymDemo
`;function a(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"camelcase",children:"camelCase"}),`
`,e.jsx(n.p,{children:"将字符串转换为驼峰命名格式。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"camelCase"})," 将各种格式的字符串（空格分隔、连字符分隔、下划线分隔、PascalCase 等）统一转换为小驼峰命名（lowerCamelCase）格式。内部先用 ",e.jsx(n.code,{children:"words"})," 函数拆分单词，再将首个单词全小写、后续单词首字母大写后拼接。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["CSS 属性名转 JS 属性名（",e.jsx(n.code,{children:"background-color"})," → ",e.jsx(n.code,{children:"backgroundColor"}),"）"]}),`
`,e.jsx(n.li,{children:"API 字段命名风格统一"}),`
`,e.jsx(n.li,{children:"代码风格转换工具"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础转换",children:"基础转换"}),`
`,e.jsx(n.p,{children:"支持空格、连字符、下划线等多种分隔格式，且双重转换结果幂等。"}),`
`,e.jsx(c,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"数字与缩略词处理",children:"数字与缩略词处理"}),`
`,e.jsx(n.p,{children:"正确处理含数字的字符串和首字母缩略词。"}),`
`,e.jsx(c,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"str"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"描述：驼峰格式的字符串"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"camelCase/index.ts"})," 导出 camelCase 函数，依赖 ",e.jsx(n.code,{children:"words"})," 函数拆分单词"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 输入字符串 → words 拆分为单词数组 → 首个单词全小写，后续首字母大写 → 拼接"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": ",e.jsx(n.code,{children:"words"})," 函数使用正则匹配各种单词边界"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 字符串 → words() 拆分 → map 转换大小写 → join 拼接"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{j as default};
