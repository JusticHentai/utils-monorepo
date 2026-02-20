import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useState } from 'react'
import useSet from '../../../packages/element-utils/src/useSet'
import { action } from 'storybook/actions'

const UseSetDemo = () => {
  const [set, { add, remove, reset }] = useSet<string>(['apple', 'banana'])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue) {
      add(inputValue)
      action('add')({ value: inputValue })
      setInputValue('')
    }
  }

  const handleRemove = () => {
    if (inputValue) {
      remove(inputValue)
      action('remove')({ value: inputValue })
      setInputValue('')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="输入值"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
      </div>

      <div className="button" onClick={handleAdd}>
        添加
      </div>
      <div className="button" onClick={handleRemove}>
        删除
      </div>
      <div className="button" onClick={() => { reset(); action('reset')() }}>
        重置
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>Set 内容 ({set.size} 项):</p>
        <ul>
          {Array.from(set).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseSetDemo
`;function s(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useset",children:"useSet"}),`
`,e.jsx(n.p,{children:"管理 Set 类型状态的 Hook。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useSet"})," 提供了一种便捷的方式来管理 Set 类型的状态，封装了常用的 Set 操作方法。"]}),`
`,e.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(i,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"initialValue"}),e.jsx("td",{children:e.jsx("code",{children:"Iterable<K>"})}),e.jsx("td",{children:"初始值"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"set"}),e.jsx("td",{children:e.jsx("code",{children:"Set<K>"})}),e.jsx("td",{children:"当前 Set 实例"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"add"}),e.jsx("td",{children:e.jsx("code",{children:"(key: K) => void"})}),e.jsx("td",{children:"添加元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"remove"}),e.jsx("td",{children:e.jsx("code",{children:"(key: K) => void"})}),e.jsx("td",{children:"删除元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reset"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置为初始值"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：实现 ",e.jsx(n.code,{children:"useSet"})," Hook，基于 ",e.jsx(n.code,{children:"useState"})," 管理 Set 状态，通过 ",e.jsx(n.code,{children:"useMemoizedFn"})," 提供稳定的操作方法"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"getInitValue"})," 工厂函数创建初始 Set 实例"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useState"})," 管理 Set 状态"]}),`
`,e.jsxs(n.li,{children:["定义通用的 ",e.jsx(n.code,{children:"updateSet"})," 辅助函数，统一处理不可变更新"]}),`
`,e.jsxs(n.li,{children:["定义 ",e.jsx(n.code,{children:"add"}),"、",e.jsx(n.code,{children:"remove"}),"、",e.jsx(n.code,{children:"reset"})," 操作方法"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"useMemoizedFn"})," 包装所有方法，保证引用稳定"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"[set, actions] as const"})," 元组"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"不可变更新"}),"：",e.jsx(n.code,{children:"updateSet"})," 通过 ",e.jsx(n.code,{children:"new Set(prevSet)"})," 创建新实例后再执行操作，确保 React 检测到状态变化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"短路优化"}),"：",e.jsx(n.code,{children:"add"})," 和 ",e.jsx(n.code,{children:"remove"})," 在操作前检查 ",e.jsx(n.code,{children:"set.has(key)"}),"，避免不必要的状态更新和重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMemoizedFn"})}),"：包装所有操作方法，避免因引用变化导致消费组件不必要的重渲染"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"as const"})}),"：返回值使用 ",e.jsx(n.code,{children:"as const"})," 断言，确保元组类型推断精确"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`initialValue → getInitValue() → new Set(initialValue)
                                       ↓
                              useState(getInitValue) → [set, setSet]
                                       ↓
                        add → has(key)? → 否 → updateSet(newSet.add(key)) → setSet
                        remove → has(key)? → 是 → updateSet(newSet.delete(key)) → setSet
                        reset → getInitValue() → setSet(initSet)
                                       ↓
                              useMemoizedFn 包装 → 稳定引用
                                       ↓
                              返回 [set, { add, remove, reset }]
`})})]})}function j(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{j as default};
