import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onChildListChange from '../../../packages/element-utils/src/onChildListChange'
import { action } from 'storybook/actions'

const OnChildListChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [children, setChildren] = useState<number[]>([])
  const childCountRef = useRef(0)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onChildListChange(
      containerRef.current,
      (addedNodes, removedNodes) => {
        action('子节点变化')({
          添加的节点数: addedNodes.length,
          移除的节点数: removedNodes.length,
          添加的节点: addedNodes.map((n) => (n as HTMLElement).textContent),
          移除的节点: removedNodes.map((n) => (n as HTMLElement).textContent),
        })
      }
    )

    action('初始化成功')('点击按钮添加或移除子节点')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setChildren([])
    childCountRef.current = 0
  }

  const handleAddChild = () => {
    if (!inited) {
      action('请先初始化')()
      return
    }
    childCountRef.current++
    setChildren((prev) => [...prev, childCountRef.current])
  }

  const handleRemoveChild = () => {
    if (!inited) {
      action('请先初始化')()
      return
    }
    if (children.length === 0) {
      action('没有可移除的子节点')()
      return
    }
    setChildren((prev) => prev.slice(0, -1))
  }

  const handleCleanup = () => {
    setInited(false)
    setChildren([])
    childCountRef.current = 0
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
      </div>
      <div className="button" onClick={handleAddChild}>
        添加子节点
      </div>
      <div className="button" onClick={handleRemoveChild}>
        移除子节点
      </div>
      <div className="button" onClick={handleCleanup}>
        清理示例
      </div>

      {/* 演示区域 */}
      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={containerRef}
            style={{
              width: 300,
              minHeight: 150,
              background: '#f5f5f5',
              borderRadius: 8,
              padding: 15,
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: 10,
                color: '#333',
              }}
            >
              子节点容器
            </div>
            {children.map((num) => (
              <div
                key={num}
                className="child-item"
                style={{
                  padding: 10,
                  margin: '5px 0',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 4,
                  color: 'white',
                }}
              >
                子节点 #{num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OnChildListChangeDemo
`;function d(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onchildlistchange",children:"onChildListChange"}),`
`,e.jsx(n.p,{children:"监听子节点变化。使用 MutationObserver 监听指定元素的子节点添加和删除。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onChildListChange"})," 是基于 ",e.jsx(n.code,{children:"MutationObserver"})," 封装的子节点变化监听工具。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"MutationObserver API：浏览器原生的 DOM 变化监听 API"}),`
`,e.jsx(n.li,{children:"childList 配置：监听直接子节点的添加和删除"}),`
`,e.jsx(n.li,{children:"subtree 配置：可选择是否监听整个子树"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"动态列表监控：监听列表项的增删"}),`
`,e.jsx(n.li,{children:"虚拟 DOM 调试：追踪 DOM 节点的变化"}),`
`,e.jsx(n.li,{children:"组件生命周期：检测子组件的挂载和卸载"}),`
`,e.jsx(n.li,{children:"表格行监控：监听表格行的动态增删"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"获取所有新增和移除的节点"}),`
`,e.jsx(n.li,{children:"支持选择是否监听子树"}),`
`,e.jsx(n.li,{children:"比 DOM 事件更精确"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.p,{children:"点击按钮添加或移除子节点，观察回调触发情况。"}),`
`,e.jsx(t,{language:"tsx",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"OnChildListChangeCallback"})}),e.jsx("td",{children:"子节点变化时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"subtree"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"可选，是否监听整个子树，默认为 false"})]})]})]}),`
`,e.jsx(n.h3,{id:"onchildlistchangecallback",children:"OnChildListChangeCallback"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type OnChildListChangeCallback = (
  addedNodes: Node[],
  removedNodes: Node[]
) => void
`})}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 主函数实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"createMutationObserver"})," 创建观察器"]}),`
`,e.jsxs(n.li,{children:["配置 ",e.jsx(n.code,{children:"childList: true"})," 监听子节点变化"]}),`
`,e.jsx(n.li,{children:"收集所有 mutation 中的 addedNodes 和 removedNodes"}),`
`,e.jsx(n.li,{children:"合并后一次性传递给回调函数"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"将多个 mutation 的节点合并处理"}),`
`,e.jsxs(n.li,{children:["支持 ",e.jsx(n.code,{children:"subtree"})," 配置监听深层子树变化"]}),`
`,e.jsx(n.li,{children:"只在有实际变化时触发回调"}),`
`]})]})}function j(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{j as default};
