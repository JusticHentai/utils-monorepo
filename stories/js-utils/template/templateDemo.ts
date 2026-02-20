import { action } from 'storybook/actions'
import template from '../../../packages/js-utils/src/template'

const templateDemo = () => {
  // 基础插值 <%= %>
  const compiled = template('Hello, <%= name %>!')
  action('template - 基础插值')(compiled({ name: 'World' }))

  // HTML 转义 <%- %>
  const escapeTpl = template('<%- value %>')
  action('template - HTML 转义')(escapeTpl({ value: '&<>"\'/' }))

  // 循环执行 <% %>
  const listTpl = template(
    '<ul><% items.forEach(function(item) { %><li><%= item %></li><% }); %></ul>'
  )
  action('template - 循环执行')(listTpl({ items: ['a', 'b', 'c'] }))

  // 引用 evaluate 中声明的变量
  const varTpl = template('<% var b = a; %><%= b.value %>')
  action('template - evaluate 中声明变量')(varTpl({ a: { value: 1 } }))

  // 复杂表达式：三元运算符
  const ternaryTpl = template('<%= value ? value : "default" %>')
  action('template - 三元运算符')(ternaryTpl({ value: 'actual' }))

  // null/undefined 解析为空字符串
  const nullTpl = template('<%= a %><%- a %>')
  action('template - null 值为空字符串')(nullTpl({ a: null }))

  // 无定界符直接返回原文本
  action('template - 纯文本')(template('abc')({}))

  // 单行注释支持
  const commentTpl = template('<% // comment %><% if (value) { %>yes<% } else { %>no<% } %>')
  action('template - 代码注释')(commentTpl({ value: true }))

  // 自定义定界符
  const customTpl = template('{{= name }}', {
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
  })
  action('template - 自定义定界符')(customTpl({ name: 'custom' }))
}

export default templateDemo
