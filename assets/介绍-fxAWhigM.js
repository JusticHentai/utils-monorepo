import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import PointMap from '../../../packages/js-utils/src/PointMap'

const pointMap = new PointMap<string>()

export const setDemo = () => {
  pointMap.set({ x: 1, y: 2 }, 'value')
  action('设置坐标值 1 2 值为 value, 当前内容列表')(pointMap.contentList)
}

export const getDemo = () => {
  const res = pointMap.get({ x: 1, y: 2 })
  action('获取坐标值 1 2 的值')(res)
}
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"pointmap",children:"PointMap"}),`
`,n.jsx(i.p,{children:"PointMap 是一个用于存储坐标点的地图，支持设置和获取坐标点。"}),`
`,n.jsx(i.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(o,{language:"typescript",children:r}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.h3,{id:"泛型",children:"泛型"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"接收范型 T 代表存放信息的类型"}),`
`,n.jsxs(i.li,{children:["例如：",n.jsx(i.code,{children:"class PointMap<string>"})," 表示存放信息的类型为 ",n.jsx(i.code,{children:"string"})]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`class PointMap<T>
`})}),`
`,n.jsx(i.h3,{id:"set",children:"set"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"({ x, y }: Point, data: T) => void"})]}),`
`,n.jsx(i.li,{children:"描述：设置坐标点信息"}),`
`,n.jsx(i.li,{children:"x: 横坐标"}),`
`,n.jsx(i.li,{children:"y: 纵坐标"}),`
`,n.jsx(i.li,{children:"data: 存放信息"}),`
`]}),`
`,n.jsx(i.h3,{id:"get",children:"get"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"({ x, y }: Point) => T | undefined"})]}),`
`,n.jsx(i.li,{children:"描述：获取坐标点信息"}),`
`,n.jsx(i.li,{children:"x: 横坐标"}),`
`,n.jsx(i.li,{children:"y: 纵坐标"}),`
`,n.jsx(i.li,{children:"返回值：存放信息"}),`
`]})]})}function p(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{p as default};
