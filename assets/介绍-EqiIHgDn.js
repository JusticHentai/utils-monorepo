import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import every from '../../../packages/js-utils/src/every'

const everyDemo = () => {
  // 全部为 truthy
  action('every - 全部 truthy')(
    every([true, 1, 'a'], (v) => Boolean(v)),
  )

  // 空集合返回 true（vacuous truth）
  action('every - 空数组返回 true')(
    every([], () => false),
  )

  // 短路求值：遇到第一个 falsey 就停止
  let count = 0
  const result = every([true, null, true], (v) => {
    count++
    return Boolean(v)
  })
  action('every - 短路求值')({
    result,
    '检查次数': count,
    说明: '遇到 null 就停止，只检查了2次',
  })

  // undefined 集合
  action('every - undefined 集合')(
    every([undefined, undefined, undefined], (v) => Boolean(v)),
  )
}

export default everyDemo
`,c=`import { action } from 'storybook/actions'
import some from '../../../packages/js-utils/src/some'

const someDemo = () => {
  action('some')({
    '存在偶数': some([1, 3, 4], (n) => n % 2 === 0),
    '不存在偶数': some([1, 3, 5], (n) => n % 2 === 0),
  })
}

export default someDemo
`;function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"every",children:"every"}),`
`,e.jsxs(n.p,{children:["检测所有元素是否都满足谓词函数，同时提供 ",e.jsx(n.code,{children:"some"})," 检测是否有任意元素满足。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"every"})," 遍历集合，当所有元素的谓词函数都返回 true 时返回 true。",e.jsx(n.code,{children:"some"})," 只要有一个元素满足即返回 true。支持数组和对象集合，以及多种谓词简写形式。"]}),`
`,e.jsx(n.h2,{id:"every---全部满足",children:"every - 全部满足"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"some---任一满足",children:"some - 任一满足"}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要检测的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"predicate"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T) => boolean"})}),e.jsx("td",{children:"谓词函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"every/index.ts"})," 导出 every（default）和 some（named）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 遍历集合元素，every 遇到 false 立即返回 false，some 遇到 true 立即返回 true"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 短路求值优化性能"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 集合元素 → 逐个调用谓词 → 短路判断 → 返回布尔值"]}),`
`]})]})}function a(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{a as default};
