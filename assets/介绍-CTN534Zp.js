import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useMultiDemo from './multiDemo.tsx'

const UseMergePropsDemo = () => {
  const { showMergedProps } = useBasicDemo()
  const { showMergedProps: showMultiMergedProps } = useMultiDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div className="button" onClick={showMergedProps}>
        合并两个属性对象
      </div>

      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>多对象合并</div>
      <div className="button" onClick={showMultiMergedProps}>
        合并三个配置对象
      </div>
    </div>
  )
}

export default UseMergePropsDemo
`,d=`import { action } from 'storybook/actions'
import useMergeProps from '../../../packages/element-utils/src/useMergeProps'

interface DemoProps {
  name?: string
  age: number
}

const defaultProps = {
  name: '默认名称',
}

const useBasicDemo = () => {
  const props: DemoProps = { age: 25 }
  const mergedProps = useMergeProps(defaultProps, props)

  const showMergedProps = () => {
    action('默认属性')(defaultProps)
    action('传入属性')(props)
    action('合并后的属性')(mergedProps)
  }

  return {
    showMergedProps,
  }
}

export default useBasicDemo
`,c=`import { action } from 'storybook/actions'
import useMergeProps from '../../../packages/element-utils/src/useMergeProps'

const useMultiDemo = () => {
  const defaults = { theme: 'light', size: 'medium', color: 'blue' }
  const userConfig = { theme: 'dark', fontSize: 14 }
  const overrides = { size: 'large', fontSize: 16 }

  const mergedProps = useMergeProps(defaults, userConfig, overrides)

  const showMergedProps = () => {
    action('默认配置')(defaults)
    action('用户配置')(userConfig)
    action('覆盖配置')(overrides)
    action('合并结果')(mergedProps)
  }

  return {
    showMergedProps,
  }
}

export default useMultiDemo
`;function o(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"usemergeprops",children:"useMergeProps"}),`
`,e.jsx(s.p,{children:"React Hook，用于合并多个属性对象。"}),`
`,e.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"useMergeProps"})," 将多个属性对象按顺序合并，后面的属性会覆盖前面的同名属性。内部使用 ",e.jsx(s.code,{children:"useMemo"})," 缓存合并结果，避免每次渲染都创建新对象。"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"使用场景"}),"："]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"组件默认属性与用户传入属性合并"}),`
`,e.jsx(s.li,{children:"多层配置覆盖（默认配置 → 用户配置 → 运行时覆盖）"}),`
`,e.jsx(s.li,{children:"主题/样式对象的层级合并"}),`
`]}),`
`,e.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(s.p,{children:"两个对象合并，传入属性覆盖默认属性："}),`
`,e.jsx(r,{language:"tsx",children:d}),`
`,e.jsx(s.h2,{id:"多对象合并",children:"多对象合并"}),`
`,e.jsx(s.p,{children:"支持传入任意数量的属性对象，按顺序依次覆盖："}),`
`,e.jsx(r,{language:"tsx",children:c}),`
`,e.jsx(s.h2,{id:"演示代码",children:"演示代码"}),`
`,e.jsx(r,{language:"tsx",children:t}),`
`,e.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"...propsList"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"多个属性对象，按顺序合并，后面的覆盖前面的"})]})})]}),`
`,e.jsx(s.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"合并后的属性对象"})]})})]}),`
`,e.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"index.ts"}),"：实现 ",e.jsx(s.code,{children:"useMergeProps"})," Hook"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["接收 rest 参数 ",e.jsx(s.code,{children:"...propsList"}),"，支持传入任意数量的属性对象"]}),`
`,e.jsxs(s.li,{children:["使用 ",e.jsx(s.code,{children:"useMemo"})," 包裹 ",e.jsx(s.code,{children:"Object.assign({}, ...propsList)"})," 进行合并，以空对象为目标避免修改源对象"]}),`
`,e.jsxs(s.li,{children:["依赖项直接使用 ",e.jsx(s.code,{children:"propsList"})," 数组，任意一个属性对象变化时重新计算"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Object.assign"})}),"：按顺序将所有属性对象合并到空对象上，后面的同名属性自然覆盖前面的"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"useMemo"})}),"：缓存合并结果，属性对象引用未变化时直接复用上次结果，避免不必要的对象创建"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"rest 参数"}),"：使用 ",e.jsx(s.code,{children:"...propsList"})," 接收任意数量的参数，相比固定两个参数更灵活"]}),`
`]})]})}function u(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
