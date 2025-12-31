import randomColor from '../../../../packages/learn-utils/src/handwritten/randomColor'

const normalDemo = () => {
  const colors = []

  for (let i = 0; i < 5; i++) {
    colors.push(randomColor())
  }

  return {
    message: '生成随机颜色',
    colors,
  }
}

export default normalDemo
