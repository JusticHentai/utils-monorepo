# 监控与性能

## 监控模块

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `EarlyErrorQueue` | `src/earlyErrorQueue` | SDK 初始化前错误缓存、接管、补上下文和上报。 |
| `ErrorMonitor` | `src/ErrorMonitor` | 运行期 JS、Promise、资源错误监听。 |
| `RequestMonitor` | `src/RequestMonitor` | 请求监控和请求统计。 |
| `ResourceMonitor` | `src/ResourceMonitor` | 静态资源性能和加载情况。 |
| `BehaviorMonitor` | `src/BehaviorMonitor` | 用户点击、输入、滚动等行为采集。 |
| `Reporter` | `src/Reporter` | 上报封装。 |
| `Surveillance` | `src/Surveillance` | 综合监控编排。 |

## Web Vitals 与性能指标

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `WebVitalsMonitor` / `observeWebVitals` | `src/WebVitalsMonitor` | 统一观察 Web Vitals。 |
| `onLCP` / `onFID` / `onCLS` / `onFCP` / `onFP` / `onINP` / `onTTFB` | `src/on*` | 单个性能指标观察。 |
| `LongTaskMonitor` | `src/LongTaskMonitor` | Long Task 观察与统计。 |
| `JankMonitor` / `onJank` | `src/JankMonitor` | 卡顿检测。 |
| `FpsMonitor` | `src/FpsMonitor` | FPS 统计。 |
| `getMetricRating` | `src/getMetricRating` | 指标评级。 |
| `getNavigationMetrics` | `src/getNavigationMetrics` | Navigation Timing 指标。 |
| `getNavigationType` | `src/getNavigationType` | 导航类型。 |
| `getPaintMetrics` | `src/getPaintMetrics` | Paint Timing 指标。 |
| `getPageInfo` | `src/getPageInfo` | 页面 URL、标题、内存等信息。 |
| `performanceMark` | `src/performanceMark` | Performance mark/measure 辅助。 |

## 监控辅助

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `sessionId` | `src/sessionId` | 会话标识。 |
| `uniqueId` | `src/uniqueId` | 唯一 ID。 |
| `shouldSample` | `src/shouldSample` | 采样判断。 |
| `formatStack` | `src/formatStack` | 错误栈格式化。 |
| `logger` | `src/logger` | 日志输出。 |

## 约定

- 新监控需求先判断能否组合已有 monitor，而不是另起一套事件监听。
- 涉及 PerformanceObserver 时优先复用 `supportPerformanceObserver` 和 `supportPerformanceEntryType`。
- 上报 payload 大小估算使用 `estimateBytes`；JSON 兜底序列化使用 `safeStringify`。
