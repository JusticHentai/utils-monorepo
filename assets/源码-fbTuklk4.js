import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-C_s77IFb.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"earlyerrorqueue-源码",children:"earlyErrorQueue 源码"}),`
`,e.jsx(n.p,{children:"这一页按真实源码执行顺序拆解。每一节都是“短代码块 + 紧邻解释”，避免先贴一大段文件再让读者自己找对应关系。"}),`
`,e.jsx(n.h2,{id:"本页解释粒度",children:"本页解释粒度"}),`
`,e.jsx(n.p,{children:"每个核心片段都按开发者调试源码时真正会问的问题解释："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"这个阶段的名字是什么意思，避免只写“清洗”“拒绝”“兜底”这类没有定义的词。"}),`
`,e.jsx(n.li,{children:"这段读取了哪些入参、class 字段、Map、数组、全局对象或 helper 返回值。"}),`
`,e.jsxs(n.li,{children:["这段会不会修改 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"}),"，如果不修改也明确说出来。"]}),`
`,e.jsx(n.li,{children:"数据从什么形状变成什么形状，例如原始错误事件变成脱敏、截断后的事件。"}),`
`,e.jsxs(n.li,{children:["返回值代表什么业务语义，例如 ",e.jsx(n.code,{children:"false"})," 是“没有入队”，不是网络失败。"]}),`
`,e.jsx(n.li,{children:"空值、重复、超限、取消发送、能力不存在这些边界分支具体怎么走。"}),`
`]}),`
`,e.jsx(n.h2,{id:"阅读顺序",children:"阅读顺序"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"顺序"}),e.jsx("th",{children:"文件"}),e.jsx("th",{children:"要先理解的问题"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsx("code",{children:"index.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["class 私有字段在哪里创建，",e.jsx("code",{children:"push/take/peek/clear"})," ",`
如何读写队列状态。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"core/sanitizeEvent.ts"}),"、",e.jsx("code",{children:"sanitizeUrl.ts"}),`、
`,e.jsx("code",{children:"getErrorKey.ts"})]})}),e.jsx("td",{children:"入队前如何截断、脱敏，以及重复错误如何生成稳定 key。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:e.jsx("code",{children:"browser/takeGlobalEarlyErrors.ts"})}),e.jsx("td",{children:"SDK 初始化后如何读取并停止 inline bootstrap。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:e.jsx("code",{children:"transport/sendEarlyErrorPayload.ts"})}),e.jsx("td",{children:"发送分支、失败兜底和返回统计。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:e.jsx("code",{children:"browser/enrichEarlyErrors.ts"})}),e.jsx("td",{children:"被消费的队列事件如何补齐初始化后的业务上下文。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"browser/createBaseEvent.ts"}),`、
`,e.jsx("code",{children:"core/normalizeUnknownError.ts"}),`、
`,e.jsx("code",{children:"browser/createEvents.ts"}),`、
`,e.jsx("code",{children:"browser/enrichEarlyErrors.ts"})]})}),e.jsx("td",{children:"事件从浏览器输入变成队列事件，再变成上报事件的过程。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:e.jsx("code",{children:"script.tsx"})}),e.jsx("td",{children:"copy-only inline script 为什么自包含，以及它暴露什么全局协议。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:e.jsx("code",{children:"interface.ts"})}),e.jsx("td",{children:"哪些类型和常量属于公共协议，哪些内部结构不应该放出来。"})]})]})]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue依赖",children:"EarlyErrorQueue：依赖"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import estimateBytes from '../estimateBytes'
import enrichEarlyErrors from './browser/enrichEarlyErrors'
import getErrorKey from './core/getErrorKey'
import sanitizeEvent from './core/sanitizeEvent'
import sendEarlyErrorPayload from './transport/sendEarlyErrorPayload'
import takeGlobalEarlyErrors from './browser/takeGlobalEarlyErrors'
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EarlyErrorQueue"})," 是队列实例状态的唯一容器。这里的“实例状态”指会随着一次队列实例生命周期变化的字段，例如数组、去重索引、字节数和丢弃计数。"]}),`
`,e.jsx(n.p,{children:"这些 import 分成三类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["纯逻辑 helper：",e.jsx(n.code,{children:"sanitizeEvent"}),"、",e.jsx(n.code,{children:"getErrorKey"}),"。它们只根据入参返回结果，不读写 class 字段，也不触碰浏览器全局。"]}),`
`,e.jsxs(n.li,{children:["实例状态 helper：",e.jsx(n.code,{children:"estimateBytes(this.queue)"}),"。它不自己保存状态，只返回字节估算结果，由 class 写入 ",e.jsx(n.code,{children:"this.bytes"}),"。"]}),`
`,e.jsxs(n.li,{children:["effect 边界：",e.jsx(n.code,{children:"takeGlobalEarlyErrors"})," 会读 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"}),"，",e.jsx(n.code,{children:"sendEarlyErrorPayload"})," 会发网络请求，",e.jsx(n.code,{children:"enrichEarlyErrors"})," 会读当前路由和时间；这些不放在 ",e.jsx(n.code,{children:"core/**"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"这段 import 本身不产生副作用。真正读写状态发生在后面的 class 方法里。"}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue内部配置类型",children:"EarlyErrorQueue：内部配置类型"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type EarlyErrorQueueRuntimeOptions = {
  maxCount: number
  maxBytes: number
  maxAge: number
  maxStackLength: number
  maxMessageLength: number
  maxHtmlLength: number
  sensitiveKeys: RegExp
  beforeEnqueue: EarlyErrorQueueOptions['beforeEnqueue']
}
`})}),`
`,e.jsxs(n.p,{children:["这个类型只服务 class 内部，所以留在 ",e.jsx(n.code,{children:"index.ts"})," 就近定义。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EarlyErrorQueueOptions"})," 是调用方传入的公共配置，允许字段缺省。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EarlyErrorQueueRuntimeOptions"})," 是 constructor 合并默认值后的内部配置，除 ",e.jsx(n.code,{children:"beforeEnqueue"})," 以外都变成必填。"]}),`
`,e.jsx(n.li,{children:"它不会被 export，因为业务代码不应该依赖“内部已经补齐默认值”的结构。"}),`
`]}),`
`,e.jsxs(n.p,{children:["后续 ",e.jsx(n.code,{children:"push"}),"、",e.jsx(n.code,{children:"trimQueue"}),"、",e.jsx(n.code,{children:"sanitizeEvent"})," 都读取 ",e.jsx(n.code,{children:"this.options"}),"；没有任何方法会重新写它，所以一个队列实例的容量和清洗规则在生命周期内固定。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue实例字段",children:"EarlyErrorQueue：实例字段"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export default class EarlyErrorQueue {
  private readonly options: EarlyErrorQueueRuntimeOptions
  private readonly installedAt = Date.now()
  private readonly queue: EarlyErrorEvent[] = []
  private readonly keys = new Map<string, EarlyErrorEvent>()
  private bytes = 0
  private dropped = 0
`})}),`
`,e.jsxs(n.p,{children:["这六个字段构成队列实例的全部状态，其中 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"})," 会随调用变化："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options"}),"：实例固定配置。constructor 写一次，后续只读。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"installedAt"}),"：实例创建时间。",e.jsx(n.code,{children:"push"})," 用它计算“队列已经活了多久”。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queue"}),"：按入队顺序保存去重后的代表事件。新事件从尾部进入，容量裁剪从头部移除旧事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys"}),"：去重索引。key 来自 ",e.jsx(n.code,{children:"getErrorKey"}),"，value 指向 ",e.jsx(n.code,{children:"queue"})," 里的同一个事件对象；这让重复事件可以直接更新已有对象。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes"}),"：当前队列的估算字节数。只通过 ",e.jsx(n.code,{children:"recalculateBytes"})," 或清空逻辑更新，不在多个分支里手动加减。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dropped"}),"：因容量裁剪丢弃的旧事件数。它不统计 ",e.jsx(n.code,{children:"maxAge"})," 超时拒绝，也不统计 ",e.jsx(n.code,{children:"beforeEnqueue"})," 返回 ",e.jsx(n.code,{children:"false"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["核心不变量是：只要事件还在 ",e.jsx(n.code,{children:"queue"})," 里，",e.jsx(n.code,{children:"keys"})," 也必须能用同一个 key 找到它；事件被裁剪、take 或 clear 时，这两个结构要一起更新。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue构造函数",children:"EarlyErrorQueue：构造函数"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`constructor(options: EarlyErrorQueueOptions = {}) {
  this.options = {
    maxCount: options.maxCount ?? DEFAULT_EARLY_ERROR_MAX_COUNT,
    maxBytes: options.maxBytes ?? DEFAULT_EARLY_ERROR_MAX_BYTES,
    maxAge: options.maxAge ?? DEFAULT_EARLY_ERROR_MAX_AGE,
    maxStackLength:
      options.maxStackLength ?? DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH,
    maxMessageLength:
      options.maxMessageLength ?? DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
    maxHtmlLength:
      options.maxHtmlLength ?? DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH,
    sensitiveKeys:
      options.sensitiveKeys ?? DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
    beforeEnqueue: options.beforeEnqueue,
  }
}
`})}),`
`,e.jsx(n.p,{children:"constructor 做两件事："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["读取调用方传入的 ",e.jsx(n.code,{children:"options"}),"。"]}),`
`,e.jsxs(n.li,{children:["对每个可选字段执行 ",e.jsx(n.code,{children:"options.foo ?? DEFAULT_FOO"}),"，把它补成 class 内部稳定使用的 ",e.jsx(n.code,{children:"this.options"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这里没有拆 ",e.jsx(n.code,{children:"createFullOptions"}),"。原因是每一项都是线性默认值合并，没有校验、派生字段或跨模块复用；拆 helper 会让读者多跳一层，却不会让主流程更清楚。"]}),`
`,e.jsxs(n.p,{children:["这个阶段只写 ",e.jsx(n.code,{children:"this.options"}),"。它不会写 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"}),"，所以创建实例时队列仍然是空的。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue字节重算",children:"EarlyErrorQueue：字节重算"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`private recalculateBytes = (): void => {
  this.bytes = estimateBytes(this.queue)
}
`})}),`
`,e.jsxs(n.p,{children:["这段只写 ",e.jsx(n.code,{children:"this.bytes"}),"，不修改 ",e.jsx(n.code,{children:"queue/keys/dropped"}),"。"]}),`
`,e.jsxs(n.p,{children:["这里选择“整体重算”，不是“每次入队加上新事件字节数”，原因是队列里的事件对象可能原地变化。例如重复错误命中后会直接改已有事件的 ",e.jsx(n.code,{children:"count"})," 和 ",e.jsx(n.code,{children:"lastSeen"}),"；容量裁剪也可能一次删除多条旧事件。整体重算虽然要遍历队列，但队列有 ",e.jsx(n.code,{children:"maxCount"})," 上限，复杂度可控，状态也更不容易算错。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue移除最旧事件",children:"EarlyErrorQueue：移除最旧事件"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`private removeFirst = (): void => {
  const removed = this.queue.shift()
  if (!removed) return

  this.keys.delete(getErrorKey(removed))
  this.dropped += 1
  this.recalculateBytes()
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removeFirst"})," 的语义是“容量裁剪时丢弃最旧事件”。它不是业务过滤，也不是读取队列。"]}),`
`,e.jsx(n.p,{children:"执行顺序是："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.queue.shift()"})," 取出最旧事件；队列为空时提前返回，没有状态变化。"]}),`
`,e.jsxs(n.li,{children:["用同一个事件重新算 key，并从 ",e.jsx(n.code,{children:"this.keys"})," 删除对应索引，保证 ",e.jsx(n.code,{children:"queue"})," 和 ",e.jsx(n.code,{children:"keys"})," 同步。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.dropped += 1"}),"，这是唯一增加 ",e.jsx(n.code,{children:"dropped"})," 的地方。"]}),`
`,e.jsxs(n.li,{children:["重算 ",e.jsx(n.code,{children:"bytes"}),"，让统计和后续容量判断使用最新队列内容。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回值是 ",e.jsx(n.code,{children:"void"}),"。调用方不靠返回值判断是否删除成功，而是依赖 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"})," 四个状态被同步更新。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue容量裁剪",children:"EarlyErrorQueue：容量裁剪"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`private trimQueue = (): void => {
  this.recalculateBytes()

  while (
    this.queue.length > this.options.maxCount ||
    this.bytes > this.options.maxBytes
  ) {
    this.removeFirst()
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"trimQueue"})," 的语义是“把队列裁剪回配置允许的大小”。它只在新事件入队后调用。"]}),`
`,e.jsx(n.p,{children:"执行顺序是："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["先调用 ",e.jsx(n.code,{children:"recalculateBytes()"}),"，让 ",e.jsx(n.code,{children:"this.bytes"})," 反映当前完整队列。"]}),`
`,e.jsxs(n.li,{children:["只要条数超过 ",e.jsx(n.code,{children:"maxCount"}),"，或者字节数超过 ",e.jsx(n.code,{children:"maxBytes"}),"，就调用 ",e.jsx(n.code,{children:"removeFirst()"})," 删除队头旧事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeFirst()"})," 每删一次都会同步更新 ",e.jsx(n.code,{children:"keys/dropped/bytes"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"最终要保证两个不变量同时成立："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"this.queue.length <= this.options.maxCount"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"this.bytes <= this.options.maxBytes"})}),`
`]}),`
`,e.jsxs(n.p,{children:["边界情况：如果刚入队的新事件本身就超过 ",e.jsx(n.code,{children:"maxBytes"}),"，队列可能把它也裁掉；当前 ",e.jsx(n.code,{children:"push"})," 仍会返回 ",e.jsx(n.code,{children:"true"}),"，表示事件通过了入队流程，但最后没有被缓存下来。",e.jsx(n.code,{children:"dropped"})," 会记录这次容量裁剪。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue统计快照",children:"EarlyErrorQueue：统计快照"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`private getStats = (): EarlyErrorQueueStats => ({
  count: this.queue.length,
  bytes: this.bytes,
  dropped: this.dropped,
})
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getStats"})," 是 class 私有方法，不作为 public API 暴露。它读取的是当前内存状态："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"count"}),"：当前 ",e.jsx(n.code,{children:"queue.length"}),"，也就是还没被消费的代表事件数量。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes"}),"：最近一次重算后的估算字节数。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dropped"}),"：实例生命周期内因容量裁剪丢弃的旧事件数量。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["它不修改任何状态。",e.jsx(n.code,{children:"createPayload"})," 会在调用 ",e.jsx(n.code,{children:"take()"})," 之前先读它，所以 payload 里的 stats 描述的是“消费前的队列状态”，不是清空后的状态。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueuepush-的入队前过滤与字段清洗",children:"EarlyErrorQueue：push 的入队前过滤与字段清洗"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`push = (event: EarlyErrorEvent): boolean => {
  if (Date.now() - this.installedAt > this.options.maxAge) return false

  const sanitizedEvent = sanitizeEvent(event, this.options)
  const filteredEvent = this.options.beforeEnqueue
    ? this.options.beforeEnqueue(sanitizedEvent)
    : sanitizedEvent

  if (!filteredEvent) return false
`})}),`
`,e.jsxs(n.p,{children:["这段发生在真正写入 ",e.jsx(n.code,{children:"queue"})," 之前，所以叫“入队前过滤与字段清洗”。"]}),`
`,e.jsx(n.p,{children:"术语先定义清楚："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“过滤”指决定这个事件是否允许继续进入队列流程。"}),`
`,e.jsxs(n.li,{children:["“字段清洗”指对事件字段做脱敏、截断和兜底，例如 URL query 里的 token 被替换，",e.jsx(n.code,{children:"message/stack/outerHTML"})," 被限制长度。"]}),`
`,e.jsxs(n.li,{children:["“拒绝入队”指返回 ",e.jsx(n.code,{children:"false"}),"，并且不写 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"执行顺序是："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Date.now() - this.installedAt > this.options.maxAge"}),"：判断队列是否已经超过早期捕获窗口。超时直接 ",e.jsx(n.code,{children:"return false"}),"，不会调用 ",e.jsx(n.code,{children:"sanitizeEvent"}),"，也不会触发业务回调。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sanitizeEvent(event, this.options)"}),"：把原始事件转换成清洗后的事件。这个函数返回新对象，不写 class 状态。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"beforeEnqueue"}),"：业务侧最后一次过滤或改写机会。它接收的是已经清洗过的事件，不会拿到未脱敏 URL。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if (!filteredEvent) return false"}),"：业务返回 ",e.jsx(n.code,{children:"false"})," 时丢弃事件。这个丢弃不是容量裁剪，所以 ",e.jsx(n.code,{children:"dropped"})," 不增加。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["能走到下一段代码时，",e.jsx(n.code,{children:"filteredEvent"})," 一定是准备进入去重流程的事件。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueuepush-的重复错误合并分支",children:"EarlyErrorQueue：push 的重复错误合并分支"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const key = getErrorKey(filteredEvent)
const existingEvent = this.keys.get(key)

if (existingEvent) {
  existingEvent.count += 1
  existingEvent.lastSeen = filteredEvent.timestamp
  this.recalculateBytes()
  return true
}
`})}),`
`,e.jsxs(n.p,{children:["“重复错误”不是指两个对象完全相等，而是 ",e.jsx(n.code,{children:"getErrorKey(filteredEvent)"})," 生成的 key 已经存在于 ",e.jsx(n.code,{children:"this.keys"}),"。"]}),`
`,e.jsx(n.p,{children:"这段读取两个值："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filteredEvent"}),"：已经通过字段清洗和业务过滤的事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.keys"}),"：当前队列的去重索引。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["命中 ",e.jsx(n.code,{children:"existingEvent"})," 时，代码不会向 ",e.jsx(n.code,{children:"queue"})," 追加新项，只会原地更新已有代表事件："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"count += 1"})," 记录重复出现次数。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lastSeen = filteredEvent.timestamp"})," 记录最近一次出现时间。"]}),`
`,e.jsxs(n.li,{children:["重算 ",e.jsx(n.code,{children:"bytes"}),"，因为已有事件内容变了。"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"true"})," 表示这次事件被队列接受并合并。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这个分支不会修改 ",e.jsx(n.code,{children:"keys"})," 的条目数量，也不会修改 ",e.jsx(n.code,{children:"dropped"}),"。",e.jsx(n.code,{children:"queue.length"})," 保持不变。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueuepush-的新事件入队和容量裁剪",children:"EarlyErrorQueue：push 的新事件入队和容量裁剪"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  this.queue.push(filteredEvent)
  this.keys.set(key, filteredEvent)
  this.trimQueue()
  return true
}
`})}),`
`,e.jsx(n.p,{children:"未命中去重索引时，说明这个错误是当前队列里新的代表事件。"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.queue.push(filteredEvent)"})," 把事件放到队尾。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.keys.set(key, filteredEvent)"})," 建立去重索引，value 和队列项是同一个对象。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"this.trimQueue()"})," 负责容量限制，可能把队头旧事件移除。"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"true"})," 表示新事件已入队。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这里会写 ",e.jsx(n.code,{children:"queue"}),"、",e.jsx(n.code,{children:"keys"}),"，并且可能通过 ",e.jsx(n.code,{children:"trimQueue()"})," 间接写 ",e.jsx(n.code,{children:"bytes/dropped"}),"。如果队列超出 ",e.jsx(n.code,{children:"maxCount"})," 或 ",e.jsx(n.code,{children:"maxBytes"}),"，",e.jsx(n.code,{children:"trimQueue()"})," 会从最旧事件开始删，直到容量回到限制内。"]}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"true"})," 的含义是“事件通过了入队流程”。它不保证事件最终一定还留在队列里，因为极端情况下新事件本身超过 ",e.jsx(n.code,{children:"maxBytes"}),"，会被刚调用的 ",e.jsx(n.code,{children:"trimQueue()"})," 裁掉。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue接管-bootstrap-全局队列",children:"EarlyErrorQueue：接管 bootstrap 全局队列"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`captureGlobal = (): number => {
  const events = takeGlobalEarlyErrors()
  events.forEach((event) => this.push(event))
  return events.length
}
`})}),`
`,e.jsxs(n.p,{children:["这里的“接管”指完整 SDK 初始化完成后，把 inline bootstrap 在 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"})," 暂存的事件转移到当前 ",e.jsx(n.code,{children:"EarlyErrorQueue"})," 实例中。"]}),`
`,e.jsx(n.p,{children:"执行流程是："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"takeGlobalEarlyErrors()"})," 从 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"})," 取出并清空 inline 队列。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"events.forEach((event) => this.push(event))"})," 把每个事件重新走当前实例的入队流程，所以仍然会执行字段清洗、业务过滤、去重和容量裁剪。"]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"events.length"}),"，它表示“从全局队列读到了多少条原始事件”，不是最终成功留在当前队列里的数量。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["边界行为：如果 ",e.jsx(n.code,{children:"beforeEnqueue"})," 丢弃部分事件，或者容量裁剪删掉旧事件，",e.jsx(n.code,{children:"captureGlobal()"})," 的返回值不会反映这些变化。要看当前队列内容，应调用 ",e.jsx(n.code,{children:"peek()"}),"。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueuetakepeek-的消费式读取和只读快照",children:"EarlyErrorQueue：take/peek 的消费式读取和只读快照"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`take = (): EarlyErrorEvent[] => {
  const events = this.queue.slice()
  this.queue.length = 0
  this.keys.clear()
  this.bytes = 0
  return events
}

peek = (): EarlyErrorEvent[] => this.queue.slice()
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"take"})," 和 ",e.jsx(n.code,{children:"peek"})," 都返回数组浅拷贝，但语义完全不同："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"take"})," 是“消费式读取”。它先 ",e.jsx(n.code,{children:"slice"})," 出当前事件快照，再清空 ",e.jsx(n.code,{children:"queue"}),"、",e.jsx(n.code,{children:"keys"})," 和 ",e.jsx(n.code,{children:"bytes"}),"。用于上报前取走事件，避免同一批错误重复发送。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"peek"})," 是“只读快照”。它只返回 ",e.jsx(n.code,{children:"queue.slice()"}),"，不会清空队列，也不会修改 ",e.jsx(n.code,{children:"keys/bytes/dropped"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"两者返回的都是浅拷贝；数组是新的，但里面的事件对象不是深拷贝。调用方不应该修改返回事件对象后再假设队列内部完全不受影响。"}),`
`,e.jsx(n.h2,{id:"earlyerrorqueue主动清空",children:"EarlyErrorQueue：主动清空"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`clear = (): void => {
  this.queue.length = 0
  this.keys.clear()
  this.bytes = 0
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clear"})," 的语义是“主动放弃当前缓存”。它写三个状态："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queue.length = 0"}),"：丢弃当前所有事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys.clear()"}),"：清空去重索引，避免旧 key 影响后续事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes = 0"}),"：当前队列已经为空，字节估算同步归零。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["它不会重置 ",e.jsx(n.code,{children:"dropped"}),"。",e.jsx(n.code,{children:"dropped"})," 描述的是这个实例生命周期内发生过多少次容量裁剪；清空当前队列不等于清空生命周期统计。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueuecreatepayload-的消费队列和补上下文",children:"EarlyErrorQueue：createPayload 的消费队列和补上下文"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  createPayload = (
    options: Omit<
      FlushEarlyErrorsOptions,
      'url' | 'transport' | 'credentials'
    > = {}
  ): EarlyErrorPayload => {
    const reason = options.reason ?? EARLY_ERROR_FLUSH_REASON.INIT
    const context = options.context ?? {}
    const stats = this.getStats()
    const events = enrichEarlyErrors(this.take(), context, reason)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createPayload"})," 把“内存队列里的事实事件”转换成“可以发送给监控后端的 payload”。它会消费队列。"]}),`
`,e.jsx(n.p,{children:"这里的顺序很重要："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["先读 ",e.jsx(n.code,{children:"stats"}),"，此时队列还没被 ",e.jsx(n.code,{children:"take()"})," 清空，所以 ",e.jsx(n.code,{children:"count/bytes/dropped"})," 是消费前状态。"]}),`
`,e.jsxs(n.li,{children:["再调用 ",e.jsx(n.code,{children:"this.take()"}),"，读取并清空当前队列。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"enrichEarlyErrors"})," 给每个事件补 ",e.jsx(n.code,{children:"context"}),"、",e.jsx(n.code,{children:"flushReason"}),"、",e.jsx(n.code,{children:"flushedAt"})," 和 ",e.jsx(n.code,{children:"source"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回值里的 ",e.jsx(n.code,{children:"events"})," 是补齐上下文后的事件数组；",e.jsx(n.code,{children:"context"})," 是这次 flush 的上下文原值；",e.jsx(n.code,{children:"stats"})," 是消费前队列统计。"]}),`
`,e.jsxs(n.p,{children:["边界行为：调用 ",e.jsx(n.code,{children:"createPayload"})," 本身就会消费队列，即使后续没有发送。只想预览时要用 ",e.jsx(n.code,{children:"peek()"}),"，不要调用 ",e.jsx(n.code,{children:"createPayload()"}),"。"]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueueflush-的发送前处理和取消发送",children:"EarlyErrorQueue：flush 的发送前处理和取消发送"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  flush = async (options: FlushEarlyErrorsOptions) => {
    const payload = this.createPayload(options)
    const processedPayload = options.beforeSend
      ? options.beforeSend(payload)
      : payload

    if (!processedPayload) {
      return {
        success: false,
        transport: options.transport ?? EARLY_ERROR_TRANSPORT.FETCH,
        count: 0,
        bytes: 0,
      }
    }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"flush"})," 是完整发送入口。它先调用 ",e.jsx(n.code,{children:"createPayload(options)"}),"，所以第一步已经消费并清空队列；然后才执行发送前回调 ",e.jsx(n.code,{children:"beforeSend"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"beforeSend"})," 的语义是“发送前最后一次改写或取消 payload”："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["没传 ",e.jsx(n.code,{children:"beforeSend"}),"：直接发送原 payload。"]}),`
`,e.jsx(n.li,{children:"返回新的 payload：发送返回值。"}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"false"}),"：取消发送。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["因此 ",e.jsx(n.code,{children:"beforeSend"})," 返回 ",e.jsx(n.code,{children:"false"})," 时不会发请求，但队列已经在 ",e.jsx(n.code,{children:"createPayload"})," 阶段被清空，当前实现不会自动把事件放回队列。"]}),`
`,e.jsx(n.p,{children:"这个返回对象表示“本次发送被取消”，不是网络失败："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"success: false"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"count: 0"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bytes: 0"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transport"})," 使用调用方传入值，没有传则按 ",e.jsx(n.code,{children:"FETCH"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"earlyerrorqueueflush-的网络发送出口",children:"EarlyErrorQueue：flush 的网络发送出口"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/index.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`    return sendEarlyErrorPayload(
      options.url,
      processedPayload,
      options.transport,
      options.credentials
    )
  }
}
`})}),`
`,e.jsxs(n.p,{children:["这段不再读写 ",e.jsx(n.code,{children:"queue/keys/bytes/dropped"}),"，只把 payload 和发送配置交给 ",e.jsx(n.code,{children:"sendEarlyErrorPayload"}),"。"]}),`
`,e.jsx(n.p,{children:"从这里开始，关注点从“队列状态”切换为“网络发送结果”："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options.url"}),"：发送地址。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"processedPayload"}),"：经过 ",e.jsx(n.code,{children:"beforeSend"})," 后的 payload。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options.transport"}),"：发送通道，缺省由发送模块按 ",e.jsx(n.code,{children:"FETCH"})," 处理。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options.credentials"}),"：fetch 是否携带凭据。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["网络策略、空事件处理、beacon 降级都在 ",e.jsx(n.code,{children:"transport/sendEarlyErrorPayload.ts"})," 里完成。"]}),`
`,e.jsx(n.h2,{id:"takeglobalearlyerrors非浏览器保护与全局名配置",children:"takeGlobalEarlyErrors：非浏览器保护与全局名配置"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/takeGlobalEarlyErrors.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const DEFAULT_GLOBAL_NAME = '__EARLY_ERROR_QUEUE__'

const takeGlobalEarlyErrors = (
  options: TakeGlobalEarlyErrorsOptions = {}
): EarlyErrorEvent[] => {
  if (!isBrowser()) return []

  const { globalName = DEFAULT_GLOBAL_NAME, stopAfterTake = true } = options
`})}),`
`,e.jsx(n.p,{children:"这段是 effect 边界，会读取浏览器全局对象，所以第一步必须判断环境。"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBrowser()"})," 返回 ",e.jsx(n.code,{children:"false"}),"：直接返回空数组，不触碰 ",e.jsx(n.code,{children:"window"}),"，适合 SSR、测试或 Node 环境。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalName"})," 默认读取 ",e.jsx(n.code,{children:"__EARLY_ERROR_QUEUE__"}),"，和 ",e.jsx(n.code,{children:"script.tsx"})," 暴露的全局对象保持一致。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stopAfterTake"})," 默认 ",e.jsx(n.code,{children:"true"}),"，表示 SDK 接管后停止 bootstrap 继续监听。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这个函数不修改 ",e.jsx(n.code,{children:"EarlyErrorQueue"})," 实例状态。它只负责从 ",e.jsx(n.code,{children:"window"})," 拿数据，后续是否入队由 ",e.jsx(n.code,{children:"captureGlobal()"})," 决定。"]}),`
`,e.jsx(n.h2,{id:"takeglobalearlyerrors读取-window-队列并按配置停止监听",children:"takeGlobalEarlyErrors：读取 window 队列并按配置停止监听"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/takeGlobalEarlyErrors.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  const queue = (window as unknown as WindowWithEarlyErrorQueue)[globalName]
  if (!queue?.take) return []

  const events = queue.take()

  if (stopAfterTake) {
    queue.stop?.()
  }

  return events
}
`})}),`
`,e.jsxs(n.p,{children:["这里读的是 ",e.jsx(n.code,{children:"window[globalName]"}),"，不是 import 的模块状态。它和 copy-only script 通过全局协议通信。"]}),`
`,e.jsx(n.p,{children:"执行分支："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["全局对象不存在，或没有 ",e.jsx(n.code,{children:"take"}),"：返回空数组。"]}),`
`,e.jsxs(n.li,{children:["存在 ",e.jsx(n.code,{children:"take"}),"：调用 ",e.jsx(n.code,{children:"queue.take()"}),"，读取并清空 bootstrap 队列。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stopAfterTake"})," 为 ",e.jsx(n.code,{children:"true"}),"：调用 ",e.jsx(n.code,{children:"queue.stop?.()"}),"，移除 inline script 安装的监听器。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop"})," 不存在：可选链让调用跳过，不会抛错。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回的 ",e.jsx(n.code,{children:"events"})," 是 bootstrap 队列给出的事件数组。它还没有经过当前 ",e.jsx(n.code,{children:"EarlyErrorQueue"})," 实例的 ",e.jsx(n.code,{children:"sanitizeEvent/beforeEnqueue/getErrorKey/trimQueue"}),"。"]}),`
`,e.jsx(n.h2,{id:"sendearlyerrorpayloadfetch-发送的能力判断post-json-和异常兜底",children:"sendEarlyErrorPayload：fetch 发送的能力判断、POST JSON 和异常兜底"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/transport/sendEarlyErrorPayload.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const postByFetch = async (
  url: string,
  body: string,
  credentials?: RequestCredentials,
  keepalive = false
): Promise<boolean> => {
  if (!supportFetch()) return false

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      credentials,
      keepalive,
    })

    return response.ok
  } catch {
    return false
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"postByFetch"})," 是底层发送 helper，只返回布尔值，不抛异常给调用方："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"supportFetch()"})," 返回 ",e.jsx(n.code,{children:"false"})," 时直接返回 ",e.jsx(n.code,{children:"false"}),"，不重复写 ",e.jsx(n.code,{children:"typeof fetch"}),"。"]}),`
`,e.jsxs(n.li,{children:["网络异常被 ",e.jsx(n.code,{children:"catch"})," 吞掉并返回 ",e.jsx(n.code,{children:"false"}),"。"]}),`
`,e.jsxs(n.li,{children:["HTTP 请求完成后，以 ",e.jsx(n.code,{children:"response.ok"})," 判定成功。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keepalive"})," 由 beacon 降级分支传入，用于页面卸载附近的兜底发送。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"false"})," 的语义是“fetch 通道没有成功发送”，可能是能力不存在、网络异常或 HTTP 非 2xx；调用方不需要区分这些底层原因。"]}),`
`,e.jsx(n.h2,{id:"sendearlyerrorpayloadbeacon-发送的能力体积限制和失败返回",children:"sendEarlyErrorPayload：beacon 发送的能力、体积限制和失败返回"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/transport/sendEarlyErrorPayload.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const postByBeacon = (url: string, body: string, bytes: number): boolean => {
  if (!supportSendBeacon()) return false
  if (bytes > DEFAULT_KEEPALIVE_LIMIT) return false

  try {
    const blob = new Blob([body], { type: 'application/json' })
    return window.navigator.sendBeacon(url, blob)
  } catch {
    return false
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"postByBeacon"})," 用于页面隐藏或卸载附近的小 payload 发送。它也只返回布尔值。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"supportSendBeacon()"})," 返回 ",e.jsx(n.code,{children:"false"}),"：说明当前环境不能调用 ",e.jsx(n.code,{children:"navigator.sendBeacon"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes > DEFAULT_KEEPALIVE_LIMIT"}),"：payload 过大，不走 beacon，避免卸载阶段发送失败概率过高。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"new Blob"})," 或 ",e.jsx(n.code,{children:"sendBeacon"})," 抛异常：catch 后返回 ",e.jsx(n.code,{children:"false"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["失败不会抛出，而是返回 ",e.jsx(n.code,{children:"false"}),"，主函数会继续尝试 keepalive fetch 降级。"]}),`
`,e.jsx(n.h2,{id:"sendearlyerrorpayloadpayload-序列化字节估算和空事件分支",children:"sendEarlyErrorPayload：payload 序列化、字节估算和空事件分支"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/transport/sendEarlyErrorPayload.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const sendEarlyErrorPayload = async (
  url: string,
  payload: EarlyErrorPayload,
  transport: EARLY_ERROR_TRANSPORT = EARLY_ERROR_TRANSPORT.FETCH,
  credentials?: RequestCredentials
): Promise<EarlyErrorSendResult> => {
  const body = safeStringify(payload)
  const bytes = estimateBytes(body)

  if (payload.events.length === 0) {
    return {
      success: true,
      transport,
      count: 0,
      bytes,
    }
  }
`})}),`
`,e.jsx(n.p,{children:"主函数先做发送前准备："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"safeStringify(payload)"}),"：把 payload 转成 JSON 字符串；如果业务 ",e.jsx(n.code,{children:"context"})," 里混入循环引用或不可直接序列化的值，也不会让发送逻辑再抛错。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"estimateBytes(body)"}),"：估算真正要发出去的 JSON 字符串体积。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["空事件分支的语义是“flush 流程成功完成，但没有事件需要发给后端”。它不会发网络请求。这里的 ",e.jsx(n.code,{children:"bytes"})," 仍然是 payload JSON 的字节估算，不是 0。"]}),`
`,e.jsx(n.h2,{id:"sendearlyerrorpayloadbeacon-降级和-fetch-默认发送路径",children:"sendEarlyErrorPayload：beacon 降级和 fetch 默认发送路径"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/transport/sendEarlyErrorPayload.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (transport === EARLY_ERROR_TRANSPORT.BEACON) {
  const beaconSuccess = postByBeacon(url, body, bytes)
  if (beaconSuccess) {
    return {
      success: true,
      transport: EARLY_ERROR_TRANSPORT.BEACON,
      count: payload.events.length,
      bytes,
    }
  }

  const keepaliveSuccess = await postByFetch(url, body, credentials, true)
  return {
    success: keepaliveSuccess,
    transport: EARLY_ERROR_TRANSPORT.BEACON,
    count: payload.events.length,
    bytes,
  }
}

const success = await postByFetch(url, body, credentials)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BEACON"})," 分支先尝试 ",e.jsx(n.code,{children:"sendBeacon"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["成功：返回 ",e.jsx(n.code,{children:"success: true"}),"，",e.jsx(n.code,{children:"transport: BEACON"}),"。"]}),`
`,e.jsxs(n.li,{children:["失败：继续调用 ",e.jsx(n.code,{children:"postByFetch(url, body, credentials, true)"}),"，也就是 keepalive fetch。"]}),`
`,e.jsxs(n.li,{children:["keepalive fetch 的结果写入 ",e.jsx(n.code,{children:"success"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["注意：即使底层兜底用了 fetch，返回的 ",e.jsx(n.code,{children:"transport"})," 仍然是 ",e.jsx(n.code,{children:"BEACON"}),"。这里的 ",e.jsx(n.code,{children:"transport"})," 表示调用方选择的发送策略，不是最终成功的底层 API 名称。"]}),`
`,e.jsxs(n.p,{children:["非 ",e.jsx(n.code,{children:"BEACON"})," 分支直接走普通 fetch。两个分支最终都会返回同样结构的 ",e.jsx(n.code,{children:"EarlyErrorSendResult"}),"，便于调用方记录发送结果。"]}),`
`,e.jsx(n.h2,{id:"sanitizeevent共享字段的截断url-脱敏和兜底",children:"sanitizeEvent：共享字段的截断、URL 脱敏和兜底"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeEvent.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const sanitizeEvent = (
  event: EarlyErrorEvent,
  options: SanitizeEventOptions
): EarlyErrorEvent => {
  const message = truncateText(event.message, options.maxMessageLength)
  const pageUrl =
    sanitizeUrl(
      event.pageUrl,
      options.sensitiveKeys,
      options.maxMessageLength
    ) ?? ''
  const base = {
    ...event,
    message,
    pageUrl,
  }
`})}),`
`,e.jsx(n.p,{children:"这里的“字段清洗”具体指三类处理："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["截断：",e.jsx(n.code,{children:"message"})," 用 ",e.jsx(n.code,{children:"truncateText"})," 限制到 ",e.jsx(n.code,{children:"maxMessageLength"}),"。"]}),`
`,e.jsxs(n.li,{children:["脱敏：",e.jsx(n.code,{children:"pageUrl"})," 用 ",e.jsx(n.code,{children:"sanitizeUrl"})," 过滤敏感 query value，例如 token、session、password。"]}),`
`,e.jsxs(n.li,{children:["兜底：",e.jsx(n.code,{children:"sanitizeUrl"})," 可能返回 ",e.jsx(n.code,{children:"undefined"}),"，",e.jsx(n.code,{children:"?? ''"})," 保证最终 ",e.jsx(n.code,{children:"pageUrl"})," 是字符串。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这段先把共享字段的处理结果放到局部变量，再组装 ",e.jsx(n.code,{children:"base"}),"。这样对象字段只表达数据结构：保留原事件字段，再覆盖清洗后的 ",e.jsx(n.code,{children:"message/pageUrl"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"truncateText"})," 是包级公共工具：不追加省略号，",e.jsx(n.code,{children:"undefined"})," 会原样返回，适合错误消息、堆栈、URL 和 HTML 快照这类 payload 字段限制。"]}),`
`,e.jsx(n.h2,{id:"sanitizeeventjs-错误的定位字段清洗",children:"sanitizeEvent：JS 错误的定位字段清洗"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeEvent.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (event.type === EARLY_ERROR_TYPE.JS) {
  const filename = sanitizeUrl(
    event.filename,
    options.sensitiveKeys,
    options.maxMessageLength,
    base.pageUrl
  )
  const stack = truncateText(event.stack, options.maxStackLength)

  return {
    ...base,
    type: EARLY_ERROR_TYPE.JS,
    filename,
    lineno: event.lineno,
    colno: event.colno,
    stack,
  }
}
`})}),`
`,e.jsx(n.p,{children:"JS 错误分支处理运行时异常的定位字段："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filename"})," 可能带 query，所以走 ",e.jsx(n.code,{children:"sanitizeUrl"}),"；如果它是相对地址，用已经脱敏后的 ",e.jsx(n.code,{children:"base.pageUrl"})," 作为解析 base。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lineno/colno"})," 原样保留。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stack"})," 按 ",e.jsx(n.code,{children:"maxStackLength"})," 截断，避免单条堆栈占满队列字节预算。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"return"})," 对象里只放字段结构，不混入多参数清洗调用。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这段不修改传入的 ",e.jsx(n.code,{children:"event"})," 对象，而是返回一个带 ",e.jsx(n.code,{children:"type: JS"})," 的新对象。",e.jsx(n.code,{children:"base"})," 里的公共字段已经清洗过，分支里只补 JS 专属字段。"]}),`
`,e.jsx(n.h2,{id:"sanitizeevent资源错误的-url-和-dom-快照清洗",children:"sanitizeEvent：资源错误的 URL 和 DOM 快照清洗"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeEvent.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (event.type === EARLY_ERROR_TYPE.RESOURCE) {
  const resourceUrl = sanitizeUrl(
    event.resourceUrl,
    options.sensitiveKeys,
    options.maxMessageLength,
    base.pageUrl
  )
  const outerHTML = truncateText(event.outerHTML, options.maxHtmlLength)

  return {
    ...base,
    type: EARLY_ERROR_TYPE.RESOURCE,
    tagName: event.tagName,
    resourceUrl,
    outerHTML,
  }
}
`})}),`
`,e.jsxs(n.p,{children:["资源错误分支处理的是 ",e.jsx(n.code,{children:"<script>"}),"、",e.jsx(n.code,{children:"<img>"}),"、",e.jsx(n.code,{children:"<link>"})," 等静态资源加载失败："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName"})," 用来区分 ",e.jsx(n.code,{children:"script/img/link"})," 等来源。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resourceUrl"})," 做 query 脱敏；相对资源地址同样基于 ",e.jsx(n.code,{children:"base.pageUrl"})," 解析。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"outerHTML"})," 只保留短快照，避免把完整 DOM 片段放进内存队列。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这段返回的新对象仍然带 ",e.jsx(n.code,{children:"base"})," 公共字段。",e.jsx(n.code,{children:"outerHTML"})," 只是排查用快照，不需要完整保留；太长会增加内存占用和 payload 体积。"]}),`
`,e.jsx(n.h2,{id:"sanitizeeventpromise-拒绝和浏览器报告字段清洗",children:"sanitizeEvent：Promise 拒绝和浏览器报告字段清洗"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeEvent.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (event.type === EARLY_ERROR_TYPE.UNHANDLED_REJECTION) {
  const stack = truncateText(event.stack, options.maxStackLength)

  return {
    ...base,
    type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
    reasonType: event.reasonType,
    stack,
  }
}

const reportUrl = sanitizeUrl(
  event.reportUrl,
  options.sensitiveKeys,
  options.maxMessageLength,
  base.pageUrl
)

return {
  ...base,
  type: EARLY_ERROR_TYPE.BROWSER_REPORT,
  reportType: event.reportType,
  reportUrl,
  body: event.body,
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"UNHANDLED_REJECTION"})," 只保留标准化后的 ",e.jsx(n.code,{children:"reasonType"})," 和可选堆栈。它没有 ",e.jsx(n.code,{children:"filename/lineno/colno"}),"，所以分支里只截断 ",e.jsx(n.code,{children:"stack"}),"。"]}),`
`,e.jsxs(n.p,{children:["最后的 ",e.jsx(n.code,{children:"return"})," 是 ",e.jsx(n.code,{children:"BROWSER_REPORT"})," 分支，因为前面已经排除了 JS、RESOURCE 和 UNHANDLED_REJECTION。浏览器报告处理两类字段："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reportUrl"}),"：可能包含敏感 query，所以用 ",e.jsx(n.code,{children:"sanitizeUrl"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body"}),"：来自 Reporting API 的结构化数据，这里不深度清洗；是否进一步裁剪交给调用方的 ",e.jsx(n.code,{children:"beforeEnqueue"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["整个 ",e.jsx(n.code,{children:"sanitizeEvent"})," 不写队列状态，只返回清洗后的事件对象。真正入队发生在 ",e.jsx(n.code,{children:"EarlyErrorQueue.push"})," 后续分支。"]}),`
`,e.jsx(n.h2,{id:"sanitizeurlurl-解析baseurl-和空值分支",children:"sanitizeUrl：URL 解析、baseUrl 和空值分支"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeUrl.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const sanitizeUrl = (
  url: string | undefined,
  sensitiveKeys: RegExp = DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
  maxLength = DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  baseUrl?: string
): string | undefined => {
  if (!url) return undefined

  try {
    const parsedUrl = new URL(url, baseUrl)
    const keys = Array.from(parsedUrl.searchParams.keys())
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sanitizeUrl"})," 的职责是“把 URL 字符串解析成可处理的 URL，再为 query 脱敏做准备”。它不读浏览器全局，所以仍然是纯逻辑 helper。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["空 URL 返回 ",e.jsx(n.code,{children:"undefined"}),"，由调用处决定是否兜底；例如 ",e.jsx(n.code,{children:"pageUrl"})," 调用处用 ",e.jsx(n.code,{children:"?? ''"})," 兜底。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"baseUrl"})," 由调用方显式传入，",e.jsx(n.code,{children:"sanitizeUrl"})," 本身不读取 ",e.jsx(n.code,{children:"window"}),"，所以它仍然是纯逻辑 helper。"]}),`
`,e.jsxs(n.li,{children:["没有 ",e.jsx(n.code,{children:"baseUrl"})," 时只能解析绝对 URL；解析失败会进 ",e.jsx(n.code,{children:"catch"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这里创建的 ",e.jsx(n.code,{children:"parsedUrl"})," 是局部变量，不会修改传入的原始字符串。"]}),`
`,e.jsx(n.h2,{id:"sanitizeurlquery-value-过滤和解析失败兜底",children:"sanitizeUrl：query value 过滤和解析失败兜底"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/sanitizeUrl.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`    keys.forEach((key) => {
      if (sensitiveKeys.test(key)) {
        parsedUrl.searchParams.set(key, '[Filtered]')
      }
    })

    return truncateText(parsedUrl.toString(), maxLength)
  } catch {
    return truncateText(String(url), maxLength)
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"keys"})," 先拷贝出来再遍历，是为了在修改 ",e.jsx(n.code,{children:"searchParams"})," 时不依赖迭代器的实时行为。"]}),`
`,e.jsxs(n.p,{children:["“脱敏”在这里具体指：命中 ",e.jsx(n.code,{children:"sensitiveKeys"})," 的 query value 被替换成 ",e.jsx(n.code,{children:"[Filtered]"}),"，query key 名保留。例如 ",e.jsx(n.code,{children:"?token=abc"})," 会变成 ",e.jsx(n.code,{children:"?token=[Filtered]"}),"。保留 key 名可以让后端知道是哪类参数被过滤，但不会带出真实值。"]}),`
`,e.jsx(n.p,{children:"返回分支有两个："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["解析成功：返回 ",e.jsx(n.code,{children:"parsedUrl.toString()"})," 的截断结果。"]}),`
`,e.jsxs(n.li,{children:["解析失败：不丢弃原始字符串，改为 ",e.jsx(n.code,{children:"String(url)"})," 后硬截断返回。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"geterrorkey资源错误和-js-错误的去重-key",children:"getErrorKey：资源错误和 JS 错误的去重 key"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/getErrorKey.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const getStackTop = (stack?: string): string => {
  return String(stack ?? '').split('\\n')[0] ?? ''
}

const getErrorKey = (event: EarlyErrorEvent): string => {
  if (event.type === EARLY_ERROR_TYPE.RESOURCE) {
    return [event.type, event.tagName, event.resourceUrl, event.message].join(
      '|'
    )
  }

  if (event.type === EARLY_ERROR_TYPE.JS) {
    return [
      event.type,
      event.message,
      event.filename,
      event.lineno,
      event.colno,
      getStackTop(event.stack),
    ].join('|')
  }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getErrorKey"})," 的返回值会作为 ",e.jsx(n.code,{children:"keys: Map<string, EarlyErrorEvent>"})," 的 key。它决定“哪些错误算同一种错误”。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getStackTop"})," 只取堆栈第一行，避免同一错误因为后续调用栈细节不同而无法合并。"]}),`
`,e.jsx(n.p,{children:"资源错误 key 关注资源类型、资源地址和消息，因为资源错误通常由某个 URL 加载失败决定。JS 错误 key 关注消息、文件、行列号和堆栈顶部，因为这些字段能定位运行时错误位置。"}),`
`,e.jsx(n.p,{children:"这个函数不读写队列状态；它只是把事件转换成稳定字符串。"}),`
`,e.jsx(n.h2,{id:"geterrorkeypromise-拒绝和浏览器报告的去重-key",children:"getErrorKey：Promise 拒绝和浏览器报告的去重 key"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/getErrorKey.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  if (event.type === EARLY_ERROR_TYPE.UNHANDLED_REJECTION) {
    return [event.type, event.message, getStackTop(event.stack)].join('|')
  }

  return [event.type, event.reportType, event.reportUrl, event.message].join(
    '|'
  )
}
`})}),`
`,e.jsxs(n.p,{children:["Promise 拒绝没有文件行列号，所以用类型、消息和堆栈顶部。浏览器报告用 ",e.jsx(n.code,{children:"reportType/reportUrl/message"}),"，把同类报告合并到同一条事件上。"]}),`
`,e.jsxs(n.p,{children:["边界行为：如果某些字段是 ",e.jsx(n.code,{children:"undefined"}),"，",e.jsx(n.code,{children:"join('|')"})," 仍会生成字符串。这样 key 生成不会因为字段缺失抛错，但字段越少，合并粒度会越粗。"]}),`
`,e.jsx(n.h2,{id:"createbaseevent创建事件公共字段和浏览器快照",children:"createBaseEvent：创建事件公共字段和浏览器快照"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createBaseEvent.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const createBaseEvent = () => {
  const timestamp = Date.now()
  const browser = isBrowser()

  return {
    timestamp,
    pageUrl: browser ? window.location.href : '',
    userAgent: browser ? window.navigator.userAgent : '',
    viewport: getViewport(),
    connection: getConnection(),
    count: 1,
    firstSeen: timestamp,
    lastSeen: timestamp,
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createBaseEvent"})," 创建每一种早期错误都需要的公共字段。它把“发生时间”和“浏览器环境快照”放到事件上，后续 JS 错误、资源错误、Promise 拒绝和浏览器报告都会展开这份对象。"]}),`
`,e.jsx(n.p,{children:"字段语义："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timestamp"}),"：当前事件创建时间。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"firstSeen"}),"：这类错误第一次出现时间，初始等于 ",e.jsx(n.code,{children:"timestamp"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lastSeen"}),"：这类错误最近一次出现时间，初始也等于 ",e.jsx(n.code,{children:"timestamp"}),"；重复错误合并时只更新它。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"count"}),"：同类错误累计次数，初始为 ",e.jsx(n.code,{children:"1"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pageUrl/userAgent/viewport/connection"}),"：浏览器快照，用于排查错误发生页面、设备视口和网络状态。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["边界行为：",e.jsx(n.code,{children:"isBrowser()"})," 为 ",e.jsx(n.code,{children:"false"})," 时不读取 ",e.jsx(n.code,{children:"window"}),"，",e.jsx(n.code,{children:"pageUrl/userAgent"})," 返回空字符串，",e.jsx(n.code,{children:"viewport/connection"})," 返回 ",e.jsx(n.code,{children:"undefined"}),"。这样测试、SSR 或 Node 环境不会因为构造事件而抛错。"]}),`
`,e.jsx(n.h2,{id:"normalizeunknownerrorerror-和字符串-reason-的标准化",children:"normalizeUnknownError：Error 和字符串 reason 的标准化"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/normalizeUnknownError.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const normalizeUnknownError = (
  value: unknown,
  maxMessageLength = DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  maxStackLength = DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH
): NormalizedUnknownError => {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: truncateText(value.message, maxMessageLength),
      stack: truncateText(value.stack, maxStackLength),
      reasonType: 'error',
    }
  }

  if (typeof value === 'string') {
    return {
      message: truncateText(value, maxMessageLength),
      reasonType: 'string',
    }
  }
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"normalizeUnknownError"})," 用于把 ",e.jsx(n.code,{children:"ErrorEvent.error"})," 和 ",e.jsx(n.code,{children:"PromiseRejectionEvent.reason"})," 变成统一结构。这里的“unknown”很关键：Promise rejection 的 ",e.jsx(n.code,{children:"reason"})," 可以是任意值，不保证是 ",e.jsx(n.code,{children:"Error"}),"。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value instanceof Error"}),"：保留 ",e.jsx(n.code,{children:"name/message/stack"}),"。",e.jsx(n.code,{children:"message"})," 和 ",e.jsx(n.code,{children:"stack"})," 都经过 ",e.jsx(n.code,{children:"truncateText"}),"，避免超长错误对象撑大队列。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeof value === 'string'"}),"：字符串本身就是可读消息，直接作为 ",e.jsx(n.code,{children:"message"}),"，再按 ",e.jsx(n.code,{children:"maxMessageLength"})," 截断。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reasonType"})," 标记来源类型，后端和排查工具可以区分“真实 Error”和“字符串 rejection”。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这个函数不写队列状态，只返回标准化对象；真正事件结构由 ",e.jsx(n.code,{children:"createEvents"})," 组装。"]}),`
`,e.jsx(n.h2,{id:"normalizeunknownerrornull对象和基础类型的兜底标准化",children:"normalizeUnknownError：null、对象和基础类型的兜底标准化"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/core/normalizeUnknownError.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  if (value === null) {
    return {
      message: 'null',
      reasonType: 'null',
    }
  }

  if (typeof value === 'object') {
    return {
      message: truncateText(safeStringify(value), maxMessageLength),
      reasonType: 'object',
    }
  }

  return {
    message: truncateText(String(value), maxMessageLength),
    reasonType: typeof value,
  }
}
`})}),`
`,e.jsx(n.p,{children:"这段处理非 Error、非字符串的情况，目标是“无论输入是什么，都返回可展示、可上报的 message”。"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"null"}),"：单独返回 ",e.jsx(n.code,{children:"message: 'null'"}),"，避免 ",e.jsx(n.code,{children:"typeof null === 'object'"})," 被归到对象分支。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"object"}),"：用 ",e.jsx(n.code,{children:"safeStringify(value)"})," 安全序列化，再截断。循环引用或不可直接 JSON 序列化的对象不会让错误捕获逻辑二次抛错。"]}),`
`,e.jsxs(n.li,{children:["其他基础类型：用 ",e.jsx(n.code,{children:"String(value)"})," 转成消息，",e.jsx(n.code,{children:"reasonType"})," 使用 ",e.jsx(n.code,{children:"typeof value"}),"，覆盖 ",e.jsx(n.code,{children:"number/boolean/symbol/undefined/bigint"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回对象始终包含 ",e.jsx(n.code,{children:"message"})," 和 ",e.jsx(n.code,{children:"reasonType"}),"。调用方不需要再判断 reason 是否可读。"]}),`
`,e.jsx(n.h2,{id:"createevents区分资源加载错误和-js-errorevent",children:"createEvents：区分资源加载错误和 JS ErrorEvent"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createEvents.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const isResourceTarget = (
  target: EventTarget | null
): target is EventTarget & ResourceTarget => {
  return Boolean(target && 'tagName' in target)
}

const isWindowTarget = (target: EventTarget | null): boolean => {
  return isBrowser() && target === window
}

const isErrorEvent = (event: ErrorEvent | Event): event is ErrorEvent => {
  return (
    isBrowser() &&
    typeof ErrorEvent !== 'undefined' &&
    event instanceof ErrorEvent
  )
}
`})}),`
`,e.jsxs(n.p,{children:["这三个判断服务于同一个问题：浏览器的 ",e.jsx(n.code,{children:"error"})," 事件既可能表示 JS 运行时异常，也可能表示资源加载失败。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isResourceTarget"}),"：判断 ",e.jsx(n.code,{children:"event.target"})," 是否像资源元素。这里只看有没有 ",e.jsx(n.code,{children:"tagName"}),"，因为资源错误通常来自 ",e.jsx(n.code,{children:"<script>"}),"、",e.jsx(n.code,{children:"<img>"}),"、",e.jsx(n.code,{children:"<link>"})," 等元素。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isWindowTarget"}),"：排除 window 自身。它先走 ",e.jsx(n.code,{children:"isBrowser()"}),"，避免非浏览器环境直接读取 ",e.jsx(n.code,{children:"window"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isErrorEvent"}),"：判断事件是不是 JS 运行时错误。它先确认 ",e.jsx(n.code,{children:"ErrorEvent"})," 构造器存在，再执行 ",e.jsx(n.code,{children:"instanceof"}),"，兼容没有该构造器的环境。"]}),`
`]}),`
`,e.jsx(n.p,{children:"这些 helper 只做类型收窄，不创建事件，也不写队列状态。"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createEvents.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const createErrorEvent = (
  event: ErrorEvent | Event
): EarlyJSErrorEvent | EarlyResourceErrorEvent | null => {
  const target = event.target

  if (isResourceTarget(target) && !isWindowTarget(target)) {
    const tagName = target.tagName
    const resourceUrl = target.src ?? target.href

    return {
      ...createBaseEvent(),
      type: EARLY_ERROR_TYPE.RESOURCE,
      message: \`Failed to load \${String(tagName ?? 'resource').toLowerCase()}: \${resourceUrl ?? ''}\`,
      tagName,
      resourceUrl,
      outerHTML: target.outerHTML,
    }
  }
`})}),`
`,e.jsxs(n.p,{children:["这里先走资源错误分支，因为资源加载失败也会触发 ",e.jsx(n.code,{children:"error"})," 事件，但它不是 JS ",e.jsx(n.code,{children:"ErrorEvent"})," 的业务语义。"]}),`
`,e.jsx(n.p,{children:"命中资源分支时，事件会带上："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName"}),"：失败元素类型。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resourceUrl"}),"：",e.jsx(n.code,{children:"src"})," 或 ",e.jsx(n.code,{children:"href"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"outerHTML"}),"：失败元素快照，后续入队前会被 ",e.jsx(n.code,{children:"sanitizeEvent"})," 截断。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回值是 ",e.jsx(n.code,{children:"EarlyResourceErrorEvent"}),"。如果 ",e.jsx(n.code,{children:"target"})," 不像资源元素，代码继续往 JS 错误分支走。"]}),`
`,e.jsx(n.h2,{id:"createevents从-errorevent-创建-js-错误事件",children:"createEvents：从 ErrorEvent 创建 JS 错误事件"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createEvents.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  if (isErrorEvent(event)) {
    const normalizedError = normalizeUnknownError(event.error)

    return {
      ...createBaseEvent(),
      type: EARLY_ERROR_TYPE.JS,
      message: event.message || normalizedError.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: normalizedError.stack,
    }
  }

  return null
}
`})}),`
`,e.jsxs(n.p,{children:["不是资源错误时，再通过 ",e.jsx(n.code,{children:"isErrorEvent(event)"})," 判断是否是浏览器 JS 错误。"]}),`
`,e.jsx(n.p,{children:"这段会读取两个来源："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["浏览器事件本身的 ",e.jsx(n.code,{children:"message/filename/lineno/colno"}),"，这些字段定位到报错文件和行列。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.error"})," 标准化后的 ",e.jsx(n.code,{children:"stack"}),"，因为原始 error 对象可能不存在，也可能不是标准 Error。"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"message"})," 优先用 ",e.jsx(n.code,{children:"event.message"}),"；如果为空，再用 ",e.jsx(n.code,{children:"normalizeUnknownError(event.error).message"})," 兜底。"]}),`
`,e.jsxs(n.p,{children:["如果既不是资源错误，也不是 ",e.jsx(n.code,{children:"ErrorEvent"}),"，返回 ",e.jsx(n.code,{children:"null"}),"，调用方不应该入队。"]}),`
`,e.jsx(n.h2,{id:"createeventspromise-rejection-reason-标准化",children:"createEvents：Promise rejection reason 标准化"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createEvents.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const createUnhandledRejectionEvent = (
  event: PromiseRejectionEvent
): EarlyUnhandledRejectionEvent => {
  const normalizedReason = normalizeUnknownError(event.reason)

  return {
    ...createBaseEvent(),
    type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
    message: normalizedReason.message,
    reasonType: normalizedReason.reasonType,
    stack: normalizedReason.stack,
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Promise 拒绝的 ",e.jsx(n.code,{children:"reason"})," 可以是任意类型，所以先走 ",e.jsx(n.code,{children:"normalizeUnknownError(event.reason)"}),"。"]}),`
`,e.jsx(n.p,{children:"输出事件只保留标准化后的："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"message"}),"：可读错误信息。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reasonType"}),"：原始 reason 的类型。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stack"}),"：如果能拿到 Error stack 就保留。"]}),`
`]}),`
`,e.jsx(n.p,{children:"这样队列不会直接持有不可控对象，也不会因为循环引用 reason 影响后续序列化。"}),`
`,e.jsx(n.h2,{id:"createeventsreporting-api-report-转成浏览器报告事件",children:"createEvents：Reporting API report 转成浏览器报告事件"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/createEvents.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const createBrowserReportEvent = (
  report: BrowserReportLike
): EarlyBrowserReportEvent => {
  const reportType = report.type
  const body = report.body?.toJSON?.() ?? report.body

  return {
    ...createBaseEvent(),
    type: EARLY_ERROR_TYPE.BROWSER_REPORT,
    message: reportType ? \`Browser report: \${reportType}\` : 'Browser report',
    reportType,
    reportUrl: report.url,
    body,
  }
}
`})}),`
`,e.jsx(n.p,{children:"Reporting API 的 report 不是 JS 异常，而是浏览器平台报告，例如 CSP、弃用 API、浏览器干预等。"}),`
`,e.jsx(n.p,{children:"字段处理："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reportType"})," 来自 ",e.jsx(n.code,{children:"report.type"}),"，用于区分报告类别。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"message"})," 根据 ",e.jsx(n.code,{children:"reportType"})," 生成；没有类型时兜底为 ",e.jsx(n.code,{children:"Browser report"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body"})," 可能提供 ",e.jsx(n.code,{children:"toJSON"}),"，这里优先转成普通对象；没有 ",e.jsx(n.code,{children:"toJSON"})," 时保留原始 body。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reportUrl"})," 后续入队时会被 ",e.jsx(n.code,{children:"sanitizeEvent"})," 过滤敏感 query。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这段只创建事件对象，不安装 ",e.jsx(n.code,{children:"ReportingObserver"}),"。监听安装在 copy-only script 里完成。"]}),`
`,e.jsx(n.h2,{id:"enrichearlyerrorsflush-时补齐业务上下文和发送元信息",children:"enrichEarlyErrors：flush 时补齐业务上下文和发送元信息"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/browser/enrichEarlyErrors.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const enrichEarlyErrors = (
  events: EarlyErrorEvent[],
  context: EarlyErrorContext = {},
  reason: EARLY_ERROR_FLUSH_REASON = EARLY_ERROR_FLUSH_REASON.INIT
): EnrichedEarlyErrorEvent[] => {
  const flushedAt = Date.now()
  const route = isBrowser() ? window.location.pathname : undefined

  return events.map((event) => ({
    ...event,
    ...context,
    route: context.route ?? route,
    userId: context.userId ?? 'anonymous',
    flushedAt,
    flushReason: reason,
    source: 'early_error_queue',
  }))
}
`})}),`
`,e.jsx(n.p,{children:"这段把“早期捕获时还不知道的信息”补回事件。早期错误发生时，完整 SDK 可能还没初始化，所以当时拿不到 appId、release、userId、sessionId 等业务上下文。"}),`
`,e.jsx(n.p,{children:"数据合并顺序是："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"...event"}),"：保留原始早期错误字段。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"...context"}),"：把 SDK 初始化后拿到的业务上下文合并进去，同名字段由 context 覆盖。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"route: context.route ?? route"}),"：调用方传了 route 就用调用方的；没传且在浏览器环境中，就用当前 ",e.jsx(n.code,{children:"window.location.pathname"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"userId: context.userId ?? 'anonymous'"}),"：没有用户信息时给后端稳定默认值。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flushedAt/flushReason/source"}),"：标记这批事件何时、为什么、从哪个模块被发送。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["返回的是新数组，原 ",e.jsx(n.code,{children:"events"})," 数组不会被清空；清空发生在 ",e.jsx(n.code,{children:"EarlyErrorQueue.createPayload"})," 调用 ",e.jsx(n.code,{children:"take()"})," 时。"]}),`
`,e.jsx(n.h2,{id:"scripttsxcopy-only-脚本的自包含配置和状态",children:"script.tsx：copy-only 脚本的自包含配置和状态"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/script.tsx"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`;(function () {
  var GLOBAL_NAME = '__EARLY_ERROR_QUEUE__'
  var MAX_COUNT = 50
  var MAX_BYTES = 48 * 1024
  var MAX_AGE = 60 * 1000
  var MAX_STACK = 8 * 1024
  var MAX_MESSAGE = 1000
  var MAX_HTML = 300
  var SENSITIVE_KEYS =
    /token|ticket|sid|session|password|passwd|phone|mobile|email|idcard|identity|search|keyword|query/i
  var installedAt = Date.now ? Date.now() : +new Date()
  var queue = []
  var dropped = 0
  var bytes = 0
  var keys = {}
  var reportingObserver = null
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"script.tsx"})," 是 copy-only inline bootstrap，不是模块入口，所以不能 import ",e.jsx(n.code,{children:"isBrowser/estimateBytes/safeStringify"})," 等包内工具。它最终要被复制到 HTML head 里，越早执行越能捕获首屏错误。"]}),`
`,e.jsx(n.p,{children:"它用 IIFE 创建私有作用域，避免把内部状态直接挂到全局。这里的数据结构和 TS class 队列对应："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GLOBAL_NAME"}),"：全局协议名，SDK 后续通过 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"})," 接管。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MAX_*"}),"：copy-only 版本内置限制，不能依赖 TS 模块里的默认常量。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"installedAt"}),"：脚本安装时间，用来限制早期捕获窗口。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queue"}),"：事件数组。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys"}),"：普通对象形式的去重索引，比 ",e.jsx(n.code,{children:"Map"})," 更适合复制到老环境脚本里。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes/dropped"}),"：当前体积和容量裁剪统计。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reportingObserver"}),"：用于后续 ",e.jsx(n.code,{children:"stop()"})," 断开 Reporting API 监听。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"scripttsxpush-的早期窗口过滤和原地字段清洗",children:"script.tsx：push 的早期窗口过滤和原地字段清洗"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/script.tsx"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  function push(event) {
    try {
      if (now() - installedAt > MAX_AGE) return

      event.message = safeString(event.message).slice(0, MAX_MESSAGE)
      event.pageUrl = sanitizeUrl(event.pageUrl || location.href)
      event.filename = sanitizeUrl(event.filename)
      event.resourceUrl = sanitizeUrl(event.resourceUrl)
      event.reportUrl = sanitizeUrl(event.reportUrl)
      event.stack = event.stack
        ? String(event.stack).slice(0, MAX_STACK)
        : undefined
      event.outerHTML = event.outerHTML
        ? String(event.outerHTML).slice(0, MAX_HTML)
        : undefined
`})}),`
`,e.jsxs(n.p,{children:["inline 版本的 ",e.jsx(n.code,{children:"push"})," 和 TS class 的 ",e.jsx(n.code,{children:"push"})," 语义相近，但实现更克制，因为它要复制到业务页面里："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"now() - installedAt > MAX_AGE"}),"：超过早期窗口直接返回，不再捕获后续事件。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.message/pageUrl/filename/resourceUrl/reportUrl/stack/outerHTML"}),"：直接在原对象上改写，完成截断和 URL 脱敏。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"try/catch"})," 包住整个入队流程：任何清洗或入队异常都会被吞掉，避免早期错误捕获脚本本身影响页面。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这里的“清洗”同样指字段处理：消息截断、URL query 脱敏、堆栈和 HTML 快照限制长度。和 TS 模块不同，inline 版本为了减少代码体积直接修改传入的 ",e.jsx(n.code,{children:"event"})," 对象。"]}),`
`,e.jsx(n.h2,{id:"scripttsx去重合并首次入队和容量裁剪",children:"script.tsx：去重合并、首次入队和容量裁剪"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/script.tsx"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`      var key = getKey(event)
      var existing = keys[key]

      if (existing) {
        existing.count += 1
        existing.lastSeen = event.timestamp || now()
        recalculateBytes()
        return
      }

      queue.push(event)
      keys[key] = event
      trimQueue()
    } catch (_) {}
  }
`})}),`
`,e.jsx(n.p,{children:"inline 版本的状态变化和 TS 队列一致："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getKey(event)"}),"：把事件转换成去重 key。"]}),`
`,e.jsxs(n.li,{children:["命中 ",e.jsx(n.code,{children:"keys[key]"}),"：只更新已有事件的 ",e.jsx(n.code,{children:"count/lastSeen"}),"，不增加数组长度。"]}),`
`,e.jsxs(n.li,{children:["未命中：事件进入 ",e.jsx(n.code,{children:"queue"}),"，同时写入 ",e.jsx(n.code,{children:"keys"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"trimQueue()"}),"：根据 ",e.jsx(n.code,{children:"MAX_COUNT/MAX_BYTES"})," 从队头裁剪旧事件，并更新 ",e.jsx(n.code,{children:"bytes/dropped"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"catch (_) {}"})," 是故意的：早期错误捕获脚本不能成为页面新的错误来源。失败时不会向外抛错，也不会阻断业务页面继续执行。"]}),`
`,e.jsx(n.h2,{id:"scripttsx暴露全局-push-协议并补齐基础字段",children:"script.tsx：暴露全局 push 协议并补齐基础字段"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/script.tsx"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  window[GLOBAL_NAME] = {
    push: function (event) {
      var base = createBase()
      push({
        timestamp: base.timestamp,
        pageUrl: base.pageUrl,
        userAgent: base.userAgent,
        viewport: base.viewport,
        connection: base.connection,
        count: base.count,
        firstSeen: base.firstSeen,
        lastSeen: base.lastSeen,
        type: event.type || 'js_error',
        message: event.message || 'Unknown early error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.stack,
        tagName: event.tagName,
        resourceUrl: event.resourceUrl || event.url,
        outerHTML: event.outerHTML,
        reasonType: event.reasonType,
        reportType: event.reportType,
        reportUrl: event.reportUrl,
        body: event.body,
        extra: event.extra,
      })
    },
`})}),`
`,e.jsxs(n.p,{children:["暴露的 ",e.jsx(n.code,{children:"window[GLOBAL_NAME].push"})," 是给业务或其他早期脚本手动塞错误用的协议。它接收 ",e.jsx(n.code,{children:"Partial<EarlyErrorEvent>"})," 风格的对象，再用 ",e.jsx(n.code,{children:"createBase()"})," 补齐基础字段。"]}),`
`,e.jsx(n.p,{children:"字段映射分成两类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["基础字段：",e.jsx(n.code,{children:"timestamp/pageUrl/userAgent/viewport/connection/count/firstSeen/lastSeen"})," 来自 ",e.jsx(n.code,{children:"createBase()"}),"，保证手动 push 的事件也有完整公共字段。"]}),`
`,e.jsxs(n.li,{children:["调用方字段：",e.jsx(n.code,{children:"type/message/filename/lineno/.../extra"})," 来自传入的 ",e.jsx(n.code,{children:"event"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"边界行为："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type"})," 没传时兜底为 ",e.jsx(n.code,{children:"js_error"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"message"})," 没传时兜底为 ",e.jsx(n.code,{children:"Unknown early error"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resourceUrl: event.resourceUrl || event.url"})," 是兼容写法，允许调用方用更短的 ",e.jsx(n.code,{children:"url"}),"。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"scripttsxtakepeekstopgetstats-全局接管协议",children:"script.tsx：take/peek/stop/getStats 全局接管协议"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/script.tsx"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`    take: function () {
      var copy = queue.slice()
      queue.length = 0
      keys = {}
      bytes = 0
      return copy
    },
    peek: function () {
      return queue.slice()
    },
    stop: stop,
    getStats: function () {
      return {
        count: queue.length,
        bytes: bytes,
        dropped: dropped,
      }
    },
  }

  window.addEventListener('error', onError, true)
  window.addEventListener('unhandledrejection', onUnhandledRejection)
  installReportingObserver()
})()
`})}),`
`,e.jsx(n.p,{children:"全局协议和 TS 接管函数配合："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"take"}),"：被 ",e.jsx(n.code,{children:"takeGlobalEarlyErrors"})," 调用。它返回 ",e.jsx(n.code,{children:"queue.slice()"})," 的副本，然后清空 ",e.jsx(n.code,{children:"queue/keys/bytes"}),"，语义是“交出早期缓存”。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"peek"}),"：只返回副本，不清空，适合调试。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop"}),"：移除 ",e.jsx(n.code,{children:"error/unhandledrejection"})," 监听，并断开 ",e.jsx(n.code,{children:"ReportingObserver"}),"，语义是“完整 SDK 已接管，bootstrap 停止继续收集”。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStats"}),"：返回当前 ",e.jsx(n.code,{children:"count/bytes/dropped"}),"，用于调试或接管前观测。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["最后三行是真正安装监听的地方。",e.jsx(n.code,{children:"error"})," 使用 capture 阶段，是为了捕获资源加载失败这类不会冒泡到 window bubble 阶段的事件。"]}),`
`,e.jsx(n.h2,{id:"interfacets公共默认值和队列配置协议",children:"interface.ts：公共默认值和队列配置协议"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/interface.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const DEFAULT_EARLY_ERROR_MAX_COUNT = 50
export const DEFAULT_EARLY_ERROR_MAX_BYTES = 48 * 1024
export const DEFAULT_EARLY_ERROR_MAX_AGE = 60 * 1000
export const DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH = 8 * 1024
export const DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH = 1000
export const DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH = 300
export const DEFAULT_EARLY_ERROR_SENSITIVE_KEYS =
  /token|ticket|sid|session|password|passwd|phone|mobile|email|idcard|identity|search|keyword|query/i

export interface EarlyErrorQueueOptions {
  maxCount?: number
  maxBytes?: number
  maxAge?: number
  maxStackLength?: number
  maxMessageLength?: number
  maxHtmlLength?: number
  sensitiveKeys?: RegExp
  beforeEnqueue?: (event: EarlyErrorEvent) => EarlyErrorEvent | false
}
`})}),`
`,e.jsxs(n.p,{children:["默认值放在 ",e.jsx(n.code,{children:"interface.ts"})," 是因为它们是公共协议的一部分，调用方可以 import 后用于展示、覆盖或保持业务配置一致。"]}),`
`,e.jsx(n.p,{children:"这些默认值分别控制："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MAX_COUNT/MAX_BYTES/MAX_AGE"}),"：限制队列条数、估算体积和接收窗口。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MAX_STACK/MAX_MESSAGE/MAX_HTML"}),"：限制单条事件字段长度。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SENSITIVE_KEYS"}),"：定义默认需要脱敏的 query key。"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EarlyErrorQueueOptions"})," 是调用方传入配置，所以放在公共协议里。完整运行时配置对象没放这里，因为它只在 ",e.jsx(n.code,{children:"EarlyErrorQueue"})," 实例内部使用；暴露内部中间结构会增加 API 面。"]}),`
`,e.jsx(n.h2,{id:"interfacetscopy-only-script-和-ts-接管层的全局队列协议",children:"interface.ts：copy-only script 和 TS 接管层的全局队列协议"}),`
`,e.jsxs(n.p,{children:["源码位置：",e.jsx(n.code,{children:"packages/element-utils/src/earlyErrorQueue/interface.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface EarlyErrorGlobalQueue {
  push: (event: Partial<EarlyErrorEvent>) => void
  take: () => EarlyErrorEvent[]
  peek?: () => EarlyErrorEvent[]
  stop?: () => void
  getStats?: () => EarlyErrorQueueStats
}

export interface TakeGlobalEarlyErrorsOptions {
  globalName?: string
  stopAfterTake?: boolean
}
`})}),`
`,e.jsx(n.p,{children:"这两个类型描述的是 TS 模块和 copy-only script 之间的边界："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EarlyErrorGlobalQueue"})," 必须公开，因为 ",e.jsx(n.code,{children:"script.tsx"})," 在 ",e.jsx(n.code,{children:"window"})," 上暴露的对象需要被 ",e.jsx(n.code,{children:"takeGlobalEarlyErrors"})," 读取。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"push"})," 接收 ",e.jsx(n.code,{children:"Partial<EarlyErrorEvent>"}),"，因为 inline 阶段可能只能拿到部分字段。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"peek/stop/getStats"})," 是可选能力，接管逻辑只强依赖 ",e.jsx(n.code,{children:"take"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TakeGlobalEarlyErrorsOptions"})," 允许测试或业务使用自定义全局名，也允许读取后不停止监听。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["这里的接口不是 ",e.jsx(n.code,{children:"EarlyErrorQueue"})," class 的 public method 列表；它只描述 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"})," 这个跨脚本协议。"]}),`
`,e.jsx(n.h2,{id:"关键不变量",children:"关键不变量"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queue"})," 和 ",e.jsx(n.code,{children:"keys"})," 必须同步：新增事件时一起写，裁剪或清空时一起删。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes"})," 只通过 ",e.jsx(n.code,{children:"recalculateBytes"})," 或清空逻辑更新，避免多个分支各自手动维护。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dropped"})," 只统计容量裁剪导致的旧事件丢弃，不统计业务过滤或超时拒绝。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"createPayload"})," 和 ",e.jsx(n.code,{children:"flush"})," 都会消费队列；调用前如果只是查看，应使用 ",e.jsx(n.code,{children:"peek"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"script.tsx"})," 是复制使用的 inline script，不能因为 TS 模块已经有工具函数就引入 import。"]}),`
`]})]})}function o(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{o as default};
