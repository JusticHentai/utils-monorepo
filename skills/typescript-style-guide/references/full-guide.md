# TypeScript 代码规范

> 综合参考 Google TypeScript Style Guide、Airbnb JavaScript Style Guide、Microsoft TypeScript Coding Guidelines、字节跳动前端规范、腾讯前端规范等整理。

---

## 目录

1. [命名规范](#1-命名规范)
2. [常量与枚举](#2-常量与枚举)
3. [类型声明](#3-类型声明)
4. [函数](#4-函数)
5. [类](#5-类)
6. [接口与类型别名](#6-接口与类型别名)
7. [泛型](#7-泛型)
8. [模块与导入导出](#8-模块与导入导出)
9. [异步处理](#9-异步处理)
10. [条件判断与逻辑](#10-条件判断与逻辑)
11. [数组与对象操作](#11-数组与对象操作)
12. [错误处理](#12-错误处理)
13. [注释](#13-注释)
14. [空值处理](#14-空值处理)
15. [类型断言与类型守卫](#15-类型断言与类型守卫)
16. [其他最佳实践](#16-其他最佳实践)

---

## 1. 命名规范

### 1.1 变量和函数使用 camelCase

```typescript
// ✅ Good
const userName = 'Alice';
function getUserInfo() {}
```

```typescript
// ❌ Bad
const user_name = 'Alice';
function get_user_info() {}
const UserName = 'Alice';
```

### 1.2 类和接口使用 PascalCase

```typescript
// ✅ Good
class UserService {}
interface UserProfile {}
type RequestConfig = {};
```

```typescript
// ❌ Bad
class userService {}
interface userProfile {}
type requestConfig = {};
```

### 1.3 常量使用 UPPER_SNAKE_CASE

```typescript
// ✅ Good
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
```

```typescript
// ❌ Bad
const maxRetryCount = 3;
const apiBaseUrl = 'https://api.example.com';
```

### 1.4 枚举名和枚举成员都使用 UPPER_SNAKE_CASE（常量命名法）

```typescript
// ✅ Good
enum HTTP_STATUS {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

enum ORDER_STATUS {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  CANCELLED = 'cancelled',
}
```

```typescript
// ❌ Bad
enum HttpStatus {
  Ok = 200,
  NotFound = 404,
}

enum httpStatus {
  ok = 200,
  notFound = 404,
}
```

### 1.5 布尔值变量使用 is/has/can/should 等前缀

```typescript
// ✅ Good
const isLoading = true;
const hasPermission = false;
const canEdit = true;
const shouldRefresh = false;
```

```typescript
// ❌ Bad
const loading = true;
const permission = false;
const edit = true;
```

### 1.6 私有属性使用 private 关键字而非下划线前缀

```typescript
// ✅ Good
class User {
  private name: string;
  private getName(): string {
    return this.name;
  }
}
```

```typescript
// ❌ Bad
class User {
  _name: string;
  _getName(): string {
    return this._name;
  }
}
```

---

## 2. 常量与枚举

### 2.1 固定字符串用枚举或 const 对象代替

```typescript
// ✅ Good
enum ORDER_STATUS {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  CANCELLED = 'cancelled',
}

function handleOrder(status: ORDER_STATUS) {
  if (status === ORDER_STATUS.PAID) {
    // ...
  }
}
```

```typescript
// ❌ Bad
function handleOrder(status: string) {
  if (status === 'paid') {
    // ...
  }
}
```

### 2.2 需要精确类型收窄时用 const 断言对象替代枚举

```typescript
// ✅ Good
const Direction = {
  Up: 'UP',
  Down: 'DOWN',
  Left: 'LEFT',
  Right: 'RIGHT',
} as const;

type Direction = (typeof Direction)[keyof typeof Direction];
```

```typescript
// ❌ Bad — 使用硬编码字符串散落各处
const dir = 'UP';
if (dir === 'UP') {}
```

### 2.3 魔法数字用有意义的常量替代

```typescript
// ✅ Good
const MAX_PAGE_SIZE = 50;
const HTTP_TIMEOUT_MS = 10_000;

function fetchData() {
  return request({ timeout: HTTP_TIMEOUT_MS, pageSize: MAX_PAGE_SIZE });
}
```

```typescript
// ❌ Bad
function fetchData() {
  return request({ timeout: 10000, pageSize: 50 });
}
```

---

## 3. 类型声明

### 3.1 优先使用类型推断，不要冗余标注

```typescript
// ✅ Good
const count = 10;
const name = 'Alice';
const items = [1, 2, 3];
```

```typescript
// ❌ Bad — 类型可推断，不需要显式标注
const count: number = 10;
const name: string = 'Alice';
const items: number[] = [1, 2, 3];
```

### 3.2 函数返回值应显式标注（公共 API 和复杂函数）

```typescript
// ✅ Good
function parseUser(raw: unknown): UserProfile {
  // ...
}

// 简单箭头函数可以省略
const double = (n: number) => n * 2;
```

```typescript
// ❌ Bad — 复杂函数缺少返回类型
function parseUser(raw: unknown) {
  // 返回类型不明确，调用方难以确定
}
```

### 3.3 避免使用 any，用 unknown 替代未知类型

```typescript
// ✅ Good
function safeJsonParse(text: string): unknown {
  return JSON.parse(text);
}

function processInput(input: unknown) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}
```

```typescript
// ❌ Bad
function safeJsonParse(text: string): any {
  return JSON.parse(text);
}

function processInput(input: any) {
  console.log(input.toUpperCase()); // 运行时可能报错
}
```

### 3.4 使用联合类型代替枚举（适用于简单场景）

```typescript
// ✅ Good — 简单状态用联合类型
type Theme = 'light' | 'dark';

function setTheme(theme: Theme) {}
```

```typescript
// ❌ Bad — 过于简单的场景使用枚举过度设计
enum Theme {
  Light = 'light',
  Dark = 'dark',
}
```

### 3.5 数组类型优先用 `T[]` 而非 `Array<T>`

```typescript
// ✅ Good
const ids: number[] = [1, 2, 3];
const users: UserProfile[] = [];
```

```typescript
// ❌ Bad
const ids: Array<number> = [1, 2, 3];
const users: Array<UserProfile> = [];
```

### 3.6 元组类型用 readonly 保护

```typescript
// ✅ Good
function getRange(): readonly [number, number] {
  return [0, 100];
}
```

```typescript
// ❌ Bad — 元组可被意外修改
function getRange(): [number, number] {
  return [0, 100];
}
```

---

## 4. 函数

### 4.1 函数参数不超过 3 个，超过时使用对象参数

```typescript
// ✅ Good
interface CreateUserParams {
  name: string;
  age: number;
  email: string;
  role: string;
}

function createUser(params: CreateUserParams) {}
```

```typescript
// ❌ Bad
function createUser(name: string, age: number, email: string, role: string) {}
```

### 4.2 使用箭头函数作为回调

```typescript
// ✅ Good
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);

setTimeout(() => {
  console.log('done');
}, 100);
```

```typescript
// ❌ Bad
const doubled = nums.map(function (n) {
  return n * 2;
});
```

### 4.3 使用参数默认值而非手动判断

```typescript
// ✅ Good
function greet(name: string = 'World') {
  return `Hello, ${name}!`;
}
```

```typescript
// ❌ Bad
function greet(name?: string) {
  const n = name || 'World';
  return `Hello, ${n}!`;
}
```

### 4.4 单一职责：函数只做一件事

```typescript
// ✅ Good
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendWelcomeEmail(email: string): void {
  // 发送邮件逻辑
}
```

```typescript
// ❌ Bad — 一个函数做了验证和发送两件事
function validateAndSendEmail(email: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid email');
  }
  // 发送邮件
}
```

### 4.5 纯函数优先，避免副作用

```typescript
// ✅ Good
function addItem(list: readonly string[], item: string): string[] {
  return [...list, item];
}
```

```typescript
// ❌ Bad — 直接修改外部状态
function addItem(list: string[], item: string): void {
  list.push(item);
}
```

### 4.6 使用具名函数而非匿名函数（顶层声明）

```typescript
// ✅ Good
function handleSubmit() {
  // ...
}

button.addEventListener('click', handleSubmit);
```

```typescript
// ❌ Bad — 匿名函数难以调试且无法复用
button.addEventListener('click', function () {
  // ...
});
```

---

## 5. 类

### 5.1 成员声明顺序：静态 → 实例属性 → 构造函数 → 公共方法 → 私有方法

```typescript
// ✅ Good
class UserService {
  // 静态成员
  static readonly MAX_USERS = 100;

  // 实例属性
  private users: User[] = [];
  public readonly name: string;

  // 构造函数
  constructor(name: string) {
    this.name = name;
  }

  // 公共方法
  public getUsers(): User[] {
    return [...this.users];
  }

  // 私有方法
  private validate(user: User): boolean {
    return !!user.name;
  }
}
```

```typescript
// ❌ Bad — 成员顺序混乱
class UserService {
  private validate(user: User) {}
  public readonly name: string;
  constructor(name: string) {}
  static readonly MAX_USERS = 100;
  private users: User[] = [];
  public getUsers() {}
}
```

### 5.2 使用 readonly 修饰不可变属性

```typescript
// ✅ Good
class Config {
  readonly apiUrl: string;
  readonly timeout: number;

  constructor(apiUrl: string, timeout: number) {
    this.apiUrl = apiUrl;
    this.timeout = timeout;
  }
}
```

```typescript
// ❌ Bad — 不应被修改的属性缺少 readonly
class Config {
  apiUrl: string;
  timeout: number;
}
```

### 5.3 优先使用构造函数参数属性简写

```typescript
// ✅ Good
class User {
  constructor(
    public readonly name: string,
    private age: number,
  ) {}
}
```

```typescript
// ❌ Bad — 冗余的属性声明和赋值
class User {
  public readonly name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## 6. 接口与类型别名

### 6.1 对象结构用 interface，联合/交叉/工具类型用 type

```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

type Status = 'active' | 'inactive';
type UserWithRole = User & { role: string };
type Nullable<T> = T | null;
```

```typescript
// ❌ Bad — 用 type 定义纯对象结构（无法被 extends / implements）
type User = {
  id: number;
  name: string;
  email: string;
};

// ❌ Bad — 用 interface 定义联合类型（做不到）
// interface Status = 'active' | 'inactive'; // 语法错误
```

### 6.2 接口命名不加 `I` 前缀

```typescript
// ✅ Good
interface UserProfile {
  name: string;
}
```

```typescript
// ❌ Bad — 匈牙利命名法
interface IUserProfile {
  name: string;
}
```

### 6.3 使用 Record 代替索引签名（简单映射）

```typescript
// ✅ Good
type UserRoles = Record<string, string[]>;
type StatusMap = Record<ORDER_STATUS, string>;
```

```typescript
// ❌ Bad
interface UserRoles {
  [key: string]: string[];
}
```

### 6.4 导出类型使用 `export type`

```typescript
// ✅ Good
export type { UserProfile };
export type UserID = string;
```

```typescript
// ❌ Bad — 可能导致运行时不必要的导入
export { UserProfile };
```

---

## 7. 泛型

### 7.1 泛型参数使用有意义的名称

```typescript
// ✅ Good
function getProperty<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] {
  return obj[key];
}

interface ApiResponse<TData> {
  code: number;
  data: TData;
  message: string;
}
```

```typescript
// ❌ Bad — 单字母泛型在复杂场景下难以理解
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}
```

### 7.2 使用泛型约束而非 any

```typescript
// ✅ Good
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
```

```typescript
// ❌ Bad
function merge(a: any, b: any): any {
  return { ...a, ...b };
}
```

### 7.3 不需要泛型时不要使用

```typescript
// ✅ Good
function identity(value: string): string {
  return value;
}
```

```typescript
// ❌ Bad — 泛型没有实际约束作用
function identity<T>(value: T): T {
  return value;
}
// 此处 T 没有约束，调用方也不依赖泛型推断，过度设计
```

---

## 8. 模块与导入导出

### 8.1 使用 ESM（import/export），禁用 CommonJS

```typescript
// ✅ Good
import { readFile } from 'fs/promises';
export function parse() {}
```

```typescript
// ❌ Bad
const { readFile } = require('fs/promises');
module.exports = { parse };
```

### 8.2 import 语句按组排列：三方库 → 内部模块 → 相对路径 → 类型导入

```typescript
// ✅ Good
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { UserService } from '@/services/user';
import { formatDate } from '@/utils/date';

import { Button } from './components/Button';
import { useFormState } from './hooks/useFormState';

import type { UserProfile } from '@/types/user';
```

```typescript
// ❌ Bad — 导入顺序混乱
import { Button } from './components/Button';
import type { UserProfile } from '@/types/user';
import React from 'react';
import { UserService } from '@/services/user';
import { useQuery } from '@tanstack/react-query';
```

### 8.3 避免通配符导入

```typescript
// ✅ Good
import { map, filter, reduce } from 'lodash-es';
```

```typescript
// ❌ Bad — 导入整个包，增大打包体积
import * as _ from 'lodash';
```

### 8.4 导入类型使用 `import type`

```typescript
// ✅ Good
import type { FC, ReactNode } from 'react';
import type { AxiosResponse } from 'axios';
```

```typescript
// ❌ Bad — 将类型作为值导入
import { FC, ReactNode } from 'react';
```

### 8.5 一个文件只导出一个主要内容（单一职责）

```typescript
// ✅ Good — user.service.ts
export class UserService {
  // ...
}

// ✅ Good — 通过 index.ts 统一导出
export { UserService } from './user.service';
export { OrderService } from './order.service';
```

```typescript
// ❌ Bad — 一个文件导出多个不相关的类
export class UserService {}
export class OrderService {}
export class PaymentService {}
```

---

## 9. 异步处理

### 9.1 使用 async/await 代替 Promise 链

```typescript
// ✅ Good
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
}
```

```typescript
// ❌ Bad — Promise 链嵌套
function fetchUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}
```

### 9.2 并行请求使用 Promise.all / Promise.allSettled

```typescript
// ✅ Good — 无依赖的请求并行执行
async function loadDashboard() {
  const [user, orders, notifications] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);
  return { user, orders, notifications };
}
```

```typescript
// ❌ Bad — 串行执行，浪费时间
async function loadDashboard() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  const notifications = await fetchNotifications();
  return { user, orders, notifications };
}
```

### 9.3 避免在循环中使用 await（除非有依赖关系）

```typescript
// ✅ Good
async function fetchAllUsers(ids: string[]): Promise<User[]> {
  return Promise.all(ids.map((id) => fetchUser(id)));
}
```

```typescript
// ❌ Bad — 循环中串行 await
async function fetchAllUsers(ids: string[]): Promise<User[]> {
  const users: User[] = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
}
```

### 9.4 异步函数必须有错误处理

```typescript
// ✅ Good
async function fetchData(): Promise<Data | null> {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}
```

```typescript
// ❌ Bad — 缺少错误处理
async function fetchData(): Promise<Data> {
  const response = await fetch('/api/data');
  return response.json();
}
```

---

## 10. 条件判断与逻辑

### 10.1 使用严格等于 `===`

```typescript
// ✅ Good
if (status === 'active') {}
if (count === 0) {}
```

```typescript
// ❌ Bad
if (status == 'active') {}
if (count == 0) {}
```

### 10.2 简化布尔判断，避免冗余比较

```typescript
// ✅ Good
if (isValid) {}
if (!hasPermission) {}
```

```typescript
// ❌ Bad
if (isValid === true) {}
if (hasPermission === false) {}
```

### 10.3 复杂条件提取为有意义的变量或函数

```typescript
// ✅ Good
const isEligibleForDiscount = user.age >= 60 || user.isMember || order.total > 1000;

if (isEligibleForDiscount) {
  applyDiscount();
}
```

```typescript
// ❌ Bad — 条件意图不明
if (user.age >= 60 || user.isMember || order.total > 1000) {
  applyDiscount();
}
```

### 10.4 禁止使用 switch，用 if-else 或对象映射代替

```typescript
// ✅ Good — 少量分支用 if-else
function getLabel(status: ORDER_STATUS): string {
  if (status === ORDER_STATUS.PENDING) return '待处理';
  if (status === ORDER_STATUS.PAID) return '已支付';
  if (status === ORDER_STATUS.SHIPPED) return '已发货';
  return '未知';
}

// ✅ Good — 多分支用对象映射
const statusHandlers: Record<ORDER_STATUS, () => void> = {
  [ORDER_STATUS.PENDING]: handlePending,
  [ORDER_STATUS.PAID]: handlePaid,
  [ORDER_STATUS.SHIPPED]: handleShipped,
  [ORDER_STATUS.CANCELLED]: handleCancelled,
};

function handleOrder(status: ORDER_STATUS) {
  statusHandlers[status]?.();
}
```

```typescript
// ❌ Bad — 禁止使用 switch
switch (status) {
  case 'pending':
    handlePending();
    break;
  case 'paid':
    handlePaid();
    break;
  case 'shipped':
    handleShipped();
    break;
  default:
    handleDefault();
}
```

### 10.5 提前返回，减少嵌套（Guard Clause）

```typescript
// ✅ Good
function processUser(user: User | null): string {
  if (!user) return 'No user';
  if (!user.isActive) return 'User inactive';
  if (!user.hasPermission) return 'No permission';

  return performAction(user);
}
```

```typescript
// ❌ Bad — 嵌套地狱
function processUser(user: User | null): string {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return performAction(user);
      } else {
        return 'No permission';
      }
    } else {
      return 'User inactive';
    }
  } else {
    return 'No user';
  }
}
```

---

## 11. 数组与对象操作

### 11.1 使用展开运算符进行浅拷贝

```typescript
// ✅ Good
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, name: 'updated' };
```

```typescript
// ❌ Bad
const newArray = oldArray.concat([newItem]);
const newObject = Object.assign({}, oldObject, { name: 'updated' });
```

### 11.2 使用解构赋值

```typescript
// ✅ Good
const { name, age, email } = user;
const [first, ...rest] = items;

function render({ title, content }: ArticleProps) {}
```

```typescript
// ❌ Bad
const name = user.name;
const age = user.age;
const email = user.email;

function render(props: ArticleProps) {
  const title = props.title;
}
```

### 11.3 使用 Array 高阶方法代替 for 循环

```typescript
// ✅ Good
const activeUsers = users.filter((u) => u.isActive);
const names = users.map((u) => u.name);
const total = orders.reduce((sum, o) => sum + o.amount, 0);
```

```typescript
// ❌ Bad
const activeUsers: User[] = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    activeUsers.push(users[i]);
  }
}
```

### 11.4 使用可选链和空值合并

```typescript
// ✅ Good
const city = user?.address?.city ?? 'Unknown';
const name = response?.data?.name ?? 'Anonymous';
```

```typescript
// ❌ Bad
const city = user && user.address && user.address.city ? user.address.city : 'Unknown';
const name = response && response.data && response.data.name ? response.data.name : 'Anonymous';
```

### 11.5 对象属性简写

```typescript
// ✅ Good
const name = 'Alice';
const age = 25;
const user = { name, age };
```

```typescript
// ❌ Bad
const user = { name: name, age: age };
```

---

## 12. 错误处理

### 12.1 抛出 Error 对象而非字符串

```typescript
// ✅ Good
throw new Error('User not found');
throw new TypeError('Expected a string');

// 更好：自定义错误类
class BusinessError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
    this.name = 'BusinessError';
  }
}

throw new BusinessError('Insufficient balance', 'INSUFFICIENT_BALANCE');
```

```typescript
// ❌ Bad
throw 'User not found';
throw 404;
throw { message: 'error' };
```

### 12.2 catch 中明确错误类型

```typescript
// ✅ Good
try {
  await fetchData();
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error:', error.message);
  } else if (error instanceof Error) {
    console.error('General error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

```typescript
// ❌ Bad — 直接 catch any
try {
  await fetchData();
} catch (error: any) {
  console.error(error.message);
}
```

### 12.3 不要吞掉错误（空 catch）

```typescript
// ✅ Good
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', error);
  // 根据场景决定：重新抛出、返回默认值或通知用户
}
```

```typescript
// ❌ Bad — 吞掉错误，问题无法排查
try {
  await riskyOperation();
} catch (error) {
  // 什么都不做
}
```

---

## 13. 注释

### 13.1 公共 API 使用 JSDoc 注释

```typescript
// ✅ Good
/**
 * 根据用户 ID 获取用户信息
 * @param id - 用户唯一标识
 * @returns 用户信息，未找到返回 null
 * @throws {BusinessError} 当 ID 格式不合法时
 */
async function getUserById(id: string): Promise<User | null> {
  // ...
}
```

```typescript
// ❌ Bad — 无注释或注释无意义
// 获取用户
async function getUserById(id: string) {}
```

### 13.2 避免无意义的注释，代码即文档

```typescript
// ✅ Good
// 超过 30 天未登录的用户标记为不活跃
const INACTIVE_THRESHOLD_DAYS = 30;

const inactiveUsers = users.filter(
  (u) => daysSinceLastLogin(u) > INACTIVE_THRESHOLD_DAYS,
);
```

```typescript
// ❌ Bad — 注释只是复述代码
// 设置 i 为 0
let i = 0;
// 遍历用户数组
for (const user of users) {}
// 返回结果
return result;
```

### 13.3 TODO/FIXME 注明负责人和日期

```typescript
// ✅ Good
// TODO(zhangsan 2026-02-16): 迁移到新版 API 后移除此兼容逻辑
// FIXME(lisi 2026-02-16): 并发场景下存在竞态条件，需要加锁
```

```typescript
// ❌ Bad
// TODO: fix this
// FIXME: something wrong
```

---

## 14. 空值处理

### 14.1 使用 `null` 表示"有意为空"，`undefined` 表示"未定义/未传入"

```typescript
// ✅ Good
interface SearchResult {
  user: User | null; // 明确表示"搜索了但没找到"
}

function getUser(id?: string) {
  // id 是 undefined 表示没传
}
```

```typescript
// ❌ Bad — null 和 undefined 混用，语义不清
function getUser(id: string | null | undefined) {}
```

### 14.2 使用非空断言要谨慎（尽量避免 `!`）

```typescript
// ✅ Good
const element = document.getElementById('app');
if (element) {
  element.textContent = 'Hello';
}

// 或用可选链
document.getElementById('app')?.focus();
```

```typescript
// ❌ Bad — 非空断言可能导致运行时错误
const element = document.getElementById('app')!;
element.textContent = 'Hello'; // 如果 element 为 null 会报错
```

### 14.3 使用 `??` 而非 `||` 处理空值默认值

```typescript
// ✅ Good
const count = input ?? 0; // 仅当 input 为 null/undefined 时取默认值
const name = user.name ?? 'Anonymous';
```

```typescript
// ❌ Bad — || 会把 0、'' 等 falsy 值也替换掉
const count = input || 0; // input 为 0 时也会被替换
const name = user.name || 'Anonymous'; // name 为 '' 时也会被替换
```

---

## 15. 类型断言与类型守卫

### 15.1 优先使用类型守卫而非类型断言

```typescript
// ✅ Good — 类型守卫
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    'id' in value
  );
}

function process(input: unknown) {
  if (isUser(input)) {
    console.log(input.name); // 类型安全
  }
}
```

```typescript
// ❌ Bad — 强制断言，跳过类型检查
function process(input: unknown) {
  const user = input as User; // 不安全
  console.log(user.name); // 可能运行时报错
}
```

### 15.2 使用 `satisfies` 操作符进行类型校验但保留推断

```typescript
// ✅ Good
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
} satisfies Record<string, string | number>;
// config.apiUrl 的类型仍是 string（非 string | number）
```

```typescript
// ❌ Bad — 类型标注会丢失具体字面量信息
const config: Record<string, string | number> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
};
// config.apiUrl 的类型是 string | number
```

### 15.3 使用 `in` / `typeof` / `instanceof` 收窄类型

```typescript
// ✅ Good
function handleEvent(event: MouseEvent | KeyboardEvent) {
  if (event instanceof MouseEvent) {
    console.log(event.clientX);
  } else {
    console.log(event.key);
  }
}

function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

```typescript
// ❌ Bad — 用 as 强转
function handleEvent(event: MouseEvent | KeyboardEvent) {
  console.log((event as MouseEvent).clientX); // 可能运行时取到 undefined
}
```

---

## 16. 其他最佳实践

### 16.1 使用模板字符串代替字符串拼接

```typescript
// ✅ Good
const greeting = `Hello, ${name}! You have ${count} messages.`;
const url = `${API_BASE_URL}/users/${userId}`;
```

```typescript
// ❌ Bad
const greeting = 'Hello, ' + name + '! You have ' + count + ' messages.';
const url = API_BASE_URL + '/users/' + userId;
```

### 16.2 使用 `const` 优先，必要时用 `let`，禁用 `var`

```typescript
// ✅ Good
const MAX_COUNT = 100;
let currentIndex = 0;
```

```typescript
// ❌ Bad
var MAX_COUNT = 100;
var currentIndex = 0;
let neverReassigned = 'hello'; // 应该用 const
```

### 16.3 每行代码不超过 100~120 个字符

```typescript
// ✅ Good
const result = users
  .filter((u) => u.isActive)
  .map((u) => u.name)
  .join(', ');
```

```typescript
// ❌ Bad
const result = users.filter((u) => u.isActive).map((u) => u.name).join(', ');
```

### 16.4 避免嵌套三元表达式

```typescript
// ✅ Good
function getLabel(status: Status): string {
  if (status === 'active') return '活跃';
  if (status === 'inactive') return '不活跃';
  return '未知';
}
```

```typescript
// ❌ Bad
const label = status === 'active' ? '活跃' : status === 'inactive' ? '不活跃' : '未知';
```

### 16.5 文件命名使用 kebab-case

```
✅ Good
user-service.ts
order-list.component.tsx
use-auth.hook.ts

❌ Bad
UserService.ts
orderList.component.tsx
useAuth.hook.ts
```

### 16.6 使用 `structuredClone` 深拷贝（替代 JSON.parse/JSON.stringify）

```typescript
// ✅ Good
const copy = structuredClone(original);
```

```typescript
// ❌ Bad — 不支持 Date、Map、Set 等类型
const copy = JSON.parse(JSON.stringify(original));
```

### 16.7 禁止使用 `@ts-ignore`，如必须使用 `@ts-expect-error` 并附注释

```typescript
// ✅ Good
// @ts-expect-error: 第三方库类型定义缺失 onClick 属性
component.onClick = handler;
```

```typescript
// ❌ Bad
// @ts-ignore
component.onClick = handler;
```

### 16.8 开启严格模式

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

```json
// ❌ Bad — 关闭严格检查
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false
  }
}
```

---

## 附录：推荐 ESLint + Prettier 配置

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier
```

```javascript
// eslint.config.js (flat config)
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // 禁用 any
      '@typescript-eslint/no-explicit-any': 'error',
      // 要求显式返回类型（公共方法）
      '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }],
      // 优先使用 interface
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // 使用 import type
      '@typescript-eslint/consistent-type-imports': 'error',
      // 禁用 @ts-ignore
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': true,
        'ts-expect-error': 'allow-with-description',
      }],
      // 禁用 var
      'no-var': 'error',
      // 优先 const
      'prefer-const': 'error',
      // 使用 === 
      'eqeqeq': ['error', 'always'],
      // 禁用 console（生产代码）
      'no-console': 'warn',
    },
  },
];
```

---

> 本规范为团队约定，建议配合 ESLint + Prettier + husky + lint-staged 实现自动化检查。
