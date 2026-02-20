import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import useDebounce from '../../../packages/element-utils/src/useDebounce'

const useBasicDemo = () => {
  const { run, cancel, flush, isPending } = useDebounce(
    (value: string) => {
      action('防抖回调执行')(value)
    },
    { delay: 1000 }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发防抖')('已触发，1秒后执行')
  }

  const cancelDebounce = () => {
    cancel()
    action('取消防抖')('已取消')
  }

  const flushDebounce = () => {
    flush()
    action('立即执行')('已立即执行')
  }

  const checkPending = () => {
    action('是否等待中')(isPending() ? '是' : '否')
  }

  return {
    trigger,
    cancelDebounce,
    flushDebounce,
    checkPending,
  }
}

export default useBasicDemo
`,d=`import { action } from 'storybook/actions'
import useDebounce from '../../../packages/element-utils/src/useDebounce'

const useImmediateDemo = () => {
  const { run, cancel } = useDebounce(
    (value: string) => {
      action('防抖回调执行（立即模式）')(value)
    },
    { delay: 1000, immediate: true }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发防抖（立即模式）')('首次立即执行，后续1秒内不再执行')
  }

  const cancelDebounce = () => {
    cancel()
    action('取消防抖')('已取消')
  }

  return {
    trigger,
    cancelDebounce,
  }
}

export default useImmediateDemo
`;function i(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"usedebounce",children:"useDebounce"}),`
`,n.jsx(e.p,{children:"useDebounce 是一个 React Hook，用于实现防抖功能，支持立即执行和最大等待时间。"}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"立即执行模式",children:"立即执行模式"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"callback",children:"callback"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T extends (...args: any[]) => any"})]}),`
`,n.jsx(e.li,{children:"描述：需要防抖的回调函数"}),`
`]}),`
`,n.jsx(e.h3,{id:"options",children:"options"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"delay"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"防抖延迟时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"immediate"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:"是否立即执行"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"maxWait"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"最大等待时间（毫秒），超过此时间强制执行"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"run"}),n.jsx("td",{children:n.jsx("code",{children:"(...args: Parameters<T>) => void"})}),n.jsx("td",{children:"防抖后的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"cancel"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"取消防抖"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"flush"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"立即执行"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"isPending"}),n.jsx("td",{children:n.jsx("code",{children:"() => boolean"})}),n.jsx("td",{children:"是否处于等待状态"})]})]})]})]})}function u(c={}){const{wrapper:e}={...r(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{u as default};
