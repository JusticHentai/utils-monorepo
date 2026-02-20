import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import setWith from '../../../packages/js-utils/src/setWith'

const setWithDemo = () => {
  // 基础深层设置
  const obj1 = {} as Record<string, any>
  setWith(obj1, 'a.b.c', 42)
  action('setWith - 基础深层设置')(obj1)

  // 使用 customizer 强制用对象代替数组
  // (lodash: setWith({'0':{}}, '[0][1][2]', 3, fn) => {'0':{'1':{'2':3}}})
  const obj2 = { '0': {} } as Record<string, any>
  setWith(obj2, '[0][1][2]', 3, (value) => {
    return typeof value === 'object' && value !== null ? undefined : {}
  })
  action('setWith - customizer强制对象')(obj2)

  // customizer返回undefined时使用默认行为
  // (lodash: setWith({}, 'a[0].b.c', 4, noop) => {a:[{b:{c:4}}]})
  const obj3 = {} as Record<string, any>
  setWith(obj3, 'a[0].b.c', 4, () => undefined)
  action('setWith - customizer返回undefined')(obj3)

  // 数组路径
  const obj4 = {} as Record<string, any>
  setWith(obj4, ['x', 'y', 'z'], 'deep')
  action('setWith - 数组路径')(obj4)

  // 覆盖已有值
  const obj5 = { a: { b: 1 } } as Record<string, any>
  setWith(obj5, 'a.b', 2)
  action('setWith - 覆盖已有值')(obj5)
}

export default setWithDemo`;function t(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"setwith",children:"setWith"}),`
`,n.jsx(s.p,{children:"在对象指定路径上设置值。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"setWith"})," 类似于 ",n.jsx(s.code,{children:"set"}),"，但支持自定义路径上创建的中间值。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"深层嵌套对象属性设置"}),`
`,n.jsx(s.li,{children:"自定义中间层类型（如用数组代替对象）"}),`
`,n.jsx(s.li,{children:"配置对象构建"}),`
`]}),`
`,n.jsx(s.h2,{id:"路径设置值",children:"路径设置值"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"setWith"})," 在对象的指定路径上设置值。"]}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要修改的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"属性路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要设置的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"(nsValue, key, nsObject) => unknown"})}),n.jsx("td",{children:"可选，自定义中间值创建"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T"})]}),`
`,n.jsx(s.li,{children:"描述：修改后的原对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 实现带自定义器的深层路径设置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 解析路径 → 逐级创建/访问属性 → 最终设置值"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": customizer 控制中间层对象类型，路径解析"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 对象 + 路径 + 值 → 逐级创建路径 → 设置最终值 → 返回对象"]}),`
`]})]})}function a(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default};
