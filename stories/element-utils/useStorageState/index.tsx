import { useState } from 'react'
import { action } from 'storybook/actions'

import {
  useLocalStorageState,
  useSessionStorageState,
} from '../../../packages/element-utils/src/useStorageState'
import '../../.css/index.css'

const LocalStorageSection = () => {
  const [message, setMessage] = useLocalStorageState<string>(
    'storybook-demo-message',
    {
      defaultValue: 'Hello',
    }
  )

  return (
    <div>
      <h4>useLocalStorageState</h4>
      <div
        className="button"
        onClick={() => {
          setMessage('World')
          action('useLocalStorageState')('设置值为 World')
        }}
      >
        设置为 &quot;World&quot;
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage((prev) => `${prev}!`)
          action('useLocalStorageState')('追加感叹号')
        }}
      >
        追加感叹号
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage(undefined as any)
          action('useLocalStorageState')('清除值（从 localStorage 移除）')
        }}
      >
        清除值
      </div>
      <div className="area">
        <div className="card">{message ?? '(空)'}</div>
      </div>
    </div>
  )
}

const SessionStorageSection = () => {
  const [count, setCount] = useSessionStorageState<number>(
    'storybook-demo-count',
    {
      defaultValue: 0,
    }
  )

  return (
    <div>
      <h4>useSessionStorageState</h4>
      <div
        className="button"
        onClick={() => {
          setCount((prev) => (prev ?? 0) + 1)
          action('useSessionStorageState')('计数 +1')
        }}
      >
        计数 +1
      </div>
      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('useSessionStorageState')('重置计数')
        }}
      >
        重置计数
      </div>
      <div className="area">
        <div className="card">计数: {count}</div>
      </div>
    </div>
  )
}

const CustomSerializerSection = () => {
  const [data, setData] = useLocalStorageState<{
    name: string
    age: number
  }>('storybook-demo-custom', {
    defaultValue: { name: '张三', age: 25 },
    serializer: (v) => btoa(JSON.stringify(v)),
    deserializer: (v) => JSON.parse(atob(v)),
    onError: (e) => action('自定义序列化错误')(String(e)),
  })

  return (
    <div>
      <h4>自定义序列化（Base64）</h4>
      <div
        className="button"
        onClick={() => {
          setData({ name: '李四', age: 30 })
          action('自定义序列化')('使用 Base64 编码存储')
        }}
      >
        设置数据
      </div>
      <div
        className="button"
        onClick={() => {
          const raw = localStorage.getItem('storybook-demo-custom')
          action('查看原始存储值')(raw)
        }}
      >
        查看 localStorage 原始值
      </div>
      <div className="area">
        <div className="card">
          {data ? `${data.name}, ${data.age}岁` : '(空)'}
        </div>
      </div>
    </div>
  )
}

/** 跨组件通信 - 组件 A */
const CrossComponentA = () => {
  const [theme, setTheme] = useLocalStorageState<string>(
    'storybook-demo-theme',
    {
      defaultValue: 'light',
      listenStorageChange: true,
    }
  )

  return (
    <div>
      <div style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>
        组件 A
      </div>
      <div
        className="button"
        onClick={() => {
          const next = theme === 'light' ? 'dark' : 'light'
          setTheme(next)
          action('组件A')(`切换主题为 ${next}`)
        }}
      >
        切换主题
      </div>
      <div className="area">
        <div
          className="card"
          style={{
            background:
              theme === 'dark'
                ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          当前主题: {theme}
        </div>
      </div>
    </div>
  )
}

/** 跨组件通信 - 组件 B（自动同步） */
const CrossComponentB = () => {
  const [theme] = useLocalStorageState<string>('storybook-demo-theme', {
    defaultValue: 'light',
    listenStorageChange: true,
  })

  return (
    <div>
      <div style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>
        组件 B（自动同步）
      </div>
      <div className="area">
        <div
          className="card"
          style={{
            background:
              theme === 'dark'
                ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          同步主题: {theme}
        </div>
      </div>
    </div>
  )
}

const CrossComponentSection = () => {
  return (
    <div>
      <h4>跨组件通信（listenStorageChange）</h4>
      <p style={{ fontSize: 12, color: '#666', margin: '8px 0' }}>
        两个组件共享同一个 key，开启 listenStorageChange
        后，组件A修改值时组件B自动同步更新
      </p>
      <div className="flex">
        <CrossComponentA />
        <CrossComponentB />
      </div>
    </div>
  )
}

/** 函数式默认值 */
const FunctionDefaultSection = () => {
  const [timestamp, setTimestamp] = useLocalStorageState<string>(
    'storybook-demo-fn-default',
    {
      defaultValue: () => new Date().toLocaleString(),
    }
  )

  return (
    <div>
      <h4>函数式默认值</h4>
      <p style={{ fontSize: 12, color: '#666', margin: '8px 0' }}>
        defaultValue 支持传入函数，仅在无缓存时执行一次（惰性初始化）
      </p>
      <div
        className="button"
        onClick={() => {
          setTimestamp(new Date().toLocaleString())
          action('函数式默认值')('更新时间戳')
        }}
      >
        更新时间戳
      </div>
      <div
        className="button"
        onClick={() => {
          setTimestamp(undefined as any)
          action('函数式默认值')('清除缓存，下次将重新初始化')
        }}
      >
        清除缓存
      </div>
      <div className="area">
        <div className="card">{timestamp ?? '(空)'}</div>
      </div>
    </div>
  )
}

/** 动态 key 切换 */
const DynamicKeySection = () => {
  const [currentUser, setCurrentUser] = useState('user-a')
  const [config, setConfig] = useLocalStorageState<string>(
    `storybook-demo-config-${currentUser}`,
    {
      defaultValue: `${currentUser} 的默认配置`,
    }
  )

  return (
    <div>
      <h4>动态 Key 切换</h4>
      <p style={{ fontSize: 12, color: '#666', margin: '8px 0' }}>
        切换用户时 key 变化，自动读取对应用户的缓存数据
      </p>
      <div
        className="button"
        onClick={() => setCurrentUser('user-a')}
        style={{ opacity: currentUser === 'user-a' ? 1 : 0.5 }}
      >
        用户 A
      </div>
      <div
        className="button"
        onClick={() => setCurrentUser('user-b')}
        style={{ opacity: currentUser === 'user-b' ? 1 : 0.5 }}
      >
        用户 B
      </div>
      <div
        className="button"
        onClick={() => {
          setConfig(`${currentUser} 修改于 ${new Date().toLocaleTimeString()}`)
          action('动态Key')(`更新 ${currentUser} 的配置`)
        }}
      >
        修改配置
      </div>
      <div className="area">
        <div className="card">
          <div>{currentUser}</div>
          <div className="desc">{config}</div>
        </div>
      </div>
    </div>
  )
}

const UseStorageStateDemo = () => {
  return (
    <div>
      <LocalStorageSection />
      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />
      <SessionStorageSection />
      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />
      <CustomSerializerSection />
      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />
      <CrossComponentSection />
      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />
      <FunctionDefaultSection />
      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />
      <DynamicKeySection />
    </div>
  )
}

export default UseStorageStateDemo
