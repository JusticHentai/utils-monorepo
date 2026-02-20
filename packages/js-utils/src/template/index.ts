/**
 * 创建一个编译后的模板函数
 *
 * 支持三种模板语法：
 * - `<%= %>` 直接输出（不转义）
 * - `<%- %>` 转义输出（HTML 转义，防 XSS）
 * - `<% %>`  执行语句（如 if/for 等控制流）
 *
 * 编译流程：
 * 1. 定义 escapeHtml 函数，供 <%- %> 调用
 * 2. 将三种正则合并为一个 matcher
 * 3. 遍历模板字符串，将静态文本和动态标记逐段拼接为 JS 函数体源码：
 *    - 静态文本 → 直接追加到字符串拼接 `__p += '...'`
 *    - `<%- val %>` → `__p += __e(val)`，调用转义函数
 *    - `<%= val %>` → `__p += ((__t = (val)) == null ? '' : __t)`，直接输出
 *    - `<% code %>` → 中断拼接，插入可执行代码，再恢复拼接
 * 4. 用 with(obj) 包裹，使数据属性可直接按变量名访问
 * 5. new Function 编译源码为渲染函数，返回闭包
 *
 * @param string - 模板字符串
 * @param options - 选项对象，可自定义三种语法的正则
 * @returns 返回编译后的模板函数
 *
 * @example
 * // 场景一：直接输出 <%= %>
 * // 模板 'hello <%= user %>!' 生成的源码：
 * //   __p += 'hello ' + ((__t = (user)) == null ? '' : __t) + '!'
 * const compiled = template('hello <%= user %>!')
 * compiled({ user: 'fred' })
 * // => 'hello fred!'
 *
 * @example
 * // 场景二：HTML 转义输出 <%- %>（防 XSS）
 * // 模板 '<b><%- value %></b>' 生成的源码：
 * //   __p += '<b>' + __e(value) + '</b>'
 * // __e 即 escapeHtml，将 < > 转为 &lt; &gt;
 * const compiled2 = template('<b><%- value %></b>')
 * compiled2({ value: '<script>' })
 * // => '<b>&lt;script&gt;</b>'
 *
 * @example
 * // 场景三：执行语句 <% %>（控制流）
 * // 模板中 <% %> 会中断字符串拼接，插入可执行 JS 代码：
 * //   __p += '';
 * //   users.forEach(user => { ;
 * //   __p += '<li>' + __e(user) + '</li>';
 * //    }) ;
 * //   __p += '';
 * const compiled3 = template('<% users.forEach(user => { %><li><%- user %></li><% }) %>')
 * compiled3({ users: ['fred', 'barney'] })
 * // => '<li>fred</li><li>barney</li>'
 */
const template = (
  string: string,
  options?: {
    interpolate?: RegExp
    escape?: RegExp
    evaluate?: RegExp
  }
): ((data: Record<string, unknown>) => string) => {
  const settings = {
    escape: /<%-([\s\S]+?)%>/g, // 匹配 <%- %> 转义输出（HTML 转义）
    interpolate: /<%=([\s\S]+?)%>/g, // 匹配 <%= %> 直接输出（不转义）
    evaluate: /<%([\s\S]+?)%>/g, // 匹配 <% %> 执行语句（如 if/for）
    ...options,
  }

  // 第一步：HTML 转义函数，供 <%- %> 调用，将 & < > " ' 替换为 HTML 实体
  const escapeHtml = (str: string): string => {
    const htmlEscapes: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return String(str).replace(/[&<>"']/g, (char) => htmlEscapes[char])
  }

  // 第二步：将三种正则合并为一个 matcher，用 | 连接，末尾加 |$ 确保匹配到字符串结尾
  let index = 0
  let source = "__p += '"

  const matcher = new RegExp(
    [
      settings.escape.source,
      settings.interpolate.source,
      settings.evaluate.source,
    ].join('|') + '|$',
    'g'
  )

  // 第三步：遍历模板字符串，逐段拼接为 JS 函数体源码
  // 这里利用 string.replace 配合 /g 正则实现遍历：
  // replace 遇到全局正则时，会自动从左到右逐个匹配，每次命中都调用回调函数，
  // 等价于一个由 JS 引擎驱动的循环，无需手动 while/for。
  // 我们不关心 replace 的替换结果（返回值被丢弃），只利用回调的副作用来拼接 source。
  //
  // 以 'hello <%= user %>!' 为例，最终生成的 source 类似：
  //   var __t, __p = '', __e = __escapeHtml;
  //   with(obj) {
  //     __p += 'hello ' + ((__t = (user)) == null ? '' : __t) + '!';
  //   }
  //   return __p;
  string.replace(
    matcher,
    (match, escapeValue, interpolateValue, evaluateValue, offset) => {
      // 将上一个标记到当前标记之间的静态文本追加到 source，并转义特殊字符
      source += string
        .slice(index, offset)
        .replace(/['\\\r\n\u2028\u2029]/g, (char) => {
          const escapes: Record<string, string> = {
            "'": "\\'",
            '\\': '\\\\',
            '\r': '\\r',
            '\n': '\\n',
            '\u2028': '\\u2028',
            '\u2029': '\\u2029',
          }
          return escapes[char]
        })

      index = offset + match.length

      if (escapeValue) {
        // <%- value %> → 调用 __e() 进行 HTML 转义后拼接
        source += "' + __e(" + escapeValue + ") + '"
      } else if (interpolateValue) {
        // <%= value %> → 直接输出，null/undefined 转为空字符串
        source +=
          "' + ((__t = (" + interpolateValue + ")) == null ? '' : __t) + '"
      } else if (evaluateValue) {
        // <% code %> → 中断字符串拼接，插入可执行代码，再恢复拼接
        source += "';\n" + evaluateValue + ";\n__p += '"
      }

      return match
    }
  )

  // 第四步：包装 source，用 with(obj) 使数据属性可直接按变量名访问
  source += "';\n"
  source = 'with(obj) {\n' + source + '}\n'
  source = "var __t, __p = '', __e = __escapeHtml;\n" + source + 'return __p;\n'

  // 第五步：用 new Function 编译源码为渲染函数，返回闭包
  return (data: Record<string, unknown>): string => {
    const render = new Function('obj', '__escapeHtml', source)
    return render(data, escapeHtml)
  }
}

export default template
