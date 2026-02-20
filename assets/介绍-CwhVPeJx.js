import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import matchesProperty from '../../../packages/js-utils/src/matchesProperty'

const matchesPropertyDemo = () => {
  // lodash 测试: 基础属性匹配
  const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
  ]

  const matchA1 = matchesProperty('a', 1)
  action('matchesProperty - 基础匹配')({
    'matchesProperty("a", 1)(objects[0])': matchA1(objects[0]),
    'matchesProperty("a", 1)(objects[1])': matchA1(objects[1]),
    说明: '检查属性 a 是否等于 1',
  })

  // 深层路径 (lodash 测试)
  const deepObj = { a: { b: 2 } }
  const matchDeep = matchesProperty('a.b', 2)
  action('matchesProperty - 深层路径')({
    'matchesProperty("a.b", 2)': matchDeep(deepObj),
    说明: '支持 dot notation 路径',
  })

  // 数组路径 (lodash 测试)
  const matchArr = matchesProperty(['a', 'b'], 2)
  action('matchesProperty - 数组路径')({
    'matchesProperty(["a", "b"], 2)': matchArr(deepObj),
  })

  // 路径不存在返回 false (lodash 测试)
  const matchMissing = matchesProperty('x.y.z', 1)
  action('matchesProperty - 路径不存在')({
    'matchesProperty("x.y.z", 1)({})': matchMissing({} as any),
    期望: false,
  })

  // 实际使用: filter
  const users = [
    { name: 'Alice', info: { active: true } },
    { name: 'Bob', info: { active: false } },
    { name: 'Charlie', info: { active: true } },
  ]
  const isActive = matchesProperty('info.active', true)
  action('matchesProperty - 过滤活跃用户')({
    结果: users.filter(isActive),
  })
}

export default matchesPropertyDemo`;function r(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"matchesproperty",children:"matchesProperty"}),`
`,e.jsx(t.p,{children:"创建路径属性值匹配的谓词函数。"}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"matchesProperty"})," 创建一个函数，检查对象指定路径上的属性值是否等于给定值。"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"过滤具有特定属性值的对象"}),`
`,e.jsx(t.li,{children:"配合 filter、find 等集合方法"}),`
`,e.jsx(t.li,{children:"配置驱动的条件过滤"}),`
`]}),`
`,e.jsx(t.h2,{id:"属性路径匹配",children:"属性路径匹配"}),`
`,e.jsxs(t.p,{children:["使用 ",e.jsx(t.code,{children:"matchesProperty"})," 创建匹配谓词，检查对象指定路径的属性值。"]}),`
`,e.jsx(c,{language:"typescript",children:o}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"path"}),e.jsx("td",{children:e.jsx("code",{children:"string | string[]"})}),e.jsx("td",{children:"属性路径"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"srcValue"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要匹配的值"})]})]})]}),`
`,e.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["类型：",e.jsx(t.code,{children:"(object: T) => boolean"})]}),`
`,e.jsx(t.li,{children:"描述：返回一个匹配谓词函数"}),`
`]}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"文件职责"}),": ",e.jsx(t.code,{children:"index.ts"})," 创建基于路径和值的匹配谓词"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"核心流程"}),": 接收路径和值 → 返回闭包函数 → 闭包内解析路径获取值 → 深度比较"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"关键技术点"}),": 路径解析、深度相等比较、闭包模式"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"数据流向"}),": 路径 + 值 → 创建闭包 → 调用时解析对象路径 → 比较返回布尔值"]}),`
`]})]})}function x(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
