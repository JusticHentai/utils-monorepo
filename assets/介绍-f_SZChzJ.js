import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`// 层序遍历演示
const normalDemo = () => {
  return {
    input: '[3,9,20,null,null,15,7]',
    output: [[3], [9, 20], [15, 7]],
    explanation: '按层级从上到下、从左到右遍历',
    visual: \`
        3
       / \\\\
      9  20
        /  \\\\
       15   7
    \`,
  }
}

export default normalDemo
`,i=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []

  if (!root) return res

  const q = []
  q.push(root)

  while (q.length) {
    const currentLevelSize = q.length
    res.push([])

    for (let i = 0; i < currentLevelSize; i++) {
      const node = q.shift() as TreeNode

      res[res.length - 1].push(node.val)

      if (node.left) q.push(node.left)

      if (node.right) q.push(node.right)
    }
  }

  return res
}
`;function t(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"levelorder-二叉树的层序遍历",children:"levelOrder 二叉树的层序遍历"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",rel:"nofollow",children:"LeetCode 102. 二叉树的层序遍历"})," 是 BFS 的经典应用。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你二叉树的根节点 root，返回其节点值的层序遍历。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"bfs--队列",children:"BFS + 队列"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用队列存储每层节点"}),`
`,n.jsx(e.li,{children:"每次处理一层的所有节点"}),`
`,n.jsx(e.li,{children:"将子节点加入队列"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/",rel:"nofollow",children:"二叉树的锯齿形层序遍历"})}),`
`]})]})}function j(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{j as default};
