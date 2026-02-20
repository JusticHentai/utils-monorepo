import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import memoize from '../../../packages/js-utils/src/memoize'

const memoizeDemo = () => {
  // lodash 测试: 基于第一个参数缓存
  let callCount = 0
  const add = memoize((a: number, b: number, c: number) => {
    callCount++
    return a + b + c
  })

  const first = add(1, 2, 3)
  const second = add(1, 3, 5) // 第一个参数相同，返回缓存

  action('memoize - 基于首参缓存')({
    'add(1,2,3)': first,
    'add(1,3,5)': second,
    调用次数: callCount,
    说明: '第一个参数都是1，第二次返回缓存值6而非9',
  })

  // lodash 测试: 缓存 prototype 上的属性名
  const identity = memoize((v: string) => v)
  const protoKeys = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf',
    'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf',
  ]
  const results = protoKeys.map((k) => identity(k))

  action('memoize - prototype 属性名作为缓存键')({
    输入: protoKeys,
    结果: results,
    正确: JSON.stringify(results) === JSON.stringify(protoKeys),
    说明: '使用 Map 存储缓存，不受原型链影响',
  })

  // cache 属性
  action('memoize - cache 属性')({
    缓存大小: identity.cache.size,
    缓存类型: identity.cache instanceof Map,
  })
}

export default memoizeDemo`,c=`import { action } from 'storybook/actions'
import memoize from '../../../packages/js-utils/src/memoize'

const memoizeResolverDemo = () => {
  // lodash 测试: 自定义 resolver
  const add = (a: number, b: number, c: number) => a + b + c
  const memoized = memoize(add, add as any)

  action('memoize + resolver')({
    'memoized(1,2,3)': memoized(1, 2, 3),
    'memoized(1,3,5)': memoized(1, 3, 5),
    说明: 'resolver 也是 add 函数，所以缓存键分别是6和9，不会冲突',
  })

  // 实际使用: 按 id 缓存
  const getUser = memoize(
    (id: number, name: string) => ({ id, name, time: Date.now() }),
    (id: number) => id,
  )

  const first = getUser(1, 'Alice')
  const cached = getUser(1, 'Bob')

  action('memoize - 按 id 缓存')({
    第一次: first,
    第二次缓存: cached,
    相同引用: first === cached,
    说明: 'resolver 返回 id，相同 id 返回缓存结果',
  })
}

export default memoizeResolverDemo`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"memoize",children:"memoize"}),`
`,n.jsx(e.p,{children:"创建记忆化函数，缓存计算结果。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"memoize"})," 创建一个会缓存计算结果的函数。如果同样的参数再次传入，直接返回缓存值而不重新计算。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"昂贵计算的结果缓存"}),`
`,n.jsx(e.li,{children:"递归函数优化"}),`
`,n.jsx(e.li,{children:"API 请求结果缓存"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础记忆化",children:"基础记忆化"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"memoize"})," 缓存计算结果，避免重复计算。"]}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"自定义缓存键解析器",children:"自定义缓存键解析器"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"memoize"})," 的第二个参数自定义缓存键的生成逻辑。"]}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要记忆化的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"resolver"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"可选，自定义缓存键解析器"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"MemoizedFunc<T>"})]}),`
`,n.jsx(e.li,{children:"描述：带 cache 属性（Map）的记忆化函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现函数记忆化"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 包装原函数 → 调用时检查缓存 → 有缓存直接返回 → 无缓存执行并存储"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": Map 作为缓存存储，resolver 自定义缓存键"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 参数 → resolver 生成缓存键 → 查缓存 → 命中返回/未命中计算并缓存"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
