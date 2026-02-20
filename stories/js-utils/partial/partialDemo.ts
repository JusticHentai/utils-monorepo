import { action } from 'storybook/actions'
import partial from '../../../packages/js-utils/src/partial'

const partialDemo = () => {
  const greet = (greeting: string, name: string) => greeting + ', ' + name + '!'
  const sayHello = partial(greet, 'Hello')

  action('partial - 预设 greeting')({
    sayHello_Alice: sayHello('Alice'),
    sayHello_Bob: sayHello('Bob'),
  })
}

export default partialDemo
