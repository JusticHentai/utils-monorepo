import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import updateWith from '../../../packages/js-utils/src/updateWith'

const updateWithDemo = () => {
  const object = {}
  action('updateWith 演示')({
    '使用 Object 自定义创建': updateWith(
      object,
      '[0][1]',
      () => 'a',
      Object
    ),
  })
}

export default updateWithDemo
`,c=`import { action } from 'storybook/actions'
import updateWith from '../../../packages/js-utils/src/updateWith'

const edgeCaseDemo = () => {
  action('updateWith - 边界情况')({
    '自定义': updateWith({}, '[0][1]', () => 'a', Object)
  })
}

export default edgeCaseDemo
`;function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"updatewith",children:"updateWith"}),`
`,n.jsx(e.p,{children:"类似于 update，但可以自定义路径上创建的值"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"updateWith"})," 类似于 update，但可以自定义路径上创建的值。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"updateWith"})," 的基本使用效果。"]}),`
`,n.jsx(d,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要修改的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要更新的属性路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"updater"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"更新函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"自定义创建路径的函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string[]"})]}),`
`,n.jsx(e.li,{children:"描述：返回修改后的对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"updateWith/index.ts"})," 导出 updateWith 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 类似于 update，但可以自定义路径上创建的值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{p as default};
