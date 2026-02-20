import { action } from 'storybook/actions'
import isElement from '../../../packages/element-utils/src/isElement'

const falseDemo = () => {
  const testCases = [
    { label: 'null', value: null },
    { label: 'undefined', value: undefined },
    { label: '字符串 "<div>"', value: '<div>' },
    { label: '数字 123', value: 123 },
    { label: '普通对象', value: { nodeType: 1 } },
    { label: '布尔值 true', value: true },
    { label: '文本节点', value: document.createTextNode('text') },
    { label: '注释节点', value: document.createComment('comment') },
  ]

  testCases.forEach(({ label, value }) => {
    action(label)(isElement(value))
  })
}

export default falseDemo
