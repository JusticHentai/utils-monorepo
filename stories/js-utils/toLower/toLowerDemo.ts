import { action } from 'storybook/actions'
import toLower from '../../../packages/js-utils/src/toLower'

const toLowerDemo = () => {
  action('toLower 演示')({
    '"HELLO"': toLower('HELLO'),
    '"Hello World"': toLower('Hello World'),
    '"--Foo-Bar--"': toLower('--Foo-Bar--'),
  })
}

export default toLowerDemo
