import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import type Point from '../../../packages/js-utils/src/Point'

const normalDemo = () => {
  const point: Point = { x: 10, y: 20 }
  action('创建 Point 对象')(point)
}

export default normalDemo
`;function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"point",children:"Point"}),`
`,n.jsx(e.p,{children:"Point 是一个用于表示 2d 点的类型。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface Point {
  x: number
  y: number
}
`})}),`
`,n.jsx(e.h2,{id:"属性介绍",children:"属性介绍"}),`
`,n.jsx(e.h3,{id:"x",children:"x"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：横坐标"}),`
`]}),`
`,n.jsx(e.h3,{id:"y",children:"y"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：纵坐标"}),`
`]})]})}function p(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{p as default};
