# 数据、格式化、通用 helper

## 数据安全与大小估算

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `estimateBytes` | `src/estimateBytes` | 估算字符串或可序列化对象的 UTF-8 字节数。 |
| `safeStringify` | `src/safeStringify` | JSON 序列化兜底，避免循环引用或异常直接打断流程。 |
| `truncateText` | `src/truncateText` | 按最大长度硬截断文本，不追加省略号，适合日志、URL、payload 字段限制。 |
| `formatBytes` | `src/formatBytes` | 字节数格式化展示。 |

## URL 与字符串格式化

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `parseUrl` 系列 | `src/parseUrl` | URL 解析、query 获取/设置/删除、构建 URL。 |
| `formatCode` | `src/formatCode` | 代码格式化。 |
| `formatStack` | `src/formatStack` | 错误栈格式化。 |
| `matchPattern` | `src/matchPattern` | URL 或字符串模式匹配。 |

## DOM 属性合并

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `mergeClass` | `src/mergeClass` | className 合并。 |
| `mergeStyle` | `src/mergeStyle` | style 对象合并。 |
| `mergeChildren` | `src/mergeChildren` | children 合并。 |
| `mergeQueryParams` | `src/mergeQueryParams` | query 参数合并。 |

## 函数调度

| 工具 | 路径 | 复用场景 |
| --- | --- | --- |
| `debounce` / `createDebounceFn` | `src/debounce`, `src/createDebounceFn` | 防抖。 |
| `throttle` / `createThrottleFn` | `src/throttle`, `src/createThrottleFn` | 节流。 |
| `createUpdateEffect` | `src/createUpdateEffect` | 跳过首次执行的 effect 工厂。 |
| `createEffectWithTarget` | `src/createEffectWithTarget` | target 绑定类 effect 工厂。 |

## 约定

- 只要已有 helper 覆盖 80% 场景，优先复用并在当前工具补足特定逻辑。
- 被两个以上模块重复需要的 helper，优先抽到独立工具目录并补导出、Storybook、索引。
