import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const normalDemo = () => {
  // 超过 maxLength 截断
  action('truncate - 基础截断')({
    输入: '这是一个很长的字符串需要截断',
    maxLength: 10,
    结果: truncate({ str: '这是一个很长的字符串需要截断', maxLength: 10 }),
  })

  // 英文截断
  action('truncate - 英文截断')({
    输入: 'hi-diddly-ho there, neighborino',
    maxLength: 24,
    结果: truncate({ str: 'hi-diddly-ho there, neighborino', maxLength: 24 }),
  })

  // maxLength=4 截断（省略号占3字符）
  action('truncate - maxLength=4 截断')({
    输入: 'hi-diddly-ho',
    maxLength: 4,
    结果: truncate({ str: 'hi-diddly-ho', maxLength: 4 }),
  })
}

export default normalDemo
`,h=`import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const shortDemo = () => {
  // 长度等于 maxLength 不截断
  action('truncate - 长度等于 maxLength 不截断')({
    输入: '1234567890',
    maxLength: 10,
    结果: truncate({ str: '1234567890', maxLength: 10 }),
  })

  // 长度小于 maxLength 不截断
  action('truncate - 长度小于 maxLength 不截断')({
    输入: 'short',
    maxLength: 10,
    结果: truncate({ str: 'short', maxLength: 10 }),
  })

  // 空字符串
  action('truncate - 空字符串')({
    输入: '',
    maxLength: 10,
    结果: truncate({ str: '', maxLength: 10 }),
  })
}

export default shortDemo
`;function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"truncate",children:"truncate"}),`
`,n.jsx(e.p,{children:"截断字符串并添加省略号的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["truncate 是一个字符串处理函数，核心作用是：",n.jsxs(e.strong,{children:["当字符串超过指定长度时，截断并在末尾添加省略号 ",n.jsx(e.code,{children:"..."})]}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"String.prototype.slice()：截取字符串"}),`
`,n.jsx(e.li,{children:"长度计算：省略号占用 3 个字符"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"列表标题：限制标题显示长度"}),`
`,n.jsx(e.li,{children:"卡片描述：截断过长的描述文字"}),`
`,n.jsx(e.li,{children:"表格单元格：防止内容溢出"}),`
`,n.jsx(e.li,{children:"消息预览：显示消息摘要"}),`
`,n.jsx(e.li,{children:"文件名显示：长文件名的截断展示"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"简单直接，一个函数解决截断问题"}),`
`,n.jsx(e.li,{children:"省略号计入总长度，确保输出长度不超过 maxLength"}),`
`,n.jsx(e.li,{children:"短字符串不处理，避免不必要的操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"截断示例",children:"截断示例"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"不截断示例",children:"不截断示例"}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"options.str"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要截断的原始字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.maxLength"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大长度（包含省略号的 3 个字符）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：截断后的字符串"}),`
`]}),`
`,n.jsx(e.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"省略号长度"}),": 省略号 ",n.jsx(e.code,{children:"..."})," 占用 3 个字符，会被计算在 ",n.jsx(e.code,{children:"maxLength"})," 内"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"边界处理"}),": 当字符串长度小于等于 ",n.jsx(e.code,{children:"maxLength"})," 时，返回原字符串"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"最小长度"}),": 建议 ",n.jsx(e.code,{children:"maxLength"})," 至少为 4，否则可能出现只有省略号的情况"]}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 truncate 函数实现"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["判断 ",n.jsx(e.code,{children:"str.length <= maxLength"}),"，是则直接返回原字符串"]}),`
`,n.jsxs(e.li,{children:["否则截取前 ",n.jsx(e.code,{children:"maxLength - 3"})," 个字符"]}),`
`,n.jsxs(e.li,{children:["拼接省略号 ",n.jsx(e.code,{children:"..."})," 后返回"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["实现：",n.jsx(e.code,{children:"str.slice(0, maxLength - 3) + '...'"})]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"slice"})," 而非 ",n.jsx(e.code,{children:"substring"}),"，更简洁"]}),`
`,n.jsxs(e.li,{children:["省略号固定为 3 个字符 ",n.jsx(e.code,{children:"..."})]}),`
`]})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{m as default};
