import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`---
name: react-best-practices
description: React 与 Next.js 性能优化技能，在编写、审查或重构 React/Next.js 代码时自动应用消除瀑布流、包体积优化、服务端性能、重渲染优化等最佳实践，确保应用性能最优。
---

# React 性能优化最佳实践

在编写或修改 React / Next.js 代码时，必须遵循以下规范。包含 8 大类别共 57 条规则，按影响程度排列优先级。

如需查看某一规则的完整示例，请加载 \`references/full-guide.md\`。

---

## 规则分类速查

| 优先级 | 分类 | 影响 | 前缀 |
|--------|------|------|------|
| 1 | 消除瀑布流 | 关键 | \`async-\` |
| 2 | 包体积优化 | 关键 | \`bundle-\` |
| 3 | 服务端性能 | 高 | \`server-\` |
| 4 | 客户端数据请求 | 中高 | \`client-\` |
| 5 | 重渲染优化 | 中 | \`rerender-\` |
| 6 | 渲染性能 | 中 | \`rendering-\` |
| 7 | JavaScript 性能 | 低中 | \`js-\` |
| 8 | 高级模式 | 低 | \`advanced-\` |

---

## 核心规则速查

### 1. 消除瀑布流（关键）

- 将 \`await\` 推迟到真正需要的分支中，避免阻塞无关代码路径
- 无依赖的并行操作使用 \`Promise.all()\`
- 有部分依赖的操作使用 \`better-all\` 或提前创建 Promise
- API 路由中尽早启动 Promise，延迟 await
- 使用 \`<Suspense>\` 边界流式渲染内容，避免整个页面被数据请求阻塞

### 2. 包体积优化（关键）

- **禁止桶文件导入**：直接从源文件导入，避免加载上千个无用模块（如 \`lucide-react\`、\`@mui/material\`）
- 使用 \`next/dynamic\` 懒加载大型组件（如 Monaco Editor）
- 非关键第三方库（分析、日志）延迟到 hydration 后加载
- 功能激活时才按需加载模块
- 基于用户意图（hover/focus）预加载重型 bundle

### 3. 服务端性能（高）

- **Server Actions 必须做鉴权**：和 API 路由一样验证身份和权限，不要依赖中间件或页面级检查
- 使用 \`React.cache()\` 做请求内去重（认证、DB 查询）
- 跨请求使用 LRU 缓存
- 避免 RSC Props 重复序列化：在客户端做 \`.toSorted()\` / \`.filter()\` 等变换
- 最小化 RSC 边界的序列化数据，只传客户端实际使用的字段
- 通过组件组合实现并行数据获取
- 使用 \`after()\` 执行非阻塞操作（日志、分析）

### 4. 客户端数据请求（中高）

- 使用 SWR 实现自动请求去重、缓存和重校验
- 使用 \`useSWRSubscription()\` 共享全局事件监听器
- 滚动/触摸事件添加 \`{ passive: true }\`
- localStorage 数据加版本前缀，只存必要字段

### 5. 重渲染优化（中）

- **渲染时计算派生状态**，不要存 state 再用 effect 同步
- 延迟读取动态状态到使用点（如 \`searchParams\` 只在回调中读取时，不要订阅）
- 简单原始类型表达式不要包 \`useMemo\`
- memo 组件的非原始类型默认值提取为常量
- 提取昂贵计算到 memo 子组件
- Effect 依赖使用原始类型（\`user.id\` 而非 \`user\`）
- 用户交互逻辑放事件处理器，不要建模为 state + effect
- 订阅派生布尔值而非连续值（\`useMediaQuery\` 而非 \`useWindowWidth\`）
- 基于当前 state 更新时使用函数式 \`setState\`
- 昂贵初始值使用 \`useState(() => ...)\` 惰性初始化
- 非紧急更新使用 \`startTransition\`
- 高频瞬态值使用 \`useRef\`

### 6. 渲染性能（中）

- SVG 动画包一层 \`<div>\`，动画加在 div 上（利用 GPU 加速）
- 长列表使用 \`content-visibility: auto\` 延迟离屏渲染
- 静态 JSX 提取到组件外部避免重复创建
- 降低 SVG 坐标精度以减小文件体积
- 使用内联 \`<script>\` 防止 hydration 闪烁（主题切换等场景）
- 已知的 hydration 不匹配用 \`suppressHydrationWarning\`
- 频繁切换显隐的组件使用 \`<Activity>\` 保留状态/DOM
- 条件渲染用三元 \`? :\` 而非 \`&&\`（防止渲染 \`0\` / \`NaN\`）
- 用 \`useTransition\` 替代手动 loading state

### 7. JavaScript 性能（低中）

- 避免布局抖动：批量写样式后再读布局属性，或直接用 CSS class
- 重复查找构建索引 Map（O(1) 查找替代 O(n)）
- 循环中缓存深层属性访问
- 缓存重复函数调用结果（模块级 Map）
- 缓存 \`localStorage\` / \`sessionStorage\` / \`document.cookie\` 读取
- 合并多次数组迭代（多个 \`.filter()\` → 一次 \`for\` 循环）
- 数组比较前先检查长度
- 提前 return 跳过不必要计算
- RegExp 提升到模块作用域或 \`useMemo\`
- 求最值用循环而非 \`.sort()\`（O(n) vs O(n log n)）
- 重复成员检查用 \`Set\` / \`Map\`
- 使用 \`.toSorted()\` 代替 \`.sort()\` 保持不可变性

### 8. 高级模式（低）

- 应用级初始化用模块级守卫，不要放 \`useEffect([])\`
- 事件回调存 ref 避免 effect 重订阅
- 使用 \`useEffectEvent\` 获取稳定的回调引用

---

## 快速示例

### 消除瀑布流

\`\`\`typescript
// ✅ 正确：并行执行
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
]);

// ❌ 错误：串行执行，3 次往返
const user = await fetchUser();
const posts = await fetchPosts();
const comments = await fetchComments();
\`\`\`

### 包体积 — 禁止桶文件导入

\`\`\`tsx
// ✅ 正确：直接导入
import Check from 'lucide-react/dist/esm/icons/check';
import Button from '@mui/material/Button';

// ❌ 错误：导入整个库
import { Check } from 'lucide-react';
import { Button } from '@mui/material';
\`\`\`

### 重渲染 — 派生状态

\`\`\`tsx
// ✅ 正确：渲染时计算
function Form() {
  const [firstName, setFirstName] = useState('First');
  const [lastName, setLastName] = useState('Last');
  const fullName = firstName + ' ' + lastName;
  return <p>{fullName}</p>;
}

// ❌ 错误：多余的 state + effect
function Form() {
  const [firstName, setFirstName] = useState('First');
  const [lastName, setLastName] = useState('Last');
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);
  return <p>{fullName}</p>;
}
\`\`\`

### 函数式 setState

\`\`\`tsx
// ✅ 正确：稳定回调，无闭包陷阱
const addItems = useCallback((newItems: Item[]) => {
  setItems((curr) => [...curr, ...newItems]);
}, []);

// ❌ 错误：依赖 items，每次变化重建回调
const addItems = useCallback(
  (newItems: Item[]) => {
    setItems([...items, ...newItems]);
  },
  [items],
);
\`\`\`

### 条件渲染

\`\`\`tsx
// ✅ 正确：count 为 0 时不渲染
{count > 0 ? <span className="badge">{count}</span> : null}

// ❌ 错误：count 为 0 时渲染 "0"
{count && <span className="badge">{count}</span>}
\`\`\`

---

> 完整的分类详解与代码示例见 \`references/full-guide.md\`。
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"react-best-practices",children:"react-best-practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React 与 Next.js 性能优化技能"}),`
`]}),`
`,n.jsx(e.h2,{id:"skillmd",children:"SKILL.md"}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"点击展开 SKILL.md 源码"}),n.jsx(c,{language:"markdown",children:r})]}),`
`,n.jsx(e.h2,{id:"技能详解",children:"技能详解"}),`
`,n.jsx(e.h3,{id:"概述",children:"概述"}),`
`,n.jsx(e.p,{children:"在编写、审查或重构 React/Next.js 代码时自动应用的性能优化规范，包含 8 大类别共 57 条规则，按影响程度排列优先级。"}),`
`,n.jsx(e.h3,{id:"规则分类与影响程度",children:"规则分类与影响程度"}),`
`,n.jsx(e.h4,{id:"1-消除瀑布流关键-",children:"1. 消除瀑布流（关键 🔴）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["延迟 ",n.jsx(e.code,{children:"await"}),"，",n.jsx(e.code,{children:"Promise.all"})," 并行请求"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"<Suspense>"})," 流式渲染"]}),`
`,n.jsx(e.li,{children:"避免串行数据请求"}),`
`]}),`
`,n.jsx(e.h4,{id:"2-包体积优化关键-",children:"2. 包体积优化（关键 🔴）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"禁止桶文件（barrel file）导入"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next/dynamic"})," 懒加载"]}),`
`,n.jsx(e.li,{children:"按需加载第三方库"}),`
`]}),`
`,n.jsx(e.h4,{id:"3-服务端性能高-",children:"3. 服务端性能（高 🟠）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Server Actions 鉴权验证"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"React.cache()"})," 请求去重"]}),`
`,n.jsx(e.li,{children:"LRU 缓存热点数据"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"after()"})," 非阻塞操作"]}),`
`]}),`
`,n.jsx(e.h4,{id:"4-客户端数据请求中高-",children:"4. 客户端数据请求（中高 🟡）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"SWR 自动去重"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"{ passive: true }"})," 事件监听"]}),`
`]}),`
`,n.jsx(e.h4,{id:"5-重渲染优化中-",children:"5. 重渲染优化（中 🟢）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"渲染时计算派生状态"}),`
`,n.jsxs(e.li,{children:["函数式 ",n.jsx(e.code,{children:"setState"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"startTransition"})," 低优先级更新"]}),`
`]}),`
`,n.jsx(e.h4,{id:"6-渲染性能中-",children:"6. 渲染性能（中 🟢）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content-visibility: auto"})," 长列表优化"]}),`
`,n.jsxs(e.li,{children:["三元条件渲染替代 ",n.jsx(e.code,{children:"&&"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"<Activity>"})," 保留隐藏组件状态"]}),`
`]}),`
`,n.jsx(e.h4,{id:"7-javascript-性能低中-",children:"7. JavaScript 性能（低中 🔵）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"索引 Map 替代数组查找"}),`
`,n.jsx(e.li,{children:"合并数组迭代"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Set"}),"/",n.jsx(e.code,{children:"Map"})," 替代重复查找"]}),`
`]}),`
`,n.jsx(e.h4,{id:"8-高级模式低-",children:"8. 高级模式（低 ⚪）"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"模块级初始化守卫"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useEffectEvent"})," 稳定回调引用"]}),`
`]}),`
`,n.jsx(e.h3,{id:"参考文件",children:"参考文件"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"references/full-guide.md"}),"：包含所有 57 条规则的完整说明和代码示例"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{u as default};
