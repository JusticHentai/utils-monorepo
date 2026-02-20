import { Canvas } from '@justichentai/element-utils'

const downloadDemo = async (canvas: Canvas) => {
  canvas.clear()

  // 绘制彩虹渐变背景
  const gradient = canvas.addLinearGradient({
    x1: 0,
    y1: 0,
    x2: 400,
    y2: 300,
    colorStops: [
      { offset: 0, color: '#ff6b6b' },
      { offset: 0.5, color: '#feca57' },
      { offset: 1, color: '#48dbfb' },
    ],
  })
  canvas.getContext().fillStyle = gradient
  canvas.getContext().fillRect(0, 0, 400, 300)

  canvas.addText({
    text: 'Canvas Download Demo',
    x: 70,
    y: 130,
    width: 260,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
  })

  // 下载图片
  await canvas.download({ filename: 'canvas-demo', type: 'image/png' })
}

export default downloadDemo
