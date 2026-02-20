import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getPosition from '../../../packages/js-utils/src/getPosition'

const normalDemo = () => {
  const res = getPosition({ index: 5, column: 3 })
  action('索引')({ index: 5 })
  action('列数')({ column: 3 })
  action('行列转 2d 坐标系')(res)
}

export default normalDemo
`;function e(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"getposition",children:"getPosition"}),`
`,n.jsx(i.p,{children:"getPosition 是一个用于将行列索引转换为 2d 坐标系的函数。"}),`
`,n.jsx(i.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.h3,{id:"options",children:"options"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Options"})]}),`
`,n.jsxs(i.li,{children:["描述：选项对象",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"index"}),": 索引，从 0 开始"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"column"}),": 列数"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Point"})]}),`
`,n.jsxs(i.li,{children:["描述：2d 坐标点",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"x"}),": 横坐标"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"y"}),": 纵坐标"]}),`
`]}),`
`]}),`
`]})]})}function m(o={}){const{wrapper:i}={...s(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{m as default};
