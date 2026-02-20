import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as n}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import capitalize from '../../../packages/js-utils/src/capitalize'

const capitalizeDemo = () => {
  action('capitalize - 首字母大写其余小写')({
    'fred': capitalize('fred'),
    'Fred': capitalize('Fred'),
    'FRED': capitalize('FRED'),
    ' fred (前导空格)': capitalize(' fred'),
    'hello world': capitalize('hello world'),
    说明: '首字母大写，其余全部转小写。前导空格的字符串不会变化',
  })
}

export default capitalizeDemo
`,l=`import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const upperFirstDemo = () => {
  action('upperFirst - 仅首字母大写，其余不变')({
    'fred': upperFirst('fred'),
    'FRED': upperFirst('FRED'),
    说明: '与 capitalize 不同，upperFirst 不会将其余字母转小写',
  })

  action('lowerFirst - 仅首字母小写，其余不变')({
    'Fred': lowerFirst('Fred'),
    'FRED': lowerFirst('FRED'),
  })
}

export default upperFirstDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"capitalize",children:"capitalize"}),`
`,r.jsxs(e.p,{children:["首字母大写，其余小写。同时提供 ",r.jsx(e.code,{children:"upperFirst"})," 和 ",r.jsx(e.code,{children:"lowerFirst"})," 变体。"]}),`
`,r.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"capitalize"})," 将字符串首字母转为大写，其余转为小写。",r.jsx(e.code,{children:"upperFirst"})," 只将首字母转大写，其余不变。",r.jsx(e.code,{children:"lowerFirst"})," 只将首字母转小写。常用于文本格式化、标题处理等场景。"]}),`
`,r.jsx(e.h2,{id:"capitalize---首字母大写其余小写",children:"capitalize - 首字母大写其余小写"}),`
`,r.jsx(n,{language:"typescript",children:c}),`
`,r.jsx(e.h2,{id:"upperfirst--lowerfirst",children:"upperFirst / lowerFirst"}),`
`,r.jsx(n,{language:"typescript",children:l}),`
`,r.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"str"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,r.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["类型：",r.jsx(e.code,{children:"string"})]}),`
`,r.jsx(e.li,{children:"描述：转换后的字符串"}),`
`]}),`
`,r.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"文件职责"}),": ",r.jsx(e.code,{children:"capitalize/index.ts"})," 导出 capitalize（default）、upperFirst、lowerFirst"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"核心流程"}),": 提取首字符和剩余字符串，分别进行大小写转换后拼接"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"关键技术点"}),": ",r.jsx(e.code,{children:"String.prototype.charAt"}),"、",r.jsx(e.code,{children:"toUpperCase"}),"、",r.jsx(e.code,{children:"toLowerCase"})]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"数据流向"}),": 输入字符串 → 分离首字符 → 转换大小写 → 拼接返回"]}),`
`]})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(s,{...i})}):s(i)}export{j as default};
