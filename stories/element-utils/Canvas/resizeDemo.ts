import Canvas from '../../../packages/element-utils/src/Canvas'

const resizeDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#2ecc71' })
  canvas.addText({
    text: '1秒后调整尺寸',
    x: 120,
    y: 140,
    width: 200,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
  })

  setTimeout(() => {
    canvas.resize({ width: 300, height: 200 })
    canvas.addRect({ x: 0, y: 0, width: 300, height: 200, fillColor: '#9b59b6' })
    canvas.addText({
      text: '尺寸已调整为 300x200',
      x: 50,
      y: 90,
      width: 200,
      lineHeight: 24,
      font: 'Arial',
      fontSize: 14,
      fontWeight: 700,
      color: '#fff',
    })

    // 2秒后恢复
    setTimeout(() => {
      canvas.resize({ width: 500, height: 350 })
      canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })
      canvas.addText({
        text: '尺寸已恢复为 400x300',
        x: 100,
        y: 140,
        width: 200,
        lineHeight: 24,
        font: 'Arial',
        fontSize: 14,
        fontWeight: 700,
        color: '#333',
      })
    }, 2000)
  }, 1000)
}

export default resizeDemo
