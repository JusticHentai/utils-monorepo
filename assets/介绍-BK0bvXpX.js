import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as a}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const addImageDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 整图绘制
  await canvas.addImage({ url: demoImg, x: 20, y: 20, width: 100, height: 100 })

  // 裁剪绘制：从源图 (50,50) 裁剪 200x200 区域
  await canvas.addImage({
    url: demoImg,
    x: 140,
    y: 20,
    width: 100,
    height: 100,
    sx: 50,
    sy: 50,
    sWidth: 200,
    sHeight: 200,
  })

  // 裁剪绘制：从源图左上角裁剪 150x150 区域
  await canvas.addImage({
    url: demoImg,
    x: 260,
    y: 20,
    width: 100,
    height: 100,
    sx: 0,
    sy: 0,
    sWidth: 150,
    sHeight: 150,
  })

  // 添加说明文字
  canvas.fillText({ text: '整图绘制', x: 35, y: 135, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '裁剪中心', x: 155, y: 135, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '裁剪左上', x: 275, y: 135, fontSize: 12, color: '#666' })
}

export default addImageDemo
`,c=`import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const addClipImageDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 圆形裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 30,
    y: 60,
    width: 80,
    height: 80,
    clipType: 'circle',
  })

  // 圆角矩形裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 140,
    y: 60,
    width: 100,
    height: 120,
    clipType: 'roundRect',
    radius: 15,
  })

  // 四角独立圆角裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 270,
    y: 60,
    width: 100,
    height: 120,
    clipType: 'roundRect',
    radius: [20, 5, 20, 5],
  })

  // 添加说明文字
  canvas.addText({
    text: '圆形裁剪',
    x: 30,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
  canvas.addText({
    text: '圆角裁剪',
    x: 150,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
  canvas.addText({
    text: '独立圆角',
    x: 280,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
}

export default addClipImageDemo
`,l=`import Canvas from '../../../packages/element-utils/src/Canvas'
import loadImage from '../../../packages/element-utils/src/loadImage'
import demoImg from '../../.assets/demo.png'

const drawPatternDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 使用 demo 图片作为图案
  const [img] = await loadImage(demoImg)
  if (!img) return

  canvas.drawPattern({
    image: img,
    repetition: 'repeat',
    x: 20,
    y: 20,
    width: 300,
    height: 200,
  })
}

export default drawPatternDemo
`,r=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addRectDemo = (canvas: Canvas) => {
  canvas.clear()
  // 填充矩形
  canvas.addRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    fillColor: '#3498db',
  })
  // 描边矩形
  canvas.addRect({
    x: 200,
    y: 50,
    width: 120,
    height: 80,
    strokeColor: '#e74c3c',
    lineWidth: 3,
  })
  // 填充+描边矩形
  canvas.addRect({
    x: 50,
    y: 160,
    width: 120,
    height: 80,
    fillColor: '#2ecc71',
    strokeColor: '#27ae60',
    lineWidth: 2,
  })
}

export default addRectDemo
`,o=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addRoundRectDemo = (canvas: Canvas) => {
  canvas.clear()
  // 统一圆角
  canvas.addRoundRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    radius: 15,
    fillColor: '#9b59b6',
  })
  // 四角独立圆角
  canvas.addRoundRect({
    x: 200,
    y: 50,
    width: 120,
    height: 80,
    radius: [30, 10, 30, 10],
    fillColor: '#f39c12',
  })
  // 描边圆角矩形
  canvas.addRoundRect({
    x: 50,
    y: 160,
    width: 120,
    height: 80,
    radius: 20,
    strokeColor: '#1abc9c',
    lineWidth: 3,
  })
}

export default addRoundRectDemo
`,h=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,x=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addLineDemo = (canvas: Canvas) => {
  canvas.clear()
  // 实线
  canvas.addLine({
    x1: 50,
    y1: 50,
    x2: 350,
    y2: 50,
    color: '#3498db',
    lineWidth: 2,
  })
  // 粗线（圆头）
  canvas.addLine({
    x1: 50,
    y1: 100,
    x2: 350,
    y2: 100,
    color: '#e74c3c',
    lineWidth: 5,
    lineCap: 'round',
  })
  // 虚线
  canvas.addLine({
    x1: 50,
    y1: 150,
    x2: 350,
    y2: 150,
    color: '#2ecc71',
    lineWidth: 2,
    lineDash: [10, 5],
  })
  // 点线
  canvas.addLine({
    x1: 50,
    y1: 200,
    x2: 350,
    y2: 200,
    color: '#9b59b6',
    lineWidth: 3,
    lineDash: [2, 8],
  })
  // 斜线
  canvas.addLine({
    x1: 50,
    y1: 250,
    x2: 350,
    y2: 220,
    color: '#f39c12',
    lineWidth: 2,
  })
}

export default addLineDemo
`,j=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addArcDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 弧线（描边）
  canvas.addArc({
    x: 80,
    y: 100,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI,
    strokeColor: '#667eea',
    lineWidth: 3,
  })

  // 扇形（填充）
  canvas.addArc({
    x: 200,
    y: 100,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI * 1.5,
    fillColor: '#f093fb',
    closePath: true,
  })

  // 扇形（填充+描边）
  canvas.addArc({
    x: 320,
    y: 100,
    radius: 50,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI / 4,
    fillColor: '#4facfe',
    strokeColor: '#00f2fe',
    lineWidth: 2,
    closePath: true,
  })

  // 进度条效果
  canvas.addArc({
    x: 200,
    y: 230,
    radius: 40,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI,
    strokeColor: '#e0e0e0',
    lineWidth: 8,
  })
  canvas.addArc({
    x: 200,
    y: 230,
    radius: 40,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI * 0.25,
    strokeColor: '#667eea',
    lineWidth: 8,
  })
}

export default addArcDemo
`,f=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addEllipseDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础椭圆（填充）
  canvas.addEllipse({
    x: 80,
    y: 100,
    radiusX: 60,
    radiusY: 40,
    fillColor: '#667eea',
  })

  // 椭圆（描边）
  canvas.addEllipse({
    x: 200,
    y: 100,
    radiusX: 50,
    radiusY: 30,
    strokeColor: '#f093fb',
    lineWidth: 3,
  })

  // 旋转椭圆
  canvas.addEllipse({
    x: 320,
    y: 100,
    radiusX: 50,
    radiusY: 25,
    rotation: Math.PI / 4,
    fillColor: '#4facfe',
    strokeColor: '#00f2fe',
    lineWidth: 2,
  })

  // 组合效果
  canvas.addEllipse({
    x: 200,
    y: 220,
    radiusX: 80,
    radiusY: 50,
    fillColor: 'rgba(102, 126, 234, 0.3)',
    strokeColor: '#667eea',
    lineWidth: 2,
  })
  canvas.addEllipse({
    x: 200,
    y: 220,
    radiusX: 50,
    radiusY: 30,
    fillColor: 'rgba(240, 147, 251, 0.5)',
  })
}

export default addEllipseDemo
`,v=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,p=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addPathDemo = (canvas: Canvas) => {
  canvas.clear()

  // 绘制三角形
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 50, y: 50 },
      { type: 'lineTo', x: 150, y: 50 },
      { type: 'lineTo', x: 100, y: 130 },
      { type: 'closePath' },
    ],
    fillColor: '#3498db',
    strokeColor: '#2980b9',
    lineWidth: 2,
  })

  // 绘制箭头
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 200, y: 90 },
      { type: 'lineTo', x: 280, y: 90 },
      { type: 'lineTo', x: 260, y: 70 },
      { type: 'moveTo', x: 280, y: 90 },
      { type: 'lineTo', x: 260, y: 110 },
    ],
    strokeColor: '#e74c3c',
    lineWidth: 3,
  })

  // 绘制星形
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 350, y: 50 },
      { type: 'lineTo', x: 360, y: 80 },
      { type: 'lineTo', x: 390, y: 80 },
      { type: 'lineTo', x: 365, y: 100 },
      { type: 'lineTo', x: 375, y: 130 },
      { type: 'lineTo', x: 350, y: 110 },
      { type: 'lineTo', x: 325, y: 130 },
      { type: 'lineTo', x: 335, y: 100 },
      { type: 'lineTo', x: 310, y: 80 },
      { type: 'lineTo', x: 340, y: 80 },
      { type: 'closePath' },
    ],
    fillColor: '#f1c40f',
    strokeColor: '#f39c12',
    lineWidth: 2,
  })
}

export default addPathDemo
`,g=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addTextDemo = (canvas: Canvas) => {
  canvas.clear()
  // 标题文字
  canvas.addText({
    text: 'Hello Canvas!',
    x: 50,
    y: 50,
    width: 300,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 24,
    fontWeight: 700,
    color: '#333',
  })
  // 自动换行文字
  canvas.addText({
    text: '这是一段自动换行的中文文本，当文字超过设定宽度时会自动换行显示。',
    x: 50,
    y: 100,
    width: 300,
    lineHeight: 24,
    font: 'Arial',
    fontSize: 16,
    fontWeight: 400,
    color: '#666',
  })
}

export default addTextDemo
`,m=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addBezierDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础贝塞尔曲线
  canvas.addBezier({
    x1: 50,
    y1: 150,
    cp1x: 100,
    cp1y: 50,
    cp2x: 200,
    cp2y: 250,
    x2: 250,
    y2: 150,
    color: '#667eea',
    lineWidth: 3,
  })

  // S 形曲线
  canvas.addBezier({
    x1: 280,
    y1: 80,
    cp1x: 350,
    cp1y: 80,
    cp2x: 280,
    cp2y: 220,
    x2: 350,
    y2: 220,
    color: '#f093fb',
    lineWidth: 3,
    lineCap: 'round',
  })

  // 绘制控制点辅助线（帮助理解）
  // 第一条曲线的控制点
  canvas.addCircle({ x: 50, y: 150, radius: 4, fillColor: '#667eea' })
  canvas.addCircle({ x: 100, y: 50, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 200, y: 250, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 250, y: 150, radius: 4, fillColor: '#667eea' })

  canvas.addLine({ x1: 50, y1: 150, x2: 100, y2: 50, color: '#ddd', lineWidth: 1 })
  canvas.addLine({ x1: 250, y1: 150, x2: 200, y2: 250, color: '#ddd', lineWidth: 1 })
}

export default addBezierDemo
`,y=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addQuadraticDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础二次曲线
  canvas.addQuadratic({
    x1: 50,
    y1: 200,
    cpx: 150,
    cpy: 50,
    x2: 250,
    y2: 200,
    color: '#667eea',
    lineWidth: 3,
  })

  // 波浪效果
  canvas.addQuadratic({
    x1: 50,
    y1: 250,
    cpx: 100,
    cpy: 220,
    x2: 150,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })
  canvas.addQuadratic({
    x1: 150,
    y1: 250,
    cpx: 200,
    cpy: 280,
    x2: 250,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })
  canvas.addQuadratic({
    x1: 250,
    y1: 250,
    cpx: 300,
    cpy: 220,
    x2: 350,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })

  // 绘制控制点辅助（帮助理解）
  canvas.addCircle({ x: 50, y: 200, radius: 4, fillColor: '#667eea' })
  canvas.addCircle({ x: 150, y: 50, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 250, y: 200, radius: 4, fillColor: '#667eea' })

  canvas.addLine({ x1: 50, y1: 200, x2: 150, y2: 50, color: '#ddd', lineWidth: 1 })
  canvas.addLine({ x1: 250, y1: 200, x2: 150, y2: 50, color: '#ddd', lineWidth: 1 })
}

export default addQuadraticDemo
`,C=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addLinearGradientDemo = (canvas: Canvas) => {
  const ctx = canvas.getContext()
  canvas.clear()

  // 水平渐变
  const gradient1 = canvas.addLinearGradient({
    x1: 50,
    y1: 0,
    x2: 350,
    y2: 0,
    colorStops: [
      { offset: 0, color: '#667eea' },
      { offset: 1, color: '#764ba2' },
    ],
  })
  ctx.fillStyle = gradient1
  ctx.fillRect(50, 30, 300, 80)

  // 垂直渐变
  const gradient2 = canvas.addLinearGradient({
    x1: 0,
    y1: 130,
    x2: 0,
    y2: 210,
    colorStops: [
      { offset: 0, color: '#f093fb' },
      { offset: 1, color: '#f5576c' },
    ],
  })
  ctx.fillStyle = gradient2
  ctx.fillRect(50, 130, 300, 80)

  // 多色渐变
  const gradient3 = canvas.addLinearGradient({
    x1: 50,
    y1: 0,
    x2: 350,
    y2: 0,
    colorStops: [
      { offset: 0, color: '#ff6b6b' },
      { offset: 0.5, color: '#feca57' },
      { offset: 1, color: '#48dbfb' },
    ],
  })
  ctx.fillStyle = gradient3
  ctx.fillRect(50, 230, 300, 50)
}

export default addLinearGradientDemo
`,u=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addRadialGradientDemo = (canvas: Canvas) => {
  const ctx = canvas.getContext()
  canvas.clear()

  // 中心渐变
  const gradient1 = canvas.addRadialGradient({
    x1: 150,
    y1: 100,
    r1: 0,
    x2: 150,
    y2: 100,
    r2: 80,
    colorStops: [
      { offset: 0, color: '#fff' },
      { offset: 1, color: '#3498db' },
    ],
  })
  ctx.fillStyle = gradient1
  ctx.beginPath()
  ctx.arc(150, 100, 80, 0, Math.PI * 2)
  ctx.fill()

  // 偏移渐变（立体效果）
  const gradient2 = canvas.addRadialGradient({
    x1: 280,
    y1: 80,
    r1: 10,
    x2: 300,
    y2: 100,
    r2: 80,
    colorStops: [
      { offset: 0, color: '#fff' },
      { offset: 0.5, color: '#e74c3c' },
      { offset: 1, color: '#c0392b' },
    ],
  })
  ctx.fillStyle = gradient2
  ctx.beginPath()
  ctx.arc(300, 100, 80, 0, Math.PI * 2)
  ctx.fill()

  // 矩形径向渐变
  const gradient3 = canvas.addRadialGradient({
    x1: 200,
    y1: 240,
    r1: 0,
    x2: 200,
    y2: 240,
    r2: 150,
    colorStops: [
      { offset: 0, color: '#f39c12' },
      { offset: 1, color: '#2ecc71' },
    ],
  })
  ctx.fillStyle = gradient3
  ctx.fillRect(50, 200, 300, 80)
}

export default addRadialGradientDemo
`,b=`import Canvas from '../../../packages/element-utils/src/Canvas'

const addConicGradientDemo = (canvas: Canvas) => {
  canvas.clear()

  // 彩虹锥形渐变
  canvas.addConicGradient({
    startAngle: 0,
    x: 100,
    y: 100,
    colorStops: [
      { offset: 0, color: '#ff0000' },
      { offset: 0.17, color: '#ff8000' },
      { offset: 0.33, color: '#ffff00' },
      { offset: 0.5, color: '#00ff00' },
      { offset: 0.67, color: '#0080ff' },
      { offset: 0.83, color: '#8000ff' },
      { offset: 1, color: '#ff0000' },
    ],
    fillX: 20,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })

  // 饼图效果
  canvas.addConicGradient({
    startAngle: -Math.PI / 2,
    x: 300,
    y: 100,
    colorStops: [
      { offset: 0, color: '#3498db' },
      { offset: 0.3, color: '#3498db' },
      { offset: 0.3, color: '#e74c3c' },
      { offset: 0.55, color: '#e74c3c' },
      { offset: 0.55, color: '#2ecc71' },
      { offset: 0.8, color: '#2ecc71' },
      { offset: 0.8, color: '#f1c40f' },
      { offset: 1, color: '#f1c40f' },
    ],
    fillX: 220,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })

  // 添加遮罩使其成为圆形
  canvas.save()
  canvas.clipCircle({ x: 300, y: 100, radius: 70 })
  canvas.addConicGradient({
    startAngle: -Math.PI / 2,
    x: 300,
    y: 100,
    colorStops: [
      { offset: 0, color: '#3498db' },
      { offset: 0.3, color: '#3498db' },
      { offset: 0.3, color: '#e74c3c' },
      { offset: 0.55, color: '#e74c3c' },
      { offset: 0.55, color: '#2ecc71' },
      { offset: 0.8, color: '#2ecc71' },
      { offset: 0.8, color: '#f1c40f' },
      { offset: 1, color: '#f1c40f' },
    ],
    fillX: 220,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })
  canvas.restore()

  canvas.fillText({ text: '彩虹渐变', x: 60, y: 200, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '饼图效果', x: 260, y: 200, fontSize: 12, color: '#666' })
}

export default addConicGradientDemo
`,w=`import Canvas from '../../../packages/element-utils/src/Canvas'

const setShadowDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 设置阴影
  canvas.setShadow({
    color: 'rgba(0, 0, 0, 0.3)',
    blur: 15,
    offsetX: 5,
    offsetY: 5,
  })

  // 带阴影的圆角矩形
  canvas.addRoundRect({
    x: 50,
    y: 50,
    width: 120,
    height: 80,
    radius: 10,
    fillColor: '#fff',
  })

  // 带阴影的圆形
  canvas.addCircle({
    x: 280,
    y: 90,
    radius: 50,
    fillColor: '#fff',
  })

  // 清除阴影
  canvas.clearShadow()

  // 无阴影的矩形
  canvas.addRect({
    x: 50,
    y: 180,
    width: 300,
    height: 60,
    fillColor: '#3498db',
  })

  canvas.addText({
    text: '上方有阴影，下方无阴影',
    x: 100,
    y: 265,
    width: 200,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    color: '#666',
  })
}

export default setShadowDemo
`,D=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,T=`import Canvas from '../../../packages/element-utils/src/Canvas'

const setCompositeOperationDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // source-over (默认)
  canvas.setCompositeOperation('source-over')
  canvas.addCircle({ x: 60, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.addCircle({ x: 80, y: 80, radius: 30, fillColor: '#f093fb' })

  // multiply (正片叠底)
  canvas.setCompositeOperation('multiply')
  canvas.addCircle({ x: 160, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.addCircle({ x: 180, y: 80, radius: 30, fillColor: '#f093fb' })

  // screen (滤色)
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 260, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.setCompositeOperation('screen')
  canvas.addCircle({ x: 280, y: 80, radius: 30, fillColor: '#f093fb' })

  // difference (差值)
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 360, y: 80, radius: 30, fillColor: '#667eea' })
  canvas.setCompositeOperation('difference')
  canvas.addCircle({ x: 380, y: 80, radius: 30, fillColor: '#f093fb' })

  // destination-out (擦除效果)
  canvas.resetCompositeOperation()
  canvas.addRect({ x: 40, y: 160, width: 80, height: 80, fillColor: '#4facfe' })
  canvas.setCompositeOperation('destination-out')
  canvas.addCircle({ x: 80, y: 200, radius: 25, fillColor: '#000' })

  // xor
  canvas.resetCompositeOperation()
  canvas.addCircle({ x: 180, y: 200, radius: 35, fillColor: '#667eea' })
  canvas.setCompositeOperation('xor')
  canvas.addCircle({ x: 210, y: 200, radius: 35, fillColor: '#f093fb' })

  // overlay
  canvas.resetCompositeOperation()
  canvas.addRect({ x: 280, y: 160, width: 80, height: 80, fillColor: '#667eea' })
  canvas.setCompositeOperation('overlay')
  canvas.addRect({ x: 300, y: 180, width: 80, height: 80, fillColor: '#f093fb' })

  canvas.resetCompositeOperation()
}

export default setCompositeOperationDemo
`,S=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,I=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,R=`import Canvas from '../../../packages/element-utils/src/Canvas'
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
`,W=`import Canvas from '../../../packages/element-utils/src/Canvas'
import loadImage from '../../../packages/element-utils/src/loadImage'
import demoImg from '../../.assets/demo.png'

const clipDemo = async (canvas: Canvas) => {
  canvas.clear()

  const [img] = await loadImage(demoImg)
  if (!img) return

  const ctx = canvas.ctx

  // 矩形裁剪
  canvas.save()
  canvas.clipRect({ x: 20, y: 20, width: 100, height: 100 })
  ctx.drawImage(img, 20, 20, 150, 150)
  canvas.restore()

  // 圆形裁剪
  canvas.save()
  canvas.clipCircle({ x: 220, y: 70, radius: 50 })
  ctx.drawImage(img, 170, 20, 100, 100)
  canvas.restore()

  // 自定义路径裁剪（星形）
  canvas.save()
  const starPath = new Path2D()
  const cx = 370,
    cy = 70,
    r = 50
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)
    if (i === 0) starPath.moveTo(x, y)
    else starPath.lineTo(x, y)
  }
  starPath.closePath()
  canvas.clipPath({ path: starPath })
  ctx.drawImage(img, 320, 20, 100, 100)
  canvas.restore()

  // 添加标签
  canvas.fillText({
    text: '矩形裁剪',
    x: 40,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
  canvas.fillText({
    text: '圆形裁剪',
    x: 190,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
  canvas.fillText({
    text: '星形裁剪',
    x: 340,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
}

export default clipDemo
`,k=`import { action } from 'storybook/actions'
import Canvas from '../../../packages/element-utils/src/Canvas'

const hitTestDemo = (canvas: Canvas) => {
  canvas.clear()

  const ctx = canvas.ctx

  // 圆形路径
  ctx.beginPath()
  ctx.arc(100, 100, 50, 0, Math.PI * 2)
  ctx.fillStyle = '#3498db'
  ctx.fill()
  ctx.strokeStyle = '#2980b9'
  ctx.lineWidth = 3
  ctx.stroke()

  // 矩形路径
  ctx.beginPath()
  ctx.rect(200, 50, 100, 100)
  ctx.fillStyle = '#e74c3c'
  ctx.fill()
  ctx.strokeStyle = '#c0392b'
  ctx.lineWidth = 3
  ctx.stroke()

  // 测试点
  const testPoints = [
    { x: 100, y: 100, label: '圆心' },
    { x: 150, y: 100, label: '圆边缘' },
    { x: 180, y: 100, label: '圆外' },
    { x: 250, y: 100, label: '矩形内' },
    { x: 200, y: 100, label: '矩形边' },
  ]

  const results: string[] = []

  // 绘制测试点和结果
  testPoints.forEach((point, i) => {
    // 绘制点
    ctx.beginPath()
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
    ctx.fillStyle = '#2ecc71'
    ctx.fill()

    // 检测结果
    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, Math.PI * 2)
    const inCircle = ctx.isPointInPath(point.x, point.y)
    const onCircleStroke = ctx.isPointInStroke(point.x, point.y)

    ctx.beginPath()
    ctx.rect(200, 50, 100, 100)
    const inRect = ctx.isPointInPath(point.x, point.y)

    const result = inCircle ? '圆内' : onCircleStroke ? '圆边' : inRect ? '矩形内' : '外部'
    results.push(\`\${point.label}(\${point.x},\${point.y}): \${result}\`)

    // 显示结果
    canvas.fillText({
      text: \`\${point.label}: \${result}\`,
      x: 20,
      y: 180 + i * 20,
      fontSize: 12,
      color: '#333',
    })
  })

  action('hitTest')(...results)
}

export default hitTestDemo
`,z=`import { action } from 'storybook/actions'
import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const imageDataDemo = async (canvas: Canvas) => {
  canvas.clear()

  // 绘制原始图片
  await canvas.addImage({ url: demoImg, x: 20, y: 20, width: 100, height: 100 })
  canvas.fillText({ text: '原图', x: 50, y: 130, fontSize: 12, color: '#666' })

  // 获取像素数据
  const imageData = canvas.getImageData({ x: 20, y: 20, width: 100, height: 100 })
  action('getImageData')(\`获取 100x100 区域，共 \${imageData.data.length} 字节像素数据\`)

  // 复制到另一个位置
  canvas.putImageData({ imageData, x: 140, y: 20 })
  canvas.fillText({ text: '复制', x: 170, y: 130, fontSize: 12, color: '#666' })

  // 反色效果
  const invertedData = canvas.getImageData({ x: 20, y: 20, width: 100, height: 100 })
  const data = invertedData.data
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]         // R
    data[i + 1] = 255 - data[i + 1] // G
    data[i + 2] = 255 - data[i + 2] // B
  }
  canvas.putImageData({ imageData: invertedData, x: 260, y: 20 })
  canvas.fillText({ text: '反色', x: 290, y: 130, fontSize: 12, color: '#666' })

  // 灰度效果
  const grayData = canvas.getImageData({ x: 140, y: 20, width: 100, height: 100 })
  const gData = grayData.data
  for (let i = 0; i < gData.length; i += 4) {
    const avg = (gData[i] + gData[i + 1] + gData[i + 2]) / 3
    gData[i] = avg
    gData[i + 1] = avg
    gData[i + 2] = avg
  }
  canvas.putImageData({ imageData: grayData, x: 380, y: 20 })
  canvas.fillText({ text: '灰度', x: 410, y: 130, fontSize: 12, color: '#666' })
}

export default imageDataDemo
`,P=`import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const imageBitmapDemo = async (canvas: Canvas) => {
  canvas.clear()

  canvas.fillText({
    text: '加载 ImageBitmap...',
    x: 20,
    y: 20,
    fontSize: 14,
    color: '#666',
  })

  try {
    // 从 URL 加载 ImageBitmap
    const bitmap = await Canvas.loadImageBitmap(demoImg)

    canvas.clear()

    // 原始尺寸
    canvas.drawImageBitmap({
      bitmap,
      dx: 20,
      dy: 20,
    })
    canvas.fillText({ text: '原始尺寸', x: 20, y: 130, fontSize: 10, color: '#666' })

    // 指定尺寸
    canvas.drawImageBitmap({
      bitmap,
      dx: 150,
      dy: 20,
      dWidth: 80,
      dHeight: 80,
    })
    canvas.fillText({ text: '80x80', x: 170, y: 110, fontSize: 10, color: '#666' })

    // 使用 createImageBitmap 裁剪
    const croppedBitmap = await Canvas.createImageBitmap({
      source: bitmap,
      sx: 0,
      sy: 0,
      sw: bitmap.width / 2,
      sh: bitmap.height / 2,
    })

    canvas.drawImageBitmap({
      bitmap: croppedBitmap,
      dx: 260,
      dy: 20,
      dWidth: 100,
      dHeight: 100,
    })
    canvas.fillText({ text: '裁剪后', x: 280, y: 130, fontSize: 10, color: '#666' })

    // 释放资源
    bitmap.close()
    croppedBitmap.close()

    canvas.fillText({
      text: 'ImageBitmap 比 Image 更高效，适合频繁绑制',
      x: 20,
      y: 170,
      fontSize: 12,
      color: '#999',
    })
  } catch (error) {
    canvas.fillText({
      text: '加载失败: ' + String(error),
      x: 20,
      y: 50,
      fontSize: 12,
      color: '#e74c3c',
    })
  }
}

export default imageBitmapDemo
`,A=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,L=`import { action } from 'storybook/actions'
import Canvas from '../../../packages/element-utils/src/Canvas'

const measureTextDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  const text1 = 'Hello Canvas!'
  const text2 = '你好，Canvas！'
  const text3 = 'Measure Text Width'

  // 测量文本宽度
  const result1 = canvas.measureText({ text: text1, fontSize: 20, font: 'Arial' })
  const result2 = canvas.measureText({ text: text2, fontSize: 20, font: 'Arial' })
  const result3 = canvas.measureText({ text: text3, fontSize: 16, font: 'Arial', fontWeight: 'bold' })

  action('measureText')(
    \`"\${text1}" width: \${result1.width.toFixed(2)}px\`,
    \`"\${text2}" width: \${result2.width.toFixed(2)}px\`,
    \`"\${text3}" width: \${result3.width.toFixed(2)}px\`
  )

  // 绘制文本和对应的宽度标记
  const y1 = 60
  canvas.addText({
    text: text1,
    x: 50,
    y: y1,
    width: 300,
    fontSize: 20,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 24,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y1 + 5, x2: 50 + result1.width, y2: y1 + 5, color: '#667eea', lineWidth: 2 })

  const y2 = 120
  canvas.addText({
    text: text2,
    x: 50,
    y: y2,
    width: 300,
    fontSize: 20,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 24,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y2 + 5, x2: 50 + result2.width, y2: y2 + 5, color: '#f093fb', lineWidth: 2 })

  const y3 = 180
  canvas.addText({
    text: text3,
    x: 50,
    y: y3,
    width: 300,
    fontSize: 16,
    font: 'Arial',
    fontWeight: 700,
    lineHeight: 20,
    color: '#333',
  })
  canvas.addLine({ x1: 50, y1: y3 + 5, x2: 50 + result3.width, y2: y3 + 5, color: '#4facfe', lineWidth: 2 })

  // 居中文本示例
  const centerText = 'Centered Text'
  const centerResult = canvas.measureText({ text: centerText, fontSize: 18, font: 'Arial' })
  const centerX = (400 - centerResult.width) / 2
  canvas.addText({
    text: centerText,
    x: centerX,
    y: 250,
    width: 200,
    fontSize: 18,
    font: 'Arial',
    fontWeight: 400,
    lineHeight: 22,
    color: '#667eea',
  })
}

export default measureTextDemo
`,B=`import Canvas from '../../../packages/element-utils/src/Canvas'

const clearDemo = (canvas: Canvas) => {
  // 先绘制一些内容
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#3498db' })
  canvas.addCircle({ x: 200, y: 150, radius: 80, fillColor: '#e74c3c' })

  // 1秒后清空
  setTimeout(() => {
    canvas.clear()
    canvas.addText({
      text: '画布已清空',
      x: 130,
      y: 140,
      width: 200,
      lineHeight: 30,
      font: 'Arial',
      fontSize: 20,
      fontWeight: 700,
      color: '#333',
    })
  }, 1000)
}

export default clearDemo
`,X=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,G=`import Canvas from '../../../packages/element-utils/src/Canvas'

const translateDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始位置
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#3498db' })
  canvas.addText({
    text: '原始',
    x: 30,
    y: 75,
    width: 50,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })

  // 平移后
  canvas.save()
  canvas.translate({ x: 100, y: 50 })
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#e74c3c' })
  canvas.addText({
    text: '平移(100,50)',
    x: 10,
    y: 75,
    width: 80,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
  canvas.restore()

  // 多次平移
  canvas.save()
  canvas.translate({ x: 250, y: 100 })
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#2ecc71' })
  canvas.addText({
    text: '平移(250,100)',
    x: 5,
    y: 75,
    width: 90,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
  canvas.restore()
}

export default translateDemo
`,Y=`import Canvas from '../../../packages/element-utils/src/Canvas'

const rotateDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始（0度）
  canvas.addRect({ x: 50, y: 100, width: 60, height: 40, fillColor: '#3498db' })

  // 旋转 30 度
  canvas.save()
  canvas.translate({ x: 180, y: 120 })
  canvas.rotate({ angle: Canvas.degToRad(30) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#e74c3c' })
  canvas.restore()

  // 旋转 45 度
  canvas.save()
  canvas.translate({ x: 300, y: 120 })
  canvas.rotate({ angle: Canvas.degToRad(45) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#2ecc71' })
  canvas.restore()

  // 旋转 90 度
  canvas.save()
  canvas.translate({ x: 180, y: 230 })
  canvas.rotate({ angle: Canvas.degToRad(90) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#9b59b6' })
  canvas.restore()

  canvas.addText({
    text: '0°       30°      45°      90°',
    x: 40,
    y: 270,
    width: 350,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
  })
}

export default rotateDemo
`,H=`import Canvas from '../../../packages/element-utils/src/Canvas'

const scaleDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始 1x
  canvas.save()
  canvas.translate({ x: 60, y: 80 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#3498db' })
  canvas.restore()

  // 放大 1.5 倍
  canvas.save()
  canvas.translate({ x: 160, y: 80 })
  canvas.scale({ scaleX: 1.5, scaleY: 1.5 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#e74c3c' })
  canvas.restore()

  // 缩小 0.5 倍
  canvas.save()
  canvas.translate({ x: 280, y: 80 })
  canvas.scale({ scaleX: 0.5, scaleY: 0.5 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#2ecc71' })
  canvas.restore()

  // 水平拉伸 2x
  canvas.save()
  canvas.translate({ x: 100, y: 200 })
  canvas.scale({ scaleX: 2, scaleY: 1 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#9b59b6' })
  canvas.restore()

  // 垂直拉伸 2x
  canvas.save()
  canvas.translate({ x: 280, y: 200 })
  canvas.scale({ scaleX: 1, scaleY: 2 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#f39c12' })
  canvas.restore()

  canvas.addText({
    text: '1x      1.5x     0.5x     2x横    1x纵x2',
    x: 20,
    y: 270,
    width: 380,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
}

export default scaleDemo
`,M=`import Canvas from '../../../packages/element-utils/src/Canvas'

const setTransformDemo = (canvas: Canvas) => {
  canvas.clear()

  // 原始矩形
  canvas.addRect({
    x: 20,
    y: 20,
    width: 60,
    height: 40,
    fillColor: '#3498db',
  })
  canvas.fillText({ text: '原始', x: 30, y: 70, fontSize: 10, color: '#666' })

  // 使用 setTransform 设置缩放
  canvas.setTransform({ a: 1.5, b: 0, c: 0, d: 1.5, e: 120, f: 10 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#e74c3c',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '缩放 1.5x', x: 120, y: 70, fontSize: 10, color: '#666' })

  // 使用 transform 叠加变换（倾斜）
  canvas.setTransform({ a: 1, b: 0.3, c: 0, d: 1, e: 250, f: 20 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#2ecc71',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '倾斜', x: 260, y: 70, fontSize: 10, color: '#666' })

  // 组合变换
  canvas.setTransform({ a: 1.2, b: 0.2, c: -0.2, d: 1.2, e: 60, f: 130 })
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#9b59b6',
  })
  canvas.resetTransform()
  canvas.fillText({ text: '组合变换', x: 50, y: 200, fontSize: 10, color: '#666' })

  // 获取并显示当前变换
  canvas.setTransform({ a: 2, b: 0, c: 0, d: 2, e: 180, f: 100 })
  const matrix = canvas.getTransform()
  canvas.addRect({
    x: 0,
    y: 0,
    width: 60,
    height: 40,
    fillColor: '#f39c12',
  })
  canvas.resetTransform()
  canvas.fillText({
    text: \`a=\${matrix.a}, d=\${matrix.d}\`,
    x: 180,
    y: 200,
    fontSize: 10,
    color: '#666',
  })
}

export default setTransformDemo
`,O=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
`,F=`import Canvas from '../../../packages/element-utils/src/Canvas'

const createBase64Demo = (canvas: Canvas) => {
  canvas.clear()

  // 绘制渐变背景
  const gradient = canvas.addLinearGradient({
    x1: 0,
    y1: 0,
    x2: 400,
    y2: 300,
    colorStops: [
      { offset: 0, color: '#667eea' },
      { offset: 1, color: '#764ba2' },
    ],
  })
  canvas.getContext().fillStyle = gradient
  canvas.getContext().fillRect(0, 0, 400, 300)

  canvas.addText({
    text: 'createBase64 导出示例',
    x: 80,
    y: 130,
    width: 240,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
  })

  // 导出 Base64
  const base64 = canvas.createBase64()
  console.log('Base64 (前100字符):', base64.slice(0, 100))
  alert('Base64 已输出到控制台')
}

export default createBase64Demo
`,E=`import Canvas from '../../../packages/element-utils/src/Canvas'

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
  alert(\`Blob 大小: \${blob?.size} bytes\`)
}

export default toBlobDemo
`,$=`import Canvas from '../../../packages/element-utils/src/Canvas'

const downloadDemo = async (canvas: Canvas) => {
  canvas.clear()

  // 绘制彩虹渐变背景
  const gradient = canvas.addLinearGradient({
    x1: 0,
    y1: 0,
    x2: 400,
    y2: 300,
    colorStops: [
      { offset: 0, color: '#ff6b6b' },
      { offset: 0.5, color: '#feca57' },
      { offset: 1, color: '#48dbfb' },
    ],
  })
  canvas.getContext().fillStyle = gradient
  canvas.getContext().fillRect(0, 0, 400, 300)

  canvas.addText({
    text: 'Canvas Download Demo',
    x: 70,
    y: 130,
    width: 260,
    lineHeight: 30,
    font: 'Arial',
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
  })

  // 下载图片
  await canvas.download({ filename: 'canvas-demo', type: 'image/png' })
}

export default downloadDemo
`;function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"canvas",children:"Canvas"}),`
`,n.jsx(e.p,{children:"Canvas 是一个简化 Canvas 操作的工具类，提供初始化画布、绑制图形、渐变、变换、导出等常用功能。"}),`
`,n.jsx(e.h2,{id:"构造函数",children:"构造函数"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"el"})}),n.jsx("td",{children:n.jsx("code",{children:"HTMLElement"})}),n.jsx("td",{children:"可选，挂载的 DOM 元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"width"})}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"画布宽度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"height"})}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"画布高度"})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"图像",children:"图像"}),`
`,n.jsx(e.p,{children:"Canvas 提供了多种图像绑绑方式，从简单的图片显示到复杂的图案填充。"}),`
`,n.jsx(e.h3,{id:"addimage",children:"addImage"}),`
`,n.jsx(e.p,{children:"添加图片到画布，支持整图绘制或源图裁剪绘制。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"参数说明"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"url"}),": 图片地址"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"x, y, width, height"}),": 目标位置和尺寸"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sx, sy, sWidth, sHeight"}),": 可选，源图裁剪参数（从源图的哪个区域取图）"]}),`
`]}),`
`,n.jsx(e.p,{children:"裁剪绘制使用 Canvas 的 9 参数 drawImage 形式，可以实现精灵图（Sprite Sheet）动画、图片局部显示等效果。"}),`
`,n.jsx(a,{language:"typescript",children:d}),`
`,n.jsx(e.h3,{id:"addclipimage",children:"addClipImage"}),`
`,n.jsx(e.p,{children:"添加裁剪显示的图片，支持圆形或圆角矩形裁剪效果。"}),`
`,n.jsx(e.p,{children:"常用于：圆形头像、圆角卡片图片等。内部通过设置裁剪区域（clip）实现，不会修改原图。"}),`
`,n.jsx(a,{language:"typescript",children:c}),`
`,n.jsx(e.h3,{id:"drawpattern",children:"drawPattern"}),`
`,n.jsxs(e.p,{children:["绘制图案填充（平铺图像），类似 CSS 的 ",n.jsx(e.code,{children:"background-repeat"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"重复模式"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'repeat'"}),": 水平和垂直方向都重复（默认）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'repeat-x'"}),": 仅水平方向重复"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'repeat-y'"}),": 仅垂直方向重复"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'no-repeat'"}),": 不重复"]}),`
`]}),`
`,n.jsx(e.p,{children:"常用于：纹理背景、网格图案、水印效果等。"}),`
`,n.jsx(a,{language:"typescript",children:l}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"基础图形",children:"基础图形"}),`
`,n.jsx(e.p,{children:"Canvas 提供了丰富的基础图形绑绑能力，支持填充（fill）和描边（stroke）两种模式。"}),`
`,n.jsx(e.h3,{id:"addrect",children:"addRect"}),`
`,n.jsx(e.p,{children:"绘制矩形，支持填充色、描边色和线宽设置。矩形是最基础的图形，也是很多 UI 组件的基础。"}),`
`,n.jsx(a,{language:"typescript",children:r}),`
`,n.jsx(e.h3,{id:"addroundrect",children:"addRoundRect"}),`
`,n.jsx(e.p,{children:"绘制圆角矩形，支持统一圆角或四角独立设置。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"圆角参数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"单个数字：四角相同圆角"}),`
`,n.jsxs(e.li,{children:["数组 ",n.jsx(e.code,{children:"[tl, tr, br, bl]"}),"：分别设置左上、右上、右下、左下的圆角"]}),`
`]}),`
`,n.jsx(e.p,{children:"常用于：按钮、卡片、输入框等 UI 组件。"}),`
`,n.jsx(a,{language:"typescript",children:o}),`
`,n.jsx(e.h3,{id:"addcircle",children:"addCircle"}),`
`,n.jsx(e.p,{children:"绘制圆形。通过圆心坐标和半径定义，支持填充和描边。"}),`
`,n.jsx(a,{language:"typescript",children:h}),`
`,n.jsx(e.h3,{id:"addline",children:"addLine"}),`
`,n.jsx(e.p,{children:"绘制直线，支持虚线模式和线帽样式。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"线帽样式（lineCap）"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'butt'"}),": 平直端点（默认）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'round'"}),": 圆形端点"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'square'"}),": 方形端点（会延长线条）"]}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:x}),`
`,n.jsx(e.h3,{id:"addarc",children:"addArc"}),`
`,n.jsx(e.p,{children:"绘制弧线或扇形。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"角度说明"}),"：Canvas 使用弧度制，0 为 3 点钟方向，顺时针为正方向。可使用 ",n.jsx(e.code,{children:"degToRad()"})," 将角度转为弧度。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"扇形模式"}),"：设置 ",n.jsx(e.code,{children:"closePath: true"})," 会连接圆心形成扇形，适合绑制饼图。"]}),`
`,n.jsx(a,{language:"typescript",children:j}),`
`,n.jsx(e.h3,{id:"addellipse",children:"addEllipse"}),`
`,n.jsx(e.p,{children:"绘制椭圆，支持旋转角度。"}),`
`,n.jsx(e.p,{children:"通过两个半径（radiusX、radiusY）定义椭圆形状，可设置 rotation 参数使椭圆旋转。"}),`
`,n.jsx(a,{language:"typescript",children:f}),`
`,n.jsx(e.h3,{id:"addpolygon",children:"addPolygon"}),`
`,n.jsx(e.p,{children:"绘制正多边形（三角形、五边形、六边形等）。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"sides"}),` 参数指定边数：3 为三角形，5 为五边形，6 为六边形...
`,n.jsx(e.code,{children:"rotation"})," 参数可旋转多边形的初始角度。"]}),`
`,n.jsx(a,{language:"typescript",children:v}),`
`,n.jsx(e.h3,{id:"addpath",children:"addPath"}),`
`,n.jsx(e.p,{children:"绘制自由路径，通过命令数组定义复杂形状。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"命令格式"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"{ type: 'M', x, y }"}),": 移动到（moveTo）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"{ type: 'L', x, y }"}),": 画线到（lineTo）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"{ type: 'Z' }"}),": 闭合路径（closePath）"]}),`
`]}),`
`,n.jsx(e.p,{children:"适合绘制不规则形状、自定义图标等。"}),`
`,n.jsx(a,{language:"typescript",children:p}),`
`,n.jsx(e.h3,{id:"addtext",children:"addText"}),`
`,n.jsxs(e.p,{children:["绘制文字，",n.jsx(e.strong,{children:"支持自动换行"}),"。"]}),`
`,n.jsx(e.p,{children:"指定最大宽度后，超出宽度的文字会自动换到下一行。适合段落文字、多行标签等场景。"}),`
`,n.jsx(a,{language:"typescript",children:g}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"曲线",children:"曲线"}),`
`,n.jsx(e.p,{children:"贝塞尔曲线是计算机图形学中常用的参数曲线，通过控制点定义曲线形状。"}),`
`,n.jsx(e.h3,{id:"addbezier",children:"addBezier"}),`
`,n.jsx(e.p,{children:"绘制三次贝塞尔曲线（Cubic Bezier），由起点、两个控制点和终点定义。"}),`
`,n.jsx(e.p,{children:"三次贝塞尔曲线可以创建 S 形、波浪线等复杂曲线，是矢量绘图软件中钢笔工具的基础。"}),`
`,n.jsx(a,{language:"typescript",children:m}),`
`,n.jsx(e.h3,{id:"addquadratic",children:"addQuadratic"}),`
`,n.jsx(e.p,{children:"绘制二次贝塞尔曲线（Quadratic Bezier），由起点、一个控制点和终点定义。"}),`
`,n.jsx(e.p,{children:"相比三次贝塞尔曲线更简单，适合绘制简单的弧形连接线、对话气泡尾巴等。"}),`
`,n.jsx(a,{language:"typescript",children:y}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"渐变与样式",children:"渐变与样式"}),`
`,n.jsx(e.p,{children:"Canvas 支持三种渐变类型和丰富的样式设置，可以创建专业级的视觉效果。"}),`
`,n.jsx(e.h3,{id:"addlineargradient",children:"addLinearGradient"}),`
`,n.jsx(e.p,{children:"创建线性渐变，颜色沿直线方向过渡。"}),`
`,n.jsx(e.p,{children:"通过起点 (x0, y0) 和终点 (x1, y1) 定义渐变方向："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"水平渐变：y0 = y1"}),`
`,n.jsx(e.li,{children:"垂直渐变：x0 = x1"}),`
`,n.jsx(e.li,{children:"对角渐变：x0 ≠ x1 且 y0 ≠ y1"}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:C}),`
`,n.jsx(e.h3,{id:"addradialgradient",children:"addRadialGradient"}),`
`,n.jsx(e.p,{children:"创建径向渐变，颜色从一个圆向另一个圆过渡。"}),`
`,n.jsx(e.p,{children:"由两个圆定义：内圆 (x0, y0, r0) 和外圆 (x1, y1, r1)。当两圆同心时创建同心圆渐变，两圆不同心可创建聚光灯效果。"}),`
`,n.jsx(a,{language:"typescript",children:u}),`
`,n.jsx(e.h3,{id:"addconicgradient",children:"addConicGradient"}),`
`,n.jsx(e.p,{children:"创建锥形渐变（圆锥渐变），颜色围绕中心点旋转分布。"}),`
`,n.jsxs(e.p,{children:["常用于：色轮选择器、仪表盘、饼图背景等。",n.jsx(e.code,{children:"startAngle"})," 定义渐变的起始角度。"]}),`
`,n.jsx(a,{language:"typescript",children:b}),`
`,n.jsx(e.h3,{id:"setshadow--clearshadow",children:"setShadow / clearShadow"}),`
`,n.jsx(e.p,{children:"设置和清除阴影效果。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"阴影参数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"color"}),": 阴影颜色（支持 rgba 实现半透明）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blur"}),": 模糊程度（像素）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"offsetX/offsetY"}),": 阴影偏移量"]}),`
`]}),`
`,n.jsxs(e.p,{children:["阴影会应用到之后绑绘的所有图形，使用完后应调用 ",n.jsx(e.code,{children:"clearShadow()"})," 清除。"]}),`
`,n.jsx(a,{language:"typescript",children:w}),`
`,n.jsx(e.h3,{id:"setglobalalpha--resetglobalalpha",children:"setGlobalAlpha / resetGlobalAlpha"}),`
`,n.jsx(e.p,{children:"设置和重置全局透明度（0-1）。"}),`
`,n.jsx(e.p,{children:"全局透明度会应用到之后绘制的所有内容，常用于实现淡入淡出动画效果。"}),`
`,n.jsx(a,{language:"typescript",children:D}),`
`,n.jsx(e.h3,{id:"setcompositeoperation--resetcompositeoperation",children:"setCompositeOperation / resetCompositeOperation"}),`
`,n.jsx(e.p,{children:"设置和重置图形混合模式（globalCompositeOperation）。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用混合模式"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'source-over'"}),": 默认，新图形覆盖在旧图形上"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'destination-out'"}),": 橡皮擦效果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'multiply'"}),": 正片叠底"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'screen'"}),": 滤色"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'overlay'"}),": 叠加"]}),`
`]}),`
`,n.jsx(e.p,{children:"混合模式可以实现丰富的图像合成效果。"}),`
`,n.jsx(a,{language:"typescript",children:T}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"线条样式",children:"线条样式"}),`
`,n.jsx(e.p,{children:"精细控制线条的外观，包括虚线、端点、连接方式等。"}),`
`,n.jsx(e.h3,{id:"setlinedash--clearlinedash",children:"setLineDash / clearLineDash"}),`
`,n.jsx(e.p,{children:"设置和清除虚线样式。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"虚线模式数组"}),"：交替表示实线和空隙的长度"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"[5, 5]"}),": 5px 实线，5px 空隙"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"[10, 5, 2, 5]"}),": 点划线效果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"[]"}),": 空数组恢复实线"]}),`
`]}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"offset"})," 参数可实现蚂蚁线动画效果。"]}),`
`,n.jsx(a,{language:"typescript",children:S}),`
`,n.jsx(e.h3,{id:"setlinestyle--resetlinestyle",children:"setLineStyle / resetLineStyle"}),`
`,n.jsx(e.p,{children:"设置和重置线条样式。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"样式属性"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lineCap"}),": 线条端点 - ",n.jsx(e.code,{children:"'butt'"})," | ",n.jsx(e.code,{children:"'round'"})," | ",n.jsx(e.code,{children:"'square'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lineJoin"}),": 线条连接 - ",n.jsx(e.code,{children:"'miter'"}),"（尖角） | ",n.jsx(e.code,{children:"'round'"}),"（圆角） | ",n.jsx(e.code,{children:"'bevel'"}),"（斜角）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"miterLimit"}),": 尖角限制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lineWidth"}),": 线条宽度"]}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:I}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"滤镜",children:"滤镜"}),`
`,n.jsx(e.p,{children:"Canvas 支持 CSS 滤镜，可以对绑制内容应用各种视觉效果。"}),`
`,n.jsx(e.h3,{id:"setfilter--clearfilter",children:"setFilter / clearFilter"}),`
`,n.jsx(e.p,{children:"设置和清除 CSS 滤镜效果。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"支持的滤镜"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blur(px)"}),": 模糊"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"brightness(%)"}),": 亮度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"contrast(%)"}),": 对比度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"grayscale(%)"}),": 灰度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hue-rotate(deg)"}),": 色相旋转"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"invert(%)"}),": 反色"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"opacity(%)"}),": 透明度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"saturate(%)"}),": 饱和度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sepia(%)"}),": 褐色"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"drop-shadow()"}),": 投影"]}),`
`]}),`
`,n.jsxs(e.p,{children:["可组合多个滤镜：",n.jsx(e.code,{children:"'blur(5px) brightness(120%)'"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Canvas.filters"})," 提供了常用滤镜预设，如 ",n.jsx(e.code,{children:"filters.grayscale()"}),"、",n.jsx(e.code,{children:"filters.blur(5)"})," 等。"]}),`
`,n.jsx(a,{language:"typescript",children:R}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"裁剪",children:"裁剪"}),`
`,n.jsx(e.p,{children:"裁剪功能可以限制绑绘区域，实现遮罩效果。"}),`
`,n.jsx(e.h3,{id:"cliprect--clipcircle--clippath",children:"clipRect / clipCircle / clipPath"}),`
`,n.jsx(e.p,{children:"设置裁剪区域，支持矩形、圆形和自定义路径。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"重要"}),"：裁剪区域一旦设置无法直接撤销，需要使用 ",n.jsx(e.code,{children:"save/restore"})," 来管理："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`instance.save()          // 保存当前状态
instance.clipCircle(...) // 设置裁剪
// ... bindbindbindbindbindbindbindbindbindbindbing 绑绘操作 ...bindbing
instance.restore()       // 恢复，裁剪失效
`})}),`
`,n.jsx(e.p,{children:"多次裁剪会取交集，形成更小的裁剪区域。"}),`
`,n.jsx(a,{language:"typescript",children:W}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"碰撞检测",children:"碰撞检测"}),`
`,n.jsx(e.p,{children:"Canvas 点击交互的核心功能，用于检测用户点击是否命中某个图形。"}),`
`,n.jsx(e.h3,{id:"ispointinpath--ispointinstroke",children:"isPointInPath / isPointInStroke"}),`
`,n.jsx(e.p,{children:"判断点是否在路径填充区域内或描边线上。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"图形点击选择"}),`
`,n.jsx(e.li,{children:"拖拽交互"}),`
`,n.jsx(e.li,{children:"悬停高亮效果"}),`
`,n.jsx(e.li,{children:"图形编辑器"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"坐标转换"}),"：鼠标事件坐标需要转换为 Canvas 坐标："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const rect = canvas bindgetBoundingClientRect()
const x = event.bindclientX - rect.bindleft
const y = event.bindclientY - rect.bindtop
`})}),`
`,n.jsx(e.p,{children:"推荐使用 Path2D 对象存储图形路径，便于复用和检测。"}),`
`,n.jsx(a,{language:"typescript",children:k}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"像素操作",children:"像素操作"}),`
`,n.jsx(e.p,{children:"直接操作像素数据，实现自定义滤镜、图像分析等高级功能。"}),`
`,n.jsx(e.h3,{id:"getimagedata--putimagedata",children:"getImageData / putImageData"}),`
`,n.jsx(e.p,{children:"获取和写入像素数据（ImageData 对象）。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"ImageData 结构"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"width"}),": 像素宽度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"height"}),": 像素高度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data"}),": Uint8ClampedArray，每 4 个元素表示一个像素的 RGBA 值"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"应用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自定义滤镜（模糊、锐化、色彩调整）"}),`
`,n.jsx(e.li,{children:"图像分析（颜色提取、边缘检测）"}),`
`,n.jsx(e.li,{children:"像素级动画效果"}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:z}),`
`,n.jsx(e.h3,{id:"imagebitmap",children:"ImageBitmap"}),`
`,n.jsx(e.p,{children:"ImageBitmap 是一种高性能的位图表示，相比 HTMLImageElement 有以下优势："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"异步解码"}),"：图像解码在后台线程完成，不阻塞主线程"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GPU 加速"}),"：数据可直接传输到 GPU，减少 CPU 到 GPU 的数据拷贝"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"内存优化"}),"：可在创建时进行裁剪和缩放，减少内存占用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"可转移"}),"：支持在 Web Worker 之间转移，适合离屏渲染"]}),`
`]}),`
`,n.jsx(e.p,{children:"适用场景：游戏/动画中频繁绑制同一图像、大量图片批量处理、需要图像预处理的场景。"}),`
`,n.jsx(a,{language:"typescript",children:P}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"文本工具",children:"文本工具"}),`
`,n.jsx(e.p,{children:"Canvas 提供两种文本绑绘方式：简单文本和自动换行文本。"}),`
`,n.jsx(e.h3,{id:"filltext--stroketext",children:"fillText / strokeText"}),`
`,n.jsxs(e.p,{children:["简单文本填充和描边，直接调用 Canvas 原生 API，",n.jsx(e.strong,{children:"不支持自动换行"}),"。"]}),`
`,n.jsxs(e.p,{children:["适合单行文字、标签、数字显示等简单场景。如需自动换行请使用 ",n.jsx(e.code,{children:"addText"}),"。"]}),`
`,n.jsx(a,{language:"typescript",children:A}),`
`,n.jsx(e.h3,{id:"measuretext",children:"measureText"}),`
`,n.jsx(e.p,{children:"测量文本宽度（像素），用于文本布局计算。"}),`
`,n.jsx(e.p,{children:"可指定字体、字号、字重来准确测量。常用于：文本居中、判断是否需要省略号、动态调整字号等。"}),`
`,n.jsx(a,{language:"typescript",children:L}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"画布操作",children:"画布操作"}),`
`,n.jsx(e.p,{children:"画布级别的操作，包括清空、调整大小、坐标变换等。"}),`
`,n.jsx(e.h3,{id:"clear",children:"clear"}),`
`,n.jsx(e.p,{children:"清空画布（全部或指定区域）。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"动画帧之间清空重绘"}),`
`,n.jsx(e.li,{children:"橡皮擦效果（指定区域清除）"}),`
`,n.jsx(e.li,{children:"重置画布"}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:B}),`
`,n.jsx(e.h3,{id:"resize",children:"resize"}),`
`,n.jsx(e.p,{children:"调整画布像素尺寸。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"注意"}),"：直接修改画布尺寸会清空内容。设置 ",n.jsx(e.code,{children:"preserveContent: true"})," 可保留现有内容（通过 ImageData 备份恢复）。"]}),`
`,n.jsx(a,{language:"typescript",children:X}),`
`,n.jsx(e.h3,{id:"translate",children:"translate"}),`
`,n.jsx(e.p,{children:"平移画布坐标系原点。"}),`
`,n.jsx(e.p,{children:"平移后，所有绘制操作都基于新原点。常用于将图形绘制到指定位置，或实现画布滚动效果。"}),`
`,n.jsx(a,{language:"typescript",children:G}),`
`,n.jsx(e.h3,{id:"rotate",children:"rotate"}),`
`,n.jsx(e.p,{children:"旋转画布坐标系（弧度制）。"}),`
`,n.jsxs(e.p,{children:["旋转以当前原点为中心。",n.jsx(e.strong,{children:"围绑图形中心旋转的技巧"}),"：先 translate 到中心，再 rotate，最后绘制时偏移回去。"]}),`
`,n.jsx(a,{language:"typescript",children:Y}),`
`,n.jsx(e.h3,{id:"scale",children:"scale"}),`
`,n.jsx(e.p,{children:"缩放画布坐标系。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"scaleX/scaleY > 1"})," 放大，",n.jsx(e.code,{children:"< 1"})," 缩小。使用负值可实现镜像翻转效果。"]}),`
`,n.jsx(a,{language:"typescript",children:H}),`
`,n.jsx(e.h3,{id:"settransform--transform--gettransform",children:"setTransform / transform / getTransform"}),`
`,n.jsx(e.p,{children:"直接操作 2D 变换矩阵，用于复杂变换。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"变换矩阵"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`[a c e]   a: 水平缩放    c: 水平倾斜    e: 水平平移
[b d f]   b: 垂直倾斜    d: 垂直缩放    f: 垂直平移
[0 0 1]
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setTransform"}),": 重置并设置新矩阵"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transform"}),": 在当前矩阵上叠加"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getTransform"}),": 获取当前矩阵（DOMMatrix）"]}),`
`]}),`
`,n.jsx(a,{language:"typescript",children:M}),`
`,n.jsx(e.h3,{id:"save--restore",children:"save / restore"}),`
`,n.jsx(e.p,{children:"保存和恢复画布状态（状态栈）。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"保存的状态包括"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"变换矩阵"}),`
`,n.jsx(e.li,{children:"裁剪区域"}),`
`,n.jsx(e.li,{children:"样式属性（fillStyle、strokeStyle、lineWidth 等）"}),`
`,n.jsx(e.li,{children:"合成属性（globalAlpha、globalCompositeOperation）"}),`
`,n.jsx(e.li,{children:"阴影、字体、滤镜等"}),`
`]}),`
`,n.jsx(e.p,{children:"这是 Canvas 状态管理的核心机制，必须成对使用。"}),`
`,n.jsx(a,{language:"typescript",children:O}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"导出功能",children:"导出功能"}),`
`,n.jsx(e.p,{children:"Canvas 支持多种导出格式，满足不同场景需求。"}),`
`,n.jsx(e.h3,{id:"createbase64",children:"createBase64"}),`
`,n.jsx(e.p,{children:"导出为 Base64 字符串（Data URL）。"}),`
`,n.jsxs(e.p,{children:["同步方法，适合小图片、需要直接嵌入 HTML 或存入数据库的场景。大图片建议使用 ",n.jsx(e.code,{children:"toBlob"}),"。"]}),`
`,n.jsx(a,{language:"typescript",children:F}),`
`,n.jsx(e.h3,{id:"toblob",children:"toBlob"}),`
`,n.jsx(e.p,{children:"导出为 Blob 对象（异步）。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Blob 的优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"异步导出，不阻塞主线程"}),`
`,n.jsx(e.li,{children:"内存效率高（相比 Base64）"}),`
`,n.jsx(e.li,{children:"可直接用于 FormData 上传、创建 Object URL"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"支持的格式"}),"：",n.jsx(e.code,{children:"'image/png'"}),"（默认）、",n.jsx(e.code,{children:"'image/jpeg'"}),"、",n.jsx(e.code,{children:"'image/webp'"})]}),`
`,n.jsx(a,{language:"typescript",children:E}),`
`,n.jsx(e.h3,{id:"download",children:"download"}),`
`,n.jsx(e.p,{children:"下载为图片文件（触发浏览器下载）。"}),`
`,n.jsxs(e.p,{children:["内部调用 ",n.jsx(e.code,{children:"toBlob"})," 并创建下载链接，自动根据导出类型添加正确的文件扩展名。"]}),`
`,n.jsx(a,{language:"typescript",children:$}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"api-汇总",children:"API 汇总"}),`
`,n.jsx(e.h3,{id:"图像-1",children:"图像"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addImage"})}),n.jsx("td",{children:n.jsx("code",{children:"url, x, y, width, height, sx?, sy?, sWidth?, sHeight?"})}),n.jsx("td",{children:"添加图片（支持裁剪）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addClipImage"})}),n.jsx("td",{children:n.jsx("code",{children:"url, x, y, width, height, clipType, radius?"})}),n.jsx("td",{children:"添加裁剪图片"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"drawPattern"})}),n.jsx("td",{children:n.jsx("code",{children:"image, x, y, width, height, repetition?"})}),n.jsx("td",{children:"绘制图案填充"})]})]})]}),`
`,n.jsx(e.h3,{id:"文本",children:"文本"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addText"})}),n.jsx("td",{children:n.jsx("code",{children:"text, x, y, width, lineHeight, font, fontSize, fontWeight, color"})}),n.jsx("td",{children:"添加文字（自动换行）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"fillText"})}),n.jsx("td",{children:n.jsx("code",{children:"text, x, y, fontSize?, color?, textAlign?, maxWidth?"})}),n.jsx("td",{children:"简单文本填充"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"strokeText"})}),n.jsx("td",{children:n.jsx("code",{children:"text, x, y, fontSize?, color?, lineWidth?, textAlign?, maxWidth?"})}),n.jsx("td",{children:"描边文本"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"measureText"})}),n.jsx("td",{children:n.jsx("code",{children:"text, fontSize?, font?, fontWeight?"})}),n.jsx("td",{children:"测量文本宽度"})]})]})]}),`
`,n.jsx(e.h3,{id:"基础图形-1",children:"基础图形"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addRect"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, width, height, fillColor?, strokeColor?, lineWidth?"})}),n.jsx("td",{children:"绘制矩形"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addRoundRect"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, width, height, radius, fillColor?, strokeColor?, lineWidth?"})}),n.jsx("td",{children:"绘制圆角矩形"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addCircle"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, radius, fillColor?, strokeColor?, lineWidth?"})}),n.jsx("td",{children:"绘制圆形"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addLine"})}),n.jsx("td",{children:n.jsx("code",{children:"startX, startY, endX, endY, strokeColor?, lineWidth?, lineCap?"})}),n.jsx("td",{children:"绘制直线"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addArc"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, radius, startAngle, endAngle, ..."})}),n.jsx("td",{children:"绘制弧线/扇形"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addEllipse"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, radiusX, radiusY, rotation?, ..."})}),n.jsx("td",{children:"绘制椭圆"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addPolygon"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, radius, sides, rotation?, ..."})}),n.jsx("td",{children:"绘制正多边形"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addPath"})}),n.jsx("td",{children:n.jsx("code",{children:"commands, fillColor?, strokeColor?, lineWidth?"})}),n.jsx("td",{children:"绘制自由路径"})]})]})]}),`
`,n.jsx(e.h3,{id:"曲线-1",children:"曲线"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addBezier"})}),n.jsx("td",{children:n.jsx("code",{children:"startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY, ..."})}),n.jsx("td",{children:"绘制三次贝塞尔曲线"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addQuadratic"})}),n.jsx("td",{children:n.jsx("code",{children:"startX, startY, cpx, cpy, endX, endY, ..."})}),n.jsx("td",{children:"绘制二次贝塞尔曲线"})]})]})]}),`
`,n.jsx(e.h3,{id:"渐变与样式-1",children:"渐变与样式"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addLinearGradient"})}),n.jsx("td",{children:n.jsx("code",{children:"x0, y0, x1, y1, colorStops, x, y, width, height"})}),n.jsx("td",{children:"创建线性渐变"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addRadialGradient"})}),n.jsx("td",{children:n.jsx("code",{children:"x0, y0, r0, x1, y1, r1, colorStops, x, y, width, height"})}),n.jsx("td",{children:"创建径向渐变"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"addConicGradient"})}),n.jsx("td",{children:n.jsx("code",{children:"startAngle, x, y, colorStops, fillX, fillY, fillWidth, fillHeight"})}),n.jsx("td",{children:"创建锥形渐变"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setShadow"})}),n.jsx("td",{children:n.jsx("code",{children:"color?, blur?, offsetX?, offsetY?"})}),n.jsx("td",{children:"设置阴影"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clearShadow"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"清除阴影"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setGlobalAlpha"})}),n.jsx("td",{children:n.jsx("code",{children:"alpha"})}),n.jsx("td",{children:"设置全局透明度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"resetGlobalAlpha"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"重置全局透明度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setCompositeOperation"})}),n.jsx("td",{children:n.jsx("code",{children:"operation"})}),n.jsx("td",{children:"设置混合模式"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"resetCompositeOperation"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"重置混合模式"})]})]})]}),`
`,n.jsx(e.h3,{id:"线条样式-1",children:"线条样式"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setLineDash"})}),n.jsx("td",{children:n.jsx("code",{children:"segments, offset?"})}),n.jsx("td",{children:"设置虚线样式"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clearLineDash"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"清除虚线（恢复实线）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setLineStyle"})}),n.jsx("td",{children:n.jsx("code",{children:"lineCap?, lineJoin?, miterLimit?, lineWidth?"})}),n.jsx("td",{children:"设置线条样式"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"resetLineStyle"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"重置线条样式"})]})]})]}),`
`,n.jsx(e.h3,{id:"滤镜-1",children:"滤镜"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setFilter"})}),n.jsx("td",{children:n.jsx("code",{children:"filter"})}),n.jsx("td",{children:"设置 CSS 滤镜"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clearFilter"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"清除滤镜"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Canvas.filters"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"预设滤镜（静态属性）"})]})]})]}),`
`,n.jsx(e.h3,{id:"裁剪-1",children:"裁剪"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clipRect"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, width, height"})}),n.jsx("td",{children:"矩形裁剪"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clipCircle"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, radius"})}),n.jsx("td",{children:"圆形裁剪"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clipPath"})}),n.jsx("td",{children:n.jsx("code",{children:"path, fillRule?"})}),n.jsx("td",{children:"自定义路径裁剪"})]})]})]}),`
`,n.jsx(e.h3,{id:"碰撞检测-1",children:"碰撞检测"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"isPointInPath"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, path?, fillRule?"})}),n.jsx("td",{children:"判断点是否在路径内"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"isPointInStroke"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, path?"})}),n.jsx("td",{children:"判断点是否在描边上"})]})]})]}),`
`,n.jsx(e.h3,{id:"像素操作-1",children:"像素操作"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"getImageData"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y, width, height"})}),n.jsx("td",{children:"获取像素数据"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"putImageData"})}),n.jsx("td",{children:n.jsx("code",{children:"imageData, x, y"})}),n.jsx("td",{children:"写入像素数据"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"drawImageBitmap"})}),n.jsx("td",{children:n.jsx("code",{children:"bitmap, dx, dy, dWidth?, dHeight?"})}),n.jsx("td",{children:"绘制 ImageBitmap"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Canvas.createImageBitmap"})}),n.jsx("td",{children:n.jsx("code",{children:"source, sx?, sy?, sw?, sh?, options?"})}),n.jsx("td",{children:"创建 ImageBitmap（静态）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Canvas.loadImageBitmap"})}),n.jsx("td",{children:n.jsx("code",{children:"url"})}),n.jsx("td",{children:"从 URL 加载 ImageBitmap（静态）"})]})]})]}),`
`,n.jsx(e.h3,{id:"画布操作-1",children:"画布操作"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clear"})}),n.jsx("td",{children:n.jsx("code",{children:"x?, y?, width?, height?"})}),n.jsx("td",{children:"清空画布"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"resize"})}),n.jsx("td",{children:n.jsx("code",{children:"width, height, preserveContent?"})}),n.jsx("td",{children:"调整尺寸"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"save"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"保存状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"restore"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"恢复状态"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"resetTransform"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"重置变换"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"translate"})}),n.jsx("td",{children:n.jsx("code",{children:"x, y"})}),n.jsx("td",{children:"平移"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"rotate"})}),n.jsx("td",{children:n.jsx("code",{children:"angle"})}),n.jsx("td",{children:"旋转"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"scale"})}),n.jsx("td",{children:n.jsx("code",{children:"scaleX, scaleY"})}),n.jsx("td",{children:"缩放"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setTransform"})}),n.jsx("td",{children:n.jsx("code",{children:"a, b, c, d, e, f"})}),n.jsx("td",{children:"设置变换矩阵"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"transform"})}),n.jsx("td",{children:n.jsx("code",{children:"a, b, c, d, e, f"})}),n.jsx("td",{children:"叠加变换矩阵"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"getTransform"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"获取当前变换矩阵"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"setTransformMatrix"})}),n.jsx("td",{children:n.jsx("code",{children:"matrix"})}),n.jsx("td",{children:"使用 DOMMatrix 设置变换"})]})]})]}),`
`,n.jsx(e.h3,{id:"导出",children:"导出"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"createBase64"})}),n.jsx("td",{children:n.jsx("code",{children:"type?, quality?"})}),n.jsx("td",{children:"导出 Base64"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"toBlob"})}),n.jsx("td",{children:n.jsx("code",{children:"type?, quality?"})}),n.jsx("td",{children:"导出 Blob"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"download"})}),n.jsx("td",{children:n.jsx("code",{children:"filename?, type?, quality?"})}),n.jsx("td",{children:"下载图片"})]})]})]}),`
`,n.jsx(e.h3,{id:"工具",children:"工具"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"getContext()"})}),n.jsx("td",{children:"获取 2D 上下文"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"getCanvas()"})}),n.jsx("td",{children:"获取 canvas 元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Canvas.degToRad(deg)"})}),n.jsx("td",{children:"角度转弧度（静态方法）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Canvas.filters"})}),n.jsx("td",{children:"预设滤镜（静态属性）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"drawFocusIfNeeded"})}),n.jsx("td",{children:"绘制焦点环（无障碍）"})]})]})]})]})}function Z(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{Z as default};
