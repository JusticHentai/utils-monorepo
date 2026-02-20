import{j as l}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import fill from '../../../packages/js-utils/src/fill'

const basicDemo = () => {
  // 默认填充全部
  action('fill - 默认填充全部')({
    结果: fill([1, 2, 3], 'a'),
  })

  // 指定 start
  action('fill - 正数 start')({
    'fill([1,2,3], "a", 1)': fill([1, 2, 3], 'a', 1),
  })

  // start >= length 不填充
  action('fill - start >= length')({
    'start=3': fill([1, 2, 3], 'a', 3),
    'start=4': fill([1, 2, 3], 'a', 4),
    'start=Infinity': fill([1, 2, 3], 'a', Infinity),
  })

  // 负数 start
  action('fill - 负数 start')({
    'fill([1,2,3], "a", -1)': fill([1, 2, 3], 'a', -1),
    'fill([1,2,3], "a", -3)': fill([1, 2, 3], 'a', -3),
    'fill([1,2,3], "a", -Infinity)': fill([1, 2, 3], 'a', -Infinity),
  })
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import fill from '../../../packages/js-utils/src/fill'

const rangeDemo = () => {
  // 指定 end
  action('fill - 正数 end')({
    'fill([1,2,3], "a", 0, 1)': fill([1, 2, 3], 'a', 0, 1),
  })

  // end >= length 填充到末尾
  action('fill - end >= length')({
    'end=3': fill([1, 2, 3], 'a', 0, 3),
    'end=4': fill([1, 2, 3], 'a', 0, 4),
    'end=Infinity': fill([1, 2, 3], 'a', 0, Infinity),
  })

  // 负数 end
  action('fill - 负数 end')({
    'fill([1,2,3], "a", 0, -1)': fill([1, 2, 3], 'a', 0, -1),
  })

  // start >= end 不填充
  action('fill - start >= end 不填充')({
    'start=2, end=2': fill([1, 2, 3], 'a', 2, 2),
    'start=3, end=2': fill([1, 2, 3], 'a', 3, 2),
  })

  // 浮点数会被截断
  action('fill - 浮点数截断')({
    'fill([1,2,3], "a", 0.1, 1.6)': fill([1, 2, 3], 'a', 0.1, 1.6),
  })
}

export default rangeDemo
`;function e(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return l.jsxs(l.Fragment,{children:[l.jsx(n.h1,{id:"fill",children:"fill"}),`
`,l.jsx(n.p,{children:"使用指定值填充数组从 start 到 end（不含）的元素。"}),`
`,l.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,l.jsxs(n.p,{children:[l.jsx(n.code,{children:"fill"})," 函数用于使用指定值填充数组的指定范围，会修改原数组。"]}),`
`,l.jsxs(n.p,{children:[l.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsx(n.li,{children:"初始化数组"}),`
`,l.jsx(n.li,{children:"重置数组元素"}),`
`,l.jsx(n.li,{children:"创建指定长度和默认值的数组"}),`
`]}),`
`,l.jsx(n.h2,{id:"基础填充",children:"基础填充"}),`
`,l.jsx(t,{language:"typescript",children:s}),`
`,l.jsx(n.h2,{id:"范围填充",children:"范围填充"}),`
`,l.jsx(t,{language:"typescript",children:d}),`
`,l.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"参数名"}),l.jsx("th",{children:"类型"}),l.jsx("th",{children:"描述"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"array"}),l.jsx("td",{children:l.jsx("code",{children:"T[]"})}),l.jsx("td",{children:"要填充的数组"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"value"}),l.jsx("td",{children:l.jsx("code",{children:"T"})}),l.jsx("td",{children:"用来填充的值"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"start"}),l.jsx("td",{children:l.jsx("code",{children:"number"})}),l.jsx("td",{children:"起始位置，默认为 0"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"end"}),l.jsx("td",{children:l.jsx("code",{children:"number"})}),l.jsx("td",{children:"结束位置（不含），默认为数组长度"})]})]})]}),`
`,l.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsxs(n.li,{children:["类型：",l.jsx(n.code,{children:"T[]"})]}),`
`,l.jsx(n.li,{children:"描述：修改后的数组（原数组）"}),`
`]}),`
`,l.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,l.jsxs(n.p,{children:["使用原生 ",l.jsx(n.code,{children:"Array.prototype.fill()"})," 方法实现，支持负数索引。"]})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?l.jsx(n,{...i,children:l.jsx(e,{...i})}):e(i)}export{j as default};
