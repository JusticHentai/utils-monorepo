import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onWidthChange from '../../../packages/element-utils/src/onWidthChange'
import { action } from 'storybook/actions'

const OnWidthChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [width, setWidth] = useState(200)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onWidthChange(
      containerRef.current,
      (newWidth, prevWidth) => {
        setWidth(Math.round(newWidth))
        action('宽度变化')({
          前值: Math.round(prevWidth),
          现值: Math.round(newWidth),
          变化量: Math.round(newWidth - prevWidth),
        })
      },
      { threshold: 5, delay: 50 }
    )

    action('初始化成功')('拖动右边框调整宽度，阈值 5px，变化小于 5px 不触发')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setWidth(200)
  }

  const handleCleanup = () => {
    setInited(false)
    setWidth(200)
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
              height: 120,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'horizontal',
              overflow: 'auto',
              minWidth: 120,
              maxWidth: 400,
            }}
          >
            <div>拖动调整宽度</div>
            <div>宽度: {width}px</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnWidthChangeDemo
`;function d(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onwidthchange",children:"onWidthChange"}),`
`,n.jsx(e.p,{children:"监听元素宽度变化（带防抖）。使用 ResizeObserver 监听元素宽度变化，支持变化阈值和防抖处理。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onWidthChange"})," 专门监听元素宽度变化，支持设置变化阈值避免微小变化触发回调。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ResizeObserver API：浏览器原生的元素尺寸监听 API"}),`
`,n.jsx(e.li,{children:"变化阈值：只有变化量超过阈值才触发回调"}),`
`,n.jsx(e.li,{children:"防抖处理：减少高频回调"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"侧边栏宽度监控：监听可拖拽侧边栏的宽度变化"}),`
`,n.jsx(e.li,{children:"响应式断点：检测元素宽度是否跨越断点"}),`
`,n.jsx(e.li,{children:"内容自适应：根据宽度调整内容显示方式"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"支持变化阈值，过滤微小变化"}),`
`,n.jsx(e.li,{children:"获取前值和现值"}),`
`,n.jsx(e.li,{children:"内置防抖处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"tsx",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"Element | null"})}),n.jsx("td",{children:"要观察的目标元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnWidthChangeCallback"})}),n.jsx("td",{children:"宽度变化时的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"OnWidthChangeOptions"})}),n.jsx("td",{children:"可选，配置选项"})]})]})]}),`
`,n.jsx(e.h3,{id:"onwidthchangecallback",children:"OnWidthChangeCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnWidthChangeCallback = (width: number, prevWidth: number) => void
`})}),`
`,n.jsx(e.h3,{id:"onwidthchangeoptions",children:"OnWidthChangeOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"threshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"变化阈值（像素），变化小于此值不触发，默认为 0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"delay"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"防抖延迟时间（毫秒），默认为 0"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 主函数实现"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"getElementSize"})," 获取初始宽度"]}),`
`,n.jsxs(e.li,{children:["使用闭包保存 ",n.jsx(e.code,{children:"prevWidth"})," 状态"]}),`
`,n.jsx(e.li,{children:"ResizeObserver 回调中比较变化量与阈值"}),`
`,n.jsx(e.li,{children:"超过阈值则执行回调并更新 prevWidth"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"Math.abs(width - prevWidth)"})," 计算变化量"]}),`
`,n.jsx(e.li,{children:"阈值过滤避免不必要的回调"}),`
`,n.jsx(e.li,{children:"回调参数包含当前值和前一个值"}),`
`]})]})}function a(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{a as default};
