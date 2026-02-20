import { action } from 'storybook/actions'
import uniqueId from '../../../packages/element-utils/src/uniqueId'

const generateDemo = () => {
  const id1 = uniqueId()
  const id2 = uniqueId()
  const id3 = uniqueId()

  action('生成的唯一ID')({ id1, id2, id3 })
}

export default generateDemo
