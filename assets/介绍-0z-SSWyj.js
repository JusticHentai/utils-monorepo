import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import assign from '../../../packages/js-utils/src/assign'

const assignDemo = () => {
  // 基础合并
  action('assign - 基础属性合并')({
    输入: ['{ a: 1 }', '{ b: 2 }'],
    结果: assign({ a: 1 }, { b: 2 }),
  })

  // 多个源对象
  action('assign - 多个源对象')({
    输入: ['{ a: 1 }', '{ b: 2 }', '{ c: 3 }'],
    结果: assign({ a: 1 }, { b: 2 }, { c: 3 }),
  })

  // 后续源覆盖前面的值
  action('assign - 同名属性覆盖')({
    输入: ['{ a: 1, b: 2 }', '{ b: 2, c: 2 }', '{ c: 3 }'],
    结果: assign({ a: 1, b: 2 }, { b: 2, c: 2 }, { c: 3 }),
    说明: '后续源对象的同名属性会覆盖前面的值',
  })
}

export default assignDemo
`,d=`import { action } from 'storybook/actions'
import assign from '../../../packages/js-utils/src/assign'

const nullishDemo = () => {
  // null/undefined 值正常赋值
  const result = assign({ a: 1, b: 2 }, { a: null, b: undefined, c: null })

  action('assign - nullish 值赋值')({
    输入: ['{ a: 1, b: 2 }', '{ a: null, b: undefined, c: null }'],
    结果: result,
    说明: 'null 和 undefined 作为源值时会正常覆盖目标属性',
  })

  // 字符串源被转换为对象
  const strResult = assign({}, 'abc')
  action('assign - 字符串源转对象')({
    输入: ['{}', '"abc"'],
    结果: strResult,
    说明: '字符串会被当作类数组对象，索引作为 key',
  })
}

export default nullishDemo
`;function c(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"assign",children:"assign"}),`
`,n.jsx(s.p,{children:"将源对象的自有可枚举属性分配到目标对象。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"assign"})," 函数将一个或多个源对象的自有可枚举属性复制到目标对象。后续源对象的同名属性会覆盖前面的值。它类似于 ",n.jsx(s.code,{children:"Object.assign"}),"，但提供了更一致的行为。"]}),`
`,n.jsxs(s.p,{children:["同时提供了 ",n.jsx(s.code,{children:"assignIn"}),"（包含继承属性）、",n.jsx(s.code,{children:"assignWith"}),"（支持自定义合并函数）等变体。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"合并配置对象"}),`
`,n.jsx(s.li,{children:"浅拷贝对象"}),`
`,n.jsx(s.li,{children:"扩展默认选项"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础合并与覆盖",children:"基础合并与覆盖"}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"nullish-值与字符串源",children:"nullish 值与字符串源"}),`
`,n.jsx(s.p,{children:"null 和 undefined 作为源值时会正常赋值；字符串源会被当作类数组对象处理。"}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"object"})}),n.jsx("td",{children:"目标对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...sources"}),n.jsx("td",{children:n.jsx("code",{children:"object[]"})}),n.jsx("td",{children:"源对象（一个或多个）"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"object"})]}),`
`,n.jsx(s.li,{children:"描述：修改后的目标对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"assign/index.ts"})," 导出 assign、assignIn、assignWith、assignInWith、extend、extendWith"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历源对象的属性，依次赋值到目标对象"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": ",n.jsx(s.code,{children:"Object.keys"}),"（自有属性）vs ",n.jsx(s.code,{children:"for...in"}),"（含继承属性）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 目标对象 → 遍历每个源对象 → 复制属性 → 返回修改后的目标对象"]}),`
`]})]})}function g(i={}){const{wrapper:s}={...l(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(c,{...i})}):c(i)}export{g as default};
