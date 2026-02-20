import { action } from 'storybook/actions'
import SetOptional from '../../../packages/js-utils/src/SetOptional'

interface User {
  id: number
  name: string
  email: string
}

const normalDemo = () => {
  // 将 email 变为可选
  type UserWithOptionalEmail = SetOptional<User, 'email'>

  const user: UserWithOptionalEmail = {
    id: 1,
    name: 'John',
    // email 现在是可选的
  }
  action('SetOptional 使用示例')(user)
}

export default normalDemo
