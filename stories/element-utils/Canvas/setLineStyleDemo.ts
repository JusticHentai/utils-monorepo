import Canvas from '../../../packages/element-utils/src/Canvas'

const setLineStyleDemo = (canvas: Canvas) => {
  canvas.clear()

  // lineCap 演示
  const caps: CanvasLineCap[] = ['butt', 'round', 'square']
  caps.forEach((cap, i) => {
    canvas.setLineStyle({ lineCap: cap, lineWidth: 15 })
    canvas.addLine({
      startX: 50,
      startY: 40 + i * 50,
      endX: 150,
      endY: 40 + i * 50,
      strokeColor: '#3498db',
    })
    canvas.fillText({
      text: cap,
      x: 160,
      y: 35 + i * 50,
      fontSize: 12,
      color: '#666',
    })
  })

  // lineJoin 演示
  const joins: CanvasLineJoin[] = ['miter', 'round', 'bevel']
  joins.forEach((join, i) => {
    canvas.setLineStyle({ lineJoin: join, lineWidth: 10, lineCap: 'butt' })
    const x = 250 + i * 70

    canvas.addPath({
      commands: [
        { type: 'moveTo', x: x, y: 60 },
        { type: 'lineTo', x: x + 25, y: 20 },
        { type: 'lineTo', x: x + 50, y: 60 },
      ],
      strokeColor: '#e74c3c',
      lineWidth: 10,
    })

    canvas.fillText({
      text: join,
      x: x,
      y: 70,
      fontSize: 12,
      color: '#666',
    })
  })

  // 不同线宽
  canvas.resetLineStyle()
  const widths = [1, 2, 4, 8, 12]
  widths.forEach((w, i) => {
    canvas.setLineStyle({ lineWidth: w })
    canvas.addLine({
      startX: 50,
      startY: 200 + i * 20,
      endX: 350,
      endY: 200 + i * 20,
      strokeColor: '#2ecc71',
    })
  })

  canvas.resetLineStyle()
}

export default setLineStyleDemo
