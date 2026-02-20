import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import getXPath from '../../../packages/element-utils/src/getXPath'

/**
 * 创建基础示例的工厂函数
 * @param containerId 容器元素的 ID
 */
export const createBasicDemo = (containerId: string) => () => {
  const container = document.getElementById(containerId)
  if (!container) {
    action('错误')('容器元素不存在')
    return
  }

  const ul = container.querySelector('ul')
  const li2 = container.querySelector('#target-li') || container.querySelectorAll('li')[1]

  if (!ul || !li2) {
    action('错误')('目标元素不存在')
    return
  }

  // 展示 DOM 层级结构
  action('DOM 层级结构')(\`
    容器
    └── ul
        ├── li (列表项 1)
        ├── li#target-li (列表项 2) ← 目标元素
        └── li (列表项 3)
  \`)

  // 获取第二个 li 的 XPath
  const xpath = getXPath(li2)

  action('li2 的 XPath')(xpath)
  // 输出类似: /html/body/.../ul[1]/li[2]
}

export default createBasicDemo
`,d=`import { action } from 'storybook/actions'
import getXPath from '../../../packages/element-utils/src/getXPath'

/**
 * 创建带 ID 元素示例的工厂函数
 * @param containerId 容器元素的 ID
 */
export const createIdDemo = (containerId: string) => () => {
  const container = document.getElementById(containerId)
  if (!container) {
    action('错误')('容器元素不存在')
    return
  }

  const child = container.querySelector('span')
  if (!child) {
    action('错误')('子元素不存在')
    return
  }

  // 展示 DOM 层级结构
  action('DOM 层级结构')(\`
    容器#\${containerId} ← 有 ID
    └── span (子元素)
  \`)

  // 获取带 ID 元素的 XPath（会返回简短的 ID 选择器）
  const containerXPath = getXPath(container)
  action('带 ID 元素 XPath')(containerXPath)
  // 输出: //*[@id="xpath-id-container"]

  // 获取子元素的 XPath
  const childXPath = getXPath(child)
  action('子元素 XPath')(childXPath)
  // 输出: //*[@id="xpath-id-container"]/span[1]
}

export default createIdDemo
`;function r(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"getxpath",children:"getXPath"}),`
`,n.jsx(t.p,{children:"获取 DOM 元素的 XPath 路径字符串。XPath（XML Path Language）是一种在 DOM 树中定位元素的查询语言，常用于前端监控、元素定位、自动化测试等场景。"}),`
`,n.jsx(t.h2,{id:"获取普通元素-xpath",children:"获取普通元素 XPath"}),`
`,n.jsxs(t.p,{children:["对于没有 ID 的普通元素，会递归向上遍历 DOM 树，生成完整的路径表达式。路径中包含标签名和同级索引，如 ",n.jsx(t.code,{children:"/html/body/div[1]/ul[1]/li[2]"}),"。"]}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(t.h2,{id:"获取带-id-元素-xpath",children:"获取带 ID 元素 XPath"}),`
`,n.jsxs(t.p,{children:["如果元素具有 ",n.jsx(t.code,{children:"id"})," 属性，会直接返回 ID 选择器形式 ",n.jsx(t.code,{children:'//*[@id="xxx"]'}),"，这是最简短且最精确的定位方式。子元素会基于最近的带 ID 父元素构建路径。"]}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"element"}),n.jsx("td",{children:n.jsx("code",{children:"Element"})}),n.jsx("td",{children:"目标 DOM 元素"})]})})]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"元素的 XPath 路径字符串"})]})})]}),`
`,n.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(t.h3,{id:"indexts",children:"index.ts"}),`
`,n.jsx(t.p,{children:"核心实现文件，采用递归算法生成 XPath："}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"ID 优先"}),"：如果元素有 ",n.jsx(t.code,{children:"id"})," 属性，直接返回 ",n.jsx(t.code,{children:'//*[@id="xxx"]'})," 形式"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"特殊处理"}),"：",n.jsx(t.code,{children:"body"})," 元素返回固定路径 ",n.jsx(t.code,{children:"/html/body"})]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"递归构建"}),"：遍历同级元素，计算当前元素在同名标签中的索引位置，然后递归获取父元素路径进行拼接"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"索引计算"}),"：索引从 1 开始（符合 XPath 规范），格式为 ",n.jsx(t.code,{children:"tagName[index]"})]}),`
`]})]})}function m(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{m as default};
