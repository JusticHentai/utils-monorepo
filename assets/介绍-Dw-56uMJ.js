import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import isAppleDevice from '../../../packages/element-utils/src/isAppleDevice'

const basicDemo = () => {
  const result = isAppleDevice()

  action('isAppleDevice 检测结果')({
    isAppleDevice: result,
    platform: navigator.platform,
    userAgent: navigator.userAgent,
  })
}

export default basicDemo
`;function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isappledevice",children:"isAppleDevice"}),`
`,e.jsx(n.p,{children:"检测当前设备是否为 Apple 设备（Mac、iPhone、iPod、iPad）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["在处理键盘事件时，Apple 设备与 Windows/Linux 设备的修饰键存在差异：Apple 设备使用 ",e.jsx(n.code,{children:"Command (⌘)"})," 键（对应 ",e.jsx(n.code,{children:"meta"})," 键），而其他平台使用 ",e.jsx(n.code,{children:"Windows/Super"})," 键。不同平台的 ",e.jsx(n.code,{children:"meta"})," 键对应不同的 ",e.jsx(n.code,{children:"keyCode"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mac"}),": 左 Command = 91，右 Command = 93"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Windows"}),": 左 Win = 91，右 Win = 92"]}),`
`]}),`
`,e.jsx(n.p,{children:"此工具用于在需要区分平台行为的场景中判断设备类型，典型场景如键盘快捷键处理。"}),`
`,e.jsx(n.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsxs(n.p,{children:["检测当前设备是否为 Apple 设备，优先使用现代的 ",e.jsx(n.code,{children:"navigator.userAgentData"})," API，降级使用 ",e.jsx(n.code,{children:"navigator.platform"}),"。"]}),`
`,e.jsx(r,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否为 Apple 设备"})]})})]}),`
`,e.jsx(n.h2,{id:"典型使用场景",children:"典型使用场景"}),`
`,e.jsx(n.h3,{id:"键盘快捷键适配",children:"键盘快捷键适配"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isAppleDevice from '@justichentai/element-utils/isAppleDevice'

// 根据平台选择不同的修饰键提示
const modifierKey = isAppleDevice() ? '⌘' : 'Ctrl'
console.log(\`保存快捷键: \${modifierKey} + S\`)
`})}),`
`,e.jsx(n.h3,{id:"meta-键-keycode-映射",children:"Meta 键 keyCode 映射"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isAppleDevice from '@justichentai/element-utils/isAppleDevice'

// Mac: Command 左 91 右 93 | Windows: Win 左 91 右 92
const metaKeyCodes = isAppleDevice() ? [91, 93] : [91, 92]
`})}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 唯一源文件，包含 isAppleDevice 函数实现"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["检查 ",e.jsx(n.code,{children:"navigator"})," 是否存在（SSR 安全）"]}),`
`,e.jsxs(n.li,{children:["优先使用 ",e.jsx(n.code,{children:"navigator.userAgentData.platform"}),"（现代 API）"]}),`
`,e.jsxs(n.li,{children:["降级使用 ",e.jsx(n.code,{children:"navigator.platform"}),"（已废弃但兼容性好）"]}),`
`,e.jsx(n.li,{children:"通过正则匹配 Mac、iPhone、iPod、iPad 关键词"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"navigator.userAgentData"})}),"：Chrome 93+ 支持的现代 API，替代已废弃的 ",e.jsx(n.code,{children:"navigator.platform"}),"。返回的 ",e.jsx(n.code,{children:"platform"})," 值为 ",e.jsx(n.code,{children:'"macOS"'}),"（Mac）或 ",e.jsx(n.code,{children:'"iOS"'}),"（移动端 Apple 设备）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"navigator.platform"})}),"：作为降级方案，值为 ",e.jsx(n.code,{children:'"MacIntel"'}),"、",e.jsx(n.code,{children:'"iPhone"'})," 等，虽已废弃但所有浏览器仍支持"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR 安全"}),"：通过 ",e.jsx(n.code,{children:"typeof navigator === 'undefined'"})," 守卫，避免在 Node.js 环境中报错"]}),`
`]})]})}function p(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
