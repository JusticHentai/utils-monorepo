import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const maxLengthDemo = () => {
  const target = document.getElementById('target-long-text') as Element

  const defaultInfo = getElementInfo(target)
  action('默认截断（100）')(defaultInfo)

  const shortInfo = getElementInfo(target, { maxLength: 10 })
  action('截断长度 10')(shortInfo)

  const longInfo = getElementInfo(target, { maxLength: 200 })
  action('截断长度 200')(longInfo)
}

export default maxLengthDemo
