import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import walk from '../../../packages/js-utils/src/walk'

const normalDemo = async () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: [4, 5],
  }

  action('遍历对象并处理值')(obj)

  await walk({
    obj,
    cb: ({ key, value, index, parent }) => {
      action('当前键名')(key)
      action('当前值')(value)
      action('当前对象索引')(index)
      action('父级路径数组')(parent)

      const newValue = value * 2
      action('新值')(newValue)

      return newValue
    },
  })

  action('遍历对象并处理值完成')(obj)
}

export default normalDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"walk",children:"walk"}),`
`,n.jsx(e.p,{children:"walk 是一个用于遍历对象并处理值的异步函数，如果是对象或者数组会递归遍历，其他类型则触发回调函数。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(c,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"obj",children:"obj"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Record<string, any>"})]}),`
`,n.jsx(e.li,{children:"描述：要遍历的对象"}),`
`]}),`
`,n.jsx(e.h3,{id:"cb",children:"cb"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(options: { key: string; value: any; index: Record<string, any>; parent: string[] }) => any | Promise<any>"})]}),`
`,n.jsxs(e.li,{children:["描述：回调函数",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"key"}),": 当前键名"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value"}),": 当前值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index"}),": 当前对象索引"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parent"}),": 父级路径数组"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"parent",children:"parent"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string[]"})]}),`
`,n.jsxs(e.li,{children:["描述：父级路径数组，默认值为 ",n.jsx(e.code,{children:"[]"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<void>"})]}),`
`,n.jsx(e.li,{children:"描述：异步遍历完成"}),`
`]})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
