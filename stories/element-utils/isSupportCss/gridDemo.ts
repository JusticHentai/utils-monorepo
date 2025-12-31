import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const gridDemo = () => {
  const result = isSupportCss({
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
  })

  return { isSupport: result, css: 'display: grid' }
}

export default gridDemo
