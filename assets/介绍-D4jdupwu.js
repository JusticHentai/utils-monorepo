import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import { action } from 'storybook/actions'
import castArray from '../../../packages/js-utils/src/castArray'

const basicDemo = () => {
  action('castArray - 各种类型包装为数组')({
    数字: castArray(1),
    字符串: castArray('abc'),
    对象: castArray({ a: 1 }),
    布尔值: castArray(true),
    null: castArray(null),
    undefined: castArray(undefined),
    0: castArray(0),
    空字符串: castArray(''),
    false: castArray(false),
  })
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import castArray from '../../../packages/js-utils/src/castArray'

const arrayDemo = () => {
  const arr = [1, 2, 3]
  const result = castArray(arr)

  action('castArray - 数组返回同一引用')({
    输入: arr,
    输出: result,
    是否同一引用: arr === result,
    说明: '已经是数组的值直接返回原引用，不会创建新数组',
  })

  // 嵌套数组不会被展平
  const nested = [[1, 2], [3, 4]]
  action('castArray - 嵌套数组不展平')({
    输入: nested,
    输出: castArray(nested),
    是否同一引用: nested === castArray(nested),
  })
}

export default arrayDemo
`;function t(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"castarray",children:"castArray"}),`
`,n.jsx(r.p,{children:"如果 value 不是数组，则将其转换为数组。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"castArray"})," 确保值总是以数组形式存在。如果传入的值已经是数组，直接返回原数组；否则将值包装在数组中。常用于函数参数标准化，确保内部逻辑可以统一按数组处理。"]}),`
`,n.jsx(r.h2,{id:"非数组转数组",children:"非数组转数组"}),`
`,n.jsx(e,{language:"typescript",children:a}),`
`,n.jsx(r.h2,{id:"数组保持不变",children:"数组保持不变"}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T | T[]"})}),n.jsx("td",{children:"要转换的值"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T[]"})]}),`
`,n.jsx(r.li,{children:"描述：转换后的数组"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"castArray/index.ts"})," 导出 ",n.jsx(r.code,{children:"castArray"})," 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 检查值是否为数组，是则直接返回，否则包装为单元素数组"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": ",n.jsx(r.code,{children:"Array.isArray"})," 类型判断"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 输入值 → isArray 判断 → 返回原数组或 [value]"]}),`
`]})]})}function y(s={}){const{wrapper:r}={...c(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(t,{...s})}):t(s)}export{y as default};
