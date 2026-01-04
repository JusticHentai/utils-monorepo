import useDoubleClick from '.'

// 基本用法
const ExampleComponent = () => {
  const { handleClick } = useDoubleClick({
    onClick: (event) => {
      console.log('单击事件', event.clientX, event.clientY)
    },
    onDoubleClick: (event) => {
      console.log('双击事件', event.clientX, event.clientY)
    },
    delay: 300, // 300ms 内的第二次点击视为双击
  })

  // 在 JSX 中使用
  // <div onClick={handleClick}>点击我</div>

  return { handleClick }
}

// 仅处理双击
const DoubleClickOnlyComponent = () => {
  const { handleClick } = useDoubleClick({
    onDoubleClick: (event) => {
      console.log('双击打开详情', event)
    },
    delay: 250,
  })

  return { handleClick }
}

// 仅处理单击（带双击保护）
const SingleClickWithProtectionComponent = () => {
  const { handleClick } = useDoubleClick({
    onClick: (event) => {
      console.log('单击选中', event)
    },
    delay: 200,
  })

  return { handleClick }
}

export { ExampleComponent, DoubleClickOnlyComponent, SingleClickWithProtectionComponent }
