import { action } from 'storybook/actions'
import unescape from '../../../packages/js-utils/src/unescape'

const unescapeDemo = () => {
  action('unescape 演示')({
    '反转义': unescape('&amp; &lt; &gt; &quot; &#39;'),
  })
}

export default unescapeDemo
