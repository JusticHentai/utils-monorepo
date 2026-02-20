import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { useState } from 'react'
import { action } from 'storybook/actions'
import useUpdateEffect from '../../../packages/element-utils/src/useUpdateEffect'

const useBasicDemo = () => {
  const [count, setCount] = useState(0)

  // 首次渲染不会执行，只有 count 更新时才会执行
  useUpdateEffect(() => {
    action('useUpdateEffect 触发')(\`count 更新为: \${count}\`)
  }, [count])

  const increment = () => {
    setCount((prev) => prev + 1)
    action('点击按钮')('count + 1')
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
    action('点击按钮')('count - 1')
  }

  return {
    count,
    increment,
    decrement,
  }
}

export default useBasicDemo
`,i=`import { useState } from 'react'
import { action } from 'storybook/actions'
import useUpdateEffect from '../../../packages/element-utils/src/useUpdateEffect'

const useCleanupDemo = () => {
  const [value, setValue] = useState('初始值')

  // 演示带清理函数的 useUpdateEffect
  useUpdateEffect(() => {
    action('useUpdateEffect 触发')(\`value 更新为: \${value}\`)

    // 返回清理函数，在下次 effect 执行前或组件卸载时调用
    return () => {
      action('清理函数执行')(\`清理旧值: \${value}\`)
    }
  }, [value])

  const changeValue = () => {
    const newValue = \`更新于 \${new Date().toLocaleTimeString()}\`
    setValue(newValue)
    action('点击按钮')(\`设置新值: \${newValue}\`)
  }

  return {
    value,
    changeValue,
  }
}

export default useCleanupDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useupdateeffect",children:"useUpdateEffect"}),`
`,e.jsx(n.p,{children:"useUpdateEffect 是一个 React Hook，功能与 useEffect 相同，但首次渲染时不执行，仅在依赖更新时才执行。"}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(c,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"带清理函数",children:"带清理函数"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"effect",children:"effect"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"EffectCallback"})]}),`
`,e.jsx(n.li,{children:"描述：副作用函数，与 useEffect 的回调函数相同，可返回清理函数"}),`
`]}),`
`,e.jsx(n.h3,{id:"deps",children:"deps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"DependencyList"})]}),`
`,e.jsx(n.li,{children:"描述：依赖数组，与 useEffect 的依赖数组相同"}),`
`]}),`
`,e.jsx(n.h2,{id:"实现原理",children:"实现原理"}),`
`,e.jsxs(n.p,{children:["useUpdateEffect 通过 ",e.jsx(n.code,{children:"useRef"})," 标记是否是首次渲染："]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["首次渲染时，",e.jsx(n.code,{children:"isFirstRenderRef.current"})," 为 ",e.jsx(n.code,{children:"true"}),"，不执行 effect，只将标记设为 ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:["后续依赖更新时，",e.jsx(n.code,{children:"isFirstRenderRef.current"})," 为 ",e.jsx(n.code,{children:"false"}),"，正常执行 effect"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用场景",children:"使用场景"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"监听数据变化但不需要在初始化时执行"}),`
`,e.jsx(n.li,{children:"表单字段变化时触发验证（不需要首次渲染时验证）"}),`
`,e.jsx(n.li,{children:"数据更新时发送请求（不需要首次加载时发送）"}),`
`]})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
