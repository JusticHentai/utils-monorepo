import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  const used = Array.from(new Array(m), () => new Array(n).fill(false))

  const dfs = (row: number, col: number, i: number) => {
    // 目标
    if (i === word.length) {
      return true
    }

    // 枝剪 越界
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false
    }

    // 枝剪 访问过了 或者不是目标字符
    if (used[row][col] || board[row][col] !== word[i]) {
      return false
    }

    // 选择

    used[row][col] = true

    const canFindRest =
      dfs(row + 1, col, i + 1) ||
      dfs(row - 1, col, i + 1) ||
      dfs(row, col + 1, i + 1) ||
      dfs(row, col - 1, i + 1)

    // 目标
    if (canFindRest) {
      return true
    }

    // 处理后市
    used[row][col] = false

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}
`,d=`import exist from '../../../../packages/learn-utils/src/leetcode/exist'

export default () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'

  const result = exist(board, word)

  console.log('二维网格:', board)
  console.log('搜索单词:', word)
  console.log('是否存在:', result)

  return result
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"单词搜索-leetcode-79",children:"单词搜索 (LeetCode 79)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个 ",n.jsx(e.code,{children:"m x n"})," 二维字符网格 ",n.jsx(e.code,{children:"board"})," 和一个字符串单词 ",n.jsx(e.code,{children:"word"}),"。如果 ",n.jsx(e.code,{children:"word"})," 存在于网格中，返回 ",n.jsx(e.code,{children:"true"}),"；否则，返回 ",n.jsx(e.code,{children:"false"}),"。单词必须按照字母顺序，通过相邻的单元格内的字母构成。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"DFS + 回溯"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"从每个格子开始尝试 DFS 搜索"}),`
`,n.jsx(e.li,{children:"使用 visited 数组标记已访问的格子"}),`
`,n.jsx(e.li,{children:"回溯时恢复 visited 状态"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"遍历网格，找到与单词首字母匹配的格子"}),`
`,n.jsx(e.li,{children:"从该格子开始 DFS，向四个方向搜索"}),`
`,n.jsx(e.li,{children:"如果越界、已访问或字符不匹配，返回 false"}),`
`,n.jsx(e.li,{children:"如果找到完整单词，返回 true"}),`
`,n.jsx(e.li,{children:"回溯：恢复 visited 状态"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * n * 3^L)，L 为单词长度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(m * n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:d})]})}function a(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
