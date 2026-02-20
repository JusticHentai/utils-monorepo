import Canvas from '../../../packages/element-utils/src/Canvas'

const setTransformDemo = (canvas: Canvas) => {
  canvas.clear()

  // 原始矩形
  canvas.addRect({
    x: 20,
    y: 20,
    width: 60,
    height: 40,
    fillColor: '#3498db',
  })
  canvas.fillText({ text: '原始', x: 30, y: 70, fontSize: 10, color: '#666' })

  // 使用 setTransform 设置缩放
  canvas.setTransform({ a: 1.5, b: 0, c: 0, d: 1.5, e: 120, f: 10 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#e74c3c',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '缩放 1.5x', x: 120, y: 70, fontSize: 10, color: '#666' })

  // 使用 transform 叠加变换（倾斜）
  canvas.setTransform({ a: 1, b: 0.3, c: 0, d: 1, e: 250, f: 20 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#2ecc71',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '倾斜', x: 260, y: 70, fontSize: 10, color: '#666' })

  // 组合变换
  canvas.setTransform({ a: 1.2, b: 0.2, c: -0.2, d: 1.2, e: 60, f: 130 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#9b59b6',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '组合变换', x: 50, y: 200, fontSize: 10, color: '#666' })

  // 获取并显示当前变换
  canvas.setTransform({ a: 2, b: 0, c: 0, d: 2, e: 180, f: 100 })
  const matrix = canvas.getTransform()
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#f39c12',
  })
  canvas.resetTransform()
  canvas.fillText({
    text: `a=${matrix.a}, d=${matrix.d}`,
    x: 180,
    y: 200,
    fontSize: 10,
    color: '#666',
  })
}

export default setTransformDemo
