import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as n}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const p=`import { action } from 'storybook/actions'
import escape from '../../../packages/js-utils/src/escape'
import unescape from '../../../packages/js-utils/src/unescape'

const escapeDemo = () => {
  const unescapedChars = '&<>"\\'/'
  const doubled = unescapedChars + unescapedChars

  // 转义 HTML 特殊字符
  action('escape - 转义 HTML 特殊字符')({
    原始: doubled,
    转义后: escape(doubled),
  })

  // 不转义普通字符串
  action('escape - 普通字符串不变')({
    'escape("abc")': escape('abc'),
  })

  // escape 和 unescape 互逆
  const escaped = escape(doubled)
  action('escape / unescape 互逆')({
    escaped,
    'unescape(escaped)': unescape(escaped),
    '再 escape': escape(unescape(escaped)),
    '互逆相等': escape(unescape(escaped)) === escaped,
  })

  // 反引号和斜杠不会被转义
  action('escape - 不转义 \` 和 /')({
    'escape("\`")': escape('\`'),
    'escape("/")': escape('/'),
  })
}

export default escapeDemo`,r=`import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const escapeRegExpDemo = () => {
  action('escapeRegExp')({
    '[lodash](https://lodash.com/)': escapeRegExp('[lodash](https://lodash.com/)'),
    'a.b*c': escapeRegExp('a.b*c'),
  })
}

export default escapeRegExpDemo
`;function a(c){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"escape",children:"escape"}),`
`,e.jsxs(s.p,{children:["转义 HTML 特殊字符，防止 XSS 攻击。同时提供 ",e.jsx(s.code,{children:"unescape"})," 和 ",e.jsx(s.code,{children:"escapeRegExp"}),"。"]}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"escape"})," 将 HTML 特殊字符（",e.jsx(s.code,{children:"&"}),", ",e.jsx(s.code,{children:"<"}),", ",e.jsx(s.code,{children:">"}),", ",e.jsx(s.code,{children:'"'}),", ",e.jsx(s.code,{children:"'"}),"）转换为对应的 HTML 实体。",e.jsx(s.code,{children:"unescape"})," 执行反向操作。",e.jsx(s.code,{children:"escapeRegExp"})," 转义正则表达式中的特殊字符。常用于安全地渲染用户输入内容和动态构建正则。"]}),`
`,e.jsx(s.h2,{id:"escape--unescape---html-转义",children:"escape / unescape - HTML 转义"}),`
`,e.jsx(n,{language:"typescript",children:p}),`
`,e.jsx(s.h2,{id:"escaperegexp---正则转义",children:"escapeRegExp - 正则转义"}),`
`,e.jsx(n,{language:"typescript",children:r}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"要转义的字符串"})]})})]}),`
`,e.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["类型：",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.li,{children:"描述：转义后的字符串"}),`
`]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"文件职责"}),": ",e.jsx(s.code,{children:"escape/index.ts"})," 导出 escape（default）、unescape、escapeRegExp"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"核心流程"}),": 使用字符映射表和正则替换特殊字符"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"关键技术点"}),": HTML 实体映射、",e.jsx(s.code,{children:"String.prototype.replace"})," 正则替换"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"数据流向"}),": 输入字符串 → 正则匹配特殊字符 → 替换为对应实体/转义 → 返回"]}),`
`]})]})}function j(c={}){const{wrapper:s}={...d(),...c.components};return s?e.jsx(s,{...c,children:e.jsx(a,{...c})}):a(c)}export{j as default};
