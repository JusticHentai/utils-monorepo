import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export class TreeAncestor {
  dp: number[][] = []

  constructor(n: number, parent: number[]) {
    for (let i = 0; i < n; i++) {
      this.dp[i] = [parent[i]]
    }

    for (let j = 1; ; j++) {
      let flag = true

      for (let i = 0; i < n; i++) {
        const temp =
          this.dp[i][j - 1] !== -1 ? this.dp[this.dp[i][j - 1]][j - 1] : -1

        this.dp[i].push(temp)

        if (temp !== -1) flag = false
      }

      if (flag) break
    }
  }

  getKthAncestor(node: number, k: number): number {
    let res = node

    let pos = 0

    while (k && res !== -1) {
      if (pos >= this.dp[res].length) return -1

      if (k & 1) res = this.dp[res][pos]

      k >>= 1

      pos++
    }

    return res
  }
}
`,l=`import { TreeAncestor } from '../../../../packages/learn-utils/src/leetcode/TreeAncestor'

export default () => {
  // 树结构: 0 是根节点，1 的父节点是 0，2 的父节点是 0，3 的父节点是 1...
  const n = 7
  const parent = [-1, 0, 0, 1, 1, 2, 2]

  const treeAncestor = new TreeAncestor(n, parent)

  const results = [
    { node: 3, k: 1, result: treeAncestor.getKthAncestor(3, 1) },
    { node: 5, k: 2, result: treeAncestor.getKthAncestor(5, 2) },
    { node: 6, k: 3, result: treeAncestor.getKthAncestor(6, 3) },
  ]

  console.log('树的父节点数组:', parent)
  results.forEach(({ node, k, result }) => {
    console.log(\`节点 \${node} 的第 \${k} 个祖先:\`, result)
  })

  return results
}
`;function t(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"树节点的第-k-个祖先-leetcode-1483",children:"树节点的第 K 个祖先 (LeetCode 1483)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一棵树，树上有 ",n.jsx(e.code,{children:"n"})," 个节点，按从 ",n.jsx(e.code,{children:"0"})," 到 ",n.jsx(e.code,{children:"n-1"})," 编号。树以父节点数组的形式给出，其中 ",n.jsx(e.code,{children:"parent[i]"})," 是节点 ",n.jsx(e.code,{children:"i"})," 的父节点。树的根节点是编号为 ",n.jsx(e.code,{children:"0"})," 的节点。设计一个数据结构，能够高效地查询某个节点的第 ",n.jsx(e.code,{children:"k"})," 个祖先。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"倍增法（Binary Lifting）"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"预处理每个节点的第 2^j 个祖先"}),`
`,n.jsx(e.li,{children:"查询时将 k 分解为二进制，逐位跳跃"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["构造时预处理 ",n.jsx(e.code,{children:"dp[i][j]"})," = 节点 i 的第 2^j 个祖先"]}),`
`,n.jsx(e.li,{children:"查询时将 k 分解为二进制"}),`
`,n.jsx(e.li,{children:"对于 k 的每个二进制位，如果为 1，则跳跃 2^j 步"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"构造时间复杂度"}),"：O(n log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"查询时间复杂度"}),"：O(log k)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n log n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:l})]})}function u(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{u as default};
