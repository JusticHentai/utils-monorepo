import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { useEffect, useState } from 'react'
import { action } from 'storybook/actions'
import onBFCacheRestore from '../../../packages/element-utils/src/onBFCacheRestore'
import '../../.css/index.css'

const OnBFCacheRestoreDemo = () => {
  const [restoreCount, setRestoreCount] = useState(0)
  const [lastRestoreTime, setLastRestoreTime] = useState<string | null>(null)

  // 始终监听 BFCache 恢复事件
  useEffect(() => {
    const stop = onBFCacheRestore((event) => {
      setRestoreCount((c) => c + 1)
      setLastRestoreTime(new Date().toLocaleTimeString())
      action('BFCache 恢复')({
        persisted: event.persisted,
        timeStamp: event.timeStamp,
        message: '页面从 BFCache 恢复成功！',
      })
    })

    action('监听已启动')('等待 BFCache 恢复事件...')

    return () => {
      stop()
    }
  }, [])

  const handleNavigateAway = () => {
    // 使用顶层窗口导航，确保真正离开页面
    const targetWindow = window.top || window
    targetWindow.location.href = 'https://www.baidu.com'
  }

  return (
    <div>
      <div className="button" onClick={handleNavigateAway}>
        离开页面（测试 BFCache）
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          maxWidth: 400,
        }}
      >
        <p>
          <strong>监听状态:</strong>{' '}
          <span style={{ color: '#52c41a' }}>● 监听中</span>
        </p>
        <p>
          <strong>恢复次数:</strong> {restoreCount}
        </p>
        {lastRestoreTime && (
          <p>
            <strong>上次恢复:</strong> {lastRestoreTime}
          </p>
        )}

        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: '#fff7e6',
            border: '1px solid #ffd591',
            borderRadius: 4,
            fontSize: 13,
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', color: '#d46b08' }}>
            ⚠️ 测试说明
          </p>
          <ol style={{ margin: '8px 0 0', paddingLeft: 20, color: '#666' }}>
            <li>点击"离开页面"将跳转到外部网站</li>
            <li>等待新页面加载完成</li>
            <li>
              点击浏览器的<strong>后退按钮</strong>返回
            </li>
            <li>如果 BFCache 生效，恢复次数会 +1</li>
          </ol>
          <p style={{ margin: '8px 0 0', fontSize: 12, color: '#999' }}>
            注：BFCache 是否生效取决于浏览器策略，Chrome/Safari 支持较好。
          </p>
        </div>
      </div>
    </div>
  )
}

export default OnBFCacheRestoreDemo
`;function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onbfcacherestore",children:"onBFCacheRestore"}),`
`,e.jsx(n.p,{children:"监听 BFCache（Back-Forward Cache）恢复事件。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onBFCacheRestore"})," 用于监听页面从 BFCache 恢复的事件。当用户通过浏览器的前进/后退按钮返回页面时，如果页面被缓存在 BFCache 中，会触发此事件。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"BFCache（Back-Forward Cache）：浏览器的一种优化机制，让页面在用户返回时立即恢复"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pageshow"})," 事件：页面显示时触发的事件"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.persisted"}),"：判断页面是否从 BFCache 恢复的标志"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"重新连接 WebSocket：BFCache 恢复后原有连接可能已断开"}),`
`,e.jsx(n.li,{children:"刷新过期数据：页面可能缓存了过时的数据"}),`
`,e.jsx(n.li,{children:"重新初始化定时器：原有定时器可能已失效"}),`
`,e.jsx(n.li,{children:"更新用户登录状态：检查用户是否仍然登录"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"注意事项"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"BFCache 行为因浏览器而异，某些页面可能不会被缓存"}),`
`,e.jsxs(n.li,{children:["包含 ",e.jsx(n.code,{children:"unload"})," 事件监听器的页面通常不会被 BFCache 缓存"]}),`
`,e.jsx(n.li,{children:"在 Storybook 等 SPA 环境中无法直接测试，需要真实页面导航"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(i,{language:"tsx",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(event: PageTransitionEvent) => void"})}),e.jsx("td",{children:"BFCache 恢复回调函数"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回清理函数 ",e.jsx(n.code,{children:"() => void"}),"，调用后停止监听。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心原理"}),": 监听 window 的 ",e.jsx(n.code,{children:"pageshow"})," 事件"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"判断条件"}),": 当 ",e.jsx(n.code,{children:"event.persisted"})," 为 ",e.jsx(n.code,{children:"true"})," 时表示从 BFCache 恢复"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"使用 createEventListener"}),": 自动管理事件监听器的添加和移除"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
