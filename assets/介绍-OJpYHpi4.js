import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import LRUCache from '../../../../packages/learn-utils/src/leetcode/LRUCache'

const normalDemo = () => {
  const cache = new LRUCache(2) // 容量为2

  cache.put(1, 1)
  cache.put(2, 2)
  const get1 = cache.get(1) // 返回 1

  cache.put(3, 3) // 该操作会使得密钥 2 作废
  const get2 = cache.get(2) // 返回 -1 (未找到)

  cache.put(4, 4) // 该操作会使得密钥 1 作废
  const get1Again = cache.get(1) // 返回 -1 (未找到)
  const get3 = cache.get(3) // 返回 3
  const get4 = cache.get(4) // 返回 4

  return {
    operations: [
      'put(1,1)',
      'put(2,2)',
      'get(1)',
      'put(3,3)',
      'get(2)',
      'put(4,4)',
      'get(1)',
      'get(3)',
      'get(4)',
    ],
    results: [null, null, get1, null, get2, null, get1Again, get3, get4],
    expected: [null, null, 1, null, -1, null, -1, 3, 4],
  }
}

export default normalDemo
`,r=`export default class LRUCache {
  capacity: number
  map: Map<number, number> = new Map()

  constructor(capacity: number) {
    // 利用迭代器实现
    this.map = new Map()
    // 设置缓存最大个数
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key) as number

      // 重新 set，相当于更新到 map 最后
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }

    return -1
  }

  put(key: number, value: number): void {
    // 如果有，就删了再赋值
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    this.map.set(key, value)

    // 判断是不是容量超了，淘汰机制
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}
`;function t(c){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"lrucache-lru-缓存",children:"LRUCache LRU 缓存"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/lru-cache/",rel:"nofollow",children:"LeetCode 146. LRU 缓存"})," 是面试高频题，考察数据结构设计能力。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["设计和实现一个 LRU (最近最少使用) 缓存机制。实现 ",n.jsx(e.code,{children:"LRUCache"})," 类："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"LRUCache(int capacity)"})," 以正整数作为容量初始化 LRU 缓存"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"int get(int key)"})," 如果关键字存在于缓存中，则返回关键字的值，否则返回 -1"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"void put(int key, int value)"})," 如果关键字已经存在，则变更其值；如果不存在，则插入该组「关键字-值」。当缓存容量达到上限时，删除最久未使用的数据"]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"利用-map-的有序性",children:"利用 Map 的有序性"}),`
`,n.jsxs(e.p,{children:["JavaScript 的 ",n.jsx(e.code,{children:"Map"})," 保持插入顺序，可以利用这个特性："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"get 操作"}),"：获取值后删除再重新插入，保持最新"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"put 操作"}),"：如果存在先删除，再插入；超容量时删除第一个（最旧的）"]}),`
`]}),`
`,n.jsx(e.h3,{id:"双向链表--哈希表经典实现",children:"双向链表 + 哈希表（经典实现）"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"哈希表提供 O(1) 查找"}),`
`,n.jsx(e.li,{children:"双向链表维护访问顺序"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"方法说明",children:"方法说明"}),`
`,n.jsx(e.h3,{id:"constructorcapacity",children:"constructor(capacity)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["参数：",n.jsx(e.code,{children:"capacity: number"})," - 缓存容量"]}),`
`,n.jsx(e.li,{children:"描述：初始化 LRU 缓存"}),`
`]}),`
`,n.jsx(e.h3,{id:"getkey",children:"get(key)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["参数：",n.jsx(e.code,{children:"key: number"})," - 键"]}),`
`,n.jsxs(e.li,{children:["返回：",n.jsx(e.code,{children:"number"})," - 值或 -1"]}),`
`]}),`
`,n.jsx(e.h3,{id:"putkey-value",children:"put(key, value)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["参数：",n.jsx(e.code,{children:"key: number, value: number"})," - 键值对"]}),`
`,n.jsx(e.li,{children:"描述：插入或更新缓存"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"操作"}),n.jsx("th",{children:"时间复杂度"}),n.jsx("th",{children:"空间复杂度"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"get"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"O(capacity)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"put"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"O(capacity)"})]})]})]}),`
`,n.jsx(e.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"浏览器缓存"}),"：缓存最近访问的页面"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据库缓存"}),"：缓存热点数据"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"操作系统"}),"：页面置换算法"]}),`
`]})]})}function j(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{j as default};
