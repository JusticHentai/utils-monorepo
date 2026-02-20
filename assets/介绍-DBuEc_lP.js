import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export default function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2

  if (!root2) return root1

  const root = new TreeNode(root1.val + root2.val)

  root.left = mergeTrees(root1.left, root2.left)
  root.right = mergeTrees(root1.right, root2.right)

  return root
}
`,s=`// mergeTrees 需要 TreeNode 类型，这里展示算法思路
export default () => {
  // 合并两棵二叉树
  const tree1 = {
    val: 1,
    left: { val: 3, left: { val: 5, left: null, right: null }, right: null },
    right: { val: 2, left: null, right: null },
  }

  const tree2 = {
    val: 2,
    left: { val: 1, left: null, right: { val: 4, left: null, right: null } },
    right: { val: 3, left: null, right: { val: 7, left: null, right: null } },
  }

  console.log('树1:', tree1)
  console.log('树2:', tree2)
  console.log('合并后: 节点值相加')

  return { tree1, tree2 }
}
`;function o(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"合并二叉树-leetcode-617",children:"合并二叉树 (LeetCode 617)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你两棵二叉树 ",n.jsx(e.code,{children:"root1"})," 和 ",n.jsx(e.code,{children:"root2"}),"。将这两棵树合并成一棵新二叉树。合并规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"递归合并"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"如果一棵树为空，返回另一棵树"}),`
`,n.jsx(e.li,{children:"否则创建新节点，值为两节点值之和"}),`
`,n.jsx(e.li,{children:"递归合并左右子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"如果 root1 为空，返回 root2"}),`
`,n.jsx(e.li,{children:"如果 root2 为空，返回 root1"}),`
`,n.jsx(e.li,{children:"创建新节点，值为 root1.val + root2.val"}),`
`,n.jsx(e.li,{children:"递归合并左子树和右子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(min(m, n))"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(min(m, n))，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:s})]})}function g(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{g as default};
