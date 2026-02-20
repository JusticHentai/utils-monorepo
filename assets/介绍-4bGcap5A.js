import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import FrameAnimation from '../../../packages/element-utils/src/FrameAnimation'
import frameAnimationDemo from '../../.assets/frameAnimationDemo.png'

const createDemo = async () => {
  const animation = new FrameAnimation({
    imageUrl: frameAnimationDemo,
    frameCount: 20,
    duration: 2000,
    rowCount: 4,
  })

  // 离屏渲染，使用 ImageBitmap 裁剪帧
  await animation.preRender()

  action('创建 FrameAnimation 实例')({
    message: '已创建 FrameAnimation 实例',
    methods: ['preRender', 'createInstance', 'loadImage'],
    frameList: animation.frameList.map((f) => ({
      type: f.bitmap.constructor.name,
      width: f.bitmap.width,
      height: f.bitmap.height,
    })),
  })

  return { animation }
}

export default createDemo
`,a=`import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const startDemo = (instance: FrameAnimationInstance | null) => {
  instance?.start()
  action('开始播放')('循环播放')
}

export default startDemo
`,o=`import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const startOnceDemo = (instance: FrameAnimationInstance | null) => {
  instance?.start(1)
  action('播放一次')('播放 1 次')
}

export default startOnceDemo
`,l=`import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const pauseDemo = (instance: FrameAnimationInstance | null) => {
  instance?.pause()
  action('暂停')('已暂停')
}

export default pauseDemo
`,d=`import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const resumeDemo = (instance: FrameAnimationInstance | null) => {
  instance?.resume()
  action('继续')('继续播放')
}

export default resumeDemo
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"frameanimation",children:"FrameAnimation"}),`
`,n.jsx(e.p,{children:"FrameAnimation 是一个用于实现精灵图帧动画的类，支持离屏渲染和高性能动画播放。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"FrameAnimation"})," 是一个用于处理精灵图帧动画的工具类。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"精灵图（Sprite Sheet）：将多帧动画图片合并到一张图中"}),`
`,n.jsx(e.li,{children:"ImageBitmap：高性能的位图对象，支持硬件加速"}),`
`,n.jsx(e.li,{children:"离屏渲染：预先裁剪帧，避免运行时性能开销"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"游戏角色动画"}),`
`,n.jsx(e.li,{children:"加载动画"}),`
`,n.jsx(e.li,{children:"序列帧特效"}),`
`,n.jsx(e.li,{children:"表情动画"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"ImageBitmap"})," 裁剪帧，比 Canvas drawImage 性能更好"]}),`
`,n.jsx(e.li,{children:"离屏渲染优化性能"}),`
`,n.jsx(e.li,{children:"支持精灵图动画"}),`
`,n.jsx(e.li,{children:"自动适配容器大小"}),`
`,n.jsx(e.li,{children:"提供完整的生命周期回调"}),`
`]}),`
`,n.jsx(e.h2,{id:"创建实例",children:"创建实例"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"循环播放",children:"循环播放"}),`
`,n.jsx(r,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"播放一次",children:"播放一次"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"暂停播放",children:"暂停播放"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"继续播放",children:"继续播放"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"options",children:"Options"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"imageUrl"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"精灵图的 URL 地址"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"frameCount"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"动画总帧数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"duration"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"动画持续时间（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"rowCount"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"精灵图的行数"})]})]})]}),`
`,n.jsx(e.h2,{id:"方法",children:"方法"}),`
`,n.jsx(e.h3,{id:"prerender",children:"preRender"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["描述：离屏渲染，下载图片并使用 ",n.jsx(e.code,{children:"ImageBitmap"})," 裁剪创建可复用的帧，提高性能"]}),`
`]}),`
`,n.jsx(e.h3,{id:"createinstance",children:"createInstance"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["参数：",n.jsx(e.code,{children:"el: HTMLDivElement"})]}),`
`,n.jsx(e.li,{children:"描述：创建动画实例并挂载到指定元素上"}),`
`,n.jsxs(e.li,{children:["返回：",n.jsx(e.code,{children:"Animation"})," 实例"]}),`
`]}),`
`,n.jsx(e.h3,{id:"loadimage",children:"loadImage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"描述：加载图片，可用于预加载"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"加载精灵图图片"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createImageBitmap"})," 将图片裁剪为多帧"]}),`
`,n.jsx(e.li,{children:"创建 Canvas 并挂载到容器"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"requestAnimationFrame"})," 循环绘制帧"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ImageBitmap"})," 支持硬件加速，性能优于直接绘制"]}),`
`,n.jsx(e.li,{children:"离屏渲染避免运行时裁剪开销"}),`
`,n.jsx(e.li,{children:"帧率自适应，保证动画流畅"}),`
`]})]})}function g(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{g as default};
