import { action } from 'storybook/actions'
import { reduceRight } from '../../../packages/js-utils/src/reduce'

const reduceRightDemo = () => {
  // 从右到左拼接 (lodash: reduceRight(['a','b','c'], (acc,v) => acc+v, '') => 'cba')
  action('reduceRight - 反向拼接')(reduceRight(['a', 'b', 'c'], (acc, v) => acc + v, ''))

  // 数组扁平化 (lodash: reduceRight([[0,1],[2,3],[4,5]], (f,o) => f.concat(o), []) => [4,5,2,3,0,1])
  const flattened = reduceRight(
    [[0, 1], [2, 3], [4, 5]],
    (acc, val) => [...acc, ...val],
    [] as number[],
  )
  action('reduceRight - 反向扁平化')(flattened)

  // 对象从右到左
  const obj = { a: 'x', b: 'y', c: 'z' } as Record<string, string>
  action('reduceRight - 对象反向拼接')(reduceRight(obj, (acc, v) => acc + v, ''))
}

export default reduceRightDemo