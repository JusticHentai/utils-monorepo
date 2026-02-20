import { action } from 'storybook/actions'
import some from '../../../packages/js-utils/src/some'

const edgeCaseDemo = () => {
  action('some - 边界情况')({
    '有匹配': some([1,2,3], n => n > 2), '无匹配': some([1,2,3], n => n > 5), '空数组': some([], () => true)
  })
}

export default edgeCaseDemo
