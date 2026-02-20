import { action } from 'storybook/actions'

const sendXHRDemo = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
  xhr.send()

  action('发送 XHR 请求')('GET https://jsonplaceholder.typicode.com/posts/1')
}

export default sendXHRDemo
