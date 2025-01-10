# Resize

基于 rem 的自适应解决方案

## 安装

```bash
npm i @justichentai/resize
```

## 使用

```ts
import resize from '@justichentai/resize'

resize()
```

## 自定义选项

### Options

- 初始化选项
```ts
export interface Options {  
  resizePreset?: ResizePreset  
  resizeType?: ResizeType  
  resizeCallback?: (options: ResizeCallback) => any  
  debounce?: {  
    duration: number  
    immediate?: boolean  
  }
}
```

### resizePreset

- 屏幕适配预设
- 单位 px
- 不同屏幕会有不同的适配标准 不可能平滑过渡 这里可以设置横屏和竖屏的适配比例
- horizontal 横屏
- vertical 竖屏
- 当横竖屏只填入任意一种时 仅适配当前填入的
- 当填入两种时 当前屏幕 按当前屏幕 width > height 区分是横屏还是竖屏
```ts
export type ResizePreset =  
  | {  
      horizontal: ScreenInfo  
      vertical: ScreenInfo  
    }  
  | {  
      horizontal: ScreenInfo  
      vertical?: ScreenInfo  
    }  
  | {  
      horizontal?: ScreenInfo  
      vertical: ScreenInfo  
    }
```

### resizeType

- 适配规则
- x 表示只按 resizePreset 的 width 与当前屏幕 width 的比例来适配
- y 表示只按 resizePreset 的 height 与当前屏幕 height 的比例来适配
- all 表示按 resizePreset 的 width height 与当前屏幕 width height 两者比例最小值来适配
- 为了让大屏有更好的呈现方式 当 resizePreset 的值小于当前屏幕的对应值 比例默认是 1
- 如果想自定义大屏 可以按比例提高 resizePreset 的值
```ts
export type ResizeType = 'x' | 'y' | 'all'
```

### resizeCallback

- 每次触发 resize 事件时会回调
- 包含当前屏幕的 width 和 height 信息 单位 px
- 包含你传入的 options 值
- 其中 size 表示当前屏幕是横屏模式还是竖屏模式 也是按当前屏幕的 width > height 区分
```ts
resizeCallback: (options: ResizeCallback) => any

export type ResizeCallback = {  
  size: 'horizontal' | 'vertical'  
} & ScreenInfo &  Options

export interface ScreenInfo {  
  width: number  
  height: number  
}
```

### Debounce

- 防抖相关参数
- 默认 不防抖
- duration 代表延迟多少秒执行
- immediate 代表是否即刻执行

## 配套工具

- 为了适配某些国产浏览器
- px 转 rem 的值推荐设置为 `100 : 1` 即 `1 rem = 100 px`

### Px 自动转 Rem 工具

- postcss-pxtorem
- [官网](https://github.com/cuth/postcss-pxtorem)
- 推荐 比例也设置为 `100 : 1`

## 可以参考配置 Demo

vue3 + vite
- [配置地址](https://github.com/JusticHentai/utlis-debug/blob/main/vite.config.ts)
- [使用地址](https://github.com/JusticHentai/utlis-debug/blob/main/src/components/resize/Resize.vue)

next.js
- [配置地址](https://github.com/JusticHentai/akashic-book/blob/main/postcss.config.js)
- 使用地址
