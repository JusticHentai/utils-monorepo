import{j as i}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-C_s77IFb.js";import{C as d}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const l=`import '../../.css/index.css'
import { useEffect } from 'react'
import useDocumentVisibility from '../../../packages/element-utils/src/useDocumentVisibility'
import { action } from 'storybook/actions'

const UseDocumentVisibilityDemo = () => {
  const visibility = useDocumentVisibility()

  useEffect(() => {
    action('页面可见性变化')(visibility)
  }, [visibility])

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>页面可见性</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        切换浏览器标签页观察可见性变化：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 24,
          background:
            visibility === 'visible'
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
          borderRadius: 8,
          textAlign: 'center',
          color: 'white',
          transition: 'all 0.3s',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>
          {visibility === 'visible' ? '👁️' : '🙈'}
        </div>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>
          {visibility === 'visible' ? '页面可见' : '页面隐藏'}
        </div>
        <div style={{ marginTop: 8, opacity: 0.8 }}>
          visibilityState: {visibility}
        </div>
      </div>

      <div style={{ color: '#999', fontSize: 12 }}>
        <div>可见性状态说明：</div>
        <ul style={{ margin: '8px 0', paddingLeft: 20 }}>
          <li><code>visible</code> - 页面至少部分可见</li>
          <li><code>hidden</code> - 页面完全不可见</li>
          <li><code>prerender</code> - 页面正在预渲染</li>
        </ul>
        <div>提示：切换到其他标签页或最小化窗口可以看到状态变化</div>
      </div>
    </div>
  )
}

export default UseDocumentVisibilityDemo
`;function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(n.h1,{id:"usedocumentvisibility",children:"useDocumentVisibility"}),`
`,i.jsx(n.p,{children:"监听页面可见性变化的 Hook。"}),`
`,i.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,i.jsx(n.p,{children:"useDocumentVisibility 使用 Page Visibility API 监听页面的可见性状态变化，可以用于检测用户是否离开当前标签页。"}),`
`,i.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"暂停/恢复视频播放"}),`
`,i.jsx(n.li,{children:"暂停/恢复动画"}),`
`,i.jsx(n.li,{children:"停止/启动数据轮询"}),`
`,i.jsx(n.li,{children:"埋点统计页面停留时间"}),`
`,i.jsx(n.li,{children:"节省资源消耗"}),`
`]}),`
`,i.jsx(n.h2,{id:"演示代码",children:"演示代码"}),`
`,i.jsx(d,{language:"tsx",children:l}),`
`,i.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"类型"}),i.jsx("th",{children:"可选值"}),i.jsx("th",{children:"描述"})]})}),i.jsx("tbody",{children:i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("code",{children:"VisibilityState"})}),i.jsx("td",{children:i.jsx("code",{children:"'visible' | 'hidden' | 'prerender'"})}),i.jsx("td",{children:"当前页面可见性状态"})]})})]}),`
`,i.jsx(n.h3,{id:"状态说明",children:"状态说明"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"visible"}),": 页面至少部分可见"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"hidden"}),": 页面完全不可见（用户切换标签页、最小化窗口等）"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"prerender"}),": 页面正在预渲染（不常见）"]}),`
`]}),`
`,i.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,i.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,i.jsxs(n.ol,{children:[`
`,i.jsx(n.li,{children:"使用 useState 管理可见性状态"}),`
`,i.jsx(n.li,{children:"使用 useEventListener 监听 document 的 visibilitychange 事件"}),`
`,i.jsx(n.li,{children:"事件触发时读取 document.visibilityState 更新状态"}),`
`,i.jsx(n.li,{children:"SSR 环境下默认返回 'visible'"}),`
`]})]})}function m(e={}){const{wrapper:n}={...s(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(t,{...e})}):t(e)}export{m as default};
