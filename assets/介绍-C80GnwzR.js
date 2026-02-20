import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useState } from 'react'
import useMap from '../../../packages/element-utils/src/useMap'
import { action } from 'storybook/actions'

const UseMapDemo = () => {
  const [map, { set, get, remove, reset, setAll }] = useMap<string, string>([
    ['name', 'Alice'],
    ['age', '25'],
  ])
  const [inputKey, setInputKey] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSet = () => {
    if (inputKey) {
      set(inputKey, inputValue)
      action('set')({ key: inputKey, value: inputValue })
      setInputKey('')
      setInputValue('')
    }
  }

  const handleRemove = () => {
    if (inputKey) {
      remove(inputKey)
      action('remove')({ key: inputKey })
      setInputKey('')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Key"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
        <input
          placeholder="Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
      </div>

      <div className="button" onClick={handleSet}>
        添加/更新
      </div>
      <div className="button" onClick={handleRemove}>
        删除
      </div>
      <div className="button" onClick={() => { reset(); action('reset')() }}>
        重置
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>Map 内容 ({map.size} 项):</p>
        <ul>
          {Array.from(map.entries()).map(([k, v]) => (
            <li key={k}>{k}: {v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseMapDemo
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"usemap",children:"useMap"}),`
`,e.jsx(n.p,{children:"管理 Map 类型状态的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useMap"})," 提供了一种便捷的方式来管理 Map 类型的状态，封装了常用的 Map 操作方法。"]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(t,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"initialValue"}),e.jsx("td",{children:e.jsx("code",{children:"Iterable<readonly [K, T]>"})}),e.jsx("td",{children:"初始值"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"map"}),e.jsx("td",{children:e.jsx("code",{children:"Map<K, T>"})}),e.jsx("td",{children:"当前 Map 实例"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"set"}),e.jsx("td",{children:e.jsx("code",{children:"(key: K, entry: T) => void"})}),e.jsx("td",{children:"添加/更新元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"get"}),e.jsx("td",{children:e.jsx("code",{children:"(key: K) => T | undefined"})}),e.jsx("td",{children:"获取元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"remove"}),e.jsx("td",{children:e.jsx("code",{children:"(key: K) => void"})}),e.jsx("td",{children:"删除元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reset"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置为初始值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setAll"}),e.jsx("td",{children:e.jsx("code",{children:"(map: Iterable<readonly [K, T]>) => void"})}),e.jsx("td",{children:"替换整个 Map"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"useMap"})," Hook，基于 ",e.jsx(n.code,{children:"useState"})," 管理 Map 状态，通过 ",e.jsx(n.code,{children:"useMemoizedFn"})," 提供稳定的操作方法"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"getInitValue"})," 工厂函数创建初始 Map 实例"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState"})," 管理 Map 状态"]}),`
`,e.jsxs(n.li,{children:["定义 ",e.jsx(n.code,{children:"set"}),"、",e.jsx(n.code,{children:"setAll"}),"、",e.jsx(n.code,{children:"remove"}),"、",e.jsx(n.code,{children:"reset"}),"、",e.jsx(n.code,{children:"get"})," 操作方法"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useMemoizedFn"})," 包装所有方法，保证引用稳定"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"[map, actions] as const"})," 元组"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"不可变更新"}),"：",e.jsx(n.code,{children:"set"})," 和 ",e.jsx(n.code,{children:"remove"})," 操作通过 ",e.jsx(n.code,{children:"new Map(prev)"})," 创建新实例，确保 React 检测到状态变化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMemoizedFn"})}),"：包装所有操作方法，避免因引用变化导致消费组件不必要的重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"as const"})}),"：返回值使用 ",e.jsx(n.code,{children:"as const"})," 断言，确保元组类型推断精确"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`initialValue → getInitValue() → new Map(initialValue)
                                       ↓
                              useState(getInitValue) → [map, setMap]
                                       ↓
                        set/remove → new Map(prev) → setMap(newMap) → 触发重渲染
                        setAll → new Map(newEntries) → setMap(newMap)
                        reset → getInitValue() → setMap(initMap)
                        get → map.get(key)
                                       ↓
                              useMemoizedFn 包装 → 稳定引用
                                       ↓
                              返回 [map, { set, setAll, remove, reset, get }]
`})})]})}function j(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
