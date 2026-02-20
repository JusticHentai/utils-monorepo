import { action } from 'storybook/actions'
import type SetOptional from '../../../packages/js-utils/src/SetOptional'

const edgeCaseDemo = () => {
  // SetOptional 是类型工具，不是运行时函数
  interface AllRequired {
    a: string
    b: number
  }

  type WithOptionalA = SetOptional<AllRequired, 'a'>
  const obj: WithOptionalA = { b: 1 }

  action('SetOptional - 边界情况')({
    说明: 'SetOptional 是纯类型工具，编译时生效',
    省略a: obj,
  })
}

export default edgeCaseDemo
