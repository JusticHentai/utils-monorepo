import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function rob(root: TreeNode | null): number {
  const dp = new Map()

  const dfs = (root: TreeNode | null): [number, number] => {
    if (!root) {
      return [0, 0]
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    const robExcludeRoot =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const robIncludeRoot = root.val + left[0] + right[0]

    return [robExcludeRoot, robIncludeRoot]
  }

  const res = dfs(root)

  return Math.max(res[0], res[1])
}
`,i=`import rob from '../../../../packages/learn-utils/src/leetcode/rob2'

export default () => {
  // 构建二叉树:
  //     3
  //    / \\
  //   2   3
  //    \\   \\
  //     3   1
  const root = {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  }

  const result = rob(root as any)

  console.log('二叉树: [3,2,3,null,3,null,1]')
  console.log('最大金额:', result)
  console.log('偷 3 + 3 + 1 = 7')

  return result
}
`;function o(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"打家劫舍-iii-leetcode-337",children:"打家劫舍 III (LeetCode 337)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 ",n.jsx(e.code,{children:"root"}),"。除了 ",n.jsx(e.code,{children:"root"}),' 之外，每栋房子有且只有一个"父"房子与之相连。如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。给定二叉树的 ',n.jsx(e.code,{children:"root"}),"，返回在不触动警报的情况下，小偷能够盗取的最高金额。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"树形 DP"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"对于每个节点，有两种状态：偷或不偷"}),`
`,n.jsx(e.li,{children:"返回 [不偷当前节点的最大值, 偷当前节点的最大值]"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"DFS 返回 [不偷, 偷] 两种状态"}),`
`,n.jsx(e.li,{children:"不偷当前节点：可以偷或不偷子节点，取最大值"}),`
`,n.jsx(e.li,{children:"偷当前节点：不能偷子节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:i})]})}function f(l={}){const{wrapper:e}={...t(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(o,{...l})}):o(l)}export{f as default};
