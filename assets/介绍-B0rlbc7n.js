import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import sampleSize from '../../../packages/js-utils/src/sampleSize'

const sampleSizeDemo = () => {
  action('sampleSize 演示')({
    '从 [1,2,3] 中随机取 2 个': sampleSize([1, 2, 3], 2),
    '从 [1,2,3] 中随机取 5 个（超出长度）': sampleSize([1, 2, 3], 5),
  })
}

export default sampleSizeDemo
`,d=`import { action } from 'storybook/actions'
import sampleSize from '../../../packages/js-utils/src/sampleSize'

const edgeCaseDemo = () => {
  action('sampleSize - 边界情况')({
    '取2个': sampleSize([1,2,3,4], 2), '超过长度': sampleSize([1,2], 5), '空数组': sampleSize([], 2), '取0个': sampleSize([1,2,3], 0)
  })
}

export default edgeCaseDemo
`;function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"samplesize",children:"sampleSize"}),`
`,n.jsx(e.p,{children:"从集合中随机获取 n 个元素"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"sampleSize"})," 从集合中随机获取 n 个不重复的元素，基于 ",n.jsx(e.strong,{children:"Fisher-Yates 洗牌算法"}),"（部分洗牌）实现。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心原理"}),"："]}),`
`,n.jsxs(e.p,{children:["每次从未选中的区间 ",n.jsx(e.code,{children:"[i, length-1]"})," 中随机选一个元素，交换到位置 ",n.jsx(e.code,{children:"i"})," 后锁定。下一轮通过 ",n.jsx(e.code,{children:"i + 随机数"})," 保证不会随机到前面已锁定的元素，只在后面未选中的部分随机。循环 ",n.jsx(e.code,{children:"n"})," 次后，前 ",n.jsx(e.code,{children:"n"})," 个位置就是随机选中的元素，最后用 ",n.jsx(e.code,{children:"slice(0, n)"})," 裁剪返回。"]}),`
`,n.jsxs(e.p,{children:["以 ",n.jsx(e.code,{children:"sampleSize([A, B, C, D, E], 3)"})," 为例："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`初始: [A, B, C, D, E]

i=0: 从 [0,4] 随机到 3 → 交换 A 和 D → [D, B, C, A, E]  ← D 锁定
i=1: 从 [1,4] 随机到 4 → 交换 B 和 E → [D, E, C, A, B]  ← E 锁定
i=2: 从 [2,4] 随机到 2 → 交换 C 和 C → [D, E, C, A, B]  ← C 锁定

slice(0, 3) → [D, E, C]
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"随机抽奖、随机推荐"}),`
`,n.jsx(e.li,{children:"数据采样、A/B 测试分组"}),`
`,n.jsx(e.li,{children:"随机展示列表中的部分元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"sampleSize"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要采样的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要采样的元素个数，默认为 1"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：返回随机元素数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"sampleSize/index.ts"})," 导出 sampleSize 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 复制原数组 → 部分 Fisher-Yates 洗牌 n 次 → slice 裁剪前 n 个"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": ",n.jsx(e.code,{children:"i + Math.floor(Math.random() * (length - i))"})," 保证随机范围仅在未锁定区间，交换后前面的位置即锁定，最后 slice 裁剪"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": collection → 浅拷贝 → 循环 n 次随机交换锁定 → slice(0, n) → 返回结果"]}),`
`]})]})}function p(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{p as default};
