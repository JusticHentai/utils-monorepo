import { action } from 'storybook/actions'
import sortBy from '../../../packages/js-utils/src/sortBy'

const edgeCaseDemo = () => {
  action('sortBy - 边界情况')({
    '单属性': sortBy([{n:'b'},{n:'a'}], ['n']), '空数组': sortBy([], ['n']), '多属性': sortBy([{a:1,b:2},{a:1,b:1}], ['a','b'])
  })
}

export default edgeCaseDemo
