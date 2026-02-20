import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import negate from '../../../packages/js-utils/src/negate'

const negateDemo = () => {
  // lodash 测试: 取反谓词结果
  const isEven = (n: number) => n % 2 === 0
  const isOdd = negate(isEven)

  action('negate - 基础取反')({
    'isOdd(1)': isOdd(1),
    'isOdd(2)': isOdd(2),
    说明: 'negate(isEven) 等价于 isOdd',
  })

  // lodash 测试: 多参数支持
  const numbers = [1, 2, 3, 4, 5, 6]
  action('negate - filter 过滤')({
    偶数: numbers.filter(isEven),
    奇数: numbers.filter(isOdd),
  })

  // 多参数函数
  const isGreater = (a: number, b: number) => a > b
  const isNotGreater = negate(isGreater)
  action('negate - 多参数')({
    'isGreater(3, 1)': isGreater(3, 1),
    'isNotGreater(3, 1)': isNotGreater(3, 1),
  })
}

export default negateDemo`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"negate",children:"negate"}),`
`,n.jsx(e.p,{children:"创建取反的谓词函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"negate"})," 创建一个函数，返回原谓词函数结果的逻辑否定。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"快速创建反向过滤条件"}),`
`,n.jsx(e.li,{children:"函数式编程中的逻辑取反"}),`
`,n.jsx(e.li,{children:"避免编写重复的否定逻辑"}),`
`]}),`
`,n.jsx(e.h2,{id:"取反谓词函数",children:"取反谓词函数"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"negate"})," 创建取反的谓词函数，用于反向过滤。"]}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => boolean"})}),n.jsx("td",{children:"要取反的谓词函数"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...args) => boolean"})]}),`
`,n.jsx(e.li,{children:"描述：取反后的谓词函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现谓词取反"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 包装原函数 → 调用时取反返回值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 闭包包装，逻辑非运算"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 谓词函数 → 创建包装函数 → 调用时取反结果"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
