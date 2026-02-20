import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onEnterViewport from '../../../packages/element-utils/src/onEnterViewport'
import '../../.css/index.css'

const OnEnterViewportDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (!targetRef.current || !containerRef.current) return

    const stop = onEnterViewport(
      targetRef.current,
      () => {
        action('元素进入视口')('触发回调，观察器自动停止')
        setTriggered(true)
      },
      { root: containerRef.current }
    )

    return () => {
      stop()
    }
  }, [key])

  const handleReset = () => {
    setTriggered(false)
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
    // 重新初始化观察器
    setKey((k) => k + 1)
  }

  return (
    <div>
      <p style={{ marginBottom: 16, color: '#666' }}>
        向下滚动容器，使目标元素进入视口，触发回调
      </p>

      <div className="button" onClick={handleReset}>
        重置演示
      </div>

      {/* 可滚动容器 */}
      <div
        ref={containerRef}
        style={{
          marginTop: 20,
          width: 300,
          height: 200,
          overflowY: 'auto',
          border: '2px solid #ddd',
          borderRadius: 8,
          position: 'relative',
        }}
      >
        {/* 顶部占位内容 */}
        <div
          style={{
            height: 250,
            background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          ↓ 向下滚动查看目标元素 ↓
        </div>

        {/* 目标元素 - 在容器底部 */}
        <div
          ref={targetRef}
          style={{
            height: 100,
            background: triggered
              ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {triggered ? '已进入视口!' : '目标元素'}
        </div>
      </div>
    </div>
  )
}

export default OnEnterViewportDemo
`;function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onenterviewport",children:"onEnterViewport"}),`
`,e.jsx(n.p,{children:"监听元素进入视口（一次性）。当目标元素首次进入视口时触发回调，触发后自动停止观察。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onEnterViewport"})," 是基于 ",e.jsx(n.code,{children:"IntersectionObserver"})," 封装的一次性视口进入监听工具。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"IntersectionObserver API：浏览器原生的元素可见性检测 API"}),`
`,e.jsx(n.li,{children:"一次性观察：触发后自动停止，避免重复回调"}),`
`,e.jsx(n.li,{children:"阈值配置：支持设置元素可见比例触发条件"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"图片懒加载：元素进入视口时加载真实图片"}),`
`,e.jsx(n.li,{children:"曝光统计：统计元素是否被用户看到"}),`
`,e.jsx(n.li,{children:"动画触发：元素进入视口时播放入场动画"}),`
`,e.jsx(n.li,{children:"无限滚动：检测底部元素进入视口时加载更多"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"一次性触发，无需手动清理"}),`
`,e.jsx(n.li,{children:"比 scroll 事件监听更高效"}),`
`,e.jsx(n.li,{children:"支持配置可见比例阈值"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.p,{children:"通过滚动容器使目标元素进入视口，触发回调。"}),`
`,e.jsx(s,{language:"tsx",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"元素进入视口时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"OnEnterViewportOptions"})}),e.jsx("td",{children:"可选，观察器配置选项"})]})]})]}),`
`,e.jsx(n.h3,{id:"onenterviewportoptions",children:"OnEnterViewportOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"root"}),e.jsx("td",{children:e.jsx("code",{children:"Element | Document | null"})}),e.jsx("td",{children:"用作视口的元素，默认为浏览器视口"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"rootMargin"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:'根元素的外边距，如 "10px 20px"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"threshold"}),e.jsx("td",{children:e.jsx("code",{children:"number | number[]"})}),e.jsx("td",{children:"触发回调的可见比例阈值，0-1 之间"})]})]})]}),`
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
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"createIntersectionObserver"})," 创建底层观察器"]}),`
`,e.jsxs(n.li,{children:["在回调中检测 ",e.jsx(n.code,{children:"isIntersecting"})," 是否为 ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:["首次进入视口时执行用户回调并调用 ",e.jsx(n.code,{children:"stop()"})," 停止观察"]}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"immediate: true"})," 确保立即检测当前状态"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["复用 ",e.jsx(n.code,{children:"createIntersectionObserver"})," 底层实现"]}),`
`,e.jsx(n.li,{children:"一次性触发后自动清理，避免内存泄漏"}),`
`,e.jsx(n.li,{children:"空元素安全处理，返回空函数"}),`
`]})]})}function a(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};
