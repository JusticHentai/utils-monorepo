import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const basicDemo = () => {
  const sourceUrl = 'https://source.com?a=1&b=2'
  const targetUrl = 'https://target.com/path?c=3'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  action('源 URL')(sourceUrl)
  action('目标 URL')(targetUrl)
  action('合并结果')(result)
  // 结果: https://target.com/path?c=3&a=1&b=2
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const overrideDemo = () => {
  const sourceUrl = 'https://source.com?a=new&b=2'
  const targetUrl = 'https://target.com/path?a=old&c=3'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  action('源 URL')(sourceUrl)
  action('目标 URL')(targetUrl)
  action('合并结果（a 被覆盖）')(result)
  // 结果: https://target.com/path?a=new&c=3&b=2
}

export default overrideDemo
`;function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"mergequeryparams",children:"mergeQueryParams"}),`
`,r.jsx(n.p,{children:"将源 URL 的查询参数合并到目标 URL 中。"}),`
`,r.jsx(n.h2,{id:"合并查询参数",children:"合并查询参数"}),`
`,r.jsx(t,{language:"typescript",children:c}),`
`,r.jsx(n.h2,{id:"覆盖同名参数",children:"覆盖同名参数"}),`
`,r.jsx(t,{language:"typescript",children:i}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsx(n.h3,{id:"sourceurl",children:"sourceUrl"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：源 URL，其查询参数将被提取"}),`
`]}),`
`,r.jsx(n.h3,{id:"targeturl",children:"targetUrl"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：目标 URL，源 URL 的查询参数将被添加到此 URL"}),`
`]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：添加查询参数后的完整 URL"}),`
`]})]})}function p(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{p as default};
