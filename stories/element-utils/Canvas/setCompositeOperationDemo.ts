import Canvas from '../../../packages/element-utils/src/Canvas'

const setCompositeOperationDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // source-over (默认)
  canvas.setCompositeOperation('source-over')
  canvas.addCircle({ x: 60, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.addCircle({ x: 80, y: 80, radius: 30, fillColor: '#f093fb' })

  // multiply (正片叠底)
  canvas.setCompositeOperation('multiply')
  canvas.addCircle({ x: 160, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.addCircle({ x: 180, y: 80, radius: 30, fillColor: '#f093fb' })

  // screen (滤色)
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 260, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.setCompositeOperation('screen')
  canvas.addCircle({ x: 280, y: 80, radius: 30, fillColor: '#f093fb' })

  // difference (差值)
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 360, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.setCompositeOperation('difference')
  canvas.addCircle({ x: 380, y: 80, radius: 30, fillColor: '#f093fb' })

  // destination-out (擦除效果)
  canvas.resetCompositeOperation()
  canvas.addRect({ x: 40, y: 160, width: 80, height: 80, fillColor: '#4facfe' })
  canvas.setCompositeOperation('destination-out')
  canvas.addCircle({ x: 80, y: 200, radius: 25, fillColor: '#000' })

  // xor
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 180, y: 200, radius: 35, fillColor: '#667eea' })
  canvas.setCompositeOperation('xor')
  canvas.addCircle({ x: 210, y: 200, radius: 35, fillColor: '#f093fb' })

  // overlay
  canvas.resetCompositeOperation()
  canvas.addRect({ x: 280, y: 160, width: 80, height: 80, fillColor: '#667eea' })
  canvas.setCompositeOperation('overlay')
  canvas.addRect({ x: 300, y: 180, width: 80, height: 80, fillColor: '#f093fb' })

  canvas.resetCompositeOperation()
}

export default setCompositeOperationDemo
