import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import getNavigationType from '../../../packages/element-utils/src/getNavigationType'
import { NAVIGATION_TYPE } from '../../../packages/element-utils/src/getNavigationType/interface'

const basicDemo = () => {
  const navigationType = getNavigationType()

  action('当前导航类型')(navigationType)

  // 枚举值比较示例
  if (navigationType === NAVIGATION_TYPE.NAVIGATE) {
    action('这是一次常规导航')('用户通过链接或地址栏进入')
  } else if (navigationType === NAVIGATION_TYPE.RELOAD) {
    action('这是一次页面刷新')('用户按了 F5 或刷新按钮')
  } else if (navigationType === NAVIGATION_TYPE.BACK_FORWARD) {
    action('这是前进/后退导航')('用户使用了浏览器导航按钮')
  } else if (navigationType === NAVIGATION_TYPE.BACK_FORWARD_CACHE) {
    action('从 BFCache 恢复')('页面从缓存中快速恢复')
  }

  // 获取原始 Performance Navigation 信息
  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming

  if (navigation) {
    action('原始 Navigation 信息')({
      type: navigation.type,
      transferSize: navigation.transferSize,
      redirectCount: navigation.redirectCount,
    })
  }
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import { NAVIGATION_TYPE } from '../../../packages/element-utils/src/getNavigationType/interface'

const navigationTypesDemo = () => {
  // 所有可能的导航类型及其含义
  const navigationTypes: Record<NAVIGATION_TYPE, string> = {
    [NAVIGATION_TYPE.NAVIGATE]: '常规导航 - 用户通过点击链接、输入 URL、表单提交等方式进入页面',
    [NAVIGATION_TYPE.RELOAD]: '页面刷新 - 用户按 F5、Ctrl+R 或点击刷新按钮',
    [NAVIGATION_TYPE.BACK_FORWARD]: '前进/后退 - 用户通过浏览器的前进或后退按钮导航',
    [NAVIGATION_TYPE.BACK_FORWARD_CACHE]: 'BFCache 恢复 - 页面从浏览器的后退/前进缓存中恢复',
    [NAVIGATION_TYPE.PRERENDER]: '预渲染激活 - 页面通过 Speculation Rules API 预渲染后激活',
  }

  action('所有导航类型说明')(navigationTypes)

  // 提示用户如何测试不同类型
  action('测试方法')({
    [NAVIGATION_TYPE.NAVIGATE]: '直接访问页面',
    [NAVIGATION_TYPE.RELOAD]: '按 F5 或点击刷新',
    [NAVIGATION_TYPE.BACK_FORWARD]: '先导航到其他页面，再点击后退',
    [NAVIGATION_TYPE.BACK_FORWARD_CACHE]: '导航到其他页面后快速后退（需浏览器支持）',
    [NAVIGATION_TYPE.PRERENDER]: '需要配置 Speculation Rules API',
  })
}

export default navigationTypesDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getnavigationtype",children:"getNavigationType"}),`
`,n.jsx(e.p,{children:"获取当前页面的导航类型，用于性能监控和用户行为分析。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getNavigationType"})," 是一个用于检测页面如何被加载的工具函数，基于 Navigation Timing API。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心功能："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"检测 5 种导航类型，使用 TypeScript 枚举提供类型安全"}),`
`,n.jsx(e.li,{children:"智能识别 BFCache（Back-Forward Cache）恢复场景"}),`
`,n.jsx(e.li,{children:"支持 SSR 环境，服务端返回默认值"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"应用场景："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：区分首次加载和缓存加载，准确计算性能指标"}),`
`,n.jsx(e.li,{children:"用户行为分析：了解用户如何到达页面"}),`
`,n.jsx(e.li,{children:"A/B 测试：排除刷新和后退访问的干扰"}),`
`,n.jsx(e.li,{children:"预渲染优化：检测预渲染页面的激活情况"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"导航类型说明："})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"枚举值"}),n.jsx("th",{children:"字符串值"}),n.jsx("th",{children:"触发方式"}),n.jsx("th",{children:"典型场景"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Navigate"}),n.jsx("td",{children:"'navigate'"}),n.jsx("td",{children:"点击链接、输入 URL"}),n.jsx("td",{children:"正常访问"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Reload"}),n.jsx("td",{children:"'reload'"}),n.jsx("td",{children:"F5、Ctrl+R、刷新按钮"}),n.jsx("td",{children:"用户刷新"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"BackForward"}),n.jsx("td",{children:"'back-forward'"}),n.jsx("td",{children:"浏览器前进/后退按钮"}),n.jsx("td",{children:"历史导航"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"BackForwardCache"}),n.jsx("td",{children:"'back-forward-cache'"}),n.jsx("td",{children:"从 BFCache 恢复"}),n.jsx("td",{children:"快速后退"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Prerender"}),n.jsx("td",{children:"'prerender'"}),n.jsx("td",{children:"Speculation Rules API"}),n.jsx("td",{children:"预加载激活"})]})]})]}),`
`,n.jsx(e.h2,{id:"获取当前导航类型",children:"获取当前导航类型"}),`
`,n.jsx(e.p,{children:"获取当前页面的导航类型，使用枚举值进行类型安全的比较。"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"查看所有导航类型",children:"查看所有导航类型"}),`
`,n.jsx(e.p,{children:"展示所有支持的导航类型及其含义，使用枚举作为对象键。"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"（无参数）"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"NavigationType"})}),n.jsx("td",{children:"NavigationType.Navigate | .Reload | .BackForward | .BackForwardCache | .Prerender"})]})]})]}),`
`,n.jsx(e.h3,{id:"枚举定义",children:"枚举定义"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`enum NavigationType {
  Navigate = 'navigate',
  Reload = 'reload',
  BackForward = 'back-forward',
  BackForwardCache = 'back-forward-cache',
  Prerender = 'prerender',
}
`})}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": 主函数，实现导航类型检测逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),": NavigationType 枚举定义"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["检查是否在浏览器环境，SSR 环境返回 ",n.jsx(e.code,{children:"NavigationType.Navigate"})]}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"performance.getEntriesByType('navigation')"})," 获取导航信息"]}),`
`,n.jsxs(e.li,{children:["检查 BFCache 恢复：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"document.wasDiscarded"})," 为 true"]}),`
`,n.jsxs(e.li,{children:["或 ",n.jsx(e.code,{children:"type === 'back_forward'"})," 且 ",n.jsx(e.code,{children:"transferSize === 0"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["根据 ",n.jsx(e.code,{children:"navigation.type"})," 返回对应枚举值"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用 TypeScript 枚举确保类型安全"}),`
`,n.jsx(e.li,{children:"使用 Navigation Timing Level 2 API"}),`
`,n.jsxs(e.li,{children:["BFCache 检测通过 ",n.jsx(e.code,{children:"transferSize === 0"})," 判断（无网络传输）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"document.wasDiscarded"})," 检测页面是否被丢弃后恢复"]}),`
`]})]})}function p(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
