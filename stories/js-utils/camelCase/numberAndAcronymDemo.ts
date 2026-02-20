import { action } from 'storybook/actions'
import camelCase from '../../../packages/js-utils/src/camelCase'

const numberAndAcronymDemo = () => {
  // 含数字的字符串
  action('camelCase - 含数字处理')({
    '12 feet': camelCase('12 feet'),
    'enable 6h format': camelCase('enable 6h format'),
    'enable 24H format': camelCase('enable 24H format'),
    'too legit 2 quit': camelCase('too legit 2 quit'),
    'walk 500 miles': camelCase('walk 500 miles'),
    'xhr2 request': camelCase('xhr2 request'),
  })

  // 首字母缩略词
  action('camelCase - 首字母缩略词')({
    'safe HTML': camelCase('safe HTML'),
    'safeHTML': camelCase('safeHTML'),
    'escape HTML entities': camelCase('escape HTML entities'),
    'escapeHTMLEntities': camelCase('escapeHTMLEntities'),
    'XMLHttpRequest': camelCase('XMLHttpRequest'),
  })
}

export default numberAndAcronymDemo
