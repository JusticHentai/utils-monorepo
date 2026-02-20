import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import MinStack from '../../../../packages/learn-utils/src/leetcode/MinStack'

const normalDemo = () => {
  const minStack = new MinStack()

  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  const min1 = minStack.getMin() // -3
  minStack.pop()
  const top = minStack.top() // 0
  const min2 = minStack.getMin() // -2

  return {
    operations: ['push(-2)', 'push(0)', 'push(-3)', 'getMin()', 'pop()', 'top()', 'getMin()'],
    results: [null, null, null, min1, null, top, min2],
    expected: [null, null, null, -3, null, 0, -2],
  }
}

export default normalDemo
`,l=`export default class MinStack {
  x_stack: number[] = []
  min_stack: number[] = [Infinity]

  constructor() {}

  push(val: number): void {
    this.x_stack.push(val)
    this.min_stack.push(
      Math.min(this.min_stack[this.min_stack.length - 1], val)
    )
  }

  pop(): void {
    this.x_stack.pop()
    this.min_stack.pop()
  }

  top(): number {
    return this.x_stack[this.x_stack.length - 1]
  }

  getMin(): number {
    return this.min_stack[this.min_stack.length - 1]
  }
}
`;function i(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"minstack-最小栈",children:"MinStack 最小栈"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://leetcode.cn/problems/min-stack/",rel:"nofollow",children:"LeetCode 155. 最小栈"})," 设计一个支持 O(1) 获取最小值的栈。"]}),`
`,n.jsx(t.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(t.p,{children:["设计一个支持 ",n.jsx(t.code,{children:"push"}),"、",n.jsx(t.code,{children:"pop"}),"、",n.jsx(t.code,{children:"top"})," 操作，并能在常数时间内检索到最小元素的栈。"]}),`
`,n.jsx(t.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(t.h3,{id:"辅助栈",children:"辅助栈"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"数据栈"}),"：存储所有元素"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"最小栈"}),"：同步存储当前最小值"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"同步操作"}),"：push/pop 时两个栈同步操作"]}),`
`]}),`
`,n.jsx(t.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(t.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(t.h2,{id:"方法说明",children:"方法说明"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"时间复杂度"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"push"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"入栈"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"pop"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"出栈"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"top"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"获取栈顶"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"getMin"}),n.jsx("td",{children:"O(1)"}),n.jsx("td",{children:"获取最小值"})]})]})]}),`
`,n.jsx(t.h2,{id:"空间复杂度",children:"空间复杂度"}),`
`,n.jsx(t.p,{children:"O(n)，需要额外的辅助栈"})]})}function j(s={}){const{wrapper:t}={...c(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
