import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (inorder.length === 0) return null

  const root = new TreeNode(preorder[0])
  const mid = inorder.indexOf(preorder[0])

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

export function buildTree2(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const dfs = (
    p_start: number,
    p_end: number,
    i_start: number,
    i_end: number
  ) => {
    if (p_start > p_end) return null

    const rootValue = preorder[p_start]
    const root = new TreeNode(rootValue)

    const mid = inorder.indexOf(rootValue)

    // 从 inorder 获取 下一级左边数量
    const leftNumber = mid - i_start

    root.left = dfs(p_start + 1, p_start + leftNumber, i_start, mid - 1)
    root.right = dfs(p_start + leftNumber + 1, p_end, mid + 1, i_end)

    return root
  }

  return dfs(0, preorder.length - 1, 0, inorder.length - 1)
}
`,t=`import buildTree from '../../../../packages/learn-utils/src/leetcode/buildTree'

export default () => {
  const preorder = [3, 9, 20, 15, 7]
  const inorder = [9, 3, 15, 20, 7]

  const result = buildTree(preorder, inorder)

  console.log('前序遍历:', preorder)
  console.log('中序遍历:', inorder)
  console.log('构建的二叉树:', JSON.stringify(result, null, 2))

  return result
}
`;function d(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"从前序与中序遍历序列构造二叉树-leetcode-105",children:"从前序与中序遍历序列构造二叉树 (LeetCode 105)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定两个整数数组 ",n.jsx(e.code,{children:"preorder"})," 和 ",n.jsx(e.code,{children:"inorder"}),"，其中 ",n.jsx(e.code,{children:"preorder"})," 是二叉树的先序遍历，",n.jsx(e.code,{children:"inorder"})," 是同一棵树的中序遍历，请构造二叉树并返回其根节点。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"前序遍历特点"}),"：根节点 → 左子树 → 右子树"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"中序遍历特点"}),"：左子树 → 根节点 → 右子树"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"递归构建"}),"：前序的第一个元素是根节点，在中序中找到根节点位置，左边是左子树，右边是右子树"]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"前序遍历的第一个元素是根节点"}),`
`,n.jsxs(e.li,{children:["在中序遍历中找到根节点的位置 ",n.jsx(e.code,{children:"mid"})]}),`
`,n.jsxs(e.li,{children:["中序遍历中 ",n.jsx(e.code,{children:"mid"})," 左边的元素属于左子树，右边属于右子树"]}),`
`,n.jsx(e.li,{children:"递归构建左右子树"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)，n 为节点数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:t})]})}function p(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{p as default};
