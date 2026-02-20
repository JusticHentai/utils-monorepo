import { action } from 'storybook/actions'
import getElementSize from '../../../packages/element-utils/src/getElementSize'

const basicDemo = () => {
  const element = document.querySelector('#demo-box')
  const { width, height } = getElementSize(element)

  action('getElementSize 结果')({
    width,
    height,
    description: `元素尺寸: ${width} x ${height}`,
  })

  // 测试 null 元素
  const nullResult = getElementSize(null)
  action('null 元素结果')(nullResult)
}

export default basicDemo
