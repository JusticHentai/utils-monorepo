import { action } from 'storybook/actions'
import safeStringify from '../../../packages/element-utils/src/safeStringify'

interface CircularExample {
  name: string
  self?: CircularExample
  nested?: {
    parent: CircularExample
  }
}

const circularDemo = () => {
  const value: CircularExample = {
    name: 'early error payload',
  }

  value.self = value
  value.nested = {
    parent: value,
  }

  action('循环引用序列化结果')(safeStringify(value))
}

export default circularDemo
