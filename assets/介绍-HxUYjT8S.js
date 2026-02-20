import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { execa } from '../../../packages/node-utils/src/execa'

/**
 * execa 基本用法演示
 */
const basicDemo = async () => {
  // 基本用法 - 执行命令
  const result = await execa('echo', ['hello', 'world'])
  console.log('stdout:', result.stdout) // 'hello world'
  console.log('exitCode:', result.exitCode) // 0

  // 使用选项
  const resultWithOptions = await execa('ls', ['-la'], {
    cwd: '/tmp',
    env: { NODE_ENV: 'production' },
  })
  console.log('使用选项执行结果:', resultWithOptions.stdout)

  // 模板字符串语法
  const templateResult = await execa\`echo hello template\`
  console.log('模板字符串结果:', templateResult.stdout)

  return { result, resultWithOptions, templateResult }
}

export default basicDemo
`,i=`import { $ } from '../../../packages/node-utils/src/execa'

/**
 * $ 脚本语法演示
 *
 * $ 是一个便捷的脚本执行器，默认:
 * - 继承 stdin
 * - 优先使用本地安装的二进制文件
 */
const dollarDemo = async () => {
  // 模板字符串语法
  const { stdout } = await $\`echo hello from dollar syntax\`
  console.log('$ 语法结果:', stdout)

  // 同步执行
  const syncResult = $.sync\`echo sync hello\`
  console.log('同步执行结果:', syncResult.stdout)

  // 绑定选项
  const $verbose = $({ verbose: 'full' })
  const verboseResult = await $verbose\`echo verbose mode\`
  console.log('verbose 模式结果:', verboseResult.stdout)

  // 变量插值
  const name = 'world'
  const interpolated = await $\`echo hello \${name}\`
  console.log('变量插值结果:', interpolated.stdout)

  return { stdout, syncResult, verboseResult, interpolated }
}

export default dollarDemo
`,o=`import { execaSync, execaCommandSync } from '../../../packages/node-utils/src/execa'

/**
 * 同步执行演示
 *
 * execaSync 和 execaCommandSync 用于同步执行命令
 * 适用于不需要异步处理的简单场景
 */
const syncDemo = () => {
  // execaSync - 基本同步执行
  const result = execaSync('echo', ['hello', 'sync'])
  console.log('execaSync 结果:', result.stdout) // 'hello sync'
  console.log('退出码:', result.exitCode) // 0

  // execaCommandSync - 命令字符串同步执行
  const commandResult = execaCommandSync('echo hello command sync')
  console.log('execaCommandSync 结果:', commandResult.stdout)

  // 带选项的同步执行
  const optionsResult = execaSync('pwd', [], {
    cwd: '/tmp',
  })
  console.log('带选项的同步执行结果:', optionsResult.stdout)

  return { result, commandResult, optionsResult }
}

export default syncDemo
`,t=`import { execaCommand, parseCommandString } from '../../../packages/node-utils/src/execa'

/**
 * 命令字符串执行演示
 *
 * execaCommand 可以直接执行命令字符串，自动解析为命令和参数
 * parseCommandString 可以手动解析命令字符串
 */
const commandDemo = async () => {
  // execaCommand - 自动解析命令字符串
  const result = await execaCommand('echo hello world')
  console.log('execaCommand 结果:', result.stdout) // 'hello world'
  // 等同于 execa('echo', ['hello', 'world'])

  // 带引号的参数
  const quotedResult = await execaCommand('echo "hello world"')
  console.log('带引号的参数:', quotedResult.stdout)

  // parseCommandString - 手动解析命令字符串
  const parsed = parseCommandString('git commit -m "initial commit"')
  console.log('解析结果:', parsed)
  // { file: 'git', commandArguments: ['commit', '-m', 'initial commit'] }

  // 带选项的命令执行
  const optionsResult = await execaCommand('ls -la', {
    cwd: '/tmp',
  })
  console.log('带选项的命令执行:', optionsResult.stdout)

  return { result, quotedResult, parsed, optionsResult }
}

export default commandDemo
`,x=`import { execaNode } from '../../../packages/node-utils/src/execa'

/**
 * execaNode 演示
 *
 * execaNode 专门用于执行 Node.js 脚本
 * 自动设置 node: true 选项
 */
const nodeDemo = async () => {
  // 执行 Node.js 脚本
  const result = await execaNode('--version')
  console.log('Node.js 版本:', result.stdout)

  // 执行脚本文件（示例）
  // const scriptResult = await execaNode('script.js', ['arg1', 'arg2'])

  // 带选项执行
  const optionsResult = await execaNode('--eval', ['console.log("hello from eval")'], {
    verbose: 'short',
  })
  console.log('eval 执行结果:', optionsResult.stdout)

  // 使用 nodeOptions 传递 Node.js CLI 参数
  const nodeOptionsResult = await execaNode('--version', [], {
    nodeOptions: ['--no-warnings'],
  })
  console.log('带 nodeOptions 的结果:', nodeOptionsResult.stdout)

  return { result, optionsResult, nodeOptionsResult }
}

export default nodeDemo
`,h=`import { execa } from '../../../packages/node-utils/src/execa'

/**
 * 选项配置演示
 *
 * execa 支持丰富的配置选项
 */
const optionsDemo = async () => {
  // 工作目录
  const cwdResult = await execa('pwd', [], {
    cwd: '/tmp',
  })
  console.log('工作目录:', cwdResult.stdout)

  // 环境变量
  const envResult = await execa('node', ['-e', 'console.log(process.env.MY_VAR)'], {
    env: { MY_VAR: 'hello' },
  })
  console.log('环境变量:', envResult.stdout)

  // verbose 日志
  const verboseResult = await execa('echo', ['verbose test'], {
    verbose: 'full', // 'none' | 'short' | 'full'
  })
  console.log('verbose 结果:', verboseResult.stdout)

  // 超时设置
  try {
    await execa('sleep', ['10'], {
      timeout: 1000, // 1秒超时
    })
  } catch (error: any) {
    console.log('超时错误:', error.timedOut) // true
  }

  // 编码设置
  const encodingResult = await execa('echo', ['hello'], {
    encoding: 'utf8', // 默认
    // encoding: 'buffer' // 返回 Buffer
  })
  console.log('编码结果:', encodingResult.stdout)

  // 去除末尾换行符
  const stripResult = await execa('echo', ['hello'], {
    stripFinalNewline: true, // 默认为 true
  })
  console.log('去除换行符结果:', stripResult.stdout)

  // reject 设置
  const noRejectResult = await execa('false', [], {
    reject: false, // 不抛出错误
  })
  console.log('不抛出错误:', noRejectResult.failed) // true

  return { cwdResult, envResult, verboseResult, encodingResult, stripResult, noRejectResult }
}

export default optionsDemo
`,j=`import { execa, ExecaError } from '../../../packages/node-utils/src/execa'

/**
 * 错误处理演示
 *
 * execa 提供详细的错误信息
 */
const errorDemo = async () => {
  try {
    // 执行不存在的命令
    await execa('nonexistent-command', [])
  } catch (error) {
    if (error instanceof ExecaError) {
      console.log('错误消息:', error.message)
      console.log('简短消息:', error.shortMessage)
      console.log('命令:', error.command)
      console.log('退出码:', error.exitCode)
      console.log('是否失败:', error.failed) // true
    }
  }

  try {
    // 执行返回非零退出码的命令
    await execa('node', ['-e', 'process.exit(1)'])
  } catch (error: any) {
    console.log('退出码错误:', error.exitCode) // 1
    console.log('是否失败:', error.failed) // true
  }

  try {
    // 超时错误
    await execa('sleep', ['10'], { timeout: 100 })
  } catch (error: any) {
    console.log('超时错误:', error.timedOut) // true
    console.log('是否被终止:', error.isTerminated) // true
  }

  // 使用 reject: false 避免抛出错误
  const result = await execa('node', ['-e', 'process.exit(1)'], {
    reject: false,
  })
  console.log('不抛出错误时的结果:')
  console.log('- failed:', result.failed) // true
  console.log('- exitCode:', result.exitCode) // 1

  return { message: '错误处理演示完成' }
}

export default errorDemo
`;function d(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"execa",children:"execa"}),`
`,e.jsxs(n.p,{children:["execa 是一个强大的子进程执行库，提供比原生 ",e.jsx(n.code,{children:"child_process"})," 更好的开发体验。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsx(n.p,{children:"execa 是什么："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"一个现代化的子进程执行工具"}),`
`,e.jsxs(n.li,{children:["基于 Node.js 的 ",e.jsx(n.code,{children:"child_process"})," 模块封装"]}),`
`,e.jsx(n.li,{children:"提供 Promise API 和同步 API"}),`
`]}),`
`,e.jsx(n.p,{children:"涉及的知识点："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Node.js 子进程管理"}),`
`,e.jsx(n.li,{children:"命令行参数解析"}),`
`,e.jsx(n.li,{children:"进程间通信 (IPC)"}),`
`,e.jsx(n.li,{children:"信号处理和优雅终止"}),`
`]}),`
`,e.jsx(n.p,{children:"使用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"执行 shell 命令"}),`
`,e.jsx(n.li,{children:"运行外部脚本"}),`
`,e.jsx(n.li,{children:"构建 CLI 工具"}),`
`,e.jsx(n.li,{children:"自动化任务"}),`
`]}),`
`,e.jsx(n.p,{children:"主要优势："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"模板字符串语法，书写更简洁"}),`
`,e.jsx(n.li,{children:"自动解析命令字符串"}),`
`,e.jsx(n.li,{children:"详细的错误信息"}),`
`,e.jsx(n.li,{children:"支持 verbose 日志"}),`
`,e.jsx(n.li,{children:"TypeScript 类型完整"}),`
`]}),`
`,e.jsx(n.h2,{id:"基本用法",children:"基本用法"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"execa"})," 执行命令，支持传统调用和模板字符串两种方式。"]}),`
`,e.jsx(s,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"-脚本语法",children:"$ 脚本语法"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"$"})," 是一个便捷的脚本执行器，默认继承 stdin 并优先使用本地安装的二进制文件。"]}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"同步执行",children:"同步执行"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"execaSync"})," 和 ",e.jsx(n.code,{children:"execaCommandSync"})," 同步执行命令。"]}),`
`,e.jsx(s,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"命令字符串",children:"命令字符串"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"execaCommand"})," 直接执行命令字符串，自动解析为命令和参数。"]}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"nodejs-脚本执行",children:"Node.js 脚本执行"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"execaNode"})," 专门执行 Node.js 脚本。"]}),`
`,e.jsx(s,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"选项配置",children:"选项配置"}),`
`,e.jsx(n.p,{children:"execa 支持丰富的配置选项。"}),`
`,e.jsx(s,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"错误处理",children:"错误处理"}),`
`,e.jsx(n.p,{children:"execa 提供详细的错误信息。"}),`
`,e.jsx(s,{language:"typescript",children:j}),`
`,e.jsx(n.h2,{id:"api-参考",children:"API 参考"}),`
`,e.jsx(n.h3,{id:"导出的函数",children:"导出的函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数名"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"execa"})}),e.jsx("td",{children:"执行命令，返回 Promise"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"execaSync"})}),e.jsx("td",{children:"同步执行命令"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"execaCommand"})}),e.jsx("td",{children:"执行命令字符串，自动解析参数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"execaCommandSync"})}),e.jsx("td",{children:"同步执行命令字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"execaNode"})}),e.jsx("td",{children:"执行 Node.js 脚本"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"$"})}),e.jsx("td",{children:"脚本执行器，支持模板字符串"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"parseCommandString"})}),e.jsx("td",{children:"解析命令字符串为命令和参数"})]})]})]}),`
`,e.jsx(n.h3,{id:"常用选项",children:"常用选项"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"选项"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cwd"})}),e.jsx("td",{children:e.jsx("code",{children:"string | URL"})}),e.jsx("td",{children:e.jsx("code",{children:"process.cwd()"})}),e.jsx("td",{children:"工作目录"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"env"})}),e.jsx("td",{children:e.jsx("code",{children:"object"})}),e.jsx("td",{children:e.jsx("code",{children:"process.env"})}),e.jsx("td",{children:"环境变量"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"timeout"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:"超时时间（毫秒）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"verbose"})}),e.jsx("td",{children:e.jsx("code",{children:"'none' | 'short' | 'full'"})}),e.jsx("td",{children:e.jsx("code",{children:"'none'"})}),e.jsx("td",{children:"日志级别"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"encoding"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"'utf8'"})}),e.jsx("td",{children:"输出编码"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reject"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"失败时是否 reject"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"shell"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean | string"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"是否在 shell 中运行"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stdin"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"'pipe'"})}),e.jsx("td",{children:"stdin 配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stdout"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"'pipe'"})}),e.jsx("td",{children:"stdout 配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stderr"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"'pipe'"})}),e.jsx("td",{children:"stderr 配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stripFinalNewline"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"去除末尾换行符"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"preferLocal"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"优先使用本地二进制"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值属性",children:"返回值属性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stdout"})}),e.jsx("td",{children:e.jsx("code",{children:"string | Uint8Array"})}),e.jsx("td",{children:"标准输出"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stderr"})}),e.jsx("td",{children:e.jsx("code",{children:"string | Uint8Array"})}),e.jsx("td",{children:"标准错误"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"exitCode"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"退出码"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"failed"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否失败"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"timedOut"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否超时"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isCanceled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否被取消"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isTerminated"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否被信号终止"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"command"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"执行的命令"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"escapedCommand"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"转义后的命令"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"durationMs"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"执行时间（毫秒）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"模块结构",children:"模块结构"}),`
`,e.jsx(n.p,{children:"execa 拆分为多个独立模块："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-types"}),": 类型定义模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"定义所有共享类型：Options、Result、CommonOptions 等"}),`
`,e.jsx(n.li,{children:"包含常量：BINARY_ENCODINGS、FD_SPECIFIC_OPTIONS、DEFAULT_OPTIONS"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-methods"}),": 核心方法模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create.ts"}),": 创建 execa 方法的工厂函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mainAsync.ts"}),": 异步执行核心逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mainSync.ts"}),": 同步执行核心逻辑"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command.ts"}),": 命令字符串解析"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"script.ts"}),": $ 脚本方法实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"node.ts"}),": Node.js 脚本执行"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"template.ts"}),": 模板字符串解析"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bind.ts"}),": 选项绑定"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-arguments"}),": 参数处理模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options.ts"}),": 选项规范化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parameters.ts"}),": 参数解析"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command.ts"}),": 命令解析"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"escape.ts"}),": 参数转义"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-return"}),": 结果处理模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"result.ts"}),": 构建结果对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"finalError.ts"}),": 错误类定义（ExecaError、ExecaSyncError）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"message.ts"}),": 错误消息生成"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"duration.ts"}),": 执行时间计算"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-terminate"}),": 进程终止模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"signal.ts"}),": 信号处理"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"kill.ts"}),": 强制终止"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeout.ts"}),": 超时处理"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cleanup.ts"}),": 清理逻辑"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-verbose"}),": 日志模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"log.ts"}),": 日志输出"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"values.ts"}),": 值格式化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"info.ts"}),": 信息收集"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-io"}),": IO 处理模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxBuffer.ts"}),": 缓冲区限制"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stripNewline.ts"}),": 换行符处理"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-ipc"}),": IPC 模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ipcInput.ts"}),": IPC 输入验证"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"execa-utils"}),": 工具函数模块"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deferred.ts"}),": Promise 延迟"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uintArray.ts"}),": Uint8Array 工具"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"standardStream.ts"}),": 标准流工具"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abortSignal.ts"}),": 中止信号处理"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"命令解析"}),": 接收命令字符串或数组，解析为 file 和 arguments"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"选项规范化"}),": 合并默认选项、绑定选项和传入选项"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"进程创建"}),": 使用 ",e.jsx(n.code,{children:"child_process.spawn()"})," 或 ",e.jsx(n.code,{children:"spawnSync()"})," 创建子进程"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"输出收集"}),": 收集 stdout、stderr 输出"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"结果构建"}),": 构建包含所有信息的结果对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"错误处理"}),": 根据退出码和选项决定是否抛出错误"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`用户调用 execa/$/execaCommand
    ↓
createExeca 创建绑定方法
    ↓
parseArguments 解析参数
    ↓
normalizeOptions 规范化选项
    ↓
execaCoreAsync/execaCoreSync 执行
    ↓
child_process.spawn/spawnSync
    ↓
收集输出 → 构建结果 → 返回/抛出错误
`})})]})}function R(c={}){const{wrapper:n}={...l(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(d,{...c})}):d(c)}export{R as default};
