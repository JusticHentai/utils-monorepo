import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }

    const leftLength = dfs(node.left)

    const rightLength = dfs(node.right)

    res = Math.max(res, leftLength + rightLength)

    // 确定最小 然后给上一层
    return Math.max(leftLength, rightLength) + 1
  }

  dfs(root)

  return res
}
`,o=`// diameterOfBinaryTree 未导出，这里展示算法思路
export default () => {
  // 构建二叉树:
  //       1
  //      / \\
  //     2   3
  //    / \\
  //   4   5
  // 直径为 3 (路径 4->2->1->3 或 5->2->1->3)

  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  }

  // 计算直径的 DFS 实现
  let res = 0
  const dfs = (node: any): number => {
    if (!node) return 0
    const leftLength = dfs(node.left)
    const rightLength = dfs(node.right)
    res = Math.max(res, leftLength + rightLength)
    return Math.max(leftLength, rightLength) + 1
  }

  dfs(tree)
  console.log('二叉树直径:', res)

  return res
}
`;function l(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"二叉树的直径-leetcode-543",children:"二叉树的直径 (LeetCode 543)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"DFS 深度优先搜索"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"二叉树的直径 = 左子树深度 + 右子树深度"}),`
`,n.jsx(e.li,{children:"在 DFS 过程中，维护全局最大直径"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"定义 DFS 函数返回以当前节点为根的子树深度"}),`
`,n.jsx(e.li,{children:"对于每个节点，计算左右子树深度之和，更新最大直径"}),`
`,n.jsxs(e.li,{children:["返回 ",n.jsx(e.code,{children:"max(左子树深度, 右子树深度) + 1"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(h)，h 为树的高度"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:o})]})}function f(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{f as default};
