import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import over from '../../../packages/js-utils/src/over'

const overDemo = () => {
  // lodash 测试: 调用多个函数
  const fn = over([Math.max, Math.min])
  action('over - Math.max & Math.min')({
    'over([max, min])(1,2,3,4)': fn(1, 2, 3, 4),
    期望: [4, 1],
  })

  // lodash 测试: 提供参数给所有函数
  const capture = over([(...args: unknown[]) => args])
  action('over - 参数传递')({
    结果: capture('a', 'b', 'c'),
    说明: '每个函数都收到相同的参数',
  })

  // 实际使用
  const transform = over([
    (x: number) => x * 2,
    (x: number) => x + 10,
    (x: number) => x * x,
  ])
  action('over - 多重转换')({
    输入: 5,
    结果: transform(5),
    期望: [10, 15, 25],
  })
}

export default overDemo`,c=`import { action } from 'storybook/actions'
import overEvery from '../../../packages/js-utils/src/overEvery'
import overSome from '../../../packages/js-utils/src/overSome'

const overEveryDemo = () => {
  const isPositiveEven = overEvery([(n: number) => n > 0, (n: number) => n % 2 === 0])

  action('overEvery - 4（正偶数）')(isPositiveEven(4))
  action('overEvery - 3（正奇数）')(isPositiveEven(3))
  action('overEvery - -2（负偶数）')(isPositiveEven(-2))

  const isStringOrNumber = overSome([(v: unknown) => typeof v === 'string', (v: unknown) => typeof v === 'number'])

  action('overSome - "hello"')(isStringOrNumber('hello'))
  action('overSome - 42')(isStringOrNumber(42))
  action('overSome - true')(isStringOrNumber(true))
}

export default overEveryDemo
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"over",children:"over"}),`
`,n.jsx(e.p,{children:"创建调用函数数组并返回结果的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"over"})," 创建一个函数，调用函数数组中的每个函数并返回结果数组。",n.jsx(e.code,{children:"overEvery"})," 是逻辑 AND，",n.jsx(e.code,{children:"overSome"})," 是逻辑 OR。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"同时应用多个转换"}),`
`,n.jsx(e.li,{children:"组合多个验证条件"}),`
`,n.jsx(e.li,{children:"并行函数执行"}),`
`]}),`
`,n.jsx(e.h2,{id:"over-批量调用",children:"over 批量调用"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"over"})," 创建一个函数，同时调用多个函数并返回结果数组。"]}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"逻辑组合",children:"逻辑组合"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"overEvery"}),"（全部通过）和 ",n.jsx(e.code,{children:"overSome"}),"（任一通过）组合多个谓词。"]}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"iteratees"}),n.jsx("td",{children:n.jsx("code",{children:"Function[]"})}),n.jsx("td",{children:"要调用的函数数组"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...args) => unknown[]"})," / ",n.jsx(e.code,{children:"(...args) => boolean"})]}),`
`,n.jsx(e.li,{children:"描述：over 返回结果数组，overEvery/overSome 返回布尔值"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 over、overEvery、overSome 三个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 接收函数数组 → 创建包装函数 → 调用时遍历执行"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": over 收集结果数组，overEvery 用 every 逻辑，overSome 用 some 逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 函数数组 → 创建包装 → 调用时遍历执行 → 聚合结果"]}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
