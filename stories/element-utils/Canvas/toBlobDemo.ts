import Canvas from '../../../packages/element-utils/src/Canvas'

const toBlobDemo = async (canvas: Canvas) => {
  canvas.clear()

  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#2ecc71' })
  canvas.addText({
    text: 'toBlob 导出示例',
    x: 100,
    y: 130,
    width: 200,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
  })

  // 导出 Blob
  const blob = await canvas.toBlob({ type: 'image/png' })
  console.log('Blob:', blob)
  alert(`Blob 大小: ${blob?.size} bytes`)
}

export default toBlobDemo
