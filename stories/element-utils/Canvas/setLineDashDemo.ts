import { Canvas } from '@justichentai/element-utils'

const setLineDashDemo = (canvas: Canvas) => {
  canvas.clear()

  // 普通虚线
  canvas.setLineDash({ segments: [10, 5] })
  canvas.addLine({
    startX: 30,
    startY: 30,
    endX: 370,
    endY: 30,
    strokeColor: '#3498db',
    lineWidth: 2,
  })

  // 点线
  canvas.setLineDash({ segments: [2, 5] })
  canvas.addLine({
    startX: 30,
    startY: 70,
    endX: 370,
    endY: 70,
    strokeColor: '#e74c3c',
    lineWidth: 2,
  })

  // 点划线
  canvas.setLineDash({ segments: [15, 5, 5, 5] })
  canvas.addLine({
    startX: 30,
    startY: 110,
    endX: 370,
    endY: 110,
    strokeColor: '#2ecc71',
    lineWidth: 2,
  })

  // 带偏移的虚线
  canvas.setLineDash({ segments: [10, 10], offset: 5 })
  canvas.addLine({
    startX: 30,
    startY: 150,
    endX: 370,
    endY: 150,
    strokeColor: '#9b59b6',
    lineWidth: 2,
  })

  // 虚线矩形
  canvas.setLineDash({ segments: [8, 4] })
  canvas.addRect({
    x: 50,
    y: 180,
    width: 120,
    height: 80,
    strokeColor: '#f39c12',
    lineWidth: 2,
  })

  // 虚线圆形
  canvas.addCircle({
    x: 280,
    y: 220,
    radius: 40,
    strokeColor: '#1abc9c',
    lineWidth: 2,
  })

  // 恢复实线
  canvas.clearLineDash()
}

export default setLineDashDemo
