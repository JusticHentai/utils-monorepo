import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

const arrayDemo = () => {
  const arr: any[] = [1, [2, 3], [4, 5]]
  const cloned = deepClone(arr)
  cloned[1][0] = 999

  action('深拷贝数组')({
    original: arr,
    cloned,
    isDeep: arr[1][0] !== cloned[1][0],
  })
}

export default arrayDemo
