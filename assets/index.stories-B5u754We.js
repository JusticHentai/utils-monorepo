import{j as t}from"./jsx-runtime-u17CrQMm.js";/* empty css              */const{action:o}=__STORYBOOK_MODULE_ACTIONS__,i=async()=>{o("copy 示例")(`
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
`)},{action:n}=__STORYBOOK_MODULE_ACTIONS__,a=async()=>{n("ensureDir 示例")(`
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
`)},{action:r}=__STORYBOOK_MODULE_ACTIONS__,c=async()=>{r("ensureFile 示例")(`
import { ensureFile, ensureFileSync, createFile } from '@justichentai/node-utils/fs-ensureFile'

// 异步确保文件存在
await ensureFile('/tmp/this/path/does/not/exist/file.txt')

// 同步版本
ensureFileSync('/tmp/this/path/does/not/exist/file.txt')

// 别名（功能相同）
await createFile('/tmp/myfile.txt')

// 注意：如果文件已存在，不会修改它
`)},{action:m}=__STORYBOOK_MODULE_ACTIONS__,p=async()=>{m("move 示例")(`
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
`)},{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=async()=>{l("pathExists 示例")(`
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
`)},{action:u}=__STORYBOOK_MODULE_ACTIONS__,y=async()=>{u("readJson/writeJson 示例")(`
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
  EOL: '\\n',       // 行尾字符
})

// 使用 tab 缩进
await writeJson('./package.json', data, { spaces: '\\t' })

// 同步写入
writeJsonSync('./package.json', { name: 'my-package' })
`)},{action:_}=__STORYBOOK_MODULE_ACTIONS__,O=async()=>{_("outputFile/outputJson 示例")(`
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
`)},{action:f}=__STORYBOOK_MODULE_ACTIONS__,S=async()=>{f("remove 示例")(`
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
`)},{action:h}=__STORYBOOK_MODULE_ACTIONS__,w=async()=>{h("emptyDir 示例")(`
import { emptyDir, emptyDirSync } from '@justichentai/node-utils/fs-emptyDir'

// 清空目录（删除所有内容，保留目录本身）
await emptyDir('/tmp/some/dir')

// 同步清空
emptyDirSync('/tmp/some/dir')

// 注意：
// - 如果目录不存在，会创建它
// - 目录本身不会被删除，只删除其内容
// - 非常适合清理临时目录或构建输出目录
`)},s=()=>t.jsxs("div",{children:[t.jsx("div",{className:"button",onClick:i,children:"复制文件/目录"}),t.jsx("div",{className:"button",onClick:a,children:"确保目录存在"}),t.jsx("div",{className:"button",onClick:c,children:"确保文件存在"}),t.jsx("div",{className:"button",onClick:p,children:"移动文件/目录"}),t.jsx("div",{className:"button",onClick:d,children:"检查路径是否存在"}),t.jsx("div",{className:"button",onClick:y,children:"读写 JSON 文件"}),t.jsx("div",{className:"button",onClick:O,children:"输出文件"}),t.jsx("div",{className:"button",onClick:S,children:"删除文件/目录"}),t.jsx("div",{className:"button",onClick:w,children:"清空目录"})]});s.__docgenInfo={description:"",methods:[],displayName:"FsExtraDemo"};const v={title:"node-utils/fs-extra",component:s,parameters:{layout:"centered"},argTypes:{}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,v as default};
