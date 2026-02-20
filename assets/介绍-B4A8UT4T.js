import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import snakeCase from '../../../packages/js-utils/src/snakeCase'

const basicDemo = () => {
  action('snakeCase 转换')({
    'Foo Bar': snakeCase('Foo Bar'),
    fooBar: snakeCase('fooBar'),
    '--FOO-BAR--': snakeCase('--FOO-BAR--'),
    'hello world': snakeCase('hello world'),
  })
}

export default basicDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"snakecase",children:"snakeCase"}),`
`,n.jsx(s.p,{children:"转换字符串为下划线命名格式（snake_case）。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"snakeCase"})," 函数将字符串转换为下划线分隔的小写格式。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据库字段名转换"}),`
`,n.jsx(s.li,{children:"API 参数命名"}),`
`,n.jsx(s.li,{children:"Python 风格命名"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string"})]}),`
`,n.jsx(s.li,{children:"描述：下划线格式的字符串"}),`
`]})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
