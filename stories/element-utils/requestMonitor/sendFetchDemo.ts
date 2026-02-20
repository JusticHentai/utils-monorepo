import { action } from 'storybook/actions'

const sendFetchDemo = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1')

  action('发送 Fetch 请求')('GET https://jsonplaceholder.typicode.com/users/1')
}

export default sendFetchDemo
