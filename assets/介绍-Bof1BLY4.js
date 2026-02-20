import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

/**
 * 对象深度合并示例（含属性冲突）
 * 演示：嵌套对象合并 + 同名属性覆盖 + 类型推断
 */
const normalDemo = () => {
  const target = { a: 1, b: { c: 2, d: 3 }, e: 'target' }
  const source = { b: { c: 999, f: 4 }, e: 'source', g: 5 }

  action('target 原始对象')({ ...target, b: { ...target.b } })
  action('source 源对象')(source)

  // 返回类型自动推断为合并后的类型
  const merged = deepMerge(target, source)

  // 结果：{ a: 1, b: { c: 999, d: 3, f: 4 }, e: 'source', g: 5 }
  // b.c 冲突：source 覆盖 target (2 → 999)
  // e 冲突：source 覆盖 target ('target' → 'source')
  // b.d 保留，b.f 和 g 新增
  action('合并结果（注意 b.c 和 e 被覆盖）')(merged)

  // 类型推断示例：merged.g 类型为 number
  action('merged.g 类型正确推断')(merged.g)
}

export default normalDemo
`,d=`import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

/**
 * 数组深度合并示例
 * 演示：按索引合并，嵌套对象递归合并
 */
const arrayDemo = () => {
  const target = [1, 2, { a: 1, b: 2 }]
  const source = [10, undefined, { a: 999, c: 3 }, 4]

  action('target 原始数组')([...target])
  action('source 源数组')([...source])

  const merged = deepMerge(target, source)

  // 结果：[10, 2, { a: 999, b: 2, c: 3 }, 4]
  // 索引 0：source 覆盖 (1 → 10)
  // 索引 1：source 为 undefined，保留 target (2)
  // 索引 2：对象递归合并，a 被覆盖，b 保留，c 新增
  // 索引 3：target 无此索引，使用 source (4)
  action('合并结果（按索引合并）')(merged)
}

export default arrayDemo
`,l=`import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

import type { DeepMerge } from '../../../packages/js-utils/src/deepMerge/interface'

/**
 * 类型推断示例
 * 演示：DeepMerge 类型的使用和类型安全
 */
const typeDemo = () => {
  // 定义带类型的对象
  interface Target {
    name: string
    config: {
      timeout: number
      enabled: boolean
    }
  }

  interface Source {
    config: {
      timeout: number
      retries: number
    }
    extra: string
  }

  const target: Target = {
    name: 'app',
    config: { timeout: 1000, enabled: true },
  }

  const source: Source = {
    config: { timeout: 3000, retries: 3 },
    extra: 'data',
  }

  // 类型自动推断合并结果
  const merged = deepMerge(target, source)

  action('合并结果')(merged)
  // merged 类型包含所有字段：name, config.timeout, config.enabled, config.retries, extra

  // 也可以直接使用 DeepMerge 类型
  type MergedType = DeepMerge<Target, Source>
  const mergedType: MergedType = merged
  action('DeepMerge 类型')(mergedType)
}

export default typeDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"deepmerge",children:"deepMerge"}),`
`,e.jsx(n.p,{children:"深度合并两个对象或数组，支持完整的 TypeScript 类型推断。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["deepMerge 是一个对象深度合并函数，核心作用是：",e.jsx(n.strong,{children:"将源对象的属性递归合并到目标对象，支持嵌套对象和数组"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"递归遍历：处理嵌套对象和数组"}),`
`,e.jsx(n.li,{children:"类型判断：区分对象、数组、原始值"}),`
`,e.jsx(n.li,{children:"TypeScript 条件类型：实现精确的类型推断"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"与 Object.assign / 展开运算符的区别"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Object.assign"})," 只进行浅合并，嵌套对象会被覆盖"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deepMerge"})," 递归合并嵌套对象，保留两者的属性"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"配置合并：默认配置与用户配置合并"}),`
`,e.jsx(n.li,{children:"状态更新：深层更新 Redux/Vuex 状态"}),`
`,e.jsx(n.li,{children:"API 响应处理：合并分页数据"}),`
`,e.jsx(n.li,{children:"主题定制：基础主题与自定义主题合并"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"递归合并嵌套结构"}),`
`,e.jsx(n.li,{children:"TypeScript 类型安全"}),`
`,e.jsx(n.li,{children:"智能处理空值"}),`
`]}),`
`,e.jsx(n.h2,{id:"合并规则",children:"合并规则"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"两者都是对象：递归合并每个属性，同名属性 source 覆盖 target"}),`
`,e.jsx(n.li,{children:"两者都是数组：按索引递归合并每个元素"}),`
`,e.jsx(n.li,{children:"类型不同或 source 有值：优先使用 source"}),`
`,e.jsx(n.li,{children:"source 为空（null/undefined/空字符串等）：保留 target"}),`
`]}),`
`,e.jsx(n.h2,{id:"对象合并示例",children:"对象合并示例"}),`
`,e.jsx(n.p,{children:"演示嵌套对象合并和同名属性覆盖，返回类型自动推断。"}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"数组合并示例",children:"数组合并示例"}),`
`,e.jsx(n.p,{children:"按索引合并数组，嵌套对象递归合并。"}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"类型推断示例",children:"类型推断示例"}),`
`,e.jsxs(n.p,{children:["演示 ",e.jsx(n.code,{children:"DeepMerge"})," 类型的使用，支持完整的类型安全。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"target"}),e.jsx("td",{children:e.jsx("code",{children:"T extends object"})}),e.jsx("td",{children:"目标对象，合并结果会写入此对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"source"}),e.jsx("td",{children:e.jsx("code",{children:"S extends object"})}),e.jsx("td",{children:"源对象，提供要合并的属性"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"DeepMerge<T, S>"})}),e.jsx("td",{children:"合并后的对象，类型自动推断包含两者所有属性"})]})})]}),`
`,e.jsx(n.h2,{id:"类型定义",children:"类型定义"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型名"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"DeepMerge<T, S>"})}),e.jsx("td",{children:"递归合并类型，将 Source 的属性合并到 Target，同名属性使用 Source 类型"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 主函数实现，递归合并逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," - ",e.jsx(n.code,{children:"DeepMerge"})," 类型定义，递归条件类型"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"判断 target 和 source 是否都是对象/数组"}),`
`,e.jsx(n.li,{children:"如果都是对象：递归合并每个属性"}),`
`,e.jsx(n.li,{children:"如果都是数组：按索引递归合并元素"}),`
`,e.jsx(n.li,{children:"如果类型不同或 source 有值：使用 source"}),`
`,e.jsx(n.li,{children:"如果 source 为空：保留 target"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["使用 ",e.jsx(n.code,{children:"Object.assign"})," 创建基础合并结果"]}),`
`,e.jsx(n.li,{children:"递归调用自身处理嵌套结构"}),`
`,e.jsx(n.li,{children:"数组按索引对位合并，而非 concat"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DeepMerge<T, S>"})," 使用条件类型递归推断"]}),`
`]})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{p as default};
