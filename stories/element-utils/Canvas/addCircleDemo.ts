import Canvas from '../../../packages/element-utils/src/Canvas'

const addCircleDemo = (canvas: Canvas) => {
  canvas.clear()
  // 填充圆形
  canvas.addCircle({
    x: 100,
    y: 100,
    radius: 50,
    fillColor: '#e74c3c',
  })
  // 描边圆形
  canvas.addCircle({
    x: 250,
    y: 100,
    radius: 50,
    strokeColor: '#3498db',
    lineWidth: 4,
  })
  // 填充+描边圆形
  canvas.addCircle({
    x: 175,
    y: 200,
    radius: 40,
    fillColor: '#2ecc71',
    strokeColor: '#27ae60',
    lineWidth: 3,
  })
}

export default addCircleDemo
