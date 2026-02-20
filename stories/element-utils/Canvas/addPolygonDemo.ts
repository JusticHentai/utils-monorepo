import Canvas from '../../../packages/element-utils/src/Canvas'

const addPolygonDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 三角形
  canvas.addPolygon({
    x: 60,
    y: 80,
    radius: 40,
    sides: 3,
    fillColor: '#667eea',
  })

  // 正方形（旋转45度变菱形）
  canvas.addPolygon({
    x: 140,
    y: 80,
    radius: 35,
    sides: 4,
    rotation: Math.PI / 4,
    fillColor: '#f093fb',
  })

  // 五边形
  canvas.addPolygon({
    x: 220,
    y: 80,
    radius: 40,
    sides: 5,
    fillColor: '#4facfe',
  })

  // 六边形
  canvas.addPolygon({
    x: 300,
    y: 80,
    radius: 40,
    sides: 6,
    strokeColor: '#00f2fe',
    lineWidth: 3,
  })

  // 八边形
  canvas.addPolygon({
    x: 100,
    y: 200,
    radius: 45,
    sides: 8,
    fillColor: 'rgba(102, 126, 234, 0.5)',
    strokeColor: '#667eea',
    lineWidth: 2,
  })

  // 十二边形（接近圆）
  canvas.addPolygon({
    x: 200,
    y: 200,
    radius: 45,
    sides: 12,
    fillColor: '#f5576c',
  })

  // 星形效果（三角形旋转叠加）
  canvas.addPolygon({
    x: 300,
    y: 200,
    radius: 45,
    sides: 3,
    fillColor: 'rgba(79, 172, 254, 0.6)',
  })
  canvas.addPolygon({
    x: 300,
    y: 200,
    radius: 45,
    sides: 3,
    rotation: Math.PI,
    fillColor: 'rgba(240, 147, 251, 0.6)',
  })
}

export default addPolygonDemo
