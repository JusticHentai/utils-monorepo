import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import loadFont from '../../../packages/element-utils/src/loadFont'

const basicDemo = async () => {
  const [font, err] = await loadFont(
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
    'Roboto'
  )

  if (err) {
    action('加载字体')({ success: false, error: err.message })
    return
  }

  action('加载字体')({ success: true, fontFamily: font?.family })
}

export default basicDemo
`;function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"loadfont",children:"loadFont"}),`
`,n.jsx(e.p,{children:"异步加载字体并添加到 document.fonts 中。"}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"url",children:"url"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：字体文件地址"}),`
`]}),`
`,n.jsx(e.h3,{id:"name",children:"name"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：字体名称，加载后可通过该名称在 CSS 中使用"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<[FontFace | undefined, Error | undefined]>"})]}),`
`,n.jsxs(e.li,{children:["描述：返回一个元组",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"第一个元素：加载成功时返回 FontFace 对象，失败时为 undefined"}),`
`,n.jsx(e.li,{children:"第二个元素：加载失败时返回 Error，成功时为 undefined"}),`
`]}),`
`]}),`
`]})]})}function x(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{x as default};
