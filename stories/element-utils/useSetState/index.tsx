import '../../.css/index.css'
import useSetState from '../../../packages/element-utils/src/useSetState'
import { action } from 'storybook/actions'

interface UserInfo {
  name: string
  age: number
  email: string
  address: {
    city: string
    street: string
  }
}

const UseSetStateDemo = () => {
  const [state, setState] = useSetState<UserInfo>({
    name: 'John',
    age: 20,
    email: 'john@example.com',
    address: {
      city: 'Beijing',
      street: 'Main Street',
    },
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>对象状态管理</div>
      <div
        style={{
          marginBottom: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontFamily: 'monospace',
          fontSize: 12,
        }}
      >
        <pre style={{ margin: 0 }}>{JSON.stringify(state, null, 2)}</pre>
      </div>

      <div
        className="button"
        onClick={() => {
          setState({ name: 'Jane' })
          action('setState')({ name: 'Jane' })
        }}
      >
        修改 name 为 Jane
      </div>
      <div
        className="button"
        onClick={() => {
          setState({ age: state.age + 1 })
          action('setState')({ age: state.age + 1 })
        }}
      >
        age + 1
      </div>
      <div
        className="button"
        onClick={() => {
          setState((prev) => ({ age: prev.age + 5 }))
          action('setState (函数式)')('age + 5')
        }}
      >
        函数式更新 age + 5
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            name: 'Mike',
            email: 'mike@example.com',
          })
          action('setState (多字段)')({ name: 'Mike', email: 'mike@example.com' })
        }}
      >
        同时修改多个字段
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            address: {
              ...state.address,
              city: 'Shanghai',
            },
          })
          action('setState (嵌套对象)')({ address: { city: 'Shanghai' } })
        }}
      >
        修改嵌套对象 city
      </div>
      <div
        className="button"
        onClick={() => {
          setState({
            name: 'John',
            age: 20,
            email: 'john@example.com',
            address: {
              city: 'Beijing',
              street: 'Main Street',
            },
          })
          action('重置')('恢复初始值')
        }}
      >
        重置所有
      </div>
    </div>
  )
}

export default UseSetStateDemo
