import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const basicDemo = () => {
  const result = isSupportCss({
    display: 'flex',
    width: '100px',
  })

  return { isSupport: result, css: 'display: flex; width: 100px' }
}

export default basicDemo
