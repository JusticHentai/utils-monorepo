import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const basicDemo = () => {
  const perf = performanceMark()

  // 打标记点
  perf.mark('demo-start')

  // 模拟一些操作
  let sum = 0
  for (let i = 0; i < 100000; i++) {
    sum += i
  }

  perf.mark('demo-end')

  // 获取标记
  const marks = perf.getMarks()

  action('打标记点成功')({
    marks: marks.map((m) => ({
      name: m.name,
      startTime: \`\${m.startTime.toFixed(2)}ms\`,
    })),
    计算结果: sum,
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const measureDemo = () => {
  const perf = performanceMark()

  // 打开始标记
  perf.mark('fetch-start')

  // 模拟异步操作
  setTimeout(() => {
    perf.mark('fetch-end')

    // 测量两个标记之间的耗时
    const result = perf.measure('fetch-duration', 'fetch-start', 'fetch-end')

    if (result) {
      action('测量耗时成功')({
        名称: result.name,
        耗时: \`\${result.duration.toFixed(2)}ms\`,
        开始时间: \`\${result.startTime.toFixed(2)}ms\`,
        结束时间: \`\${result.endTime.toFixed(2)}ms\`,
      })
    }

    // 获取所有测量记录
    const measures = perf.getMeasures()
    action('所有测量记录')(
      measures.map((m) => ({
        name: m.name,
        duration: \`\${m.duration.toFixed(2)}ms\`,
      }))
    )
  }, 100)

  action('开始异步操作')('等待 100ms...')
}

export default measureDemo
`,l=`import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const clearDemo = () => {
  const perf = performanceMark()

  // 创建一些标记和测量
  perf.mark('test-mark-1')
  perf.mark('test-mark-2')
  perf.measure('test-measure', 'test-mark-1', 'test-mark-2')

  action('创建标记和测量')({
    标记数量: perf.getMarks().length,
    测量数量: perf.getMeasures().length,
  })

  // 清除指定标记
  perf.clearMarks('test-mark-1')
  action('清除 test-mark-1 后')({
    剩余标记: perf.getMarks().map((m) => m.name),
  })

  // 清除所有标记
  perf.clearMarks()
  action('清除所有标记后')({
    剩余标记数量: perf.getMarks().length,
  })

  // 清除所有测量
  perf.clearMeasures()
  action('清除所有测量后')({
    剩余测量数量: perf.getMeasures().length,
  })
}

export default clearDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"performancemark",children:"performanceMark"}),`
`,e.jsx(n.p,{children:"性能标记和测量工具，封装 Performance API 的 mark 和 measure 功能，用于精确测量代码执行时间。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"performanceMark"})," 是对浏览器 Performance API 中 ",e.jsx(n.code,{children:"performance.mark()"})," 和 ",e.jsx(n.code,{children:"performance.measure()"})," 的封装工具。"]}),`
`,e.jsx(n.h3,{id:"核心概念",children:"核心概念"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"mark（标记）"}),'：在代码执行的某个时刻"打卡"，记录一个时间戳']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"measure（测量）"}),"：计算两个标记点之间的时间差，得出代码执行耗时"]}),`
`]}),`
`,e.jsx(n.h3,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"性能分析"}),"：测量关键代码段的执行时间"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API 请求耗时"}),"：测量网络请求从发起到响应的时间"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"组件渲染"}),"：测量 React/Vue 组件的渲染耗时"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"用户交互"}),"：测量从用户操作到界面响应的时间"]}),`
`]}),`
`,e.jsx(n.h3,{id:"优势",children:"优势"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["比 ",e.jsx(n.code,{children:"console.time()"})," 更精确（基于 ",e.jsx(n.code,{children:"performance.now()"}),"）"]}),`
`,e.jsx(n.li,{children:"数据可被 PerformanceObserver 监听"}),`
`,e.jsx(n.li,{children:"支持在 Chrome DevTools Performance 面板中查看"}),`
`,e.jsx(n.li,{children:"标记和测量结果可持久化存储"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础标记-mark",children:"基础标记 (mark)"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"mark()"})," 方法在代码中打时间标记点，记录执行时刻。"]}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"测量耗时-measure",children:"测量耗时 (measure)"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"measure()"})," 方法计算两个标记点之间的时间差，支持异步操作的耗时测量。"]}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"清除标记和测量",children:"清除标记和测量"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"clearMarks()"})," 和 ",e.jsx(n.code,{children:"clearMeasures()"})," 方法清除已创建的标记和测量，避免内存泄漏。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"返回值-performancemarkinstance",children:"返回值 PerformanceMarkInstance"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"mark"}),e.jsx("td",{children:e.jsx("code",{children:"(name: string) => void"})}),e.jsx("td",{children:"打标记点，记录当前时间戳"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"measure"}),e.jsx("td",{children:e.jsx("code",{children:"(name: string, startMark: string, endMark?: string) => MeasureResult | null"})}),e.jsx("td",{children:"测量两个标记点之间的耗时，endMark 可选（默认为当前时间）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clearMarks"}),e.jsx("td",{children:e.jsx("code",{children:"(name?: string) => void"})}),e.jsx("td",{children:"清除标记，不传参数则清除所有标记"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clearMeasures"}),e.jsx("td",{children:e.jsx("code",{children:"(name?: string) => void"})}),e.jsx("td",{children:"清除测量，不传参数则清除所有测量"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getMarks"}),e.jsx("td",{children:e.jsx("code",{children:"(name?: string) => PerformanceMark[]"})}),e.jsx("td",{children:"获取标记列表"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getMeasures"}),e.jsx("td",{children:e.jsx("code",{children:"(name?: string) => PerformanceMeasure[]"})}),e.jsx("td",{children:"获取测量列表"})]})]})]}),`
`,e.jsx(n.h3,{id:"measureresult-类型",children:"MeasureResult 类型"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"测量名称"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"duration"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"耗时（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"startTime"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"开始时间（相对于 performance.timeOrigin）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"endTime"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"结束时间（相对于 performance.timeOrigin）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.ts"})}),e.jsx("td",{children:"主入口，封装 Performance API 的 mark/measure 方法"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"interface.ts"})}),e.jsx("td",{children:"类型定义，包含 MeasureResult 和 PerformanceMarkInstance"})]})]})]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"初始化"}),"：检测浏览器环境和 Performance API 支持情况"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"打标记"}),"：调用 ",e.jsx(n.code,{children:"performance.mark()"})," 记录时间戳"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"测量耗时"}),"：调用 ",e.jsx(n.code,{children:"performance.measure()"})," 计算两个标记之间的时间差"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"获取结果"}),"：通过 ",e.jsx(n.code,{children:"performance.getEntriesByType()"})," 获取标记和测量记录"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"清理"}),"：调用 ",e.jsx(n.code,{children:"performance.clearMarks()"})," / ",e.jsx(n.code,{children:"clearMeasures()"})," 清除记录"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance API"}),"：使用 ",e.jsx(n.code,{children:"performance.mark()"})," 和 ",e.jsx(n.code,{children:"performance.measure()"})," 实现高精度计时"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PerformanceMark/PerformanceMeasure"}),"：浏览器内置类型，包含 name、startTime、duration 等属性"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"错误处理"}),"：measure 时如果标记不存在会抛出异常，使用 try-catch 处理"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`mark(name) → performance.mark() → PerformanceMark 存储
                                        ↓
measure(name, start, end) → performance.measure() → MeasureResult 返回
                                        ↓
getMarks() / getMeasures() → performance.getEntriesByType() → 数组返回
`})})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{p as default};
