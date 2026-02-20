import { action } from 'storybook/actions'
import startCase from '../../../packages/js-utils/src/startCase'
import toLower from '../../../packages/js-utils/src/toLower'
import toUpper from '../../../packages/js-utils/src/toUpper'

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
