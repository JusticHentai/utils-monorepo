import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const basicDemo = async () => {
  action('创建 Promise 控制器')()

  const controller = createPromiseController<string>()

  // 模拟异步操作
  setTimeout(() => {
    action('2 秒后解决 Promise')()
    controller.resolve('任务完成！')
  }, 2000)

  action('开始等待 Promise...')()
  const result = await controller.promise
  action(\`Promise 完成，结果: \${result}\`)()
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const imageLoadDemo = async () => {
  action('开始加载图片')()

  const loadImage = (url: string) => {
    const controller = createPromiseController<HTMLImageElement>()
    const img = new Image()

    img.onload = () => {
      action('图片加载成功')()
      controller.resolve(img)
    }
    img.onerror = () => {
      action('图片加载失败')()
      controller.reject(new Error('图片加载失败'))
    }
    img.src = url

    return controller.promise
  }

  try {
    // 使用一个公开的测试图片
    const img = await loadImage('https://picsum.photos/200/300')
    action(\`图片加载完成，尺寸: \${img.width}x\${img.height}\`)()
  } catch (error) {
    action(\`加载失败: \${error}\`)()
  }
}

export default imageLoadDemo
`,c=`import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const eventWaitDemo = async () => {
  action('创建按钮并等待点击事件')()

  const waitForClick = (element: HTMLElement) => {
    const controller = createPromiseController<MouseEvent>()

    const handleClick = (event: MouseEvent) => {
      element.removeEventListener('click', handleClick)
      controller.resolve(event)
    }

    element.addEventListener('click', handleClick)
    return controller.promise
  }

  // 创建一个临时按钮
  const button = document.createElement('button')
  button.textContent = '点击我完成 Promise'
  button.className = 'button'

  const container = document.getElementById('createPromiseControllerDemo')
  container?.appendChild(button)

  action('按钮已创建，等待点击...')()

  try {
    const event = await waitForClick(button)
    action(\`按钮被点击！坐标: (\${event.clientX}, \${event.clientY})\`)()
  } finally {
    // 清理按钮
    container?.removeChild(button)
    action('按钮已清理')()
  }
}

export default eventWaitDemo
`,d=`import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const rejectDemo = async () => {
  action('创建会被拒绝的 Promise 控制器')()
  
  const controller = createPromiseController<string>()
  
  // 模拟失败场景
  setTimeout(() => {
    action('1.5 秒后拒绝 Promise')()
    controller.reject(new Error('模拟的错误'))
  }, 1500)
  
  action('开始等待 Promise...')()
  
  try {
    await controller.promise
    action('这行不应该执行')()
  } catch (error) {
    action(\`Promise 被拒绝，错误: \${error.message}\`)()
  }
}

export default rejectDemo`;function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createpromisecontroller",children:"createPromiseController"}),`
`,e.jsx(n.p,{children:"创建可手动控制的 Promise，将 resolve/reject 暴露出来。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["createPromiseController 是一个 Promise 控制器工厂函数，核心作用是：",e.jsx(n.strong,{children:"创建一个 Promise，同时暴露其 resolve 和 reject 函数，允许外部手动控制 Promise 的状态"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"涉及的知识点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Promise 构造器：executor 中的 resolve/reject"}),`
`,e.jsx(n.li,{children:"闭包：将内部函数暴露到外部"}),`
`,e.jsx(n.li,{children:"Deferred 模式：jQuery 时代的经典异步模式"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"类似实现"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Promise.withResolvers()：ES2024 新增的原生方法"}),`
`,e.jsx(n.li,{children:"jQuery.Deferred()：jQuery 的延迟对象"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"资源加载控制：等待外部资源加载完成"}),`
`,e.jsx(n.li,{children:"事件等待：等待某个事件触发后继续执行"}),`
`,e.jsx(n.li,{children:"流程控制：手动控制异步流程的执行时机"}),`
`,e.jsx(n.li,{children:"状态同步：在复杂异步场景中同步不同组件的状态"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"优势"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"将 Promise 的控制权从内部转移到外部"}),`
`,e.jsx(n.li,{children:"TypeScript 泛型支持，类型安全"}),`
`,e.jsx(n.li,{children:"API 简洁，易于理解和使用"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(o,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"图片加载示例",children:"图片加载示例"}),`
`,e.jsx(o,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"事件等待示例",children:"事件等待示例"}),`
`,e.jsx(o,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"promise-拒绝示例",children:"Promise 拒绝示例"}),`
`,e.jsx(o,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"api-参数",children:"API 参数"}),`
`,e.jsx(n.h3,{id:"泛型参数",children:"泛型参数"}),`
`,e.jsx(n.h4,{id:"t",children:"T"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"any"})]}),`
`,e.jsxs(n.li,{children:["默认值：",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.li,{children:"描述：Promise 解决值的类型"}),`
`]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回一个 ",e.jsx(n.code,{children:"PromiseController<T>"})," 对象，包含以下属性："]}),`
`,e.jsx(n.h4,{id:"resolve",children:"resolve"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"(value: T | PromiseLike<T>) => void"})]}),`
`,e.jsx(n.li,{children:"描述：完成通知函数，调用后会解决 Promise"}),`
`]}),`
`,e.jsx(n.h4,{id:"reject",children:"reject"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"(reason?: any) => void"})]}),`
`,e.jsx(n.li,{children:"描述：拒绝通知函数，调用后会拒绝 Promise"}),`
`]}),`
`,e.jsx(n.h4,{id:"promise",children:"promise"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.li,{children:"描述：受控的 Promise，可以通过 resolve/reject 手动控制其状态"}),`
`]}),`
`,e.jsx(n.h2,{id:"类型定义",children:"类型定义"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface PromiseController<T = void> {
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  promise: Promise<T>
}
`})}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件结构",children:"文件结构"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - 唯一源文件，包含 createPromiseController 函数和类型定义"]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"创建空的 resolve/reject 引用"}),`
`,e.jsx(n.li,{children:"创建 Promise，将 executor 中的 resolve/reject 赋值给外部引用"}),`
`,e.jsx(n.li,{children:"返回包含 promise、resolve、reject 的对象"}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"利用闭包捕获 Promise 构造器内的 resolve/reject"}),`
`,e.jsxs(n.li,{children:["泛型 ",e.jsx(n.code,{children:"<T>"})," 支持指定 resolve 值的类型"]}),`
`,e.jsx(n.li,{children:"实现类似于："}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`let resolve, reject
const promise = new Promise((res, rej) => {
  resolve = res
  reject = rej
})
return { promise, resolve, reject }
`})})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
