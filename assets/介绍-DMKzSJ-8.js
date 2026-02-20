import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import { useLocalStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * useLocalStorageState 基础用法
 *
 * 在 React 组件中使用：
 */
const localStorageDemo = () => {
  action('useLocalStorageState 用法')(\`
// 在 React 组件中使用
const [message, setMessage] = useLocalStorageState<string>('my-key', {
  defaultValue: 'Hello',
})

// 更新值（同时同步到 localStorage）
setMessage('World')

// 使用函数式更新
setMessage((prev) => prev + '!')

// 清除值（从 localStorage 移除）
setMessage(undefined)
  \`)

  action('说明')('useLocalStorageState 将状态持久化到 localStorage，刷新页面后值仍保留')
}

export default localStorageDemo
`,i=`import { action } from 'storybook/actions'
import { useSessionStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * useSessionStorageState 基础用法
 *
 * 在 React 组件中使用：
 */
const sessionStorageDemo = () => {
  action('useSessionStorageState 用法')(\`
// 在 React 组件中使用
const [count, setCount] = useSessionStorageState<number>('counter', {
  defaultValue: 0,
})

// 更新值
setCount((prev) => (prev ?? 0) + 1)

// 重置
setCount(0)
  \`)

  action('说明')('useSessionStorageState 将状态持久化到 sessionStorage，关闭标签页后值会清除')
}

export default sessionStorageDemo
`,d=`import { action } from 'storybook/actions'
import { useLocalStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * 自定义序列化/反序列化
 *
 * 默认使用 JSON.stringify/JSON.parse，可自定义编码方式
 */
const customSerializerDemo = () => {
  action('自定义序列化用法')(\`
// 使用 Base64 编码存储
const [data, setData] = useLocalStorageState<{ name: string; age: number }>('user-data', {
  defaultValue: { name: '张三', age: 25 },
  serializer: (v) => btoa(JSON.stringify(v)),
  deserializer: (v) => JSON.parse(atob(v)),
  onError: (e) => console.error('存储错误:', e),
})

// localStorage 中存储的是 Base64 编码的字符串
// 而不是明文 JSON
  \`)

  action('说明')('自定义 serializer/deserializer 可实现加密存储、压缩存储等高级需求')
}

export default customSerializerDemo
`;function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usestoragestate",children:"useStorageState"}),`
`,e.jsxs(n.p,{children:["将 React 状态持久化到 ",e.jsx(n.code,{children:"localStorage"})," 或 ",e.jsx(n.code,{children:"sessionStorage"})," 的 Hook，支持自定义序列化、跨标签页同步和错误处理。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useStorageState"})," 是一个将 React ",e.jsx(n.code,{children:"useState"})," 与 Web Storage API 结合的 Hook。它在状态更新时自动同步到存储中，并在组件初始化时从存储恢复数据。"]}),`
`,e.jsx(n.p,{children:"该工具导出了两个预配置的 Hook："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useLocalStorageState"})," — 基于 ",e.jsx(n.code,{children:"localStorage"}),"，数据在浏览器关闭后仍然保留"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useSessionStorageState"})," — 基于 ",e.jsx(n.code,{children:"sessionStorage"}),"，数据在标签页关闭后清除"]}),`
`]}),`
`,e.jsx(n.p,{children:"适用场景包括：用户偏好设置持久化、表单草稿自动保存、主题切换状态记忆等。"}),`
`,e.jsx(n.h2,{id:"uselocalstoragestate-基础用法",children:"useLocalStorageState 基础用法"}),`
`,e.jsxs(n.p,{children:["将状态持久化到 ",e.jsx(n.code,{children:"localStorage"}),"，刷新页面后值仍然保留。底层通过 ",e.jsx(n.code,{children:"localStorage.setItem"})," 存储序列化后的值，初始化时通过 ",e.jsx(n.code,{children:"localStorage.getItem"})," 恢复。当值设为 ",e.jsx(n.code,{children:"undefined"})," 时，会调用 ",e.jsx(n.code,{children:"removeItem"})," 清除对应 key。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"usesessionstoragestate-用法",children:"useSessionStorageState 用法"}),`
`,e.jsxs(n.p,{children:["与 ",e.jsx(n.code,{children:"useLocalStorageState"})," 使用方式完全一致，区别在于数据存储在 ",e.jsx(n.code,{children:"sessionStorage"})," 中，适用于需要会话级别持久化的场景（如临时表单数据）。"]}),`
`,e.jsx(r,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"自定义序列化",children:"自定义序列化"}),`
`,e.jsxs(n.p,{children:["默认使用 ",e.jsx(n.code,{children:"JSON.stringify"})," / ",e.jsx(n.code,{children:"JSON.parse"})," 进行序列化。通过 ",e.jsx(n.code,{children:"serializer"})," 和 ",e.jsx(n.code,{children:"deserializer"})," 选项可以自定义编码方式，实现加密存储、压缩存储等需求。",e.jsx(n.code,{children:"onError"})," 回调处理序列化/反序列化过程中的异常。"]}),`
`,e.jsx(r,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"key"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"存储键名"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.defaultValue"}),e.jsx("td",{children:e.jsx("code",{children:"T | (() => T)"})}),e.jsx("td",{children:"默认值，支持函数式初始化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.listenStorageChange"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否监听存储变化来同步状态，默认 false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.serializer"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T) => string"})}),e.jsx("td",{children:"自定义序列化函数，默认 JSON.stringify"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.deserializer"}),e.jsx("td",{children:e.jsx("code",{children:"(value: string) => T"})}),e.jsx("td",{children:"自定义反序列化函数，默认 JSON.parse"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.onError"}),e.jsx("td",{children:e.jsx("code",{children:"(error: unknown) => void"})}),e.jsx("td",{children:"错误处理回调，默认 console.error"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"返回值"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"[0] state"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"当前状态值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"[1] setState"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T | ((prev?: T) => T)) => void"})}),e.jsx("td",{children:"更新状态并同步到存储"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"工厂模式"}),": ",e.jsx(n.code,{children:"createUseStorageState"})," 是一个工厂函数，接收 ",e.jsx(n.code,{children:"getStorage"})," 参数返回 Hook。",e.jsx(n.code,{children:"useLocalStorageState"})," 和 ",e.jsx(n.code,{children:"useSessionStorageState"})," 分别传入 ",e.jsx(n.code,{children:"() => localStorage"})," 和 ",e.jsx(n.code,{children:"() => sessionStorage"}),"。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"状态初始化"}),": 组件挂载时通过 ",e.jsx(n.code,{children:"getStoredValue"})," 从存储中读取已有值，如果不存在则使用 ",e.jsx(n.code,{children:"defaultValue"}),"。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"状态同步"}),": 调用 ",e.jsx(n.code,{children:"setState"})," 时同时更新 React 状态和 Storage。值为 ",e.jsx(n.code,{children:"undefined"})," 时调用 ",e.jsx(n.code,{children:"removeItem"})," 删除存储项。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"跨组件同步"}),": 更新时通过 ",e.jsx(n.code,{children:"dispatchEvent(new CustomEvent(SYNC_STORAGE_EVENT_NAME))"})," 发送自定义事件，同页面内其他使用相同 key 的 Hook 通过 ",e.jsx(n.code,{children:"useEventListener"})," 监听该事件来同步状态。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"跨标签页同步"}),": 通过监听原生 ",e.jsx(n.code,{children:"storage"})," 事件实现跨标签页的数据同步（",e.jsx(n.code,{children:"storage"})," 事件只在其他标签页触发）。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Key 变更处理"}),": 使用 ",e.jsx(n.code,{children:"useUpdateEffectHook"})," 监听 key 变化，key 改变时重新从存储中读取对应值。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"稳定引用"}),": 通过 ",e.jsx(n.code,{children:"useMemoizedFn"})," 包装 ",e.jsx(n.code,{children:"updateState"}),"，确保返回的 setter 函数引用稳定，避免不必要的重渲染。"]}),`
`]}),`
`]})]})}function g(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};
