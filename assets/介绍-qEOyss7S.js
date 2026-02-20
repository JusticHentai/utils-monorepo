import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import { Surveillance } from '../../../packages/element-utils/src/Surveillance'

const basicDemo = () => {
  // 创建监控实例
  const surveillance = new Surveillance({
    appId: 'storybook-demo',
    sampleRate: 1,

    // 性能监控配置
    performance: {
      webVitals: true,
      resource: true,
      longTask: true,
      longTaskThreshold: 50,
    },

    // 错误监控配置
    error: {
      jsError: true,
      resourceError: true,
      promiseError: true,
      ignoreErrors: [/Script error/],
    },

    // 请求监控配置
    request: {
      xhr: true,
      fetch: true,
      ignoreUrls: [/analytics/, /report/],
    },

    // 用户行为监控配置
    behavior: {
      enabled: true,
      click: true,
      scroll: true,
      input: true,
      routeChange: true,
    },

    // 钩子函数
    hooks: {
      onMetric: (metric) => {
        action('Web Vitals 指标')({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
        })
      },
      onError: (error) => {
        action('捕获错误')({
          type: error.type,
          message: error.message,
        })
      },
    },
  })

  // 启动监控
  surveillance.start()
  action('监控状态')('已启动')

  // 获取性能数据
  const navMetrics = surveillance.getNavigationMetrics()
  const resourceMetrics = surveillance.resourceMonitor.getMetrics()
  const longTaskStats = surveillance.longTaskMonitor.getStats()
  const pageInfo = surveillance.getPageInfo()

  action('导航性能指标')(navMetrics)
  action('资源性能指标')(resourceMetrics.slice(0, 5))
  action('长任务统计')(longTaskStats)
  action('页面信息')(pageInfo)

  // 手动上报自定义事件
  surveillance.reporter.report('custom', {
    event: 'button_click',
    buttonId: 'demo-button',
    timestamp: Date.now(),
  })
  action('自定义事件')('已上报 button_click 事件')

  // 停止监控
  setTimeout(() => {
    surveillance.stop()
    action('监控状态')('已停止')
  }, 5000)
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import WebVitalsMonitor from '../../../packages/element-utils/src/WebVitalsMonitor'

const webVitalsDemo = () => {
  const monitor = new WebVitalsMonitor({ reportAllChanges: true })

  const stop = monitor.observe((metric) => {
    action(\`Web Vitals - \${metric.name}\`)({
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    })
  })

  action('Web Vitals 监控')('已启动统一监控，包含 LCP、FID、CLS、FCP、FP、INP、TTFB')

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('Web Vitals 监控')('已停止所有监控')
  }, 5000)
}

export default webVitalsDemo
`,t=`import { action } from 'storybook/actions'
import getPaintMetrics from '../../../packages/element-utils/src/getPaintMetrics'

const paintMetricsDemo = () => {
  const metrics = getPaintMetrics()

  if (!metrics) {
    action('绘制指标')('当前环境不支持 Paint Timing API 或数据尚未就绪')
    return
  }

  action('FP (First Paint)')({
    value: \`\${Math.round(metrics.FP)}ms\`,
    rating: metrics.FPRating,
    description: '浏览器首次在屏幕上渲染像素的时间',
  })

  action('FCP (First Contentful Paint)')({
    value: \`\${Math.round(metrics.FCP)}ms\`,
    rating: metrics.FCPRating,
    description: '首次渲染文本、图片、SVG 等内容的时间',
  })

  action('绘制指标说明')('FP 和 FCP 基于 Paint Timing API，从 navigation fetchStart 开始计算')
}

export default paintMetricsDemo
`,l=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const errorDemo = () => {
  // 使用 ErrorMonitor 类统一监控所有错误
  const monitor = new ErrorMonitor({
    jsError: true,
    resourceError: true,
    promiseError: true,
    consoleError: false,
    errorFilter: (error) => {
      // 过滤掉脚本跨域错误和 ResizeObserver 错误
      if (/Script error/.test(error.message)) return false
      if (/ResizeObserver loop/.test(error.message)) return false
      return true
    },
  })

  const stop = monitor.observe((error) => {
    action(\`错误 - \${error.type}\`)({
      message: error.message,
      stack: error.stack?.slice(0, 200),
      timestamp: new Date(error.timestamp).toLocaleString(),
    })
  })

  action('错误监控')('已启动所有错误监控（JS / Resource / Promise）')

  // 触发测试错误
  setTimeout(() => {
    action('触发测试')('即将触发 Promise 错误')
    Promise.reject(new Error('测试 Promise 错误'))
  }, 1000)

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('错误监控')('已停止所有错误监控')
  }, 5000)
}

export default errorDemo
`,h=`import { action } from 'storybook/actions'
import RequestMonitor from '../../../packages/element-utils/src/RequestMonitor'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const requestDemo = () => {
  // 方式一：使用 RequestMonitor 监控所有网络请求
  const requestMonitor = new RequestMonitor({
    onRequest: (request) => {
      action('网络请求')({
        method: request.method,
        url: request.url.slice(0, 100),
        duration: \`\${request.duration}ms\`,
        status: request.status,
        success: request.success,
      })
    },
    onError: (error) => {
      action('请求错误')({
        url: error.requestUrl,
        message: error.message,
      })
    },
    ignoreUrls: [/analytics/, /report/, /localhost/],
    timeoutThreshold: 30000,
  })

  requestMonitor.observeXHR()
  requestMonitor.observeFetch()

  action('请求监控')('已启动所有请求监控')

  // 资源加载监控
  const resourceMonitor = new ResourceMonitor()
  const stopResource = resourceMonitor.observe((resources) => {
    resources.forEach((r) => {
      action('资源加载')({
        name: r.name.split('/').pop(),
        type: r.initiatorType,
        duration: \`\${Math.round(r.duration)}ms\`,
        size:
          r.transferSize > 0
            ? \`\${(r.transferSize / 1024).toFixed(1)}KB\`
            : 'cached',
        fromCache: r.fromCache,
      })
    })
  })

  action('资源监控')('已启动资源加载监控')

  // 获取已加载的资源指标
  const allResources = resourceMonitor.getMetrics()
  action('已加载资源')(
    allResources.slice(0, 5).map((r) => ({
      name: r.name.split('/').pop(),
      type: r.initiatorType,
      duration: \`\${Math.round(r.duration)}ms\`,
    }))
  )

  // 获取资源统计
  const resourceStats = resourceMonitor.getStats()
  action('资源统计')(resourceStats)

  // 发起测试请求
  setTimeout(() => {
    action('测试请求')('发起 fetch 请求')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        action('请求响应')(data)
      })
      .catch((err) => {
        action('请求失败')(err.message)
      })
  }, 500)

  // 获取请求统计
  setTimeout(() => {
    const summary = requestMonitor.getStats()
    action('请求统计汇总')({
      total: summary.total,
      success: summary.success,
      failed: summary.failed,
      avgDuration: \`\${Math.round(summary.avgDuration)}ms\`,
    })
  }, 3000)

  // 5秒后停止监控
  setTimeout(() => {
    requestMonitor.stop()
    stopResource()
    action('请求监控')('已停止所有监控')
  }, 5000)
}

export default requestDemo
`,a=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const resourceDemo = () => {
  const monitor = new ResourceMonitor({
    filter: (entry) => !entry.name.includes('hot-update'),
  })

  action('资源监控')('已启动')

  // 实时监控新资源加载
  const stop = monitor.observe((resources) => {
    resources.forEach((r) => {
      action(\`新资源 - \${r.initiatorType}\`)({
        name: r.name.split('/').pop(),
        duration: \`\${Math.round(r.duration)}ms\`,
        size: r.transferSize > 0 ? \`\${(r.transferSize / 1024).toFixed(1)}KB\` : 'cached',
        fromCache: r.fromCache,
      })
    })
  })

  // 获取已加载的全部资源
  const allResources = monitor.getMetrics()
  action('已加载资源总数')(allResources.length)
  action('已加载资源（前5个）')(
    allResources.slice(0, 5).map((r) => ({
      name: r.name.split('/').pop(),
      type: r.initiatorType,
      duration: \`\${Math.round(r.duration)}ms\`,
    }))
  )

  // 资源统计
  const stats = monitor.getStats()
  action('资源统计')({
    total: stats.total,
    cached: stats.cached,
    totalSize: \`\${(stats.totalSize / 1024).toFixed(1)}KB\`,
    totalDuration: \`\${Math.round(stats.totalDuration)}ms\`,
    byType: stats.byType,
  })

  // 慢资源（超过 500ms）
  const slowResources = monitor.getSlowResources(500)
  action('慢资源（>500ms）')(
    slowResources.length > 0
      ? slowResources.map((r) => ({
          name: r.name.split('/').pop(),
          duration: \`\${Math.round(r.duration)}ms\`,
        }))
      : '无慢资源'
  )

  // 大资源（超过 100KB）
  const largeResources = monitor.getLargeResources(100 * 1024)
  action('大资源（>100KB）')(
    largeResources.length > 0
      ? largeResources.map((r) => ({
          name: r.name.split('/').pop(),
          size: \`\${(r.transferSize / 1024).toFixed(1)}KB\`,
        }))
      : '无大资源'
  )

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('资源监控')('已停止')
  }, 5000)
}

export default resourceDemo
`,x=`import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const behaviorDemo = () => {
  const monitor = new BehaviorMonitor({
    click: true,
    scroll: true,
    input: true,
    routeChange: true,
    maxBehaviors: 50,
  })

  const stop = monitor.observe((behavior) => {
    action(\`行为 - \${behavior.type}\`)({
      pageUrl: behavior.pageUrl.slice(0, 80),
      target: behavior.target
        ? \`<\${behavior.target.tagName}> \${behavior.target.innerText?.slice(0, 30) || ''}\`
        : undefined,
      data: behavior.data,
      timestamp: new Date(behavior.timestamp).toLocaleTimeString(),
    })
  })

  action('行为监控')('已启动（点击/滚动/输入/路由/可见性），请在页面上进行操作')

  // 记录自定义行为
  const customBehavior = monitor.trackCustom('demo_started', {
    source: 'storybook',
    version: '1.0',
  })
  action('自定义行为')(customBehavior)

  // 3秒后获取行为记录
  setTimeout(() => {
    const behaviors = monitor.getBehaviors()
    action('行为记录汇总')({
      total: behaviors.length,
      types: behaviors.map((b) => b.type),
    })
  }, 3000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('行为监控')('已停止')
  }, 5000)
}

export default behaviorDemo
`,j=`import { action } from 'storybook/actions'
import { FpsMonitor } from '../../../packages/element-utils/src/FpsMonitor'

const fpsDemo = () => {
  const monitor = new FpsMonitor()

  const stop = monitor.observe((fps) => {
    const rating = fps >= 55 ? 'good' : fps >= 30 ? 'needs-improvement' : 'poor'
    action(\`FPS - \${rating}\`)({
      fps,
      description:
        fps >= 55
          ? '流畅'
          : fps >= 30
            ? '轻微卡顿'
            : '严重卡顿',
    })
  })

  action('FPS 监控')('已启动，每秒上报一次帧率')

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('FPS 监控')('已停止')
  }, 5000)
}

export default fpsDemo
`,p=`import { action } from 'storybook/actions'
import JankMonitor from '../../../packages/element-utils/src/JankMonitor'

const jankDemo = () => {
  const monitor = new JankMonitor({ threshold: 100 })

  const stop = monitor.observe((jankInfo) => {
    action('卡顿检测')({
      duration: \`\${Math.round(jankInfo.duration)}ms\`,
      timestamp: new Date(jankInfo.timestamp).toLocaleTimeString(),
      description: \`帧间隔超过 100ms，发生卡顿\`,
    })
  })

  action('卡顿监控')('已启动（阈值 100ms），尝试执行重计算触发卡顿')

  // 模拟卡顿：阻塞主线程
  setTimeout(() => {
    action('模拟卡顿')('开始执行 200ms 的同步计算...')
    const start = performance.now()
    while (performance.now() - start < 200) {
      // 阻塞主线程
    }
    action('模拟卡顿')('计算完成')
  }, 1000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('卡顿监控')('已停止')
  }, 5000)
}

export default jankDemo
`,u=`import { action } from 'storybook/actions'
import LongTaskMonitor from '../../../packages/element-utils/src/LongTaskMonitor'

const longTaskDemo = () => {
  const monitor = new LongTaskMonitor()

  const stop = monitor.observe(
    (task) => {
      action('长任务检测')({
        name: task.name,
        duration: \`\${Math.round(task.duration)}ms\`,
        startTime: \`\${Math.round(task.startTime)}ms\`,
        attribution: task.attribution,
      })
    },
    { threshold: 50, reportExisting: true }
  )

  action('长任务监控')('已启动（阈值 50ms）')

  // 模拟长任务：阻塞主线程超过 50ms
  setTimeout(() => {
    action('模拟长任务')('开始执行 150ms 的同步计算...')
    const start = performance.now()
    while (performance.now() - start < 150) {
      // 阻塞主线程
    }
    action('模拟长任务')('计算完成')
  }, 500)

  // 3秒后获取统计数据
  setTimeout(() => {
    const stats = monitor.getStats()
    action('长任务统计')({
      count: stats.count,
      totalDuration: \`\${Math.round(stats.totalDuration)}ms\`,
      maxDuration: \`\${Math.round(stats.maxDuration)}ms\`,
      avgDuration: \`\${Math.round(stats.avgDuration)}ms\`,
    })

    const tbt = monitor.calculateTBT()
    action('TBT (Total Blocking Time)')(\`\${Math.round(tbt)}ms\`)
  }, 3000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('长任务监控')('已停止')
  }, 5000)
}

export default longTaskDemo
`,m=`import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const lifecycleDemo = () => {
  const monitor = new PageLifecycleMonitor({
    DOMContentLoaded: (e) => {
      action('生命周期 - DOMContentLoaded')({
        type: e?.type,
        description: 'DOM 解析完成',
      })
    },
    load: (e) => {
      action('生命周期 - Load')({
        type: e?.type,
        description: '页面完全加载',
      })
    },
    pageshow: (e) => {
      action('生命周期 - PageShow')({
        persisted: e?.persisted,
        description: e?.persisted ? 'BFCache 恢复' : '正常展示',
      })
    },
    pagehide: (e) => {
      action('生命周期 - PageHide')({
        persisted: e?.persisted,
        description: '页面隐藏',
      })
    },
    visibilitychange: () => {
      action('生命周期 - VisibilityChange')({
        state: document.visibilityState,
        description: document.visibilityState === 'hidden' ? '页面不可见' : '页面可见',
      })
    },
    focus: () => {
      action('生命周期 - Focus')('窗口获得焦点')
    },
    blur: () => {
      action('生命周期 - Blur')('窗口失去焦点')
    },
    online: () => {
      action('生命周期 - Online')('网络恢复')
    },
    offline: () => {
      action('生命周期 - Offline')('网络断开')
    },
    popstate: () => {
      action('生命周期 - Popstate')('浏览器前进/后退')
    },
    hashchange: () => {
      action('生命周期 - Hashchange')('URL hash 变化')
    },
    freeze: () => {
      action('生命周期 - Freeze')('页面被冻结（Page Lifecycle API）')
    },
    resume: () => {
      action('生命周期 - Resume')('页面从冻结中恢复')
    },
  })

  action('生命周期监控')('已启动，请切换标签页、聚焦/失焦窗口等操作查看事件')

  const stop = monitor.observe()

  // 10秒后停止
  setTimeout(() => {
    stop()
    action('生命周期监控')('已停止')
  }, 10000)
}

export default lifecycleDemo
`,g=`import { action } from 'storybook/actions'
import { Surveillance } from '../../../packages/element-utils/src/Surveillance'

const updateConfigDemo = () => {
  // 创建最小配置实例
  const surveillance = new Surveillance({
    appId: 'storybook-demo',
    performance: {
      webVitals: false,
      resource: false,
      longTask: false,
      fps: false,
      jank: false,
      navigation: false,
    },
    error: { enabled: false },
    request: { enabled: false },
    behavior: { enabled: false },
    lifecycle: { enabled: false },
  })

  action('初始配置')({
    performance: surveillance.config.performance,
    error: surveillance.config.error?.enabled,
    request: surveillance.config.request?.enabled,
  })

  // 动态启用性能监控
  surveillance.updateConfig({
    performance: {
      webVitals: true,
      fps: true,
    },
  })

  action('更新后配置')({
    webVitals: surveillance.config.performance?.webVitals,
    fps: surveillance.config.performance?.fps,
    resource: surveillance.config.performance?.resource,
  })

  // 动态修改采样率和上报方式
  surveillance.updateConfig({
    sampleRate: 0.5,
    reportMethod: 'fetch',
    batchSize: 20,
  })

  action('再次更新配置')({
    sampleRate: surveillance.config.sampleRate,
    reportMethod: surveillance.config.reportMethod,
    batchSize: surveillance.config.batchSize,
  })

  action('updateConfig 说明')('updateConfig 使用 deepMerge 进行深度合并，只更新传入的字段，不影响其他配置')
}

export default updateConfigDemo
`,f=`import { action } from 'storybook/actions'
import shouldSample from '../../../packages/element-utils/src/shouldSample'

const shouldSampleDemo = () => {
  // 采样率 1：全量采集
  const results100 = Array.from({ length: 10 }, () => shouldSample(1))
  action('采样率 1（全量）')(results100.every(Boolean) ? '全部命中' : results100)

  // 采样率 0：不采集
  const results0 = Array.from({ length: 10 }, () => shouldSample(0))
  action('采样率 0（不采集）')(results0.every((r) => !r) ? '全部未命中' : results0)

  // 采样率 0.5：约 50% 命中
  const total = 100
  const hits = Array.from({ length: total }, () => shouldSample(0.5)).filter(Boolean).length
  action('采样率 0.5（50%）')({
    total,
    hits,
    hitRate: \`\${hits}%\`,
    description: '基于 Math.random() < sampleRate 判断',
  })

  // 默认值：不传参等于全量采集
  action('默认值（不传参）')(shouldSample() ? '命中（默认 sampleRate=1）' : '未命中')
}

export default shouldSampleDemo
`;function c(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"surveillance",children:"Surveillance"}),`
`,e.jsx(n.p,{children:"Surveillance 是一个功能完善的前端性能监控工具，基于现代 Performance API 实现，支持 Web Vitals 核心指标、资源加载、长任务、FPS、卡顿、错误、网络请求、用户行为和页面生命周期监控。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Surveillance"})," 是一个前端监控聚合类，通过 ",e.jsx(n.code,{children:"new Surveillance(config)"})," 创建实例，配置各类监控选项后调用 ",e.jsx(n.code,{children:"start()"})," 启动监控。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"构造阶段"}),"：构造函数通过 ",e.jsx(n.code,{children:"deepMerge({ ...DEFAULT_CONFIG }, userConfig)"})," 将用户配置与默认配置深度合并，随后依次初始化以下 9 个子监控器实例和 1 个上报器："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reporter"})," - 数据上报器，根据 ",e.jsx(n.code,{children:"reportUrl"}),"、",e.jsx(n.code,{children:"reportMethod"}),"、",e.jsx(n.code,{children:"batchSize"}),"、",e.jsx(n.code,{children:"reportInterval"}),"、",e.jsx(n.code,{children:"appId"})," 等配置创建，内部使用 ",e.jsx(n.code,{children:"createBatch"})," 实现批量聚合上报，支持 beacon/fetch/xhr/img 四种发送方式，自动在 ",e.jsx(n.code,{children:"beforeunload"})," 和 ",e.jsx(n.code,{children:"visibilitychange(hidden)"})," 时 flush 缓冲区"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ErrorMonitor"})," - 传入 ",e.jsx(n.code,{children:"jsError"}),"/",e.jsx(n.code,{children:"resourceError"}),"/",e.jsx(n.code,{children:"promiseError"}),"/",e.jsx(n.code,{children:"errorFilter"})," 配置；同时将 ",e.jsx(n.code,{children:"requestError"})," 配置传给 RequestMonitor 的 ",e.jsx(n.code,{children:"onError"})," 回调"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PageLifecycleMonitor"})," - 无参构造，通过 ",e.jsx(n.code,{children:"observe()"})," 时按枚举值键名查找用户传入的 handler 或 ",e.jsx(n.code,{children:"DEFAULT_HANDLERS"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JankMonitor"})," - 传入 ",e.jsx(n.code,{children:"performance.jankThreshold"}),"（默认 100ms）作为卡顿判定阈值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"WebVitalsMonitor"})," - 传入 ",e.jsx(n.code,{children:"reportAllChanges: false"}),"，内部通过 ",e.jsx(n.code,{children:"supportEntryType"})," 检测浏览器能力后选择性注册 LCP/FID/CLS/FCP/FP/INP/TTFB 7 个观测器"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FpsMonitor"})," - 无参构造，通过 ",e.jsx(n.code,{children:"requestAnimationFrame"})," 循环每秒计算帧率"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LongTaskMonitor"})," - 无参构造，基于 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监听 ",e.jsx(n.code,{children:"longtask"})," 类型条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ResourceMonitor"})," - 传入 ",e.jsx(n.code,{children:"performance.resourceFilter"})," 作为资源过滤函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BehaviorMonitor"})," - 传入 ",e.jsx(n.code,{children:"click"}),"/",e.jsx(n.code,{children:"scroll"}),"/",e.jsx(n.code,{children:"input"}),"/",e.jsx(n.code,{children:"routeChange"}),"/",e.jsx(n.code,{children:"maxBehaviors"})," 配置"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RequestMonitor"})," - 传入 ",e.jsx(n.code,{children:"onRequest"})," 回调（直接调用 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.REQUEST, request)"}),"）、",e.jsx(n.code,{children:"onError"})," 回调（当 ",e.jsx(n.code,{children:"error.requestError"})," 启用时）、",e.jsx(n.code,{children:"ignoreUrls"}),"、",e.jsx(n.code,{children:"timeoutThreshold"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"启动阶段"}),"：",e.jsx(n.code,{children:"start()"})," 依次检查三个前置条件—— ",e.jsx(n.code,{children:"running"})," 不为 true（防止重复启动）、",e.jsx(n.code,{children:"config.enabled"})," 为 true、",e.jsx(n.code,{children:"shouldSample(sampleRate)"})," 返回 true。通过后，按模块分组启动："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"性能监控"}),"（",e.jsx(n.code,{children:"performance.enabled"}),"）：按开关逐一启动 webVitals → resource → longTask → fps → jank → navigation（通过 ",e.jsx(n.code,{children:"onWindowLoaded"})," 延迟到页面加载完成后上报导航指标）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"错误监控"}),"（",e.jsx(n.code,{children:"error.enabled"}),"）：调用 ",e.jsx(n.code,{children:"errorMonitor.observe(errorCallback)"}),"，errorCallback 内部执行上报并触发 ",e.jsx(n.code,{children:"hooks.onError"})," 钩子"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"请求监控"}),"（",e.jsx(n.code,{children:"request.enabled"}),"）：分别调用 ",e.jsx(n.code,{children:"requestMonitor.observeXHR()"})," 和 ",e.jsx(n.code,{children:"requestMonitor.observeFetch()"})," 劫持原生 API"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"行为监控"}),"（",e.jsx(n.code,{children:"behavior.enabled"}),"）：调用 ",e.jsx(n.code,{children:"behaviorMonitor.observe(callback)"})," 注册点击/滚动/输入/路由/可见性监听"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"生命周期监控"}),"（",e.jsx(n.code,{children:"lifecycle.enabled"}),"）：调用 ",e.jsx(n.code,{children:"pageLifecycleMonitor.observe()"})," 注册 14 种页面事件监听"]}),`
`]}),`
`,e.jsxs(n.p,{children:["每个子监控器的 ",e.jsx(n.code,{children:"observe()"})," 返回一个停止函数，统一收集到 ",e.jsx(n.code,{children:"stoppers"})," 数组中。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"停止阶段"}),"：",e.jsx(n.code,{children:"stop()"})," 遍历并执行 ",e.jsx(n.code,{children:"stoppers"})," 数组中所有停止函数后清空数组，额外调用 ",e.jsx(n.code,{children:"requestMonitor.stop()"})," 恢复被劫持的原生 ",e.jsx(n.code,{children:"XMLHttpRequest"})," 和 ",e.jsx(n.code,{children:"fetch"})," API。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"上报流程"}),"：各子监控器的回调中调用 ",e.jsx(n.code,{children:"reporter.report(type, data)"}),"，Reporter 为每条数据附加 ",e.jsx(n.code,{children:"appId"}),"、",e.jsx(n.code,{children:"sessionId"}),"（基于 ",e.jsx(n.code,{children:"sessionStorage"})," 的会话 ID）、",e.jsx(n.code,{children:"pageId"}),"（基于 ",e.jsx(n.code,{children:"uniqueId"})," 的页面唯一标识）、",e.jsx(n.code,{children:"timestamp"})," 和 ",e.jsx(n.code,{children:"pageInfo"}),"（URL/标题/referrer 等），然后推入 ",e.jsx(n.code,{children:"createBatch"})," 缓冲区。当缓冲数量达到 ",e.jsx(n.code,{children:"batchSize"})," 或等待时间达到 ",e.jsx(n.code,{children:"reportInterval"})," 时触发批量发送。发送前执行 ",e.jsx(n.code,{children:"beforeReport"})," 钩子（返回 false 则丢弃），发送后执行 ",e.jsx(n.code,{children:"afterReport"})," 钩子。"]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"new Surveillance(config)"})," 创建监控实例，调用 ",e.jsx(n.code,{children:"start()"})," 启动全量监控。构造时 ",e.jsx(n.code,{children:"deepMerge({ ...DEFAULT_CONFIG }, userConfig)"})," 深度合并配置（默认开启 performance/error/request，关闭 behavior 和 lifecycle）。",e.jsx(n.code,{children:"start()"})," 内部执行三重守卫检查：",e.jsx(n.code,{children:"running"})," 状态 → ",e.jsx(n.code,{children:"config.enabled"})," → ",e.jsx(n.code,{children:"shouldSample(sampleRate)"})," 采样命中判断，全部通过后才启动子监控器。可通过 ",e.jsx(n.code,{children:"updateConfig()"})," 运行时深度合并新配置并重建 Reporter，通过 ",e.jsx(n.code,{children:"stop()"})," 遍历所有 stopper 停止监控并恢复被劫持的原生 API。实例上直接暴露所有子监控器引用（如 ",e.jsx(n.code,{children:"longTaskMonitor.getStats()"}),"、",e.jsx(n.code,{children:"behaviorMonitor.getBehaviors()"}),"），便于按需获取监控数据。"]}),`
`,e.jsx(r,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"web-vitals-监控",children:"Web Vitals 监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WebVitalsMonitor"})," 是一个 class，通过 ",e.jsx(n.code,{children:"new WebVitalsMonitor(options)"})," 构造，",e.jsx(n.code,{children:"options.reportAllChanges"})," 控制是否在指标每次变化时都回调（默认仅在最终值确定时回调）。调用 ",e.jsx(n.code,{children:"observe(callback)"})," 时，内部通过 ",e.jsx(n.code,{children:"supportEntryType()"})," 逐一检测浏览器是否支持对应的 ",e.jsx(n.code,{children:"PerformanceObserver"})," entryType，按支持情况注册以下 7 个独立观测器："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onLCP"})," — 监听 ",e.jsx(n.code,{children:"largest-contentful-paint"})," 类型，在 ",e.jsx(n.code,{children:"visibilitychange(hidden)"})," 时停止监听以锁定最终值，支持 BFCache 恢复后重新计算"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFID"})," — 监听 ",e.jsx(n.code,{children:"first-input"})," 类型，记录首次用户输入的处理延迟"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onCLS"})," — 监听 ",e.jsx(n.code,{children:"layout-shift"})," 类型，采用会话窗口算法（两次偏移间隔 ≤1s 且窗口总时长 ≤5s）累计布局偏移分数，排除有 ",e.jsx(n.code,{children:"hadRecentInput"})," 的条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFCP"})," — 监听 ",e.jsx(n.code,{children:"paint"})," 类型，提取 ",e.jsx(n.code,{children:"first-contentful-paint"})," 条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFP"})," — 同样监听 ",e.jsx(n.code,{children:"paint"})," 类型，提取 ",e.jsx(n.code,{children:"first-paint"})," 条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onINP"})," — 监听 ",e.jsx(n.code,{children:"event"})," 类型（可配置 ",e.jsx(n.code,{children:"durationThreshold"}),"），维护所有交互条目并取第 98 百分位作为 INP 值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onTTFB"})," — 直接从 ",e.jsx(n.code,{children:"PerformanceNavigationTiming"})," 中读取 ",e.jsx(n.code,{children:"responseStart"})," 计算"]}),`
`]}),`
`,e.jsxs(n.p,{children:["每个观测器返回停止函数，",e.jsx(n.code,{children:"WebVitalsMonitor"})," 统一收集到 ",e.jsx(n.code,{children:"stoppers"})," 数组，调用 ",e.jsx(n.code,{children:"stop()"})," 时全部清理。每个指标回调时携带 ",e.jsx(n.code,{children:"{ name, value, rating, delta, id, navigationType, entries }"})," 完整信息。"]}),`
`,e.jsx(r,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"错误监控",children:"错误监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ErrorMonitor"})," 是一个 class，通过构造参数配置 4 种错误类型的开关（默认 ",e.jsx(n.code,{children:"jsError"}),"/",e.jsx(n.code,{children:"resourceError"}),"/",e.jsx(n.code,{children:"promiseError"})," 开启，",e.jsx(n.code,{children:"consoleError"})," 关闭）和 ",e.jsx(n.code,{children:"errorFilter"})," 过滤函数。调用 ",e.jsx(n.code,{children:"observe(callback)"})," 时，内部按开关分别注册："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeJSError"})," — 通过 ",e.jsx(n.code,{children:"window.addEventListener('error', handler)"})," 冒泡阶段捕获 JS 运行时错误，提取 ",e.jsx(n.code,{children:"message"}),"、",e.jsx(n.code,{children:"filename"}),"、",e.jsx(n.code,{children:"lineno"}),"、",e.jsx(n.code,{children:"colno"}),"、",e.jsx(n.code,{children:"stack"})," 信息"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeResourceError"})," — 通过 ",e.jsx(n.code,{children:"window.addEventListener('error', handler, true)"})," 捕获阶段监听（因为资源加载失败事件不会冒泡），检查 ",e.jsx(n.code,{children:"event.target"})," 是否为 HTMLElement 来区分资源错误与 JS 错误"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observePromiseError"})," — 通过 ",e.jsx(n.code,{children:"window.addEventListener('unhandledrejection', handler)"})," 捕获未处理的 Promise 拒绝"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeConsoleError"})," — 劫持 ",e.jsx(n.code,{children:"console.error"})," 方法，捕获开发者手动输出的错误信息"]}),`
`]}),`
`,e.jsxs(n.p,{children:["每条错误在传递给用户回调前，先经过 ",e.jsx(n.code,{children:"errorFilter"})," 过滤（返回 false 则丢弃）。在 Surveillance 中，错误回调 ",e.jsx(n.code,{children:"errorCallback"})," 会同时执行 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.ERROR, error)"})," 上报和 ",e.jsx(n.code,{children:"hooks.onError?.(error)"})," 钩子通知。"]}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"请求监控",children:"请求监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"RequestMonitor"})," 通过劫持原生 API 实现无侵入式网络请求监控，构造时传入 ",e.jsx(n.code,{children:"onRequest"}),"（请求完成回调）、",e.jsx(n.code,{children:"onError"}),"（请求错误回调）、",e.jsx(n.code,{children:"ignoreUrls"}),"（URL 过滤列表）和 ",e.jsx(n.code,{children:"timeoutThreshold"}),"（超时阈值，默认 30000ms）。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeXHR"})," — 劫持 ",e.jsx(n.code,{children:"XMLHttpRequest.prototype"})," 的 ",e.jsx(n.code,{children:"open"}),"（记录 method/url）、",e.jsx(n.code,{children:"send"}),"（记录 startTime 和请求体）、",e.jsx(n.code,{children:"setRequestHeader"}),"（记录请求头），在 ",e.jsx(n.code,{children:"loadend"}),"/",e.jsx(n.code,{children:"timeout"}),"/",e.jsx(n.code,{children:"error"})," 事件中收集完整请求信息（status/duration/responseSize/success 等）。通过 ",e.jsx(n.code,{children:"ignoreUrls"})," 匹配跳过自身上报请求，防止监控死循环"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeFetch"})," — 劫持 ",e.jsx(n.code,{children:"window.fetch"}),"，在请求前记录 startTime，请求完成后通过 ",e.jsx(n.code,{children:"response.clone().blob().size"})," 获取响应体大小。同样支持 ",e.jsx(n.code,{children:"ignoreUrls"})," 过滤"]}),`
`]}),`
`,e.jsxs(n.p,{children:["内部维护 ",e.jsx(n.code,{children:"requests"})," 数组存储所有已完成请求，提供 ",e.jsx(n.code,{children:"getStats()"})," 统计方法（成功/失败数、平均耗时、慢请求数——超过 3000ms 视为慢请求、按状态码分组计数），",e.jsx(n.code,{children:"getRequests()"})," 获取完整请求列表，",e.jsx(n.code,{children:"clear()"})," 清空记录。",e.jsx(n.code,{children:"stop()"})," 恢复被劫持的原生 API 原型方法。在 Surveillance 中，",e.jsx(n.code,{children:"onRequest"})," 回调直接执行 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.REQUEST, request)"})," 上报。"]}),`
`,e.jsx(r,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"资源监控",children:"资源监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ResourceMonitor"})," 基于 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监控 ",e.jsx(n.code,{children:"resource"})," 类型条目，构造时可传入 ",e.jsx(n.code,{children:"filter"})," 函数过滤不需要监控的资源。提供以下 API："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observe(callback)"})," — 创建 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监听 ",e.jsx(n.code,{children:"resource"})," 类型条目，每当新资源加载完成时解析 ",e.jsx(n.code,{children:"PerformanceResourceTiming"})," 为 ",e.jsx(n.code,{children:"ResourceMetrics"}),"（包含 name/initiatorType/duration/transferSize/encodedBodySize/decodedBodySize 等字段），经过 ",e.jsx(n.code,{children:"filter"})," 过滤后触发回调。在 Surveillance 中通过 ",e.jsx(n.code,{children:"PERFORMANCE_TYPE.RESOURCE"})," 类型上报"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getMetrics()"})," — 调用 ",e.jsx(n.code,{children:"performance.getEntriesByType('resource')"})," 获取当前页面所有已加载资源的完整性能数据列表，经 ",e.jsx(n.code,{children:"filter"})," 过滤后返回"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getStats()"})," — 对 ",e.jsx(n.code,{children:"getMetrics()"})," 结果按 ",e.jsx(n.code,{children:"initiatorType"}),"（script/css/img/font/xmlhttprequest/fetch 等）分组统计，计算每种类型的数量、总耗时、平均耗时"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getSlowResources(threshold)"})," — 筛选 ",e.jsx(n.code,{children:"duration"})," 超过阈值（默认 1000ms）的慢资源"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getLargeResources(threshold)"})," — 筛选 ",e.jsx(n.code,{children:"transferSize"})," 超过阈值（默认 300KB）的大资源"]}),`
`]}),`
`,e.jsx(r,{language:"typescript",children:a}),`
`,e.jsx(n.h2,{id:"绘制指标-fpfcp",children:"绘制指标 (FP/FCP)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getPaintMetrics()"})," 基于 Paint Timing API 获取首次绘制和首次内容绘制时间。内部流程："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"performance.getEntriesByType('navigation')"})," 获取 ",e.jsx(n.code,{children:"PerformanceNavigationTiming"}),"，读取 ",e.jsx(n.code,{children:"fetchStart"})," 作为基准时间"]}),`
`,e.jsxs(n.li,{children:["调用 ",e.jsx(n.code,{children:"performance.getEntriesByType('paint')"})," 获取绘制条目，分别查找 ",e.jsx(n.code,{children:"name === 'first-paint'"})," 和 ",e.jsx(n.code,{children:"name === 'first-contentful-paint'"})," 的条目"]}),`
`,e.jsxs(n.li,{children:["计算 ",e.jsx(n.code,{children:"FP = firstPaint.startTime - navigation.fetchStart"}),"、",e.jsx(n.code,{children:"FCP = firstContentfulPaint.startTime - navigation.fetchStart"})]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"getMetricRating(METRIC_NAME.FP, FP)"})," 和 ",e.jsx(n.code,{children:"getMetricRating(METRIC_NAME.FCP, FCP)"})," 给出 good/needs-improvement/poor 评级（FP 阈值：≤1000ms good / ≤2500ms needs-improvement / >2500ms poor；FCP 阈值：≤1800ms / ≤3000ms / >3000ms）"]}),`
`]}),`
`,e.jsxs(n.p,{children:["如果 ",e.jsx(n.code,{children:"performance"})," API 不可用或缺少任一条目则返回 ",e.jsx(n.code,{children:"undefined"}),"。"]}),`
`,e.jsx(r,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"行为监控",children:"行为监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BehaviorMonitor"})," 是一个 class，构造时传入 ",e.jsx(n.code,{children:"click"}),"/",e.jsx(n.code,{children:"scroll"}),"/",e.jsx(n.code,{children:"input"}),"/",e.jsx(n.code,{children:"routeChange"}),"（均默认 true）和 ",e.jsx(n.code,{children:"maxBehaviors"}),"（默认 100）配置。内部维护 ",e.jsx(n.code,{children:"running"})," 标志防止重复 observe，以及 ",e.jsx(n.code,{children:"behaviors"})," 行为记录数组。"]}),`
`,e.jsxs(n.p,{children:["调用 ",e.jsx(n.code,{children:"observe(callback)"})," 时，按配置注册以下 5 种监听器（可见性监听始终开启）："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeClick"})," — 监听 ",e.jsx(n.code,{children:"document"})," 的 ",e.jsx(n.code,{children:"click"})," 事件，记录点击目标的 ",e.jsx(n.code,{children:"tagName"}),"/",e.jsx(n.code,{children:"id"}),"/",e.jsx(n.code,{children:"className"}),"/",e.jsx(n.code,{children:"innerText"}),"/",e.jsx(n.code,{children:"xpath"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeScroll"})," — 监听 ",e.jsx(n.code,{children:"window"})," 的 ",e.jsx(n.code,{children:"scroll"})," 事件（带节流），记录滚动位置 ",e.jsx(n.code,{children:"scrollX"}),"/",e.jsx(n.code,{children:"scrollY"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeInput"})," — 监听 ",e.jsx(n.code,{children:"document"})," 的 ",e.jsx(n.code,{children:"input"})," 事件，记录输入目标和输入值（可配置脱敏）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeRouteChange"})," — 监听 ",e.jsx(n.code,{children:"popstate"})," 和 ",e.jsx(n.code,{children:"hashchange"})," 事件，并劫持 ",e.jsx(n.code,{children:"history.pushState"}),"/",e.jsx(n.code,{children:"replaceState"})," 记录路由变化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"observeVisibility"})," — 监听 ",e.jsx(n.code,{children:"visibilitychange"})," 事件，记录页面可见/隐藏状态变化"]}),`
`]}),`
`,e.jsxs(n.p,{children:["每条行为记录包含 ",e.jsx(n.code,{children:"{ type, timestamp, pageUrl, target?, data? }"}),"。新行为先写入 ",e.jsx(n.code,{children:"behaviors"})," 数组，若超过 ",e.jsx(n.code,{children:"maxBehaviors"})," 则 ",e.jsx(n.code,{children:"slice(-maxBehaviors)"})," 保留最新记录，再触发用户回调。在 Surveillance 中通过 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.BEHAVIOR, [behavior])"})," 上报。"]}),`
`,e.jsxs(n.p,{children:["额外提供 ",e.jsx(n.code,{children:"trackCustom(name, data)"})," 方法手动记录自定义行为（",e.jsx(n.code,{children:"type: 'custom'"}),"），",e.jsx(n.code,{children:"getBehaviors()"})," 获取完整行为列表快照，",e.jsx(n.code,{children:"clear()"})," 清空记录。"]}),`
`,e.jsx(r,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"fps-监控",children:"FPS 监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FpsMonitor"})," 是一个 class，无参构造。调用 ",e.jsx(n.code,{children:"observe(onUpdate)"})," 时启动 ",e.jsx(n.code,{children:"requestAnimationFrame"})," 循环："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["初始化 ",e.jsx(n.code,{children:"frameCount = 0"}),"、",e.jsx(n.code,{children:"lastTime = performance.now()"})]}),`
`,e.jsxs(n.li,{children:["每帧回调中 ",e.jsx(n.code,{children:"frameCount++"}),"，检查 ",e.jsx(n.code,{children:"performance.now() - lastTime"})," 是否 ≥ 1000ms"]}),`
`,e.jsxs(n.li,{children:["达到 1 秒时计算 ",e.jsx(n.code,{children:"fps = Math.round((frameCount * 1000) / elapsed)"}),"，触发 ",e.jsx(n.code,{children:"onUpdate(fps)"})," 回调，然后重置计数器和时间基准"]}),`
`,e.jsxs(n.li,{children:["继续 ",e.jsx(n.code,{children:"requestAnimationFrame(tick)"})," 循环"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stop()"})," 通过 ",e.jsx(n.code,{children:"cancelAnimationFrame(animationId)"})," 停止循环。FPS 60 为理想值，30 以下时用户会明显感知卡顿。另外模块还导出 ",e.jsx(n.code,{children:"getFps()"})," 函数（返回 Promise），用于单次测量 1 秒内的 FPS 值。在 Surveillance 中通过 ",e.jsx(n.code,{children:"PERFORMANCE_TYPE.FPS"})," 类型上报每秒帧率。"]}),`
`,e.jsx(r,{language:"typescript",children:j}),`
`,e.jsx(n.h2,{id:"卡顿监控",children:"卡顿监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"JankMonitor"})," 是一个 class，构造时传入 ",e.jsx(n.code,{children:"threshold"}),"（默认 ",e.jsx(n.code,{children:"DEFAULT_JANK_THRESHOLD"})," = 100ms）。调用 ",e.jsx(n.code,{children:"observe(callback)"})," 时启动 ",e.jsx(n.code,{children:"requestAnimationFrame"})," 循环："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["记录上一帧时间 ",e.jsx(n.code,{children:"lastFrameTime = performance.now()"})]}),`
`,e.jsxs(n.li,{children:["每帧回调中计算 ",e.jsx(n.code,{children:"frameDuration = currentTime - lastFrameTime"})]}),`
`,e.jsxs(n.li,{children:["若 ",e.jsx(n.code,{children:"frameDuration > threshold"}),"，触发 ",e.jsx(n.code,{children:"callback({ duration: frameDuration, timestamp: currentTime })"}),"，报告本次卡顿的持续时长和发生时间"]}),`
`,e.jsxs(n.li,{children:["更新 ",e.jsx(n.code,{children:"lastFrameTime = currentTime"}),"，继续循环"]}),`
`]}),`
`,e.jsxs(n.p,{children:["与 FPS 监控的区别：FPS 监控关注每秒的整体帧率，卡顿监控关注的是单次异常帧间隔。例如 1 秒内有 59 帧正常 + 1 帧耗时 200ms，FPS 仍显示约 55fps，但卡顿监控会精确捕获到这次 200ms 的卡顿事件。在 Surveillance 中通过 ",e.jsx(n.code,{children:"PERFORMANCE_TYPE.JANK"})," 类型上报。"]}),`
`,e.jsx(r,{language:"typescript",children:p}),`
`,e.jsx(n.h2,{id:"长任务监控",children:"长任务监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"LongTaskMonitor"})," 是一个 class，内部维护 ",e.jsx(n.code,{children:"longTaskEntries"})," 数组缓存所有已捕获的长任务。调用 ",e.jsx(n.code,{children:"observe(callback, options)"})," 时："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"supportEntryType('longtask')"})," 检测浏览器是否支持 Long Task API，不支持则 ",e.jsx(n.code,{children:"console.warn"})," 并返回空 stopper"]}),`
`,e.jsxs(n.li,{children:["若 ",e.jsx(n.code,{children:"options.reportExisting"})," 为 true（默认），先遍历已缓存条目回调一次（用于新 observer 启动时获取历史数据）"]}),`
`,e.jsxs(n.li,{children:["创建 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监听 ",e.jsx(n.code,{children:"longtask"})," 类型条目，每条经过 ",e.jsx(n.code,{children:"threshold"}),"（默认 ",e.jsx(n.code,{children:"DEFAULT_LONG_TASK_THRESHOLD"})," = 50ms）过滤后，解析为 ",e.jsx(n.code,{children:"LongTaskMetrics"}),"（",e.jsx(n.code,{children:"name"}),"/",e.jsx(n.code,{children:"startTime"}),"/",e.jsx(n.code,{children:"duration"}),"/",e.jsx(n.code,{children:"attribution"}),"），写入缓存并触发回调"]}),`
`]}),`
`,e.jsx(n.p,{children:"提供以下分析方法："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getStats()"})," — 优先使用缓存条目，若缓存为空则从 ",e.jsx(n.code,{children:"performance.getEntriesByType('longtask')"})," 回退获取，计算统计信息：",e.jsx(n.code,{children:"count"}),"（长任务数量）、",e.jsx(n.code,{children:"totalDuration"}),"（总持续时间）、",e.jsx(n.code,{children:"maxDuration"}),"（最大持续时间）、",e.jsx(n.code,{children:"avgDuration"}),"（平均持续时间）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"calculateTBT(fcpTime?, ttiTime?)"})," — 计算 Total Blocking Time：遍历 ",e.jsx(n.code,{children:"[fcpTime, ttiTime]"}),"（默认 ",e.jsx(n.code,{children:"[0, performance.now()]"}),"）范围内的长任务，对每条任务取 ",e.jsx(n.code,{children:"duration - 50ms"})," 的阻塞时间求和。TBT 是 Lighthouse 评分的核心指标之一"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"getEntries()"})," — 返回缓存条目的快照副本"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"clear()"})," — 清空缓存"]}),`
`]}),`
`,e.jsxs(n.p,{children:["在 Surveillance 中传入 ",e.jsx(n.code,{children:"performance.longTaskThreshold"})," 作为阈值，通过 ",e.jsx(n.code,{children:"PERFORMANCE_TYPE.LONG_TASK"})," 类型上报。"]}),`
`,e.jsx(r,{language:"typescript",children:u}),`
`,e.jsx(n.h2,{id:"生命周期监控",children:"生命周期监控"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PageLifecycleMonitor"})," 是一个 class，构造时可传入 ",e.jsx(n.code,{children:"PageLifecycleHandlers"})," 对象（键为 ",e.jsx(n.code,{children:"PAGE_LIFECYCLE_EVENT"})," 枚举值字符串如 ",e.jsx(n.code,{children:"'DOMContentLoaded'"}),"/",e.jsx(n.code,{children:"'load'"})," 等，值为对应的处理函数）。调用 ",e.jsx(n.code,{children:"observe()"})," 时："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["先通过 ",e.jsx(n.code,{children:"isBrowser()"})," 检测运行环境，SSR 环境下直接触发 ",e.jsx(n.code,{children:"handlers['ssr']"})," 并返回空 stopper"]}),`
`,e.jsxs(n.li,{children:["浏览器环境下依次注册以下 14 种事件监听器，每个监听器返回 cleanup 函数收集到 ",e.jsx(n.code,{children:"cleanupFns"})," 数组：",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDOMContentLoaded"})," → 触发 ",e.jsx(n.code,{children:"handlers['DOMContentLoaded']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onWindowLoaded"})," → 触发 ",e.jsx(n.code,{children:"handlers['load']"}),"（内部通过 ",e.jsx(n.code,{children:"await sleep(0)"})," 延迟一个宏任务，确保性能条目写入完毕）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPageUnload"})," → 触发 ",e.jsx(n.code,{children:"handlers['beforeunload']"}),"（",e.jsx(n.code,{children:"capture: false"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onUnload"})," → 触发 ",e.jsx(n.code,{children:"handlers['unload']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPageShow"})," → 触发 ",e.jsx(n.code,{children:"handlers['pageshow']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPageHide"})," → 触发 ",e.jsx(n.code,{children:"handlers['pagehide']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"visibility"})," → 可见/隐藏时均触发 ",e.jsx(n.code,{children:"handlers['visibilitychange']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onWindowFocus"})," → 触发 ",e.jsx(n.code,{children:"handlers['focus']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onWindowBlur"})," → 触发 ",e.jsx(n.code,{children:"handlers['blur']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onNetworkChange"})," → 在线时触发 ",e.jsx(n.code,{children:"handlers['online']"}),"，离线时触发 ",e.jsx(n.code,{children:"handlers['offline']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPopState"})," → 触发 ",e.jsx(n.code,{children:"handlers['popstate']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onHashChange"})," → 触发 ",e.jsx(n.code,{children:"handlers['hashchange']"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPageFreeze"})," → 触发 ",e.jsx(n.code,{children:"handlers['freeze']"}),"（Page Lifecycle API）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPageResume"})," → 触发 ",e.jsx(n.code,{children:"handlers['resume']"}),"（Page Lifecycle API）"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["内部通过 ",e.jsx(n.code,{children:"getHandler(event)"})," 方法查找处理器：优先使用用户传入的 ",e.jsx(n.code,{children:"handlers[event]"}),"，未定义时回退到 ",e.jsx(n.code,{children:"DEFAULT_HANDLERS[event]"}),"（默认为空函数）。",e.jsx(n.code,{children:"stop()"})," 遍历所有 cleanup 函数并清空。"]}),`
`,e.jsx(r,{language:"typescript",children:m}),`
`,e.jsx(n.h2,{id:"动态更新配置",children:"动态更新配置"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"updateConfig(newConfig)"})," 方法内部执行 ",e.jsx(n.code,{children:"this.config = deepMerge(this.config, newConfig)"})," 对配置进行深度合并——只覆盖传入的字段，保留其他已有配置不变（如只传 ",e.jsx(n.code,{children:"{ sampleRate: 0.5 }"})," 不会影响 performance/error 等配置）。合并完成后立即调用 ",e.jsx(n.code,{children:"this.reporter = this.createReporter()"})," 重新创建 Reporter 实例，使新的上报配置（",e.jsx(n.code,{children:"reportUrl"}),"、",e.jsx(n.code,{children:"reportMethod"}),"、",e.jsx(n.code,{children:"batchSize"}),"、",e.jsx(n.code,{children:"reportInterval"}),"、",e.jsx(n.code,{children:"appId"}),"、",e.jsx(n.code,{children:"hooks.beforeReport"}),"/",e.jsx(n.code,{children:"afterReport"}),"）生效。"]}),`
`,e.jsxs(n.p,{children:["注意：",e.jsx(n.code,{children:"updateConfig"})," 只更新配置和重建 Reporter，不会自动重启已停止的子监控器。如果需要修改子监控器的运行时行为（如开启之前关闭的 FPS 监控），需要先 ",e.jsx(n.code,{children:"stop()"})," 再 ",e.jsx(n.code,{children:"start()"})," 重新启动。适用于 A/B 测试、灰度发布、运行时切换上报地址等场景。"]}),`
`,e.jsx(r,{language:"typescript",children:g}),`
`,e.jsx(n.h2,{id:"采样率判断",children:"采样率判断"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"shouldSample(sampleRate)"})," 是一个纯函数，实现极简的采样率控制："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sampleRate >= 1"})," → 直接返回 ",e.jsx(n.code,{children:"true"}),"（全量采集）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sampleRate <= 0"})," → 直接返回 ",e.jsx(n.code,{children:"false"}),"（不采集）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0 < sampleRate < 1"})," → 返回 ",e.jsx(n.code,{children:"Math.random() < sampleRate"}),"（随机采样）"]}),`
`]}),`
`,e.jsxs(n.p,{children:["默认 ",e.jsx(n.code,{children:"sampleRate = 1"}),"（全量）。Surveillance 在 ",e.jsx(n.code,{children:"start()"})," 中调用 ",e.jsx(n.code,{children:"this.shouldSample()"}),"（内部转发为 ",e.jsx(n.code,{children:"shouldSample(this.config.sampleRate)"}),"），若返回 false 则直接 return 不启动任何子监控器，从根源上避免不必要的性能开销。注意采样判断只在 ",e.jsx(n.code,{children:"start()"})," 时执行一次，一旦启动后不会中途改变采样状态。"]}),`
`,e.jsx(r,{language:"typescript",children:f}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"surveillance-构造参数",children:"Surveillance 构造参数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"appId"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"应用 ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"enabled"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否启用监控"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sampleRate"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})}),e.jsx("td",{children:"采样率 (0-1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reportUrl"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"数据上报地址"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reportMethod"}),e.jsx("td",{children:e.jsx("code",{children:"'beacon' | 'fetch' | 'xhr' | 'img'"})}),e.jsx("td",{children:e.jsx("code",{children:"'beacon'"})}),e.jsx("td",{children:"上报方式"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"batchSize"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"10"})}),e.jsx("td",{children:"批量上报阈值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reportInterval"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"5000"})}),e.jsx("td",{children:"上报间隔 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.webVitals"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控 Web Vitals"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.resource"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控资源加载"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.longTask"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控长任务"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.longTaskThreshold"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"50"})}),e.jsx("td",{children:"长任务阈值 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.fps"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否监控 FPS"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.jank"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否监控卡顿"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.jankThreshold"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:"卡顿阈值 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"performance.navigation"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否上报导航性能"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error.jsError"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控 JS 错误"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error.resourceError"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控资源加载错误"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error.promiseError"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控 Promise 错误"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error.requestError"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控请求错误"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error.errorFilter"}),e.jsx("td",{children:e.jsx("code",{children:"(error: ErrorInfo) => boolean"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"错误过滤函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"request.xhr"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控 XHR"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"request.fetch"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控 Fetch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"request.ignoreUrls"}),e.jsx("td",{children:e.jsx("code",{children:"(string | RegExp)[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"忽略的 URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"request.timeoutThreshold"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"30000"})}),e.jsx("td",{children:"超时阈值 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behavior.click"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控点击"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behavior.scroll"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控滚动"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behavior.input"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控输入"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behavior.routeChange"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"是否监控路由变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behavior.maxBehaviors"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:"最大行为记录数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"lifecycle.enabled"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否启用生命周期监控"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hooks.beforeReport"}),e.jsx("td",{children:e.jsx("code",{children:"(data: ReportData) => ReportData | false"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"上报前处理钩子"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hooks.afterReport"}),e.jsx("td",{children:e.jsx("code",{children:"(data: ReportData, success: boolean) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"上报后处理钩子"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hooks.onError"}),e.jsx("td",{children:e.jsx("code",{children:"(error: ErrorInfo) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"错误处理钩子"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hooks.onMetric"}),e.jsx("td",{children:e.jsx("code",{children:"(metric: Metric) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"性能指标处理钩子"})]})]})]}),`
`,e.jsx(n.h3,{id:"surveillance-实例方法和属性",children:"Surveillance 实例方法和属性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"名称"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"start()"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"启动监控"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop()"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"停止监控"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"updateConfig(config)"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"动态更新配置（深度合并）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getNavigationMetrics()"}),e.jsx("td",{children:e.jsx("code",{children:"NavigationMetrics | undefined"})}),e.jsx("td",{children:"获取导航性能指标"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getPageInfo()"}),e.jsx("td",{children:e.jsx("code",{children:"PageInfo"})}),e.jsx("td",{children:"获取页面信息"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getPaintMetrics()"}),e.jsx("td",{children:e.jsx("code",{children:"PaintMetrics | undefined"})}),e.jsx("td",{children:"获取绘制性能指标（FP/FCP）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"running"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"当前运行状态"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"config"}),e.jsx("td",{children:e.jsx("code",{children:"SurveillanceConfig"})}),e.jsx("td",{children:"当前配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reporter"}),e.jsx("td",{children:e.jsx("code",{children:"Reporter"})}),e.jsx("td",{children:"上报器实例"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"webVitalsMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"WebVitalsMonitor"})}),e.jsx("td",{children:"Web Vitals 监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"errorMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"ErrorMonitor"})}),e.jsx("td",{children:"错误监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"requestMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"RequestMonitor"})}),e.jsx("td",{children:"请求监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behaviorMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"BehaviorMonitor"})}),e.jsx("td",{children:"行为监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resourceMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMonitor"})}),e.jsx("td",{children:"资源监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"longTaskMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"LongTaskMonitor"})}),e.jsx("td",{children:"长任务监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fpsMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"FpsMonitor"})}),e.jsx("td",{children:"FPS 监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"jankMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"JankMonitor"})}),e.jsx("td",{children:"卡顿监控器"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pageLifecycleMonitor"}),e.jsx("td",{children:e.jsx("code",{children:"PageLifecycleMonitor"})}),e.jsx("td",{children:"生命周期监控器"})]})]})]}),`
`,e.jsx(n.h3,{id:"web-vitals-阈值",children:"Web Vitals 阈值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"指标"}),e.jsx("th",{children:"Good"}),e.jsx("th",{children:"Needs Improvement"}),e.jsx("th",{children:"Poor"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"LCP"}),e.jsx("td",{children:"≤2500ms"}),e.jsx("td",{children:"≤4000ms"}),e.jsx("td",{children:">4000ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FID"}),e.jsx("td",{children:"≤100ms"}),e.jsx("td",{children:"≤300ms"}),e.jsx("td",{children:">300ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"CLS"}),e.jsx("td",{children:"≤0.1"}),e.jsx("td",{children:"≤0.25"}),e.jsx("td",{children:">0.25"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FCP"}),e.jsx("td",{children:"≤1800ms"}),e.jsx("td",{children:"≤3000ms"}),e.jsx("td",{children:">3000ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"INP"}),e.jsx("td",{children:"≤200ms"}),e.jsx("td",{children:"≤500ms"}),e.jsx("td",{children:">500ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"TTFB"}),e.jsx("td",{children:"≤800ms"}),e.jsx("td",{children:"≤1800ms"}),e.jsx("td",{children:">1800ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FP"}),e.jsx("td",{children:"≤1000ms"}),e.jsx("td",{children:"≤2500ms"}),e.jsx("td",{children:">2500ms"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：",e.jsx(n.code,{children:"Surveillance"})," 聚合类，统一协调性能、错误、请求、行为、生命周期五大监控模块。声明 9 个子监控器为 ",e.jsx(n.code,{children:"readonly"})," 属性，维护 ",e.jsx(n.code,{children:"stoppers"})," 数组管理生命周期，暴露 ",e.jsx(n.code,{children:"start()"}),"/",e.jsx(n.code,{children:"stop()"}),"/",e.jsx(n.code,{children:"updateConfig()"})," 以及 ",e.jsx(n.code,{children:"getNavigationMetrics()"}),"/",e.jsx(n.code,{children:"getPageInfo()"}),"/",e.jsx(n.code,{children:"getPaintMetrics()"})," 公共方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：包含所有类型定义（",e.jsx(n.code,{children:"SurveillanceConfig"}),"、",e.jsx(n.code,{children:"Metric"}),"、",e.jsx(n.code,{children:"ErrorInfo"}),"、",e.jsx(n.code,{children:"RequestInfo"}),"、",e.jsx(n.code,{children:"BehaviorInfo"})," 等）、",e.jsx(n.code,{children:"DEFAULT_CONFIG"})," 默认配置常量、",e.jsx(n.code,{children:"WEB_VITALS_THRESHOLDS"})," 阈值常量、全局类型扩展（",e.jsx(n.code,{children:"Navigator.connection"}),"、",e.jsx(n.code,{children:"Performance.memory"}),"、",e.jsx(n.code,{children:"Document.wasDiscarded"}),"）以及从其他模块重新导出的类型"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"构造阶段详细流程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deepMerge({ ...DEFAULT_CONFIG }, userConfig)"})," — 先浅拷贝 DEFAULT_CONFIG 防止污染原始对象，再深度合并用户配置"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"createReporter()"})," — 根据合并后的配置创建 Reporter 实例，传入 ",e.jsx(n.code,{children:"reportUrl"}),"/",e.jsx(n.code,{children:"reportMethod"}),"/",e.jsx(n.code,{children:"batchSize"}),"/",e.jsx(n.code,{children:"reportInterval"}),"/",e.jsx(n.code,{children:"appId"}),"/",e.jsx(n.code,{children:"beforeReport"}),"/",e.jsx(n.code,{children:"afterReport"})]}),`
`,e.jsxs(n.li,{children:["依次 ",e.jsx(n.code,{children:"new"})," 9 个子监控器，各自接收对应配置切片：ErrorMonitor（错误类型开关+过滤器）、PageLifecycleMonitor（无参）、JankMonitor（卡顿阈值）、WebVitalsMonitor（reportAllChanges）、FpsMonitor（无参）、LongTaskMonitor（无参）、ResourceMonitor（资源过滤器）、BehaviorMonitor（行为类型开关+上限）、RequestMonitor（请求回调+URL 过滤+超时阈值）"]}),`
`,e.jsxs(n.li,{children:["RequestMonitor 的 ",e.jsx(n.code,{children:"onRequest"})," 回调在构造时就绑定了 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.REQUEST, request)"}),"，即请求完成时直接上报；",e.jsx(n.code,{children:"onError"})," 回调仅在 ",e.jsx(n.code,{children:"error.requestError"})," 配置开启时传入"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"start() 启动详细流程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["三重守卫：",e.jsx(n.code,{children:"if (this.running) return"})," → ",e.jsx(n.code,{children:"if (!this.config.enabled) return"})," → ",e.jsx(n.code,{children:"if (!this.shouldSample()) return"})]}),`
`,e.jsxs(n.li,{children:["设置 ",e.jsx(n.code,{children:"this.running = true"})]}),`
`,e.jsxs(n.li,{children:["解构 ",e.jsx(n.code,{children:"{ performance, error, request, behavior, lifecycle }"})," 配置"]}),`
`,e.jsxs(n.li,{children:["性能监控组（",e.jsx(n.code,{children:"performance?.enabled"}),"）：",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"webVitals"})," → ",e.jsx(n.code,{children:"webVitalsMonitor.observe(callback)"})," — callback 内 ",e.jsx(n.code,{children:"reportPerformance(PERFORMANCE_TYPE.WEB_VITALS, metric)"})," + ",e.jsx(n.code,{children:"hooks.onMetric?.(metric)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resource"})," → ",e.jsx(n.code,{children:"resourceMonitor.observe(callback)"})," — callback 内 ",e.jsx(n.code,{children:"reportPerformance(PERFORMANCE_TYPE.RESOURCE, resources)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"longTask"})," → ",e.jsx(n.code,{children:"longTaskMonitor.observe(callback, { threshold })"})," — callback 内 ",e.jsx(n.code,{children:"reportPerformance(PERFORMANCE_TYPE.LONG_TASK, task)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fps"})," → ",e.jsx(n.code,{children:"fpsMonitor.observe(callback)"})," — callback 内 ",e.jsx(n.code,{children:"reportPerformance(PERFORMANCE_TYPE.FPS, fps)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"jank"})," → ",e.jsx(n.code,{children:"jankMonitor.observe(callback)"})," — callback 内 ",e.jsx(n.code,{children:"reportPerformance(PERFORMANCE_TYPE.JANK, jankInfo)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigation !== false"})," → ",e.jsx(n.code,{children:"onWindowLoaded(() => reportPerformance(PERFORMANCE_TYPE.NAVIGATION, getNavigationMetrics()))"})," — 等待页面 load 后再获取导航指标"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["错误监控（",e.jsx(n.code,{children:"error?.enabled"}),"）：",e.jsx(n.code,{children:"errorMonitor.observe(errorCallback)"})," — errorCallback 内 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.ERROR, error)"})," + ",e.jsx(n.code,{children:"hooks.onError?.(error)"})]}),`
`,e.jsxs(n.li,{children:["请求监控（",e.jsx(n.code,{children:"request?.enabled"}),"）：分别调用 ",e.jsx(n.code,{children:"requestMonitor.observeXHR()"})," 和 ",e.jsx(n.code,{children:"requestMonitor.observeFetch()"})," 劫持原生 API"]}),`
`,e.jsxs(n.li,{children:["行为监控（",e.jsx(n.code,{children:"behavior?.enabled"}),"）：",e.jsx(n.code,{children:"behaviorMonitor.observe(callback)"})," — callback 内 ",e.jsx(n.code,{children:"reporter.report(REPORT_TYPE.BEHAVIOR, [behavior])"})]}),`
`,e.jsxs(n.li,{children:["生命周期监控（",e.jsx(n.code,{children:"lifecycle?.enabled"}),"）：",e.jsx(n.code,{children:"pageLifecycleMonitor.observe()"})," — 注册 14 种页面事件"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"stop() 停止详细流程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if (!this.running) return"})," 防止重复停止"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"this.running = false"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.stoppers.forEach((fn) => fn())"})," 逐一调用所有 stopper（取消 PerformanceObserver、cancelAnimationFrame、removeEventListener 等）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.stoppers.length = 0"})," 清空数组"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.requestMonitor.stop()"})," 额外调用恢复被劫持的 ",e.jsx(n.code,{children:"XMLHttpRequest.prototype"})," 和 ",e.jsx(n.code,{children:"window.fetch"})," 原型"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"上报数据结构"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["每条上报数据由 Reporter 自动附加元信息：",e.jsx(n.code,{children:"{ type, appId, sessionId, pageId, timestamp, pageInfo: { url, title, referrer, ... }, data }"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sessionId"})," 基于 ",e.jsx(n.code,{children:"sessionStorage"})," 生成的会话级唯一 ID（同一标签页生命周期内不变）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pageId"})," 基于 ",e.jsx(n.code,{children:"uniqueId()"})," 生成的页面级唯一 ID（每次创建 Reporter 时生成新值）"]}),`
`,e.jsxs(n.li,{children:["性能数据额外包装为 ",e.jsx(n.code,{children:"{ metricType: PERFORMANCE_TYPE, metrics: ... }"})," 结构"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"批量上报机制"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Reporter 内部使用 ",e.jsx(n.code,{children:"createBatch<ReportData>(send, { batchSize, batchDelay })"})," 创建批处理器"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"report()"})," 调用 ",e.jsx(n.code,{children:"batch.add([reportData])"})," 将数据推入缓冲区"]}),`
`,e.jsxs(n.li,{children:["当缓冲数量达到 ",e.jsx(n.code,{children:"batchSize"}),"（默认 10）或等待时间达到 ",e.jsx(n.code,{children:"batchDelay"}),"（= ",e.jsx(n.code,{children:"reportInterval"}),"，默认 5000ms）时触发 ",e.jsx(n.code,{children:"send(items)"})," 批量发送"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"immediate = true"})," 时跳过缓冲直接发送（用于关键错误等场景）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bindLifecycle()"})," 在 ",e.jsx(n.code,{children:"beforeunload"})," 和 ",e.jsx(n.code,{children:"visibilitychange(hidden)"})," 时自动 ",e.jsx(n.code,{children:"batch.flush()"})," 确保数据不丢失"]}),`
`,e.jsxs(n.li,{children:["发送前逐条执行 ",e.jsx(n.code,{children:"beforeReport"})," 钩子（返回 false 丢弃该条），发送后逐条执行 ",e.jsx(n.code,{children:"afterReport(item, success)"})," 钩子"]}),`
`]}),`
`]}),`
`]})]})}function E(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{E as default};
