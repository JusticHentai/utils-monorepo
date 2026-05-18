import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-C_s77IFb.js";import{C as r}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const c=`import { action } from 'storybook/actions'
import supportSendBeacon from '../../../packages/element-utils/src/supportSendBeacon'

const basicDemo = () => {
  action('sendBeacon 支持检测')({
    supported: supportSendBeacon(),
    usage: '页面隐藏或卸载附近选择 beacon 上报前的能力判断',
  })
}

export default basicDemo
`,t=`import isBrowser from '../isBrowser'

/**
 * 检查当前浏览器环境是否支持 sendBeacon
 *
 * @returns 是否支持 navigator.sendBeacon
 */
const supportSendBeacon = (): boolean => {
  return isBrowser() && typeof window.navigator.sendBeacon === 'function'
}

export default supportSendBeacon
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"supportsendbeacon",children:"supportSendBeacon"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"supportSendBeacon"})," 判断当前浏览器环境是否支持 ",n.jsx(e.code,{children:"navigator.sendBeacon"}),"。它用于上报模块在页面隐藏、卸载附近选择发送通道前做能力探测。"]}),`
`,n.jsx(e.h2,{id:"具体逻辑",children:"具体逻辑"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"步骤"}),n.jsx("th",{children:"代码动作"}),n.jsx("th",{children:"返回"}),n.jsx("th",{children:"调用方影响"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"1"}),n.jsx("td",{children:n.jsxs(e.p,{children:["先调用 ",n.jsx("code",{children:"isBrowser()"})]})}),n.jsx("td",{children:"非浏览器直接返回 false"}),n.jsxs("td",{children:["SSR 或测试环境不会触碰 ",n.jsx("code",{children:"window.navigator"}),"。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"2"}),n.jsx("td",{children:n.jsxs(e.p,{children:["判断 ",n.jsx("code",{children:"typeof window.navigator.sendBeacon === 'function'"})]})}),n.jsx("td",{children:"存在函数时返回 true"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"earlyErrorQueue"})," 的 beacon 分支据此决定是否尝试发送或降级 keepalive fetch。"]})})]})]})]}),`
`,n.jsx(e.h2,{id:"用例",children:"用例"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"源码",children:"源码"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"文件"}),n.jsx("th",{children:"职责"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"index.stories.ts"})}),n.jsx("td",{children:"注册 Storybook story。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"index.tsx"})}),n.jsx("td",{children:"渲染触发检测按钮。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"basicDemo.ts"})}),n.jsxs("td",{children:["调用 ",n.jsx("code",{children:"supportSendBeacon()"})," 并输出检测结果。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"介绍.mdx"})}),n.jsx("td",{children:"解释浏览器环境判断、sendBeacon 能力判断和上报模块如何消费结果。"})]})]})]})]})}function p(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{p as default};
