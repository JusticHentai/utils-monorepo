import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import Reporter from '../../../packages/element-utils/src/Reporter'
import { REPORT_METHOD, REPORT_TYPE } from '../../../packages/element-utils/src/Reporter/interface'

let reporter: Reporter | null = null

export const createInitDemo = (
  getReporter: () => Reporter | null,
  setReporter: (r: Reporter | null) => void
) => {
  return () => {
    if (getReporter()) {
      action('已初始化')('Reporter 实例已存在，请先销毁')
      return
    }

    reporter = new Reporter({
      reportUrl: '/api/report',
      appId: 'storybook-demo',
      reportMethod: REPORT_METHOD.BEACON,
      batchSize: 3,
      reportInterval: 3000,
      beforeReport: (data) => {
        action('beforeReport 钩子触发')(data)
        return data
      },
      afterReport: (data, success) => {
        action('afterReport 钩子触发')({ data, success })
      },
    })

    setReporter(reporter)
    action('初始化成功')({
      sessionId: reporter.sessionId,
      pageId: reporter.pageId,
      reportUrl: '/api/report',
      reportMethod: REPORT_METHOD.BEACON,
      batchSize: 3,
      reportInterval: 3000,
    })
  }
}
`,o=`import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/Reporter'
import { REPORT_TYPE } from '../../../packages/element-utils/src/Reporter/interface'

export const createReportDemo = (getReporter: () => Reporter | null) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    reporter.report(REPORT_TYPE.PERFORMANCE, {
      metricType: 'webVitals',
      name: 'LCP',
      value: 1234.5,
    })

    action('上报性能数据')(REPORT_TYPE.PERFORMANCE)

    reporter.report(REPORT_TYPE.ERROR, { message: 'TypeError: xxx is not a function', stack: 'at demo.ts:1:1' }, true)

    action('上报错误数据（立即上报）')(REPORT_TYPE.ERROR)

    reporter.report(REPORT_TYPE.CUSTOM, { event: 'button_click', label: 'demo' })

    action('上报自定义数据')(REPORT_TYPE.CUSTOM)
  }
}
`,i=`import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/Reporter'

export const createFlushDemo = (getReporter: () => Reporter | null) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    reporter.flush()
    action('flush 完成')('已将缓存中的数据立即上报')
  }
}
`,l=`import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/Reporter'

export const createUpdatePageInfoDemo = (
  getReporter: () => Reporter | null
) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    const oldPageId = reporter.pageId
    reporter.updatePageInfo()
    const newPageId = reporter.pageId

    action('更新页面信息')({
      oldPageId,
      newPageId,
    })
  }
}
`;function d(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"reporter",children:"Reporter"}),`
`,e.jsx(r.p,{children:"数据上报器，支持 Beacon/Fetch/XHR/Image 多种发送方式，内置批量上报、页面生命周期自动刷新、前后置钩子等能力。"}),`
`,e.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(r.p,{children:["Reporter 是一个通用的前端数据上报工具类，基于 ",e.jsx(r.code,{children:"createBatch"})," 实现批量缓冲与定时上报，使用 ",e.jsx(r.code,{children:"onPageUnload"})," 和 ",e.jsx(r.code,{children:"visibility"})," 监听页面卸载/隐藏事件自动 flush 缓存数据，避免数据丢失。"]}),`
`,e.jsx(r.p,{children:"支持 4 种发送方式：Beacon（默认，失败自动降级到 Fetch）、Fetch、XHR、Image，适用于性能监控、错误上报、行为埋点等场景。"}),`
`,e.jsx(r.h2,{id:"上报方式对比",children:"上报方式对比"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方式"}),e.jsx("th",{children:"协议"}),e.jsx("th",{children:"特点"}),e.jsx("th",{children:"数据大小限制"}),e.jsx("th",{children:"页面卸载可靠性"}),e.jsx("th",{children:"适用场景"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Beacon"}),"（默认）"]}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"浏览器保证异步发送，不阻塞页面卸载，失败自动降级到 Fetch"}),e.jsx("td",{children:"64KB（各浏览器不同）"}),e.jsx("td",{children:"⭐ 最高"}),e.jsx("td",{children:"日常上报首选，尤其适合页面关闭/切换时的数据发送"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Fetch"})}),e.jsx("td",{children:"POST"}),e.jsxs("td",{children:["基于 Promise，支持 ",e.jsx(r.code,{children:"keepalive: true"})," 保障卸载时发送，可获取响应状态"]}),e.jsx("td",{children:"64KB（keepalive 模式）/ 无限制（普通模式）"}),e.jsx("td",{children:"⭐ 高"}),e.jsx("td",{children:"需要确认上报结果、需要处理响应、大数据量上报"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"XHR"})}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"兼容性最好（IE9+），同步/异步可选，可获取响应状态"}),e.jsx("td",{children:"无限制"}),e.jsx("td",{children:"⭐ 低"}),e.jsx("td",{children:"需要兼容旧浏览器、需要上传大体量数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Image"})}),e.jsx("td",{children:"GET"}),e.jsxs("td",{children:["通过 ",e.jsx(r.code,{children:"new Image()"})," 发起 GET 请求，无跨域问题，无需服务端 CORS 配置"]}),e.jsx("td",{children:"~2KB（URL 长度限制）"}),e.jsx("td",{children:"⭐ 低"}),e.jsx("td",{children:"简单埋点打点、跨域受限环境、数据量极小的场景"})]})]})]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"推荐策略"}),"：默认使用 Beacon，它在页面卸载时的可靠性最高且不阻塞用户操作。Beacon 发送失败时会自动降级到 Fetch。如果需要兼容旧浏览器可选 XHR，数据量极小且有跨域限制时可选 Image。"]}),`
`]}),`
`,e.jsx(r.h2,{id:"初始化-reporter",children:"初始化 Reporter"}),`
`,e.jsxs(r.p,{children:["通过 ",e.jsx(r.code,{children:"new Reporter(options)"})," 创建实例，配置上报地址、应用 ID、发送方式、批量策略和钩子函数。构造时自动生成 sessionId 和 pageId，并注册页面生命周期事件。"]}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(r.h2,{id:"上报数据",children:"上报数据"}),`
`,e.jsxs(r.p,{children:["通过 ",e.jsx(r.code,{children:"reporter.report(type, data, immediate?)"})," 上报不同类型的数据。",e.jsx(r.code,{children:"immediate"})," 为 ",e.jsx(r.code,{children:"true"})," 时跳过批量缓冲直接发送，适合错误等需要即时上报的场景。"]}),`
`,e.jsx(t,{language:"typescript",children:o}),`
`,e.jsx(r.h2,{id:"手动-flush",children:"手动 Flush"}),`
`,e.jsxs(r.p,{children:["调用 ",e.jsx(r.code,{children:"reporter.flush()"})," 立即将缓存中的所有数据发送出去，适用于用户主动触发或特殊时机需要确保数据已发送的场景。"]}),`
`,e.jsx(t,{language:"typescript",children:i}),`
`,e.jsx(r.h2,{id:"更新页面信息",children:"更新页面信息"}),`
`,e.jsxs(r.p,{children:["调用 ",e.jsx(r.code,{children:"reporter.updatePageInfo()"})," 重新生成 pageId，适用于 SPA 路由变化时标记新页面。"]}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(r.h3,{id:"reporteroptions构造参数",children:"ReporterOptions（构造参数）"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"reportUrl"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"上报地址（必填）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"appId"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"应用 ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reportMethod"}),e.jsx("td",{children:e.jsx("code",{children:"REPORT_METHOD"})}),e.jsx("td",{children:"上报方式，默认 BEACON"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"batchSize"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"批量上报阈值，默认 10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reportInterval"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"上报间隔（ms），默认 5000"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"beforeReport"}),e.jsx("td",{children:e.jsx("code",{children:"(data: ReportData) => ReportData | false"})}),e.jsx("td",{children:"上报前处理钩子，返回 false 取消上报"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"afterReport"}),e.jsx("td",{children:e.jsx("code",{children:"(data: ReportData, success: boolean) => void"})}),e.jsx("td",{children:"上报后处理钩子"})]})]})]}),`
`,e.jsx(r.h3,{id:"report-方法参数",children:"report 方法参数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:e.jsx("code",{children:"REPORT_TYPE"})}),e.jsx("td",{children:"数据类型（performance / error / request / behavior / custom）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"具体数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"immediate"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否立即上报，默认 false"})]})]})]}),`
`,e.jsx(r.h3,{id:"返回值reporter-实例方法",children:"返回值（Reporter 实例方法）"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"report"}),e.jsx("td",{children:e.jsx("code",{children:"(type, data, immediate?) => void"})}),e.jsx("td",{children:"上报数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"flush"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"刷新缓存，立即上报"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"updatePageInfo"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"更新页面 ID（SPA 路由变化）"})]})]})]}),`
`,e.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"index.ts"}),"：Reporter class 主入口，负责实例化配置、批量管理（委托 ",e.jsx(r.code,{children:"createBatch"}),"）、数据构建、发送路由和生命周期绑定"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"interface.ts"}),"：类型定义，包含 ",e.jsx(r.code,{children:"REPORT_METHOD"}),"/",e.jsx(r.code,{children:"REPORT_TYPE"})," 枚举、",e.jsx(r.code,{children:"ReportData"}),"/",e.jsx(r.code,{children:"ReporterOptions"})," 接口"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"core/sendByBeacon.ts"}),"：Beacon API 发送，失败自动降级到 Fetch"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"core/sendByFetch.ts"}),"：Fetch API 发送，使用 ",e.jsx(r.code,{children:"keepalive: true"})," 确保页面卸载时数据可达"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"core/sendByXHR.ts"}),"：XMLHttpRequest 发送，兼容旧浏览器"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"core/sendByImage.ts"}),"：Image 像素上报，适合简单的 GET 请求场景"]}),`
`]}),`
`,e.jsxs(r.p,{children:["核心流程：",e.jsx(r.code,{children:"report()"})," 构建 ",e.jsx(r.code,{children:"ReportData"})," → 根据 ",e.jsx(r.code,{children:"immediate"})," 决定立即发送或加入 ",e.jsx(r.code,{children:"createBatch"})," 缓冲 → ",e.jsx(r.code,{children:"send()"})," 中执行 ",e.jsx(r.code,{children:"beforeReport"})," 过滤 → 根据 ",e.jsx(r.code,{children:"reportMethod"})," 选择发送方式 → 执行 ",e.jsx(r.code,{children:"afterReport"})," 回调。页面卸载/隐藏时通过 ",e.jsx(r.code,{children:"onPageUnload"})," 和 ",e.jsx(r.code,{children:"visibility"})," 自动触发 ",e.jsx(r.code,{children:"flush"}),"。"]})]})}function m(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{m as default};
