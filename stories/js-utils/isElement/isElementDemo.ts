import { action } from 'storybook/actions'
import isElement from '../../../packages/js-utils/src/isElement'

const isElementDemo = () => {
  action('isElement 演示')({
    'document.body': isElement(document.body),
    'document.createElement("div")': isElement(document.createElement('div')),
    '"<div>"': isElement('<div>'),
    '{}': isElement({}),
  })
}

export default isElementDemo
