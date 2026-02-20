import Canvas from '../../../packages/element-utils/src/Canvas'

const simpleTextDemo = (canvas: Canvas) => {
  canvas.clear()

  // fillText 示例
  canvas.fillText({
    text: 'fillText 填充文本',
    x: 20,
    y: 30,
    fontSize: 20,
    color: '#3498db',
    fontWeight: 'bold',
  })

  canvas.fillText({
    text: '不同字体大小',
    x: 20,
    y: 70,
    fontSize: 14,
    color: '#666',
  })

  canvas.fillText({
    text: '限制最大宽度的长文本会被压缩...',
    x: 20,
    y: 100,
    fontSize: 14,
    color: '#333',
    maxWidth: 150,
  })

  // strokeText 示例
  canvas.strokeText({
    text: 'strokeText',
    x: 20,
    y: 150,
    fontSize: 30,
    color: '#e74c3c',
    lineWidth: 2,
  })

  // 不同对齐方式
  const y = 200
  canvas.addLine({
    startX: 200,
    startY: y - 20,
    endX: 200,
    endY: y + 50,
    strokeColor: '#ddd',
    lineWidth: 1,
  })

  canvas.fillText({
    text: 'left',
    x: 200,
    y: y,
    fontSize: 14,
    color: '#9b59b6',
    textAlign: 'left',
  })

  canvas.fillText({
    text: 'center',
    x: 200,
    y: y + 20,
    fontSize: 14,
    color: '#9b59b6',
    textAlign: 'center',
  })

  canvas.fillText({
    text: 'right',
    x: 200,
    y: y + 40,
    fontSize: 14,
    color: '#9b59b6',
    textAlign: 'right',
  })

  // 描边+填充组合
  canvas.strokeText({
    text: 'OUTLINE',
    x: 250,
    y: 100,
    fontSize: 36,
    color: '#2ecc71',
    lineWidth: 3,
  })
  canvas.fillText({
    text: 'OUTLINE',
    x: 250,
    y: 100,
    fontSize: 36,
    color: '#fff',
  })
}

export default simpleTextDemo
