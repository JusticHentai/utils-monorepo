import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const GetFpsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          action('正在检测帧率')('请等待约 1 秒...')
          const res = await basicDemo()
          action('帧率检测结果')(res)
        }}
      >
        检测当前帧率（约 1 秒）
      </div>
    </div>
  )
}

export default GetFpsDemo
