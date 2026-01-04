import { useState } from 'react'

import useUpdateEffect from '.'

// 示例组件
const ExampleComponent = () => {
  const [count, setCount] = useState(0)

  // 首次渲染不会执行，只有 count 更新时才会执行
  useUpdateEffect(() => {
    console.log('count 更新了:', count)

    return () => {
      console.log('清理函数')
    }
  }, [count])

  return {
    count,
    increment: () => setCount((c) => c + 1),
  }
}

export default ExampleComponent
