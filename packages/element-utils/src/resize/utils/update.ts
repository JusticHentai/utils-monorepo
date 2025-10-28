import { Options } from '../interface'
import getCurrentRatio from './getCurrentRatio'
import setFullScreen from './setFullScreen'
import setRemSize from './setRemSize'

const update = (options: Options) => {
  const { preset, type, fullScreen, cb } = options

  // 获取当前适配比率
  const ratio = getCurrentRatio({
    preset,
    type,
  })

  // 设置适配比率
  setRemSize(ratio)

  // 执行回调函数
  cb?.({ ...options, ratio })

  // 设置 body 全屏高度
  fullScreen && setFullScreen()
}

export default update
