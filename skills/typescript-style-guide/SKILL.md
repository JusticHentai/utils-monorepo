---
name: typescript-style-guide
description: TypeScript 代码规范技能，在编写或修改 TypeScript 代码时自动应用命名、类型、函数、异步、错误处理等最佳实践，确保代码风格统一。
---

# TypeScript 代码规范

在编写或修改 TypeScript（`.ts` / `.tsx`）文件时，必须遵循以下规范。每条规范均附 Good/Bad Case 供参照。

如需查看某一分类的完整示例，请加载对应的 references 文档。

---

## 核心规则速查

### 1. 命名

- 变量、函数：`camelCase`
- 类、接口、类型别名：`PascalCase`
- 常量：`UPPER_SNAKE_CASE`
- 枚举名及枚举成员：`UPPER_SNAKE_CASE`
- 布尔值：`is` / `has` / `can` / `should` 前缀
- 私有属性：用 `private` 关键字，不用 `_` 前缀
- 文件名：`kebab-case`（如 `user-service.ts`）

### 2. 常量与枚举

- 固定字符串用枚举或 `as const` 对象，禁止硬编码
- 魔法数字用常量替代
- 两三个简单值用联合类型，不要过度使用枚举

### 3. 类型

- 优先类型推断，不冗余标注
- 公共 API / 复杂函数必须显式标注返回类型
- 禁止 `any`，用 `unknown` 替代
- 数组用 `T[]` 不用 `Array<T>`
- 元组用 `readonly` 保护

### 4. 函数

- 参数 ≤ 3 个，超过用对象参数
- 回调用箭头函数
- 用参数默认值而非手动判断
- 单一职责，纯函数优先
- 顶层用具名函数
- **一个文件内尽量只保留一个主函数，使用 `export default` 导出**；辅助逻辑拆分到 `core/xxx.ts` 中

### 5. 类

- 成员顺序：静态 → 属性 → 构造函数 → 公共方法 → 私有方法
- 不可变属性用 `readonly`
- 优先构造函数参数属性简写

### 6. 接口与类型别名

- 对象结构用 `interface`，联合/交叉/工具类型用 `type`
- 接口不加 `I` 前缀
- 简单映射用 `Record`
- 导出类型用 `export type`

### 7. 泛型

- 复杂场景泛型参数用有意义名称（`TData`、`TKey`）
- 用泛型约束而非 `any`
- 不需要时不使用泛型

### 8. 模块

- 使用 ESM，禁用 CommonJS
- import 分组：三方库 → `@/` 内部模块 → 相对路径 → `import type`
- 禁止通配符导入
- 类型导入必须用 `import type`
- **避免无意义的 `index.ts` 转发**：内部子模块（如 `core/index.ts` 仅转发 `core/tes.ts`）不应设置 `index.ts`，使用方直接引用具体文件即可。只有对外暴露的完整功能模块才需要 `index.ts` 作为入口（如 `splice/index.ts`）

### 9. 异步

- 用 `async/await` 代替 Promise 链
- 无依赖的并行请求用 `Promise.all`
- 避免循环中 `await`
- 异步函数必须有错误处理

### 10. 条件与逻辑

- 严格等于 `===`
- 简化布尔判断
- 复杂条件提取为有意义变量
- **禁止 `switch`**，用 `if-else` 或对象映射代替
- Guard Clause 提前返回减少嵌套

### 11. 数组与对象

- 展开运算符浅拷贝
- 解构赋值
- 高阶方法（`filter`/`map`/`reduce`）代替 `for`
- 可选链 `?.` + 空值合并 `??`
- 对象属性简写

### 12. 错误处理

- **任何时候都不要抛出错误**，将结果按 `[res, err]` 元组格式返回
- 成功时返回 `[data, null]`，失败时返回 `[null, error]`
- 调用方通过解构判断 `err` 是否存在来处理错误

### 13. 注释

- 公共 API 用 JSDoc（`@param`、`@returns`、`@throws`）
- 不写复述代码的废话注释
- `TODO`/`FIXME` 必须注明负责人和日期

### 14. 空值

- `null` = 有意为空，`undefined` = 未传入，不混用
- 避免非空断言 `!`
- 用 `??` 而非 `||`（后者会误处理 `0`、`''`）

### 15. 类型安全

- 优先类型守卫而非 `as` 断言
- 用 `satisfies` 保留推断
- 用 `in`/`typeof`/`instanceof` 收窄类型
- 禁止 `@ts-ignore`，必须用 `@ts-expect-error` 并附说明

### 16. 其他

- 模板字符串代替拼接
- `const` 优先，`let` 其次，禁用 `var`
- 每行 ≤ 120 字符
- 禁止嵌套三元
- `structuredClone` 深拷贝
- `tsconfig.json` 开启 `strict: true`

---

## 快速示例

### 命名 + 枚举

```typescript
// ✅ Good
enum ORDER_STATUS {
  PENDING = 'pending',
  PAID = 'paid',
}
const isLoading = true;
function getUserInfo() {}

// ❌ Bad
enum OrderStatus { Pending = 'pending' }
const loading = true;
function get_user_info() {}
```

### 禁止 switch

```typescript
// ✅ Good — if-else
function getLabel(status: ORDER_STATUS): string {
  if (status === ORDER_STATUS.PENDING) return '待处理';
  if (status === ORDER_STATUS.PAID) return '已支付';
  return '未知';
}

// ✅ Good — 对象映射
const handlers: Record<ORDER_STATUS, () => void> = {
  [ORDER_STATUS.PENDING]: handlePending,
  [ORDER_STATUS.PAID]: handlePaid,
};
handlers[status]?.();

// ❌ Bad
switch (status) {
  case 'pending': handlePending(); break;
  case 'paid': handlePaid(); break;
}
```

### 异步 + 错误处理

```typescript
// ✅ Good — [res, err] 元组模式
type Result<T> = [T, null] | [null, Error];

async function loadData(): Promise<Result<Data>> {
  try {
    const [user, orders] = await Promise.all([fetchUser(), fetchOrders()]);
    return [{ user, orders }, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
}

// 调用方
const [data, err] = await loadData();
if (err) {
  console.error(err.message);
  return;
}
console.log(data);

// ❌ Bad — 抛出错误
async function loadData(): Promise<Data> {
  const user = await fetchUser();
  const orders = await fetchOrders();
  return { user, orders };
  // 无错误处理，且串行请求
}
```

### 文件结构 + 模块组织

```typescript
// ✅ Good — 一个文件一个主函数，default 导出
// splice/index.ts（对外入口，合理的 index.ts）
export default function splice<T>(arr: T[], start: number, count: number): T[] {
  // ...
}

// ✅ Good — 辅助逻辑拆到 core/ 中，直接引用具体文件
// splice/core/validate.ts
export default function validate(start: number, count: number): boolean {
  // ...
}

// splice/index.ts 中直接引用
import validate from './core/validate';

// ❌ Bad — 无意义的 index.ts 转发
// core/index.ts 仅做了 export { default } from './validate'
// 应该删掉 core/index.ts，直接 import from './core/validate'

// ❌ Bad — 一个文件塞多个函数
// utils.ts
export function splice() { /* ... */ }
export function merge() { /* ... */ }
export function diff() { /* ... */ }
```

### 类型安全

```typescript
// ✅ Good
function isUser(val: unknown): val is User {
  return typeof val === 'object' && val !== null && 'name' in val;
}
const count = input ?? 0;

// ❌ Bad
const user = input as User;
const count = input || 0;
```

---

> 完整的分类详解与示例见 `references/full-guide.md`。
