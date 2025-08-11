import isSupportCss from '.'

const css = {
  display: 'flex',
  width: '100px',
}

const isSupport = isSupportCss(css)

console.log(isSupport)
