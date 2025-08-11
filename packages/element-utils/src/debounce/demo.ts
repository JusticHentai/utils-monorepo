import debounce from '.'

const fn = debounce({
  cb: () => {
    console.log('cb')
  },
  duration: 1000,
})

fn()
