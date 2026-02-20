import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const isUrlDemo = () => {
  action('isUrl - https')(isUrl('https://example.com'))
  action('isUrl - http')(isUrl('http://example.com/path'))
  action('isUrl - 无协议')(isUrl('example.com'))
  action('isUrl - 空字符串')(isUrl(''))
  action('isUrl - 非URL')(isUrl('not a url'))
}

export default isUrlDemo
