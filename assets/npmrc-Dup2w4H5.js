import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CJRiz8xl.js";import{C as i}from"./blocks-BQlzN-aX.js";import"./iframe-BNypc-Hr.js";import"./index-B1AKrtt8.js";const l=`# registry=https://registry.npmjs.org/
always-auth=true
access=public
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"npmrc",children:".npmrc"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:".npmrc"})," 文件用于配置 npm 的注册表和访问权限"]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(i,{language:"bash",children:l}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"registry"})," 注册表地址",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"https://registry.npmjs.org/"})," 使用官网的 ",n.jsx(s.code,{children:"registry"})," 地址"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"always-auth"})," 是否总是进行身份验证",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"true"})," 总是进行身份验证"]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"access"})," 访问权限",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"public"})," 避免每次发布时手动指定 --access public"]}),`
`]}),`
`]}),`
`]})]})}function j(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
