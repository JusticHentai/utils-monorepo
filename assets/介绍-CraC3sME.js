import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const normalDemo = () => {
  const obj = { a: 1, b: { c: 2 } }
  const cloned = deepClone(obj)
  cloned.b.c = 3

  action('深拷贝普通对象')({
    original: obj,
    cloned,
    isDeep: obj.b.c !== cloned.b.c,
  })
}

export default normalDemo
`,c=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const circularDemo = () => {
  const obj: any = { a: 1 }
  obj.self = obj

  const cloned = deepClone(obj)

  action('深拷贝循环引用对象')({
    original: obj,
    cloned,
    isDeep: cloned.self === cloned,
  })
}

export default circularDemo
`,t=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const dateDemo = () => {
  const original = {
    a: new Date('2023-01-01'),
  }

  const cloned = deepClone(original)

  action('深拷贝 Date 对象')({
    original,
    cloned,
    isDate: cloned.a instanceof Date,
    isEqual: original.a.getTime() === cloned.a.getTime(),
    isDeep: original.a !== cloned.a,
  })
}

export default dateDemo
`,d=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const regExpDemo = () => {
  const obj = {
    pattern: /hello\\s+world/gi,
    validate: /^[a-z]+$/,
  }
  const cloned = deepClone(obj)

  action('深拷贝 RegExp 对象')({
    original: obj,
    cloned,
    isDeep: obj.pattern !== cloned.pattern,
  })
}

export default regExpDemo
`,a=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const arrayDemo = () => {
  const arr: any[] = [1, [2, 3], [4, 5]]
  const cloned = deepClone(arr)
  cloned[1][0] = 999

  action('深拷贝数组')({
    original: arr,
    cloned,
    isDeep: arr[1][0] !== cloned[1][0],
  })
}

export default arrayDemo
`,p=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const symbolDemo = () => {
  const sym = Symbol('key')
  const obj = {
    name: 'test',
    [sym]: 'symbol value',
  }
  const cloned = deepClone(obj)

  action('深拷贝 Symbol 键')({
    original: obj,
    cloned,
    hasSymbol: sym in cloned,
    symbolValue: cloned[sym],
  })
}

export default symbolDemo
`,h=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Map 深拷贝示例
 * 判断方式：修改克隆后 Map 中嵌套对象的属性，原 Map 不受影响
 * 原因：如果是深拷贝，嵌套对象也会被复制，修改克隆对象不会影响原对象
 */
const mapDemo = () => {
  const obj = { nested: true }
  const map = new Map<string, any>([
    ['key1', obj],
    ['key2', { value: 2 }],
  ])
  const cloned = deepClone(map)

  // 修改克隆后的 Map 中的嵌套对象
  cloned.get('key1').nested = false

  action('深拷贝 Map')({
    original: Object.fromEntries(map),
    cloned: Object.fromEntries(cloned),
    // 原 Map 中的对象不受影响，说明是深拷贝
    isDeep: map.get('key1')!.nested !== cloned.get('key1').nested,
  })
}

export default mapDemo
`,j=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Set 深拷贝示例
 * 判断方式：Set 中包含对象，修改克隆后的对象，原 Set 中的对象不受影响
 * 原因：深拷贝会递归复制 Set 中的每个元素，包括对象元素
 */
const setDemo = () => {
  const obj = { id: 1 }
  const set = new Set([obj, { id: 2 }])
  const cloned = deepClone(set)

  // 获取克隆后 Set 的第一个元素并修改
  const clonedFirst = [...cloned][0]
  clonedFirst.id = 999

  action('深拷贝 Set')({
    original: [...set],
    cloned: [...cloned],
    // 原 Set 中的对象 id 仍为 1，说明是深拷贝
    isDeep: obj.id !== clonedFirst.id,
  })
}

export default setDemo
`,x=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * ArrayBuffer 深拷贝示例
 * 判断方式：通过 Uint8Array 视图修改克隆后的 buffer，原 buffer 不受影响
 * 原因：ArrayBuffer 使用 slice(0) 复制，会创建新的内存区域存储二进制数据
 */
const arrayBufferDemo = () => {
  const buffer = new ArrayBuffer(8)
  const view = new Uint8Array(buffer)
  view[0] = 42 // 设置初始值

  const cloned = deepClone(buffer)
  const clonedView = new Uint8Array(cloned)
  clonedView[0] = 100 // 修改克隆后的 buffer

  action('深拷贝 ArrayBuffer')({
    originalFirstByte: view[0],
    clonedFirstByte: clonedView[0],
    // 原 buffer 的值仍为 42，说明是深拷贝
    isDeep: view[0] !== clonedView[0],
  })
}

export default arrayBufferDemo
`,m=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * TypedArray 深拷贝示例（以 Uint8Array 为例）
 * 判断方式：修改克隆后数组的元素，原数组不受影响
 * 原因：TypedArray 通过构造函数复制，会创建新的底层 ArrayBuffer
 */
const typedArrayDemo = () => {
  const arr = new Uint8Array([1, 2, 3, 4, 5])
  const cloned = deepClone(arr)

  // 修改克隆后的数组
  cloned[0] = 255

  action('深拷贝 TypedArray (Uint8Array)')({
    original: Array.from(arr),
    cloned: Array.from(cloned),
    // 原数组第一个元素仍为 1，说明是深拷贝
    isDeep: arr[0] !== cloned[0],
  })
}

export default typedArrayDemo
`,y=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * DataView 深拷贝示例
 * 判断方式：通过克隆后的 DataView 修改数据，原 DataView 不受影响
 * 原因：DataView 克隆时会先复制底层 ArrayBuffer，再创建新的 DataView
 */
const dataViewDemo = () => {
  const buffer = new ArrayBuffer(16)
  const view = new DataView(buffer)
  view.setInt32(0, 42) // 设置初始值

  const cloned = deepClone(view)
  cloned.setInt32(0, 100) // 修改克隆后的 DataView

  action('深拷贝 DataView')({
    originalValue: view.getInt32(0),
    clonedValue: cloned.getInt32(0),
    // 原 DataView 的值仍为 42，说明是深拷贝
    isDeep: view.getInt32(0) !== cloned.getInt32(0),
  })
}

export default dataViewDemo
`,f=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Error 深拷贝示例
 * 判断方式：比较原 Error 和克隆 Error 的引用，以及 message 和 stack 是否保留
 * 原因：Error 通过构造函数创建新实例，并复制 message 和 stack 属性
 */
const errorDemo = () => {
  const error = new TypeError('原始错误信息')
  const cloned = deepClone(error)

  // 修改克隆后的 message（注意：Error 的 message 是只读的，这里只验证引用不同）
  action('深拷贝 Error')({
    originalMessage: error.message,
    clonedMessage: cloned.message,
    originalName: error.name,
    clonedName: cloned.name,
    // 引用不同说明是深拷贝，message 相同说明值被正确复制
    isDeep: error !== cloned && error.message === cloned.message,
    hasStack: !!cloned.stack,
  })
}

export default errorDemo
`,g=`import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const mixedDemo = () => {
  const sym = Symbol('id')
  const obj = {
    name: 'mixed',
    date: new Date('2025-01-06'),
    pattern: /test/gi,
    items: [1, { nested: true }],
    [sym]: [
      'symbol value',
      {
        a: 'symbol value',
      },
    ],
  }
  const cloned = deepClone(obj)
  cloned[sym][1].a = 'symbol value 2'

  action('深拷贝混合类型')({
    original: obj,
    cloned,
    isDeep: (obj[sym] as any[])?.[1]?.a !== (cloned[sym] as any[])?.[1]?.a,
    hasSymbol: sym in cloned,
  })
}

export default mixedDemo
`;function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"deepclone",children:"deepClone"}),`
`,n.jsx(e.p,{children:"深拷贝函数，支持多种数据类型和循环引用。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["deepClone 是一个功能完善的深拷贝函数，核心作用是：",n.jsx(e.strong,{children:"创建一个与原对象完全独立的副本，修改副本不会影响原对象"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"递归遍历：处理嵌套对象结构"}),`
`,n.jsx(e.li,{children:"WeakMap：存储已拷贝对象，处理循环引用"}),`
`,n.jsx(e.li,{children:"类型判断：识别不同数据类型采用不同拷贝策略"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"与 JSON.parse(JSON.stringify()) 的区别"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"JSON 方式不支持：函数、undefined、Symbol、循环引用、Date、RegExp、Map、Set 等"}),`
`,n.jsx(e.li,{children:"本函数支持上述所有类型"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"状态管理：创建不可变数据副本"}),`
`,n.jsx(e.li,{children:"撤销/重做：保存历史状态快照"}),`
`,n.jsx(e.li,{children:"表单重置：恢复初始数据"}),`
`,n.jsx(e.li,{children:"数据隔离：避免意外修改原数据"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"支持几乎所有 JavaScript 数据类型"}),`
`,n.jsx(e.li,{children:"正确处理循环引用，不会无限递归"}),`
`,n.jsx(e.li,{children:"使用 WeakMap 避免内存泄漏"}),`
`]}),`
`,n.jsx(e.h2,{id:"支持的类型",children:"支持的类型"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"普通对象、数组"}),`
`,n.jsx(e.li,{children:"Date、RegExp"}),`
`,n.jsx(e.li,{children:"Symbol 键"}),`
`,n.jsx(e.li,{children:"Map、Set"}),`
`,n.jsx(e.li,{children:"ArrayBuffer、TypedArray（Uint8Array、Int32Array 等）、DataView"}),`
`,n.jsx(e.li,{children:"Error（TypeError、RangeError 等）"}),`
`,n.jsx(e.li,{children:"循环引用"}),`
`]}),`
`,n.jsx(e.h2,{id:"普通对象示例",children:"普通对象示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"循环引用示例",children:"循环引用示例"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"date-对象示例",children:"Date 对象示例"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"regexp-对象示例",children:"RegExp 对象示例"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"数组示例",children:"数组示例"}),`
`,n.jsx(r,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"symbol-键示例",children:"Symbol 键示例"}),`
`,n.jsx(r,{language:"typescript",children:p}),`
`,n.jsx(e.h2,{id:"map-示例",children:"Map 示例"}),`
`,n.jsx(r,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"set-示例",children:"Set 示例"}),`
`,n.jsx(r,{language:"typescript",children:j}),`
`,n.jsx(e.h2,{id:"arraybuffer-示例",children:"ArrayBuffer 示例"}),`
`,n.jsx(r,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"typedarray-示例",children:"TypedArray 示例"}),`
`,n.jsx(r,{language:"typescript",children:m}),`
`,n.jsx(e.h2,{id:"dataview-示例",children:"DataView 示例"}),`
`,n.jsx(r,{language:"typescript",children:y}),`
`,n.jsx(e.h2,{id:"error-示例",children:"Error 示例"}),`
`,n.jsx(r,{language:"typescript",children:f}),`
`,n.jsx(e.h2,{id:"混合类型示例",children:"混合类型示例"}),`
`,n.jsx(r,{language:"typescript",children:g}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"obj",children:"obj"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsx(e.li,{children:"描述：要深拷贝的对象"}),`
`]}),`
`,n.jsx(e.h3,{id:"hash",children:"hash"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"WeakMap<any, any>"})]}),`
`,n.jsxs(e.li,{children:["描述：用于处理循环引用的内部参数，默认值为 ",n.jsx(e.code,{children:"new WeakMap()"})]}),`
`]}),`
`,n.jsx(e.h4,{id:"为什么使用-weakmap-而非-map",children:"为什么使用 WeakMap 而非 Map？"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特性"}),n.jsx("th",{children:"WeakMap"}),n.jsx("th",{children:"Map"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"键类型"}),n.jsx("td",{children:"只能是对象"}),n.jsx("td",{children:"任意类型"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"键引用"}),n.jsx("td",{children:"弱引用，不阻止垃圾回收"}),n.jsx("td",{children:"强引用，阻止垃圾回收"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"可遍历"}),n.jsx("td",{children:"否（无 size、keys、values）"}),n.jsx("td",{children:"是"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"内存管理"}),n.jsx("td",{children:"键对象无其他引用时自动回收"}),n.jsx("td",{children:"需手动 delete 或 clear"})]})]})]}),`
`,n.jsx(e.p,{children:"深拷贝场景选择 WeakMap 的原因："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"深拷贝的键一定是对象（需要处理循环引用的都是对象）"}),`
`,n.jsx(e.li,{children:"深拷贝完成后，hash 中存储的原对象映射不再需要，WeakMap 允许这些对象被垃圾回收，避免内存泄漏"}),`
`,n.jsx(e.li,{children:"深拷贝只需要 get/set/has 操作，不需要遍历"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsx(e.li,{children:"描述：深拷贝后的对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 deepClone 函数实现和类型处理逻辑"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"检查 hash 中是否已存在该对象（处理循环引用）"}),`
`,n.jsxs(e.li,{children:["判断值的类型（使用 ",n.jsx(e.code,{children:"Object.prototype.toString.call()"}),"）"]}),`
`,n.jsxs(e.li,{children:["根据类型采用不同拷贝策略：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"原始类型：直接返回"}),`
`,n.jsx(e.li,{children:"Date/RegExp：使用构造函数创建新实例"}),`
`,n.jsx(e.li,{children:"Map/Set：创建新实例并递归拷贝元素"}),`
`,n.jsx(e.li,{children:"ArrayBuffer/TypedArray/DataView：使用 slice 或构造函数"}),`
`,n.jsx(e.li,{children:"Error：创建同类型 Error 实例"}),`
`,n.jsx(e.li,{children:"对象/数组：递归拷贝属性"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"拷贝前将原对象和副本存入 hash"}),`
`,n.jsx(e.li,{children:"递归处理嵌套结构"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["WeakMap 存储 ",n.jsx(e.code,{children:"原对象 -> 副本"})," 映射，检测到已存在则返回副本"]}),`
`,n.jsxs(e.li,{children:["Symbol 属性使用 ",n.jsx(e.code,{children:"Object.getOwnPropertySymbols()"})," 获取"]}),`
`,n.jsxs(e.li,{children:["TypedArray 使用 ",n.jsx(e.code,{children:"new obj.constructor(obj)"})," 创建"]}),`
`,n.jsxs(e.li,{children:["ArrayBuffer 使用 ",n.jsx(e.code,{children:"slice(0)"})," 复制底层数据"]}),`
`]})]})}function A(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{A as default};
