# React Hooks

## 状态类

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `useBoolean` | `src/useBoolean` | boolean 状态和 setTrue/setFalse/toggle。 |
| `useToggle` | `src/useToggle` | 两值切换。 |
| `useCounter` | `src/useCounter` | 数字计数。 |
| `useSetState` | `src/useSetState` | 对象状态 patch 更新。 |
| `useGetState` | `src/useGetState` | 获取最新 state。 |
| `useSafeState` | `src/useSafeState` | 卸载后避免 setState。 |
| `useResetState` | `src/useResetState` | 可重置状态。 |
| `usePrevious` | `src/usePrevious` | 上一次值。 |
| `useMap` | `src/useMap` | Map 状态。 |
| `useSet` | `src/useSet` | Set 状态。 |
| `useRafState` | `src/useRafState` | raf 合批 state。 |

## 生命周期与引用

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `useMount` | `src/useMount` | mount 时执行。 |
| `useUnmount` | `src/useUnmount` | unmount 时执行。 |
| `useUnmountedRef` | `src/useUnmountedRef` | 判断组件是否已卸载。 |
| `useUpdate` | `src/useUpdate` | 强制刷新。 |
| `useUpdateEffect` | `src/useUpdateEffect` | 跳过首次执行的 effect。 |
| `useCreation` | `src/useCreation` | 稳定创建复杂对象。 |
| `useLatest` | `src/useLatest` | 保存最新值引用。 |
| `useMemoizedFn` | `src/useMemoizedFn` | 稳定函数引用。 |

## 定时与频率控制

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `useDebounce` / `useDebounceValue` / `useDebounceEffect` | `src/useDebounce*` | 防抖值、函数或 effect。 |
| `useThrottle` / `useThrottleValue` / `useThrottleEffect` | `src/useThrottle*` | 节流值、函数或 effect。 |
| `useInterval` / `useTimeout` | `src/useInterval`, `src/useTimeout` | 定时器。 |
| `useRafInterval` / `useRafTimeout` | `src/useRafInterval`, `src/useRafTimeout` | raf 驱动定时。 |
| `useCountDown` | `src/useCountDown` | 倒计时。 |
| `useLockFn` | `src/useLockFn` | 异步函数并发锁。 |

## DOM 与交互

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `useEventListener` | `src/useEventListener` | React 中绑定事件。 |
| `useClickAway` | `src/useClickAway` | 点击外部。 |
| `useHover` | `src/useHover` | hover 状态。 |
| `useDocumentVisibility` | `src/useDocumentVisibility` | document visibility。 |
| `useSize` | `src/useSize` | 元素尺寸。 |
| `useScroll` | `src/useScroll` | 滚动位置。 |
| `useKeyPress` | `src/useKeyPress` | 按键监听。 |
| `useStorageState` | `src/useStorageState` | local/session storage 状态。 |
| `useDoubleClick` | `src/useDoubleClick` | 双击识别。 |
| `useConditionalOnce` | `src/useConditionalOnce` | 条件满足后只执行一次。 |
| `useMergeProps` | `src/useMergeProps` | props 合并。 |

## 约定

- Hook story demo 使用 `.tsx`，并在 React 组件上下文中调用目标 hook。
- 非 Hook 工具不要为了 Storybook 演示而包成 hook；只在目标工具本身是 hook 时使用 hook demo 结构。
