import { action } from 'storybook/actions'
import walk from '../../../packages/js-utils/src/walk'

const normalDemo = async () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: [4, 5],
  }

  action('遍历对象并处理值')(obj)

  await walk({
    obj,
    cb: ({ key, value, index, parent }) => {
      action('当前键名')(key)
      action('当前值')(value)
      action('当前对象索引')(index)
      action('父级路径数组')(parent)

      const newValue = value * 2
      action('新值')(newValue)

      return newValue
    },
  })

  action('遍历对象并处理值完成')(obj)
}

export default normalDemo
