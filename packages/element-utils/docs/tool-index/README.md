# element-utils 工具索引

这个索引用来减少重复实现。开始新增或改造工具前，先读本文件，再只打开相关分类文件。

## 使用方式

1. 先判断需求属于哪个能力域。
2. 打开对应分类索引，确认是否已有工具、support helper 或监控模块可复用。
3. 如果需要新增工具，完成实现后同步更新对应分类索引。

## 分类入口

| 能力域 | 先读文件 | 适用场景 |
| --- | --- | --- |
| 环境判断与能力探测 | `environment-and-support.md` | 浏览器环境、DOM 对象判断、Web API support 判断 |
| DOM、事件、观察器 | `dom-events-observers.md` | 事件监听、滚动、尺寸、元素变化、生命周期、虚拟列表 |
| 监控与性能 | `monitoring-performance.md` | 错误、资源、请求、行为、Web Vitals、长任务、卡顿、上报 |
| 数据、格式化、通用 helper | `data-format-helpers.md` | 字节估算、JSON 安全序列化、URL、class/style 合并、格式化 |
| React Hooks | `react-hooks.md` | `use*` hooks、状态、生命周期、定时器、事件类 hooks |

## 全局复用规则

- 判断 `window` / `document`：先用 `isBrowser()`。
- 判断具体 Web API：先找 `support*` 工具，例如 `supportResizeObserver()`。
- 估算 payload 大小：用 `estimateBytes()`。
- JSON 序列化且需要兜底：用 `safeStringify()`。
- DOM 事件监听：优先用 `createEventListener()` 或已有 `on*` 工具。
- 监控类需求：先看 `ErrorMonitor`、`RequestMonitor`、`ResourceMonitor`、`BehaviorMonitor`、`WebVitalsMonitor`、`earlyErrorQueue` 是否能组合。

## 维护边界

- 本索引只记录“已有能力和复用方向”，不替代 Storybook 文档。
- 工具详细数据结构、数据流、参数、边界行为，应写在 `stories/element-utils/{toolName}/介绍.mdx`。
