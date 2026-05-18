# element-utils 协作规范

本包改动默认遵循仓库根目录 `AGENTS.md`，并叠加以下规则。

## 开发入口

- 修改 `packages/element-utils/src/**` 或 `stories/element-utils/**` 时，先遵循仓库根目录 `AGENTS.md` 中的 package 通用开发入口。
- 开始实现前先读 `docs/tool-index/README.md`，再按能力类别打开对应索引文件，确认是否已有工具可复用。

## 复用优先级

- 本包已有能力优先从相邻工具直接 import，例如 `isBrowser`、`supportPerformanceObserver`、`estimateBytes`、`safeStringify`。
- importable TS 模块中不要重复写浏览器环境判断；需要判断 `window` / `document` 时用 `isBrowser()`，需要判断具体 Web API 时优先找 `support*` 工具。
- copy-only script 例外：例如 `earlyErrorQueue/script.tsx` 目标是复制成 inline script，不能依赖包内 import，可保留自包含实现。
- 如果发现可复用能力缺失，优先抽成小工具并补充导出、Storybook 和工具索引。

## 类型和默认值

- `interface.ts` 只放调用方会 import 的公共协议：配置项、返回值、事件 payload、枚举、公共默认常量。
- 函数内部 store、闭包状态、完整配置合并结果、临时中间结构、helper 私有返回类型，放在使用它的文件内或由返回值推断。
- 简单默认值合并不要单独建 `defaultOptions.ts`；默认常量可放在 `interface.ts`，合并逻辑靠近消费函数。
- 如果只是 `options.foo ?? DEFAULT_FOO` 的线性合并，不要额外拆 `createFullOptions`、`getDefaultOptions`、`normalizeOptions` helper；直接在消费函数内维护局部对象。

## 实例状态和 core 边界

- 对外暴露 class 的工具，队列、Map、计数器、计时器、observer、实例配置和生命周期时间戳等实例状态放在 class 私有字段中统一维护。
- `core/**` 默认只放无实例状态、无环境副作用的逻辑 helper；不要在 core 里导出持有队列、Map、计数器等状态的闭包工厂，再让 class 做薄包装。
- 需要访问浏览器全局、DOM、网络或存储的 helper 放到 `browser/**`、`transport/**` 等明确目录，并在 Storybook 中说明副作用，不要和实例状态容器或纯逻辑 helper 混在一起。

## Storybook 文档

- `介绍.mdx` 默认面向开发者，必须讲清数据结构、数据流、模块职责、关键函数、边界行为和实现取舍。
- 每个 Storybook 文件都要在文档中说明职责：`index.stories.ts`、`index.tsx`、demo 文件、`介绍.mdx`。
- demo 文件只演示一个能力；源码展示使用 `?raw` 和 `CodeOrSourceMdx`，避免手抄代码导致文档漂移。

## 索引维护

- 新增、重命名、删除工具时，同步更新 `docs/tool-index/README.md` 和对应分组索引。
- 索引写“能力和复用提示”，不写完整 API 文档；详细行为放 Storybook。
