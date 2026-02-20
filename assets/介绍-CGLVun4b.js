import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import Trie from '../../../../packages/learn-utils/src/leetcode/Trie'

const normalDemo = () => {
  const trie = new Trie()

  trie.insert('apple')
  const search1 = trie.search('apple') // true
  const search2 = trie.search('app') // false
  const startsWith1 = trie.startsWith('app') // true
  trie.insert('app')
  const search3 = trie.search('app') // true

  return {
    operations: ['insert("apple")', 'search("apple")', 'search("app")', 'startsWith("app")', 'insert("app")', 'search("app")'],
    results: [null, search1, search2, startsWith1, null, search3],
    expected: [null, true, false, true, null, true],
  }
}

export default normalDemo
`,h=`export default class Trie {
  // 根节点
  children: Record<string, any> = {}

  constructor() {}

  insert(word: string): void {
    let node = this.children

    for (const char of word) {
      if (!node[char]) {
        node[char] = {}
      }

      node = node[char]
    }

    node.isEnd = true
  }

  searchPrefix(prefix: string) {
    let node = this.children

    for (const char of prefix) {
      if (!node[char]) {
        return false
      }

      node = node[char]
    }

    return node
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word)

    // @ts-ignore any
    return !!node && !!node.isEnd
  }

  startsWith(prefix: string): boolean {
    return !!this.searchPrefix(prefix)
  }
}
`;function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"trie-前缀树",children:"Trie 前缀树"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/implement-trie-prefix-tree/",rel:"nofollow",children:"LeetCode 208. 实现 Trie (前缀树)"})," 是重要的数据结构题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["实现一个 Trie，包含 ",n.jsx(e.code,{children:"insert"}),"、",n.jsx(e.code,{children:"search"})," 和 ",n.jsx(e.code,{children:"startsWith"})," 方法。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"字典树结构",children:"字典树结构"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"节点结构"}),"：每个节点包含子节点映射和结束标记"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"插入"}),"：逐字符创建/遍历节点"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"搜索"}),"：遍历节点，检查结束标记"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"前缀匹配"}),"：遍历节点，无需检查结束标记"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"操作"}),n.jsx("th",{children:"时间复杂度"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"insert"}),n.jsx("td",{children:"O(m)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"search"}),n.jsx("td",{children:"O(m)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"startsWith"}),n.jsx("td",{children:"O(m)"})]})]})]}),`
`,n.jsx(e.p,{children:"m 为字符串长度"}),`
`,n.jsx(e.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"自动补全"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"拼写检查"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"IP 路由"})}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{j as default};
