import { action } from 'storybook/actions'
import unzip from '../../../packages/js-utils/src/unzip'
import unzipWith from '../../../packages/js-utils/src/unzipWith'

const unzipDemo = () => {
  // 基础：2-tuples
  action('unzip - 2元组')({
    输入: [['barney', 36], ['fred', 40]],
    结果: unzip([['barney', 36], ['fred', 40]] as any),
  })

  // 3-tuples
  action('unzip - 3元组')({
    输入: [['barney', 36, false], ['fred', 40, true]],
    结果: unzip([['barney', 36, false], ['fred', 40, true]] as any),
  })

  // 不等长数组
  action('unzip - 不等长')({
    输入: [['barney', 36], ['fred', 40, false]],
    结果: unzip([['barney', 36], ['fred', 40, false]] as any),
  })

  // 空数组
  action('unzip - 空数组')(unzip([]))

  // unzipWith - 聚合函数
  action('unzipWith - 求和')({
    输入: [[1, 4], [2, 5], [3, 6]],
    结果: unzipWith([[1, 4], [2, 5], [3, 6]], (...values: number[]) =>
      values.reduce((a, b) => a + b, 0)
    ),
  })

  // zip/unzip 可逆
  const original = [['a', 'b'], [1, 2]]
  const unzipped = unzip(original as any)
  const reZipped = unzip(unzipped as any)
  action('unzip - zip/unzip 互逆')({
    原始: original,
    unzip后: unzipped,
    再次unzip: reZipped,
  })
}

export default unzipDemo
