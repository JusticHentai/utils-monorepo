import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchSizeDemo = () => {
  const { add } = createBatch<number>(
    (items) => {
      action('批次回调触发')(items)
    },
    { batchSize: 3, batchDelay: 5000 }
  )

  action('逐条添加数据')('依次添加 1, 2, 3，当第 3 条添加时触发批次回调')

  add([1])
  add([2])
  add([3])
}

export default batchSizeDemo
`,r=`import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchOverflowDemo = () => {
  const { add } = createBatch<number>(
    (items) => {
      action('批次回调触发')(items)
    },
    { batchSize: 3, batchDelay: 60000 }
  )

  action('一次性添加 5 条数据')('batchSize 为 3，超过阈值立即触发回调')

  add([1, 2, 3, 4, 5])
}

export default batchOverflowDemo
`,h=`import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const batchDelayDemo = () => {
  const { add } = createBatch<string>(
    (items) => {
      action('延迟批次回调触发')(items)
    },
    { batchSize: 100, batchDelay: 2000 }
  )

  add(['apple', 'banana'])

  action('已添加 2 条数据')('batchSize 为 100 未达到阈值，将在 2 秒后自动刷新')
}

export default batchDelayDemo
`,l=`import { action } from 'storybook/actions'
import createBatch from '../../../packages/js-utils/src/createBatch'

const flushDemo = () => {
  const { add, flush } = createBatch<string>(
    (items) => {
      action('手动刷新回调触发')(items)
    },
    { batchSize: 100, batchDelay: 60000 }
  )

  add(['task-1', 'task-2'])
  action('已添加 2 条数据')('未达到阈值且延迟 60 秒，手动调用 flush 立即触发')

  flush()
}

export default flushDemo
`;function i(c){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createbatch",children:"createBatch"}),`
`,n.jsx(e.p,{children:"创建批次处理器，将数据按批次大小或延迟时间聚合后统一回调。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createBatch"})," 是一个通用的批次聚合工具，用于将频繁产生的零散数据收集到一起，达到阈值或超时后统一处理。"]}),`
`,n.jsx(e.p,{children:"常见应用场景："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"性能监控上报"}),"：将多条性能指标聚合后批量发送，减少网络请求次数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"日志收集"}),"：将高频产生的日志聚合后批量写入"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流处理"}),"：将流式数据按批次分组处理，提高吞吐量"]}),`
`]}),`
`,n.jsx(e.p,{children:"批次刷新的触发条件有两个（满足任一即触发）："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["批次中的数据量达到 ",n.jsx(e.code,{children:"batchSize"})," 阈值"]}),`
`,n.jsxs(e.li,{children:["距离首条数据添加已超过 ",n.jsx(e.code,{children:"batchDelay"})," 延迟时间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"批次大小触发",children:"批次大小触发"}),`
`,n.jsxs(e.p,{children:["当添加的数据累计达到 ",n.jsx(e.code,{children:"batchSize"})," 时，立即触发回调。本例中设置 ",n.jsx(e.code,{children:"batchSize"})," 为 3，逐条添加数据，当第 3 条添加后批次自动刷新。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"超过大小立即触发",children:"超过大小立即触发"}),`
`,n.jsxs(e.p,{children:["当一次性添加的数据量超过 ",n.jsx(e.code,{children:"batchSize"})," 时，立即触发回调。本例中 ",n.jsx(e.code,{children:"batchSize"})," 为 3，一次性添加 5 条数据，达到阈值后立即刷新。"]}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"延迟时间触发",children:"延迟时间触发"}),`
`,n.jsxs(e.p,{children:["当数据量未达到 ",n.jsx(e.code,{children:"batchSize"})," 阈值时，在 ",n.jsx(e.code,{children:"batchDelay"})," 毫秒后自动触发回调。本例设置了一个较大的 ",n.jsx(e.code,{children:"batchSize"}),"（100），添加少量数据后等待 2 秒延迟自动刷新。"]}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"手动刷新批次",children:"手动刷新批次"}),`
`,n.jsxs(e.p,{children:["调用 ",n.jsx(e.code,{children:"flush"})," 可以立即触发回调并清空当前批次，适用于页面卸载、用户离开等需要立即上报的场景。"]}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(items: T[]) => void"})}),n.jsx("td",{children:"批次回调函数，接收当前批次的数据数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.batchSize"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"批次大小阈值，数据量达到此值时立即触发回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.batchDelay"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"批次延迟时间（毫秒），未达到阈值时在此时间后自动触发"})]})]})]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["返回值 ",n.jsx(e.code,{children:"BatchActions<T>"})]})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"flush"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"手动刷新当前批次，立即触发回调并清空数据"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"add"}),n.jsx("td",{children:n.jsx("code",{children:"(items: T[]) => void"})}),n.jsx("td",{children:"添加数据到当前批次"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：核心实现，创建批次处理器的闭包逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义，",n.jsx(e.code,{children:"BatchOptions"})," 配置选项和 ",n.jsx(e.code,{children:"BatchActions"})," 返回接口"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化内部 ",n.jsx(e.code,{children:"batch"})," 数组和 ",n.jsx(e.code,{children:"timer"})," 定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"add"})," 方法将数据追加到 ",n.jsx(e.code,{children:"batch"}),"，检查是否达到 ",n.jsx(e.code,{children:"batchSize"})," 阈值"]}),`
`,n.jsxs(e.li,{children:["达到阈值则立即调用 ",n.jsx(e.code,{children:"flush"}),"；否则启动延迟定时器"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flush"})," 方法将 ",n.jsx(e.code,{children:"batch"})," 副本传入回调，清空数组并取消定时器"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用闭包维护 ",n.jsx(e.code,{children:"batch"})," 和 ",n.jsx(e.code,{children:"timer"})," 状态"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flush"})," 时传入 ",n.jsx(e.code,{children:"[...batch]"})," 副本，避免回调中修改影响内部状态"]}),`
`,n.jsx(e.li,{children:"定时器采用懒创建策略，仅在无活跃定时器时创建新的"}),`
`]})]})}function p(c={}){const{wrapper:e}={...t(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{p as default};
