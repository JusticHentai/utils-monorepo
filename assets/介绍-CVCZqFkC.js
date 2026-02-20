import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import findKey from '../../../packages/js-utils/src/findKey'
import findLastKey from '../../../packages/js-utils/src/findLastKey'

const basicDemo = () => {
  const objects = {
    '0': { a: 0, b: 0 },
    '1': { a: 1, b: 1 },
    '2': { a: 2, b: 2 },
  }

  // 返回匹配的键名
  action('findKey - 返回匹配键名')(
    findKey(objects, (obj) => Boolean((obj as any).a)),
  )

  // 找不到返回 undefined
  action('findKey - 找不到返回 undefined')(
    findKey(objects, (obj) => (obj as any).a === 3),
  )

  // findLastKey: 从后往前找
  action('findLastKey - 从后查找')(
    findLastKey(objects, (obj) => Boolean((obj as any).b)),
  )
}

export default basicDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"findkey",children:"findKey"}),`
`,n.jsx(e.p,{children:"返回第一个满足谓词函数的属性的键名。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"findKey"})," 遍历对象属性，返回第一个谓词函数返回 true 的键名。",n.jsx(e.code,{children:"findLastKey"})," 从后向前遍历。找不到时返回 ",n.jsx(e.code,{children:"undefined"}),"。"]}),`
`,n.jsx(e.h2,{id:"findkey--findlastkey---查找键名",children:"findKey / findLastKey - 查找键名"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要搜索的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(value, key, object) => boolean"})}),n.jsx("td",{children:"谓词函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string | undefined"})]}),`
`,n.jsx(e.li,{children:"描述：找到的键名或 undefined"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"findKey/index.ts"})," 导出 findKey（default）和 findLastKey（named）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历 Object.keys，返回第一个谓词返回 true 的键"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": findLastKey 反向遍历 keys 数组"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": object + predicate → 遍历键 → 谓词匹配 → 返回键名"]}),`
`]})]})}function x(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};
