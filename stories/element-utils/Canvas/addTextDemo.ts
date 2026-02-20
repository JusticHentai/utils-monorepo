import { Canvas } from '@justichentai/element-utils'

const addTextDemo = (canvas: Canvas) => {
  canvas.clear()
  // 标题文字
  canvas.addText({
    text: 'Hello Canvas!',
    x: 50,
    y: 50,
    width: 300,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 24,
    fontWeight: 700,
    color: '#333',
  })
  // 自动换行文字
  canvas.addText({
    text: '这是一段自动换行的中文文本，当文字超过设定宽度时会自动换行显示。',
    x: 50,
    y: 100,
    width: 300,
    lineHeight: 24,
    font: 'Arial',
    fontSize: 16,
    fontWeight: 400,
    color: '#666',
  })
}

export default addTextDemo
