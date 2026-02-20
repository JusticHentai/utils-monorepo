import { action } from 'storybook/actions'
import { partialRight } from '../../../packages/js-utils/src/partial'

const partialRightDemo = () => {
  const greet = (greeting: string, name: string) => greeting + ', ' + name + '!'
  const greetAlice = partialRight(greet, 'Alice')

  action('partialRight - 预设 name')({
    Hello_Alice: greetAlice('Hello'),
    Hi_Alice: greetAlice('Hi'),
  })
}

export default partialRightDemo
