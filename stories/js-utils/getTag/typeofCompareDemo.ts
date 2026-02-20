import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const typeofCompareDemo = () => {
  // typeof 无法区分的情况
  action('typeof null')(typeof null) // 'object'
  action('typeof []')(typeof []) // 'object'
  action('typeof {}')(typeof {}) // 'object'
  action('typeof new Date()')(typeof new Date()) // 'object'
  action('typeof /abc/')(typeof /abc/) // 'object'

  // getTag 可以精确区分
  action('getTag(null)')(getTag(null)) // '[object Null]'
  action('getTag([])')(getTag([])) // '[object Array]'
  action('getTag({})')(getTag({})) // '[object Object]'
  action('getTag(new Date())')(getTag(new Date())) // '[object Date]'
  action('getTag(/abc/)')(getTag(/abc/)) // '[object RegExp]'
}

export default typeofCompareDemo
