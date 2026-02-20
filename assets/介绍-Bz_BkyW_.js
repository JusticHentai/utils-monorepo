import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`export class WordDistance {
  map: Map<string, number[]> = new Map()

  // 构建哈希表
  constructor(wordsDict: string[]) {
    const length = wordsDict.length

    for (let i = 0; i < length; i++) {
      const word = wordsDict[i]

      if (!this.map.has(word)) {
        this.map.set(word, [])
      }

      ;(this.map.get(word) as number[]).push(i)
    }
  }

  shortest(word1: string, word2: string): number {
    const indices1 = this.map.get(word1) as number[]

    const indices2 = this.map.get(word2) as number[]

    const size1 = indices1.length,
      size2 = indices2.length

    let pos1 = 0,
      pos2 = 0

    let res = Number.MAX_VALUE

    while (pos1 < size1 && pos2 < size2) {
      const index1 = indices1[pos1],
        index2 = indices2[pos2]
      res = Math.min(res, Math.abs(index1 - index2))

      index1 < index2 ? pos1++ : pos2++
    }

    return res
  }
}
`,c=`import { WordDistance } from '../../../../packages/learn-utils/src/leetcode/WordDistance'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']

  const wordDistance = new WordDistance(wordsDict)

  const results = [
    {
      word1: 'coding',
      word2: 'practice',
      result: wordDistance.shortest('coding', 'practice'),
    },
    {
      word1: 'makes',
      word2: 'coding',
      result: wordDistance.shortest('makes', 'coding'),
    },
  ]

  console.log('单词数组:', wordsDict)
  results.forEach(({ word1, word2, result }) => {
    console.log(\`"\${word1}" 和 "\${word2}" 的最短距离:\`, result)
  })

  return results
}
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"最短单词距离-ii-leetcode-244",children:"最短单词距离 II (LeetCode 244)"}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["设计一个类，接收一个字符串数组，并多次调用 ",n.jsx(s.code,{children:"shortest"})," 方法来查询两个单词之间的最短距离。"]}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"哈希表预处理 + 双指针"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"构造时用哈希表存储每个单词出现的所有位置"}),`
`,n.jsx(s.li,{children:"查询时使用双指针遍历两个位置数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"构造时，将每个单词的所有出现位置存入哈希表"}),`
`,n.jsx(s.li,{children:"查询时，获取两个单词的位置数组"}),`
`,n.jsx(s.li,{children:"使用双指针遍历，找最小距离"}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"构造时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"查询时间复杂度"}),"：O(m + k)，m 和 k 为两个单词的出现次数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:c})]})}function m(e={}){const{wrapper:s}={...o(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
