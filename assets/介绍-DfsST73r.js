import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const basicDemo = () => {
  const result = isSupportCss({
    display: 'flex',
    width: '100px',
  })

  action('检测 flex 支持')({
    isSupport: result,
    css: 'display: flex; width: 100px',
  })
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const gridDemo = () => {
  const result = isSupportCss({
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
  })

  action('检测 grid 支持')({ isSupport: result, css: 'display: grid' })
}

export default gridDemo
`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"issupportcss",children:"isSupportCss"}),`
`,n.jsx(s.p,{children:"判断浏览器是否支持某些 CSS 属性。"}),`
`,n.jsx(s.h2,{id:"检测-flex-支持",children:"检测 flex 支持"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"检测-grid-支持",children:"检测 grid 支持"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(s.h3,{id:"css",children:"css"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"Record<string, string>"})]}),`
`,n.jsx(s.li,{children:"描述：要检测的 CSS 属性对象，键为属性名，值为属性值"}),`
`]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：如果所有 CSS 属性都支持返回 true，否则返回 false"}),`
`]})]})}function h(i={}){const{wrapper:s}={...t(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{h as default};
