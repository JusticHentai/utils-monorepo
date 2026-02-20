import{j as i}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import isFiniteNum from '../../../packages/js-utils/src/isFiniteNum'

const isFiniteNumDemo = () => {
  action('isFiniteNum 演示')({
    '3': isFiniteNum(3),
    'Number.MIN_VALUE': isFiniteNum(Number.MIN_VALUE),
    'Infinity': isFiniteNum(Infinity),
    'NaN': isFiniteNum(NaN),
    '"3"': isFiniteNum('3'),
  })
}

export default isFiniteNumDemo
`,c=`import { action } from 'storybook/actions'
import isFiniteNum from '../../../packages/js-utils/src/isFiniteNum'

const edgeCaseDemo = () => {
  const results = {
    '1': isFiniteNum(1),
    'Infinity': isFiniteNum(Infinity),
    '-Infinity': isFiniteNum(-Infinity),
    'NaN': isFiniteNum(NaN),
    '"1"字符串': isFiniteNum('1'),
    'null': isFiniteNum(null),
  }

  action('isFiniteNum - 边界情况')(results)
}

export default edgeCaseDemo
`;function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(n.h1,{id:"isfinitenum",children:"isFiniteNum"}),`
`,i.jsx(n.p,{children:"检查 value 是否是有限数值"}),`
`,i.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,i.jsxs(n.p,{children:[i.jsx(n.code,{children:"isFiniteNum"})," 检查 value 是否是有限数值。"]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,i.jsx(n.li,{children:"数据验证和过滤"}),`
`,i.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,i.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,i.jsxs(n.p,{children:["点击按钮查看 ",i.jsx(n.code,{children:"isFiniteNum"})," 的基本使用效果。"]}),`
`,i.jsx(s,{language:"typescript",children:l}),`
`,i.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,i.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,i.jsx(s,{language:"typescript",children:c}),`
`,i.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"参数名"}),i.jsx("th",{children:"类型"}),i.jsx("th",{children:"描述"})]})}),i.jsx("tbody",{children:i.jsxs("tr",{children:[i.jsx("td",{children:"value"}),i.jsx("td",{children:i.jsx("code",{children:"unknown"})}),i.jsx("td",{children:"要检查的值"})]})})]}),`
`,i.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["类型：",i.jsx(n.code,{children:"value is number"})]}),`
`,i.jsx(n.li,{children:"描述：如果是有限数值，返回 true"}),`
`]}),`
`,i.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,i.jsxs(n.ol,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"文件职责"}),": ",i.jsx(n.code,{children:"isFiniteNum/index.ts"})," 导出 isFiniteNum 函数"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是有限数值"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function j(e={}){const{wrapper:n}={...r(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(t,{...e})}):t(e)}export{j as default};
