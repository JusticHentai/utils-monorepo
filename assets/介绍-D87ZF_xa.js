import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export function shortestWordDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  const length = wordsDict.length

  let res = length

  if (word1 === word2) {
    let prev = -1

    for (let i = 0; i < length; i++) {
      const word = wordsDict[i]

      if (word === word1) {
        if (prev >= 0) {
          res = Math.min(res, i - prev)
        }

        prev = i
      }
    }

    return res
  } else {
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
}
`,t=`import { shortestWordDistance } from '../../../../packages/learn-utils/src/leetcode/shortestWordDistance3'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'makes'
  const word2 = 'makes'

  const result = shortestWordDistance(wordsDict, word1, word2)

  console.log('单词数组:', wordsDict)
  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('最短距离 (word1 可能等于 word2):', result)

  return result
}
`;function s(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"最短单词距离-iii-leetcode-245",children:"最短单词距离 III (LeetCode 245)"}),`
`,n.jsx(r.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(r.p,{children:["给定一个字符串数组 ",n.jsx(r.code,{children:"wordsDict"})," 和两个字符串 ",n.jsx(r.code,{children:"word1"})," 和 ",n.jsx(r.code,{children:"word2"}),"，返回列表中这两个单词之间的最短距离。注意：",n.jsx(r.code,{children:"word1"})," 和 ",n.jsx(r.code,{children:"word2"})," 可能相同。"]}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"一次遍历 + 特殊处理"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"当 word1 == word2 时，需要特殊处理"}),`
`,n.jsx(r.li,{children:"记录同一单词相邻两次出现的距离"}),`
`]}),`
`,n.jsx(r.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"如果 word1 == word2，记录上一次出现位置，计算相邻距离"}),`
`,n.jsx(r.li,{children:"如果 word1 != word2，同最短单词距离 I 的解法"}),`
`]}),`
`,n.jsx(r.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:t})]})}function a(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{a as default};
