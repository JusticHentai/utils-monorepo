import isPureElement from '../../../packages/element-utils/src/isPureElement'

const stringDemo = () => {
  const result = isPureElement('Hello World')
  return { isPure: result, type: 'string' }
}

export default stringDemo
