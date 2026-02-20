import { action } from 'storybook/actions'
import getTag from '../../../packages/js-utils/src/getTag'

const builtinTypesDemo = () => {
  action('Date')(getTag(new Date()))
  action('RegExp')(getTag(/abc/))
  action('Map')(getTag(new Map()))
  action('Set')(getTag(new Set()))
  action('WeakMap')(getTag(new WeakMap()))
  action('WeakSet')(getTag(new WeakSet()))
  action('Error')(getTag(new Error('test')))
  action('ArrayBuffer')(getTag(new ArrayBuffer(8)))
  action('Uint8Array')(getTag(new Uint8Array()))
  action('Promise')(getTag(Promise.resolve()))
}

export default builtinTypesDemo
