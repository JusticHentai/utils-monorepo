import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as h}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onHeightChange from '../../../packages/element-utils/src/onHeightChange'
import '../../.css/index.css'

const OnHeightChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [height, setHeight] = useState(150)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onHeightChange(
      containerRef.current,
      (newHeight, prevHeight) => {
        setHeight(Math.round(newHeight))
        action('高度变化')({
          前值: Math.round(prevHeight),
          现值: Math.round(newHeight),
          变化量: Math.round(newHeight - prevHeight),
        })
      },
      { threshold: 5, delay: 50 }
    )

    action('初始化成功')('拖动下边框调整高度，阈值 5px，变化小于 5px 不触发')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setHeight(150)
  }

  const handleCleanup = () => {
    setInited(false)
    setHeight(150)
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
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'vertical',
              overflow: 'auto',
              minHeight: 100,
              maxHeight: 400,
            }}
          >
            <div>拖动调整高度</div>
            <div>高度: {height}px</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnHeightChangeDemo
`;function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onheightchange",children:"onHeightChange"}),`
`,e.jsx(n.p,{children:"监听元素高度变化（带防抖）。使用 ResizeObserver 监听元素高度变化，支持变化阈值和防抖处理。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onHeightChange"})," 专门监听元素高度变化，支持设置变化阈值避免微小变化触发回调。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ResizeObserver API：浏览器原生的元素尺寸监听 API"}),`
`,e.jsx(n.li,{children:"变化阈值：只有变化量超过阈值才触发回调"}),`
`,e.jsx(n.li,{children:"防抖处理：减少高频回调"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"折叠面板：监听内容高度变化做动画过渡"}),`
`,e.jsx(n.li,{children:"文本域自适应：根据内容自动调整高度"}),`
`,e.jsx(n.li,{children:"虚拟滚动：监听容器高度变化重新计算"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"支持变化阈值，过滤微小变化"}),`
`,e.jsx(n.li,{children:"获取前值和现值"}),`
`,e.jsx(n.li,{children:"内置防抖处理"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(h,{language:"tsx",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"OnHeightChangeCallback"})}),e.jsx("td",{children:"高度变化时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"OnHeightChangeOptions"})}),e.jsx("td",{children:"可选，配置选项"})]})]})]}),`
`,e.jsx(n.h3,{id:"onheightchangecallback",children:"OnHeightChangeCallback"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type OnHeightChangeCallback = (height: number, prevHeight: number) => void
`})}),`
`,e.jsx(n.h3,{id:"onheightchangeoptions",children:"OnHeightChangeOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"threshold"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"变化阈值（像素），变化小于此值不触发，默认为 0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"防抖延迟时间（毫秒），默认为 0"})]})]})]}),`
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
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"getElementSize"})," 获取初始高度"]}),`
`,e.jsxs(n.li,{children:["使用闭包保存 ",e.jsx(n.code,{children:"prevHeight"})," 状态"]}),`
`,e.jsx(n.li,{children:"ResizeObserver 回调中比较变化量与阈值"}),`
`,e.jsx(n.li,{children:"超过阈值则执行回调并更新 prevHeight"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"Math.abs(height - prevHeight)"})," 计算变化量"]}),`
`,e.jsx(n.li,{children:"阈值过滤避免不必要的回调"}),`
`,e.jsx(n.li,{children:"回调参数包含当前值和前一个值"}),`
`]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
