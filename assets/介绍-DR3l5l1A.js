import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import parseUrl from '../../../packages/element-utils/src/parseUrl'

const parseUrlDemo = () => {
  const url = 'https://example.com:8080/path/to/page?name=test&id=123#section'

  const result = parseUrl(url)

  action('原始 URL')(url)
  action('解析结果')(result)
}

export default parseUrlDemo
`,t=`import { action } from 'storybook/actions'
import { buildUrl } from '../../../packages/element-utils/src/parseUrl'

const buildUrlDemo = () => {
  const options = {
    baseUrl: 'https://example.com',
    pathname: '/api/users',
    pathSegments: ['123', 'profile'],
    query: { name: 'test', tags: ['a', 'b'] },
    hash: 'section',
  }

  const result = buildUrl(options)

  action('构建配置')(options)
  action('构建结果')(result)
}

export default buildUrlDemo
`,c=`import { action } from 'storybook/actions'
import {
  getQueryParam,
  getQueryParams,
  setQueryParam,
  removeQueryParam,
} from '../../../packages/element-utils/src/parseUrl'

const queryParamDemo = () => {
  const url = 'https://example.com/page?name=test&tags=a&tags=b&id=123'

  action('原始 URL')(url)

  // 获取单个参数
  const name = getQueryParam(url, 'name')
  action('getQueryParam(url, "name")')(name)

  // 获取所有同名参数
  const tags = getQueryParams(url, 'tags')
  action('getQueryParams(url, "tags")')(tags)

  // 设置参数
  const newUrl = setQueryParam(url, 'page', 1)
  action('setQueryParam(url, "page", 1)')(newUrl)

  // 删除参数
  const removedUrl = removeQueryParam(url, 'id')
  action('removeQueryParam(url, "id")')(removedUrl)
}

export default queryParamDemo
`,h=`import { action } from 'storybook/actions'
import { isValidUrl } from '../../../packages/element-utils/src/parseUrl'

const isValidUrlDemo = () => {
  const validUrl = 'https://example.com/path?query=1'
  const invalidUrl = 'not-a-valid-url'

  action('验证有效 URL')(validUrl)
  action('isValidUrl 结果')(isValidUrl(validUrl))

  action('验证无效 URL')(invalidUrl)
  action('isValidUrl 结果')(isValidUrl(invalidUrl))
}

export default isValidUrlDemo
`;function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"parseurl",children:"parseUrl"}),`
`,r.jsx(e.p,{children:"URL 解析与构建工具集，提供 URL 解析、构建、查询参数操作等功能。"}),`
`,r.jsx(e.h2,{id:"实现原理",children:"实现原理"}),`
`,r.jsx(e.h3,{id:"parseurl-核心实现",children:"parseUrl 核心实现"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"URL 解析策略"}),"：基于原生 ",r.jsx(e.code,{children:"URL"})," API 进行解析，如果解析失败会自动尝试添加 ",r.jsx(e.code,{children:"https://"})," 协议后重新解析"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"查询参数处理"}),"：使用 ",r.jsx(e.code,{children:"URLSearchParams"})," 遍历参数，支持 ",r.jsx(e.code,{children:"decode"})," 解码和 ",r.jsx(e.code,{children:"arrayFormat"})," 数组格式（同名参数合并为数组）"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"路径片段解析"}),"：通过 ",r.jsx(e.code,{children:"split('/')"})," 分割路径，过滤空字符串，支持 URL 解码"]}),`
`]}),`
`,r.jsx(e.h3,{id:"buildurl-核心实现",children:"buildUrl 核心实现"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"路径拼接"}),"：移除 baseUrl 末尾斜杠后拼接 pathname"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"路径片段编码"}),"：使用 ",r.jsx(e.code,{children:"encodeURIComponent"})," 对每个片段进行编码后用 ",r.jsx(e.code,{children:"/"})," 连接"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"查询参数构建"}),"：使用 ",r.jsx(e.code,{children:"URLSearchParams"})," 构建，支持数组值（同一 key 多次 append）"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"哈希编码"}),"：对 hash 值进行 ",r.jsx(e.code,{children:"encodeURIComponent"})," 编码"]}),`
`]}),`
`,r.jsx(e.h3,{id:"工具函数实现",children:"工具函数实现"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"getQueryParam / getQueryParams"}),"：基于 parseUrl 获取解析结果后提取指定 key 的值"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"setQueryParam / removeQueryParam"}),"：基于原生 ",r.jsx(e.code,{children:"URL"})," 对象的 ",r.jsx(e.code,{children:"searchParams.set()"})," / ",r.jsx(e.code,{children:"delete()"})," 方法"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"isValidUrl"}),"：通过 ",r.jsx(e.code,{children:"new URL()"})," 构造函数是否抛出异常来判断"]}),`
`]}),`
`,r.jsx(e.h2,{id:"解析-url",children:"解析 URL"}),`
`,r.jsx(s,{language:"typescript",children:i}),`
`,r.jsx(e.h2,{id:"构建-url",children:"构建 URL"}),`
`,r.jsx(s,{language:"typescript",children:t}),`
`,r.jsx(e.h2,{id:"查询参数操作",children:"查询参数操作"}),`
`,r.jsx(s,{language:"typescript",children:c}),`
`,r.jsx(e.h2,{id:"验证-url",children:"验证 URL"}),`
`,r.jsx(s,{language:"typescript",children:h}),`
`,r.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsx(e.h3,{id:"parseurl-1",children:"parseUrl"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"url"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"需要解析的 URL 字符串"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"options.decode"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsx("td",{children:"是否解码 URL 组件，默认 true"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"options.arrayFormat"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsx("td",{children:"是否将重复的查询参数合并为数组，默认 true"})]})]})]}),`
`,r.jsx(e.h3,{id:"返回值-parsedurl",children:"返回值 ParsedUrl"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"属性"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"href"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"完整 URL"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"protocol"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"协议 (http, https)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"hostname"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"主机名"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"port"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"端口号"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"pathname"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"路径"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"pathSegments"}),r.jsx("td",{children:r.jsx("code",{children:"string[]"})}),r.jsx("td",{children:"路径片段数组"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"query"}),r.jsx("td",{children:r.jsx("code",{children:"Record<string, string | string[]>"})}),r.jsx("td",{children:"查询参数对象"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"hash"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"哈希值 (包含 #)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"hashValue"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"哈希值 (不包含 #)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"origin"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"来源 (protocol://host)"})]})]})]}),`
`,r.jsx(e.h3,{id:"buildurl",children:"buildUrl"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"baseUrl"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"基础 URL"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"pathname"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"路径"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"pathSegments"}),r.jsx("td",{children:r.jsx("code",{children:"string[]"})}),r.jsx("td",{children:"路径片段"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"query"}),r.jsx("td",{children:r.jsx("code",{children:"Record<string, string | number | boolean | array>"})}),r.jsx("td",{children:"查询参数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"hash"}),r.jsx("td",{children:r.jsx("code",{children:"string"})}),r.jsx("td",{children:"哈希值"})]})]})]}),`
`,r.jsx(e.h3,{id:"其他工具函数",children:"其他工具函数"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"函数"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"getQueryParam(url, key)"})}),r.jsx("td",{children:"获取单个查询参数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"getQueryParams(url, key)"})}),r.jsx("td",{children:"获取所有同名查询参数（返回数组）"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"setQueryParam(url, key, value)"})}),r.jsx("td",{children:"设置查询参数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"removeQueryParam(url, key)"})}),r.jsx("td",{children:"删除查询参数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"isValidUrl(url)"})}),r.jsx("td",{children:"检查 URL 是否有效"})]})]})]})]})}function p(n={}){const{wrapper:e}={...l(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(d,{...n})}):d(n)}export{p as default};
