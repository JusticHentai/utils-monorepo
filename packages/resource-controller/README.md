# Resource-controller

## 简介

- 资源管理器
- 用于统一管理资源的加载和使用

## 安装

```ts
npm i @justichentai/resource-controller
```

## 使用

- 新建实例

```ts
import ResourceController from '@justichentai/resource-controller';

const resourceController = new ResourceController()
```

- 添加一个资源
    - 名字
    - 加载函数
    - 优先级

```ts
resourceController.add({
  name: 'name',
  loadFn: async () => {...},
  priority: 1,
})
```

- 加载当前 `add` 的资源
    - 按优先级依次并发加载
    - 没有优先级会放最后

```ts
resourceController.load()
```

- 使用资源

```ts 
const {promise} = resourceController.resourceMap[name]

await promise

const {current} = resourceController.resourceMap[name]

// current 是 loadFn 返回的内容可以直接使用
```
