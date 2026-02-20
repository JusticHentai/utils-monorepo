import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import lowerCase from '../../../packages/js-utils/src/lowerCase'
import upperCase from '../../../packages/js-utils/src/upperCase'

const lowerCaseDemo = () => {
  // lodash 测试: 各种分隔符形式转为空格分隔小写
  action('lowerCase - lodash 测试用例')({
    '--Foo-Bar--': lowerCase('--Foo-Bar--'),
    'fooBar': lowerCase('fooBar'),
    '__FOO_BAR__': lowerCase('__FOO_BAR__'),
    说明: '所有形式都转为 "foo bar"',
  })

  action('lowerCase - 更多用例')({
    'Foo Bar': lowerCase('Foo Bar'),
    'HELLO WORLD': lowerCase('HELLO WORLD'),
    'XMLParser': lowerCase('XMLParser'),
  })

  // upperCase
  action('upperCase')({
    'foo bar': upperCase('foo bar'),
    'fooBar': upperCase('fooBar'),
    '--foo-bar--': upperCase('--foo-bar--'),
  })
}

export default lowerCaseDemo`,i=`import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'
import toLower from '../../../packages/js-utils/src/toLower'
import toUpper from '../../../packages/js-utils/src/toUpper'

const startCaseDemo = () => {
  action('startCase')({
    'fooBar': startCase('fooBar'),
    '--foo-bar--': startCase('--foo-bar--'),
    'HELLO_WORLD': startCase('HELLO_WORLD'),
  })

  action('toLower / toUpper')({
    'toLower("HELLO")': toLower('HELLO'),
    'toUpper("hello")': toUpper('hello'),
  })
}

export default startCaseDemo
`;function n(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"lowercase",children:"lowerCase"}),`
`,e.jsx(r.p,{children:"字符串大小写转换工具集。"}),`
`,e.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"lowerCase"})," 将字符串转换为以空格分隔的小写形式。还提供 ",e.jsx(r.code,{children:"upperCase"}),"、",e.jsx(r.code,{children:"startCase"}),"、",e.jsx(r.code,{children:"toLower"}),"、",e.jsx(r.code,{children:"toUpper"}),"。"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"文本格式化和规范化"}),`
`,e.jsx(r.li,{children:"标题生成（startCase）"}),`
`,e.jsx(r.li,{children:"不区分大小写的字符串处理"}),`
`]}),`
`,e.jsx(r.h2,{id:"大小写转换",children:"大小写转换"}),`
`,e.jsxs(r.p,{children:["使用 ",e.jsx(r.code,{children:"lowerCase"})," 和 ",e.jsx(r.code,{children:"upperCase"})," 进行单词级别的大小写转换。"]}),`
`,e.jsx(o,{language:"typescript",children:a}),`
`,e.jsx(r.h2,{id:"startcase-与简单转换",children:"startCase 与简单转换"}),`
`,e.jsxs(r.p,{children:["使用 ",e.jsx(r.code,{children:"startCase"})," 将字符串转为首字母大写形式，",e.jsx(r.code,{children:"toLower"}),"/",e.jsx(r.code,{children:"toUpper"})," 做简单大小写转换。"]}),`
`,e.jsx(o,{language:"typescript",children:i}),`
`,e.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,e.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["类型：",e.jsx(r.code,{children:"string"})]}),`
`,e.jsx(r.li,{children:"描述：转换后的字符串"}),`
`]}),`
`,e.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"文件职责"}),": ",e.jsx(r.code,{children:"index.ts"})," 提供多种字符串大小写转换函数"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"核心流程"}),": 使用正则分割单词 → 转换每个单词大小写 → 重新拼接"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"关键技术点"}),": 单词分割正则（处理 camelCase、snake_case 等格式）"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"数据流向"}),": 输入字符串 → 正则分割单词 → 大小写转换 → 拼接返回"]}),`
`]})]})}function p(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};
