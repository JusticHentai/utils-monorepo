import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const basicDemo = () => {
  const pageInfo = getPageInfo()

  // 基础信息
  action('页面基础信息')({
    url: pageInfo.url,
    title: pageInfo.title,
    referrer: pageInfo.referrer,
  })

  // 设备信息
  action('设备信息')({
    userAgent: pageInfo.userAgent,
    platform: pageInfo.platform,
    language: pageInfo.language,
    timezone: pageInfo.timezone,
  })

  // 屏幕信息
  action('屏幕信息')({
    screenResolution: pageInfo.screenResolution,
    viewport: pageInfo.viewport,
    devicePixelRatio: pageInfo.devicePixelRatio,
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const networkInfoDemo = () => {
  const pageInfo = getPageInfo()

  if (pageInfo.networkType || pageInfo.effectiveType) {
    action('网络信息')({
      networkType: pageInfo.networkType || '不可用',
      effectiveType: pageInfo.effectiveType || '不可用',
    })

    // 网络类型说明
    action('网络类型说明')({
      networkType: 'wifi / cellular / bluetooth / ethernet 等物理连接类型',
      effectiveType: '4g / 3g / 2g / slow-2g 等有效连接类型（基于网络质量）',
    })
  } else {
    action('网络信息')('当前浏览器不支持 Network Information API')

    action('支持情况')({
      Chrome: '支持（需 HTTPS）',
      Firefox: '不支持',
      Safari: '不支持',
      Edge: '支持（需 HTTPS）',
    })
  }
}

export default networkInfoDemo
`,l=`import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const memoryInfoDemo = () => {
  const pageInfo = getPageInfo()

  if (pageInfo.memory) {
    const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = pageInfo.memory

    action('内存信息（原始）')(pageInfo.memory)

    action('内存信息（格式化）')({
      'JS 堆大小限制': formatBytes(jsHeapSizeLimit).formatted,
      'JS 堆总大小': formatBytes(totalJSHeapSize).formatted,
      'JS 堆已用大小': formatBytes(usedJSHeapSize).formatted,
      使用率: \`\${((usedJSHeapSize / jsHeapSizeLimit) * 100).toFixed(2)}%\`,
    })
  } else {
    action('内存信息')('当前浏览器不支持 Performance Memory API')

    action('支持情况')({
      Chrome: '支持（需启动时添加 --enable-precise-memory-info 标志）',
      Firefox: '不支持',
      Safari: '不支持',
      Edge: '支持（需启动时添加标志）',
    })
  }
}

export default memoryInfoDemo
`;function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getpageinfo",children:"getPageInfo"}),`
`,e.jsx(n.p,{children:"获取当前页面的完整信息，包含 URL、设备、屏幕、网络和内存等数据。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getPageInfo"})," 是一个用于收集页面环境信息的工具函数，为前端监控和数据分析提供基础数据。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"核心功能："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"收集页面基础信息（URL、标题、来源页面）"}),`
`,e.jsx(n.li,{children:"收集设备信息（UserAgent、平台、语言、时区）"}),`
`,e.jsx(n.li,{children:"收集屏幕信息（分辨率、视口大小、设备像素比）"}),`
`,e.jsx(n.li,{children:"收集网络信息（连接类型、有效连接类型）"}),`
`,e.jsx(n.li,{children:"收集内存信息（JS 堆大小限制、使用情况）"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"应用场景："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"前端错误监控：上报错误时附带页面环境信息"}),`
`,e.jsx(n.li,{children:"用户行为分析：了解用户设备和网络情况"}),`
`,e.jsx(n.li,{children:"性能监控：结合内存信息分析内存泄漏"}),`
`,e.jsx(n.li,{children:"A/B 测试：基于设备特征进行用户分组"}),`
`]}),`
`,e.jsx(n.h2,{id:"获取基础页面信息",children:"获取基础页面信息"}),`
`,e.jsx(n.p,{children:"获取页面 URL、标题、设备和屏幕等基础信息。"}),`
`,e.jsx(i,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"获取网络信息",children:"获取网络信息"}),`
`,e.jsx(n.p,{children:"获取用户的网络连接类型，注意此 API 在部分浏览器中不可用。"}),`
`,e.jsx(i,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"获取内存信息",children:"获取内存信息"}),`
`,e.jsx(n.p,{children:"获取 JavaScript 堆内存使用情况，可用于检测内存泄漏。"}),`
`,e.jsx(i,{language:"typescript",children:l}),`
`,e.jsx(n.h3,{id:"v8-内存字段说明",children:"V8 内存字段说明"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"字段关系："})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"usedJSHeapSize"}),"（已用） ≤ ",e.jsx(n.code,{children:"totalJSHeapSize"}),"（总） ≤ ",e.jsx(n.code,{children:"jsHeapSizeLimit"}),"（限制）"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"各字段含义："})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字段"}),e.jsx("th",{children:"含义"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"usedJSHeapSize"})}),e.jsx("td",{children:"已用堆大小"}),e.jsx("td",{children:"当前真正被 JS 对象占用的堆内存（活跃对象 + 还没被回收但暂时保留的对象）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"totalJSHeapSize"})}),e.jsx("td",{children:"已分配堆大小"}),e.jsx("td",{children:"V8 当前已向系统申请/保留的 JS 堆总量，包含已用、空闲区、预留空间和碎片"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"jsHeapSizeLimit"})}),e.jsx("td",{children:"堆大小限制"}),e.jsx("td",{children:"JS 堆的最大可用内存限制"})]})]})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["为什么 ",e.jsx(n.code,{children:"total"})," 可能明显大于 ",e.jsx(n.code,{children:"used"}),"："]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"加速分配"}),"：V8 往往会提前扩堆，留出余量，避免频繁向 OS 申请内存"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GC 后不立刻缩回"}),"：即使已用下降，V8 可能暂时保留已申请的堆，后续再用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"碎片化"}),"：有些空洞空间不容易立刻复用或归还，导致 total 看起来偏大"]}),`
`]}),`
`,e.jsxs(n.p,{children:["公式表示：",e.jsx(n.code,{children:"totalJSHeapSize ≈ usedJSHeapSize + free/unused + fragmentation"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"注意事项："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["这些值来自浏览器的 ",e.jsx(n.code,{children:"performance.memory"}),"，",e.jsx(n.strong,{children:"仅 Chrome 系浏览器支持"})]}),`
`,e.jsx(n.li,{children:"Firefox、Safari 等浏览器不支持此 API"}),`
`,e.jsx(n.li,{children:"数值可能因实现而有偏差，仅供参考"}),`
`,e.jsxs(n.li,{children:["Chrome 需启动时添加 ",e.jsx(n.code,{children:"--enable-precise-memory-info"})," 标志才能获取精确值"]}),`
`]}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"（无参数）"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"PageInfo"})}),e.jsx("td",{children:"页面信息对象"})]})]})]}),`
`,e.jsx(n.h3,{id:"pageinfo-结构",children:"PageInfo 结构"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字段"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"url"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"当前页面 URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"title"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"页面标题"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"referrer"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"来源页面 URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"userAgent"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"用户代理字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"screenResolution"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:'屏幕分辨率（如 "1920x1080"）'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"viewport"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:'视口大小（如 "1200x800"）'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"devicePixelRatio"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"设备像素比"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"language"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"浏览器语言"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"platform"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"操作系统平台"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"timezone"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"时区"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"networkType?"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"网络连接类型（可选）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"effectiveType?"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"有效连接类型（可选）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"memory?"}),e.jsx("td",{children:e.jsx("code",{children:"MemoryInfo"})}),e.jsx("td",{children:"内存信息（可选）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"文件职责："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),": 主函数，收集各类页面信息"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),": PageInfo 和 MemoryInfo 类型定义"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"核心流程："})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"检查是否在浏览器环境，SSR 环境返回空值对象"}),`
`,e.jsxs(n.li,{children:["从 ",e.jsx(n.code,{children:"window"}),"、",e.jsx(n.code,{children:"navigator"}),"、",e.jsx(n.code,{children:"screen"}),"、",e.jsx(n.code,{children:"document"}),"、",e.jsx(n.code,{children:"location"})," 收集信息"]}),`
`,e.jsxs(n.li,{children:["检查 ",e.jsx(n.code,{children:"navigator.connection"})," 是否存在，存在则收集网络信息"]}),`
`,e.jsxs(n.li,{children:["检查 ",e.jsx(n.code,{children:"performance.memory"})," 是否存在，存在则收集内存信息"]}),`
`,e.jsx(n.li,{children:"返回完整的 PageInfo 对象"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键技术点："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用 Network Information API 获取网络信息（部分浏览器支持）"}),`
`,e.jsx(n.li,{children:"使用 Performance Memory API 获取内存信息（Chrome 系浏览器支持）"}),`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"Intl.DateTimeFormat"})," 获取用户时区"]}),`
`,e.jsx(n.li,{children:"SSR 兼容处理，返回安全的默认值"}),`
`]})]})}function g(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{g as default};
