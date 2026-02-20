import { action } from 'storybook/actions'
import { Canvas } from '@justichentai/element-utils'

const measureTextDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  const text1 = 'Hello Canvas!'
  const text2 = '你好，Canvas！'
  const text3 = 'Measure Text Width'

  // 测量文本宽度
  const result1 = canvas.measureText({ text: text1, fontSize: 20, font: 'Arial' })
  const result2 = canvas.measureText({ text: text2, fontSize: 20, font: 'Arial' })
  const result3 = canvas.measureText({ text: text3, fontSize: 16, font: 'Arial', fontWeight: 'bold' })

  action('measureText')(
    `"${text1}" width: ${result1.width.toFixed(2)}px`,
    `"${text2}" width: ${result2.width.toFixed(2)}px`,
    `"${text3}" width: ${result3.width.toFixed(2)}px`
  )

  // 绘制文本和对应的宽度标记
  const y1 = 60
  canvas.addText({
    text: text1,
    x: 50,
    y: y1,
    width: 300,
    fontSize: 20,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 24,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y1 + 5, x2: 50 + result1.width, y2: y1 + 5, color: '#667eea', lineWidth: 2 })

  const y2 = 120
  canvas.addText({
    text: text2,
    x: 50,
    y: y2,
    width: 300,
    fontSize: 20,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 24,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y2 + 5, x2: 50 + result2.width, y2: y2 + 5, color: '#f093fb', lineWidth: 2 })

  const y3 = 180
  canvas.addText({
    text: text3,
    x: 50,
    y: y3,
    width: 300,
    fontSize: 16,
    font: 'Arial',
    fontWeight: 700,
    lineHeight: 20,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y3 + 5, x2: 50 + result3.width, y2: y3 + 5, color: '#4facfe', lineWidth: 2 })

  // 居中文本示例
  const centerText = 'Centered Text'
  const centerResult = canvas.measureText({ text: centerText, fontSize: 18, font: 'Arial' })
  const centerX = (400 - centerResult.width) / 2
  canvas.addText({
    text: centerText,
    x: centerX,
    y: 250,
    width: 200,
    fontSize: 18,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 22,
    color: '#667eea',
  })
}

export default measureTextDemo
