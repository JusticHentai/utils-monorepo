import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-C_s77IFb.js";import{C as s}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const i=`import { action } from 'storybook/actions'
import estimateBytes from '../../../packages/element-utils/src/estimateBytes'

const textDemo = () => {
  const values = ['hello', '中文', '😀', 'hello 中文 😀']

  const results = values.map((value) => ({
    value,
    length: value.length,
    bytes: estimateBytes(value),
  }))

  action('文本字节估算结果')(results)
}

export default textDemo
`,t=`import { action } from 'storybook/actions'
import estimateBytes from '../../../packages/element-utils/src/estimateBytes'

interface PayloadExample {
  type: string
  message: string
  count: number
  self?: PayloadExample
}

const objectDemo = () => {
  const payload: PayloadExample = {
    type: 'js',
    message: 'Cannot read properties of undefined',
    count: 1,
  }

  payload.self = payload

  action('对象字节估算结果')({
    bytes: estimateBytes(payload),
    payload,
  })
}

export default objectDemo
`;function r(d){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"estimatebytes",children:"estimateBytes"}),`
`,e.jsx(n.p,{children:"估算未知值序列化后的 UTF-8 字节数，适合用于 payload 大小限制、缓存队列体积统计、keepalive/beacon 请求体积判断等场景。"}),`
`,e.jsx(n.h2,{id:"开发者视角",children:"开发者视角"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"estimateBytes"})," 的目标是把任意输入压成一个可比较的体积数字。它通常不用于 UI 展示，而是用于工程约束：队列是否超出上限、请求体是否适合走 ",e.jsx(n.code,{children:"sendBeacon"}),"、缓存是否需要淘汰旧数据。"]}),`
`,e.jsxs(n.p,{children:["它的输入是 ",e.jsx(n.code,{children:"unknown"}),"，输出是 ",e.jsx(n.code,{children:"number"}),"。核心链路分两段："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"把输入稳定地转成字符串。"}),`
`,e.jsx(n.li,{children:"计算这个字符串在 UTF-8 编码下的字节数。"}),`
`]}),`
`,e.jsxs(n.p,{children:["它和 ",e.jsx(n.code,{children:"formatBytes"})," 的职责完全不同："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"工具"}),e.jsx("th",{children:"输入"}),e.jsx("th",{children:"输出"}),e.jsx("th",{children:"核心用途"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"把未知值估算成字节数，用于限制和判断。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"formatBytes"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"{ value, unit, formatted }"})}),e.jsx("td",{children:"把已有字节数格式化为 KB、MB 等展示文本。"})]})]})]}),`
`,e.jsx(n.h2,{id:"模块边界",children:"模块边界"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"模块"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"为什么这样拆"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes"})}),e.jsx("td",{children:"负责体积估算，不关心业务语义。"}),e.jsx("td",{children:"队列、上报、日志模块都能复用同一套体积判断逻辑。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isString"})}),e.jsx("td",{children:"负责判断输入是否已经是字符串。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["来自 ",e.jsx("code",{children:"@justichentai/js-utils/isString"}),`，避免在工具里重复写
`,e.jsx("code",{children:"typeof value === 'string'"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"safeStringify"})}),e.jsx("td",{children:"负责非字符串输入的安全序列化。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"estimateBytes"})," 不重复实现循环引用和 BigInt 处理。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"earlyErrorQueue"})}),e.jsx("td",{children:"负责决定队列何时淘汰、payload 何时发送。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["它只消费 ",e.jsx("code",{children:"estimateBytes"})," 返回的数字，不关心字节怎么算。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"supportTextEncoder"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["负责判断当前环境是否支持全局 ",e.jsx("code",{children:"TextEncoder"}),"。"]})}),e.jsx("td",{children:"把能力探测从估算逻辑中抽出，后续其他编码场景可以复用同一判断。"})]})]})]}),`
`,e.jsx(n.h2,{id:"数据结构",children:"数据结构"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"数据"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"来源"}),e.jsx("th",{children:"用途"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"调用方传入"}),e.jsx("td",{children:"待估算体积的原始值。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["字符串入参直接使用；非字符串入参来自 ",e.jsx("code",{children:"safeStringify"})]})}),e.jsx("td",{children:"后续编码计算的唯一输入。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Uint8Array"})}),e.jsx("td",{children:e.jsx("code",{children:"Uint8Array"})}),e.jsx("td",{children:e.jsx("code",{children:"new TextEncoder().encode(text)"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["每个元素对应一个 UTF-8 字节，",e.jsx("code",{children:"length"})," 就是字节数。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bytes"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"编码结果长度或降级字符串长度"}),e.jsx("td",{children:"供队列限制、发送限制和统计展示使用。"})]})]})]}),`
`,e.jsx(n.h2,{id:"数据流",children:"数据流"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-mermaid",children:`flowchart TD
  A["调用 estimateBytes(value)"] --> B{"isString(value)?"}
  B -->|是| C["text = value"]
  B -->|否| D["text = safeStringify(value)"]
  C --> E{"supportTextEncoder()?"}
  D --> E
  E -->|存在| F["new TextEncoder().encode(text)"]
  F --> G["返回 Uint8Array.length"]
  E -->|不存在| H["返回 text.length"]
`})}),`
`,e.jsx(n.h2,{id:"编码原理",children:"编码原理"}),`
`,e.jsx(n.h2,{id:"文本字节估算",children:"文本字节估算"}),`
`,e.jsxs(n.p,{children:["英文字符、中文字符、emoji 的 UTF-8 字节数不同，所以不能只看 ",e.jsx(n.code,{children:"string.length"}),"。"]}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"对象字节估算",children:"对象字节估算"}),`
`,e.jsxs(n.p,{children:["对象会先经过 ",e.jsx(n.code,{children:"safeStringify"}),"，因此循环引用不会让估算逻辑抛错。"]}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"需要估算体积的任意值。"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"估算得到的字节数。"})]})})]}),`
`,e.jsx(n.h2,{id:"函数级导读",children:"函数级导读"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes(value)"})}),e.jsx("td",{children:"估算输入值的字节数。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["先用 ",e.jsx("code",{children:"isString"}),` 判断是否已经是字符串；非字符串先调用
`,e.jsx("code",{children:"safeStringify"}),"。再用 ",e.jsx("code",{children:"supportTextEncoder"}),`
判断是否能按 UTF-8 编码长度计算，缺失时降级为
`,e.jsx("code",{children:"text.length"}),"。"]})})]})})]}),`
`,e.jsx(n.h2,{id:"逐行实现拆解",children:"逐行实现拆解"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"代码片段"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"开发者关注点"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"import isString from '@justichentai/js-utils/isString'"})}),e.jsx("td",{children:"复用已有字符串类型判断。"}),e.jsx("td",{children:"避免在 element-utils 中重复维护字符串判断逻辑。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"import safeStringify from '../safeStringify'"})}),e.jsx("td",{children:"复用公共安全序列化工具。"}),e.jsx("td",{children:"避免在字节估算工具里重复处理循环引用、BigInt 和 JSON 异常。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"import supportTextEncoder from '../supportTextEncoder'"})}),e.jsx("td",{children:"复用公共 TextEncoder 能力探测工具。"}),e.jsx("td",{children:"让编码能力判断可以被其他工具共享，而不是散落在业务函数里。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isString(value) ? value : safeStringify(value)"})}),e.jsx("td",{children:"得到后续编码需要的字符串。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["字符串直接使用，避免 ",e.jsx("code",{children:'"abc"'}),` 被序列化成
`,e.jsx("code",{children:'""abc""'})," 后多算两个引号。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"supportTextEncoder()"})}),e.jsx("td",{children:"检测当前运行环境是否支持 UTF-8 编码 API。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["具体的 ",e.jsx("code",{children:"typeof TextEncoder"}),` 判断集中在
`,e.jsx("code",{children:"supportTextEncoder"})," 中维护。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"new TextEncoder().encode(text).length"})}),e.jsx("td",{children:"把字符串编码为 UTF-8 字节数组并读取长度。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Uint8Array.length"})," 才是 UTF-8 字节数，不是字符数量。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"return text.length"})}),e.jsx("td",{children:"缺少 TextEncoder 时的降级估算。"}),e.jsx("td",{children:e.jsx(n.p,{children:"对 ASCII 文本准确；对中文和 emoji 会低估，但比抛错更适合监控链路。"})})]})]})]}),`
`,e.jsx(n.h2,{id:"在-earlyerrorqueue-中的数据流",children:"在 earlyErrorQueue 中的数据流"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"调用点"}),e.jsx("th",{children:"输入"}),e.jsx("th",{children:"输出如何使用"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createEarlyErrorQueue.recalculateBytes()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["当前 ",e.jsx("code",{children:"queue"})," 数组"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["写入闭包变量 ",e.jsx("code",{children:"bytes"}),"，随后由 ",e.jsx("code",{children:"trimQueue"}),`
判断是否超过
`,e.jsx("code",{children:"maxBytes"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sendEarlyErrorPayload()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"JSON.stringify(payload)"})," 得到的请求体字符串"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["返回的 bytes 写进 ",e.jsx("code",{children:"EarlyErrorSendResult"}),`，并参与
`,e.jsx("code",{children:"sendBeacon"})," 和 keepalive 体积上限判断。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.stories.ts"})}),e.jsx("td",{children:"注册 Storybook story。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["设置标题 ",e.jsx("code",{children:"element-utils/estimateBytes"}),`、绑定演示组件，并使用
`,e.jsx("code",{children:"centered"})," 布局。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.tsx"})}),e.jsx("td",{children:"渲染演示入口。"}),e.jsx("td",{children:"只负责按钮 UI，具体字节估算演示拆到 demo 文件里。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"textDemo.ts"})}),e.jsx("td",{children:"演示文本字节估算。"}),e.jsx("td",{children:"对比 ASCII、中文、emoji 和混合文本的 length 与 bytes。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"objectDemo.ts"})}),e.jsx("td",{children:"演示对象字节估算。"}),e.jsx("td",{children:"构造包含循环引用的 payload，证明估算过程不会因为序列化失败中断。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"介绍.mdx"})}),e.jsx("td",{children:"承载说明文档。"}),e.jsx("td",{children:"解释适用场景、参数、返回值、函数职责和实现流程。"})]})]})]}),`
`,e.jsx(n.h2,{id:"实现取舍",children:"实现取舍"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"为什么字符串入参不走 safeStringify"})}),`
`,e.jsxs(n.p,{children:["调用者传入字符串时，通常要估算的是这段文本本身的字节数。如果走 ",e.jsx(n.code,{children:"JSON.stringify('abc')"}),"，结果会变成 ",e.jsx(n.code,{children:'"abc"'}),"，多出两个引号；如果字符串里有换行、引号等字符，还会因为转义进一步改变体积。这里直接使用原始字符串更符合“估算文本体积”的直觉。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"为什么非字符串要先序列化"})}),`
`,e.jsx(n.p,{children:"对象、数组、错误上下文这类值没有直接的“字节数”。实际传输或缓存时通常会变成 JSON 文本，所以先序列化再估算更接近真实 payload 体积。"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"为什么使用 TextEncoder"})}),`
`,e.jsxs(n.p,{children:["JavaScript 的 ",e.jsx(n.code,{children:"string.length"})," 统计的是 UTF-16 code unit，不是网络传输或 JSON 请求体常用的 UTF-8 字节数。比如中文和 emoji 的字节数通常大于它们的 ",e.jsx(n.code,{children:"length"}),"，使用 ",e.jsx(n.code,{children:"TextEncoder"})," 更接近真实 payload 体积。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"为什么保留降级"})}),`
`,e.jsxs(n.p,{children:["监控和基础工具通常需要在更多环境中运行。缺少 ",e.jsx(n.code,{children:"TextEncoder"})," 时，低估比直接失败更可接受，因为调用方常用它做软限制、统计和保守裁剪，而不是精确协议校验。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"复杂度"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["时间复杂度：O(n)，n 是最终字符串长度；非字符串输入还包含 ",e.jsx(n.code,{children:"safeStringify"})," 的对象遍历成本"]}),`
`,e.jsxs(n.li,{children:["空间复杂度：O(n)，",e.jsx(n.code,{children:"TextEncoder"})," 会生成一份 ",e.jsx(n.code,{children:"Uint8Array"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"限制"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"这是估算工具，不是传输层的精确审计工具"}),`
`,e.jsxs(n.li,{children:["缺少 ",e.jsx(n.code,{children:"TextEncoder"})," 时，非 ASCII 文本会被低估"]}),`
`,e.jsxs(n.li,{children:["非字符串对象的体积取决于 ",e.jsx(n.code,{children:"safeStringify"})," 的 JSON 表达，不等同于对象在内存中的占用"]}),`
`]})]})}function p(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{p as default};
