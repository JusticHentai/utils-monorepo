import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import deburr from '../../../packages/js-utils/src/deburr'

const basicDemo = () => {
  // 拉丁增补字母转换
  action('deburr - 去除变音符号')({
    'déjà vu': deburr('déjà vu'),
    'über': deburr('über'),
    'crème brûlée': deburr('crème brûlée'),
    'Ñoño': deburr('Ñoño'),
  })

  // 特殊字符转换
  action('deburr - 特殊字符')({
    'Æther': deburr('Æther'),
    'straße': deburr('straße'),
    'Þór': deburr('Þór'),
    说明: 'Æ→Ae, ß→ss, Þ→Th 等特殊映射',
  })

  // 数学运算符不转换
  action('deburr - 数学运算符保留')({
    '×': deburr('×'),
    '÷': deburr('÷'),
    说明: '数学运算符 × 和 ÷ 不是字母变体，保持不变',
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import deburr from '../../../packages/js-utils/src/deburr'

const extendedDemo = () => {
  // 拉丁扩展 A 字符
  action('deburr - 拉丁扩展字符')({
    'Łódź (波兰城市)': deburr('Łódź'),
    'Zürich (瑞士城市)': deburr('Zürich'),
    'Ğüneş (土耳其语)': deburr('Ğüneş'),
    'Česká (捷克语)': deburr('Česká'),
    'Ōsaka (日本罗马字)': deburr('Ōsaka'),
  })

  // 实际应用：搜索标准化
  const cities = ['São Paulo', 'Zürich', 'Malmö', 'Kraków']
  const normalized = cities.map(city => ({
    original: city,
    normalized: deburr(city),
  }))

  action('deburr - 搜索标准化应用')({
    城市列表: normalized,
    说明: '去除变音符号后方便进行不敏感搜索',
  })
}

export default extendedDemo
`;function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"deburr",children:"deburr"}),`
`,n.jsx(r.p,{children:"将拉丁增补字母和拉丁扩展字母转换为基本拉丁字母，移除组合音标。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"deburr"})," 将带有变音符号的字符（如 é、ü、ñ）转换为对应的基本拉丁字母（e、u、n）。一些特殊字符有特定映射（如 Æ→Ae、ß→ss、Þ→Th）。数学运算符（×、÷）不会被转换。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"搜索文本标准化（忽略变音符号）"}),`
`,n.jsx(r.li,{children:"URL slug 生成"}),`
`,n.jsx(r.li,{children:"跨语言文本比较"}),`
`,n.jsx(r.li,{children:"排序时忽略变音差异"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础去音标",children:"基础去音标"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"扩展字符与应用",children:"扩展字符与应用"}),`
`,n.jsx(r.p,{children:"拉丁扩展字符转换和搜索标准化的实际应用。"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要转换的字符串"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"string"})]}),`
`,n.jsx(r.li,{children:"描述：去除变音符号后的字符串"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"deburr/index.ts"})," 导出 deburr 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 遍历每个字符 → 查找映射表 → 替换或保留 → NFD 标准化后去除组合音标"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 字符映射表（拉丁增补 + 扩展A）、",n.jsx(r.code,{children:"String.prototype.normalize('NFD')"}),"、正则去除 \\u0300-\\u036f 范围"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 输入字符串 → 逐字符映射替换 → NFD 标准化 → 去除组合音标 → 返回"]}),`
`]})]})}function a(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
