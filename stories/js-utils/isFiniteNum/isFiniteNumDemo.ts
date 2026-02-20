import { action } from 'storybook/actions'
import isFiniteNum from '../../../packages/js-utils/src/isFiniteNum'

const isFiniteNumDemo = () => {
  action('isFiniteNum 演示')({
    '3': isFiniteNum(3),
    'Number.MIN_VALUE': isFiniteNum(Number.MIN_VALUE),
    'Infinity': isFiniteNum(Infinity),
    'NaN': isFiniteNum(NaN),
    '"3"': isFiniteNum('3'),
  })
}

export default isFiniteNumDemo
