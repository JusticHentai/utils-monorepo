import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import template from '../../../packages/js-utils/src/template'

const templateDemo = () => {
  // 基础插值 <%= %>
  const compiled = template('Hello, <%= name %>!')
  action('template - 基础插值')(compiled({ name: 'World' }))

  // HTML 转义 <%- %>
  const escapeTpl = template('<%- value %>')
  action('template - HTML 转义')(escapeTpl({ value: '&<>"\\'/' }))

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
    interpolate: /\\{\\{=([\\s\\S]+?)\\}\\}/g,
  })
  action('template - 自定义定界符')(customTpl({ name: 'custom' }))
}

export default templateDemo
`;function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"template",children:"template"}),`
`,e.jsx(n.p,{children:"创建编译后的模板函数。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"template"})," 创建编译后的模板函数，类似简化版的 EJS/lodash 模板引擎。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"支持三种语法"}),"："]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"语法"}),e.jsx("th",{children:"作用"}),e.jsx("th",{children:"示例"}),e.jsx("th",{children:"输出"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<%= %>"})}),e.jsx("td",{children:"直接输出（不转义）"}),e.jsxs("td",{children:[e.jsx("code",{children:"<%= user %>"}),"，user 为 ",e.jsx("code",{children:"fred"})]}),e.jsx("td",{children:e.jsx("code",{children:"fred"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<%- %>"})}),e.jsx("td",{children:"HTML 转义输出（防 XSS）"}),e.jsxs("td",{children:[e.jsx("code",{children:"<%- value %>"}),"，value 为 ",e.jsx("code",{children:"<script>"})]}),e.jsx("td",{children:e.jsx("code",{children:"&lt;script&gt;"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<% %>"})}),e.jsx("td",{children:"执行语句（控制流）"}),e.jsx("td",{children:e.jsxs("code",{children:["<% if (show) ","{ }","%>...<% ","{ }"," %>"]})}),e.jsx("td",{children:"条件渲染内容"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"编译流程"}),"："]}),`
`,e.jsx(n.h3,{id:"场景一直接输出-interpolate",children:"场景一：直接输出 interpolate"}),`
`,e.jsxs(n.p,{children:["模板：",e.jsx("code",{children:"'hello <%= user %>!'"}),"，数据：",e.jsx("code",{children:"{ user: 'fred' }"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Step 1 — 合并正则生成 matcher"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"为什么要合并？"})," 三种语法需要在同一次遍历中识别，如果分三次正则匹配，无法保证处理顺序和静态文本的正确切割。合并为一个正则后，",e.jsx(n.code,{children:"string.replace"})," 一次遍历就能按出现顺序依次处理所有标记。"]}),`
`,e.jsxs(n.p,{children:["将 ",e.jsx(n.code,{children:"escape"}),"、",e.jsx(n.code,{children:"interpolate"}),"、",e.jsx(n.code,{children:"evaluate"})," 三个正则的 ",e.jsx(n.code,{children:".source"})," 用 ",e.jsx(n.code,{children:"|"})," 拼接，末尾加 ",e.jsx(n.code,{children:"|$"})," 确保能匹配到字符串结尾（用于收集最后一段静态文本）："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`/<%-([\\s\\S]+?)%>|<%=([\\s\\S]+?)%>|<%([\\s\\S]+?)%>|$/g
`})}),`
`,e.jsx(n.p,{children:"各部分说明："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`<%-([\\s\\S]+?)%>   escape 组：匹配 <%- ... %>，捕获组1 提取中间内容
                   用于 HTML 转义输出，防止 XSS

<%=([\\s\\S]+?)%>   interpolate 组：匹配 <%= ... %>，捕获组2 提取中间内容
                   用于直接输出变量值（不转义）

<%([\\s\\S]+?)%>    evaluate 组：匹配 <% ... %>，捕获组3 提取中间内容
                   用于执行 JS 语句（if/for 等控制流）

$                  匹配字符串结尾，触发最后一次回调，用于收集最后一段静态文本

[\\s\\S]+?           匹配任意字符（含换行），+? 非贪婪，确保匹配最近的 %>
|                  三种语法按优先级排列：escape > interpolate > evaluate
                   因为 <% 是 <%= 和 <%- 的前缀，必须让更长的模式先匹配
g                  全局匹配，遍历模板中的所有标记
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Step 2 — 遍历模板，逐段拼接函数体源码"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"string.replace(matcher, ...)"})," 配合 ",e.jsx(n.code,{children:"/g"})," 全局正则，会由 JS 引擎自动从左到右逐个匹配，每次命中都调用回调函数——等价于一个引擎驱动的循环，无需手动写 ",e.jsx(n.code,{children:"while"})," 或 ",e.jsx(n.code,{children:"for"}),"。这里不关心 ",e.jsx(n.code,{children:"replace"})," 的返回值（替换结果被丢弃），只利用回调的",e.jsx(n.strong,{children:"副作用"}),"来拼接 ",e.jsx(n.code,{children:"source"})," 变量。"]}),`
`,e.jsx(n.p,{children:"每次匹配时回调："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`初始 source: "__p += '"

source 的本质：
  source 变量存储的不是模板的输出结果，而是一段【将要被 new Function 编译的 JS 源码】。
  这段源码的职责是：执行时把模板渲染结果拼接到 __p 变量中。
  所以 source 以 "__p += '" 开头，意思是生成一行 JS 代码的开头：
    __p += '后续的静态文本和动态表达式会拼接在这里...';
  最终 source 会被传给 new Function() 编译为真正可执行的函数。

  简单说：source 是"生成代码的代码"，__p += '...' 是生成的目标代码。

  例如模板 'hi <%= name %>!' 的 source 拼接过程：
    初始:          __p += '
    追加静态文本:   __p += 'hi          ← 'hi' 直接拼进字符串字面量
    遇到 <%= %>:   __p += 'hi' + (name) + '   ← 闭合引号 → 插入表达式 → 重新开启引号
    追加静态文本:   __p += 'hi' + (name) + '!'  ← '!' 继续拼进字符串
    闭合:          __p += 'hi ' + (name) + '!';  ← 最终闭合

  闭合后的 source 经过 Step 3 包装，传给 new Function 编译为可执行函数：

    var __t, __p = '', __e = __escapeHtml;   ← 声明：__p 输出缓冲，初始为空串
    with(obj) {                               ← 使 obj 的属性可直接当变量名访问
      __p += 'hi ' + (name) + '!';           ← 上面拼出的 source 就在这里执行
    }
    return __p;                               ← 返回拼接好的结果字符串

    with(obj) 的作用：
      with 会把 obj 添加到作用域链的顶部。在 with 块内访问变量时，
      JS 引擎会先在 obj 中查找，找到就用 obj 的属性值，找不到再往外层作用域查找。
      这样模板中写 name 就等价于 obj.name，不需要给每个变量加 obj. 前缀。

      如果不用 with，生成的代码就必须是：
        __p += 'hi ' + (obj.name) + '!';
      模板引擎在拼接 source 时就需要额外处理变量引用，逻辑会复杂很多。
      with 把这个问题交给 JS 引擎的作用域机制自动解决。

      注意：with 在严格模式下被禁用，所以 template 生成的函数不能用于严格模式环境。
      这也是 lodash 等库的 template 函数的已知限制。

    编译：new Function('obj', '__escapeHtml', 上面这段源码)
    等价于：function(obj, __escapeHtml) { var __t, __p = ''; ... return __p; }

    调用：fn({ name: 'tom' }, escapeHtml)
      → with({ name: 'tom' }) 使 name 直接解析为 'tom'
      → __p += 'hi ' + 'tom' + '!'
      → __p = 'hi tom!'
      → return 'hi tom!'

  可以看到，source 就是一条不断"开-闭-开"的字符串拼接语句，
  静态文本在引号内，动态表达式在引号外用 + 连接。

offset 是怎么来的？
  offset 是 String.prototype.replace 回调函数的内置参数，
  由 JS 引擎在正则匹配时自动提供，表示当前匹配项在原字符串中的起始位置（从 0 开始）。

  以模板 'hello <%= user %>!' 为例，正则引擎的匹配过程：
    原字符串: h e l l o   < % = _ u s e r _ % >  !
    位置:     0 1 2 3 4 5 6 7 8 9 ...          20

    正则引擎从位置 0 开始扫描，逐字符尝试匹配 matcher 中的模式。
    位置 0~5 都不匹配任何模式（不是 <% 开头），继续前进。
    位置 6 匹配到 '<%= user %>'（interpolate 模式命中），此时：
      match  = '<%= user %>'
      offset = 6              ← 匹配的起始位置，由引擎自动传入
    继续扫描，位置 20 开始没有更多标记，直到字符串末尾。
    末尾 $ 匹配空字符串，offset = 21（字符串长度）。

  所以 offset 不是我们计算的，是 replace 的回调机制自带的。
  我们利用 offset 配合 index（上次处理的结束位置）来 slice 出两个标记之间的静态文本。

第 1 次匹配: <%= user %> (offset=6)

  回调参数：
    match            = '<%= user %>'   （完整匹配的字符串）
    escapeValue      = undefined       （捕获组1 未命中，不是 <%- %>）
    interpolateValue = ' user '        （捕获组2 命中，<%= 和 %> 之间的内容）
    evaluateValue    = undefined       （捕获组3 未命中，不是 <% %>）
    offset           = 6               （匹配在原字符串中的起始位置）

  ① 提取静态文本：string.slice(index, offset) = string.slice(0, 6) = 'hello '
     index=0 是上一次处理结束的位置，offset=6 是本次标记的起始位置，
     两者之间的 [0, 6) 就是还没拼进 source 的纯文本。

     拼接前 source: __p += '
     拼接后 source: __p += 'hello 
     （'hello ' 直接追加到当前未闭合的字符串字面量中）

  ② 转义静态文本中的特殊字符：
     'hello ' 中没有 ' \\ \\r \\n 等需要转义的字符，所以原样追加。
     如果静态文本是 "it's"，则 ' 会被转为 \\'，避免破坏字符串字面量的引号配对。

  ③ 更新 index：index = offset + match.length = 6 + 14 = 20
     '<%= user %>' 长度为 14，下一次从位置 20 开始提取静态文本。

  ④ 判断哪个捕获组命中：interpolateValue = ' user '（不为 undefined）
     进入 interpolate 分支，生成直接输出代码：
     source += "' + ((__t = ( user )) == null ? '' : __t) + '"

     拆解这段拼接：
       '           → 闭合之前的字符串字面量
       +           → JS 字符串拼接运算符
       ((__t = ( user )) == null ? '' : __t)
                   → 先将 user 的值赋给临时变量 __t，
                     如果 __t 为 null 或 undefined，输出空字符串 ''，
                     否则输出 __t 本身。这样避免页面上出现 'null' 或 'undefined' 文字。
       +           → 继续拼接
       '           → 重新开启字符串字面量，为后续静态文本做准备

     拼接后 source: __p += 'hello ' + ((__t = ( user )) == null ? '' : __t) + '

  当前 source 的状态（末尾引号未闭合，等待下一段静态文本追加）：
    __p += 'hello ' + ((__t = ( user )) == null ? '' : __t) + '

第 2 次匹配: $ (offset=21, 字符串结尾)

  回调参数：
    match            = ''              （$ 匹配空字符串）
    escapeValue      = undefined
    interpolateValue = undefined
    evaluateValue    = undefined
    offset           = 21              （字符串长度，即结尾位置）

  ① 提取静态文本：string.slice(20, 21) = '!'
     上一次 index=20，当前 offset=21，[20, 21) 之间的 '!' 是最后一段纯文本。

     拼接后 source: __p += 'hello ' + ((__t = ( user )) == null ? '' : __t) + '!'

  ② 三个捕获组都为 undefined，不追加任何动态代码。
     $ 的作用仅仅是触发最后一次回调来收集末尾的静态文本。

  最终 source（末尾引号仍未闭合，将在 Step 3 中闭合）：
    __p += 'hello ' + ((__t = ( user )) == null ? '' : __t) + '!'
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Step 3 — 包装 source"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// 闭合字符串拼接
source += "';\\n"
// 用 with(obj) 包裹，使 user 可直接作为变量访问（无需 obj.user）
source = 'with(obj) {\\n' + source + '}\\n'
// 声明变量 __t(临时值) __p(输出缓冲) __e(转义函数)
source = "var __t, __p = '', __e = __escapeHtml;\\n" + source + 'return __p;\\n'
`})}),`
`,e.jsx(n.p,{children:"最终生成的源码："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`var __t, __p = '', __e = __escapeHtml;
with(obj) {
  __p += 'hello ' + ((__t = ( user )) == null ? '' : __t) + '!';
}
return __p;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Step 4 — 编译执行"})}),`
`,e.jsxs(n.p,{children:[e.jsx("code",{children:"new Function('obj', '__escapeHtml', source)"})," 编译为函数，传入 ",e.jsx("code",{children:"{ user: 'fred' }"})," 执行："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"with(obj)"})," 使 ",e.jsx(n.code,{children:"user"})," 解析为 ",e.jsx(n.code,{children:"'fred'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"__t = 'fred'"}),"，不为 null → 拼接 ",e.jsx(n.code,{children:"'hello ' + 'fred' + '!'"})]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx(n.code,{children:"'hello fred!'"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"场景二html-转义输出-escape",children:"场景二：HTML 转义输出 escape"}),`
`,e.jsxs(n.p,{children:["模板：",e.jsx("code",{children:"'<b><%- value %></b>'"}),"，数据：",e.jsx("code",{children:"{ value: '<script>' }"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"遍历过程"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`第 1 次匹配: <%- value %> (offset=3)
  ├─ 静态文本: '<b>'
  ├─ escapeValue = ' value '（捕获组1 命中）
  │  → source += "' + __e( value ) + '"
  │  __e 即 escapeHtml 函数，会将 & < > " ' 转为 HTML 实体。
  │  为什么要转义？防止用户输入的内容被浏览器当作 HTML 执行（XSS 攻击）。
  │  例如 value='<script>alert(1)<\/script>' 会被转为安全的文本显示。
  └─ index 移动到 19

第 2 次匹配: $ (offset=23)
  └─ 静态文本: '</b>'
`})}),`
`,e.jsx(n.p,{children:"最终生成的源码："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`var __t, __p = '', __e = __escapeHtml;
with(obj) {
  __p += '<b>' + __e( value ) + '</b>';
}
return __p;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"执行过程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," = ",e.jsx(n.code,{children:"'<script>'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"__e('<script>')"})," → ",e.jsx(n.code,{children:"escapeHtml"})," 将 ",e.jsx(n.code,{children:"<"})," 转为 ",e.jsx(n.code,{children:"&lt;"}),"，",e.jsx(n.code,{children:">"})," 转为 ",e.jsx(n.code,{children:"&gt;"})]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx("code",{children:"'<b>&lt;script&gt;</b>'"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"场景三执行语句-evaluate",children:"场景三：执行语句 evaluate"}),`
`,e.jsxs(n.p,{children:["模板：",e.jsx("code",{children:"'<% users.forEach(user => { %><li><%- user %></li><% }) %>'"})]}),`
`,e.jsxs(n.p,{children:["数据：",e.jsx("code",{children:"{ users: ['fred', 'barney'] }"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"遍历过程"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`第 1 次匹配: <% users.forEach(user => { %> (offset=0)
  ├─ 无静态文本（offset=0）
  ├─ evaluateValue = ' users.forEach(user => { '（捕获组3 命中）
  │  → source += "';\\n users.forEach(user => { ;\\n__p += '"
  │  为什么要先闭合再重开？evaluate 插入的是可执行 JS 代码（不是值），
  │  所以需要：① 先用 '; 闭合当前字符串拼接语句 → ② 插入 JS 代码 →
  │  ③ 再用 __p += ' 开启新的字符串拼接，为后续内容做准备。
  │  这样 forEach 的循环体就能正常执行，每轮都往 __p 追加内容。
  └─ index 移动到 30

第 2 次匹配: <%- user %> (offset=34)
  ├─ 静态文本: '<li>'
  ├─ escapeValue = ' user '（捕获组1 命中，转义输出）
  │  → source += "' + __e( user ) + '"
  │  这里的 user 是 forEach 回调的参数，每轮循环值不同。
  └─ index 移动到 48

第 3 次匹配: <% }) %> (offset=53)
  ├─ 静态文本: '</li>'
  ├─ evaluateValue = ' }) '（捕获组3 命中）
  │  → source += "';\\n }) ;\\n__p += '"
  │  闭合 forEach 回调的花括号，结束循环体。
  └─ index 移动到 63

第 4 次匹配: $ (offset=63)
  └─ 无静态文本（模板已遍历完毕）
`})}),`
`,e.jsx(n.p,{children:"最终生成的源码："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`var __t, __p = '', __e = __escapeHtml;
with(obj) {
  __p += '';
  users.forEach(user => { ;
  __p += '<li>' + __e( user ) + '</li>';
   }) ;
  __p += '';
}
return __p;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"执行过程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"forEach"})," 遍历 ",e.jsx(n.code,{children:"['fred', 'barney']"})]}),`
`,e.jsxs(n.li,{children:["第 1 轮：拼接 ",e.jsx(n.code,{children:"'<li>fred</li>'"})]}),`
`,e.jsxs(n.li,{children:["第 2 轮：拼接 ",e.jsx(n.code,{children:"'<li>fred</li><li>barney</li>'"})]}),`
`,e.jsxs(n.li,{children:["返回 ",e.jsx("code",{children:"'<li>fred</li><li>barney</li>'"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"字符串模板渲染"}),`
`,e.jsx(n.li,{children:"邮件/通知模板生成"}),`
`,e.jsx(n.li,{children:"服务端 HTML 渲染"}),`
`]}),`
`,e.jsx(n.h2,{id:"模板编译与渲染",children:"模板编译与渲染"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"template"})," 创建并执行模板函数。"]}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"模板字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"TemplateOptions"})}),e.jsx("td",{children:"可选配置，包含 interpolate、escape、evaluate 三个 RegExp 属性"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"(data) => string"})]}),`
`,e.jsx(n.li,{children:"描述：编译后的模板函数"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"第一步"}),"：定义 ",e.jsx(n.code,{children:"escapeHtml"})," 函数，将 ",e.jsx(n.code,{children:`& < > " '`})," 替换为 HTML 实体，供 escape 语法调用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"第二步"}),"：将三种正则的 ",e.jsx(n.code,{children:".source"})," 用 ",e.jsx(n.code,{children:"|"})," 合并为一个 matcher，末尾加 ",e.jsx(n.code,{children:"|$"})," 确保匹配到字符串结尾"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"第三步"}),"：用 ",e.jsx(n.code,{children:"string.replace(matcher, ...)"})," 遍历模板，将静态文本和动态标记逐段拼接为 JS 函数体源码",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["escape 语法 → ",e.jsx(n.code,{children:"__p += __e(val)"}),"（转义输出）"]}),`
`,e.jsxs(n.li,{children:["interpolate 语法 → ",e.jsx(n.code,{children:"__p += ((__t = (val)) == null ? '' : __t)"}),"（直接输出，null 转空串）"]}),`
`,e.jsx(n.li,{children:"evaluate 语法 → 中断字符串拼接，插入可执行代码，再恢复拼接"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"第四步"}),"：用 ",e.jsx(n.code,{children:"with(obj)"})," 包裹源码，使 ",e.jsx(n.code,{children:"data"})," 的属性可直接作为变量名访问"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"第五步"}),"：",e.jsx(n.code,{children:"new Function('obj', '__escapeHtml', source)"})," 编译源码为渲染函数，返回闭包"]}),`
`]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{x as default};
