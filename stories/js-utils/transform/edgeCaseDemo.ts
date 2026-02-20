import { action } from 'storybook/actions'
import transform from '../../../packages/js-utils/src/transform'

const edgeCaseDemo = () => {
  action('transform - 边界情况')({
    '数组转对象': transform([2, 3, 4], (r, n) => { r.push(n * n); return n < 4 }, []), '空数组': transform([], (r, n) => r.push(n), [])
  })
}

export default edgeCaseDemo
