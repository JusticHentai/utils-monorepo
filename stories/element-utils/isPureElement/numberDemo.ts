import isPureElement from '../../../packages/element-utils/src/isPureElement'

const numberDemo = () => {
  const result = isPureElement(123)
  return { isPure: result, type: 'number' }
}

export default numberDemo
