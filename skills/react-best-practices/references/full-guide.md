# React 最佳实践

**Version 1.0.0**  
Vercel Engineering  
January 2026

> **说明：**  
> 本文档主要供 AI Agent 和 LLM 在维护、生成或重构 React / Next.js 代码库时遵循。  
> 人类开发者同样可以参考，但内容针对自动化和 AI 辅助工作流进行了优化。

---

## 摘要

React 和 Next.js 应用的全面性能优化指南，专为 AI Agent 和 LLM 设计。包含 8 大类别 40+ 条规则，按影响程度从关键（消除瀑布流、减小包体积）到渐进（高级模式）排列。每条规则均包含详细解释、对比错误与正确实现的真实案例，以及具体的影响指标。

---

## 目录

1. [消除瀑布流](#1-消除瀑布流) — **关键**
   - 1.1 延迟 Await 到需要时
   - 1.2 基于依赖的并行化
   - 1.3 防止 API 路由中的瀑布流链
   - 1.4 独立操作使用 Promise.all()
   - 1.5 策略性 Suspense 边界
2. [包体积优化](#2-包体积优化) — **关键**
   - 2.1 避免桶文件导入
   - 2.2 条件式模块加载
   - 2.3 延迟加载非关键第三方库
   - 2.4 重型组件动态导入
   - 2.5 基于用户意图预加载
3. [服务端性能](#3-服务端性能) — **高**
   - 3.1 Server Actions 必须鉴权
   - 3.2 避免 RSC Props 重复序列化
   - 3.3 跨请求 LRU 缓存
   - 3.4 最小化 RSC 边界序列化
   - 3.5 组件组合实现并行数据获取
   - 3.6 React.cache() 请求内去重
   - 3.7 使用 after() 执行非阻塞操作
4. [客户端数据请求](#4-客户端数据请求) — **中高**
   - 4.1 全局事件监听器去重
   - 4.2 滚动性能使用被动事件监听
   - 4.3 使用 SWR 自动去重
   - 4.4 localStorage 数据版本化与最小化
5. [重渲染优化](#5-重渲染优化) — **中**
   - 5.1 渲染时计算派生状态
   - 5.2 延迟状态读取到使用点
   - 5.3 简单原始类型表达式不要包 useMemo
   - 5.4 memo 组件的非原始类型默认值提取为常量
   - 5.5 提取到 memo 子组件
   - 5.6 缩窄 Effect 依赖
   - 5.7 交互逻辑放事件处理器
   - 5.8 订阅派生状态
   - 5.9 使用函数式 setState
   - 5.10 惰性状态初始化
   - 5.11 非紧急更新使用 Transition
   - 5.12 瞬态值使用 useRef
6. [渲染性能](#6-渲染性能) — **中**
   - 6.1 SVG 动画加在外层 div 上
   - 6.2 长列表使用 content-visibility
   - 6.3 静态 JSX 提升到组件外部
   - 6.4 优化 SVG 精度
   - 6.5 防止 Hydration 闪烁
   - 6.6 抑制预期的 Hydration 不匹配
   - 6.7 使用 Activity 组件切换显隐
   - 6.8 显式条件渲染
   - 6.9 用 useTransition 替代手动 loading 状态
7. [JavaScript 性能](#7-javascript-性能) — **低中**
   - 7.1 避免布局抖动
   - 7.2 重复查找构建索引 Map
   - 7.3 循环中缓存属性访问
   - 7.4 缓存重复函数调用
   - 7.5 缓存 Storage API 调用
   - 7.6 合并多次数组迭代
   - 7.7 数组比较前先检查长度
   - 7.8 提前返回
   - 7.9 RegExp 提升到模块作用域
   - 7.10 求最值用循环而非排序
   - 7.11 使用 Set/Map 实现 O(1) 查找
   - 7.12 用 toSorted() 替代 sort() 保持不可变
8. [高级模式](#8-高级模式) — **低**
   - 8.1 应用初始化只执行一次
   - 8.2 事件回调存 Ref
   - 8.3 useEffectEvent 实现稳定回调引用

---

## 1. 消除瀑布流

**影响：关键**

瀑布流是性能杀手 #1。每个串行 await 都增加完整的网络延迟。消除瀑布流能带来最大的性能收益。

### 1.1 延迟 Await 到需要时

**影响：高（避免阻塞未使用的代码路径）**

将 `await` 操作移动到实际需要的分支中，避免阻塞不需要它们的代码路径。

**错误：阻塞两个分支**

```typescript
async function handleRequest(userId: string, skipProcessing: boolean) {
  const userData = await fetchUserData(userId)
  
  if (skipProcessing) {
    // 立即返回，但已经等待了 userData
    return { skipped: true }
  }
  
  // 只有这个分支使用 userData
  return processUserData(userData)
}
```

**正确：仅在需要时阻塞**

```typescript
async function handleRequest(userId: string, skipProcessing: boolean) {
  if (skipProcessing) {
    // 立即返回，无需等待
    return { skipped: true }
  }
  
  // 仅在需要时获取
  const userData = await fetchUserData(userId)
  return processUserData(userData)
}
```

**另一个示例：提前返回优化**

```typescript
// 错误：总是获取权限
async function updateResource(resourceId: string, userId: string) {
  const permissions = await fetchPermissions(userId)
  const resource = await getResource(resourceId)
  
  if (!resource) {
    return { error: 'Not found' }
  }
  
  if (!permissions.canEdit) {
    return { error: 'Forbidden' }
  }
  
  return await updateResourceData(resource, permissions)
}

// 正确：仅在需要时获取
async function updateResource(resourceId: string, userId: string) {
  const resource = await getResource(resourceId)
  
  if (!resource) {
    return { error: 'Not found' }
  }
  
  const permissions = await fetchPermissions(userId)
  
  if (!permissions.canEdit) {
    return { error: 'Forbidden' }
  }
  
  return await updateResourceData(resource, permissions)
}
```

当被跳过的分支频繁执行，或延迟的操作代价昂贵时，这种优化尤其有价值。

### 1.2 基于依赖的并行化

**影响：关键（2-10 倍提升）**

对于有部分依赖的操作，使用 `better-all` 最大化并行度。它会在最早的时机自动启动每个任务。

**错误：profile 不必要地等待 config**

```typescript
const [user, config] = await Promise.all([
  fetchUser(),
  fetchConfig()
])
const profile = await fetchProfile(user.id)
```

**正确：config 和 profile 并行执行**

```typescript
import { all } from 'better-all'

const { user, config, profile } = await all({
  async user() { return fetchUser() },
  async config() { return fetchConfig() },
  async profile() {
    return fetchProfile((await this.$.user).id)
  }
})
```

**无额外依赖的替代方案：**

```typescript
const userPromise = fetchUser()
const profilePromise = userPromise.then(user => fetchProfile(user.id))

const [user, config, profile] = await Promise.all([
  userPromise,
  fetchConfig(),
  profilePromise
])
```

也可以先创建所有 Promise，最后统一 `Promise.all()`。

Reference: [https://github.com/shuding/better-all](https://github.com/shuding/better-all)

### 1.3 防止 API 路由中的瀑布流链

**影响：关键（2-10 倍提升）**

在 API 路由和 Server Actions 中，立即启动独立操作，即使你还没有 await 它们。

**错误：config 等待 auth，data 等待两者**

```typescript
export async function GET(request: Request) {
  const session = await auth()
  const config = await fetchConfig()
  const data = await fetchData(session.user.id)
  return Response.json({ data, config })
}
```

**正确：auth 和 config 立即启动**

```typescript
export async function GET(request: Request) {
  const sessionPromise = auth()
  const configPromise = fetchConfig()
  const session = await sessionPromise
  const [config, data] = await Promise.all([
    configPromise,
    fetchData(session.user.id)
  ])
  return Response.json({ data, config })
}
```

对于更复杂的依赖链，使用 `better-all` 自动最大化并行度（参见"基于依赖的并行化"）。

### 1.4 独立操作使用 Promise.all()

**影响：关键（2-10 倍提升）**

当异步操作之间没有相互依赖时，使用 `Promise.all()` 并发执行。

**错误：串行执行，3 次往返**

```typescript
const user = await fetchUser()
const posts = await fetchPosts()
const comments = await fetchComments()
```

**正确：并行执行，1 次往返**

```typescript
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
```

### 1.5 策略性 Suspense 边界

**影响：高（更快的首次绘制）**

不要在异步组件中等待数据后再返回 JSX，使用 Suspense 边界在数据加载时更快地显示外层 UI。

**错误：整个页面被数据请求阻塞**

```tsx
async function Page() {
  const data = await fetchData() // Blocks entire page
  
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <div>
        <DataDisplay data={data} />
      </div>
      <div>Footer</div>
    </div>
  )
}
```

整个布局都在等待数据，即使只有中间部分需要它。

**正确：外层立即显示，数据流式传入**

```tsx
function Page() {
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <div>
        <Suspense fallback={<Skeleton />}>
          <DataDisplay />
        </Suspense>
      </div>
      <div>Footer</div>
    </div>
  )
}

async function DataDisplay() {
  const data = await fetchData() // Only blocks this component
  return <div>{data.content}</div>
}
```

Sidebar、Header 和 Footer 立即渲染。只有 DataDisplay 等待数据。

**替代方案：跨组件共享 Promise**

```tsx
function Page() {
  // Start fetch immediately, but don't await
  const dataPromise = fetchData()
  
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <Suspense fallback={<Skeleton />}>
        <DataDisplay dataPromise={dataPromise} />
        <DataSummary dataPromise={dataPromise} />
      </Suspense>
      <div>Footer</div>
    </div>
  )
}

function DataDisplay({ dataPromise }: { dataPromise: Promise<Data> }) {
  const data = use(dataPromise) // Unwraps the promise
  return <div>{data.content}</div>
}

function DataSummary({ dataPromise }: { dataPromise: Promise<Data> }) {
  const data = use(dataPromise) // Reuses the same promise
  return <div>{data.summary}</div>
}
```

两个组件共享同一个 Promise，因此只发生一次请求。布局立即渲染，两个组件一起等待。

**不适用此模式的场景：**

- 关键数据影响布局决策（影响定位）
- SEO 关键内容在首屏
- 小型快速查询，Suspense 开销不值得
- 需要避免布局偏移（loading → 内容跳动）

**权衡：** 更快的首次绘制 vs 潜在的布局偏移。根据 UX 优先级选择。

---

## 2. 包体积优化

**影响：关键**

减小初始包体积可改善 Time to Interactive 和 Largest Contentful Paint。

### 2.1 避免桶文件导入

**影响：关键（200-800ms 导入开销，构建缓慢）**

直接从源文件导入，而非从桶文件导入，避免加载上千个未使用的模块。**桶文件**是重新导出多个模块的入口文件（例如 `index.js` 中的 `export * from './module'`）。

**错误：导入整个库**

```tsx
import { Check, X, Menu } from 'lucide-react'
// Loads 1,583 modules, takes ~2.8s extra in dev

import { Button, TextField } from '@mui/material'
// Loads 2,225 modules, takes ~4.2s extra in dev
```

**正确：只导入需要的**

```tsx
import Check from 'lucide-react/dist/esm/icons/check'
import X from 'lucide-react/dist/esm/icons/x'
import Menu from 'lucide-react/dist/esm/icons/menu'
// Loads only 3 modules (~2KB vs ~1MB)

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// Loads only what you use
```

**替代方案：Next.js 13.5+**

```js
// next.config.js - use optimizePackageImports
module.exports = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@mui/material']
  }
}

// Then you can keep the ergonomic barrel imports:
import { Check, X, Menu } from 'lucide-react'
// Automatically transformed to direct imports at build time
```

直接导入可带来 15-70% 更快的开发启动、28% 更快的构建、40% 更快的冷启动，以及显著更快的 HMR。

常见受影响的库：`lucide-react`、`@mui/material`、`@mui/icons-material`、`@tabler/icons-react`、`react-icons`、`@headlessui/react`、`@radix-ui/react-*`、`lodash`、`ramda`、`date-fns`、`rxjs`、`react-use`。

Reference: [https://vercel.com/blog/how-we-optimized-package-imports-in-next-js](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js)

### 2.2 条件式模块加载

**影响：高（仅在需要时加载大型数据）**

仅当功能被激活时才加载大型数据或模块。

**示例：懒加载动画帧**

```tsx
function AnimationPlayer({ enabled, setEnabled }: { enabled: boolean; setEnabled: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [frames, setFrames] = useState<Frame[] | null>(null)

  useEffect(() => {
    if (enabled && !frames && typeof window !== 'undefined') {
      import('./animation-frames.js')
        .then(mod => setFrames(mod.frames))
        .catch(() => setEnabled(false))
    }
  }, [enabled, frames, setEnabled])

  if (!frames) return <Skeleton />
  return <Canvas frames={frames} />
}
```

`typeof window !== 'undefined'` 检查防止在 SSR 时打包此模块，优化服务端包体积和构建速度。

### 2.3 延迟加载非关键第三方库

**影响：中（hydration 后加载）**

分析、日志和错误追踪不阻塞用户交互。在 hydration 后加载它们。

**错误：阻塞初始 bundle**

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**正确：hydration 后加载**

```tsx
import dynamic from 'next/dynamic'

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(m => m.Analytics),
  { ssr: false }
)

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2.4 重型组件动态导入

**影响：关键（直接影响 TTI 和 LCP）**

使用 `next/dynamic` 懒加载初始渲染不需要的大型组件。

**错误：Monaco 与主 chunk 一起打包 ~300KB**

```tsx
import { MonacoEditor } from './monaco-editor'

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />
}
```

**正确：Monaco 按需加载**

```tsx
import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(
  () => import('./monaco-editor').then(m => m.MonacoEditor),
  { ssr: false }
)

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />
}
```

### 2.5 基于用户意图预加载

**影响：中（降低感知延迟）**

在需要之前预加载重型 bundle，降低感知延迟。

**示例：hover/focus 时预加载**

```tsx
function EditorButton({ onClick }: { onClick: () => void }) {
  const preload = () => {
    if (typeof window !== 'undefined') {
      void import('./monaco-editor')
    }
  }

  return (
    <button
      onMouseEnter={preload}
      onFocus={preload}
      onClick={onClick}
    >
      Open Editor
    </button>
  )
}
```

**示例：feature flag 启用时预加载**

```tsx
function FlagsProvider({ children, flags }: Props) {
  useEffect(() => {
    if (flags.editorEnabled && typeof window !== 'undefined') {
      void import('./monaco-editor').then(mod => mod.init())
    }
  }, [flags.editorEnabled])

  return <FlagsContext.Provider value={flags}>
    {children}
  </FlagsContext.Provider>
}
```

---

## 3. 服务端性能

**影响：高**

优化服务端渲染和数据获取可消除服务端瀑布流，减少响应时间。

### 3.1 Server Actions 必须鉴权

**影响：关键（防止未授权访问服务端变更操作）**

Server Actions（带 `"use server"` 的函数）作为公共端点暴露，和 API 路由一样。必须在每个 Server Action **内部**验证身份和权限——不要仅依赖中间件、布局守卫或页面级检查，因为 Server Actions 可以被直接调用。

**错误：无鉴权检查**

```typescript
'use server'

export async function deleteUser(userId: string) {
  // Anyone can call this! No auth check
  await db.user.delete({ where: { id: userId } })
  return { success: true }
}
```

**正确：action 内部鉴权**

```typescript
'use server'

import { verifySession } from '@/lib/auth'
import { unauthorized } from '@/lib/errors'

export async function deleteUser(userId: string) {
  const session = await verifySession()
  
  if (!session) {
    throw unauthorized('Must be logged in')
  }
  
  if (session.user.role !== 'admin' && session.user.id !== userId) {
    throw unauthorized('Cannot delete other users')
  }
  
  await db.user.delete({ where: { id: userId } })
  return { success: true }
}
```

**配合输入校验：**

```typescript
'use server'

import { verifySession } from '@/lib/auth'
import { z } from 'zod'

const updateProfileSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email()
})

export async function updateProfile(data: unknown) {
  const validated = updateProfileSchema.parse(data)
  
  const session = await verifySession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  
  if (session.user.id !== validated.userId) {
    throw new Error('Can only update own profile')
  }
  
  await db.user.update({
    where: { id: validated.userId },
    data: {
      name: validated.name,
      email: validated.email
    }
  })
  
  return { success: true }
}
```

### 3.2 避免 RSC Props 重复序列化

**影响：低（通过避免重复序列化减少网络负载）**

RSC→客户端序列化按对象引用去重，而非按值。相同引用 = 序列化一次；新引用 = 再次序列化。变换操作（`.toSorted()`、`.filter()`、`.map()`）应在客户端做，而非服务端。

**错误：重复数组**

```tsx
// RSC: sends 6 strings (2 arrays × 3 items)
<ClientList usernames={usernames} usernamesOrdered={usernames.toSorted()} />
```

**正确：只发送 3 个字符串**

```tsx
// RSC: send once
<ClientList usernames={usernames} />

// Client: transform there
'use client'
const sorted = useMemo(() => [...usernames].sort(), [usernames])
```

### 3.3 跨请求 LRU 缓存

**影响：高（跨请求缓存）**

`React.cache()` 只在单次请求内生效。对于跨请求共享的数据，使用 LRU 缓存。

```typescript
import { LRUCache } from 'lru-cache'

const cache = new LRUCache<string, any>({
  max: 1000,
  ttl: 5 * 60 * 1000  // 5 minutes
})

export async function getUser(id: string) {
  const cached = cache.get(id)
  if (cached) return cached

  const user = await db.user.findUnique({ where: { id } })
  cache.set(id, user)
  return user
}
```

### 3.4 最小化 RSC 边界序列化

**影响：高（减少数据传输大小）**

只传递客户端实际使用的字段。

**错误：序列化全部 50 个字段**

```tsx
async function Page() {
  const user = await fetchUser()  // 50 fields
  return <Profile user={user} />
}

'use client'
function Profile({ user }: { user: User }) {
  return <div>{user.name}</div>  // uses 1 field
}
```

**正确：只序列化 1 个字段**

```tsx
async function Page() {
  const user = await fetchUser()
  return <Profile name={user.name} />
}

'use client'
function Profile({ name }: { name: string }) {
  return <div>{name}</div>
}
```

### 3.5 组件组合实现并行数据获取

**影响：关键（消除服务端瀑布流）**

通过组合重构来并行化数据获取。

**错误：Sidebar 等待 Page 的请求完成**

```tsx
export default async function Page() {
  const header = await fetchHeader()
  return (
    <div>
      <div>{header}</div>
      <Sidebar />
    </div>
  )
}

async function Sidebar() {
  const items = await fetchSidebarItems()
  return <nav>{items.map(renderItem)}</nav>
}
```

**正确：两者同时获取**

```tsx
async function Header() {
  const data = await fetchHeader()
  return <div>{data}</div>
}

async function Sidebar() {
  const items = await fetchSidebarItems()
  return <nav>{items.map(renderItem)}</nav>
}

export default function Page() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  )
}
```

### 3.6 React.cache() 请求内去重

**影响：中（请求内去重）**

```typescript
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user?.id) return null
  return await db.user.findUnique({
    where: { id: session.user.id }
  })
})
```

在单次请求内，多次调用 `getCurrentUser()` 只执行一次查询。

**避免内联对象作为参数：** `React.cache()` 使用浅等于（`Object.is`）判断缓存命中。

### 3.7 使用 after() 执行非阻塞操作

**影响：中（更快的响应时间）**

使用 Next.js 的 `after()` 调度在响应发送后执行的工作。

**正确：非阻塞**

```tsx
import { after } from 'next/server'

export async function POST(request: Request) {
  await updateDatabase(request)
  
  after(async () => {
    const userAgent = (await headers()).get('user-agent') || 'unknown'
    logUserAction({ userAgent })
  })
  
  return Response.json({ status: 'success' })
}
```

---

## 4. 客户端数据请求

**影响：中高**

### 4.1 全局事件监听器去重

**影响：低（N 个组件共享 1 个监听器）**

使用 `useSWRSubscription()` 跨组件实例共享全局事件监听器。

### 4.2 滚动性能使用被动事件监听

**影响：中（消除滚动延迟）**

为 touch 和 wheel 事件监听器添加 `{ passive: true }`。

```typescript
document.addEventListener('touchstart', handleTouch, { passive: true })
document.addEventListener('wheel', handleWheel, { passive: true })
```

### 4.3 使用 SWR 自动去重

**影响：中高（自动去重）**

```tsx
import useSWR from 'swr'

function UserList() {
  const { data: users } = useSWR('/api/users', fetcher)
}
```

### 4.4 localStorage 数据版本化与最小化

**影响：中（防止 schema 冲突）**

为 key 添加版本前缀，只存储需要的字段。

```typescript
const VERSION = 'v2'

function saveConfig(config: { theme: string; language: string }) {
  try {
    localStorage.setItem(`userConfig:${VERSION}`, JSON.stringify(config))
  } catch {}
}
```

---

## 5. 重渲染优化

**影响：中**

### 5.1 渲染时计算派生状态

**影响：中（避免多余渲染）**

```tsx
// ✅ 正确：渲染时派生
const fullName = firstName + ' ' + lastName

// ❌ 错误：state + effect
const [fullName, setFullName] = useState('')
useEffect(() => {
  setFullName(firstName + ' ' + lastName)
}, [firstName, lastName])
```

### 5.2 延迟状态读取到使用点

**影响：中（避免不必要的订阅）**

如果你只在回调中读取动态状态，不要订阅它。

### 5.3 简单原始类型表达式不要包 useMemo

**影响：低中**

```tsx
// ✅ 正确
const isLoading = user.isLoading || notifications.isLoading

// ❌ 错误
const isLoading = useMemo(() => {
  return user.isLoading || notifications.isLoading
}, [user.isLoading, notifications.isLoading])
```

### 5.4 memo 组件的非原始类型默认值提取为常量

**影响：中（恢复 memo 效果）**

```tsx
const NOOP = () => {};

const UserAvatar = memo(function UserAvatar({ onClick = NOOP }: { onClick?: () => void }) {
  // ...
})
```

### 5.5 提取到 memo 子组件

**影响：中（启用提前返回）**

将昂贵的工作提取到 memo 组件中，使其在计算前能够提前返回。

### 5.6 缩窄 Effect 依赖

**影响：低（减少 effect 重新执行）**

```tsx
// ✅ 正确: re-runs only when id changes
useEffect(() => { console.log(user.id) }, [user.id])

// ❌ 错误: re-runs on any user field change
useEffect(() => { console.log(user.id) }, [user])
```

### 5.7 交互逻辑放事件处理器

**影响：中（避免 effect 重新执行）**

如果副作用由特定用户操作触发，在事件处理器中执行，不要建模为 state + effect。

### 5.8 订阅派生状态

**影响：中（降低重渲染频率）**

```tsx
// ✅ 正确: re-renders only when boolean changes
const isMobile = useMediaQuery('(max-width: 767px)')

// ❌ 错误: re-renders on every pixel change
const width = useWindowWidth()
const isMobile = width < 768
```

### 5.9 使用函数式 setState

**影响：中（防止闭包陷阱）**

```tsx
// ✅ 正确: stable callbacks, no stale closures
const addItems = useCallback((newItems: Item[]) => {
  setItems(curr => [...curr, ...newItems])
}, [])

// ❌ 错误: requires state as dependency
const addItems = useCallback((newItems: Item[]) => {
  setItems([...items, ...newItems])
}, [items])
```

### 5.10 惰性状态初始化

**影响：中（每次渲染浪费计算）**

```tsx
// ✅ 正确: runs only once
const [settings, setSettings] = useState(() => {
  const stored = localStorage.getItem('settings')
  return stored ? JSON.parse(stored) : {}
})

// ❌ 错误: runs on every render
const [settings, setSettings] = useState(
  JSON.parse(localStorage.getItem('settings') || '{}')
)
```

### 5.11 非紧急更新使用 Transition

**影响：中（保持 UI 响应性）**

```tsx
import { startTransition } from 'react'

const handler = () => {
  startTransition(() => setScrollY(window.scrollY))
}
```

### 5.12 瞬态值使用 useRef

**影响：中（避免不必要的重渲染）**

当值频繁变化且你不想每次更新都重渲染时，用 `useRef` 而非 `useState`。

---

## 6. 渲染性能

**影响：中**

### 6.1 SVG 动画加在外层 div 上

**影响：低（启用硬件加速）**

将 SVG 包在 `<div>` 中，对外层 div 添加动画。

### 6.2 长列表使用 content-visibility

**影响：高（更快的初始渲染）**

```css
.message-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 80px;
}
```

### 6.3 静态 JSX 提升到组件外部

**影响：低（避免重复创建）**

```tsx
// ✅ 正确: reuses same element
const loadingSkeleton = (
  <div className="animate-pulse h-20 bg-gray-200" />
)

// ❌ 错误: recreates element every render
function LoadingSkeleton() {
  return <div className="animate-pulse h-20 bg-gray-200" />
}
```

### 6.4 优化 SVG 精度

**影响：低（减小文件大小）**

```svg
<!-- ✅ Correct -->
<path d="M 10.3 20.8 L 30.9 40.2" />

<!-- ❌ Wrong -->
<path d="M 10.293847 20.847362 L 30.938472 40.192837" />
```

### 6.5 防止 Hydration 闪烁

**影响：中（避免视觉闪烁）**

使用内联 `<script>` 在 React hydrate 之前更新 DOM，用于客户端数据（主题、偏好）。

### 6.6 抑制预期的 Hydration 不匹配

**影响：低中**

```tsx
<span suppressHydrationWarning>
  {new Date().toLocaleString()}
</span>
```

### 6.7 使用 Activity 组件切换显隐

**影响：中（保留状态/DOM）**

```tsx
import { Activity } from 'react'

function Dropdown({ isOpen }: Props) {
  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      <ExpensiveMenu />
    </Activity>
  )
}
```

### 6.8 显式条件渲染

**影响：低（防止渲染 0 或 NaN）**

```tsx
// ✅ 正确
{count > 0 ? <span className="badge">{count}</span> : null}

// ❌ 错误: renders "0" when count is 0
{count && <span className="badge">{count}</span>}
```

### 6.9 用 useTransition 替代手动 loading 状态

**影响：低（减少重渲染）**

使用 `useTransition` 替代手动 `useState` 管理 loading 状态。

---

## 7. JavaScript 性能

**影响：低中**

### 7.1 避免布局抖动

**影响：中（防止强制同步布局）**

避免样式写入和布局读取交替进行。优先使用 CSS class 而非内联样式。

### 7.2 重复查找构建索引 Map

**影响：低中（100 万次操作降至 2000 次）**

```typescript
// ✅ 正确 (O(1) per lookup)
const userById = new Map(users.map(u => [u.id, u]))
return orders.map(order => ({
  ...order,
  user: userById.get(order.userId)
}))

// ❌ 错误 (O(n) per lookup)
return orders.map(order => ({
  ...order,
  user: users.find(u => u.id === order.userId)
}))
```

### 7.3 循环中缓存属性访问

**影响：低中（减少查找）**

在热路径中缓存对象属性查找。

### 7.4 缓存重复函数调用

**影响：中（避免冗余计算）**

使用模块级 Map 缓存函数结果。

### 7.5 缓存 Storage API 调用

**影响：低中（减少昂贵的 I/O）**

`localStorage`、`sessionStorage` 和 `document.cookie` 是同步且昂贵的。在内存中缓存读取。

### 7.6 合并多次数组迭代

**影响：低中（减少迭代次数）**

```typescript
// ✅ 正确: 1 iteration
const admins: User[] = []
const testers: User[] = []
for (const user of users) {
  if (user.isAdmin) admins.push(user)
  if (user.isTester) testers.push(user)
}

// ❌ 错误: 2 iterations
const admins = users.filter(u => u.isAdmin)
const testers = users.filter(u => u.isTester)
```

### 7.7 数组比较前先检查长度

**影响：中高（长度不同时避免昂贵操作）**

在昂贵比较之前先检查长度。

### 7.8 提前返回

**影响：低中（避免不必要的计算）**

当结果已确定时提前返回。

### 7.9 RegExp 提升到模块作用域

**影响：低中（避免重复创建）**

不要在渲染中创建 RegExp。提升到模块作用域或 memoize。

### 7.10 求最值用循环而非排序

**影响：低（O(n) 而非 O(n log n)）**

求最小或最大元素只需要单次遍历。

### 7.11 使用 Set/Map 实现 O(1) 查找

**影响：低中（O(n) 到 O(1)）**

```typescript
// ✅ 正确 (O(1) per check)
const allowedIds = new Set(['a', 'b', 'c'])
items.filter(item => allowedIds.has(item.id))

// ❌ 错误 (O(n) per check)
const allowedIds = ['a', 'b', 'c']
items.filter(item => allowedIds.includes(item.id))
```

### 7.12 用 toSorted() 替代 sort() 保持不可变

**影响：中高（防止 React state 中的变异 bug）**

```typescript
// ✅ 正确: creates new array
const sorted = users.toSorted((a, b) => a.name.localeCompare(b.name))

// ❌ 错误: mutates original array
const sorted = users.sort((a, b) => a.name.localeCompare(b.name))
```

---

## 8. 高级模式

**影响：低**

### 8.1 应用初始化只执行一次

**影响：低中（避免重复初始化）**

```tsx
let didInit = false

function Comp() {
  useEffect(() => {
    if (didInit) return
    didInit = true
    loadFromStorage()
    checkAuthToken()
  }, [])
}
```

### 8.2 事件回调存 Ref

**影响：低（稳定订阅）**

```tsx
import { useEffectEvent } from 'react'

function useWindowEvent(event: string, handler: (e) => void) {
  const onEvent = useEffectEvent(handler)

  useEffect(() => {
    window.addEventListener(event, onEvent)
    return () => window.removeEventListener(event, onEvent)
  }, [event])
}
```

### 8.3 useEffectEvent 实现稳定回调引用

**影响：低（防止 effect 重新执行）**

```tsx
import { useEffectEvent } from 'react';

function SearchInput({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')
  const onSearchEvent = useEffectEvent(onSearch)

  useEffect(() => {
    const timeout = setTimeout(() => onSearchEvent(query), 300)
    return () => clearTimeout(timeout)
  }, [query])
}
```

---

## 参考资料

1. [https://react.dev](https://react.dev)
2. [https://nextjs.org](https://nextjs.org)
3. [https://swr.vercel.app](https://swr.vercel.app)
4. [https://github.com/shuding/better-all](https://github.com/shuding/better-all)
5. [https://github.com/isaacs/node-lru-cache](https://github.com/isaacs/node-lru-cache)
6. [https://vercel.com/blog/how-we-optimized-package-imports-in-next-js](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js)
7. [https://vercel.com/blog/how-we-made-the-vercel-dashboard-twice-as-fast](https://vercel.com/blog/how-we-made-the-vercel-dashboard-twice-as-fast)
