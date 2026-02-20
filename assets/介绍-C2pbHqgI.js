import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import omit from '../../../packages/js-utils/src/omit'

const basicDemo = () => {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  // lodash 测试: 排除指定属性
  action('omit - 排除属性')({
    'omit(obj, ["a", "c"])': omit(object, ['a', 'c']),
    期望: { b: 2, d: 4 },
  })

  // lodash 测试: 不修改原对象
  const original = { a: { b: 2 } }
  const result = omit(original, ['a'] as any)
  action('omit - 不修改原对象')({
    原对象: original,
    结果: result,
    '原对象未变': JSON.stringify(original) === '{"a":{"b":2}}',
  })

  // lodash 测试: nullish 对象返回空
  action('omit - null/undefined')({
    'omit(null, [])': omit(null as any, []),
    说明: 'nullish 输入返回空对象',
  })
}

export default basicDemo`,r=`import { action } from 'storybook/actions'
import omitBy from '../../../packages/js-utils/src/omitBy'

const omitByDemo = () => {
  // lodash 测试: 根据谓词排除
  const object = { a: 1, b: 2, c: 3, d: 4 }

  action('omitBy - 排除非偶数')({
    输入: object,
    结果: omitBy(object, (n) => (n as number) !== 2 && (n as number) !== 4),
    期望: { b: 2, d: 4 },
    说明: '排除值不等于2和4的属性',
  })

  // 按类型排除
  const mixed = { a: 1, b: '2', c: 3, d: 'hello' }
  action('omitBy - 排除数字类型')({
    输入: mixed,
    结果: omitBy(mixed, (value) => typeof value === 'number'),
    说明: '只保留非数字属性',
  })
}

export default omitByDemo`;function s(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"omit",children:"omit"}),`
`,n.jsx(i.p,{children:"创建一个省略指定属性的对象。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"omit"})," 系列函数用于从对象中排除指定的属性。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"omit"})," - 按属性名排除"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"omitBy"})," - 按条件排除"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"移除敏感字段"}),`
`,n.jsx(i.li,{children:"过滤不需要的属性"}),`
`,n.jsx(i.li,{children:"创建对象子集"}),`
`]}),`
`,n.jsx(i.h2,{id:"omit---排除指定属性",children:"omit - 排除指定属性"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"omitby---条件排除",children:"omitBy - 条件排除"}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.h3,{id:"omit-1",children:"omit"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"object"})}),n.jsx("td",{children:"源对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"paths"}),n.jsx("td",{children:n.jsx("code",{children:"string[]"})}),n.jsx("td",{children:"要排除的属性路径"})]})]})]}),`
`,n.jsx(i.h3,{id:"omitby",children:"omitBy"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"object"})}),n.jsx("td",{children:"源对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"Function"})}),n.jsx("td",{children:"断言函数，返回 true 的属性被排除"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"object"})]}),`
`,n.jsx(i.li,{children:"描述：新对象"}),`
`]})]})}function a(t={}){const{wrapper:i}={...o(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(s,{...t})}):s(t)}export{a as default};
