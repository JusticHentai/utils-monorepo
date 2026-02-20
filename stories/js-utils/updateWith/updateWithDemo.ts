import { action } from 'storybook/actions'
import updateWith from '../../../packages/js-utils/src/updateWith'

const updateWithDemo = () => {
  const object = {}
  action('updateWith 演示')({
    '使用 Object 自定义创建': updateWith(
      object,
      '[0][1]',
      () => 'a',
      Object
    ),
  })
}

export default updateWithDemo
