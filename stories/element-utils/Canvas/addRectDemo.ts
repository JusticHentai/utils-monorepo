import { Canvas } from '@justichentai/element-utils'

const addRectDemo = (canvas: Canvas) => {
  canvas.clear()
  // 填充矩形
  canvas.addRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    fillColor: '#3498db',
  })
  // 描边矩形
  canvas.addRect({
    x: 200,
    y: 50,
    width: 120,
    height: 80,
    strokeColor: '#e74c3c',
    lineWidth: 3,
  })
  // 填充+描边矩形
  canvas.addRect({
    x: 50,
    y: 160,
    width: 120,
    height: 80,
    fillColor: '#2ecc71',
    strokeColor: '#27ae60',
    lineWidth: 2,
  })
}

export default addRectDemo
