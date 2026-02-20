import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onTextContentChange from '../../../packages/element-utils/src/onTextContentChange'
import '../../.css/index.css'

const INITIAL_TEXT = '初始文本内容'

const OnTextContentChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textNodeRef = useRef<Text | null>(null)
  const [inited, setInited] = useState(false)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const container = containerRef.current

    // 创建文本节点（由 DOM API 完全控制，不受 React 干扰）
    const textNode = document.createTextNode(INITIAL_TEXT)
    container.appendChild(textNode)
    textNodeRef.current = textNode

    const stop = onTextContentChange(container, (oldValue, newValue) => {
      action('文本内容变化')({
        旧值: oldValue,
        新值: newValue,
      })
    })

    action('初始化成功')('点击按钮修改文本内容')

    return () => {
      stop()
      container.textContent = ''
      textNodeRef.current = null
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
  }

  const handleChangeText = () => {
    if (!textNodeRef.current) {
      action('请先初始化')()
      return
    }
    const newText = \`更新时间: \${new Date().toLocaleTimeString()}\`
    textNodeRef.current.textContent = newText
  }

  const handleCleanup = () => {
    setInited(false)
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
      </div>
      <div className="button" onClick={handleChangeText}>
        修改文本内容
      </div>
      <div className="button" onClick={handleCleanup}>
        清理示例
      </div>

      {/* 演示区域 - 文本内容完全由 DOM API 控制，不使用 React state */}
      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={containerRef}
            style={{
              width: 250,
              padding: 20,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default OnTextContentChangeDemo
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ontextcontentchange",children:"onTextContentChange"}),`
`,e.jsx(n.p,{children:"监听文本内容变化。使用 MutationObserver 监听指定元素的文本内容变化。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onTextContentChange"})," 是基于 ",e.jsx(n.code,{children:"MutationObserver"})," 封装的文本内容变化监听工具。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"MutationObserver API：浏览器原生的 DOM 变化监听 API"}),`
`,e.jsx(n.li,{children:"characterData 配置：监听文本节点的内容变化"}),`
`,e.jsx(n.li,{children:"文本节点 vs 元素节点：区分 Text 节点和 Element 节点"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"实时编辑器：监听用户输入的文本变化"}),`
`,e.jsx(n.li,{children:"内容同步：实时同步文本内容到其他位置"}),`
`,e.jsx(n.li,{children:"字数统计：实时统计文本长度"}),`
`,e.jsx(n.li,{children:"输入验证：实时检测文本内容是否合法"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"精确获取文本旧值和新值"}),`
`,e.jsx(n.li,{children:"比 input 事件更底层"}),`
`,e.jsx(n.li,{children:"适用于 contentEditable 元素"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"注意事项"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["监听的是 Text 节点的 ",e.jsx(n.code,{children:"data"})," 属性变化"]}),`
`,e.jsxs(n.li,{children:["直接修改 ",e.jsx(n.code,{children:"element.textContent"})," 会替换整个子树，不会触发 characterData 变化"]}),`
`,e.jsxs(n.li,{children:["需要修改已存在的 Text 节点的 ",e.jsx(n.code,{children:"textContent"})," 或 ",e.jsx(n.code,{children:"nodeValue"})," 才能触发"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(s,{language:"tsx",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"OnTextContentChangeCallback"})}),e.jsx("td",{children:"文本变化时的回调函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"ontextcontentchangecallback",children:"OnTextContentChangeCallback"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type OnTextContentChangeCallback = (
  oldValue: string | null,
  newValue: string
) => void
`})}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 主函数实现，封装 MutationObserver 监听逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," - 类型定义，定义回调函数类型"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"createMutationObserver"})," 创建观察器"]}),`
`,e.jsxs(n.li,{children:["配置 ",e.jsx(n.code,{children:"characterData: true"})," 启用文本内容变化监听"]}),`
`,e.jsxs(n.li,{children:["配置 ",e.jsx(n.code,{children:"characterDataOldValue: true"})," 保存旧值"]}),`
`,e.jsxs(n.li,{children:["启用 ",e.jsx(n.code,{children:"subtree: true"})," 监听所有子文本节点"]}),`
`,e.jsx(n.li,{children:"遍历 mutations，从 mutation 中提取旧值和新值并调用回调"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"characterData"}),"：MutationObserver 的配置项，用于监听 Text 节点的 ",e.jsx(n.code,{children:"data"})," 属性变化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"characterDataOldValue"}),"：设为 true 时，mutation.oldValue 会保存变化前的文本值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"subtree"}),"：启用后会监听目标元素内所有后代文本节点的变化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CharacterData"}),"：Text 节点的父接口，通过 ",e.jsx(n.code,{children:"(mutation.target as CharacterData).data"})," 获取新值"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`用户修改 Text.textContent
    ↓
MutationObserver 捕获 characterData 类型的 mutation
    ↓
从 mutation.oldValue 获取旧值
    ↓
从 (mutation.target as CharacterData).data 获取新值
    ↓
调用用户传入的 callback(oldValue, newValue)
`})})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default};
