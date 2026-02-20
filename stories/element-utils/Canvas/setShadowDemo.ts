import Canvas from '../../../packages/element-utils/src/Canvas'

const setShadowDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 设置阴影
  canvas.setShadow({
    color: 'rgba(0, 0, 0, 0.3)',
    blur: 15,
    offsetX: 5,
    offsetY: 5,
  })

  // 带阴影的圆角矩形
  canvas.addRoundRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    radius: 10,
    fillColor: '#fff',
  })

  // 带阴影的圆形
  canvas.addCircle({
    x: 280,
    y: 90,
    radius: 50,
    fillColor: '#fff',
  })

  // 清除阴影
  canvas.clearShadow()

  // 无阴影的矩形
  canvas.addRect({
    x: 50,
    y: 180,
    width: 300,
    height: 60,
    fillColor: '#3498db',
  })

  canvas.addText({
    text: '上方有阴影，下方无阴影',
    x: 100,
    y: 265,
    width: 200,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    color: '#666',
  })
}

export default setShadowDemo
