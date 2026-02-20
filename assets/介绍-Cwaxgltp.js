import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const basicDemo = () => {
  const examples = [
    { value: 532, expected: '532' },
    { value: 1234, expected: '1.2K' },
    { value: 9999, expected: '10K' },
    { value: 12345, expected: '12.3K' },
    { value: 999999, expected: '1M' },
  ]

  const results = examples.map(({ value, expected }) => ({
    input: value,
    output: formatNumber({ value }),
    expected,
  }))

  action('基础用法示例')(results)
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const magnitudeDemo = () => {
  const magnitudes = [
    { label: '百', value: 532, description: '< 1000，不缩写' },
    { label: '千 (K)', value: 1500, description: '1K = 1,000' },
    { label: '万', value: 15000, description: '15K = 15,000' },
    { label: '十万', value: 150000, description: '150K = 150,000' },
    { label: '百万 (M)', value: 1500000, description: '1M = 1,000,000' },
    { label: '千万', value: 15000000, description: '15M = 15,000,000' },
    { label: '亿', value: 150000000, description: '150M = 150,000,000' },
    { label: '十亿 (B)', value: 1500000000, description: '1B = 1,000,000,000' },
    { label: '百亿', value: 15000000000, description: '15B = 15,000,000,000' },
    {
      label: '万亿 (T)',
      value: 1500000000000,
      description: '1T = 1,000,000,000,000',
    },
  ]

  const results = magnitudes.map(({ label, value, description }) => ({
    数量级: label,
    原始值: value.toLocaleString(),
    格式化: formatNumber({ value }),
    说明: description,
  }))

  action('各数量级演示')(results)
}

export default magnitudeDemo
`,d=`import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const negativeDemo = () => {
  const negativeExamples = [
    { value: -532, description: '负小数' },
    { value: -1234, description: '负千' },
    { value: -1234567, description: '负百万' },
    { value: -1234567890, description: '负十亿' },
  ]

  const results = negativeExamples.map(({ value, description }) => ({
    描述: description,
    原始值: value.toLocaleString(),
    格式化: formatNumber({ value }),
  }))

  action('负数处理演示')(results)
}

export default negativeDemo
`,o=`import { action } from 'storybook/actions'
import formatNumber from '../../../packages/js-utils/src/formatNumber'

const customDemo = () => {
  const value = 1234567

  // 不同小数位配置
  const decimalExamples = [
    { decimals: 0, result: formatNumber({ value, decimals: 0 }) },
    { decimals: 1, result: formatNumber({ value, decimals: 1 }) },
    { decimals: 2, result: formatNumber({ value, decimals: 2 }) },
  ]

  // 是否去除尾零
  const trimZeroExamples = [
    {
      value: 1000000,
      trimZeros: true,
      result: formatNumber({ value: 1000000, trimZeros: true }),
    },
    {
      value: 1000000,
      trimZeros: false,
      result: formatNumber({ value: 1000000, trimZeros: false }),
    },
  ]

  action('小数位配置')({
    原始值: value.toLocaleString(),
    结果: decimalExamples,
  })

  action('尾零处理配置')({
    结果: trimZeroExamples,
  })
}

export default customDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"formatnumber",children:"formatNumber"}),`
`,n.jsx(e.p,{children:"formatNumber 是一个将大数字格式化为带后缀简短形式的工具函数。它按照国际通用的 SI 前缀思路（K/M/B/T），将数字缩写为易读的格式。"}),`
`,n.jsx(e.h2,{id:"基本规则",children:"基本规则"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"K"})," = 千 = 10³"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"M"})," = 百万 = 10⁶"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"B"})," = 十亿 = 10⁹"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"T"})," = 万亿 = 10¹²"]}),`
`]}),`
`,n.jsx(e.h3,{id:"默认策略",children:"默认策略"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"0–999"}),"：原样显示（如 ",n.jsx(e.code,{children:"532"}),"）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"1,000–9,999"}),"：保留 1 位小数（如 ",n.jsx(e.code,{children:"1.2K"}),"、",n.jsx(e.code,{children:"9.9K"}),"）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"10,000–999,999"}),"：保留 1 位小数（如 ",n.jsx(e.code,{children:"12.3K"}),"、",n.jsx(e.code,{children:"532.1K"}),"）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"≥ 1,000,000"}),"：按 M/B/T 类推（如 ",n.jsx(e.code,{children:"1.2M"}),"、",n.jsx(e.code,{children:"3B"}),"）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"特殊处理",children:"特殊处理"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"四舍五入进位"}),"：",n.jsx(e.code,{children:"999.9K"})," 四舍五入后变成 ",n.jsx(e.code,{children:"1M"}),"，避免出现 ",n.jsx(e.code,{children:"1000K"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"去尾零"}),"：",n.jsx(e.code,{children:"1.0K"})," 显示为 ",n.jsx(e.code,{children:"1K"}),"（可配置）"]}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(e.p,{children:"展示常见数字的格式化结果："}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"各数量级演示",children:"各数量级演示"}),`
`,n.jsx(e.p,{children:"展示从百到万亿的各个数量级："}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"负数处理",children:"负数处理"}),`
`,n.jsx(e.p,{children:"支持负数的格式化："}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"自定义配置",children:"自定义配置"}),`
`,n.jsx(e.p,{children:"可以自定义小数位数和尾零处理："}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"必填"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"是"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"要格式化的数字"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"decimals"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"否"}),n.jsx("td",{children:"1"}),n.jsx("td",{children:"保留的小数位数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"trimZeros"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"否"}),n.jsx("td",{children:"true"}),n.jsx("td",{children:"是否去除尾随零（1.0K → 1K）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"magnitudes"}),n.jsx("td",{children:n.jsx("code",{children:"NumberMagnitude[]"})}),n.jsx("td",{children:"否"}),n.jsx("td",{children:"DEFAULT_MAGNITUDES"}),n.jsx("td",{children:"自定义数量级配置"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：格式化后的字符串"}),`
`]}),`
`,n.jsx(e.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`/** 数量级后缀类型 */
type NumberSuffix = 'K' | 'M' | 'B' | 'T'

/** 数量级配置 */
interface NumberMagnitude {
  /** 阈值 */
  threshold: number
  /** 后缀 */
  suffix: NumberSuffix
  /** 除数 */
  divisor: number
}

/** formatNumber 配置选项 */
interface FormatNumberOptions {
  /** 要格式化的数字 */
  value: number
  /** 小数位数，默认值：1 */
  decimals?: number
  /** 是否去除尾随零，默认值：true */
  trimZeros?: boolean
  /** 自定义数量级配置 */
  magnitudes?: NumberMagnitude[]
}
`})}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import formatNumber from '@justichentai/js-utils/formatNumber'

// 基础用法
formatNumber({ value: 532 })        // "532"
formatNumber({ value: 1234 })       // "1.2K"
formatNumber({ value: 12345 })      // "12.3K"
formatNumber({ value: 1234567 })    // "1.2M"
formatNumber({ value: 1234567890 }) // "1.2B"

// 自定义小数位
formatNumber({ value: 1234567, decimals: 2 }) // "1.23M"
formatNumber({ value: 1234567, decimals: 0 }) // "1M"

// 保留尾零
formatNumber({ value: 1000000, trimZeros: false }) // "1.0M"

// 负数
formatNumber({ value: -1234567 }) // "-1.2M"
`})}),`
`,n.jsx(e.h2,{id:"实现原理",children:"实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"负数处理"}),"：先取绝对值计算，最后添加负号"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"阈值匹配"}),"：从大到小遍历数量级配置，找到第一个满足条件的阈值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"四舍五入"}),"：使用 ",n.jsx(e.code,{children:"toFixed()"})," 进行四舍五入"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"进位处理"}),"：当四舍五入后超过 1000 时，递归调用自身处理进位"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"尾零处理"}),"：使用 ",n.jsx(e.code,{children:"parseFloat().toString()"})," 去除尾零"]}),`
`]}),`
`,n.jsxs(e.p,{children:["这种实现确保了输出格式的一致性和可读性，避免出现 ",n.jsx(e.code,{children:"1000K"})," 这种不自然的表示。"]})]})}function p(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{p as default};
