import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import concat from '../../../packages/js-utils/src/concat'

const basicDemo = () => {
  // 基础连接
  const array = [1]
  const result = concat(array, 2, [3], [[4]])

  action('concat - 基础连接')({
    原数组: array,
    连接后: result,
    原数组不变: array,
    说明: '浅展开一层数组，[[4]] 保持为 [4]',
  })

  // 不传参只做浅克隆
  const arr = [1, 2, 3]
  const cloned = concat(arr)
  action('concat - 无参数浅克隆')({
    原数组: arr,
    克隆: cloned,
    是否同一引用: arr === cloned,
    说明: '不传额外参数时，返回原数组的浅克隆',
  })
}

export default basicDemo
`,o=`import { action } from 'storybook/actions'
import concat from '../../../packages/js-utils/src/concat'

const nestedDemo = () => {
  // 嵌套数组只展开一层
  action('concat - 嵌套数组只展开一层')({
    结果: concat([1], [2, 3], [[4, 5]]),
    说明: '[2, 3] 被展开，[[4, 5]] 展开为 [4, 5]（一个嵌套数组元素）',
  })

  // 稀疏数组
  const sparse1 = new Array(1)
  const sparse2 = new Array(1)
  const result = concat(sparse1, sparse2)
  action('concat - 稀疏数组当作密集数组')({
    结果: result,
    长度: result.length,
    '0 in result': 0 in result,
    说明: '稀疏数组的空位被当作 undefined',
  })
}

export default nestedDemo
`;function e(c){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"concat",children:"concat"}),`
`,n.jsx(s.p,{children:"创建一个新数组，将原数组与其他数组或值连接。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"concat"})," 将原数组与额外的值或数组连接成一个新数组。数组参数会被展开一层（浅展开），非数组值直接追加。原数组不会被修改。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"合并多个数据源"}),`
`,n.jsx(s.li,{children:"不可变数据更新"}),`
`,n.jsx(s.li,{children:"构建新数组而不修改原数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础连接",children:"基础连接"}),`
`,n.jsx(s.p,{children:"展示连接值和数组、不修改原数组、无参浅克隆。"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(s.h2,{id:"嵌套与稀疏数组",children:"嵌套与稀疏数组"}),`
`,n.jsx(s.p,{children:"只展开一层数组；稀疏数组的空位被当作 undefined。"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"原数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...values"}),n.jsx("td",{children:n.jsx("code",{children:"(T | T[])[]"})}),n.jsx("td",{children:"要连接的值或数组"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T[]"})]}),`
`,n.jsx(s.li,{children:"描述：连接后的新数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"concat/index.ts"})," 导出 concat 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 展开原数组 → 遍历 values → 数组展开一层，非数组直接 push → 返回新数组"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": ",n.jsx(s.code,{children:"Array.isArray"})," 判断，展开运算符"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 原数组浅拷贝 → 遍历追加 → 返回新数组"]}),`
`]})]})}function p(c={}){const{wrapper:s}={...t(),...c.components};return s?n.jsx(s,{...c,children:n.jsx(e,{...c})}):e(c)}export{p as default};
