import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BG77pm9a.js";import{C as c}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const r=`{
  "extends": "../config-utils/tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["./**/*.ts"],
}
`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"tsconfigjson",children:"tsconfig.json"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"TypeScript 编译器配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(c,{language:"json",children:r}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"extends-config-utilstsconfigbasejson",children:n.jsx(s.code,{children:'extends: "../config-utils/tsconfig.base.json"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：继承基础 TypeScript 配置，复用共享的编译选项"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["从父级目录的 ",n.jsx(s.code,{children:"config-utils/tsconfig.base.json"})," 继承基础配置"]}),`
`,n.jsx(s.li,{children:"避免在每个包中重复配置相同的选项"}),`
`,n.jsx(s.li,{children:"便于统一管理 monorepo 中所有包的 TypeScript 配置"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一配置"}),"：确保所有包使用相同的编译标准"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于维护"}),"：修改基础配置即可影响所有包"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减少重复"}),"：避免在每个包的配置中重复相同的选项"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"compileroptions",children:n.jsx(s.code,{children:"compilerOptions"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：TypeScript 编译器的选项配置"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：控制 TypeScript 如何编译代码、类型检查行为等"]}),`
`]}),`
`,n.jsx(s.h4,{id:"baseurl-",children:n.jsx(s.code,{children:'baseUrl: "."'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：设置模块解析的基础路径"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"所有非相对路径的模块导入都会相对于此路径解析"}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:'"."'})," 表示当前目录（即 ",n.jsx(s.code,{children:"tsconfig.json"})," 所在目录）"]}),`
`,n.jsxs(s.li,{children:["与 ",n.jsx(s.code,{children:"paths"})," 选项配合使用，实现路径别名功能"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用场景"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 设置 baseUrl: "." 后，可以这样导入
import { utils } from 'src/utils'

// 而不是使用相对路径
// import { utils } from './src/utils'
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"paths",children:n.jsx(s.code,{children:"paths"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：配置模块路径映射，实现路径别名"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"将导入路径映射到实际的文件系统路径"}),`
`,n.jsxs(s.li,{children:["与 ",n.jsx(s.code,{children:"baseUrl"})," 配合使用"]}),`
`,n.jsx(s.li,{children:"仅用于 TypeScript 编译时的类型检查，不影响运行时路径解析"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"配置格式"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`{
  "paths": {
    "别名/*": ["实际路径/*"]
  }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h5,{id:"-src",children:n.jsx(s.code,{children:'"@/*": ["src/*"]'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：将 ",n.jsx(s.code,{children:"@/"})," 别名映射到 ",n.jsx(s.code,{children:"src/"})," 目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"@/"})," 作为 ",n.jsx(s.code,{children:"src/"})," 目录的别名"]}),`
`,n.jsxs(s.li,{children:["简化导入路径，避免使用相对路径（如 ",n.jsx(s.code,{children:"../../../src/utils"}),"）"]}),`
`,n.jsx(s.li,{children:"提升代码可读性和可维护性"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"使用示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`// 使用别名导入
import { utils } from '@/utils'
import { types } from '@/types'

// 等价于
// import { utils } from './src/utils'
// import { types } from './src/types'
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"简化路径"}),"：避免深层相对路径（",n.jsx(s.code,{children:"../../.."}),"）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"易于重构"}),"：移动文件时不需要修改导入路径"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"统一风格"}),"：所有导入都使用统一的别名格式"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"paths"})," 只影响 TypeScript 类型检查，不影响运行时"]}),`
`,n.jsx(s.li,{children:"如果使用打包工具（如 tsup、webpack），需要额外配置路径别名"}),`
`,n.jsxs(s.li,{children:["某些打包工具会自动读取 ",n.jsx(s.code,{children:"tsconfig.json"})," 的 ",n.jsx(s.code,{children:"paths"})," 配置"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"include-ts",children:n.jsx(s.code,{children:'include: ["./**/*.ts"]'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定 TypeScript 编译器要包含的文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"使用 glob 模式匹配文件"}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"./**/*.ts"})," 表示当前目录及其所有子目录中的 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`,n.jsxs(s.li,{children:["只有被 ",n.jsx(s.code,{children:"include"})," 匹配的文件才会被 TypeScript 处理"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"匹配规则"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"./"}),"：当前目录（",n.jsx(s.code,{children:"tsconfig.json"})," 所在目录）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"**"}),"：匹配任意深度的子目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"*.ts"}),"：匹配所有 ",n.jsx(s.code,{children:".ts"})," 文件"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`{
  "include": [
    "./**/*.ts"        // 所有 .ts 文件
    // 或者更具体
    // "./src/**/*.ts"  // 只包含 src 目录下的 .ts 文件
  ]
}
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"include"})," 和 ",n.jsx(s.code,{children:"exclude"})," 配合使用可以精确控制编译范围"]}),`
`,n.jsxs(s.li,{children:["默认情况下，如果没有 ",n.jsx(s.code,{children:"include"}),"，会包含所有 ",n.jsx(s.code,{children:".ts"})," 和 ",n.jsx(s.code,{children:".tsx"})," 文件"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"node_modules"})," 目录通常会被自动排除"]}),`
`]}),`
`]}),`
`]})]})}function t(i={}){const{wrapper:s}={...l(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{t as default};
