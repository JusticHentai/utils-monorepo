import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'
import { ByteUnit } from '../../../packages/element-utils/src/formatBytes/interface'

const basicDemo = () => {
  // 基础用法 - 自动选择单位
  const result1 = formatBytes(1024)
  action('1024 字节')(result1.formatted) // "1 KB"

  const result2 = formatBytes(1536)
  action('1536 字节')(result2.formatted) // "1.5 KB"

  // 指定小数位数
  const result3 = formatBytes(1536, { decimals: 0 })
  action('1536 字节（无小数）')(result3.formatted) // "2 KB"

  // 指定输出单位
  const result4 = formatBytes(1048576, { unit: ByteUnit.KB })
  action('1MB 转 KB')(result4.formatted) // "1024 KB"

  const result5 = formatBytes(1048576, { unit: ByteUnit.GB })
  action('1MB 转 GB')(result5.formatted) // "0 GB"
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'

const autoUnitDemo = () => {
  // 自动选择最合适的单位
  const sizes = [
    0,
    512,
    1024,
    1024 * 1024,
    1024 * 1024 * 1024,
    1024 * 1024 * 1024 * 1024,
  ]

  const results = sizes.map((size) => {
    const result = formatBytes(size)
    return {
      bytes: size,
      formatted: result.formatted,
      unit: result.unit,
    }
  })

  action('自动单位选择示例')(results)

  // 结果示例：
  // [
  //   { bytes: 0, formatted: "0 B", unit: "B" },
  //   { bytes: 512, formatted: "512 B", unit: "B" },
  //   { bytes: 1024, formatted: "1 KB", unit: "KB" },
  //   { bytes: 1048576, formatted: "1 MB", unit: "MB" },
  //   { bytes: 1073741824, formatted: "1 GB", unit: "GB" },
  //   { bytes: 1099511627776, formatted: "1 TB", unit: "TB" },
  // ]
}

export default autoUnitDemo
`;function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"formatbytes",children:"formatBytes"}),`
`,e.jsx(n.p,{children:"将字节数格式化为可读字符串，支持自动单位选择和指定单位输出。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formatBytes"})," 是一个用于格式化字节数的工具函数，常用于展示文件大小、内存使用量等场景。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"核心功能："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"自动选择最合适的单位（B、KB、MB、GB、TB、PB）"}),`
`,e.jsx(n.li,{children:"支持指定输出单位"}),`
`,e.jsx(n.li,{children:"可配置小数位数"}),`
`,e.jsx(n.li,{children:"返回结构化结果，包含数值、单位和格式化字符串"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"应用场景："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"文件大小展示"}),`
`,e.jsx(n.li,{children:"内存使用量监控"}),`
`,e.jsx(n.li,{children:"网络流量统计"}),`
`,e.jsx(n.li,{children:"存储空间展示"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(n.p,{children:"基础的字节格式化，支持指定小数位数和输出单位。"}),`
`,e.jsx(t,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"自动单位选择",children:"自动单位选择"}),`
`,e.jsx(n.p,{children:"工具会自动选择最合适的单位，避免显示过大或过小的数值。"}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"bytes"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"需要格式化的字节数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"FormatBytesOptions"})}),e.jsx("td",{children:"配置选项（可选）"})]})]})]}),`
`,e.jsx(n.h2,{id:"formatbytesoptions-配置",children:"FormatBytesOptions 配置"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"decimals"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"小数位数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unit"}),e.jsx("td",{children:e.jsx("code",{children:"ByteUnit"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"指定输出单位，不传则自动选择"})]})]})]}),`
`,e.jsx(n.h2,{id:"formatbytesresult-返回值",children:"FormatBytesResult 返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"格式化后的数值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unit"}),e.jsx("td",{children:e.jsx("code",{children:"ByteUnit"})}),e.jsx("td",{children:"单位（B、KB、MB、GB、TB、PB）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"formatted"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:'格式化后的字符串（如 "1.50 MB"）'})]})]})]}),`
`,e.jsx(n.h3,{id:"枚举定义",children:"枚举定义"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`enum ByteUnit {
  B = 'B',
  KB = 'KB',
  MB = 'MB',
  GB = 'GB',
  TB = 'TB',
  PB = 'PB',
}
`})}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"文件职责："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),": 主函数，实现字节格式化逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),": ByteUnit 枚举和配置类型定义"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"核心流程："})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"处理边界情况（0 和负数）"}),`
`,e.jsx(n.li,{children:"如果指定了单位，直接使用指定单位计算"}),`
`,e.jsxs(n.li,{children:["否则使用",e.jsx(n.strong,{children:"对数计算"}),"直接定位合适的单位"]}),`
`,e.jsx(n.li,{children:"返回结构化结果，包含数值、单位和格式化字符串"}),`
`]}),`
`,e.jsx(n.h3,{id:"对数计算-vs-循环遍历",children:"对数计算 vs 循环遍历"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"实现方式"}),e.jsx("th",{children:"时间复杂度"}),e.jsx("th",{children:"代码示例"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"循环遍历"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:e.jsx("code",{children:"while (value >= 1024) { value /= 1024; i++ }"})}),e.jsx("td",{children:"逐级除以 1024，最多遍历 6 次"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"对数计算"})}),e.jsx("td",{children:e.jsx("strong",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"Math.floor(Math.log(bytes) / LOG_1024)"})}),e.jsx("td",{children:"一步计算，无需遍历"})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"对数计算核心公式："})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 预计算常量，避免重复运算
const LOG_1024 = Math.log(1024)

// 使用对数换底公式直接计算单位索引
const unitIndex = Math.floor(Math.log(bytes) / LOG_1024)
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"计算示例："})}),`
`,e.jsxs(n.p,{children:["以 ",e.jsx(n.code,{children:"1048576"})," 字节（1MB）为例："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`unitIndex = floor(log(1048576) / log(1024))
         = floor(13.86... / 6.93...)
         = floor(2)
         = 2
`})}),`
`,e.jsxs(n.p,{children:["索引 2 对应 ",e.jsx(n.code,{children:"UNITS[2]"})," = ",e.jsx(n.code,{children:"MB"}),"，直接定位到正确单位。"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["为什么预计算 ",e.jsx(n.code,{children:"LOG_1024"}),"："]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Math.log(1024)"})," 是固定值（约 6.931），每次调用函数都重新计算是浪费。将其预计算为常量，运行时直接使用，节省一次对数运算。"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方式"}),e.jsx("th",{children:"代码"}),e.jsx("th",{children:"每次调用运算次数"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"未预处理"}),e.jsx("td",{children:e.jsx("code",{children:"Math.log(bytes) / Math.log(1024)"})}),e.jsx("td",{children:"2 次对数运算"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"预处理"})}),e.jsx("td",{children:e.jsx("code",{children:"Math.log(bytes) / LOG_1024"})}),e.jsx("td",{children:e.jsx("strong",{children:"1 次对数运算"})})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键技术点："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用 1024 作为单位换算基数（二进制标准）"}),`
`,e.jsxs(n.li,{children:["使用对数计算 O(1) 直接定位单位，参考 ",e.jsx(n.a,{href:"https://github.com/avoidwork/filesize.js",rel:"nofollow",children:"filesize.js"}),"、",e.jsx(n.a,{href:"https://github.com/sindresorhus/pretty-bytes",rel:"nofollow",children:"pretty-bytes"})," 等流行库的实现"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"toFixed()"})," 控制小数位数"]}),`
`,e.jsx(n.li,{children:"使用枚举确保单位值的类型安全"}),`
`]})]})}function m(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
