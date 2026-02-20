import { action } from 'storybook/actions'
import partialRight from '../../../packages/js-utils/src/partialRight'

const partialRightDemo = () => {
  const greet = (greeting, name) => greeting + ' ' + name
  const greetFred = partialRight(greet, 'fred')
  action('partialRight 演示')({ 'greetFred("hi")': greetFred('hi') })
}

export default partialRightDemo
