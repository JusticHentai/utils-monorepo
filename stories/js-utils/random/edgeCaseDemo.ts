import { action } from 'storybook/actions'
import random from '../../../packages/js-utils/src/random'

const edgeCaseDemo = () => {
  action('random - 边界情况')({
    'random(0, 5)': random(0, 5),
    'random(5)': random(5),
    'random(1, 1)相同值': random(1, 1),
    'random()无参': random(),
  })
}

export default edgeCaseDemo
