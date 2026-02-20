import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`export function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  const length = wordsDict.length

  let res = length

  let index1 = -1,
    index2 = -1

  for (let i = 0; i < length; i++) {
    const word = wordsDict[i]

    if (word === word1) {
      index1 = i
    } else if (word === word2) {
      index2 = i
    }

    if (index1 >= 0 && index2 >= 0) {
      res = Math.min(res, Math.abs(index1 - index2))
    }
  }

  return res
}
`,d=`import { shortestDistance } from '../../../../packages/learn-utils/src/leetcode/shortestDistance'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'coding'
  const word2 = 'practice'

  const result = shortestDistance(wordsDict, word1, word2)

  console.log('单词数组:', wordsDict)
  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('最短距离:', result)

  return result
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最短单词距离-leetcode-243",children:"最短单词距离 (LeetCode 243)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个字符串数组 ",n.jsx(e.code,{children:"wordsDict"})," 和两个已经存在于该数组中的不同的字符串 ",n.jsx(e.code,{children:"word1"})," 和 ",n.jsx(e.code,{children:"word2"}),"。返回列表中这两个单词之间的最短距离。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"一次遍历"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"记录两个单词最近出现的位置"}),`
`,n.jsx(e.li,{children:"每次更新位置时计算距离"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"遍历数组，记录 word1 和 word2 的位置"}),`
`,n.jsx(e.li,{children:"每次找到其中一个单词时，如果另一个单词已找到，计算距离"}),`
`,n.jsx(e.li,{children:"更新最小距离"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:d})]})}function w(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{w as default};
