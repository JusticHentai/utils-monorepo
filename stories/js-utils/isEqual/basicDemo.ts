import { action } from 'storybook/actions'
import isEqual from '../../../packages/js-utils/src/isEqual'

const basicDemo = () => {
  // 原始值
  action('isEqual - 原始值')({
    '1 === 1': isEqual(1, 1),
    "'a' === 'a'": isEqual('a', 'a'),
    'null === null': isEqual(null, null),
    'NaN === NaN': isEqual(NaN, NaN),
    '1 !== 2': isEqual(1, 2),
    '1 !== "1"': isEqual(1, '1'),
  })

  // Date
  action('isEqual - Date')({
    '相同时间': isEqual(new Date(2024, 0, 1), new Date(2024, 0, 1)),
    '不同时间': isEqual(new Date(2024, 0, 1), new Date(2024, 0, 2)),
  })

  // RegExp
  action('isEqual - RegExp')({
    '相同正则': isEqual(/x/g, /x/g),
    '不同正则': isEqual(/x/g, /y/g),
  })
}

export default basicDemo
