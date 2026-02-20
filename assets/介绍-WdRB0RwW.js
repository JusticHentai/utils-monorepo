import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { bfs1, bfs2, bfs3 } from '../../../../packages/learn-utils/src/handwritten/bfs'

const normalDemo = () => {
  const treeData = [
    {
      id: 1,
      name: '根节点1',
      children: [
        {
          id: 2,
          name: '子节点1-1',
          children: [{ id: 4, name: '子节点1-1-1', children: [] }],
        },
        { id: 3, name: '子节点1-2', children: [] },
      ],
    },
    {
      id: 5,
      name: '根节点2',
      children: [{ id: 6, name: '子节点2-1', children: [] }],
    },
  ]

  return {
    treeData: '树形数据结构',
    bfs1Result: bfs1(treeData), // 每层节点数量
    bfs2Result: bfs2(treeData), // 带去重的每层节点数量
    bfs3Result: bfs3(treeData, 4), // 查找 id=4 的节点名称
  }
}

export default normalDemo
`,l=`export const bfs1 = (data: any[]): number[] => {
  const queue = [...data]
  const res: number[] = []

  while (queue.length) {
    const length = queue.length

    res.push(length)

    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      queue.push(...node.children)
    }
  }

  return res
}

export const bfs2 = (data: any[]): number[] => {
  const queue = [...data]
  const res: number[] = []
  const map = new Map<any, number>()

  // 初始的要记录一遍
  for (const node of queue) {
    if (map.has(node)) {
      continue
    }

    map.set(node, 1)
  }

  // 正常 bfs
  while (queue.length) {
    // 处理每轮队列中的数组结果
    const length = queue.length

    res.push(length)

    // 处理 单个
    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      for (const item of node.children) {
        if (map.has(item)) {
          continue
        }

        map.set(item, 1)

        queue.push(item)
      }
    }
  }

  return res
}

export const bfs3 = (data: any[], id: number) => {
  const queue = [...data]
  const map = new Map<any, number>()

  // 初始的要记录一遍
  for (const node of queue) {
    if (map.has(node)) {
      continue
    }

    if (node.id === id) {
      return node.name
    }

    map.set(node, 1)
  }

  // 正常 bfs
  while (queue.length) {
    // 处理每轮队列中的数组结果
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      for (const item of node.children) {
        // 处理 单个
        if (map.has(item)) {
          continue
        }

        if (item.id === id) {
          return item.name
        }

        map.set(item, 1)

        queue.push(item)
      }
    }
  }

  return -1
}
`;function t(s){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"bfs-广度优先搜索",children:"BFS 广度优先搜索"}),`
`,n.jsx(e.p,{children:"广度优先搜索（Breadth-First Search）是一种图/树的遍历算法，按层级顺序访问节点。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"使用队列"}),"：利用队列的先进先出特性，保证按层级顺序访问"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"逐层遍历"}),"：每次处理当前层的所有节点，再处理下一层"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"去重处理"}),"：使用 Map 记录已访问节点，避免重复访问"]}),`
`]}),`
`,n.jsx(e.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"树的层序遍历"}),`
`,n.jsx(e.li,{children:"最短路径问题"}),`
`,n.jsx(e.li,{children:"社交网络中的好友推荐（N度关系）"}),`
`,n.jsx(e.li,{children:"DOM 树遍历"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"函数说明",children:"函数说明"}),`
`,n.jsx(e.h3,{id:"bfs1",children:"bfs1"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"基础 BFS，返回每层节点数量"}),`
`]}),`
`,n.jsx(e.h3,{id:"bfs2",children:"bfs2"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"带去重的 BFS，使用 Map 避免重复访问"}),`
`]}),`
`,n.jsx(e.h3,{id:"bfs3",children:"bfs3"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"根据 id 查找节点，返回节点名称"}),`
`]}),`
`,n.jsx(e.h2,{id:"时间复杂度",children:"时间复杂度"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)，n 为节点数量"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，队列最多存储一层的节点"]}),`
`]}),`
`,n.jsx(e.h2,{id:"bfs-vs-dfs",children:"BFS vs DFS"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特性"}),n.jsx("th",{children:"BFS"}),n.jsx("th",{children:"DFS"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"数据结构"}),n.jsx("td",{children:"队列"}),n.jsx("td",{children:"栈/递归"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"遍历顺序"}),n.jsx("td",{children:"按层级"}),n.jsx("td",{children:"按深度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"最短路径"}),n.jsx("td",{children:"适合"}),n.jsx("td",{children:"不适合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"空间复杂度"}),n.jsx("td",{children:"较高"}),n.jsx("td",{children:"较低"})]})]})]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
