import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const propertyOfDemo = () => {
  const object = { a: { b: 2 } }
  const fn = propertyOf(object)
  action('propertyOf 演示')({ '"a.b"': fn('a.b') })
}

export default propertyOfDemo
`,i=`import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const edgeCaseDemo = () => {
  action('propertyOf - 边界情况')({
    说明: '验证 propertyOf 的边界情况',
    空值测试: (() => { try { return propertyOf() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
`;function t(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"propertyof",children:"propertyOf"}),`
`,r.jsx(e.p,{children:"与 property 相反，创建一个函数，返回给定路径在指定对象上的值"}),`
`,r.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"propertyOf"})," 与 ",r.jsx(e.code,{children:"property"})," 的柯里化参数顺序相反。"]}),`
`,r.jsxs(e.p,{children:[r.jsxs(e.strong,{children:["与 ",r.jsx(e.code,{children:"property"})," 的区别"]}),"："]}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"函数"}),r.jsx("th",{children:"先固定"}),r.jsx("th",{children:"返回的函数接收"}),r.jsx("th",{children:"适用场景"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"property"})}),r.jsx("td",{children:"路径"}),r.jsx("td",{children:"不同对象"}),r.jsxs("td",{children:["对多个对象提取同一属性，如 ",r.jsx("code",{children:"objects.map(property('a.b'))"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"propertyOf"})}),r.jsx("td",{children:"对象"}),r.jsx("td",{children:"不同路径"}),r.jsxs("td",{children:["对同一对象提取多个属性，如 ",r.jsx("code",{children:"paths.map(propertyOf(obj))"})]})]})]})]}),`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"数据处理和转换"}),`
`,r.jsx(e.li,{children:"功能组合和增强"}),`
`,r.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,r.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,r.jsxs(e.p,{children:["点击按钮查看 ",r.jsx(e.code,{children:"propertyOf"})," 的基本使用效果。"]}),`
`,r.jsx(s,{language:"typescript",children:d}),`
`,r.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,r.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,r.jsx(s,{language:"typescript",children:i}),`
`,r.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"object"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要查询的对象"})]})})]}),`
`,r.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["类型：",r.jsx(e.code,{children:"((path: string | string[])"})]}),`
`,r.jsx(e.li,{children:"描述：返回新的函数"}),`
`]}),`
`,r.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"文件职责"}),": ",r.jsx(e.code,{children:"propertyOf/index.ts"})," 导出 propertyOf 函数"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"核心流程"}),": 与 property 相反，创建一个函数，返回给定路径在指定对象上的值"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(n={}){const{wrapper:e}={...c(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{a as default};
