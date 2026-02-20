import { action } from 'storybook/actions'
import type DeepOptional from '../../../packages/js-utils/src/DeepOptional'

const edgeCaseDemo = () => {
  // DeepOptional 是类型工具，不是运行时函数
  // 验证空对象场景
  type EmptyDeep = DeepOptional<{}, never>
  const empty: EmptyDeep = {}

  action('DeepOptional - 边界情况')({
    说明: 'DeepOptional 是纯类型工具，编译时生效',
    空对象: empty,
  })
}

export default edgeCaseDemo
