import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import useThrottle from '../../../packages/element-utils/src/useThrottle'

const useBasicDemo = () => {
  const { run, cancel, flush, isPending } = useThrottle(
    (value: string) => {
      action('节流回调执行')(value)
    },
    { delay: 1000 }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发节流')('已触发')
  }

  const cancelThrottle = () => {
    cancel()
    action('取消节流')('已取消')
  }

  const flushThrottle = () => {
    flush()
    action('立即执行')('已立即执行')
  }

  const checkPending = () => {
    action('是否节流中')(isPending() ? '是' : '否')
  }

  return {
    trigger,
    cancelThrottle,
    flushThrottle,
    checkPending,
  }
}

export default useBasicDemo
`,l=`import { action } from 'storybook/actions'
import useThrottle from '../../../packages/element-utils/src/useThrottle'

const useTrailingDemo = () => {
  const { run, cancel } = useThrottle(
    (value: string) => {
      action('节流回调执行（仅结束时）')(value)
    },
    { delay: 1000, leading: false, trailing: true }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发节流（仅结束时执行）')('1秒后执行')
  }

  const cancelThrottle = () => {
    cancel()
    action('取消节流')('已取消')
  }

  return {
    trigger,
    cancelThrottle,
  }
}

export default useTrailingDemo
`;function c(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usethrottle",children:"useThrottle"}),`
`,n.jsx(e.p,{children:"useThrottle 是一个 React Hook，用于实现节流功能，支持首次立即执行和结束时执行。"}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"仅结束时执行",children:"仅结束时执行"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"callback",children:"callback"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T extends (...args: any[]) => any"})]}),`
`,n.jsx(e.li,{children:"描述：需要节流的回调函数"}),`
`]}),`
`,n.jsx(e.h3,{id:"options",children:"options"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"delay"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"节流延迟时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"leading"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"true"})}),n.jsx("td",{children:"是否在开始时立即执行"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"trailing"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"true"})}),n.jsx("td",{children:"是否在结束时执行"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"run"}),n.jsx("td",{children:n.jsx("code",{children:"(...args: Parameters<T>) => void"})}),n.jsx("td",{children:"节流后的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"cancel"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"取消节流"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"flush"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"立即执行"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"isPending"}),n.jsx("td",{children:n.jsx("code",{children:"() => boolean"})}),n.jsx("td",{children:"是否处于节流中"})]})]})]})]})}function u(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{u as default};
