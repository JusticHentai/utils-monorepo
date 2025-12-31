import isPureElement from '../../../packages/element-utils/src/isPureElement'

const objectDemo = () => {
  const result = isPureElement({ key: 'value' })
  return { isPure: result, type: 'object' }
}

export default objectDemo
