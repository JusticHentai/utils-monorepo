import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function isValidBST(root: TreeNode | null): boolean {
  const dfs = (
    root: TreeNode | null,
    lower: number,
    upper: number
  ): boolean => {
    if (root === null) {
      return true
    }

    if (root.val <= lower || root.val >= upper) {
      return false
    }

    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper)
  }

  return dfs(root, -Infinity, Infinity)
}
`,s=`import isValidBST from '../../../../packages/learn-utils/src/leetcode/isValidBST'

export default () => {
  // 构建有效的 BST:
  //       2
  //      / \\
  //     1   3
  const validBST = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }

  // 构建无效的 BST:
  //       5
  //      / \\
  //     1   4
  //        / \\
  //       3   6
  const invalidBST = {
    val: 5,
    left: { val: 1, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
  }

  const result1 = isValidBST(validBST as any)
  const result2 = isValidBST(invalidBST as any)

  console.log('有效 BST [2,1,3]:', result1)
  console.log('无效 BST [5,1,4,null,null,3,6]:', result2)

  return { valid: result1, invalid: result2 }
}
`;function t(e){const l={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"验证二叉搜索树-leetcode-98",children:"验证二叉搜索树 (LeetCode 98)"}),`
`,n.jsx(l.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(l.p,{children:["给你一个二叉树的根节点 ",n.jsx(l.code,{children:"root"}),"，判断其是否是一个有效的二叉搜索树。"]}),`
`,n.jsx(l.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"递归 + 范围限制"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"BST 的每个节点值必须在一个有效范围内"}),`
`,n.jsx(l.li,{children:"左子树的所有节点值必须小于当前节点值"}),`
`,n.jsx(l.li,{children:"右子树的所有节点值必须大于当前节点值"}),`
`]}),`
`,n.jsx(l.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsx(l.li,{children:"定义递归函数，传入当前节点和有效范围 (lower, upper)"}),`
`,n.jsx(l.li,{children:"如果节点为空，返回 true"}),`
`,n.jsx(l.li,{children:"如果节点值不在有效范围内，返回 false"}),`
`,n.jsx(l.li,{children:"递归验证左子树（上界为当前节点值）和右子树（下界为当前节点值）"}),`
`]}),`
`,n.jsx(l.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(l.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(l.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:s})]})}function x(e={}){const{wrapper:l}={...i(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(t,{...e})}):t(e)}export{x as default};
