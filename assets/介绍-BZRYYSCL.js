import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import kebabCase from '../../../packages/js-utils/src/kebabCase'

const basicDemo = () => {
  action('kebabCase 转换')({
    'Foo Bar': kebabCase('Foo Bar'),
    fooBar: kebabCase('fooBar'),
    __FOO_BAR__: kebabCase('__FOO_BAR__'),
    'hello world': kebabCase('hello world'),
  })
}

export default basicDemo
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"kebabcase",children:"kebabCase"}),`
`,n.jsx(e.p,{children:"转换字符串为短横线命名格式（kebab-case）。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"kebabCase"})," 函数将字符串转换为短横线分隔的小写格式。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"CSS 类名生成"}),`
`,n.jsx(e.li,{children:"URL slug 生成"}),`
`,n.jsx(e.li,{children:"HTML 属性名转换"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：短横线格式的字符串"}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
