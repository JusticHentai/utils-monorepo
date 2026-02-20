import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import combo from '../../../packages/element-utils/src/combo'

let comboFn: (() => void) | null = null

const basicDemo = () => {
  if (!comboFn) {
    comboFn = combo({
      onCombo: (count) => {
        action('连击次数')(count)
      },
      onClose: () => {
        action('连击结束')('连击已结束')
      },
      duration: 1000,
    })
  }

  comboFn()
}

export default basicDemo
`;function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"combo",children:"combo"}),`
`,n.jsx(o.p,{children:"combo 是一个用于实现连击效果的函数，常用于游戏或交互场景。"}),`
`,n.jsx(o.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(o.h3,{id:"options",children:"options"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"ComboOptions"})]}),`
`,n.jsx(o.li,{children:"描述：配置对象"}),`
`]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"onCombo"}),n.jsx("td",{children:n.jsx("code",{children:"(combo?: number) => void"})}),n.jsx("td",{children:"连击回调函数，参数为当前连击次数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"onClose"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"连击结束时触发的回调"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"duration"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"连击间隔时间（毫秒），超过此时间未触发则连击结束"})]})]})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"() => void"})]}),`
`,n.jsx(o.li,{children:"描述：返回触发连击的函数，每次调用会增加连击计数"}),`
`]})]})}function m(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(c,{...e})}):c(e)}export{m as default};
