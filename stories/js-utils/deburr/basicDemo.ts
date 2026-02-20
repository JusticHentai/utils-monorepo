import { action } from 'storybook/actions'
import deburr from '../../../packages/js-utils/src/deburr'

const basicDemo = () => {
  // 拉丁增补字母转换
  action('deburr - 去除变音符号')({
    'déjà vu': deburr('déjà vu'),
    'über': deburr('über'),
    'crème brûlée': deburr('crème brûlée'),
    'Ñoño': deburr('Ñoño'),
  })

  // 特殊字符转换
  action('deburr - 特殊字符')({
    'Æther': deburr('Æther'),
    'straße': deburr('straße'),
    'Þór': deburr('Þór'),
    说明: 'Æ→Ae, ß→ss, Þ→Th 等特殊映射',
  })

  // 数学运算符不转换
  action('deburr - 数学运算符保留')({
    '×': deburr('×'),
    '÷': deburr('÷'),
    说明: '数学运算符 × 和 ÷ 不是字母变体，保持不变',
  })
}

export default basicDemo
