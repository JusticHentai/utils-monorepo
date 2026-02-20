import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`export default function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const inDegree = new Array(numCourses).fill(0)

  const map: Record<string, number[]> = {}

  // 初始化 入度 和 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++

    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }

  const queue = []

  // bfs 初始入口 入度为 0 的都可以选
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  let count = 0

  while (queue.length) {
    const selected = queue.shift() as number

    count++

    const toEnQueue = map[selected] // 获取被依赖数组

    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        // 课程一个依赖的 课程已经上完 可以减一个入度
        inDegree[toEnQueue[i]]--

        // 入度为 0 表示可以修 扔进 bfs 队列
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i])
        }
      }
    }
  }

  return count === numCourses
}
`,u=`import canFinish from '../../../../packages/learn-utils/src/leetcode/canFinish'

export default () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]

  const result = canFinish(numCourses, prerequisites)

  console.log('课程数:', numCourses)
  console.log('先修课程关系:', prerequisites)
  console.log('能否完成所有课程:', result)

  return result
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"课程表-leetcode-207",children:"课程表 (LeetCode 207)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["你这个学期必须选修 ",n.jsx(e.code,{children:"numCourses"})," 门课程，记为 ",n.jsx(e.code,{children:"0"})," 到 ",n.jsx(e.code,{children:"numCourses - 1"}),"。在选修某些课程之前需要一些先修课程。判断是否可能完成所有课程的学习。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"拓扑排序 + BFS"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将课程依赖关系建模为有向图"}),`
`,n.jsx(e.li,{children:"使用入度数组记录每门课程的先修课程数"}),`
`,n.jsx(e.li,{children:"使用 BFS 从入度为 0 的课程开始，逐步删除已完成的课程"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"构建邻接表和入度数组"}),`
`,n.jsx(e.li,{children:"将所有入度为 0 的节点入队"}),`
`,n.jsx(e.li,{children:"BFS 遍历，每次出队一个节点，将其邻接节点入度减 1"}),`
`,n.jsx(e.li,{children:"如果邻接节点入度变为 0，则入队"}),`
`,n.jsx(e.li,{children:"最终检查是否所有课程都被访问"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n + m)，n 为课程数，m 为先修关系数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n + m)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:u})]})}function m(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
