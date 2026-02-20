import { useEffect, useRef } from 'react'
import Canvas from '../../../packages/element-utils/src/Canvas'
import '../../.css/index.css'

// 图像
import addClipImageDemo from './addClipImageDemo'
import addImageDemo from './addImageDemo'
import drawPatternDemo from './drawPatternDemo'

// 基础图形
import addArcDemo from './addArcDemo'
import addCircleDemo from './addCircleDemo'
import addEllipseDemo from './addEllipseDemo'
import addLineDemo from './addLineDemo'
import addPathDemo from './addPathDemo'
import addPolygonDemo from './addPolygonDemo'
import addRectDemo from './addRectDemo'
import addRoundRectDemo from './addRoundRectDemo'
import addTextDemo from './addTextDemo'

// 曲线
import addBezierDemo from './addBezierDemo'
import addQuadraticDemo from './addQuadraticDemo'

// 渐变与样式
import addConicGradientDemo from './addConicGradientDemo'
import addLinearGradientDemo from './addLinearGradientDemo'
import addRadialGradientDemo from './addRadialGradientDemo'
import setCompositeOperationDemo from './setCompositeOperationDemo'
import setGlobalAlphaDemo from './setGlobalAlphaDemo'
import setShadowDemo from './setShadowDemo'

// 线条样式
import setLineDashDemo from './setLineDashDemo'
import setLineStyleDemo from './setLineStyleDemo'

// 滤镜
import setFilterDemo from './setFilterDemo'

// 裁剪
import clipDemo from './clipDemo'

// 碰撞检测
import hitTestDemo from './hitTestDemo'

// 像素操作
import imageBitmapDemo from './imageBitmapDemo'
import imageDataDemo from './imageDataDemo'

// 文本工具
import measureTextDemo from './measureTextDemo'
import simpleTextDemo from './simpleTextDemo'

// 画布操作
import clearDemo from './clearDemo'
import resizeDemo from './resizeDemo'
import rotateDemo from './rotateDemo'
import saveRestoreDemo from './saveRestoreDemo'
import scaleDemo from './scaleDemo'
import setTransformDemo from './setTransformDemo'
import translateDemo from './translateDemo'

// 导出功能
import createBase64Demo from './createBase64Demo'
import downloadDemo from './downloadDemo'
import toBlobDemo from './toBlobDemo'

const CanvasDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<Canvas | null>(null)

  useEffect(() => {
    if (containerRef.current && !canvasRef.current) {
      canvasRef.current = new Canvas({
        el: containerRef.current,
        width: 500,
        height: 350,
      })
      // 初始背景
      canvasRef.current.addRect({
        x: 0,
        y: 0,
        width: 500,
        height: 350,
        fillColor: '#f5f5f5',
      })
    }
  }, [])

  const getCanvas = () => canvasRef.current!

  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Canvas 画布</h3>
      <div
        ref={containerRef}
        style={{
          border: '1px solid #ddd',
          borderRadius: 8,
          overflow: 'hidden',
          display: 'inline-block',
          marginBottom: 20,
          lineHeight: 0,
        }}
      />

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>图像</h4>
      <div>
        <div className="button" onClick={() => addImageDemo(getCanvas())}>
          addImage
        </div>
        <div className="button" onClick={() => addClipImageDemo(getCanvas())}>
          addClipImage
        </div>
        <div className="button" onClick={() => drawPatternDemo(getCanvas())}>
          drawPattern
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>基础图形</h4>
      <div>
        <div className="button" onClick={() => addRectDemo(getCanvas())}>
          addRect
        </div>
        <div className="button" onClick={() => addRoundRectDemo(getCanvas())}>
          addRoundRect
        </div>
        <div className="button" onClick={() => addCircleDemo(getCanvas())}>
          addCircle
        </div>
        <div className="button" onClick={() => addLineDemo(getCanvas())}>
          addLine
        </div>
        <div className="button" onClick={() => addArcDemo(getCanvas())}>
          addArc
        </div>
        <div className="button" onClick={() => addEllipseDemo(getCanvas())}>
          addEllipse
        </div>
        <div className="button" onClick={() => addPolygonDemo(getCanvas())}>
          addPolygon
        </div>
        <div className="button" onClick={() => addPathDemo(getCanvas())}>
          addPath
        </div>
        <div className="button" onClick={() => addTextDemo(getCanvas())}>
          addText
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>曲线</h4>
      <div>
        <div className="button" onClick={() => addBezierDemo(getCanvas())}>
          addBezier
        </div>
        <div className="button" onClick={() => addQuadraticDemo(getCanvas())}>
          addQuadratic
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>渐变与样式</h4>
      <div>
        <div
          className="button"
          onClick={() => addLinearGradientDemo(getCanvas())}
        >
          addLinearGradient
        </div>
        <div
          className="button"
          onClick={() => addRadialGradientDemo(getCanvas())}
        >
          addRadialGradient
        </div>
        <div
          className="button"
          onClick={() => addConicGradientDemo(getCanvas())}
        >
          addConicGradient
        </div>
        <div className="button" onClick={() => setShadowDemo(getCanvas())}>
          setShadow / clearShadow
        </div>
        <div className="button" onClick={() => setGlobalAlphaDemo(getCanvas())}>
          setGlobalAlpha
        </div>
        <div
          className="button"
          onClick={() => setCompositeOperationDemo(getCanvas())}
        >
          setCompositeOperation
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>线条样式</h4>
      <div>
        <div className="button" onClick={() => setLineDashDemo(getCanvas())}>
          setLineDash
        </div>
        <div className="button" onClick={() => setLineStyleDemo(getCanvas())}>
          setLineStyle
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>滤镜</h4>
      <div>
        <div className="button" onClick={() => setFilterDemo(getCanvas())}>
          setFilter
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>裁剪</h4>
      <div>
        <div className="button" onClick={() => clipDemo(getCanvas())}>
          clip (矩形/圆形/路径)
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>碰撞检测</h4>
      <div>
        <div className="button" onClick={() => hitTestDemo(getCanvas())}>
          isPointInPath / isPointInStroke
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>像素操作</h4>
      <div>
        <div className="button" onClick={() => imageDataDemo(getCanvas())}>
          getImageData / putImageData
        </div>
        <div className="button" onClick={() => imageBitmapDemo(getCanvas())}>
          ImageBitmap
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>文本工具</h4>
      <div>
        <div className="button" onClick={() => simpleTextDemo(getCanvas())}>
          fillText / strokeText
        </div>
        <div className="button" onClick={() => measureTextDemo(getCanvas())}>
          measureText
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>画布操作</h4>
      <div>
        <div className="button" onClick={() => clearDemo(getCanvas())}>
          clear
        </div>
        <div className="button" onClick={() => resizeDemo(getCanvas())}>
          resize
        </div>
        <div className="button" onClick={() => translateDemo(getCanvas())}>
          translate
        </div>
        <div className="button" onClick={() => rotateDemo(getCanvas())}>
          rotate
        </div>
        <div className="button" onClick={() => scaleDemo(getCanvas())}>
          scale
        </div>
        <div className="button" onClick={() => setTransformDemo(getCanvas())}>
          setTransform / transform
        </div>
        <div className="button" onClick={() => saveRestoreDemo(getCanvas())}>
          save / restore
        </div>
      </div>

      <h4 style={{ margin: '20px 0 10px 0', color: '#666' }}>导出功能</h4>
      <div>
        <div className="button" onClick={() => createBase64Demo(getCanvas())}>
          createBase64
        </div>
        <div className="button" onClick={() => toBlobDemo(getCanvas())}>
          toBlob
        </div>
        <div className="button" onClick={() => downloadDemo(getCanvas())}>
          download
        </div>
      </div>
    </div>
  )
}

export default CanvasDemo
