import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import type SetOptional from '../../../packages/js-utils/src/SetOptional'

interface User {
  id: number
  name: string
  email: string
}

const normalDemo = () => {
  // 将 email 变为可选
  type UserWithOptionalEmail = SetOptional<User, 'email'>

  const user: UserWithOptionalEmail = {
    id: 1,
    name: 'John',
    // email 现在是可选的
  }
  action('SetOptional 使用示例')(user)
}

export default normalDemo
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"setoptional",children:"SetOptional"}),`
`,n.jsx(e.p,{children:"SetOptional 是一个用于将 interface 中指定的 key 设置为可选的类型工具。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
`})}),`
`,n.jsx(e.h2,{id:"泛型参数",children:"泛型参数"}),`
`,n.jsx(e.h3,{id:"t",children:"T"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"object"})]}),`
`,n.jsx(e.li,{children:"描述：要处理的对象类型"}),`
`]}),`
`,n.jsx(e.h3,{id:"k",children:"K"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"keyof T"})]}),`
`,n.jsx(e.li,{children:"描述：要设置为可选的属性键"}),`
`]})]})}function p(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{p as default};
