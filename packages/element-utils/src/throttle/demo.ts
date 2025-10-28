import throttle from '.'

const fn = throttle({
  cb: () => {
    console.log('cb')
  },
  duration: 1000,
})

fn()
