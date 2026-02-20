import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import toPathArray from '../../../packages/js-utils/src/toPathArray'

const toPathArrayDemo = () => {
  action('toPathArray 基础用法')({
    '点号分隔': toPathArray('a.b.c'),
    '数字索引': toPathArray('a[0].b'),
    '引号属性': toPathArray('a["key"].b'),
    '混合路径': toPathArray('a[0].b["c"].d'),
    '数组传入': toPathArray(['a', 'b', 'c']),
  })
}

export default toPathArrayDemo
`,i=`import { action } from 'storybook/actions'
import toPathArray from '../../../packages/js-utils/src/toPathArray'

const edgeCaseDemo = () => {
  action('toPathArray - 边界情况')({
    '空字符串': toPathArray(''),
    '空数组': toPathArray([]),
    '单层属性': toPathArray('a'),
    '连续索引': toPathArray('[0][1][2]'),
    '单引号属性': toPathArray("a['key']"),
  })
}

export default edgeCaseDemo
`;function s(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d.h1,{id:"topatharray",children:"toPathArray"}),`
`,e.jsx(d.p,{children:"将属性路径字符串解析为路径数组"}),`
`,e.jsx(d.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"toPathArray"})," 是路径解析的基础工具，被 ",e.jsx(d.code,{children:"get"}),"、",e.jsx(d.code,{children:"set"}),"、",e.jsx(d.code,{children:"has"}),"、",e.jsx(d.code,{children:"invoke"}),"、",e.jsx(d.code,{children:"update"})," 等 17 个工具函数内部使用。"]}),`
`,e.jsx(d.p,{children:"它通过正则匹配三种路径格式："}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"普通属性名"}),"：",e.jsx(d.code,{children:"a.b.c"})," => ",e.jsx(d.code,{children:"['a', 'b', 'c']"})]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"数字索引"}),"：",e.jsx(d.code,{children:"a[0].b"})," => ",e.jsx(d.code,{children:"['a', '0', 'b']"})]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"引号属性"}),"：",e.jsx(d.code,{children:'a["key"]'})," => ",e.jsx(d.code,{children:"['a', 'key']"})]}),`
`]}),`
`,e.jsx(d.p,{children:"如果传入数组则直接返回，无需解析。"}),`
`,e.jsx(d.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(d.p,{children:"点击按钮查看不同路径格式的解析结果。"}),`
`,e.jsx(c,{language:"typescript",children:h}),`
`,e.jsx(d.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(d.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(d.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"path"}),e.jsx("td",{children:e.jsx("code",{children:"string | string[]"})}),e.jsx("td",{children:"属性路径，支持字符串或字符串数组"})]})})]}),`
`,e.jsx(d.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["类型：",e.jsx(d.code,{children:"string[]"})]}),`
`,e.jsx(d.li,{children:"描述：返回路径数组"}),`
`]}),`
`,e.jsx(d.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"目标"}),"：把 ",e.jsx(d.code,{children:`'a[0].b["key"]'`})," 这样的路径字符串，拆成 ",e.jsx(d.code,{children:"['a', '0', 'b', 'key']"})," 数组。"]}),`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"难点"}),"：路径里混合了三种写法，不能简单 ",e.jsx(d.code,{children:"split('.')"}),"："]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"a.b"})," — 用点号分隔"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"[0]"})," — 用方括号包数字"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:'["key"]'})," — 用方括号包引号字符串"]}),`
`]}),`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"解法"}),"：用正则逐段匹配，每次取出一个路径片段。"]}),`
`,e.jsx(d.h3,{id:"为什么正则可以循环匹配",children:"为什么正则可以循环匹配？"}),`
`,e.jsxs(d.p,{children:["关键在于正则末尾的 ",e.jsxs(d.strong,{children:[e.jsx(d.code,{children:"g"}),"（global）标志"]}),"。"]}),`
`,e.jsxs(d.p,{children:["普通正则（没有 ",e.jsx(d.code,{children:"g"}),"）调用 ",e.jsx(d.code,{children:"exec()"}),` 时，永远从字符串开头（位置 0）开始匹配，每次返回同一个结果。
但加了 `,e.jsx(d.code,{children:"g"})," 标志后，正则对象内部会维护一个 ",e.jsxs(d.strong,{children:[e.jsx(d.code,{children:"lastIndex"})," 指针"]}),"："]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`const regex = /pattern/g

regex.exec(str)  // 从 lastIndex=0 开始，匹配成功后 lastIndex 自动移到匹配结束位置
regex.exec(str)  // 从上次的 lastIndex 继续，找到下一个匹配
regex.exec(str)  // 继续往后找...
regex.exec(str)  // 找不到了 → 返回 null，lastIndex 重置为 0
`})}),`
`,e.jsxs(d.p,{children:["所以 ",e.jsx(d.code,{children:"while ((match = regex.exec(path)) !== null)"})," 的工作原理是："]}),`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:["第 1 次 ",e.jsx(d.code,{children:"exec"}),"：从位置 0 开始，找到第一个匹配，",e.jsx(d.code,{children:"lastIndex"})," 移动到匹配末尾"]}),`
`,e.jsxs(d.li,{children:["第 2 次 ",e.jsx(d.code,{children:"exec"}),"：从 ",e.jsx(d.code,{children:"lastIndex"})," 位置继续，找到下一个匹配"]}),`
`,e.jsx(d.li,{children:"...依次向后"}),`
`,e.jsxs(d.li,{children:["最后一次 ",e.jsx(d.code,{children:"exec"}),"：没有更多匹配了 → 返回 ",e.jsx(d.code,{children:"null"})," → ",e.jsx(d.code,{children:"while"})," 循环结束"]}),`
`]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["⚠️ 如果忘记加 ",e.jsx(d.code,{children:"g"}),"，",e.jsx(d.code,{children:"exec"})," 每次都从位置 0 匹配，永远返回第一个结果 → ",e.jsx(d.strong,{children:"死循环"}),"！"]}),`
`]}),`
`,e.jsx(d.h3,{id:"正则的三个匹配部分",children:"正则的三个匹配部分"}),`
`,e.jsxs(d.p,{children:["正则分成三个部分（用 ",e.jsx(d.code,{children:"|"})," 连接，匹配到任意一种即可）："]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`/[^.[\\]]+|\\[(?:(\\d+)|["']([^"']*)["'])\\]/g
 --------  ---  -----  ---------------
    ①       |     ②          ③
`})}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["① ",e.jsx(d.code,{children:"[^.[\\]]+"}),"：匹配",e.jsx(d.strong,{children:"不含"})," ",e.jsx(d.code,{children:"."})," ",e.jsx(d.code,{children:"["})," ",e.jsx(d.code,{children:"]"})," 的连续字符 → 即普通属性名，如 ",e.jsx(d.code,{children:"a"}),"、",e.jsx(d.code,{children:"b"})]}),`
`,e.jsxs(d.li,{children:["② ",e.jsx(d.code,{children:"\\[(\\d+)\\]"}),"：匹配 ",e.jsx(d.code,{children:"[数字]"})," → 如 ",e.jsx(d.code,{children:"[0]"}),"、",e.jsx(d.code,{children:"[3]"}),"，括号内的数字存入捕获组 1"]}),`
`,e.jsxs(d.li,{children:["③ ",e.jsx(d.code,{children:`\\[["']([^"']*)["']\\]`}),"：匹配 ",e.jsx(d.code,{children:'["字符串"]'})," 或 ",e.jsx(d.code,{children:"['字符串']"})," → 如 ",e.jsx(d.code,{children:'["key"]'}),"，引号内的内容存入捕获组 2"]}),`
`]}),`
`,e.jsx(d.h3,{id:"逐字符拆解正则",children:"逐字符拆解正则"}),`
`,e.jsxs(d.p,{children:["完整正则：",e.jsx(d.code,{children:`/[^.[\\]]+|\\[(?:(\\d+)|["']([^"']*)["'])\\]/g`})]}),`
`,e.jsxs(d.h4,{id:"分支----普通属性名",children:["分支 ① ",e.jsx(d.code,{children:"[^.[\\]]+"})," — 普通属性名"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字符"}),e.jsx("th",{children:"含义"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"["})}),e.jsx("td",{children:"字符类开始"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"^"})}),e.jsxs("td",{children:["在字符类内部表示",e.jsx("strong",{children:"取反"}),"（匹配不在集合中的字符）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"."})}),e.jsxs("td",{children:["点号字面量（在字符类 ",e.jsx("code",{children:"[]"})," 内部，",e.jsx("code",{children:"."})," 不是通配符，就是普通的点）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"["})}),e.jsxs("td",{children:["左方括号字面量（在字符类内部直接匹配 ",e.jsx("code",{children:"["}),"）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"]"})}),e.jsx("td",{children:"转义的右方括号字面量（需要转义，否则会被当作字符类结束）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"]"})}),e.jsx("td",{children:"字符类结束"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsxs("td",{children:["量词：前面的字符类匹配",e.jsx("strong",{children:"一次或多次"})]})]})]})]}),`
`,e.jsxs(d.p,{children:["效果：匹配一个或多个",e.jsxs(d.strong,{children:["不是 ",e.jsx(d.code,{children:"."}),"、",e.jsx(d.code,{children:"["}),"、",e.jsx(d.code,{children:"]"})]})," 的连续字符。例如在 ",e.jsx(d.code,{children:"a[0].b"})," 中匹配 ",e.jsx(d.code,{children:"a"})," 和 ",e.jsx(d.code,{children:"b"}),"。"]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"."}),"、",e.jsx(d.code,{children:"["}),"、",e.jsx(d.code,{children:"]"})," 是路径分隔符，排除它们后剩下的连续字符就是属性名。"]}),`
`]}),`
`,e.jsxs(d.h4,{id:"--或运算符",children:[e.jsx(d.code,{children:"|"})," — 或运算符"]}),`
`,e.jsxs(d.p,{children:['表示"匹配左边 ',e.jsx(d.strong,{children:"或"}),' 右边"。左边是分支①，右边是整个 ',e.jsx(d.code,{children:"\\[...\\]"})," 括号索引部分。"]}),`
`,e.jsxs(d.h4,{id:"分支----的外壳",children:["分支 ② + ③ 的外壳：",e.jsx(d.code,{children:"\\[(?:...)\\]"})]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字符"}),e.jsx("th",{children:"含义"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"["})}),e.jsxs("td",{children:["转义的左方括号，匹配字面量 ",e.jsx("code",{children:"["})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"(?:"})}),e.jsxs("td",{children:[e.jsx("strong",{children:"非捕获组"}),"开始，仅用于分组，不会创建捕获组编号"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:")"})}),e.jsx("td",{children:"非捕获组结束"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"]"})}),e.jsxs("td",{children:["转义的右方括号，匹配字面量 ",e.jsx("code",{children:"]"})]})]})]})]}),`
`,e.jsxs(d.p,{children:["外壳匹配 ",e.jsx(d.code,{children:"[...]"})," 方括号对，内部用 ",e.jsx(d.code,{children:"|"})," 分成两个子分支。"]}),`
`,e.jsxs(d.h4,{id:"子分支--d--数字索引",children:["子分支 ② ",e.jsx(d.code,{children:"(\\d+)"})," — 数字索引"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字符"}),e.jsx("th",{children:"含义"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"("})}),e.jsxs("td",{children:[e.jsx("strong",{children:"捕获组 1"})," 开始"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\d"})}),e.jsxs("td",{children:["匹配一个数字字符（等价于 ",e.jsx("code",{children:"[0-9]"}),"）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsx("td",{children:"量词：一个或多个数字"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:")"})}),e.jsx("td",{children:"捕获组 1 结束"})]})]})]}),`
`,e.jsxs(d.p,{children:["配合外壳的 ",e.jsx(d.code,{children:"\\[...\\]"}),"，完整匹配 ",e.jsx(d.code,{children:"[数字]"}),"，如 ",e.jsx(d.code,{children:"[0]"}),"、",e.jsx(d.code,{children:"[42]"}),"。捕获组 1 存储数字部分（不含方括号）。"]}),`
`,e.jsxs(d.h4,{id:"子分支----引号属性",children:["子分支 ③ ",e.jsx(d.code,{children:`["']([^"']*)["']`})," — 引号属性"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字符"}),e.jsx("th",{children:"含义"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:`["']`})}),e.jsxs("td",{children:["字符类：匹配 ",e.jsx("code",{children:'"'})," 或 ",e.jsx("code",{children:"'"}),"（开引号）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"("})}),e.jsxs("td",{children:[e.jsx("strong",{children:"捕获组 2"})," 开始"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:`[^"']`})}),e.jsxs("td",{children:["取反字符类：匹配",e.jsx("strong",{children:"不是"})," ",e.jsx("code",{children:'"'})," 也不是 ",e.jsx("code",{children:"'"})," 的任意字符"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*"})}),e.jsxs("td",{children:["量词：零次或多次（允许空字符串 ",e.jsx("code",{children:'[""]'}),"）"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:")"})}),e.jsx("td",{children:"捕获组 2 结束"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:`["']`})}),e.jsxs("td",{children:["字符类：匹配 ",e.jsx("code",{children:'"'})," 或 ",e.jsx("code",{children:"'"}),"（闭引号）"]})]})]})]}),`
`,e.jsxs(d.p,{children:["配合外壳，完整匹配 ",e.jsx(d.code,{children:'["内容"]'})," 或 ",e.jsx(d.code,{children:"['内容']"}),"。捕获组 2 存储引号内的属性名。"]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["注意：这里开引号和闭引号是",e.jsx(d.strong,{children:"独立匹配"}),"的（不要求配对），所以 ",e.jsx(d.code,{children:`["key']`})," 也能匹配。在实际路径中引号一般是配对的，这里简化处理。"]}),`
`]}),`
`,e.jsxs(d.h4,{id:"g--全局标志",children:[e.jsx(d.code,{children:"g"})," — 全局标志"]}),`
`,e.jsxs(d.p,{children:["让正则的 ",e.jsx(d.code,{children:"lastIndex"})," 指针在每次匹配后自动前进，配合 ",e.jsx(d.code,{children:"while + exec"})," 实现逐段遍历。"]}),`
`,e.jsx(d.h3,{id:"完整正则结构图",children:"完整正则结构图"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`/[^.[\\]]+  |  \\[  (?:  (\\d+)  |  ["']([^"']*)["']  )  \\]  /g
 --------     --  ---  -----     -----------------     --
 分支①        [   非捕获 捕获组1  |    捕获组2          ]   全局
 普通属性名    左括号 分组  数字索引 或   引号属性名       右括号
`})}),`
`,e.jsxs(d.p,{children:[e.jsxs(d.strong,{children:["逐步匹配 ",e.jsx(d.code,{children:`'a[0].b["key"]'`})]}),"："]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`输入字符串: a[0].b["key"]
              ↓
第 1 次匹配: 'a'       → 命中 ①，match[0]='a'    → push('a')
第 2 次匹配: '[0]'     → 命中 ②，match[1]='0'    → push('0')
             （跳过 '.'）
第 3 次匹配: 'b'       → 命中 ①，match[0]='b'    → push('b')
第 4 次匹配: '["key"]' → 命中 ③，match[2]='key'  → push('key')

结果: ['a', '0', 'b', 'key']
`})}),`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"取值优先级"}),"：",e.jsx(d.code,{children:"match[1] ?? match[2] ?? match[0]"})]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["命中 ② 时 → ",e.jsx(d.code,{children:"match[1]"})," 有值（如 ",e.jsx(d.code,{children:"'0'"}),"），直接用"]}),`
`,e.jsxs(d.li,{children:["命中 ③ 时 → ",e.jsx(d.code,{children:"match[1]"})," 为 undefined，取 ",e.jsx(d.code,{children:"match[2]"}),"（如 ",e.jsx(d.code,{children:"'key'"}),"）"]}),`
`,e.jsxs(d.li,{children:["命中 ① 时 → 两个捕获组都是 undefined，取完整匹配 ",e.jsx(d.code,{children:"match[0]"}),"（如 ",e.jsx(d.code,{children:"'a'"}),"）"]}),`
`]}),`
`,e.jsxs(d.p,{children:["这样就从路径字符串中干净地提取出了每一段属性名，去掉了 ",e.jsx(d.code,{children:"."}),"、",e.jsx(d.code,{children:"[]"}),"、引号等分隔符。"]})]})}function p(n={}){const{wrapper:d}={...r(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
