import { action } from 'storybook/actions'
import cond from '../../../packages/js-utils/src/cond'

const basicDemo = () => {
  // 条件分支函数
  const classify = cond<number, string>([
    [(v) => v < 0, () => '负数'],
    [(v) => v === 0, () => '零'],
    [(v) => v > 0, () => '正数'],
  ])

  action('cond - 数字分类')({
    '-5': classify(-5),
    '0': classify(0),
    '10': classify(10),
  })

  // 无匹配条件返回 undefined
  const onlyPositive = cond<number, string>([
    [(v) => v > 0, (v) => `正数: ${v}`],
  ])

  action('cond - 无匹配返回 undefined')({
    '5': onlyPositive(5),
    '-1': onlyPositive(-1),
    说明: '没有匹配的条件时返回 undefined',
  })
}

export default basicDemo
