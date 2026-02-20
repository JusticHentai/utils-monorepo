import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`// 二叉树最大深度演示
const normalDemo = () => {
  return {
    input: '[3,9,20,null,null,15,7]',
    output: 3,
    explanation: '最大深度为 3（根节点到叶子节点的最长路径）',
    visual: \`
        3        <- 深度 1
       / \\\\
      9  20      <- 深度 2
        /  \\\\
       15   7    <- 深度 3
    \`,
  }
}

export default normalDemo
`,s=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function maxDepth(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0

    const leftMaxDepth = dfs(root.left)
    const rightMaxDepth = dfs(root.right)

    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
  }

  return dfs(root)
}
`;function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"maxdepth-二叉树的最大深度",children:"maxDepth 二叉树的最大深度"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree/",rel:"nofollow",children:"LeetCode 104. 二叉树的最大深度"})," 是递归的入门题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个二叉树，找出其最大深度。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"dfs-递归",children:"DFS 递归"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"递归计算左子树深度"}),`
`,n.jsx(e.li,{children:"递归计算右子树深度"}),`
`,n.jsxs(e.li,{children:["返回 ",n.jsx(e.code,{children:"1 + max(左深度, 右深度)"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(height)"]}),`
`]})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{m as default};
