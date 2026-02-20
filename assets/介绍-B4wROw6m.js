import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function flatten(root: TreeNode | null): void {
  let current = root

  while (current !== null) {
    if (current.left !== null) {
      const next = current.left

      let predecessor = next

      while (predecessor.right !== null) {
        predecessor = predecessor.right
      }

      predecessor.right = current.right

      current.left = null

      current.right = next
    }

    current = current.right
  }
}
`,o=`import flatten from '../../../../packages/learn-utils/src/leetcode/flatten'

export default () => {
  // 构建二叉树:
  //     1
  //    / \\
  //   2   5
  //  / \\   \\
  // 3   4   6
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 5,
      left: null,
      right: { val: 6, left: null, right: null },
    },
  }

  flatten(root as any)

  // 展平后: 1 -> 2 -> 3 -> 4 -> 5 -> 6
  const result: number[] = []
  let current: any = root
  while (current) {
    result.push(current.val)
    current = current.right
  }

  console.log('展平后的链表:', result)

  return result
}
`;function t(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"二叉树展开为链表-leetcode-114",children:"二叉树展开为链表 (LeetCode 114)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你二叉树的根结点 ",n.jsx(e.code,{children:"root"}),"，请你将它展开为一个单链表。展开后的单链表应该同样使用 ",n.jsx(e.code,{children:"TreeNode"}),"，其中 ",n.jsx(e.code,{children:"right"})," 子指针指向链表中下一个结点，而左子指针始终为 ",n.jsx(e.code,{children:"null"}),"。展开后的单链表应该与二叉树先序遍历顺序相同。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"迭代法（Morris 遍历思想）"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"对于每个节点，将其左子树的最右节点连接到当前节点的右子树"}),`
`,n.jsx(e.li,{children:"然后将左子树移到右边，左子树置空"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"从根节点开始遍历"}),`
`,n.jsx(e.li,{children:"如果当前节点有左子树，找到左子树的最右节点"}),`
`,n.jsx(e.li,{children:"将最右节点的 right 指向当前节点的右子树"}),`
`,n.jsx(e.li,{children:"将当前节点的右子树设为左子树，左子树置空"}),`
`,n.jsx(e.li,{children:"移动到下一个节点（右子节点）"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:o})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{j as default};
