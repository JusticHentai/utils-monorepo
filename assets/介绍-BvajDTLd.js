import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onLeaveViewport from '../../../packages/element-utils/src/onLeaveViewport'
import '../../.css/index.css'

const OnLeaveViewportDemo = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    if (!inited || !targetRef.current) return

    const stop = onLeaveViewport(
      targetRef.current,
      () => {
        action('元素离开视口')('触发回调，观察器已自动停止')
        setTriggered(true)
      },
      { root: containerRef.current }
    )

    action('初始化成功')('向下滚动容器使绿色元素离开视口')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setTriggered(false)
    // 重置滚动位置
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }

  const handleCleanup = () => {
    setInited(false)
    setTriggered(false)
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

      {/* 演示区域 - 可滚动容器 */}
      {inited && (
        <div
          ref={containerRef}
          style={{
            marginTop: 40,
            width: 300,
            height: 200,
            overflowY: 'auto',
            background: '#f5f5f5',
            borderRadius: 8,
            padding: 16,
          }}
        >
          {/* 目标元素 */}
          <div
            ref={targetRef}
            style={{
              width: '100%',
              height: 80,
              background: triggered
                ? '#ff6b6b'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {triggered ? '已离开视口!' : '目标元素 - 向下滚动'}
          </div>

          {/* 占位内容，用于产生滚动 */}
          <div
            style={{
              marginTop: 16,
              height: 400,
              background: '#e0e0e0',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}
          >
            ↑ 向上滚动使目标元素离开视口
          </div>
        </div>
      )}
    </div>
  )
}

export default OnLeaveViewportDemo
`;function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onleaveviewport",children:"onLeaveViewport"}),`
`,e.jsx(n.p,{children:"监听元素离开视口（一次性）。当目标元素首次离开视口时触发回调，触发后自动停止观察。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onLeaveViewport"})," 是基于 ",e.jsx(n.code,{children:"IntersectionObserver"})," 封装的一次性视口离开监听工具。元素必须先进入视口后再离开才会触发回调。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"IntersectionObserver API：浏览器原生的元素可见性检测 API"}),`
`,e.jsx(n.li,{children:"状态追踪：记录元素是否曾经可见"}),`
`,e.jsx(n.li,{children:"一次性观察：触发后自动停止"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"用户离开监测：检测用户是否已滚动过某个重要区域"}),`
`,e.jsx(n.li,{children:"播放器控制：视频元素离开视口时暂停播放"}),`
`,e.jsx(n.li,{children:"广告曝光结束：统计广告从可见到不可见的时间"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"一次性触发，无需手动清理"}),`
`,e.jsx(n.li,{children:"确保元素曾经可见后才触发离开事件"}),`
`,e.jsx(n.li,{children:"比 scroll 事件监听更高效"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(n.p,{children:"通过滚动容器使目标元素离开视口，触发回调。"}),`
`,e.jsx(d,{language:"tsx",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"Element | null"})}),e.jsx("td",{children:"要观察的目标元素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"元素离开视口时的回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"OnLeaveViewportOptions"})}),e.jsx("td",{children:"可选，观察器配置选项"})]})]})]}),`
`,e.jsx(n.h3,{id:"onleaveviewportoptions",children:"OnLeaveViewportOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"root"}),e.jsx("td",{children:e.jsx("code",{children:"Element | Document | null"})}),e.jsx("td",{children:"用作视口的元素，默认为浏览器视口"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"rootMargin"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"根元素的外边距"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"threshold"}),e.jsx("td",{children:e.jsx("code",{children:"number | number[]"})}),e.jsx("td",{children:"触发回调的可见比例阈值"})]})]})]}),`
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
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"hasBeenVisible"})," 变量追踪元素是否曾经可见"]}),`
`,e.jsxs(n.li,{children:["当 ",e.jsx(n.code,{children:"isIntersecting"})," 为 ",e.jsx(n.code,{children:"true"})," 时，标记 ",e.jsx(n.code,{children:"hasBeenVisible = true"})]}),`
`,e.jsxs(n.li,{children:["当 ",e.jsx(n.code,{children:"isIntersecting"})," 为 ",e.jsx(n.code,{children:"false"})," 且 ",e.jsx(n.code,{children:"hasBeenVisible"})," 为 ",e.jsx(n.code,{children:"true"})," 时，触发回调"]}),`
`,e.jsxs(n.li,{children:["触发后调用 ",e.jsx(n.code,{children:"stop()"})," 停止观察"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用闭包保存 ",e.jsx(n.code,{children:"hasBeenVisible"})," 状态"]}),`
`,e.jsx(n.li,{children:"确保元素必须先可见后才能触发离开事件"}),`
`,e.jsx(n.li,{children:"一次性触发后自动清理"}),`
`]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{a as default};
