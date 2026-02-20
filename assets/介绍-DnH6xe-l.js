import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import merge from '../../../packages/js-utils/src/merge'

const basicDemo = () => {
  // lodash 测试: 合并嵌套数组中的对象
  const names = {
    characters: [{ name: 'barney' }, { name: 'fred' }],
  }
  const ages = {
    characters: [{ age: 36 }, { age: 40 }],
  }
  const heights = {
    characters: [{ height: '5\\'4"' }, { height: '5\\'5"' }],
  }

  action('merge - 多源合并')({
    结果: merge({ ...names }, ages, heights),
    说明: '递归合并三个对象的 characters 数组中的对象',
  })

  // lodash 测试: 四个参数
  action('merge - 多参数覆盖')({
    结果: merge({ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }),
    期望: { a: 4 },
    说明: '后面的源对象覆盖前面的',
  })

  // 嵌套合并
  const obj = { a: [{ b: 2 }, { d: 4 }] }
  const other = { a: [{ c: 3 }, { e: 5 }] }
  action('merge - 递归合并')({
    结果: merge({ ...obj }, other),
    说明: '数组中的对象被递归合并',
  })
}

export default basicDemo`,o=`import { action } from 'storybook/actions'
import merge from '../../../packages/js-utils/src/merge'
import mergeWith from '../../../packages/js-utils/src/mergeWith'

const customDemo = () => {
  // mergeWith: 自定义数组合并
  const object = { a: [1, 2] }
  const other = { a: [3, 4] }

  const result = mergeWith({ ...object }, other, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue)
    }
  })

  action('mergeWith - 数组拼接')({
    结果: result,
    说明: '自定义逻辑：数组拼接而非按索引合并',
  })

  // merge 的稀疏数组处理 (lodash 测试)
  const sparse: any[] = [1]
  sparse[2] = 3
  const merged = merge([], sparse)
  action('merge - 稀疏数组')({
    输入: sparse,
    结果: merged,
    '索引1存在': 1 in merged,
    说明: '稀疏数组被当作密集数组处理',
  })
}

export default customDemo`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"merge",children:"merge"}),`
`,e.jsx(n.p,{children:"递归合并源对象的属性到目标对象。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"merge"})," 函数用于深度合并多个对象，与 ",e.jsx(n.code,{children:"Object.assign"})," 不同，它会递归合并嵌套对象。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"与 assign 的区别"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assign"}),"：浅合并，直接覆盖嵌套对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"merge"}),"：深合并，递归合并嵌套对象"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"合并配置对象"}),`
`,e.jsx(n.li,{children:"深度更新嵌套状态"}),`
`,e.jsx(n.li,{children:"合并默认值和用户设置"}),`
`]}),`
`,e.jsx(n.h2,{id:"merge---递归合并",children:"merge - 递归合并"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"mergewith---自定义合并",children:"mergeWith - 自定义合并"}),`
`,e.jsx(s,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"object"}),e.jsx("td",{children:e.jsx("code",{children:"object"})}),e.jsx("td",{children:"目标对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"...sources"}),e.jsx("td",{children:e.jsx("code",{children:"object[]"})}),e.jsx("td",{children:"源对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"customizer"}),e.jsx("td",{children:e.jsx("code",{children:"Function"})}),e.jsx("td",{children:"自定义合并函数（mergeWith）"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"object"})]}),`
`,e.jsx(n.li,{children:"描述：合并后的目标对象（会修改原对象）"}),`
`]})]})}function x(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{x as default};
