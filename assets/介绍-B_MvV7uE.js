import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-C_s77IFb.js";import{C as r}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const c=`import { action } from 'storybook/actions'
import safeStringify from '../../../packages/element-utils/src/safeStringify'

const primitiveDemo = () => {
  const values = [
    'hello',
    1024,
    true,
    null,
    undefined,
    BigInt(9007199254740991),
  ]

  const results = values.map((value) => ({
    type: typeof value,
    output: safeStringify(value),
  }))

  action('基础值序列化结果')(results)
}

export default primitiveDemo
`,l=`import { action } from 'storybook/actions'
import safeStringify from '../../../packages/element-utils/src/safeStringify'

interface CircularExample {
  name: string
  self?: CircularExample
  nested?: {
    parent: CircularExample
  }
}

const circularDemo = () => {
  const value: CircularExample = {
    name: 'early error payload',
  }

  value.self = value
  value.nested = {
    parent: value,
  }

  action('循环引用序列化结果')(safeStringify(value))
}

export default circularDemo
`;function s(d){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"safestringify",children:"safeStringify"}),`
`,e.jsx(n.p,{children:"安全序列化未知值，适合处理错误原因、日志上下文、上报 payload 等可能包含循环引用或 BigInt 的数据。"}),`
`,e.jsx(n.h2,{id:"开发者视角",children:"开发者视角"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"safeStringify"})," 是对 ",e.jsx(n.code,{children:"JSON.stringify"})," 的轻量保护层。它解决的是“监控和日志代码不能因为序列化未知值而中断业务流程”的问题，而不是追求完整还原对象图。"]}),`
`,e.jsxs(n.p,{children:["它的输入是 ",e.jsx(n.code,{children:"unknown"}),"，输出永远是 ",e.jsx(n.code,{children:"string"}),"。这意味着调用方不需要在外层写 ",e.jsx(n.code,{children:"try/catch"}),"，也不需要提前判断值是不是对象、是不是循环引用、是不是包含 ",e.jsx(n.code,{children:"BigInt"}),"。"]}),`
`,e.jsxs(n.p,{children:["这个工具目前被 ",e.jsx(n.code,{children:"estimateBytes"})," 和 ",e.jsx(n.code,{children:"earlyErrorQueue"})," 复用："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"estimateBytes"})," 用它把非字符串输入转成可计算体积的稳定字符串"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"earlyErrorQueue"})," 用它处理未知 ",e.jsx(n.code,{children:"PromiseRejectionEvent.reason"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"模块边界",children:"模块边界"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"模块"}),e.jsx("th",{children:"输入"}),e.jsx("th",{children:"输出"}),e.jsx("th",{children:"职责边界"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"safeStringify"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"把任意值转成字符串，并保证转换过程不把异常抛给调用方。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`只关心序列化后的字节数；非字符串值的安全序列化交给
`,e.jsx("code",{children:"safeStringify"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"earlyErrorQueue"})}),e.jsx("td",{children:"错误事件、未知错误原因"}),e.jsx("td",{children:"标准化错误事件"}),e.jsx("td",{children:e.jsxs(n.p,{children:[`只负责错误语义的标准化；未知对象转字符串交给
`,e.jsx("code",{children:"safeStringify"}),"。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"数据结构",children:"数据结构"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"数据结构"}),e.jsx("th",{children:"位置"}),e.jsx("th",{children:"作用"}),e.jsx("th",{children:"为什么这样设计"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"seen: unknown[]"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"safeStringify"})," 函数内部"]})}),e.jsx("td",{children:"保存当前序列化过程中已经访问过的对象引用。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[`只在单次调用内有效，不污染模块级状态；数组足够小，且避免引入
`,e.jsx("code",{children:"WeakSet"})," 对老环境兼容性和构建输出的影响。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"JSON.stringify replacer"})}),e.jsx("td",{children:e.jsx("code",{children:"JSON.stringify(value, replacer)"})}),e.jsx("td",{children:"在 JSON 遍历每个属性时插入自定义处理逻辑。"}),e.jsx("td",{children:"利用原生 JSON 遍历对象树，不手写递归，减少边界错误。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"[Circular]"'})}),e.jsx("td",{children:"重复引用替换值"}),e.jsx("td",{children:"标记对象图中再次出现的同一个对象。"}),e.jsx("td",{children:e.jsx(n.p,{children:"保留“这里原本是重复引用”的信息，同时让结果仍然是合法 JSON 字符串。"})})]})]})]}),`
`,e.jsx(n.h2,{id:"数据流",children:"数据流"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-mermaid",children:`flowchart TD
  A["调用 safeStringify(value)"] --> B["创建 seen 数组"]
  B --> C["JSON.stringify(value, replacer)"]
  C --> D{"replacer 收到 item"}
  D -->|BigInt| E["item.toString()"]
  D -->|非对象或 null| F["原样返回 item"]
  D -->|对象且未出现| G["seen.push(item) 并返回 item"]
  D -->|对象且已出现| H["返回 '[Circular]'"]
  C --> I{"JSON.stringify 结果"}
  I -->|string| J["返回 JSON 字符串"]
  I -->|undefined| K["toSafeString(value)"]
  C -->|抛错| K
  K --> L["String(value) 或 Object.prototype.toString.call(value)"]
`})}),`
`,e.jsx(n.h2,{id:"关键行为",children:"关键行为"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"输入"}),e.jsx("th",{children:"处理方式"}),e.jsx("th",{children:"原因"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"普通对象"}),e.jsx("td",{children:e.jsxs(n.p,{children:["交给 ",e.jsx("code",{children:"JSON.stringify"}),"。"]})}),e.jsx("td",{children:"保留 JSON 语义，输出适合日志和网络传输。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"循环引用对象"}),e.jsx("td",{children:e.jsxs(n.p,{children:["重复对象替换为 ",e.jsx("code",{children:"[Circular]"}),"。"]})}),e.jsx("td",{children:"避免 JSON 原生循环引用错误。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"BigInt"})}),e.jsx("td",{children:"转成十进制字符串。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["原生 ",e.jsx("code",{children:"JSON.stringify"}),` 遇到 BigInt
会抛错，监控链路不应因此中断。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"undefined"}),"、函数、symbol 顶层值"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"JSON.stringify"})," 得到 ",e.jsx("code",{children:"undefined"}),` 后，降级为
`,e.jsx("code",{children:"String(value)"}),"。"]})}),e.jsx("td",{children:"保证函数返回值永远是字符串。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"自定义序列化抛错的对象"}),e.jsx("td",{children:e.jsxs(n.p,{children:["捕获异常后调用 ",e.jsx("code",{children:"toSafeString"}),"。"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["对象可能定义了有副作用或会抛错的 ",e.jsx("code",{children:"toJSON"}),"，需要兜底。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"基础值序列化",children:"基础值序列化"}),`
`,e.jsxs(n.p,{children:["基础值直接按 JSON 规则输出；",e.jsx(n.code,{children:"undefined"})," 这类 JSON 顶层不可序列化值会降级为字符串。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"循环引用序列化",children:"循环引用序列化"}),`
`,e.jsxs(n.p,{children:["对象图里重复出现的对象会输出为 ",e.jsx(n.code,{children:"[Circular]"}),"，避免抛出 ",e.jsx(n.code,{children:"Converting circular structure to JSON"}),"。"]}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"需要安全序列化的任意值。"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"可安全展示、记录或继续计算体积的字符串。"})]})})]}),`
`,e.jsx(n.h2,{id:"函数级导读",children:"函数级导读"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toSafeString(value)"})}),e.jsx("td",{children:"兜底字符串转换。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["优先调用 ",e.jsx("code",{children:"String(value)"}),`；如果对象自定义
`,e.jsx("code",{children:"toString"}),` 仍然抛错，则使用
`,e.jsx("code",{children:"Object.prototype.toString.call(value)"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"safeStringify(value)"})}),e.jsx("td",{children:"安全序列化入口。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["创建 ",e.jsx("code",{children:"seen"}),` 数组记录已访问对象，调用
`,e.jsx("code",{children:"JSON.stringify"}),` replacer 处理循环引用和 BigInt；失败时走
`,e.jsx("code",{children:"toSafeString"}),"。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"逐行实现拆解",children:"逐行实现拆解"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"代码片段"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"开发者关注点"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"const seen: unknown[] = []"})}),e.jsx("td",{children:"初始化单次调用内的访问记录。"}),e.jsx("td",{children:"每次调用重新创建，避免不同调用之间互相污染。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"JSON.stringify(value, replacer)"})}),e.jsx("td",{children:"借助原生 JSON 遍历对象树。"}),e.jsx("td",{children:"复杂对象的遍历顺序和属性处理仍遵循原生 JSON 规则。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"typeof item === 'bigint'"})}),e.jsx("td",{children:"提前处理 BigInt。"}),e.jsx("td",{children:"BigInt 不能被 JSON 原生序列化，必须在 replacer 阶段转掉。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"typeof item !== 'object' || item === null"})}),e.jsx("td",{children:"快速放行基本类型和 null。"}),e.jsx("td",{children:"只有对象引用才需要参与循环检测。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"seen.includes(item)"})}),e.jsx("td",{children:"判断对象引用是否已经出现过。"}),e.jsx("td",{children:"这里比较的是引用身份，不是对象内容。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"seen.push(item)"})}),e.jsx("td",{children:"记录首次出现的对象。"}),e.jsxs("td",{children:["后续再次遇到同一引用时会替换为 ",e.jsx(n.code,{children:"[Circular]"}),"。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text ?? toSafeString(value)"})}),e.jsx("td",{children:"处理 JSON 顶层不可序列化值。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"JSON.stringify(undefined)"})," 返回 ",e.jsx("code",{children:"undefined"}),`
，但工具契约要求返回
`,e.jsx("code",{children:"string"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"catch { return toSafeString(value) }"})}),e.jsx("td",{children:"捕获所有序列化异常。"}),e.jsx("td",{children:"调用方不需要额外保护监控/日志代码。"})]})]})]}),`
`,e.jsx(n.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.stories.ts"})}),e.jsx("td",{children:"注册 Storybook story。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["设置标题 ",e.jsx("code",{children:"element-utils/safeStringify"}),`、绑定演示组件，并使用
`,e.jsx("code",{children:"centered"})," 布局。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"index.tsx"})}),e.jsx("td",{children:"渲染演示入口。"}),e.jsx("td",{children:"只负责按钮 UI，具体业务演示拆到 demo 文件里。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"primitiveDemo.ts"})}),e.jsx("td",{children:"演示基础值序列化。"}),e.jsx("td",{children:"覆盖 string、number、boolean、null、undefined 和 BigInt。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circularDemo.ts"})}),e.jsx("td",{children:"演示循环引用序列化。"}),e.jsxs("td",{children:["构造 self 和 nested.parent 两种重复引用，观察 ",e.jsx(n.code,{children:"[Circular]"})," 输出。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"介绍.mdx"})}),e.jsx("td",{children:"承载说明文档。"}),e.jsx("td",{children:"解释适用场景、参数、返回值、函数职责和实现流程。"})]})]})]}),`
`,e.jsx(n.h2,{id:"实现取舍",children:"实现取舍"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["为什么不直接 ",e.jsx(n.code,{children:"JSON.stringify"})]})}),`
`,e.jsx(n.p,{children:"直接调用在以下情况下会失败或返回非字符串："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"循环引用对象会抛出异常"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BigInt"})," 会抛出异常"]}),`
`,e.jsxs(n.li,{children:["顶层 ",e.jsx(n.code,{children:"undefined"}),"、函数、symbol 会返回 ",e.jsx(n.code,{children:"undefined"})]}),`
`,e.jsxs(n.li,{children:["自定义 ",e.jsx(n.code,{children:"toJSON"})," 可能抛出异常"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"为什么用数组而不是 WeakSet"})}),`
`,e.jsxs(n.p,{children:["当前工具目标是小型 payload、错误对象、日志上下文。数组实现更直观，构建输出更轻，也适配没有 ",e.jsx(n.code,{children:"WeakSet"})," 的老环境。代价是重复检测是 O(n)，但在这些场景里对象规模通常很小。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"复杂度"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["时间复杂度：约 O(n²)，其中 n 是对象节点数量；主要来自每个对象节点上的 ",e.jsx(n.code,{children:"seen.includes"})]}),`
`,e.jsx(n.li,{children:"空间复杂度：O(n)，用于保存访问过的对象引用"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"限制"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["它不会保留完整对象图关系，只用 ",e.jsx(n.code,{children:"[Circular]"})," 标记重复引用"]}),`
`,e.jsxs(n.li,{children:["它不处理 ",e.jsx(n.code,{children:"Map"}),"、",e.jsx(n.code,{children:"Set"})," 的结构化展开，行为遵循原生 JSON 规则"]}),`
`,e.jsx(n.li,{children:"它适合日志和监控，不适合做数据持久化格式"}),`
`]})]})}function u(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{u as default};
