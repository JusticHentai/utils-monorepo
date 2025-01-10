# Types-utils

类型工具库

## 安装

```bash
npm i @justichentai/types-utils
```

## 使用

```ts
import { Merge } from '@justichentai/types-utils'
```

## Api

### ApiMap

传入一个 Object 类型，把 `list` 的类型转变成 `apiMap` 的类型

```ts
import { ApiMap } from '@justichentai/types-utils'

const options: Options = {
  key: params
}

const apiMap: ApiMap<Options> = {
  key: (params) => {}
}
```

### Await

获取 `promise<T>` 里面的 `T` 类型，支持嵌套

```ts
import { Await } from '@justichentai/types-utils'

type T = Promise<string>

const getRes = (): T => {}

const res: Await<T>  = await getRes()
```

### Concat

合并两个数组类型

```ts
import { Concat } from '@justichentai/types-utils'

const list1 = [...]

const list2 = [...]

const list3: Concat<typeof list1, typeof list2> = [...list1, list2]
```

### MyExclude

从 `type1` 中剔除掉 `type2` 的类型

```ts
import { MyExclude } from '@justichentai/types-utils'

type test1 = 'a' | 'b' | 'c'  
type test2 = 'a' | 'b' | 'd' | 'e'  
  
type test3 = MyExclude<test1, test2>  
  
const test3: test3 = 'c'
```

### Merge

合并两个 `Object` 类型，冲突第二个覆盖第一个

```ts
import { Merge } from '@justichentai/types-utils'

type t3 = Merge<t1, t2>
```

### ObjectToUnion

对象转联合对象

```ts
import { ObjectToUnion } from '@justichentai/types-utils'  
  
const list = {  
  test1: '',  
  test2: 1,  
  1: '',  
}  
  
type Test1 = ObjectToUnion<typeof list>  
  
const test1: Test1 = 'test1'
```

### MyOmit

从 `interface` 中剔除 联合类型的 `key` 返回 `interface`

```ts
import { MyOmit } from '@justichentai/types-utils' 

interface Todo {  
  title: string  
  description: string  
  completed: boolean  
}  
  
type TodoPreview = MyOmit<Todo, 'description' | 'title'>  
  
const todo: TodoPreview = {  
  completed: false,  
}
```

### MyParameters

获取函数的变量的类型

```ts
import { MyParameters } from '@justichentai/types-utils' 

const test1 = (obj: { [key: string]: any }) => {  
  return obj  
}  
  
const test2: MyParameters<typeof test1> = {  
  nihao: 0,  
}
```

### Pick

从一个 `interface` 中获取指定的 `key` 组成新的 `interface`

```ts
import { Pick } from '@justichentai/types-utils' 

interface Todo {  
  title?: string  
  description: string  
  completed: boolean  
}  
  
type TodoPreview = Pick<Todo, 'title' | 'completed'>  
  
const todo: TodoPreview = {  
  completed: false,  
}
```

### Push

将一个类型推到元组里

```ts
import { Push } from '@justichentai/types-utils' 

type t1 = [string, number]  
type t2 = boolean  
  
const test: Push<t1, t2> = ['', 0, true]
```

### MyReturnType

获取函数的返回类型

```ts
import { MyReturnType } from '@justichentai/types-utils' 

const fn = (v: boolean) => {  
  if (v) return 1  
  else return 2  
}  
  
type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

### TupleToObject

元组转对象

```ts
import { TupleToObject } from '@justichentai/types-utils' 

const tuple = ['tesla', 'model 3', 'model X', 'model Y']  
  
type result = TupleToObject<typeof tuple>  
  
const result: result = {  
  tesla: 'tesla',  
  'model 3': 'model 3',  
  'model X': 'model X',  
  'model Y': 'model Y',  
}
```

### TupleToUnion

元组转联合类型

```ts
import { TupleToUnion } from '@justichentai/types-utils' 

type Arr = ['1', '2', '3']  
  
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'  
  
const test1: Test = '1'
```

### IObject

- 基础对象类型，没啥特别的

```ts
import { IObject } from '@justichentai/types-utils' 

const obj: IObject = {}
```
