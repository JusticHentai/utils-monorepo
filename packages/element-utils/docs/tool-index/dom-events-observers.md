# DOM、事件、观察器

## 事件监听

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `createEventListener` | `src/createEventListener` | 通用事件绑定与清理。 |
| `onClickOutside` | `src/onClickOutside` | 点击目标外部。 |
| `onKeyPress` | `src/onKeyPress` | 键盘按键监听。 |
| `onScroll` | `src/onScroll` | 滚动监听，内部结合 passive 支持。 |
| `onWindowResize` | `src/onWindowResize` | window resize 监听。 |
| `onWindowFocus` / `onWindowBlur` | `src/onWindowFocus`, `src/onWindowBlur` | 页面焦点变化。 |
| `onDOMContentLoaded` / `onWindowLoaded` | `src/onDOMContentLoaded`, `src/onWindowLoaded` | 页面加载阶段。 |
| `onHashChange` / `onPopState` | `src/onHashChange`, `src/onPopState` | 路由相关事件。 |
| `onUnload` / `onPageUnload` | `src/onUnload`, `src/onPageUnload` | 页面卸载。 |

## 页面生命周期

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `onBFCacheRestore` | `src/onBFCacheRestore` | BFCache restore。 |
| `onPageFreeze` / `onPageResume` | `src/onPageFreeze`, `src/onPageResume` | 页面冻结与恢复。 |
| `onPageHide` / `onPageShow` | `src/onPageHide`, `src/onPageShow` | pagehide/pageshow。 |
| `PageLifecycleMonitor` | `src/PageLifecycleMonitor` | 统一页面生命周期监听。 |
| `visibility` | `src/visibility` | document visibility 状态。 |

## DOM 观察与尺寸

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `observer` helpers | `src/observer` | 创建 Intersection/Mutation/Performance/Resize observer。 |
| `onAttributeChange` | `src/onAttributeChange` | 监听属性变化。 |
| `onChildListChange` | `src/onChildListChange` | 监听子节点变化。 |
| `onTextContentChange` | `src/onTextContentChange` | 监听文本变化。 |
| `onElementResize` | `src/onElementResize` | 监听元素 resize。 |
| `onWidthChange` / `onHeightChange` | `src/onWidthChange`, `src/onHeightChange` | 单维度尺寸变化。 |
| `resize` | `src/resize` | resize 相关通用处理。 |

## 元素信息与滚动

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `getElementInfo` | `src/getElementInfo` | 读取元素结构和基础信息。 |
| `getElementSize` | `src/getElementSize` | 读取元素尺寸。 |
| `getWindowSize` | `src/getWindowSize` | 读取窗口尺寸。 |
| `getScrollPosition` | `src/getScrollPosition` | 读取滚动位置。 |
| `getScrollDirection` | `src/getScrollDirection` | 判断滚动方向。 |
| `scrollBottom` | `src/scrollBottom` | 滚动到底部。 |
| `getXPath` | `src/getXPath` | 生成元素 XPath。 |
| `onEnterViewport` / `onLeaveViewport` | `src/onEnterViewport`, `src/onLeaveViewport` | 进入/离开视口。 |
| `virtualList` | `src/virtualList` | 虚拟列表。 |

## 资源与渲染辅助

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `loadImage` | `src/loadImage` | 图片加载。 |
| `loadFont` | `src/loadFont` | 字体加载。 |
| `Canvas` | `src/Canvas` | Canvas 封装。 |
| `FrameAnimation` | `src/FrameAnimation` | 帧动画控制。 |
| `addClipboard` | `src/addClipboard` | 剪贴板写入。 |
