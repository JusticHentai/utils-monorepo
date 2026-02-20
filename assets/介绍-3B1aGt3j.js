import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export default function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return null
  }

  // dfs 深入 第一遍 先找到 q p
  if (root === q || root === p) {
    return root
  }

  // dfs 深入 有 q p 往上时 返回 q p
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // dfs 深入 有公共节点 返回当前节点 最后一路向上直通就是公共节点
  if (left && right) {
    return root
  }

  return left ? left : right
}
`,s=`// lowestCommonAncestor 需要 TreeNode 类型，这里展示算法思路
export default () => {
  // 构建二叉树:
  //         3
  //        / \\
  //       5   1
  //      / \\ / \\
  //     6  2 0  8
  //       / \\
  //      7   4
  const tree = {
    val: 3,
    left: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: {
        val: 2,
        left: { val: 7, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
    },
    right: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 8, left: null, right: null },
    },
  }

  console.log('二叉树: [3,5,1,6,2,0,8,null,null,7,4]')
  console.log('p = 5, q = 1 的最近公共祖先是 3')
  console.log('p = 5, q = 4 的最近公共祖先是 5')

  return { lca1: 3, lca2: 5 }
}
`;function t(e){const l={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"二叉树的最近公共祖先-leetcode-236",children:"二叉树的最近公共祖先 (LeetCode 236)"}),`
`,n.jsx(l.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(l.p,{children:"给定一个二叉树，找到该树中两个指定节点的最近公共祖先。"}),`
`,n.jsx(l.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"递归 DFS"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"如果当前节点是 p 或 q，返回当前节点"}),`
`,n.jsx(l.li,{children:"递归搜索左右子树"}),`
`,n.jsx(l.li,{children:"如果左右子树都找到了目标节点，当前节点就是 LCA"}),`
`]}),`
`,n.jsx(l.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsx(l.li,{children:"如果当前节点为空，返回 null"}),`
`,n.jsx(l.li,{children:"如果当前节点是 p 或 q，返回当前节点"}),`
`,n.jsx(l.li,{children:"递归搜索左右子树"}),`
`,n.jsx(l.li,{children:"如果左右子树都返回非空，当前节点是 LCA"}),`
`,n.jsx(l.li,{children:"否则返回非空的那个"}),`
`]}),`
`,n.jsx(l.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(l.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(l.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:s})]})}function f(e={}){const{wrapper:l}={...o(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(t,{...e})}):t(e)}export{f as default};
