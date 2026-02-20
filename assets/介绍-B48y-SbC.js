import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const inorder = (root: TreeNode | null) => {
    if (root === null) {
      return
    }

    // @ts-ignore any
    inorder(root.left)

    res.push(root.val)

    // @ts-ignore any
    inorder(root.right)
  }

  inorder(root)

  return res
}
`,s=`// inorderTraversal 未导出，这里展示算法思路
export default () => {
  // 构建二叉树:
  //     1
  //      \\
  //       2
  //      /
  //     3
  const root = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null,
    },
  }

  // 中序遍历: 左 -> 根 -> 右
  const res: number[] = []
  const inorder = (node: any) => {
    if (!node) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  console.log('中序遍历结果:', res)

  return res
}
`;function o(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"二叉树的中序遍历-leetcode-94",children:"二叉树的中序遍历 (LeetCode 94)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个二叉树的根节点 ",n.jsx(e.code,{children:"root"}),"，返回它的中序遍历。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"递归遍历"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"中序遍历顺序：左子树 → 根节点 → 右子树"}),`
`,n.jsx(e.li,{children:"递归访问每个节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"如果节点为空，返回"}),`
`,n.jsx(e.li,{children:"递归遍历左子树"}),`
`,n.jsx(e.li,{children:"访问当前节点"}),`
`,n.jsx(e.li,{children:"递归遍历右子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:s})]})}function j(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{j as default};
