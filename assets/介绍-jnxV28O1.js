import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import create from '../../../packages/js-utils/src/create'

const basicDemo = () => {
  // 创建继承原型的对象
  const proto = {
    greet() { return 'hello from proto' },
  }

  const obj = create(proto, { name: 'Alice', age: 25 })

  action('create - 基础继承')({
    name: (obj as any).name,
    age: (obj as any).age,
    greet: (obj as any).greet(),
    hasOwnName: Object.prototype.hasOwnProperty.call(obj, 'name'),
    hasOwnGreet: Object.prototype.hasOwnProperty.call(obj, 'greet'),
    说明: 'name/age 是自有属性，greet 是继承属性',
  })
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import create from '../../../packages/js-utils/src/create'

const inheritanceDemo = () => {
  // 模拟经典继承模式
  function Shape() {}
  Shape.prototype.type = 'shape'

  const circle = create(Shape.prototype, { constructor: function Circle() {}, radius: 10 })

  action('create - 经典继承模式')({
    type: (circle as any).type,
    radius: (circle as any).radius,
    isShapeInstance: circle instanceof (Shape as any),
    说明: 'circle 继承了 Shape.prototype，是 Shape 的实例',
  })

  // 只传自有属性
  function Foo() {}
  Foo.prototype.b = 2
  const fooInstance = { a: 1, c: 3 }
  const result = create({}, fooInstance)

  action('create - 只复制自有属性')({
    结果: result,
    说明: '只有自有属性 a 和 c 被复制',
  })
}

export default inheritanceDemo
`;function s(c){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"create",children:"create"}),`
`,e.jsx(n.p,{children:"创建一个继承 prototype 的对象。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"create"})," 是 ",e.jsx(n.code,{children:"Object.create()"})," 的封装，用于",e.jsx(n.strong,{children:"创建一个以指定原型为基础的新对象"}),"，并可选地赋值属性："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const obj = create(Shape.prototype, { constructor: Circle })
// 等价于：
const obj = Object.create(Shape.prototype)
obj.constructor = Circle
`})}),`
`,e.jsx(n.h3,{id:"经典继承模式中的三步协作",children:"经典继承模式中的三步协作"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"步骤"}),e.jsx("th",{children:"代码"}),e.jsx("th",{children:"作用"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"继承属性"}),e.jsx("td",{children:e.jsx("code",{children:"Shape.call(this)"})}),e.jsx("td",{children:"借用父构造函数，获得实例属性"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"继承方法"}),e.jsx("td",{children:e.jsx("code",{children:"Circle.prototype = create(Shape.prototype)"})}),e.jsx("td",{children:"原型链连接，获得原型方法"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"修复构造器"}),e.jsx("td",{children:e.jsx("code",{children:"{ constructor: Circle }"})}),e.jsx("td",{children:"保证 instanceof 和 constructor 指向正确"})]})]})]}),`
`,e.jsx(n.h3,{id:"call-与-apply",children:"call 与 apply"}),`
`,e.jsxs(n.p,{children:["两者都是",e.jsxs(n.strong,{children:["调用函数并手动指定 ",e.jsx(n.code,{children:"this"})]}),"，区别仅在于传参方式："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`func.call(thisArg, arg1, arg2)      // 逐个传参
func.apply(thisArg, [arg1, arg2])   // 数组传参
`})}),`
`,e.jsxs(n.p,{children:["示例中 ",e.jsx(n.code,{children:"Shape.call(this)"})," 的作用：在 ",e.jsx(n.code,{children:"Circle"})," 构造函数内部，借用 ",e.jsx(n.code,{children:"Shape"})," 的构造逻辑，让 ",e.jsx(n.code,{children:"Circle"})," 实例也拥有 ",e.jsx(n.code,{children:"x"}),"、",e.jsx(n.code,{children:"y"})," 属性。"]}),`
`,e.jsx(n.h3,{id:"constructor-属性",children:"constructor 属性"}),`
`,e.jsxs(n.p,{children:["每个函数的 ",e.jsx(n.code,{children:"prototype"})," 默认有 ",e.jsx(n.code,{children:"constructor"})," 指回函数自身。用 ",e.jsx(n.code,{children:"create(Shape.prototype)"})," 覆盖 ",e.jsx(n.code,{children:"Circle.prototype"})," 后，",e.jsx(n.code,{children:"constructor"})," 会丢失（变成指向 ",e.jsx(n.code,{children:"Shape"}),"），所以需要手动修复："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`Circle.prototype = create(Shape.prototype, {
  constructor: Circle  // 修复：让实例的 constructor 正确指向 Circle
})
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["现代 JS 中 ",e.jsx(n.code,{children:"class extends"})," 语法已经封装了以上所有步骤。"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"实现经典的构造函数继承模式"}),`
`,e.jsx(n.li,{children:"创建带有指定原型的对象"}),`
`,e.jsx(n.li,{children:"手动控制原型链关系"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础继承",children:"基础继承"}),`
`,e.jsx(r,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"经典继承模式",children:"经典继承模式"}),`
`,e.jsx(r,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"prototype"}),e.jsx("td",{children:e.jsx("code",{children:"T | null"})}),e.jsx("td",{children:"要继承的原型对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"properties"}),e.jsx("td",{children:e.jsx("code",{children:"Record<string, unknown>"})}),e.jsx("td",{children:"要分配的自有属性（可选）"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T"})]}),`
`,e.jsx(n.li,{children:"描述：继承了 prototype 的新对象"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"create/index.ts"})," 导出 create 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": ",e.jsx(n.code,{children:"Object.create(prototype)"})," 创建继承原型的新对象 → 遍历 ",e.jsx(n.code,{children:"properties"})," 的 keys → 赋值到新对象 → 返回"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": ",e.jsx(n.code,{children:"Object.create"})," 建立原型链，",e.jsx(n.code,{children:"Object.keys"})," 遍历自有可枚举属性进行赋值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"与原生的区别"}),": lodash 的 ",e.jsx(n.code,{children:"create"})," 额外提供了 properties 参数的便捷赋值，功能类似 ",e.jsx(n.code,{children:"Object.create"})," + ",e.jsx(n.code,{children:"Object.assign"})," 的组合"]}),`
`]})]})}function p(c={}){const{wrapper:n}={...t(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{p as default};
