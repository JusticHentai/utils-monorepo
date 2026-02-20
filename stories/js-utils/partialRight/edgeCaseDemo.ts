import { action } from 'storybook/actions'
import partialRight from '../../../packages/js-utils/src/partialRight'

const edgeCaseDemo = () => {
  const greet = (greeting, name) => greeting + ' ' + name
  const greetFred = partialRight(greet, 'fred')
  action('partialRight - 边界情况')({
    '右侧预填': greetFred('hi'),
  })
}

export default edgeCaseDemo
