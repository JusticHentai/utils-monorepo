import { action } from 'storybook/actions'
import isElement from '../../../packages/element-utils/src/isElement'

const basicDemo = () => {
  const div = document.createElement('div')
  const span = document.createElement('span')
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  action('div 元素')(isElement(div))
  action('span 元素')(isElement(span))
  action('svg 元素')(isElement(svg))
  action('document.body')(isElement(document.body))
  action('document.documentElement')(isElement(document.documentElement))
}

export default basicDemo
