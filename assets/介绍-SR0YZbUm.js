import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import get from '../../../packages/js-utils/src/get'

const basicDemo = () => {
  // 字符串 key
  action('get - 字符串 key')(
    get({ a: 1 }, 'a'),
  )

  // 数组 path
  action('get - 数组路径')(
    get({ a: 1 }, ['a']),
  )

  // 深层路径
  const obj = { a: { b: 2 } }
  action('get - 深层路径')({
    'get(obj, "a.b")': get(obj, 'a.b'),
    'get(obj, ["a","b"])': get(obj, ['a', 'b']),
  })

  // 数组索引路径
  const arr = { a: [{ b: { c: 3 } }] }
  action('get - 数组索引路径')({
    'get(arr, "a[0].b.c")': get(arr, 'a[0].b.c'),
    'get(arr, ["a","0","b","c"])': get(arr, ['a', '0', 'b', 'c']),
  })
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import get from '../../../packages/js-utils/src/get'

const defaultDemo = () => {
  // 路径不存在返回默认值
  action('get - 路径不存在返回默认值')(
    get({ a: { b: 2 } }, 'a.b.c', 'default'),
  )

  // undefined 值返回默认值
  action('get - undefined 值返回默认值')(
    get({ a: { b: undefined } }, 'a.b', 'default'),
  )

  // null 对象返回默认值
  action('get - null 对象返回默认值')(
    get(null, 'a', 'default'),
  )

  // 数组 path 不会被拼接为字符串
  const obj = { 'a,b,c': 3, a: { b: { c: 4 } } }
  action('get - 数组路径不拼接为字符串')({
    'get(obj, ["a","b","c"])': get(obj, ['a', 'b', 'c']),
    说明: '返回 4 而非 3',
  })
}

export default defaultDemo
`;function d(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"get",children:"get"}),`
`,e.jsx(t.p,{children:"根据路径获取对象的属性值。"}),`
`,e.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"get"})," 支持字符串路径（",e.jsx(t.code,{children:"'a.b.c'"}),"、",e.jsx(t.code,{children:"'a[0].b'"}),"）和数组路径（",e.jsx(t.code,{children:"['a', 'b', 'c']"}),"）。当解析值为 ",e.jsx(t.code,{children:"undefined"})," 时返回指定的默认值。"]}),`
`,e.jsx(t.h2,{id:"get---路径访问",children:"get - 路径访问"}),`
`,e.jsx(c,{language:"typescript",children:r}),`
`,e.jsx(t.h2,{id:"get---默认值与边界",children:"get - 默认值与边界"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"object"}),e.jsx("td",{children:e.jsx("code",{children:"NestedObject | null | undefined"})}),e.jsx("td",{children:"要查询的对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"path"}),e.jsx("td",{children:e.jsx("code",{children:"PropertyPath"})}),e.jsx("td",{children:"属性路径"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"解析值为 undefined 时的默认值"})]})]})]}),`
`,e.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["类型：",e.jsx(t.code,{children:"T"})]}),`
`,e.jsx(t.li,{children:"描述：解析到的值或默认值"}),`
`]}),`
`,e.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"文件职责"}),": ",e.jsx(t.code,{children:"get/index.ts"})," 导出 get（default）和 toPath（named）"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"核心流程"}),": 解析路径 → 逐层访问属性 → 返回值或默认值"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"关键技术点"}),": 正则解析 ",e.jsx(t.code,{children:"a[0].b"})," 格式路径，支持字符串和数组路径"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"数据流向"}),": object + path → toPath 解析 → 逐级访问 → 返回结果"]}),`
`]})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{g as default};
