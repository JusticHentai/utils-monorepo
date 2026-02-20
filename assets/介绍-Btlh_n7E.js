import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import numIslands from '../../../../packages/learn-utils/src/leetcode/numIslands'

const normalDemo = () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  // 复制一份，因为函数会修改原数组
  const gridCopy = grid.map((row) => [...row])
  const result = numIslands(gridCopy)

  return {
    input: grid,
    output: result, // 1
    explanation: '只有一个岛屿（左上角连通的陆地）',
  }
}

export default normalDemo
`,t=`export default function numIslands(grid: string[][]): number {
  let count = 0

  const dfs = (i: number, j: number, grid: string[][]) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    )
      return

    grid[i][j] = '0'

    dfs(i + 1, j, grid)
    dfs(i - 1, j, grid)
    dfs(i, j + 1, grid)
    dfs(i, j - 1, grid)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++

        dfs(i, j, grid)
      }
    }
  }

  return count
}
`;function s(i){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"numislands-岛屿数量",children:"numIslands 岛屿数量"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.a,{href:"https://leetcode.cn/problems/number-of-islands/",rel:"nofollow",children:"LeetCode 200. 岛屿数量"})," 是 DFS/BFS 的经典题目。"]}),`
`,n.jsx(r.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(r.p,{children:"给你一个由 '1'（陆地）和 '0'（水）组成的二维网格，请你计算网格中岛屿的数量。"}),`
`,n.jsx(r.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(r.h3,{id:"dfs-感染法",children:"DFS 感染法"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"遍历网格，遇到 '1' 则岛屿数量 +1"}),`
`,n.jsx(r.li,{children:"从该位置开始 DFS，将连通的 '1' 都标记为 '0'"}),`
`,n.jsx(r.li,{children:"继续遍历直到结束"}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"时间复杂度"}),"：O(m × n)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空间复杂度"}),"：O(m × n)，递归栈深度"]}),`
`]}),`
`,n.jsx(r.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:n.jsx(r.a,{href:"https://leetcode.cn/problems/max-area-of-island/",rel:"nofollow",children:"岛屿的最大面积"})}),`
`]})]})}function a(i={}){const{wrapper:r}={...l(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
