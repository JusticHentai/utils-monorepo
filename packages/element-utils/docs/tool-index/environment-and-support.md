# 环境判断与能力探测

## 浏览器环境

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `isBrowser` | `src/isBrowser` | 判断 `window` 和 `document` 是否存在。importable TS 模块里不要直接写 `typeof window === 'undefined'`。 |
| `isAppleDevice` | `src/isAppleDevice` | 判断 Apple 设备或平台相关分支。 |

## DOM 与对象判断

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `isElement` | `src/isElement` | 判断值是否为 DOM Element。 |
| `isPureElement` | `src/isPureElement` | 判断是否为真实 Element，不把 window/document 等混入。 |
| `isElementChildren` | `src/isElementChildren` | 判断元素子节点相关输入。 |
| `isScrollTarget` | `src/isScrollTarget` | 判断对象是否可作为滚动监听目标。 |
| `isHeaders` | `src/isHeaders` | 判断 Fetch `Headers` 对象。 |
| `isUrl` | `src/isUrl` | 判断 URL 字符串。 |
| `isSupportCss` | `src/isSupportCss` | 判断 CSS feature 支持。 |

## Web API support

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `supportIntersectionObserver` | `src/supportIntersectionObserver` | IntersectionObserver 能力探测。 |
| `supportMutationObserver` | `src/supportMutationObserver` | MutationObserver 能力探测。 |
| `supportResizeObserver` | `src/supportResizeObserver` | ResizeObserver 能力探测。 |
| `supportPerformanceObserver` | `src/supportPerformanceObserver` | PerformanceObserver 能力探测。 |
| `supportPerformanceEntryType` | `src/supportPerformanceObserver` | 判断指定 PerformanceEntry type 是否支持。 |
| `supportPassiveEvents` | `src/supportPassiveEvents` | 判断 addEventListener passive option 支持。 |
| `supportRequestAnimationFrame` | `src/supportRequestAnimationFrame` | `requestAnimationFrame` 能力探测。 |
| `supportRequestIdleCallback` | `src/supportRequestIdleCallback` | `requestIdleCallback` 能力探测。 |
| `supportTextEncoder` | `src/supportTextEncoder` | `TextEncoder` 能力探测，适合 UTF-8 字节估算等编码场景。 |
| `supportFetch` | `src/supportFetch` | `fetch` 能力探测，适合网络上报前的发送能力判断。 |
| `supportSendBeacon` | `src/supportSendBeacon` | `navigator.sendBeacon` 能力探测，适合页面卸载附近的上报分支判断。 |

## 约定

- importable TS 模块优先复用本页工具；不要散落 `typeof window`、`typeof document`。
- copy-only inline script 允许自包含判断，因为它不能依赖包内 import。
- 如果需要判断 `fetch`、`sendBeacon`、`localStorage` 等能力且没有现成工具，可先在当前模块内就近封装；被多处复用后再抽公共工具。
