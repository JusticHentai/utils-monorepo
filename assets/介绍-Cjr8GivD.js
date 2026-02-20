import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { hash1, hash2 } from '../../../../packages/learn-utils/src/handwritten/hash'

const normalDemo = () => {
  // 测试求最大差值
  const nums = [3, 1, 9, 5, 2, 8]
  const maxDiff = hash1(nums)

  // 测试对象数组去重
  const objects = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 1, name: 'a' },
    { id: 3, name: 'c' },
    { id: 2, name: 'b' },
  ]
  const unique = hash2(objects)

  return {
    nums,
    maxDiff, // 9 - 1 = 8
    objects: '包含重复对象的数组',
    unique, // 去重后的数组
  }
}

export default normalDemo
`,l=`export const hash1 = (array: number[]) => {
  let min = Infinity
  let max = -Infinity

  for (const item of array) {
    min = Math.min(min, item)
    max = Math.max(max, item)
  }

  return max - min
}

export const hash2 = (array: any[]) => {
  const res = []
  const hash = new Map<any, number>()

  for (const item of array) {
    const jsonStr = JSON.stringify(item)

    if (hash.has(jsonStr)) {
      continue
    }

    hash.set(jsonStr, 1)

    res.push(item)
  }

  return res
}
`;function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"hash-哈希表应用",children:"Hash 哈希表应用"}),`
`,n.jsx(s.p,{children:"哈希表是一种通过键值对存储数据的数据结构，提供 O(1) 的查找、插入和删除操作。"}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"哈希函数"}),"：将键映射到数组索引"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"冲突处理"}),"：使用链地址法或开放地址法处理哈希冲突"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间换时间"}),"：用额外空间存储映射关系，换取查找效率"]}),`
`]}),`
`,n.jsx(s.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数组去重"}),`
`,n.jsx(s.li,{children:"两数之和"}),`
`,n.jsx(s.li,{children:"统计频率"}),`
`,n.jsx(s.li,{children:"缓存实现"}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"函数说明",children:"函数说明"}),`
`,n.jsx(s.h3,{id:"hash1",children:"hash1"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"求数组中最大值与最小值的差"}),`
`,n.jsx(s.li,{children:"一次遍历同时记录最大最小值"}),`
`]}),`
`,n.jsx(s.h3,{id:"hash2",children:"hash2"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"对象数组去重"}),`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"JSON.stringify"})," 作为哈希键"]}),`
`,n.jsx(s.li,{children:"Map 记录已出现的对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"时间复杂度",children:"时间复杂度"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"查找"}),"：O(1) 平均，O(n) 最坏"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"插入"}),"：O(1) 平均，O(n) 最坏"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"删除"}),"：O(1) 平均，O(n) 最坏"]}),`
`]}),`
`,n.jsx(s.h2,{id:"javascript-中的哈希表",children:"JavaScript 中的哈希表"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"Object"}),"：键只能是字符串或 Symbol"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"Map"}),"：键可以是任意类型"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"Set"}),"：只存储键，用于去重"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"WeakMap"}),"/",n.jsx(s.code,{children:"WeakSet"}),"：键是弱引用"]}),`
`]})]})}function m(i={}){const{wrapper:s}={...h(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{m as default};
