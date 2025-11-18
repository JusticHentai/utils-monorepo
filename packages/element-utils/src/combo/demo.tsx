import { useMemo } from 'react'
import combo from '.'

const ComboDemo = () => {
  const comboClick = useMemo(() => {
    return combo({
      onCombo: (combo?: number) => {
        console.log(combo)
      },
      onClose: () => {
        console.log('连击结束')
      },
      duration: 1000,
    })
  }, [])

  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#673424',
        color: '#fff',
      }}
      onClick={comboClick}
    >
      ComboDemo
    </div>
  )
}

export default ComboDemo
