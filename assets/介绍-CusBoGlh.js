import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import Scheduler from '../../../../packages/learn-utils/src/handwritten/Scheduler'

const normalDemo = async () => {
  const scheduler = new Scheduler(2) // 最多同时执行2个任务
  const results: string[] = []

  const addTask = (time: number, order: string) => {
    scheduler.add(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          results.push(order)
          resolve(order)
        }, time)
      })
    })
  }

  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')

  // 等待所有任务完成
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    message: '并发调度器（最大并发数：2）',
    executionOrder: results, // ['2', '3', '1', '4']
    explanation: '任务1和2先执行，2先完成后3开始，3完成后4开始',
  }
}

export default normalDemo
`,c=`export default class Scheduler {
  max = 0
  count = 0
  queue: any[] = []

  constructor(max: number) {
    this.max = max
  }

  async add(fn: (...params: any[]) => any) {
    if (this.count >= this.max) {
      await new Promise((resolve) => this.queue.push(resolve))
    }

    this.count++

    const res = await fn()

    this.count--

    this.queue.length && this.queue.shift()()

    return res
  }
}
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"scheduler-并发调度器",children:"Scheduler 并发调度器"}),`
`,n.jsx(e.p,{children:"实现一个带有最大并发数限制的异步任务调度器，是前端面试的经典题目。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"并发控制"}),"：使用计数器记录当前执行中的任务数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"任务队列"}),"：超过最大并发数时，将任务加入等待队列"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"自动调度"}),"：任务完成后自动从队列中取出下一个任务执行"]}),`
`]}),`
`,n.jsx(e.h2,{id:"实现要点",children:"实现要点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"count"})," 记录当前执行中的任务数"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"queue"})," 存储等待执行的任务"]}),`
`,n.jsxs(e.li,{children:["任务完成后 ",n.jsx(e.code,{children:"count--"}),"，并从队列中取出下一个任务"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"max",children:"max"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：最大并发数"}),`
`]}),`
`,n.jsx(e.h2,{id:"方法",children:"方法"}),`
`,n.jsx(e.h3,{id:"addfn",children:"add(fn)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["参数：",n.jsx(e.code,{children:"fn: () => Promise<any>"})," - 异步任务函数"]}),`
`,n.jsxs(e.li,{children:["返回：",n.jsx(e.code,{children:"Promise<any>"})," - 任务执行结果"]}),`
`]}),`
`,n.jsx(e.h2,{id:"执行流程",children:"执行流程"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`任务1 ─────────────────────> 完成
任务2 ──────────> 完成
           任务3 ────> 完成
                 任务4 ─────> 完成
`})}),`
`,n.jsx(e.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"批量请求"}),"：控制并发请求数，避免服务器压力"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件上传"}),"：限制同时上传的文件数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"爬虫控制"}),"：控制爬取速度"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
