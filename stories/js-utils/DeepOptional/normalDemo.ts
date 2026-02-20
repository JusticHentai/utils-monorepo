import { action } from 'storybook/actions'
import type DeepOptional from '../../../packages/js-utils/src/DeepOptional'

interface User {
  name: string
  profile: {
    age: number
    address: string
  }
}

const normalDemo = () => {
  // 将 profile.age 变为可选
  type UserWithOptionalAge = DeepOptional<User, ['profile', 'age']>

  const user: UserWithOptionalAge = {
    name: 'John',
    profile: {
      address: 'Beijing',
      // age 现在是可选的
    },
  }
  action('DeepOptional 使用示例')(user)
}

export default normalDemo
