import { action } from 'storybook/actions'
import flatMap from '../../../packages/js-utils/src/flatMap'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const flatMapDeepDemo = () => {
  const iteratee = (n: number) => [[[n * 2]]]

  action('flatMapDeep vs flatMap 对比')({
    '说明': 'iteratee 返回三层嵌套 [[[n * 2]]]',
    'flatMap (只扁平一层)': flatMap([1, 2], iteratee),
    'flatMapDeep (完全递归扁平化)': flatMapDeep([1, 2], iteratee),
  })
}

export default flatMapDeepDemo
