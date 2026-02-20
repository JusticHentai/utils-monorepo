import { action } from 'storybook/actions'
import nthArg from '../../../packages/js-utils/src/nthArg'

const edgeCaseDemo = () => {
  const get1st = nthArg(0)
  const getLast = nthArg(-1)
  action('nthArg - 边界情况')({
    '第1个参数': get1st('a', 'b', 'c'),
    '最后一个': getLast('a', 'b', 'c'),
    '超出范围': nthArg(5)('a', 'b'),
  })
}

export default edgeCaseDemo
