import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const basicDemo = () => {
  const target = document.getElementById('target-with-id') as Element

  const info = getElementInfo(target)

  action('元素信息')(info)
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const maxLengthDemo = () => {
  const target = document.getElementById('target-long-text') as Element

  const defaultInfo = getElementInfo(target)
  action('默认截断（100）')(defaultInfo)

  const shortInfo = getElementInfo(target, { maxLength: 10 })
  action('截断长度 10')(shortInfo)

  const longInfo = getElementInfo(target, { maxLength: 200 })
  action('截断长度 200')(longInfo)
}

export default maxLengthDemo
`,r=`import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const invalidDemo = () => {
  const nullResult = getElementInfo(null as unknown as Element)
  action('传入 null')(nullResult)

  const stringResult = getElementInfo('div' as unknown as Element)
  action('传入字符串')(stringResult)

  const objectResult = getElementInfo({ tagName: 'div' } as unknown as Element)
  action('传入普通对象')(objectResult)
}

export default invalidDemo
`;function d(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getelementinfo",children:"getElementInfo"}),`
`,n.jsx(e.p,{children:"获取 DOM 元素的关键信息，返回包含标签名、ID、类名、文本内容和 XPath 路径的对象。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getElementInfo"})," 用于提取 DOM 元素的核心标识信息，包括 ",n.jsx(e.code,{children:"tagName"}),"（标签名）、",n.jsx(e.code,{children:"id"}),"、",n.jsx(e.code,{children:"className"}),"（类名）、",n.jsx(e.code,{children:"innerText"}),"（文本内容）和 ",n.jsx(e.code,{children:"xpath"}),"（XPath 路径）。"]}),`
`,n.jsxs(e.p,{children:["常用于行为监控、埋点上报等场景，在用户与页面交互时快速收集目标元素的关键信息。文本内容支持通过 ",n.jsx(e.code,{children:"maxLength"})," 配置截断长度，避免上报过长文本。内部使用 ",n.jsx(e.code,{children:"isElement"})," 进行类型守卫，确保传入的值为有效 DOM 元素。"]}),`
`,n.jsx(e.h2,{id:"获取元素基础信息",children:"获取元素基础信息"}),`
`,n.jsxs(e.p,{children:["传入一个 DOM 元素，返回该元素的 tagName、id、className、innerText 和 xpath 等完整信息。内部通过 ",n.jsx(e.code,{children:"element.tagName.toLowerCase()"})," 获取小写标签名，通过 ",n.jsx(e.code,{children:"getXPath"})," 工具获取元素的 XPath 路径。"]}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"自定义文本截断长度",children:"自定义文本截断长度"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"maxLength"})," 选项控制 ",n.jsx(e.code,{children:"innerText"})," 的最大长度。默认值为 100，超出部分会被 ",n.jsx(e.code,{children:"truncate"})," 工具截断。适用于文本内容较长的元素，避免上报数据体积过大。"]}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"传入非法值",children:"传入非法值"}),`
`,n.jsxs(e.p,{children:["当传入 ",n.jsx(e.code,{children:"null"}),"、字符串、普通对象等非 Element 值时，内部 ",n.jsx(e.code,{children:"isElement"})," 检测不通过，直接返回 ",n.jsx(e.code,{children:"undefined"}),"，不会抛出异常。"]}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"element"}),n.jsx("td",{children:n.jsx("code",{children:"Element"})}),n.jsx("td",{children:"目标 DOM 元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"GetElementInfoOptions"})}),n.jsx("td",{children:"可选配置项"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.maxLength"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"文本截断最大长度，默认值：100"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"ElementInfo | undefined"})}),n.jsx("td",{children:"元素信息对象，非法元素返回 undefined"})]})})]}),`
`,n.jsx(e.h3,{id:"elementinfo",children:"ElementInfo"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"字段"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"tagName"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"标签名（小写）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"id"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"元素 ID"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"className"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"元素类名"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"innerText"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"文本内容（截断后）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"xpath"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"XPath 路径"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件职责"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," — 主入口，导出 ",n.jsx(e.code,{children:"getElementInfo"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," — 类型定义（",n.jsx(e.code,{children:"ElementInfo"}),"、",n.jsx(e.code,{children:"GetElementInfoOptions"}),"）和默认常量（",n.jsx(e.code,{children:"DEFAULT_MAX_LENGTH"}),"）"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),": 传入元素 → ",n.jsx(e.code,{children:"isElement"})," 校验 → 提取 tagName/id/className → ",n.jsx(e.code,{children:"truncate"})," 截断 innerText → ",n.jsx(e.code,{children:"getXPath"})," 获取 XPath → 返回 ",n.jsx(e.code,{children:"ElementInfo"})," 对象"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"isElement"})," 进行类型守卫，非法输入直接返回 ",n.jsx(e.code,{children:"undefined"})]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"@justichentai/js-utils"})," 的 ",n.jsx(e.code,{children:"truncate"})," 工具截断文本"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"getXPath"})," 工具获取元素的 XPath 路径"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tagName"})," 通过 ",n.jsx(e.code,{children:"toLowerCase()"})," 统一为小写"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"数据流向"}),": ",n.jsx(e.code,{children:"element"})," → ",n.jsx(e.code,{children:"isElement"})," 校验 → 各属性提取（tagName/id/className/innerText/xpath）→ 组合为 ",n.jsx(e.code,{children:"ElementInfo"})," 返回"]}),`
`]}),`
`]})]})}function g(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(d,{...t})}):d(t)}export{g as default};
