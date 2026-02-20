import { Canvas } from '@justichentai/element-utils'

const addRoundRectDemo = (canvas: Canvas) => {
  canvas.clear()
  // 统一圆角
  canvas.addRoundRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    radius: 15,
    fillColor: '#9b59b6',
  })
  // 四角独立圆角
  canvas.addRoundRect({
    x: 200,
    y: 50,
    width: 120,
    height: 80,
    radius: [30, 10, 30, 10],
    fillColor: '#f39c12',
  })
  // 描边圆角矩形
  canvas.addRoundRect({
    x: 50,
    y: 160,
    width: 120,
    height: 80,
    radius: 20,
    strokeColor: '#1abc9c',
    lineWidth: 3,
  })
}

export default addRoundRectDemo
