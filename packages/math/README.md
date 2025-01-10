# Math

数学相关工具包

## 安装

```bash
npm i @justichentai/math
```

## 使用

```ts
import { xxx } from '@justichentai/math'
```

## 详细 Api

### Algorithms

算法相关

#### binarySearch

二分查找
- -1 表示没找到 其他则是找到的值
- cb
  - 返回 1 代表 target 小于 mid 应该往小的区间找
  - 返回 2 代表 target 大于 mid 应该往大的区间找
  - 返回 3 代表找到了

```ts
import { binarySearch } from '@justichentai/math'

const res = binarySearch({
  length: x,
  cb: x
})
```

类型：

```ts
interface Options {  
  length: number  
  cb: (midIndex: number) => 1 | 2 | 3  
}

function binarySearch(options: Options): number
```

#### Omit

删除 对象中 指定的 key

```ts
import { omit } from '@justichentai/math'

const newObj = omit(obj, keys)
```

类型：

```ts
function omit<T extends object, K extends keyof T>(  
  obj: T,  
  keys: Array<K | string>  
): Omit<T, K>
```

#### Pick

提取 obj 内的 key 组成一个新的 obj

```ts
import { pick } from '@justichentai/math'

const newObj = pick(obj, keys)
```

类型：

```ts
function pick<T extends Record<string, any>, K extends keyof T>(  
  obj: T,  
  keys: Array<K | string>  
): Pick<T, K> {
```

#### Random

随机数

使用：
```ts
import { random } from '@justichentai/math'

const n = random(1, 110)
```

类型：
```ts
function random(min: number, max: number): number
```

### Animation

动画相关

#### Combo

**连击系统：**
- 第一次调用 combo times + 1 并触发 onCombo
- duration 内调用 combo times + 1 并触发 onCombo
* duration 内没调用 combo 则执行 onComplete times 归 0

使用：

```ts
import { Combo } from '@justichentai/math'

const combo = new Combo(options)

// 触发连击
combo.combo()
```

类型：

```ts
export interface Options {  
  onCombo?: (times?: number) => void // 每次连击时触发  
  onComplete?: (times?: number) => void // 结束时触发  
  duration: number // 间隔时长  
}
```

#### Debounce

**防抖：**
- immediate false 时
* duration 内执行 加时间
* duration 内没有执行 则执行一遍 cb
* immediate true 时
* 先执行一次 cb duration 内执行加时间

使用：
```ts
import { debounce } from '@justichentai/math'

const myFunction = debounce({
  cb: xxx,
  duration: xxx,
  immediate: xxx,
})

// 执行
myFunction()
```

类型：
```ts
export interface Options {  
  cb: MyFunction // 函数本体  
  duration: number // 间隔时长  
  immediate?: boolean // 是否立即执行  
}
```

#### Throttle

节流：
* immediate false 时
* duration 内执行 没反应
* duration 到时 执行一次 cb
* immediate true 时
* 先执行一次 cb
* duration 内执行 没反应

使用：
```ts
import { throttle } from '@justichentai/math'

const myFunction = throttle({
  cb: xxx,
  duration: xxx,
  immediate: xxx,
})

// 执行
myFunction()
```

类型：
```ts
export interface Options {  
  cb: MyFunction // 函数本体  
  duration: number // 间隔时长  
  immediate?: boolean // 是否立即执行  
}
```

#### throttleByRaf

保证同一帧内节流

使用：

```ts
import { throttleByRaf } from '@justichentai/math'

const myFunction = throttleByRaf(()=>{})

// 执行
myFunction()
```

类型：

```ts
function throttleByRaf(cb: MyFunction): MyFunction
```

#### Axis

轴坐标运算相关

#### Axis2D

**2d 坐标轴：**
- 每个坐标都能用来存放信息
- 接收范型 T 代表存放信息的类型

使用：
```ts
import { Axis2D } from '@justichentai/math'

const myAxis = new Axis2D<T>()

myAxis.set({
 x, y 
}, data)

const content = myAxis.get({x,y})
```

类型：
```ts
ContentList<T> = Record<string | number, Record<string | number, T>>;

class Axis2D<T> {  
    constructor();  
    contentList: ContentList<T>;  
    set: ({ x, y }: Point, data: T) => Axis2D<T>;  
    get: ({ x, y }: Point) => T | undefined;  
}
```

#### getDistance

获取两点间的距离

使用：
```ts
import { getDistance } from '@justichentai/math'

const distance = getDistance(startPoint, endPoint)
```

类型：
```ts
function getDistance(start: Point, end: Point): number
```

#### getPosition

行列 转 2d 坐标系

使用：
```ts
import { getPosition } from '@justichentai/math'

const { x, y } = getPosition({
 index: xxx,
 column: xxx,
})
```

类型：
```ts
interface Options {  
  index: number // index 从 0 开始  
  column: number // 列数  
} 

function getPosition(options: Options): Point
```

#### Lerp

线性插值
- ab 两点连线上 选一点代表这一段的想要值
- 例如 1 和 5 选 0.8 代表这段线段 则 0.2 * 1 + 0.8 * 5

使用：
```ts
import { lerp } from '@justichentai/math'

const n = lerp(a, b, n)
```

类型：
```ts
function lerp(a: number, b: number, n: number): number
```

#### Point

2d 点的类型

使用：
```ts
import { Point } from '@justichentai/math'

const point: Point = {
  x: 0,
  y: 0
}
```

类型：
```ts
interface Point {  
  x: number  
  y: number  
}
```

### Time

#### getLocalTime

获取本地时间

使用：
```ts
import { getLocalTime } from '@justichentai/math'

const { xxx } = getLocalTime()
```

类型：
```ts
interface TimeResult {  
  year: number // 年  
  month: number // 月  
  day: number // 日  
  hour: number // 小时  
  minutes: number // 分钟  
  second: number // 秒  
  time: number // 时间戳  
}

function getLocalTime(): TimeResult
```

#### timeTransform

格式化时间

使用：
```ts
import { timeTransform } from '@justichentai/math'

const { xxx } = timeTransform(Data.now())
```

类型：
```ts
interface TimeResult {  
  year: number // 年  
  month: number // 月  
  day: number // 日  
  hour: number // 小时  
  minutes: number // 分钟  
  second: number // 秒  
  time: number // 时间戳  
}

function timeTransform(time: number): TimeResult
```
