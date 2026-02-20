import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const invalidDemo = () => {
  const nullResult = getElementInfo(null as unknown as Element)
  action('传入 null')(nullResult)

  const stringResult = getElementInfo('div' as unknown as Element)
  action('传入字符串')(stringResult)

  const objectResult = getElementInfo({ tagName: 'div' } as unknown as Element)
  action('传入普通对象')(objectResult)
}

export default invalidDemo
