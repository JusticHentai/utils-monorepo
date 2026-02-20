import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'
import assignInWith from '../../../packages/js-utils/src/assignInWith'

const assignInWithDemo = () => {
  // 构造带继承属性的来源对象
  function Foo(this: Record<string, unknown>) {
    this.a = 1
    this.b = 'hello'
  }
  Foo.prototype.inherited = 'from proto'

  // @ts-expect-error constructor call
  const source = new Foo()

  // assignIn：直接覆盖，无法自定义逻辑
  const r1 = assignIn({ a: 99, c: 3 }, source)

  // assignInWith：通过 customizer 控制分配行为
  // 这里的策略：如果目标已有值，保留目标值；否则用来源值
  const r2 = assignInWith(
    { a: 99, c: 3 },
    source,
    (objVal, srcVal) => (objVal !== undefined ? objVal : srcVal)
  )

  action('assignInWith vs assignIn')({
    'assignIn（直接覆盖）': r1,
    'assignInWith（保留已有值）': r2,
  })
}

export default assignInWithDemo
`,t=`import { action } from 'storybook/actions'
import assignInWith from '../../../packages/js-utils/src/assignInWith'

const edgeCaseDemo = () => {
  // customizer 返回 undefined 时，回退到 source 值
  const r1 = assignInWith(
    { a: 1, b: 2 },
    { a: 10, b: 20, c: 30 },
    (objVal, srcVal) => {
      // 只对 number 类型做求和，其他返回 undefined（使用 source 值）
      if (typeof objVal === 'number' && typeof srcVal === 'number') {
        return objVal + srcVal
      }
      return undefined
    }
  )

  // customizer 接收 key 参数，可按 key 区分处理
  const r2 = assignInWith(
    { x: 'old', y: 'old' },
    { x: 'new', y: 'new', z: 'new' },
    (objVal, srcVal, key) => (key === 'x' ? objVal : srcVal)
  )

  // 来源为空对象
  const r3 = assignInWith({ a: 1 }, {}, (_o, s) => s)

  // 继承属性 + customizer 组合
  function Bar(this: Record<string, unknown>) {
    this.own = 'own'
  }
  Bar.prototype.proto = 'proto'
  // @ts-expect-error constructor call
  const source = new Bar()
  const r4 = assignInWith(
    {},
    source,
    (_objVal, srcVal) => String(srcVal).toUpperCase()
  )

  action('assignInWith - 边界情况')({
    'customizer 返回 undefined 回退': r1,
    '按 key 区分处理': r2,
    '空来源对象': r3,
    '继承属性 + customizer 转大写': r4,
  })
}

export default edgeCaseDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"assigninwith",children:"assignInWith"}),`
`,n.jsx(s.p,{children:"类似于 assignIn，但可以自定义分配逻辑"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"assignInWith"})," 在 ",n.jsx(s.code,{children:"assignIn"})," 的基础上增加了 ",n.jsx(s.code,{children:"customizer"})," 自定义分配函数，两者的关系："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"assignIn"}),"：使用 ",n.jsx(s.code,{children:"for...in"})," 遍历来源对象（含继承属性），",n.jsx(s.strong,{children:"直接覆盖"}),"目标属性"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"assignInWith"}),"：同样使用 ",n.jsx(s.code,{children:"for...in"})," 遍历（含继承属性），但每个属性的赋值",n.jsx(s.strong,{children:"由 customizer 决定"})]}),`
`]}),`
`,n.jsx(s.h3,{id:"customizer-函数签名",children:"customizer 函数签名"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`(objValue, srcValue, key, object, source) => result
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"customizer"})," 返回非 ",n.jsx(s.code,{children:"undefined"})," 值时，使用该返回值作为最终值"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"customizer"})," 返回 ",n.jsx(s.code,{children:"undefined"})," 时，回退到默认行为（直接使用 source 值）"]}),`
`]}),`
`,n.jsx(s.h3,{id:"assignin-vs-assigninwith-对比",children:"assignIn vs assignInWith 对比"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`function Foo() { this.a = 1; this.b = 'hello' }
Foo.prototype.inherited = 'from proto'
const source = new Foo()

// assignIn：直接覆盖
assignIn({ a: 99 }, source)
// => { a: 1, b: 'hello', inherited: 'from proto' }

// assignInWith：保留目标已有值
assignInWith({ a: 99 }, source, (objVal, srcVal) =>
  objVal !== undefined ? objVal : srcVal
)
// => { a: 99, b: 'hello', inherited: 'from proto' }
`})}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"合并对象时需要自定义冲突解决策略（如保留已有值、值求和、拼接字符串等）"}),`
`,n.jsx(s.li,{children:"需要按 key 名称区分不同的合并逻辑"}),`
`,n.jsx(s.li,{children:"合并含继承属性的对象，同时需要对值进行转换处理"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"assignInWith"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"T extends Record<string, unknown>"})}),n.jsx("td",{children:"目标对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"来源对象（含继承属性）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"(objValue, srcValue, key, object, source) => unknown"})}),n.jsx("td",{children:"自定义分配函数，返回 undefined 时回退到 source 值"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T"})]}),`
`,n.jsx(s.li,{children:"描述：返回修改后的目标对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"assignInWith/index.ts"})," 导出 assignInWith 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 使用 ",n.jsx(s.code,{children:"for...in"})," 遍历 source（含继承属性），对每个 key 调用 ",n.jsx(s.code,{children:"customizer(objValue, srcValue, key, object, source)"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": customizer 返回非 ",n.jsx(s.code,{children:"undefined"})," 时使用返回值，返回 ",n.jsx(s.code,{children:"undefined"})," 时回退使用 ",n.jsx(s.code,{children:"source[key]"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"与 assignIn 的区别"}),": 在赋值前增加了 customizer 调用，提供自定义分配能力"]}),`
`]})]})}function u(e={}){const{wrapper:s}={...o(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{u as default};
