import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import randomColor from '../../../../packages/learn-utils/src/handwritten/randomColor'

const normalDemo = () => {
  const colors = []

  for (let i = 0; i < 5; i++) {
    colors.push(randomColor())
  }

  return {
    message: '生成随机颜色',
    colors,
  }
}

export default normalDemo
`,i=`export default function randomColor() {
  const n = Math.floor(Math.random() * 16 * 16 * 16 * 16 * 16 * 16).toString(16)

  return \`#\${n}\`
}
`;function s(o){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"randomcolor-随机颜色生成",children:"randomColor 随机颜色生成"}),`
`,n.jsx(r.p,{children:"生成随机的十六进制颜色值，是前端开发中常见的小工具函数。"}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"颜色范围"}),"：十六进制颜色范围是 ",n.jsx(r.code,{children:"#000000"})," 到 ",n.jsx(r.code,{children:"#FFFFFF"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"随机数生成"}),"：生成 0 到 16777215（16^6 - 1）的随机整数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"进制转换"}),"：将数字转为十六进制字符串"]}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"string"})]}),`
`,n.jsxs(r.li,{children:["描述：十六进制颜色值，如 ",n.jsx(r.code,{children:"#a3f2c1"})]}),`
`]}),`
`,n.jsx(r.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"生成的颜色可能不足6位，需要补零"}),`
`,n.jsx(r.li,{children:"可以扩展为生成 RGB 或 HSL 格式"}),`
`]}),`
`,n.jsx(r.h2,{id:"其他实现方式",children:"其他实现方式"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`// 补零版本
function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')
}

// RGB 格式
function randomRGB() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return \`rgb(\${r}, \${g}, \${b})\`
}
`})})]})}function j(o={}){const{wrapper:r}={...t(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{j as default};
