import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import type DeepOptional from '../../../packages/js-utils/src/DeepOptional'

interface User {
  name: string
  profile: {
    age: number
    address: string
  }
}

const normalDemo = () => {
  // 将 profile.age 变为可选
  type UserWithOptionalAge = DeepOptional<User, ['profile', 'age']>

  const user: UserWithOptionalAge = {
    name: 'John',
    profile: {
      address: 'Beijing',
      // age 现在是可选的
    },
  }
  action('DeepOptional 使用示例')(user)
}

export default normalDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"deepoptional",children:"DeepOptional"}),`
`,n.jsx(e.p,{children:"DeepOptional 是一个用于将嵌套对象中指定路径的属性变为可选的类型工具。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type DeepOptional<T, K extends Array<string | number | symbol>>
`})}),`
`,n.jsx(e.h2,{id:"泛型参数",children:"泛型参数"}),`
`,n.jsx(e.h3,{id:"t",children:"T"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"object"})]}),`
`,n.jsx(e.li,{children:"描述：要处理的对象类型"}),`
`]}),`
`,n.jsx(e.h3,{id:"k",children:"K"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Array<string | number | symbol>"})]}),`
`,n.jsx(e.li,{children:"描述：属性路径数组，指定要变为可选的嵌套属性路径"}),`
`]})]})}function m(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{m as default};
