import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`export default function isDAG(path: [string, string][]): boolean {
  const inDegree: Record<string, number> = {}
  const map: Record<string, string[]> = {}

  // 初始化邻接表 和 入度表
  for (const [start, end] of path) {
    if (!inDegree[start]) {
      inDegree[start] = 0
    }

    inDegree[end] = inDegree[end] ? inDegree[end] + 1 : 1

    if (map[start]) {
      map[start].push(end)
    } else {
      map[start] = [end]
    }
  }

  const queue = []

  // bfs 初始入口 入度为 0 的都可以选
  for (const key in inDegree) {
    if (!inDegree[key]) queue.push(key)
  }

  let count = 0

  while (queue.length) {
    // 获取当前节点
    const node = queue.shift()

    // 获取依赖数组
    const array = map[node as string] as string[]

    count++

    if (!array) {
      continue
    }

    for (const item of array) {
      // 给边减去入度
      inDegree[item]--

      // 入度归 0 继续删
      if (!inDegree[item]) {
        queue.push(item)
      }
    }
  }

  return count === Object.keys(inDegree).length
}
`,c=`import isDAG from '../../../../packages/learn-utils/src/leetcode/isDAG'

export default () => {
  // 有向无环图
  const dagPath: [string, string][] = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['C', 'D'],
  ]

  // 有向有环图
  const cyclePath: [string, string][] = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A'],
  ]

  const result1 = isDAG(dagPath)
  const result2 = isDAG(cyclePath)

  console.log('无环图:', dagPath, '是否为 DAG:', result1)
  console.log('有环图:', cyclePath, '是否为 DAG:', result2)

  return { dag: result1, cycle: result2 }
}
`;function t(r){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"判断有向无环图-dag",children:"判断有向无环图 (DAG)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个有向图的边集合，判断该图是否为有向无环图（DAG）。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"拓扑排序"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用 BFS 进行拓扑排序"}),`
`,n.jsx(e.li,{children:"如果所有节点都能被访问，则为 DAG"}),`
`,n.jsx(e.li,{children:"否则存在环"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"构建邻接表和入度表"}),`
`,n.jsx(e.li,{children:"将所有入度为 0 的节点入队"}),`
`,n.jsx(e.li,{children:"BFS 遍历，每次出队一个节点，将其邻接节点入度减 1"}),`
`,n.jsx(e.li,{children:"如果邻接节点入度变为 0，则入队"}),`
`,n.jsx(e.li,{children:"最终检查访问的节点数是否等于总节点数"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(V + E)，V 为顶点数，E 为边数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(V + E)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:c})]})}function x(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{x as default};
