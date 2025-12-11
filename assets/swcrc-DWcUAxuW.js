import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CJRiz8xl.js";import{C as l}from"./blocks-BQlzN-aX.js";import"./iframe-BNypc-Hr.js";import"./index-B1AKrtt8.js";const i=`{
  "jsc": {
    "parser": {
      "syntax": "typescript"
    },
    "externalHelpers": true
  }
}`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"swcrc",children:".swcrc"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"SWC 编译器配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(l,{language:"json",children:i}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"jsc",children:n.jsx(s.code,{children:"jsc"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：JavaScript Compiler 配置，SWC 的核心编译选项"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"jsc"})," 是 SWC 的主要配置对象，控制编译器的行为"]}),`
`,n.jsx(s.li,{children:"包含解析器、转换器、代码生成等选项"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"jscparser",children:n.jsx(s.code,{children:"jsc.parser"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：配置源代码解析器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：定义如何解析和识别源代码语法"]}),`
`]}),`
`,n.jsx(s.h4,{id:"syntax-typescript",children:n.jsx(s.code,{children:'syntax: "typescript"'})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定源代码的语法类型为 TypeScript"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"告诉 SWC 使用 TypeScript 解析器来解析代码"}),`
`,n.jsx(s.li,{children:"支持 TypeScript 的所有语法特性（类型注解、接口、泛型等）"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"可选值"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:'"typescript"'}),"：TypeScript 语法"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:'"ecmascript"'}),"：标准 JavaScript/ECMAScript 语法"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"示例"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`{
  "jsc": {
    "parser": {
      "syntax": "typescript"  // 解析 TypeScript 代码
    }
  }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"jscexternalhelpers-true",children:n.jsx(s.code,{children:"jsc.externalHelpers: true"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：启用外部辅助函数，将辅助函数从外部包导入而不是内联"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["设置为 ",n.jsx(s.code,{children:"true"})," 时，编译后的代码会从 ",n.jsx(s.code,{children:"@swc/helpers"})," 包导入辅助函数"]}),`
`,n.jsxs(s.li,{children:["设置为 ",n.jsx(s.code,{children:"false"})," 时，辅助函数会被内联到编译后的代码中"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"好处"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"减小包体积"}),"：多个使用 SWC 编译的包可以共享同一份辅助函数代码"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提升性能"}),"：避免重复打包相同的辅助函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"便于维护"}),"：辅助函数统一管理，更新更方便"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"工作原理"}),"：",`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// externalHelpers: true 时，编译后代码：
import { _classCallCheck } from '@swc/helpers'

// externalHelpers: false 时，辅助函数会被内联：
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"注意事项"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"externalHelpers: true"})," 时，需要确保 ",n.jsx(s.code,{children:"@swc/helpers"})," 已安装"]}),`
`,n.jsxs(s.li,{children:["在 ",n.jsx(s.code,{children:"package.json"})," 的 ",n.jsx(s.code,{children:"devDependencies"})," 中通常已经包含 ",n.jsx(s.code,{children:"@swc/helpers"})]}),`
`]}),`
`]}),`
`]})]})}function o(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{o as default};
