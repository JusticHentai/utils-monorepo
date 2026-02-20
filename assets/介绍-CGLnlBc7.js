import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import cond from '../../../packages/js-utils/src/cond'

const basicDemo = () => {
  // 条件分支函数
  const classify = cond<number, string>([
    [(v) => v < 0, () => '负数'],
    [(v) => v === 0, () => '零'],
    [(v) => v > 0, () => '正数'],
  ])

  action('cond - 数字分类')({
    '-5': classify(-5),
    '0': classify(0),
    '10': classify(10),
  })

  // 无匹配条件返回 undefined
  const onlyPositive = cond<number, string>([
    [(v) => v > 0, (v) => \`正数: \${v}\`],
  ])

  action('cond - 无匹配返回 undefined')({
    '5': onlyPositive(5),
    '-1': onlyPositive(-1),
    说明: '没有匹配的条件时返回 undefined',
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import cond from '../../../packages/js-utils/src/cond'

const complexDemo = () => {
  // 对象属性匹配
  interface Item { type: string; value: number }

  const process = cond<Item, string>([
    [(item) => item.type === 'error' && item.value > 100, () => '严重错误'],
    [(item) => item.type === 'error', () => '普通错误'],
    [(item) => item.type === 'warning', () => '警告'],
    [() => true, () => '正常'],
  ])

  action('cond - 复杂条件匹配')({
    严重错误: process({ type: 'error', value: 200 }),
    普通错误: process({ type: 'error', value: 50 }),
    警告: process({ type: 'warning', value: 0 }),
    正常: process({ type: 'info', value: 0 }),
    说明: '按顺序匹配条件，返回第一个为真的结果',
  })
}

export default complexDemo
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"cond",children:"cond"}),`
`,n.jsx(e.p,{children:"创建一个遍历条件对的函数，返回第一个匹配条件的结果。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"cond"})," 接收一个 ",n.jsx(e.code,{children:"[predicate, transform]"})," 对数组，返回一个新函数。调用时依次检查每个条件，返回第一个谓词为真的转换结果。如果没有匹配的条件，返回 ",n.jsx(e.code,{children:"undefined"}),"。类似于 if-else 链或 switch-case 的函数式替代。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"替代复杂的 if-else 链"}),`
`,n.jsx(e.li,{children:"函数式编程中的模式匹配"}),`
`,n.jsx(e.li,{children:"根据输入类型执行不同处理逻辑"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础条件分支",children:"基础条件分支"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂条件匹配",children:"复杂条件匹配"}),`
`,n.jsx(e.p,{children:"多条件组合、按优先级匹配、默认兜底条件。"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"pairs"}),n.jsx("td",{children:n.jsx("code",{children:"[(value: T) => boolean, (value: T) => R][]"})}),n.jsx("td",{children:"条件-结果对数组"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(value: T) => R | undefined"})]}),`
`,n.jsx(e.li,{children:"描述：遍历条件对的新函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"cond/index.ts"})," 导出 cond 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 返回新函数 → 遍历 pairs → 找到第一个 predicate 为真的 → 返回对应 transform 结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 闭包保存条件对数组，惰性求值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 调用参数 → 遍历条件对 → predicate(value) → 匹配则返回 transform(value)"]}),`
`]})]})}function m(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
