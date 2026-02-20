import { action } from 'storybook/actions'
import { startCase, toLower, toUpper } from '../../../packages/js-utils/src/lowerCase'

const startCaseDemo = () => {
  action('startCase')({
    'fooBar': startCase('fooBar'),
    '--foo-bar--': startCase('--foo-bar--'),
    'HELLO_WORLD': startCase('HELLO_WORLD'),
  })

  action('toLower / toUpper')({
    'toLower("HELLO")': toLower('HELLO'),
    'toUpper("hello")': toUpper('hello'),
  })
}

export default startCaseDemo
