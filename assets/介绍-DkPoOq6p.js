import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { dfs1, dfs2 } from '../../../../packages/learn-utils/src/handwritten/dfs'

const normalDemo = () => {
  // 测试计算数组深度
  const nestedArray = [1, [2, [3, [4, [5]]]]]
  const depth = dfs1(nestedArray)

  // 测试组合求和
  const nums = [1, 2, 3, 4, 5]
  const combinations = dfs2(nums, 5)

  return {
    nestedArray: '嵌套数组 [1, [2, [3, [4, [5]]]]]',
    depth, // 5
    nums: '数组 [1, 2, 3, 4, 5]',
    target: 5,
    combinations, // 和为5的组合
  }
}

export default normalDemo
`,d=`export const dfs1 = (array: any[]) => {
  const dfs = (array: any[]): number => {
    if (!Array.isArray(array)) {
      return 0
    }

    let max = 0

    for (const item of array) {
      const count = dfs(item)
      max = Math.max(max, count)
    }

    return max + 1
  }

  return dfs(array)
}

export const dfs2 = (array: number[], target: number): number[][] => {
  const res: number[][] = []

  const dfs = (list: number[], index: number, sum: number) => {
    if (sum === target) {
      res.push([...list])
      return
    }

    for (let i = index; i < array.length; i++) {
      if (sum + array[i] > target) {
        break
      }

      list.push(array[i])

      dfs(list, index + 1, sum + array[i])

      list.pop()
    }
  }

  dfs([], 0, 0)

  return res
}
`;function i(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"dfs-深度优先搜索",children:"DFS 深度优先搜索"}),`
`,n.jsx(r.p,{children:"深度优先搜索（Depth-First Search）是一种图/树的遍历算法，沿着一条路径尽可能深入，然后回溯。"}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"递归实现"}),"：利用函数调用栈实现深度优先"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"回溯思想"}),"：探索完一条路径后回退，继续探索其他路径"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"剪枝优化"}),"：在满足条件时提前终止搜索"]}),`
`]}),`
`,n.jsx(r.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"树的前序/中序/后序遍历"}),`
`,n.jsx(r.li,{children:"路径搜索问题"}),`
`,n.jsx(r.li,{children:"排列组合问题"}),`
`,n.jsx(r.li,{children:"图的连通性判断"}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"函数说明",children:"函数说明"}),`
`,n.jsx(r.h3,{id:"dfs1",children:"dfs1"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"计算嵌套数组的最大深度"}),`
`,n.jsx(r.li,{children:"递归遍历数组，返回最大嵌套层数"}),`
`]}),`
`,n.jsx(r.h3,{id:"dfs2",children:"dfs2"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"组合求和问题"}),`
`,n.jsx(r.li,{children:"找出数组中和为目标值的所有组合"}),`
`,n.jsx(r.li,{children:"使用回溯法，避免重复"}),`
`]}),`
`,n.jsx(r.h2,{id:"时间复杂度",children:"时间复杂度"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"时间复杂度"}),"：O(n)，n 为节点数量"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空间复杂度"}),"：O(h)，h 为树的高度（递归栈深度）"]}),`
`]}),`
`,n.jsx(r.h2,{id:"回溯模板",children:"回溯模板"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`function backtrack(path, choices) {
  if (满足结束条件) {
    result.push([...path])
    return
  }
  for (const choice of choices) {
    path.push(choice)      // 做选择
    backtrack(path, choices) // 递归
    path.pop()             // 撤销选择
  }
}
`})})]})}function m(s={}){const{wrapper:r}={...t(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
