import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onElementResize from '../../../packages/element-utils/src/onElementResize'
import { action } from 'storybook/actions'

const OnElementResizeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [size, setSize] = useState({ width: 200, height: 150 })

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onElementResize(
      containerRef.current,
      ({ width, height }) => {
        setSize({ width: Math.round(width), height: Math.round(height) })
        action('尺寸变化')({
          宽度: Math.round(width),
          高度: Math.round(height),
        })
      },
      100
    )

    action('初始化成功')('拖动元素右下角调整大小，设置 100ms 防抖')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setSize({ width: 200, height: 150 })
  }

  const handleCleanup = () => {
    setInited(false)
    setSize({ width: 200, height: 150 })
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
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
              width: 200,
              height: 150,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'both',
              overflow: 'auto',
              minWidth: 150,
              minHeight: 100,
            }}
          >
            <div>拖动右下角调整大小</div>
            <div>{size.width} x {size.height}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnElementResizeDemo
`;function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onelementresize",children:"onElementResize"}),`
`,e.jsx(n.p,{children:"监听元素尺寸变化（带防抖）。使用 ResizeObserver 监听元素尺寸变化，支持防抖处理避免频繁触发。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onElementResize"})," 是基于 ",e.jsx(n.code,{children:"ResizeObserver"})," 封装的尺寸变化监听工具，内置防抖处理。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ResizeObserver API：浏览器原生的元素尺寸监听 API"}),`
`,e.jsx(n.li,{children:"防抖处理：避免高频回调影响性能"}),`
`,e.jsx(n.li,{children:"borderBoxSize：获取元素的边框盒尺寸"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"响应式布局：元素尺寸变化时重新计算布局"}),`
`,e.jsx(n.li,{children:"图表重绘：容器尺寸变化时重绘图表"}),`
`,e.jsx(n.li,{children:"编辑器：调整编辑区域大小"}),`
`,e.jsx(n.li,{children:"可拖拽面板：监听面板尺寸变化"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"内置防抖，减少回调频率"}),`
`,e.jsx(n.li,{children:"比 window.resize 更精确"}),`
`,e.jsx(n.li,{children:"自动获取宽高信息"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(t,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"ResizeCallback"})}),e.jsx("td",{children:"尺寸变化时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"可选，防抖延迟时间（毫秒），默认为 0"})]})]})]}),`
`,e.jsx(n.h3,{id:"resizecallback",children:"ResizeCallback"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ResizeCallback = (size: { width: number; height: number }) => void
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
`,e.jsx(n.li,{children:"根据 delay 参数决定是否包装防抖"}),`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"createResizeObserver"})," 创建观察器"]}),`
`,e.jsx(n.li,{children:"将防抖后的回调传递给观察器"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["复用 ",e.jsx(n.code,{children:"debounce"})," 工具函数实现防抖"]}),`
`,e.jsx(n.li,{children:"delay 为 0 时不进行防抖包装"}),`
`,e.jsx(n.li,{children:"回调参数包含 width 和 height"}),`
`]})]})}function a(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default};
