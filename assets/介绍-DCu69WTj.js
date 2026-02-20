import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import formatDateByLocale from '../../../packages/js-utils/src/formatDateByLocale'

const zhCNDemo = () => {
  const now = Date.now()
  // 使用中文地区格式，上海时区
  const result = formatDateByLocale({
    ts: now,
    locale: 'zh-CN',
    timeZone: 'Asia/Shanghai',
  })

  action('中文格式 + 上海时区')(result)
}

export default zhCNDemo
`,i=`import { action } from 'storybook/actions'
import formatDateByLocale from '../../../packages/js-utils/src/formatDateByLocale'

const enUSDemo = () => {
  const now = Date.now()
  // 使用英文地区格式，纽约时区
  const result = formatDateByLocale({
    ts: now,
    locale: 'en-US',
    timeZone: 'America/New_York',
  })

  action('英文格式 + 纽约时区')(result)
}

export default enUSDemo
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"formatdatebylocale",children:"formatDateByLocale"}),`
`,n.jsx(e.p,{children:"formatDateByLocale 是一个用于将时间戳格式化为指定地区和时区的日期时间字符串的函数。"}),`
`,n.jsx(e.h2,{id:"中文格式--上海时区示例",children:"中文格式 + 上海时区示例"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"英文格式--纽约时区示例",children:"英文格式 + 纽约时区示例"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"options",children:"options"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"必填"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"ts"})}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"是"}),n.jsx("td",{children:"时间戳（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"locale"})}),n.jsx("td",{children:n.jsx("code",{children:"Intl.LocalesArgument"})}),n.jsx("td",{children:"否"}),n.jsx("td",{children:"地区标识符，影响日期格式显示方式，默认 'zh-CN'"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"timeZone"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"否"}),n.jsx("td",{children:"时区标识符，影响时间转换，如 'Asia/Shanghai'、'America/New_York'"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:'描述：格式化后的日期时间字符串，如 "2024.01.01 12:00:00"'}),`
`]}),`
`,n.jsx(e.h2,{id:"locale-与-timezone-的区别",children:"locale 与 timeZone 的区别"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"locale"}),"：影响日期的",n.jsx(e.strong,{children:"显示格式"}),"（如日期顺序、分隔符）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"timeZone"}),"：影响时间的",n.jsx(e.strong,{children:"实际值"}),"（转换到指定时区的时间）"]}),`
`]})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
