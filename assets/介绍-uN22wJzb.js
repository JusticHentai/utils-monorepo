import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import deepClone from '../../../../packages/learn-utils/src/handwritten/deepClone'

const normalDemo = () => {
  const obj = {
    name: '张三',
    age: 25,
    address: {
      city: '北京',
      district: '朝阳区',
    },
    hobbies: ['读书', '游泳', '编程'],
    date: new Date(),
  }

  const cloned = deepClone(obj)

  // 验证深拷贝：修改原对象不影响克隆对象
  obj.address.city = '上海'
  obj.hobbies.push('跑步')

  return {
    original: obj,
    cloned: cloned,
    isDeepClone: obj.address !== cloned.address,
  }
}

export default normalDemo
`,i=`import deepClone from '../../../../packages/learn-utils/src/handwritten/deepClone'

const circularDemo = () => {
  // 测试循环引用
  const obj: any = {
    name: '循环引用测试',
    data: {
      value: 100,
    },
  }
  obj.self = obj // 创建循环引用

  const cloned = deepClone(obj)

  return {
    original: '包含循环引用的对象',
    clonedName: cloned.name,
    hasCircular: cloned.self === cloned,
    message: '成功处理循环引用',
  }
}

export default circularDemo
`,d=`export default function deepClone(
  obj: any,
  hash: WeakMap<any, any> = new WeakMap()
) {
  // 如果是 date 类型 new 一个 date
  if (obj.constructor === Date) {
    return new Date(obj)
  }

  // 如果是 RegExp 类型 就 new 一个 RegExp
  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }

  // 循环引用 直接返回自己就行
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  // 浅拷贝 obj
  const cloneObj = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  )

  // 设置好 obj 对应的浅拷贝
  hash.set(obj, cloneObj)

  // 修改浅拷贝的内容为深拷贝
  // Reflect 把对象的 key 拿出来组成数组 包含数组
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      typeof obj[key] === 'object' && obj[key]
        ? deepClone(obj[key], hash)
        : obj[key]
  }
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"deepclone-深拷贝",children:"deepClone 深拷贝"}),`
`,n.jsx(e.p,{children:"深拷贝是前端面试中的高频考点，用于创建一个对象的完整副本，新旧对象完全独立，互不影响。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"递归遍历"}),"：深拷贝需要递归遍历对象的所有属性，对于引用类型的属性继续进行深拷贝"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"循环引用处理"}),"：使用 ",n.jsx(e.code,{children:"WeakMap"})," 缓存已拷贝的对象，避免无限递归"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"特殊对象处理"}),"：对 ",n.jsx(e.code,{children:"Date"}),"、",n.jsx(e.code,{children:"RegExp"})," 等特殊对象进行特殊处理"]}),`
`]}),`
`,n.jsx(e.h2,{id:"实现要点",children:"实现要点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"Object.getPrototypeOf"})," 和 ",n.jsx(e.code,{children:"Object.getOwnPropertyDescriptors"})," 保留原型链和属性描述符"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"Reflect.ownKeys"})," 获取所有属性（包括 Symbol 属性）"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"WeakMap"})," 解决循环引用问题"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"普通对象深拷贝示例",children:"普通对象深拷贝示例"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"循环引用处理示例",children:"循环引用处理示例"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"obj",children:"obj"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsx(e.li,{children:"描述：需要深拷贝的对象"}),`
`]}),`
`,n.jsx(e.h3,{id:"hash",children:"hash"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"WeakMap<any, any>"})]}),`
`,n.jsx(e.li,{children:"描述：用于缓存已拷贝对象的 WeakMap，解决循环引用问题"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsx(e.li,{children:"描述：深拷贝后的新对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"常见面试追问",children:"常见面试追问"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["为什么不能用 ",n.jsx(e.code,{children:"JSON.parse(JSON.stringify())"}),"？"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"无法处理循环引用"}),`
`,n.jsx(e.li,{children:"无法拷贝函数、Symbol、undefined"}),`
`,n.jsx(e.li,{children:"Date 对象会变成字符串"}),`
`,n.jsx(e.li,{children:"RegExp 对象会变成空对象"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"为什么使用 WeakMap 而不是 Map？"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"WeakMap 的键是弱引用，不会阻止垃圾回收"}),`
`,n.jsx(e.li,{children:"当原对象被回收时，WeakMap 中的引用也会自动清除"}),`
`]}),`
`]}),`
`]})]})}function b(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{b as default};
