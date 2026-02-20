import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import lengthOfLongestSubstring from '../../../../packages/learn-utils/src/leetcode/lengthOfLongestSubstring'

const normalDemo = () => {
  const testCases = [
    { input: 'abcabcbb', expected: 3 },
    { input: 'bbbbb', expected: 1 },
    { input: 'pwwkew', expected: 3 },
  ]

  const results = testCases.map(({ input, expected }) => ({
    input,
    output: lengthOfLongestSubstring(input),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      'abcabcbb': '最长子串是 "abc"，长度为 3',
      'bbbbb': '最长子串是 "b"，长度为 1',
      'pwwkew': '最长子串是 "wke"，长度为 3',
    },
  }
}

export default normalDemo
`,h=`/**
 * 无重复字符的最长子串
 */
export default function lengthOfLongestSubstring(s: string): number {
  const hashSet = new Set()

  let right = 0,
    res = 0

  for (let i = 0, length = s.length; i < length; i++) {
    // 每次大循环 左指针向右移
    if (i !== 0) {
      hashSet.delete(s.charAt(i - 1))
    }

    // 循环到右指针到尽头 并且合集内还没有重复
    while (right < length && !hashSet.has(s.charAt(right))) {
      hashSet.add(s.charAt(right))

      right++
    }

    res = Math.max(res, right - i)
  }

  return res
}
`;function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"lengthoflongestsubstring-无重复字符的最长子串",children:"lengthOfLongestSubstring 无重复字符的最长子串"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",rel:"nofollow",children:"LeetCode 3. 无重复字符的最长子串"})," 是滑动窗口的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个字符串 ",n.jsx(e.code,{children:"s"}),"，请你找出其中不含有重复字符的最长子串的长度。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"滑动窗口--哈希集合",children:"滑动窗口 + 哈希集合"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"维护窗口"}),"：使用左右指针维护一个无重复字符的窗口"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"右指针扩展"}),"：不断向右扩展，将字符加入集合"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"左指针收缩"}),"：遇到重复字符时，左指针右移，删除对应字符"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"记录最大值"}),"：每次更新窗口大小的最大值"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"s",children:"s"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"描述：输入字符串"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：最长无重复子串的长度"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)，左右指针各遍历一次"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(∣Σ∣)，字符集大小"]}),`
`]}),`
`,n.jsx(e.h2,{id:"滑动窗口模板",children:"滑动窗口模板"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`let left = 0, right = 0
while (right < s.length) {
  // 扩大窗口
  window.add(s[right])
  right++
  
  while (需要收缩) {
    // 收缩窗口
    window.delete(s[left])
    left++
  }
}
`})}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/minimum-window-substring/",rel:"nofollow",children:"最小覆盖子串"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/find-all-anagrams-in-a-string/",rel:"nofollow",children:"找到字符串中所有字母异位词"})}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
