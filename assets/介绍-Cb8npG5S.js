import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function isSymmetric(root: TreeNode | null): boolean {
  const dfs = (
    rightRoot: TreeNode | null,
    leftRoot: TreeNode | null
  ): boolean => {
    if (!rightRoot && !leftRoot) {
      return true
    }

    if (!rightRoot || !leftRoot) {
      return false
    }

    return (
      rightRoot.val === leftRoot.val &&
      dfs(rightRoot.left, leftRoot.right) &&
      dfs(rightRoot.right, leftRoot.left)
    )
  }

  return dfs(root.right, root.left)
}
`,s=`import isSymmetric from '../../../../packages/learn-utils/src/leetcode/isSymmetric'

export default () => {
  // 构建对称二叉树:
  //       1
  //      / \\
  //     2   2
  //    / \\ / \\
  //   3  4 4  3
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  }

  const result = isSymmetric(root as any)

  console.log('二叉树是否对称:', result)

  return result
}
`;function r(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"对称二叉树-leetcode-101",children:"对称二叉树 (LeetCode 101)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个二叉树的根节点 ",n.jsx(e.code,{children:"root"}),"，检查它是否轴对称。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"递归比较"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"对称二叉树满足：左子树的左节点 = 右子树的右节点，左子树的右节点 = 右子树的左节点"}),`
`,n.jsx(e.li,{children:"递归比较两棵子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"定义递归函数比较两个节点"}),`
`,n.jsx(e.li,{children:"如果两个节点都为空，返回 true"}),`
`,n.jsx(e.li,{children:"如果只有一个为空，返回 false"}),`
`,n.jsx(e.li,{children:"如果值不相等，返回 false"}),`
`,n.jsx(e.li,{children:"递归比较：左节点的左子树与右节点的右子树，左节点的右子树与右节点的左子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:s})]})}function x(l={}){const{wrapper:e}={...o(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(r,{...l})}):r(l)}export{x as default};
