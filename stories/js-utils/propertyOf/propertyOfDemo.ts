import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const propertyOfDemo = () => {
  const object = { a: { b: 2 } }
  const fn = propertyOf(object)
  action('propertyOf 演示')({ '"a.b"': fn('a.b') })
}

export default propertyOfDemo
