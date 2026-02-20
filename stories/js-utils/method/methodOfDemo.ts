import { action } from 'storybook/actions'
import methodOf from '../../../packages/js-utils/src/methodOf'

const methodOfDemo = () => {
  const obj = {
    greet: (name: string) => 'Hello, ' + name,
    farewell: (name: string) => 'Goodbye, ' + name,
  }

  const callOnObj = methodOf(obj, 'World')

  action('methodOf - greet')({ 结果: callOnObj('greet') })
  action('methodOf - farewell')({ 结果: callOnObj('farewell') })
}

export default methodOfDemo
