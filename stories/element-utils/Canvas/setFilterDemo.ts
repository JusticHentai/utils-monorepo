import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const setFilterDemo = async (canvas: Canvas) => {
  canvas.clear()

  // 原图
  await canvas.addImage({
    url: demoImg,
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  })
  canvas.fillText({ text: '原图', x: 30, y: 95, fontSize: 10, color: '#666' })

  // 模糊
  canvas.setFilter(Canvas.filters.blur(3))
  await canvas.addImage({
    url: demoImg,
    x: 110,
    y: 10,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '模糊', x: 130, y: 95, fontSize: 10, color: '#666' })

  // 灰度
  canvas.setFilter(Canvas.filters.grayscale(100))
  await canvas.addImage({
    url: demoImg,
    x: 210,
    y: 10,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '灰度', x: 230, y: 95, fontSize: 10, color: '#666' })

  // 棕褐色
  canvas.setFilter(Canvas.filters.sepia(100))
  await canvas.addImage({
    url: demoImg,
    x: 310,
    y: 10,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '棕褐', x: 330, y: 95, fontSize: 10, color: '#666' })

  // 亮度
  canvas.setFilter(Canvas.filters.brightness(150))
  await canvas.addImage({
    url: demoImg,
    x: 10,
    y: 120,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '亮度+', x: 30, y: 205, fontSize: 10, color: '#666' })

  // 对比度
  canvas.setFilter(Canvas.filters.contrast(200))
  await canvas.addImage({
    url: demoImg,
    x: 110,
    y: 120,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '对比度', x: 125, y: 205, fontSize: 10, color: '#666' })

  // 反色
  canvas.setFilter(Canvas.filters.invert(100))
  await canvas.addImage({
    url: demoImg,
    x: 210,
    y: 120,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '反色', x: 230, y: 205, fontSize: 10, color: '#666' })

  // 色相旋转
  canvas.setFilter(Canvas.filters.hueRotate(180))
  await canvas.addImage({
    url: demoImg,
    x: 310,
    y: 120,
    width: 80,
    height: 80,
  })
  canvas.clearFilter()
  canvas.fillText({ text: '色相', x: 330, y: 205, fontSize: 10, color: '#666' })
}

export default setFilterDemo
