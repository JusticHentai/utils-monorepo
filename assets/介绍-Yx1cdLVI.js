import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const initDemo = () => {
  const monitor = new BehaviorMonitor()

  const stop = monitor.observe((behavior) => {
    action('行为捕获')({
      type: behavior.type,
      timestamp: behavior.timestamp,
      pageUrl: behavior.pageUrl,
      data: behavior.data,
    })
  })

  action('开始监听')('已启动全部行为监控（点击/滚动/输入/路由/可见性）')

  // 5 秒后自动停止
  setTimeout(() => {
    stop()
    action('自动停止')(\`共记录 \${monitor.getBehaviors().length} 条行为\`)
  }, 5000)
}

export default initDemo
`,c=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const selectiveDemo = () => {
  // 只监控点击和输入，关闭滚动和路由
  const monitor = new BehaviorMonitor({
    click: true,
    input: true,
    scroll: false,
    routeChange: false,
    clickOptions: {
      capture: true,
      sampleRate: 1,
    },
    inputOptions: {
      recordValue: true,
      throttleMs: 300,
    },
  })

  const stop = monitor.observe((behavior) => {
    action('行为捕获')(behavior)
  })

  action('选择性监听')('仅监控点击和输入行为')

  setTimeout(() => {
    stop()
    action('自动停止')(\`共记录 \${monitor.getBehaviors().length} 条行为\`)
  }, 5000)
}

export default selectiveDemo
`,d=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const trackCustomDemo = () => {
  const monitor = new BehaviorMonitor()

  // 记录自定义行为（无需调用 observe）
  const behavior1 = monitor.trackCustom('页面初始化', {
    loadTime: 1234,
    source: 'direct',
  })

  const behavior2 = monitor.trackCustom('功能使用', {
    feature: 'search',
    keyword: 'behavior monitor',
  })

  action('自定义行为 1')(behavior1)
  action('自定义行为 2')(behavior2)
  action('行为记录')(monitor.getBehaviors())
}

export default trackCustomDemo
`,l=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const breadcrumbDemo = () => {
  // 限制最大记录数为 5，模拟面包屑追踪
  const monitor = new BehaviorMonitor({ maxBehaviors: 5 })

  // 连续记录 8 条自定义行为
  for (let i = 1; i <= 8; i++) {
    monitor.trackCustom(\`步骤 \${i}\`, { step: i })
  }

  // 只保留最近 5 条
  const behaviors = monitor.getBehaviors()

  action('面包屑记录')(\`记录了 8 条，保留最近 \${behaviors.length} 条\`)
  action('行为列表')(behaviors)

  // 清空
  monitor.clear()
  action('清空后')(monitor.getBehaviors())
}

export default breadcrumbDemo
`,h=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const stopDemo = () => {
  const monitor = new BehaviorMonitor()

  action('运行状态（启动前）')(monitor.isRunning())

  const stop = monitor.observe((behavior) => {
    action('行为捕获')(behavior)
  })

  action('运行状态（启动后）')(monitor.isRunning())

  // 调用 stop 停止监听
  stop()

  action('运行状态（停止后）')(monitor.isRunning())
  action('行为记录')(monitor.getBehaviors())
}

export default stopDemo
`,x=`import { action } from 'storybook/actions'
import observeClick from '../../../packages/element-utils/src/BehaviorMonitor/core/observeClick'

const observeClickDemo = () => {
  // 在捕获阶段监听点击，采样率 100%
  const stop = observeClick(
    (behavior) => {
      action('点击行为')({
        type: behavior.type,
        target: behavior.target,
        data: behavior.data,
      })
    },
    {
      capture: true,
      sampleRate: 1,
    }
  )

  action('点击监控已启动')('请点击页面任意元素，将捕获坐标和目标元素信息')

  setTimeout(() => {
    stop()
    action('点击监控已停止')('5 秒后自动停止')
  }, 5000)
}

export default observeClickDemo
`,a=`import { action } from 'storybook/actions'
import observeScroll from '../../../packages/element-utils/src/BehaviorMonitor/core/observeScroll'

const observeScrollDemo = () => {
  // 节流 300ms，采样率 100%
  const stop = observeScroll(
    (behavior) => {
      action('滚动行为')({
        type: behavior.type,
        data: behavior.data,
      })
    },
    {
      throttleMs: 300,
      sampleRate: 1,
    }
  )

  action('滚动监控已启动')(
    '请滚动页面，将捕获滚动位置和视口信息（节流 300ms）'
  )

  setTimeout(() => {
    stop()
    action('滚动监控已停止')('5 秒后自动停止')
  }, 5000)
}

export default observeScrollDemo
`,j=`import { action } from 'storybook/actions'
import observeInput from '../../../packages/element-utils/src/BehaviorMonitor/core/observeInput'

const observeInputDemo = () => {
  // 开启值记录，自定义敏感字段
  const stop = observeInput(
    (behavior) => {
      action('输入行为')({
        type: behavior.type,
        target: behavior.target,
        data: behavior.data,
      })
    },
    {
      recordValue: true,
      sensitiveFields: ['password', 'secret', 'token'],
      throttleMs: 300,
    }
  )

  action('输入监控已启动')(
    '请在输入框中输入内容，密码框和敏感字段的值不会被记录'
  )

  setTimeout(() => {
    stop()
    action('输入监控已停止')('10 秒后自动停止')
  }, 10000)
}

export default observeInputDemo
`,p=`import { action } from 'storybook/actions'
import observeRouteChange from '../../../packages/element-utils/src/BehaviorMonitor/core/observeRouteChange'

const observeRouteChangeDemo = () => {
  const stop = observeRouteChange((behavior) => {
    action('路由变化')({
      type: behavior.type,
      data: behavior.data,
    })
  })

  action('路由监控已启动')('将依次触发 pushState / replaceState / popstate')

  // 模拟 pushState
  history.pushState(null, '', '#push-test')

  // 模拟 replaceState
  setTimeout(() => {
    history.replaceState(null, '', '#replace-test')
  }, 500)

  // 模拟 popstate（浏览器后退）
  setTimeout(() => {
    history.back()
  }, 1000)

  setTimeout(() => {
    stop()
    action('路由监控已停止')('已恢复原始 History API')
  }, 2000)
}

export default observeRouteChangeDemo
`,m=`import { action } from 'storybook/actions'
import observeVisibility from '../../../packages/element-utils/src/BehaviorMonitor/core/observeVisibility'

const observeVisibilityDemo = () => {
  const stop = observeVisibility((behavior) => {
    action('可见性变化')({
      type: behavior.type,
      data: behavior.data,
    })
  })

  action('可见性监控已启动')(
    '请切换浏览器标签页，将捕获 visibilitychange 事件'
  )

  setTimeout(() => {
    stop()
    action('可见性监控已停止')('30 秒后自动停止')
  }, 30000)
}

export default observeVisibilityDemo
`;function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"behaviormonitor",children:"behaviorMonitor"}),`
`,e.jsx(n.p,{children:"用户行为监控器，统一追踪页面中的点击、滚动、输入、路由变化和页面可见性等行为事件。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BehaviorMonitor"})," 是一个基于类的用户行为监控工具，将五种常见的用户行为捕获方式封装为统一的回调接口，并内置行为面包屑追踪能力。"]}),`
`,e.jsx(n.p,{children:"底层分别通过以下机制监控不同类型的行为："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"点击行为"}),"：",e.jsx(n.code,{children:"document.addEventListener('click')"})," — 在捕获阶段监听点击事件，记录坐标和目标元素信息"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"滚动行为"}),"：",e.jsx(n.code,{children:"window.addEventListener('scroll')"})," — 监听页面滚动，内置节流处理"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"输入行为"}),"：",e.jsx(n.code,{children:"document.addEventListener('input')"})," — 监听表单输入，支持敏感字段过滤和值脱敏"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"路由变化"}),"：劫持 ",e.jsx(n.code,{children:"history.pushState"}),"/",e.jsx(n.code,{children:"replaceState"})," + 监听 ",e.jsx(n.code,{children:"popstate"}),"/",e.jsx(n.code,{children:"hashchange"})," — 同时支持 History 和 Hash 路由"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"页面可见性"}),"：",e.jsx(n.code,{children:"document.addEventListener('visibilitychange')"})," — 监听页面前后台切换"]}),`
`]}),`
`,e.jsx(n.p,{children:"常见使用场景：用户行为分析、操作面包屑追踪、错误排查时的操作路径回溯、用户体验优化数据收集。"}),`
`,e.jsx(n.h2,{id:"基础监听",children:"基础监听"}),`
`,e.jsxs(n.p,{children:["实例化 ",e.jsx(n.code,{children:"BehaviorMonitor"})," 后调用 ",e.jsx(n.code,{children:"observe"})," 方法即可启动所有行为监控。回调函数接收 ",e.jsx(n.code,{children:"BehaviorInfo"})," 对象，包含行为类型、时间戳、页面 URL 和额外数据。返回的清理函数用于停止所有监听。"]}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"选择性监控",children:"选择性监控"}),`
`,e.jsx(n.p,{children:"通过构造函数配置项可以按需开启或关闭特定类型的行为监控，同时可以对每种监控传入细化配置（如采样率、节流间隔、是否记录输入值等）。"}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"点击行为监控",children:"点击行为监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observeClick"})," 通过 ",e.jsx(n.code,{children:"createEventListener"})," 在 document 上监听 click 事件。默认在捕获阶段（",e.jsx(n.code,{children:"capture: true"}),"）监听，确保能捕获到所有点击，即使子元素阻止了冒泡。回调中包含点击坐标（",e.jsx(n.code,{children:"clientX"}),"/",e.jsx(n.code,{children:"clientY"}),"）、鼠标按键（",e.jsx(n.code,{children:"button"}),"）以及通过 ",e.jsx(n.code,{children:"getElementInfo"})," 获取的目标元素信息（标签名、ID、类名、XPath 等）。",e.jsx(n.code,{children:"sampleRate"})," 控制采样率，值为 0-1 之间，小于 1 时随机丢弃部分事件。"]}),`
`,e.jsx(s,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"滚动行为监控",children:"滚动行为监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observeScroll"})," 通过 ",e.jsx(n.code,{children:"createEventListener"})," 在 window 上监听 scroll 事件，使用 ",e.jsx(n.code,{children:"passive: true"})," 避免阻塞滚动性能。内置 ",e.jsx(n.code,{children:"throttle"})," 节流（默认 200ms），避免高频触发。回调数据包含 ",e.jsx(n.code,{children:"scrollTop"}),"/",e.jsx(n.code,{children:"scrollLeft"})," 滚动位置、",e.jsx(n.code,{children:"scrollHeight"}),"/",e.jsx(n.code,{children:"scrollWidth"})," 文档总尺寸以及 ",e.jsx(n.code,{children:"viewportHeight"}),"/",e.jsx(n.code,{children:"viewportWidth"})," 视口尺寸，可用于计算滚动百分比和阅读深度。"]}),`
`,e.jsx(s,{language:"typescript",children:a}),`
`,e.jsx(n.h2,{id:"输入行为监控",children:"输入行为监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observeInput"})," 通过 ",e.jsx(n.code,{children:"createEventListener"})," 在 document 上监听 input 事件。使用 ",e.jsx(n.code,{children:"WeakMap"})," 为每个输入元素维护独立的节流定时器，避免内存泄漏。支持敏感字段检测：当 ",e.jsx(n.code,{children:"type"})," 为 ",e.jsx(n.code,{children:"password"})," 或元素的 ",e.jsx(n.code,{children:"name"}),"/",e.jsx(n.code,{children:"id"})," 包含 ",e.jsx(n.code,{children:"sensitiveFields"})," 中的关键词时，不记录输入值。",e.jsx(n.code,{children:"recordValue"})," 默认关闭，开启后使用 ",e.jsx(n.code,{children:"truncate"})," 截断过长文本。"]}),`
`,e.jsx(s,{language:"typescript",children:j}),`
`,e.jsx(n.h2,{id:"路由变化监控",children:"路由变化监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observeRouteChange"})," 同时支持 History API 和 Hash 路由两种模式。通过劫持 ",e.jsx(n.code,{children:"history.pushState"})," 和 ",e.jsx(n.code,{children:"history.replaceState"})," 拦截编程式导航，同时监听 ",e.jsx(n.code,{children:"popstate"}),"（浏览器前进/后退）和 ",e.jsx(n.code,{children:"hashchange"}),"（Hash 变化）事件。回调数据包含 ",e.jsx(n.code,{children:"from"}),"（来源 URL）、",e.jsx(n.code,{children:"to"}),"（目标 URL）和 ",e.jsx(n.code,{children:"trigger"}),"（触发方式：pushState/replaceState/popstate/hashchange）。清理时恢复原始 History API 方法。"]}),`
`,e.jsx(s,{language:"typescript",children:p}),`
`,e.jsx(n.h2,{id:"页面可见性监控",children:"页面可见性监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observeVisibility"})," 通过 ",e.jsx(n.code,{children:"createEventListener"})," 在 document 上监听 ",e.jsx(n.code,{children:"visibilitychange"})," 事件，捕获页面前后台切换。回调数据包含 ",e.jsx(n.code,{children:"visible"}),"（是否可见）和 ",e.jsx(n.code,{children:"visibilityState"}),"（",e.jsx(n.code,{children:"visible"}),"/",e.jsx(n.code,{children:"hidden"}),"）。常用于统计用户停留时长、暂停/恢复定时任务等场景。"]}),`
`,e.jsx(s,{language:"typescript",children:m}),`
`,e.jsx(n.h2,{id:"自定义行为追踪",children:"自定义行为追踪"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"trackCustom"})," 方法允许记录业务自定义行为，无需调用 ",e.jsx(n.code,{children:"observe"})," 也可独立使用。自定义行为同样会被加入面包屑记录中，可通过 ",e.jsx(n.code,{children:"getBehaviors"})," 获取。"]}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"面包屑追踪",children:"面包屑追踪"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"maxBehaviors"})," 限制最大行为记录数，超出后自动丢弃最旧的记录，实现滚动窗口式的面包屑追踪。",e.jsx(n.code,{children:"getBehaviors"})," 返回当前记录副本，",e.jsx(n.code,{children:"clear"})," 清空所有记录。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"启停控制",children:"启停控制"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"observe"})," 返回停止函数，调用后清理所有事件监听器并恢复被劫持的 History API。",e.jsx(n.code,{children:"isRunning"})," 可查询当前运行状态，重复调用 ",e.jsx(n.code,{children:"observe"})," 不会创建重复监听。"]}),`
`,e.jsx(s,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs(n.h3,{id:"构造函数-new-behaviormonitoroptions",children:["构造函数 ",e.jsx(n.code,{children:"new BehaviorMonitor(options?)"})]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"options.click"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否监控点击行为，默认 ",e.jsx("code",{children:"true"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.scroll"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否监控滚动行为，默认 ",e.jsx("code",{children:"true"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.input"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否监控输入行为，默认 ",e.jsx("code",{children:"true"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.routeChange"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否监控路由变化，默认 ",e.jsx("code",{children:"true"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.maxBehaviors"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsxs("td",{children:["最大行为记录数，默认 ",e.jsx("code",{children:"100"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.clickOptions"}),e.jsx("td",{children:e.jsx("code",{children:"ObserveClickOptions"})}),e.jsx("td",{children:"点击监控配置（capture、sampleRate）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.scrollOptions"}),e.jsx("td",{children:e.jsx("code",{children:"ObserveScrollOptions"})}),e.jsx("td",{children:"滚动监控配置（throttleMs、sampleRate）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.inputOptions"}),e.jsx("td",{children:e.jsx("code",{children:"ObserveInputOptions"})}),e.jsx("td",{children:"输入监控配置（recordValue、sensitiveFields、throttleMs）"})]})]})]}),`
`,e.jsx(n.h3,{id:"observeclickoptions",children:"ObserveClickOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"capture"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否在捕获阶段监听，默认 ",e.jsx("code",{children:"true"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sampleRate"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsxs("td",{children:["采样率（0-1），默认 ",e.jsx("code",{children:"1"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"observescrolloptions",children:"ObserveScrollOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"throttleMs"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsxs("td",{children:["节流间隔（ms），默认 ",e.jsx("code",{children:"200"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sampleRate"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsxs("td",{children:["采样率（0-1），默认 ",e.jsx("code",{children:"1"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"observeinputoptions",children:"ObserveInputOptions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"recordValue"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否记录输入值，默认 ",e.jsx("code",{children:"false"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sensitiveFields"}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"敏感字段列表，匹配的字段不记录值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"throttleMs"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsxs("td",{children:["节流间隔（ms），默认 ",e.jsx("code",{children:"500"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"实例方法",children:"实例方法"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"observe"}),e.jsx("td",{children:e.jsx("code",{children:"(callback: BehaviorCallback) => StopListening"})}),e.jsx("td",{children:"启动行为监控，返回停止函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"停止所有行为监控"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getBehaviors"}),e.jsx("td",{children:e.jsx("code",{children:"() => BehaviorInfo[]"})}),e.jsx("td",{children:"获取行为记录副本"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clear"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"清空行为记录"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"trackCustom"}),e.jsx("td",{children:e.jsx("code",{children:"(name: string, data?: Record<string, unknown>) => BehaviorInfo"})}),e.jsx("td",{children:"记录自定义行为"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"isRunning"}),e.jsx("td",{children:e.jsx("code",{children:"() => boolean"})}),e.jsx("td",{children:"查询是否正在运行"})]})]})]}),`
`,e.jsx(n.h3,{id:"behaviorinfo",children:"BehaviorInfo"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字段"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"type"}),e.jsx("td",{children:e.jsx("code",{children:"'click' | 'scroll' | 'input' | 'navigate' | 'custom'"})}),e.jsx("td",{children:"行为类型"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"timestamp"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"发生时间戳"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pageUrl"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"页面 URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"ElementInfo"})}),e.jsx("td",{children:"目标元素信息（可选）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"data"}),e.jsx("td",{children:e.jsx("code",{children:"Record<string, unknown>"})}),e.jsx("td",{children:"额外数据（可选）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：",e.jsx(n.code,{children:"BehaviorMonitor"})," 类，管理监控生命周期、行为记录和自定义行为追踪"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：类型定义，包含 ",e.jsx(n.code,{children:"BehaviorInfo"}),"、",e.jsx(n.code,{children:"BehaviorMonitorOptions"}),"、各监控配置项、",e.jsx(n.code,{children:"BEHAVIOR_TYPE"}),"/",e.jsx(n.code,{children:"ROUTE_TRIGGER"})," 枚举及常量（",e.jsx(n.code,{children:"PASSWORD_INPUT_TYPE"}),"、",e.jsx(n.code,{children:"DEFAULT_SENSITIVE_FIELDS"}),"、",e.jsx(n.code,{children:"DEFAULT_MAX_BEHAVIORS"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeClick.ts"}),"：通过 ",e.jsx(n.code,{children:"createEventListener"})," 监听 document 的 click 事件，使用 ",e.jsx(n.code,{children:"getElementInfo"})," 获取目标元素信息，支持 capture 和 sampleRate 配置"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeScroll.ts"}),"：通过 ",e.jsx(n.code,{children:"createEventListener"})," 监听 window 的 scroll 事件，使用 ",e.jsx(n.code,{children:"throttle"})," 节流，记录完整的滚动位置和视口信息"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeInput.ts"}),"：通过 ",e.jsx(n.code,{children:"createEventListener"})," 监听 document 的 input 事件，使用 ",e.jsx(n.code,{children:"WeakMap"})," 实现按元素独立的节流定时器，支持 ",e.jsx(n.code,{children:"PASSWORD_INPUT_TYPE"})," 和 ",e.jsx(n.code,{children:"sensitiveFields"})," 敏感字段过滤"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeRouteChange.ts"}),"：劫持 ",e.jsx(n.code,{children:"history.pushState"}),"/",e.jsx(n.code,{children:"replaceState"})," 并通过 ",e.jsx(n.code,{children:"createEventListener"})," 监听 ",e.jsx(n.code,{children:"popstate"}),"/",e.jsx(n.code,{children:"hashchange"}),"，通过 ",e.jsx(n.code,{children:"lastUrl"})," 去重避免重复触发"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeVisibility.ts"}),"：通过 ",e.jsx(n.code,{children:"createEventListener"})," 监听 document 的 visibilitychange 事件，记录 ",e.jsx(n.code,{children:"visibilityState"})," 状态"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["构造函数接收配置项，",e.jsx(n.code,{children:"observe"})," 方法根据 ",e.jsx(n.code,{children:"click"}),"/",e.jsx(n.code,{children:"scroll"}),"/",e.jsx(n.code,{children:"input"}),"/",e.jsx(n.code,{children:"routeChange"})," 开关按需启动各子监控，",e.jsx(n.code,{children:"observeVisibility"})," 始终启用"]}),`
`,e.jsxs(n.li,{children:["用 ",e.jsx(n.code,{children:"wrappedCallback"})," 包装回调，在触发外部回调前先通过 ",e.jsx(n.code,{children:"addBehavior"})," 写入面包屑记录"]}),`
`,e.jsxs(n.li,{children:["各子监控函数通过 ",e.jsx(n.code,{children:"createEventListener"})," 注册事件，返回 ",e.jsx(n.code,{children:"StopListening"})," 清理函数，统一收集到 ",e.jsx(n.code,{children:"stoppers"})," 数组"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop"})," 方法遍历调用所有 stopper 并重置 ",e.jsx(n.code,{children:"running"})," 状态，",e.jsx(n.code,{children:"observe"})," 内部的 ",e.jsx(n.code,{children:"isRunning"})," 检查防止重复监听"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["行为记录采用滚动窗口，通过 ",e.jsx(n.code,{children:"maxBehaviors"}),"（默认 100）限制数组长度，超出后 ",e.jsx(n.code,{children:"slice(-maxBehaviors)"})," 截取最近记录"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBehaviors"})," 返回数组浅拷贝（",e.jsx(n.code,{children:"[...this.behaviors]"}),"），防止外部修改内部状态"]}),`
`,e.jsxs(n.li,{children:["路由监控通过劫持 History API 实现 SPA 路由变化检测，使用 ",e.jsx(n.code,{children:"lastUrl"})," 缓存上次 URL 避免相同 URL 重复上报，清理时恢复原始方法引用"]}),`
`,e.jsxs(n.li,{children:["输入监控使用 ",e.jsx(n.code,{children:"WeakMap<Element, Timer>"})," 为每个输入元素维护独立的节流定时器，元素被 GC 后定时器自动清理"]}),`
`,e.jsxs(n.li,{children:["滚动监控使用 ",e.jsx(n.code,{children:"passive: true"})," 选项确保不阻塞浏览器滚动渲染"]}),`
`,e.jsxs(n.li,{children:["所有事件监听统一使用内部的 ",e.jsx(n.code,{children:"createEventListener"})," 工具封装，简化注册/清理流程"]}),`
`]}),`
`]}),`
`]})]})}function f(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{f as default};
