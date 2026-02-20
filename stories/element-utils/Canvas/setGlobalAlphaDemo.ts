import Canvas from '../../../packages/element-utils/src/Canvas'

const setGlobalAlphaDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 不透明
  canvas.setGlobalAlpha(1)
  canvas.addRect({ x: 50, y: 50, width: 80, height: 80, fillColor: '#667eea' })

  // 75% 透明度
  canvas.setGlobalAlpha(0.75)
  canvas.addRect({ x: 100, y: 80, width: 80, height: 80, fillColor: '#f093fb' })

  // 50% 透明度
  canvas.setGlobalAlpha(0.5)
  canvas.addRect({ x: 150, y: 110, width: 80, height: 80, fillColor: '#4facfe' })

  // 25% 透明度
  canvas.setGlobalAlpha(0.25)
  canvas.addRect({ x: 200, y: 140, width: 80, height: 80, fillColor: '#f5576c' })

  // 重置透明度
  canvas.resetGlobalAlpha()

  // 透明度渐变效果
  for (let i = 0; i < 10; i++) {
    canvas.setGlobalAlpha((10 - i) / 10)
    canvas.addCircle({
      x: 320,
      y: 80 + i * 20,
      radius: 15,
      fillColor: '#667eea',
    })
  }

  canvas.resetGlobalAlpha()
}

export default setGlobalAlphaDemo
