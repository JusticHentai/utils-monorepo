import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'

export const changeClassDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newClass = \`demo-class-\${Date.now()}\`
  container.className = newClass
  action('修改 class')(\`设置为: \${newClass}\`)
}

export const changeDataDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newValue = \`value-\${Date.now()}\`
  container.dataset.value = newValue
  action('修改 data-value')(\`设置为: \${newValue}\`)
}

export const changeStyleDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  container.style.background =
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  action('修改 style')('变更背景色')
}

export const cleanupDemo = () => {
  action('清理完成')()
}
`,c=`import { action } from 'storybook/actions'

export const changeClassFilterDemo = () => {
  const container =
    (window as any).__attributeChangeFilterEl ||
    document.getElementById('attribute-filter-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newClass = \`filter-class-\${Date.now()}\`
  container.className = newClass
  action('修改 class（会触发）')(\`设置为: \${newClass}\`)
}

export const changeDataFilterDemo = () => {
  const container =
    (window as any).__attributeChangeFilterEl ||
    document.getElementById('attribute-filter-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  container.dataset.value = \`ignored-\${Date.now()}\`
  action('修改 data-value（不会触发）')('因为只监听 class 属性')
}

export const cleanupFilterDemo = () => {
  action('清理完成')()
}
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onattributechange",children:"onAttributeChange"}),`
`,n.jsx(e.p,{children:"监听元素属性变化。使用 MutationObserver 监听指定元素的属性变化，可以获取属性名、旧值和新值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onAttributeChange"})," 是基于 ",n.jsx(e.code,{children:"MutationObserver"})," 封装的属性变化监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"MutationObserver API：浏览器原生的 DOM 变化监听 API"}),`
`,n.jsx(e.li,{children:"属性变化监听：监听元素的 class、style、data-* 等属性变化"}),`
`,n.jsx(e.li,{children:"attributeFilter：可选择性地只监听特定属性"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"表单状态监控：监听输入框的 disabled、readonly 等属性变化"}),`
`,n.jsx(e.li,{children:"样式变化追踪：监听 class 或 style 属性的动态变化"}),`
`,n.jsx(e.li,{children:"数据属性监听：监听 data-* 属性的变化用于组件通信"}),`
`,n.jsx(e.li,{children:"调试工具：追踪 DOM 属性的修改记录"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"精确获取旧值和新值"}),`
`,n.jsx(e.li,{children:"支持过滤特定属性"}),`
`,n.jsx(e.li,{children:"比轮询检测更高效"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(e.p,{children:"监听元素的所有属性变化："}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"属性过滤示例",children:"属性过滤示例"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"attributeFilter"})," 参数只监听特定属性："]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"Element | null"})}),n.jsx("td",{children:"要观察的目标元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnAttributeChangeCallback"})}),n.jsx("td",{children:"属性变化时的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"attributeFilter"}),n.jsx("td",{children:n.jsx("code",{children:"string[]"})}),n.jsx("td",{children:"可选，要监听的属性名列表，不传则监听所有属性"})]})]})]}),`
`,n.jsx(e.h3,{id:"onattributechangecallback",children:"OnAttributeChangeCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnAttributeChangeCallback = (
  attributeName: string | null,
  oldValue: string | null,
  newValue: string | null,
  target: Element
) => void
`})}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 主函数实现"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"createMutationObserver"})," 创建观察器"]}),`
`,n.jsxs(e.li,{children:["配置 ",n.jsx(e.code,{children:"attributes: true"})," 和 ",n.jsx(e.code,{children:"attributeOldValue: true"})]}),`
`,n.jsxs(e.li,{children:["回调中过滤 ",n.jsx(e.code,{children:"mutation.type === 'attributes'"})," 的变化"]}),`
`,n.jsx(e.li,{children:"从 mutation 中提取属性名、旧值，并获取新值"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"attributeOldValue: true"})," 获取属性旧值"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"attributeFilter"})," 选项优化性能"]}),`
`,n.jsxs(e.li,{children:["新值需要通过 ",n.jsx(e.code,{children:"element.getAttribute()"})," 获取"]}),`
`]})]})}function u(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{u as default};
