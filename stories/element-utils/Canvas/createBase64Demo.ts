import { Canvas } from '@justichentai/element-utils'

const createBase64Demo = (canvas: Canvas) => {
  canvas.clear()

  // 绘制渐变背景
  const gradient = canvas.addLinearGradient({
    x1: 0,
    y1: 0,
    x2: 400,
    y2: 300,
    colorStops: [
      { offset: 0, color: '#667eea' },
      { offset: 1, color: '#764ba2' },
    ],
  })
  canvas.getContext().fillStyle = gradient
  canvas.getContext().fillRect(0, 0, 400, 300)

  canvas.addText({
    text: 'createBase64 导出示例',
    x: 80,
    y: 130,
    width: 240,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
  })

  // 导出 Base64
  const base64 = canvas.createBase64()
  console.log('Base64 (前100字符):', base64.slice(0, 100))
  alert('Base64 已输出到控制台')
}

export default createBase64Demo
