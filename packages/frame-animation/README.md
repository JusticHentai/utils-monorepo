# Frame-animation

raf and canvas based frame animation tools
Support for arbitrary rows of frame animation originals

[中文文档](https://juejin.cn/post/7130862826486235167)

## Install

```bash
npm i @justichentai/frame-animation
```

## Usage

### Simple Example

frame-animation will automatically detect the size of your mounted element.
Make sure the size of the element is equal to the size of one frame.
```ts
import FrameAnime from '@justichentai/frame-animation'

const anime = new FrameAnime({  
  frame: 24,  
  url: 'url',  
  duration: 2000,  
  el: dom,  
})  

await anime.init()

anime.play()
```

### Options

```ts
export interface Options {  
  el: HTMLDivElement // The element to be mounted  
  url: string // The original image of frame animation 
  frame: number // Frame Rate  
  duration?: number // Duration in ms  
  column?: number // The number of columns per row of the original frame animation; 0 mean only one line;Default 0  
  imageLoadComplete?: (url: HTMLImageElement) => any // Callback when image is loaded  
  frameComplete?: (frame: number) => any // Callback each frames 
  completeOne?: (times: number) => any // Callback each times. `times` is the current count  
  complete?: () => any // Callback when currentTimes = times 
}
```

If the original image of your frame animation looks like this one line past
![keyFrameTest.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f6ef5f987184bb196f796533166d5a1~tplv-k3u1fbpfcp-watermark.image?)

column set to `0` or not set.
If you have multiple rows, set column to how many columns there are in each row.

### Load Image

```ts
await anime.init()
```

### Start Animation

```ts
anime.play()
```

### Pause Animation

```ts
anime.pause()
```

### Play Times

This api can be played a specific number of times.
If this api is called while playing animation.
It will not start counting until after the current animation is executed.

```ts
anime.playTimes(n: number)
```

### Reverse

```ts
anime.reverse()
```

When you want to reverse the animation a specific number of times

```ts
anime.reverse().playTimes(2)
```

### Restart

```ts
anime.restart()
```

### Update

this api is used in element size resize
```ts
anime.update()
```
