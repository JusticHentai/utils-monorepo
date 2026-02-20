import {
  drawFocusIfNeeded,
  DrawFocusIfNeededOptions,
} from './core/accessibility'
import addArc, { AddArcOptions } from './core/addArc'
import addBezier, { AddBezierOptions } from './core/addBezier'
import addCircle, { AddCircleOptions } from './core/addCircle'
import addClipImage, { AddClipImageOptions } from './core/addClipImage'
import addConicGradient, {
  AddConicGradientOptions,
} from './core/addConicGradient'
import addEllipse, { AddEllipseOptions } from './core/addEllipse'
import addImage, { AddImageOptions } from './core/addImage'
import addLine, { AddLineOptions } from './core/addLine'
import addLinearGradient, {
  AddLinearGradientOptions,
  GradientColorStop,
} from './core/addLinearGradient'
import addPath, { AddPathOptions, PathCommand } from './core/addPath'
import addPolygon, { AddPolygonOptions } from './core/addPolygon'
import addQuadratic, { AddQuadraticOptions } from './core/addQuadratic'
import addRadialGradient, {
  AddRadialGradientOptions,
} from './core/addRadialGradient'
import addRect, { AddRectOptions } from './core/addRect'
import addRoundRect, { AddRoundRectOptions } from './core/addRoundRect'
import addText, { AddTextOptions } from './core/addText'
import clear, { ClearOptions } from './core/clear'
import {
  clipCircle,
  ClipCircleOptions,
  clipPath,
  ClipPathOptions,
  clipRect,
  ClipRectOptions,
} from './core/clip'
import {
  createImageBitmapAsync,
  CreateImageBitmapOptions,
  drawImageBitmap,
  DrawImageBitmapOptions,
  loadImageBitmap,
} from './core/createImageBitmap'
import download, { DownloadOptions } from './core/download'
import drawPattern, { DrawPatternOptions } from './core/drawPattern'
import {
  clearFilter,
  filters,
  setFilter,
  SetFilterOptions,
} from './core/filter'
import {
  resetCompositeOperation,
  resetGlobalAlpha,
  setCompositeOperation,
  SetCompositeOperationOptions,
  setGlobalAlpha,
  SetGlobalAlphaOptions,
} from './core/globalStyle'
import {
  isPointInPath,
  IsPointInPathOptions,
  isPointInStroke,
  IsPointInStrokeOptions,
} from './core/hitTest'
import {
  getImageData,
  GetImageDataOptions,
  putImageData,
  PutImageDataOptions,
} from './core/imageData'
import initCanvas, { InitCanvasOptions } from './core/initCanvas'
import {
  clearLineDash,
  resetLineStyle,
  setLineDash,
  SetLineDashOptions,
  setLineStyle,
  SetLineStyleOptions,
} from './core/lineStyle'
import measureText, {
  MeasureTextOptions,
  TextMetricsResult,
} from './core/measureText'
import resize, { ResizeOptions } from './core/resize'
import setShadow, { clearShadow, SetShadowOptions } from './core/setShadow'
import {
  getTransform,
  setTransform,
  setTransformMatrix,
  SetTransformMatrixOptions,
  SetTransformOptions,
  transform,
  TransformOptions,
} from './core/setTransform'
import {
  fillText,
  FillTextOptions,
  strokeText,
  StrokeTextOptions,
} from './core/simpleText'
import toBlob, { ToBlobOptions } from './core/toBlob'
import {
  degToRad,
  resetTransform,
  restore,
  rotate,
  RotateOptions,
  save,
  scale,
  ScaleOptions,
  translate,
  TranslateOptions,
} from './core/transform'

/**
 * 简易化 canvas 操作
 */
export default class Canvas {
  canvasElement: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(options: InitCanvasOptions) {
    this.canvasElement = initCanvas(options)
    this.ctx = this.canvasElement.getContext('2d')!
  }

  // ========== 图像 ==========
  addImage = (options: Omit<AddImageOptions, 'ctx'>) => {
    return addImage({ ...options, ctx: this.ctx })
  }

  addClipImage = (options: Omit<AddClipImageOptions, 'ctx'>) => {
    return addClipImage({ ...options, ctx: this.ctx })
  }

  drawPattern = (options: Omit<DrawPatternOptions, 'ctx'>) => {
    return drawPattern({ ...options, ctx: this.ctx })
  }

  // ========== 文本 ==========
  addText = (options: Omit<AddTextOptions, 'ctx'>) => {
    return addText({ ...options, ctx: this.ctx })
  }

  measureText = (
    options: Omit<MeasureTextOptions, 'ctx'>
  ): TextMetricsResult => {
    return measureText({ ...options, ctx: this.ctx })
  }

  // ========== 基础图形 ==========
  addRect = (options: Omit<AddRectOptions, 'ctx'>) => {
    return addRect({ ...options, ctx: this.ctx })
  }

  addRoundRect = (options: Omit<AddRoundRectOptions, 'ctx'>) => {
    return addRoundRect({ ...options, ctx: this.ctx })
  }

  addCircle = (options: Omit<AddCircleOptions, 'ctx'>) => {
    return addCircle({ ...options, ctx: this.ctx })
  }

  addLine = (options: Omit<AddLineOptions, 'ctx'>) => {
    return addLine({ ...options, ctx: this.ctx })
  }

  addArc = (options: Omit<AddArcOptions, 'ctx'>) => {
    return addArc({ ...options, ctx: this.ctx })
  }

  addEllipse = (options: Omit<AddEllipseOptions, 'ctx'>) => {
    return addEllipse({ ...options, ctx: this.ctx })
  }

  addPolygon = (options: Omit<AddPolygonOptions, 'ctx'>) => {
    return addPolygon({ ...options, ctx: this.ctx })
  }

  addPath = (options: Omit<AddPathOptions, 'ctx'>) => {
    return addPath({ ...options, ctx: this.ctx })
  }

  // ========== 曲线 ==========
  addBezier = (options: Omit<AddBezierOptions, 'ctx'>) => {
    return addBezier({ ...options, ctx: this.ctx })
  }

  addQuadratic = (options: Omit<AddQuadraticOptions, 'ctx'>) => {
    return addQuadratic({ ...options, ctx: this.ctx })
  }

  // ========== 渐变与样式 ==========
  addLinearGradient = (options: Omit<AddLinearGradientOptions, 'ctx'>) => {
    return addLinearGradient({ ...options, ctx: this.ctx })
  }

  addRadialGradient = (options: Omit<AddRadialGradientOptions, 'ctx'>) => {
    return addRadialGradient({ ...options, ctx: this.ctx })
  }

  addConicGradient = (options: Omit<AddConicGradientOptions, 'ctx'>) => {
    return addConicGradient({ ...options, ctx: this.ctx })
  }

  setShadow = (options: Omit<SetShadowOptions, 'ctx'>) => {
    return setShadow({ ...options, ctx: this.ctx })
  }

  clearShadow = () => {
    return clearShadow(this.ctx)
  }

  setGlobalAlpha = (alpha: number) => {
    return setGlobalAlpha({ alpha, ctx: this.ctx })
  }

  resetGlobalAlpha = () => {
    return resetGlobalAlpha(this.ctx)
  }

  setCompositeOperation = (operation: GlobalCompositeOperation) => {
    return setCompositeOperation({ operation, ctx: this.ctx })
  }

  resetCompositeOperation = () => {
    return resetCompositeOperation(this.ctx)
  }

  // ========== 线条样式 ==========
  setLineDash = (options: Omit<SetLineDashOptions, 'ctx'>) => {
    return setLineDash({ ...options, ctx: this.ctx })
  }

  clearLineDash = () => {
    return clearLineDash(this.ctx)
  }

  setLineStyle = (options: Omit<SetLineStyleOptions, 'ctx'>) => {
    return setLineStyle({ ...options, ctx: this.ctx })
  }

  resetLineStyle = () => {
    return resetLineStyle(this.ctx)
  }

  // ========== 滤镜 ==========
  setFilter = (filter: string) => {
    return setFilter({ filter, ctx: this.ctx })
  }

  clearFilter = () => {
    return clearFilter(this.ctx)
  }

  // ========== 裁剪 ==========
  clipRect = (options: Omit<ClipRectOptions, 'ctx'>) => {
    return clipRect({ ...options, ctx: this.ctx })
  }

  clipCircle = (options: Omit<ClipCircleOptions, 'ctx'>) => {
    return clipCircle({ ...options, ctx: this.ctx })
  }

  clipPath = (options: Omit<ClipPathOptions, 'ctx'>) => {
    return clipPath({ ...options, ctx: this.ctx })
  }

  // ========== 碰撞检测 ==========
  isPointInPath = (options: Omit<IsPointInPathOptions, 'ctx'>) => {
    return isPointInPath({ ...options, ctx: this.ctx })
  }

  isPointInStroke = (options: Omit<IsPointInStrokeOptions, 'ctx'>) => {
    return isPointInStroke({ ...options, ctx: this.ctx })
  }

  // ========== 简单文本 ==========
  fillText = (options: Omit<FillTextOptions, 'ctx'>) => {
    return fillText({ ...options, ctx: this.ctx })
  }

  strokeText = (options: Omit<StrokeTextOptions, 'ctx'>) => {
    return strokeText({ ...options, ctx: this.ctx })
  }

  // ========== 像素操作 ==========
  getImageData = (options: Omit<GetImageDataOptions, 'ctx'>) => {
    return getImageData({ ...options, ctx: this.ctx })
  }

  putImageData = (options: Omit<PutImageDataOptions, 'ctx'>) => {
    return putImageData({ ...options, ctx: this.ctx })
  }

  drawImageBitmap = (options: Omit<DrawImageBitmapOptions, 'ctx'>) => {
    return drawImageBitmap({ ...options, ctx: this.ctx })
  }

  // ========== 画布操作 ==========
  clear = (options?: Omit<ClearOptions, 'ctx' | 'canvas'>) => {
    return clear({ ...options, ctx: this.ctx, canvas: this.canvasElement })
  }

  resize = (options: Omit<ResizeOptions, 'canvas'>) => {
    return resize({ ...options, canvas: this.canvasElement })
  }

  save = () => save(this.ctx)

  restore = () => restore(this.ctx)

  resetTransform = () => resetTransform(this.ctx)

  translate = (options: Omit<TranslateOptions, 'ctx'>) => {
    return translate({ ...options, ctx: this.ctx })
  }

  rotate = (options: Omit<RotateOptions, 'ctx'>) => {
    return rotate({ ...options, ctx: this.ctx })
  }

  scale = (options: Omit<ScaleOptions, 'ctx'>) => {
    return scale({ ...options, ctx: this.ctx })
  }

  // ========== 变换矩阵 ==========
  setTransform = (options: Omit<SetTransformOptions, 'ctx'>) => {
    return setTransform({ ...options, ctx: this.ctx })
  }

  transform = (options: Omit<TransformOptions, 'ctx'>) => {
    return transform({ ...options, ctx: this.ctx })
  }

  getTransform = () => {
    return getTransform(this.ctx)
  }

  setTransformMatrix = (matrix: DOMMatrix) => {
    return setTransformMatrix({ matrix, ctx: this.ctx })
  }

  // ========== 无障碍 ==========
  drawFocusIfNeeded = (options: Omit<DrawFocusIfNeededOptions, 'ctx'>) => {
    return drawFocusIfNeeded({ ...options, ctx: this.ctx })
  }

  // ========== 导出 ==========
  createBase64 = (
    type?: 'image/png' | 'image/jpeg' | 'image/webp',
    quality?: number
  ) => {
    return this.canvasElement.toDataURL(type || 'image/png', quality)
  }

  toBlob = (options?: Omit<ToBlobOptions, 'canvas'>) => {
    return toBlob({ ...options, canvas: this.canvasElement })
  }

  download = (options?: Omit<DownloadOptions, 'canvas'>) => {
    return download({ ...options, canvas: this.canvasElement })
  }

  // ========== 工具方法 ==========
  getContext = () => this.ctx

  getCanvas = () => this.canvasElement

  /** 角度转弧度 */
  degToRad = degToRad

  /** 预设滤镜 */
  filters = filters

  /** 异步创建 ImageBitmap */
  createImageBitmap = createImageBitmapAsync

  /** 从 URL 加载 ImageBitmap */
  loadImageBitmap = loadImageBitmap
}

// 导出类型
export type {
  AddArcOptions,
  AddBezierOptions,
  AddCircleOptions,
  AddClipImageOptions,
  AddConicGradientOptions,
  AddEllipseOptions,
  AddImageOptions,
  AddLinearGradientOptions,
  AddLineOptions,
  AddPathOptions,
  AddPolygonOptions,
  AddQuadraticOptions,
  AddRadialGradientOptions,
  AddRectOptions,
  AddRoundRectOptions,
  AddTextOptions,
  ClearOptions,
  ClipCircleOptions,
  ClipPathOptions,
  ClipRectOptions,
  CreateImageBitmapOptions,
  DownloadOptions,
  DrawFocusIfNeededOptions,
  DrawImageBitmapOptions,
  DrawPatternOptions,
  FillTextOptions,
  GetImageDataOptions,
  GradientColorStop,
  InitCanvasOptions,
  IsPointInPathOptions,
  IsPointInStrokeOptions,
  MeasureTextOptions,
  PathCommand,
  PutImageDataOptions,
  ResizeOptions,
  RotateOptions,
  ScaleOptions,
  SetCompositeOperationOptions,
  SetFilterOptions,
  SetGlobalAlphaOptions,
  SetLineDashOptions,
  SetLineStyleOptions,
  SetShadowOptions,
  SetTransformMatrixOptions,
  SetTransformOptions,
  StrokeTextOptions,
  TextMetricsResult,
  ToBlobOptions,
  TransformOptions,
  TranslateOptions,
}
