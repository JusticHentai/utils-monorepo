import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function minWindow(s: string, t: string): string {
  let minLength = s.length + 1
  let start = s.length

  const map: Record<string, number> = {}
  let missingType = 0

  for (const c of t) {
    if (!map[c]) {
      missingType++
      map[c] = 1
    } else {
      map[c]++
    }
  }

  let l = 0,
    r = 0

  for (; r < s.length; r++) {
    const rightChar = s[r]

    if (map[rightChar] !== undefined) map[rightChar]--

    if (map[rightChar] === 0) missingType--

    while (missingType === 0) {
      if (r - l + 1 < minLength) {
        minLength = r - l + 1
        start = l
      }

      const leftChar = s[l]

      if (map[leftChar] !== undefined) map[leftChar]++

      if (map[leftChar] > 0) missingType++

      l++
    }
  }

  if (start === s.length) return ''

  return s.substring(start, start + minLength)
}
`,o=`import minWindow from '../../../../packages/learn-utils/src/leetcode/minWindow'

export default () => {
  const s = 'ADOBECODEBANC'
  const t = 'ABC'

  const result = minWindow(s, t)

  console.log('字符串 s:', s)
  console.log('字符串 t:', t)
  console.log('最小覆盖子串:', result)

  return result
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最小覆盖子串-leetcode-76",children:"最小覆盖子串 (LeetCode 76)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个字符串 ",n.jsx(e.code,{children:"s"}),"、一个字符串 ",n.jsx(e.code,{children:"t"}),"。返回 ",n.jsx(e.code,{children:"s"})," 中涵盖 ",n.jsx(e.code,{children:"t"})," 所有字符的最小子串。如果 ",n.jsx(e.code,{children:"s"})," 中不存在涵盖 ",n.jsx(e.code,{children:"t"})," 所有字符的子串，则返回空字符串 ",n.jsx(e.code,{children:'""'}),"。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"滑动窗口"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用哈希表记录 t 中字符的需求量"}),`
`,n.jsx(e.li,{children:"右指针扩展窗口，左指针收缩窗口"}),`
`,n.jsx(e.li,{children:"记录满足条件的最小窗口"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"统计 t 中每个字符的出现次数"}),`
`,n.jsx(e.li,{children:"右指针扩展窗口，更新字符计数"}),`
`,n.jsx(e.li,{children:"当窗口包含所有字符时，尝试收缩左边界"}),`
`,n.jsx(e.li,{children:"记录最小窗口"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m + n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(k)，k 为字符集大小"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:o})]})}function j(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
