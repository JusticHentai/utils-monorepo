import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import flatMap from '../../../packages/js-utils/src/flatMap'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const flatMapDeepDemo = () => {
  const iteratee = (n: number) => [[[n * 2]]]

  action('flatMapDeep vs flatMap 对比')({
    '说明': 'iteratee 返回三层嵌套 [[[n * 2]]]',
    'flatMap (只扁平一层)': flatMap([1, 2], iteratee),
    'flatMapDeep (完全递归扁平化)': flatMapDeep([1, 2], iteratee),
  })
}

export default flatMapDeepDemo
`,d=`import { action } from 'storybook/actions'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const edgeCaseDemo = () => {
  action('flatMapDeep - 边界情况')({
    说明: '验证 flatMapDeep 的边界情况',
    空值测试: (() => { try { return flatMapDeep() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"flatmapdeep",children:"flatMapDeep"}),`
`,e.jsxs(n.p,{children:["映射集合并将结果",e.jsx(n.strong,{children:"完全递归"}),"扁平化"]}),`
`,e.jsx(n.h2,{id:"与-flatmap-的区别",children:"与 flatMap 的区别"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"扁平化层级"}),e.jsxs("th",{children:[e.jsx("code",{children:"[1, 2]"})," + ",e.jsx("code",{children:"n => [[[n * 2]]]"})]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"flatMap"})}),e.jsx("td",{children:"只扁平一层"}),e.jsx("td",{children:e.jsx("code",{children:"[[2]], [[4]]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"flatMapDeep"})}),e.jsx("td",{children:"完全递归扁平化"}),e.jsx("td",{children:e.jsx("code",{children:"[2, 4]"})})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"flatMap"})," 等价于 ",e.jsx(n.code,{children:"map"})," + ",e.jsx(n.code,{children:"flatten"}),"（一层），而 ",e.jsx(n.code,{children:"flatMapDeep"})," 等价于 ",e.jsx(n.code,{children:"map"})," + ",e.jsx(n.code,{children:"flattenDeep"}),"（递归到底）。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"iteratee 返回多层嵌套数组，需要完全展开"}),`
`,e.jsx(n.li,{children:"树形结构遍历并收集所有叶子节点"}),`
`,e.jsx(n.li,{children:"递归数据转换后需要扁平化结果"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮对比 ",e.jsx(n.code,{children:"flatMap"})," 和 ",e.jsx(n.code,{children:"flatMapDeep"})," 在处理多层嵌套时的差异。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(r,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要迭代的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iteratee"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T, index: number, collection: T[]) => R | R[]"})}),e.jsx("td",{children:"每次迭代调用的函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"R[]"})]}),`
`,e.jsx(n.li,{children:"描述：返回新的完全扁平化数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:["以 ",e.jsx(n.code,{children:"flatMapDeep([1, 2], n => [[[n * 2]]])"})," 为例："]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"第一步：遍历集合，调用 iteratee 收集映射结果"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`collection = [1, 2]

i=0: iteratee(1) => [[[2]]]   → result.push([[[2]]])
i=1: iteratee(2) => [[[4]]]   → result.push([[[4]]])

result = [ [[[2]]], [[[4]]] ]
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["第二步：将 result 传入 ",e.jsx(n.code,{children:"flattenDeep"})," 完全递归扁平化"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`flattenDeep([ [[[2]]], [[[4]]] ])

层级展开过程：
[ [[[2]]], [[[4]]] ]   → 第 1 层：[ [[2]], [[4]] ]
                       → 第 2 层：[ [2], [4] ]
                       → 第 3 层：[ 2, 4 ]

最终返回：[2, 4]
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"对比 flatMap 的差异（同样的输入）"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`flatMap([1, 2], n => [[[n * 2]]])

映射结果相同：result = [ [[[2]]], [[[4]]] ]
但只扁平一层：flatten([ [[[2]]], [[[4]]] ]) => [ [[2]], [[4]] ]

最终返回：[ [[2]], [[4]] ]  ← 内部嵌套仍然保留
`})})]})}function j(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
