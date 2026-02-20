import{j as i}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as n}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import '../../.css/index.css'
import { useRef } from 'react'
import useScroll from '../../../packages/element-utils/src/useScroll'
import { action } from 'storybook/actions'

const UseScrollDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = useScroll(scrollRef)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>滚动位置监听</div>
      <div
        style={{
          marginBottom: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          scrollLeft: <span style={{ color: '#1890ff' }}>{scroll?.left ?? 0}</span>
        </div>
        <div>
          scrollTop: <span style={{ color: '#52c41a' }}>{scroll?.top ?? 0}</span>
        </div>
      </div>

      <div style={{ marginBottom: 8, color: '#666' }}>尝试滚动下方内容：</div>
      <div
        ref={scrollRef}
        style={{
          width: 300,
          height: 200,
          overflow: 'auto',
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          padding: 16,
          background: '#fafafa',
        }}
      >
        <div style={{ width: 500 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            aspernatur atque, debitis ex excepturi explicabo iste iure labore
            molestiae neque optio perspiciatis.
          </p>
          <p>
            Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A
            aspernatur assumenda consequuntur culpa cumque dignissimos enim eos,
            et fugit natus nemo nesciunt.
          </p>
          <p>
            Alias aut deserunt expedita, inventore maiores minima officia porro
            rem. Accusamus ducimus magni modi mollitia nihil nisi provident.
          </p>
          <p>
            Alias aut autem consequuntur doloremque esse facilis id molestiae
            neque officia placeat, quia quisquam repellendus reprehenderit.
          </p>
          <p>
            Adipisci blanditiis facere nam perspiciatis sit soluta ullam!
            Architecto aut blanditiis, consectetur corporis cum deserunt
            distinctio dolore eius est exercitationem.
          </p>
          <p>Ab aliquid asperiores assumenda corporis cumque dolorum expedita.</p>
          <p>
            Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus
            distinctio dolore earum, eum expedita facilis.
          </p>
          <p>
            Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis
            unde. Cumque dignissimos distinctio, dolor eaque est fugit nisi non
            pariatur porro possimus, quas quasi.
          </p>
        </div>
      </div>

      <div
        className="button"
        style={{ marginTop: 16 }}
        onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            action('scrollTo')({ top: 0, left: 0 })
          }
        }}
      >
        滚动到顶部
      </div>
    </div>
  )
}

export default UseScrollDemo
`;function r(s){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"usescroll",children:"useScroll"}),`
`,i.jsx(e.p,{children:"监听元素滚动位置的 Hook。"}),`
`,i.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,i.jsx(e.p,{children:"useScroll 可以实时获取目标元素的滚动位置（scrollTop 和 scrollLeft），支持 DOM 元素和 document 作为监听目标，并支持条件过滤更新。"}),`
`,i.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"滚动动画"}),`
`,i.jsx(e.li,{children:"返回顶部按钮"}),`
`,i.jsx(e.li,{children:"无限滚动加载"}),`
`,i.jsx(e.li,{children:"滚动进度指示器"}),`
`,i.jsx(e.li,{children:"吸顶/吸底效果"}),`
`]}),`
`,i.jsx(e.h2,{id:"演示代码",children:"演示代码"}),`
`,i.jsx(n,{language:"tsx",children:l}),`
`,i.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"参数名"}),i.jsx("th",{children:"类型"}),i.jsx("th",{children:"默认值"}),i.jsx("th",{children:"描述"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"target"}),i.jsx("td",{children:i.jsx("code",{children:"Target"})}),i.jsx("td",{children:i.jsx("code",{children:"document"})}),i.jsx("td",{children:"目标元素"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"shouldUpdate"}),i.jsx("td",{children:i.jsx("code",{children:"(val: Position) => boolean"})}),i.jsx("td",{children:i.jsx("code",{children:"() => true"})}),i.jsx("td",{children:"控制是否更新滚动信息"})]})]})]}),`
`,i.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"属性名"}),i.jsx("th",{children:"类型"}),i.jsx("th",{children:"描述"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"left"}),i.jsx("td",{children:i.jsx("code",{children:"number"})}),i.jsx("td",{children:"横向滚动距离"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"top"}),i.jsx("td",{children:i.jsx("code",{children:"number"})}),i.jsx("td",{children:"纵向滚动距离"})]})]})]}),`
`,i.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,i.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsx(e.li,{children:"使用 useRafState 管理滚动位置（使用 requestAnimationFrame 优化性能）"}),`
`,i.jsx(e.li,{children:"监听目标元素的 scroll 事件"}),`
`,i.jsx(e.li,{children:"计算滚动位置时兼容 document 和普通元素"}),`
`,i.jsx(e.li,{children:"支持通过 shouldUpdate 函数过滤不需要的更新"}),`
`]})]})}function m(s={}){const{wrapper:e}={...t(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(r,{...s})}):r(s)}export{m as default};
