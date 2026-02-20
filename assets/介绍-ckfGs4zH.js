import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import { METRIC_NAME, METRIC_RATING } from '../../../packages/element-utils/src/getMetricRating/interface'

const lcpDemo = () => {
  // LCP 阈值: good <= 2500ms, poor > 4000ms

  const goodLCP = getMetricRating(METRIC_NAME.LCP, 1500) // 1.5秒，良好
  const needsImprovementLCP = getMetricRating(METRIC_NAME.LCP, 3000) // 3秒，需要改进
  const poorLCP = getMetricRating(METRIC_NAME.LCP, 5000) // 5秒，较差

  action('LCP 1500ms 评级')(goodLCP) // METRIC_RATING.GOOD
  action('LCP 3000ms 评级')(needsImprovementLCP) // METRIC_RATING.NEEDS_IMPROVEMENT
  action('LCP 5000ms 评级')(poorLCP) // METRIC_RATING.POOR

  // 枚举值比较
  action('是否为 Good 评级')(goodLCP === METRIC_RATING.GOOD)
}

export default lcpDemo
`,d=`import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import { METRIC_NAME, METRIC_RATING } from '../../../packages/element-utils/src/getMetricRating/interface'

const clsDemo = () => {
  // CLS 阈值: good <= 0.1, poor > 0.25

  const goodCLS = getMetricRating(METRIC_NAME.CLS, 0.05) // 良好
  const needsImprovementCLS = getMetricRating(METRIC_NAME.CLS, 0.15) // 需要改进
  const poorCLS = getMetricRating(METRIC_NAME.CLS, 0.5) // 较差

  action('CLS 0.05 评级')(goodCLS) // METRIC_RATING.GOOD
  action('CLS 0.15 评级')(needsImprovementCLS) // METRIC_RATING.NEEDS_IMPROVEMENT
  action('CLS 0.5 评级')(poorCLS) // METRIC_RATING.POOR

  // 枚举值比较
  action('是否为 Poor 评级')(poorCLS === METRIC_RATING.POOR)
}

export default clsDemo
`,l=`import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import {
  METRIC_NAME,
  WEB_VITALS_THRESHOLDS,
} from '../../../packages/element-utils/src/getMetricRating/interface'

const allMetricsDemo = () => {
  // 测试所有指标的评级
  const metrics = [
    { name: METRIC_NAME.LCP, value: 2000 },
    { name: METRIC_NAME.FID, value: 80 },
    { name: METRIC_NAME.CLS, value: 0.08 },
    { name: METRIC_NAME.FCP, value: 1500 },
    { name: METRIC_NAME.TTFB, value: 600 },
    { name: METRIC_NAME.INP, value: 150 },
    { name: METRIC_NAME.FP, value: 800 },
  ]

  const results = metrics.map(({ name, value }) => ({
    name,
    value,
    rating: getMetricRating(name, value),
    thresholds: WEB_VITALS_THRESHOLDS[name],
  }))

  action('所有指标评级结果')(results)
}

export default allMetricsDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getmetricrating",children:"getMetricRating"}),`
`,n.jsx(e.p,{children:"根据 Web Vitals 标准，获取性能指标的评级（good/needs-improvement/poor）。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getMetricRating"})," 是一个用于评估 Web Vitals 性能指标的工具函数，基于 Google 定义的阈值标准。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心功能："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"支持所有主流 Web Vitals 指标（LCP、FID、CLS、FCP、TTFB、INP、FP）"}),`
`,n.jsx(e.li,{children:"返回三级评级：Good（良好）、NeedsImprovement（需要改进）、Poor（较差）"}),`
`,n.jsx(e.li,{children:"使用 TypeScript 枚举提供类型安全的指标名称和评级值"}),`
`,n.jsx(e.li,{children:"内置标准阈值配置，符合 Google 官方标准"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"应用场景："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"前端性能监控系统中判断指标健康度"}),`
`,n.jsx(e.li,{children:"性能报告生成，标记需要优化的指标"}),`
`,n.jsx(e.li,{children:"实时性能告警，当指标变差时触发通知"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Web Vitals 阈值标准："})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"指标"}),n.jsx("th",{children:"Good"}),n.jsx("th",{children:"Needs Improvement"}),n.jsx("th",{children:"Poor"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"LCP"}),n.jsx("td",{children:"≤ 2.5s"}),n.jsx("td",{children:"≤ 4s"}),n.jsx("td",{children:"> 4s"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FID"}),n.jsx("td",{children:"≤ 100ms"}),n.jsx("td",{children:"≤ 300ms"}),n.jsx("td",{children:"> 300ms"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"CLS"}),n.jsx("td",{children:"≤ 0.1"}),n.jsx("td",{children:"≤ 0.25"}),n.jsx("td",{children:"> 0.25"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FCP"}),n.jsx("td",{children:"≤ 1.8s"}),n.jsx("td",{children:"≤ 3s"}),n.jsx("td",{children:"> 3s"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"TTFB"}),n.jsx("td",{children:"≤ 800ms"}),n.jsx("td",{children:"≤ 1.8s"}),n.jsx("td",{children:"> 1.8s"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"INP"}),n.jsx("td",{children:"≤ 200ms"}),n.jsx("td",{children:"≤ 500ms"}),n.jsx("td",{children:"> 500ms"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FP"}),n.jsx("td",{children:"≤ 1s"}),n.jsx("td",{children:"≤ 2.5s"}),n.jsx("td",{children:"> 2.5s"})]})]})]}),`
`,n.jsx(e.h2,{id:"lcp-评级",children:"LCP 评级"}),`
`,n.jsx(e.p,{children:"LCP（Largest Contentful Paint）是衡量页面主要内容加载速度的核心指标。使用枚举值进行类型安全的调用和比较。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"cls-评级",children:"CLS 评级"}),`
`,n.jsx(e.p,{children:"CLS（Cumulative Layout Shift）衡量页面视觉稳定性，值越小越好。"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"所有指标评级",children:"所有指标评级"}),`
`,n.jsx(e.p,{children:"批量评估多个性能指标，生成完整的性能报告。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"name"}),n.jsx("td",{children:n.jsx("code",{children:"MetricName"})}),n.jsx("td",{children:"指标名称枚举：MetricName.LCP | .FID | .CLS | .FCP | .TTFB | .INP | .FP"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"指标值（毫秒或分数）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"MetricRating"})}),n.jsx("td",{children:"MetricRating.Good | .NeedsImprovement | .Poor"})]})]})]}),`
`,n.jsx(e.h3,{id:"枚举定义",children:"枚举定义"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"MetricName 枚举："})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`enum MetricName {
  LCP = 'LCP',
  FID = 'FID',
  CLS = 'CLS',
  FCP = 'FCP',
  TTFB = 'TTFB',
  INP = 'INP',
  FP = 'FP',
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"MetricRating 枚举："})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`enum MetricRating {
  Good = 'good',
  NeedsImprovement = 'needs-improvement',
  Poor = 'poor',
}
`})}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": 主函数，实现评级判断逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),": 枚举定义和阈值配置常量"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["根据指标名称枚举从 ",n.jsx(e.code,{children:"WEB_VITALS_THRESHOLDS"})," 获取对应阈值"]}),`
`,n.jsxs(e.li,{children:["如果阈值不存在，返回默认评级 ",n.jsx(e.code,{children:"MetricRating.Good"})]}),`
`,n.jsxs(e.li,{children:["将指标值与阈值比较：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value <= good"})," 返回 ",n.jsx(e.code,{children:"MetricRating.Good"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value <= poor"})," 返回 ",n.jsx(e.code,{children:"MetricRating.NeedsImprovement"})]}),`
`,n.jsxs(e.li,{children:["否则返回 ",n.jsx(e.code,{children:"MetricRating.Poor"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用 TypeScript 枚举确保指标名称和评级值的类型安全"}),`
`,n.jsxs(e.li,{children:["阈值配置使用计算属性名 ",n.jsx(e.code,{children:"[MetricName.XXX]"})," 与枚举关联"]}),`
`,n.jsx(e.li,{children:"采用 Google Web Vitals 官方标准阈值"}),`
`]})]})}function g(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{g as default};
