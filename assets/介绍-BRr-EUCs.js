import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'

/**
 * copy 示例
 * 复制文件或目录，包括子目录和文件
 */
const copyDemo = async () => {
  // 注意：此示例展示 API 用法，实际执行需要在 Node.js 环境
  action('copy 示例')(\`
import { copy, copySync } from '@justichentai/node-utils/fs-copy'

// 异步复制文件
await copy('/tmp/myfile', '/tmp/mynewfile')

// 异步复制目录
await copy('/tmp/mydir', '/tmp/mynewdir')

// 使用过滤函数
await copy('/tmp/mydir', '/tmp/mynewdir', {
  filter: (src, dest) => !src.includes('node_modules')
})

// 同步复制
copySync('/tmp/myfile', '/tmp/mynewfile')

// 带选项的复制
await copy('/tmp/mydir', '/tmp/mynewdir', {
  overwrite: true,       // 覆盖已存在的文件
  errorOnExist: false,   // 当 overwrite 为 false 且目标存在时不抛出错误
  dereference: false,    // 是否解引用符号链接
  preserveTimestamps: true // 保留原始时间戳
})
\`)
}

export default copyDemo
`,c=`import { action } from 'storybook/actions'

/**
 * ensureDir 示例
 * 确保目录存在，如果不存在则创建
 */
const ensureDirDemo = async () => {
  action('ensureDir 示例')(\`
import { ensureDir, ensureDirSync, mkdirs, mkdirp } from '@justichentai/node-utils/fs-ensureDir'

// 异步确保目录存在
await ensureDir('/tmp/this/path/does/not/exist')

// 指定权限模式
await ensureDir('/tmp/mydir', 0o2775)

// 使用配置对象
await ensureDir('/tmp/mydir', { mode: 0o2775 })

// 同步版本
ensureDirSync('/tmp/this/path/does/not/exist')

// 别名（功能相同）
await mkdirs('/tmp/mydir')
await mkdirp('/tmp/mydir')
\`)
}

export default ensureDirDemo
`,d=`import { action } from 'storybook/actions'

/**
 * ensureFile 示例
 * 确保文件存在，如果不存在则创建（包括父目录）
 */
const ensureFileDemo = async () => {
  action('ensureFile 示例')(\`
import { ensureFile, ensureFileSync, createFile } from '@justichentai/node-utils/fs-ensureFile'

// 异步确保文件存在
await ensureFile('/tmp/this/path/does/not/exist/file.txt')

// 同步版本
ensureFileSync('/tmp/this/path/does/not/exist/file.txt')

// 别名（功能相同）
await createFile('/tmp/myfile.txt')

// 注意：如果文件已存在，不会修改它
\`)
}

export default ensureFileDemo
`,l=`import { action } from 'storybook/actions'

/**
 * move 示例
 * 移动文件或目录，即使跨设备也可以
 */
const moveDemo = async () => {
  action('move 示例')(\`
import { move, moveSync } from '@justichentai/node-utils/fs-move'

// 异步移动文件
await move('/tmp/file.txt', '/tmp/this/path/does/not/exist/file.txt')

// 同步移动
moveSync('/tmp/file.txt', '/tmp/newdir/file.txt')

// 使用 overwrite 选项（覆盖已存在的目标）
await move('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true })

// 注意：
// - 当 src 是文件时，dest 必须是文件
// - 当 src 是目录时，dest 必须是目录
// - 即使跨设备也可以移动（内部使用 copy + remove）
\`)
}

export default moveDemo
`,a=`import { action } from 'storybook/actions'

/**
 * pathExists 示例
 * 检查路径是否存在
 */
const pathExistsDemo = async () => {
  action('pathExists 示例')(\`
import { pathExists, pathExistsSync } from '@justichentai/node-utils/fs-pathExists'

// 异步检查路径是否存在
const exists = await pathExists('/tmp/myfile')
console.log(exists) // true 或 false

// 同步版本
const existsSync = pathExistsSync('/tmp/myfile')
console.log(existsSync) // true 或 false

// 使用场景
if (await pathExists('/tmp/config.json')) {
  // 配置文件存在，读取它
  const config = await readJson('/tmp/config.json')
}
\`)
}

export default pathExistsDemo
`,h=`import { action } from 'storybook/actions'

/**
 * readJson/writeJson 示例
 * 读取和写入 JSON 文件
 */
const readWriteJsonDemo = async () => {
  action('readJson/writeJson 示例')(\`
import { readJson, readJsonSync, writeJson, writeJsonSync } from '@justichentai/node-utils'

// 读取 JSON 文件
const data = await readJson('./package.json')
console.log(data.version)

// 同步读取
const dataSync = readJsonSync('./package.json')

// 使用 throws 选项（JSON 解析失败时不抛出错误）
const config = await readJson('./invalid.json', { throws: false })
console.log(config) // null（如果 JSON 无效）

// 写入 JSON 文件
await writeJson('./package.json', { name: 'my-package' })

// 带格式化选项
await writeJson('./package.json', { name: 'my-package' }, {
  spaces: 2,        // 缩进空格数
  EOL: '\\\\n',       // 行尾字符
})

// 使用 tab 缩进
await writeJson('./package.json', data, { spaces: '\\\\t' })

// 同步写入
writeJsonSync('./package.json', { name: 'my-package' })
\`)
}

export default readWriteJsonDemo
`,p=`import { action } from 'storybook/actions'

/**
 * outputFile/outputJson 示例
 * 输出文件，如果父目录不存在则创建
 */
const outputFileDemo = async () => {
  action('outputFile/outputJson 示例')(\`
import { outputFile, outputFileSync, outputJson, outputJsonSync } from '@justichentai/node-utils'

// 输出文本文件（自动创建不存在的目录）
await outputFile('/tmp/this/path/does/not/exist/file.txt', 'hello!')

// 同步输出
outputFileSync('/tmp/this/path/does/not/exist/file.txt', 'hello!')

// 输出 JSON 文件（自动创建不存在的目录）
await outputJson('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })

// 同步输出 JSON
outputJsonSync('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })

// 带格式化选项
await outputJson('/tmp/data.json', { name: 'JP' }, { spaces: 2 })

// 与 writeFile/writeJson 的区别：
// outputFile/outputJson 会自动创建不存在的父目录
// writeFile/writeJson 如果父目录不存在会抛出错误
\`)
}

export default outputFileDemo
`,x=`import { action } from 'storybook/actions'

/**
 * remove 示例
 * 删除文件或目录
 */
const removeDemo = async () => {
  action('remove 示例')(\`
import { remove, removeSync } from '@justichentai/node-utils/fs-remove'

// 删除文件
await remove('/tmp/myfile')

// 删除目录（包括所有内容）
await remove('/tmp/mydir')

// 同步删除
removeSync('/tmp/myfile')

// 注意：
// - 可以删除文件或目录
// - 如果路径不存在，静默忽略（不会抛出错误）
// - 会递归删除目录中的所有内容
\`)
}

export default removeDemo
`,m=`import { action } from 'storybook/actions'

/**
 * emptyDir 示例
 * 清空目录内容
 */
const emptyDirDemo = async () => {
  action('emptyDir 示例')(\`
import { emptyDir, emptyDirSync } from '@justichentai/node-utils/fs-emptyDir'

// 清空目录（删除所有内容，保留目录本身）
await emptyDir('/tmp/some/dir')

// 同步清空
emptyDirSync('/tmp/some/dir')

// 注意：
// - 如果目录不存在，会创建它
// - 目录本身不会被删除，只删除其内容
// - 非常适合清理临时目录或构建输出目录
\`)
}

export default emptyDirDemo
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"fs-extra",children:"fs-extra"}),`
`,n.jsxs(e.p,{children:["fs-extra 是 Node.js 内置 ",n.jsx(e.code,{children:"fs"})," 模块的增强版，提供了更多实用的文件系统操作方法。"]}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"fs-extra 在标准 Node.js fs 模块的基础上，添加了许多便捷的文件系统操作方法，如："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"递归复制/移动文件和目录"}),`
`,n.jsx(e.li,{children:"确保文件/目录存在（自动创建父目录）"}),`
`,n.jsx(e.li,{children:"JSON 文件的读写操作"}),`
`,n.jsx(e.li,{children:"清空/删除目录"}),`
`]}),`
`,n.jsx(e.p,{children:"这些方法都提供了异步和同步两种版本，使用 Promise API，方便与 async/await 配合使用。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"主要特性"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["完全兼容原生 ",n.jsx(e.code,{children:"fs"})," 模块"]}),`
`,n.jsx(e.li,{children:"所有异步方法支持 Promise"}),`
`,n.jsx(e.li,{children:"自动处理跨设备移动"}),`
`,n.jsx(e.li,{children:"智能创建缺失的父目录"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"新的导入方式"}),"（模块化拆分）："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 从主包导入
import { copy, ensureDir, readJson } from '@justichentai/node-utils'

// 从子路径导入（推荐，支持 tree-shaking）
import { copy, copySync } from '@justichentai/node-utils/fs-copy'
import ensureDir from '@justichentai/node-utils/fs-ensureDir'
import { readJson, writeJson } from '@justichentai/node-utils/fs-readJson'
`})}),`
`,n.jsx(e.h2,{id:"复制文件目录-copy",children:"复制文件/目录 (copy)"}),`
`,n.jsx(e.p,{children:"复制文件或目录，支持递归复制和过滤函数。"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"确保目录存在-ensuredir",children:"确保目录存在 (ensureDir)"}),`
`,n.jsxs(e.p,{children:["确保目录存在，如果目录结构不存在则创建它。别名：",n.jsx(e.code,{children:"mkdirs"}),"、",n.jsx(e.code,{children:"mkdirp"}),"。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"确保文件存在-ensurefile",children:"确保文件存在 (ensureFile)"}),`
`,n.jsx(e.p,{children:"确保文件存在，如果文件所在目录不存在则创建它们。"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"移动文件目录-move",children:"移动文件/目录 (move)"}),`
`,n.jsx(e.p,{children:"移动文件或目录，即使跨设备也可以（内部使用 copy + remove）。"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"检查路径是否存在-pathexists",children:"检查路径是否存在 (pathExists)"}),`
`,n.jsxs(e.p,{children:["检查文件或目录是否存在，使用 ",n.jsx(e.code,{children:"fs.access"})," 实现。"]}),`
`,n.jsx(s,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"读写-json-文件-readjsonwritejson",children:"读写 JSON 文件 (readJson/writeJson)"}),`
`,n.jsx(e.p,{children:"方便地读取和写入 JSON 文件，支持格式化选项。"}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"输出文件-outputfileoutputjson",children:"输出文件 (outputFile/outputJson)"}),`
`,n.jsx(e.p,{children:"写入文件，如果父目录不存在则自动创建。"}),`
`,n.jsx(s,{language:"typescript",children:p}),`
`,n.jsx(e.h2,{id:"删除文件目录-remove",children:"删除文件/目录 (remove)"}),`
`,n.jsx(e.p,{children:"删除文件或目录（包括内容），如果路径不存在则静默忽略。"}),`
`,n.jsx(s,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"清空目录-emptydir",children:"清空目录 (emptyDir)"}),`
`,n.jsx(e.p,{children:"清空目录内容，保留目录本身。如果目录不存在则创建它。"}),`
`,n.jsx(s,{language:"typescript",children:m}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"copyoptions",children:"CopyOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"overwrite"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否覆盖已存在的文件/目录，默认 true"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"errorOnExist"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"当 overwrite 为 false 且目标存在时是否抛出错误，默认 false"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"dereference"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否解引用符号链接，默认 false"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"preserveTimestamps"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否保留原始时间戳，默认 false"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"filter"}),n.jsx("td",{children:n.jsx("code",{children:"(src, dest) => boolean | Promise<boolean>"})}),n.jsx("td",{children:"过滤函数，返回 true 复制，false 忽略"})]})]})]}),`
`,n.jsx(e.h3,{id:"moveoptions",children:"MoveOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"overwrite"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否覆盖已存在的文件/目录，默认 false"})]})})]}),`
`,n.jsx(e.h3,{id:"writejsonoptions",children:"WriteJsonOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"spaces"}),n.jsx("td",{children:n.jsx("code",{children:"number | string"})}),n.jsx("td",{children:"缩进空格数或缩进字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"EOL"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"行尾字符，默认 '\\n'"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"replacer"}),n.jsx("td",{children:n.jsx("code",{children:"function | array"})}),n.jsx("td",{children:"JSON.stringify 的 replacer 参数"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件结构"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-copy/"})," - 复制操作（异步/同步）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-emptyDir/"})," - 清空目录"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-ensureDir/"})," - 确保目录存在"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-ensureFile/"})," - 确保文件存在"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-ensureLink/"})," - 确保硬链接存在"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-ensureSymlink/"})," - 确保符号链接存在"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-move/"})," - 移动操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-outputFile/"})," - 输出文件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-outputJson/"})," - 输出 JSON"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-pathExists/"})," - 路径存在检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-readJson/"})," - 读取 JSON"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-remove/"})," - 删除操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-writeJson/"})," - 写入 JSON"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fs-utils/"})," - 工具函数"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"copy/move 操作会先检查源和目标路径的有效性"}),`
`,n.jsx(e.li,{children:"递归处理目录时使用异步迭代器并行处理"}),`
`,n.jsx(e.li,{children:"跨设备移动时自动降级为 copy + remove"}),`
`,n.jsx(e.li,{children:"ensure* 方法会自动创建缺失的父目录"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 Node.js 原生 ",n.jsx(e.code,{children:"fs/promises"})," API"]}),`
`,n.jsx(e.li,{children:"支持 BigInt 模式的文件状态检查（用于大文件）"}),`
`,n.jsx(e.li,{children:"符号链接的智能处理"}),`
`,n.jsx(e.li,{children:"跨平台兼容性处理（Windows 路径字符检查）"}),`
`]})]})}function J(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{J as default};
