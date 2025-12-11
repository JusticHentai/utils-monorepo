import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BG77pm9a.js";import{C as s}from"./blocks-BembaQL3.js";import"./iframe-Bx1jIGpJ.js";import"./index-BEZfg86b.js";const o=`{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-packagejson"]
}
`;function r(t){const n={h1:"h1",h2:"h2",li:"li",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"prettierrc",children:".prettierrc"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prettier 配置文件，主要是给 vscode 的 prettier 插件使用"}),`
`,e.jsx(n.li,{children:"目前 prettier 插件不支持 prettier.config.js 文件，所以需要使用 .prettierrc 文件"}),`
`]}),`
`,e.jsx(n.h2,{id:"配置",children:"配置"}),`
`,e.jsx(s,{language:"json",children:o})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
