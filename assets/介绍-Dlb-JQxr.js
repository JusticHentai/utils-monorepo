import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`// 二叉树翻转演示
const normalDemo = () => {
  return {
    input: '[4,2,7,1,3,6,9]',
    output: '[4,7,2,9,6,3,1]',
    explanation: '交换每个节点的左右子树',
    visualBefore: \`
        4
       / \\\\
      2   7
     / \\\\ / \\\\
    1  3 6  9
    \`,
    visualAfter: \`
        4
       / \\\\
      7   2
     / \\\\ / \\\\
    9  6 3  1
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

export default function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root
  }

  invertTree(root.left)
  invertTree(root.right)

  const temp = root.left
  root.left = root.right
  root.right = temp

  return root
}
`;function o(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"inverttree-翻转二叉树",children:"invertTree 翻转二叉树"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/invert-binary-tree/",rel:"nofollow",children:"LeetCode 226. 翻转二叉树"})," 是递归的入门题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"递归",children:"递归"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"递归翻转左子树"}),`
`,n.jsx(e.li,{children:"递归翻转右子树"}),`
`,n.jsx(e.li,{children:"交换左右子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈深度"]}),`
`]})]})}function j(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{j as default};
