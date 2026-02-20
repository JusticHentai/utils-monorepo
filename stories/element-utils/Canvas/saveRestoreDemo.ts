import Canvas from '../../../packages/element-utils/src/Canvas'

const saveRestoreDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 保存初始状态
  canvas.save()

  // 第一次变换：平移+旋转
  canvas.translate({ x: 100, y: 100 })
  canvas.rotate({ angle: Canvas.degToRad(20) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#3498db' })

  // 恢复到初始状态
  canvas.restore()

  // 保存新状态
  canvas.save()

  // 第二次变换：平移+缩放
  canvas.translate({ x: 250, y: 100 })
  canvas.scale({ scaleX: 1.5, scaleY: 1.5 })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#e74c3c' })

  // 恢复
  canvas.restore()

  // 无变换绘制
  canvas.addRect({ x: 150, y: 200, width: 100, height: 60, fillColor: '#2ecc71' })

  canvas.addText({
    text: 'save/restore 保持状态独立',
    x: 100,
    y: 280,
    width: 200,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
  })
}

export default saveRestoreDemo
