import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const a=`import groupAnagrams from '../../../../packages/learn-utils/src/leetcode/groupAnagrams'

const normalDemo = () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  const result = groupAnagrams(strs)

  return {
    input: strs,
    output: result,
    explanation: '字母异位词分组',
  }
}

export default normalDemo
`,c=`export default function groupAnagrams(strs: string[]): string[][] {
  const map = {}

  for (const str of strs) {
    const count = new Array(26).fill(0)

    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // @ts-ignore any
    map[count] ? map[count].push(str) : (map[count] = [str])
  }

  return Object.values(map)
}
`;function e(t){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"groupanagrams-字母异位词分组",children:"groupAnagrams 字母异位词分组"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.a,{href:"https://leetcode.cn/problems/group-anagrams/",rel:"nofollow",children:"LeetCode 49. 字母异位词分组"})," 是哈希表的经典题目。"]}),`
`,n.jsx(r.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(r.p,{children:"给你一个字符串数组，请你将字母异位词组合在一起。字母异位词是由重新排列源单词的字母得到的一个新单词。"}),`
`,n.jsx(r.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(r.h3,{id:"计数数组作为键",children:"计数数组作为键"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"统计每个字符串的字母频率"}),`
`,n.jsx(r.li,{children:"将频率数组作为哈希表的键"}),`
`,n.jsx(r.li,{children:"相同键的字符串分到一组"}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:a}),`
`,n.jsx(r.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"时间复杂度"}),"：O(n × k)，k 为字符串最大长度"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空间复杂度"}),"：O(n × k)"]}),`
`]})]})}function m(t={}){const{wrapper:r}={...o(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(e,{...t})}):e(t)}export{m as default};
