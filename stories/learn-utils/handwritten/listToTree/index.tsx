import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const listToTreeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('扁平数组转树形结构')(res)
        }}
      >
        扁平数组转树形结构
      </div>
    </div>
  )
}

export default listToTreeDemo
