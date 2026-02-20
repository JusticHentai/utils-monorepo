import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import reduce from '../../../packages/js-utils/src/reduce'

const reduceDemo = () => {
  // 数组求和 (lodash: reduce([1,2,3], (sum,n) => sum+n, 0) => 6)
  action('reduce - 数组求和')(reduce([1, 2, 3], (sum, n) => sum + n, 0))

  // 字符串拼接 (lodash: reduce(['a','b','c'], (acc,v) => acc+v, '') => 'abc')
  action('reduce - 字符串拼接')(reduce(['a', 'b', 'c'], (acc, v) => acc + v, ''))

  // 对象迭代 (lodash: reduce({a:1,b:2,c:1}, ...))
  const grouped = reduce(
    { a: 1, b: 2, c: 1 } as Record<string, number>,
    (result: Record<string, string[]>, value, key) => {
      const k = String(value)
      ;(result[k] || (result[k] = [])).push(String(key))
      return result
    },
    {} as Record<string, string[]>,
  )
  action('reduce - 对象按值分组')(grouped)

  // iteratee 参数验证: (accumulator, value, index/key, collection)
  const args: unknown[] = []
  reduce([10, 20, 30], (acc, value, index, coll) => {
    if (args.length === 0) args.push({ acc, value, index, collLength: (coll as number[]).length })
    return acc + value
  }, 0)
  action('reduce - 迭代器参数')(args[0])

  // 空集合返回初始值
  action('reduce - 空数组返回初始值')(reduce([] as number[], (a, b) => a + b, 42))
}

export default reduceDemo`,t=`import { action } from 'storybook/actions'
import reduceRight from '../../../packages/js-utils/src/reduceRight'

const reduceRightDemo = () => {
  // 从右到左拼接 (lodash: reduceRight(['a','b','c'], (acc,v) => acc+v, '') => 'cba')
  action('reduceRight - 反向拼接')(reduceRight(['a', 'b', 'c'], (acc, v) => acc + v, ''))

  // 数组扁平化 (lodash: reduceRight([[0,1],[2,3],[4,5]], (f,o) => f.concat(o), []) => [4,5,2,3,0,1])
  const flattened = reduceRight(
    [[0, 1], [2, 3], [4, 5]],
    (acc, val) => [...acc, ...val],
    [] as number[],
  )
  action('reduceRight - 反向扁平化')(flattened)

  // 对象从右到左
  const obj = { a: 'x', b: 'y', c: 'z' } as Record<string, string>
  action('reduceRight - 对象反向拼接')(reduceRight(obj, (acc, v) => acc + v, ''))
}

export default reduceRightDemo`;function d(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"reduce",children:"reduce"}),`
`,e.jsx(n.p,{children:"遍历集合，逐步累积返回值。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reduce"})," 对集合元素进行累积操作，支持数组和对象。",e.jsx(n.code,{children:"reduceRight"})," 从右到左遍历。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数组求和/求积"}),`
`,e.jsx(n.li,{children:"数据聚合"}),`
`,e.jsx(n.li,{children:"对象转换"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础累积操作",children:"基础累积操作"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"reduce"})," 对集合进行累积操作。"]}),`
`,e.jsx(r,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"从右到左累积",children:"从右到左累积"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"reduceRight"})," 从右到左遍历集合进行累积。"]}),`
`,e.jsx(r,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[] | Record<string, T>"})}),e.jsx("td",{children:"要遍历的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iteratee"}),e.jsx("td",{children:e.jsx("code",{children:"(accumulator, value, key, collection) => R"})}),e.jsx("td",{children:"迭代器函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"accumulator"}),e.jsx("td",{children:e.jsx("code",{children:"R"})}),e.jsx("td",{children:"初始累积值"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"R"})]}),`
`,e.jsx(n.li,{children:"描述：累积后的结果"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 提供 reduce 和 reduceRight"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 初始化累积器 → 遍历集合 → 每次将前一步结果传入迭代器 → 返回最终值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 支持数组和对象，reduceRight 使用反向遍历"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 集合 + 初始值 → 逐步累积 → 返回最终结果"]}),`
`]})]})}function j(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(d,{...c})}):d(c)}export{j as default};
