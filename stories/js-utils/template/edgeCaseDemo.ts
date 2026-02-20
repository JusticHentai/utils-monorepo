import { action } from 'storybook/actions'
import template from '../../../packages/js-utils/src/template'

const edgeCaseDemo = () => {
  action('template - 边界情况')({
    '变量插值': template('hello <%= user %>')({ user: 'fred' }), 'HTML转义': template('<b><%- value %></b>')({ value: '<script>' }), '无变量': template('static text')({})
  })
}

export default edgeCaseDemo
