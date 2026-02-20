import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as p}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import property from '../../../packages/js-utils/src/property'

const propertyDemo = () => {
  // 基本属性提取 (lodash: property('a')({a:1}) => 1)
  const getA = property('a')
  action('property - 基本提取')(getA({ a: 1 }))

  // 深层路径 (lodash: property('a.b')({a:{b:2}}) => 2)
  const getAB = property('a.b')
  action('property - 深层路径a.b')(getAB({ a: { b: 2 } }))

  // 数组路径形式 (lodash: property(['a','b'])({a:{b:2}}) => 2)
  const getABArr = property(['a', 'b'])
  action('property - 数组路径形式')(getABArr({ a: { b: 2 } }))

  // 数组索引 (lodash: property(1)([1,2,3]) => 2)
  const getIdx = property('1')
  action('property - 数组索引')(getIdx([1, 2, 3]))

  // 路径缺失返回 undefined (lodash: property('a')({})) => undefined)
  action('property - 路径缺失')(property('a')({}))
  action('property - 深层路径缺失')(property('a.b.c')({}))

  // nullish 对象返回 undefined
  action('property - null对象')(property('a')(null))
  action('property - undefined对象')(property('a')(undefined))

  // 配合 map 使用提取属性
  const users = [
    { name: 'Alice', info: { age: 25 } },
    { name: 'Bob', info: { age: 30 } },
  ]
  action('property - map提取name')(users.map(property('name')))
  action('property - map提取嵌套age')(users.map(property('info.age')))
}

export default propertyDemo`,i=`import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const propertyOfDemo = () => {
  // 基本使用 (lodash: propertyOf({a:1})('a') => 1)
  const obj = { a: { b: 1 }, c: { d: 2 }, e: 3 }
  const getFrom = propertyOf(obj)

  action('propertyOf - a.b')(getFrom('a.b'))
  action('propertyOf - c.d')(getFrom('c.d'))
  action('propertyOf - e')(getFrom('e'))

  // 数组路径
  action('propertyOf - 数组路径')(getFrom(['a', 'b']))

  // 深层路径缺失返回 undefined
  action('propertyOf - 路径缺失')(getFrom('x.y.z'))

  // 数组对象
  const arr = [1, 2, 3]
  const getFromArr = propertyOf(arr)
  action('propertyOf - 数组索引1')(getFromArr('1'))
}

export default propertyOfDemo`;function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"property",children:"property"}),`
`,r.jsx(n.p,{children:"创建返回指定路径值的函数。"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"property"})," 创建一个函数，返回给定对象指定路径的值。"]}),`
`,r.jsxs(n.p,{children:[r.jsxs(n.strong,{children:["与 ",r.jsx(n.code,{children:"propertyOf"})," 的区别"]}),"："]}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"函数"}),r.jsx("th",{children:"先固定"}),r.jsx("th",{children:"返回的函数接收"}),r.jsx("th",{children:"适用场景"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"property"})}),r.jsx("td",{children:"路径"}),r.jsx("td",{children:"不同对象"}),r.jsxs("td",{children:["对多个对象提取同一属性，如 ",r.jsx("code",{children:"objects.map(property('a.b'))"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"propertyOf"})}),r.jsx("td",{children:"对象"}),r.jsx("td",{children:"不同路径"}),r.jsxs("td",{children:["对同一对象提取多个属性，如 ",r.jsx("code",{children:"paths.map(propertyOf(obj))"})]})]})]})]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"配合 map、sortBy 等提取属性"}),`
`,r.jsx(n.li,{children:"动态属性访问"}),`
`,r.jsx(n.li,{children:"配置驱动的数据提取"}),`
`]}),`
`,r.jsx(n.h2,{id:"property-提取属性值",children:"property 提取属性值"}),`
`,r.jsxs(n.p,{children:["使用 ",r.jsx(n.code,{children:"property"})," 创建属性提取函数。"]}),`
`,r.jsx(t,{language:"typescript",children:s}),`
`,r.jsx(n.h2,{id:"propertyof-绑定对象",children:"propertyOf 绑定对象"}),`
`,r.jsxs(n.p,{children:["使用 ",r.jsx(n.code,{children:"propertyOf"})," 先绑定对象，再通过不同路径访问属性。"]}),`
`,r.jsx(t,{language:"typescript",children:i}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{children:"path"}),r.jsx("td",{children:r.jsx("code",{children:"string | string[]"})}),r.jsx("td",{children:"属性路径"})]})})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"(object) => unknown"})]}),`
`,r.jsx(n.li,{children:"描述：返回指定路径值的函数"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"index.ts"})," 提供 property 和 propertyOf 两个函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": property 接收路径 → 返回闭包 → 闭包解析对象路径返回值"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": 路径解析、深层属性访问、property/propertyOf 互为反向"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 路径 → 创建闭包 → 接收对象 → 解析路径 → 返回属性值"]}),`
`]})]})}function j(e={}){const{wrapper:n}={...p(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{j as default};
