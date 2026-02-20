import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{M as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Skills/介绍"}),`
`,n.jsx(e.h1,{id:"skills-技能系统",children:"Skills 技能系统"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"skills/"})," 目录包含一组 AI 编码技能规范，用于指导 AI 代理在代码生成、审查和重构时遵循项目最佳实践。"]}),`
`,n.jsx(e.h2,{id:"目录结构",children:"目录结构"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`skills/
├── typescript-style-guide/    # TypeScript 代码规范
│   ├── SKILL.md               # 规范摘要
│   └── references/
│       └── full-guide.md      # 完整参考指南
├── react-best-practices/      # React 性能优化最佳实践
│   ├── SKILL.md
│   └── references/
│       └── full-guide.md
├── skill-creator/             # 技能创建指南
│   ├── SKILL.md
│   ├── references/
│   │   ├── output-patterns.md
│   │   └── workflows.md
│   └── scripts/
│       ├── init_skill.py
│       ├── package_skill.py
│       └── quick_validate.py
├── storybook-creator/         # Storybook 文档创建规范
│   └── SKILL.md
└── utils-creator/             # 工具函数开发规范
    └── SKILL.md
`})}),`
`,n.jsx(e.h2,{id:"技能一览",children:"技能一览"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"技能"}),n.jsx("th",{children:"说明"}),n.jsx("th",{children:"触发场景"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"typescript-style-guide"})}),n.jsx("td",{children:"TypeScript 代码规范（命名、类型、函数、错误处理等 16 类规则）"}),n.jsx("td",{children:"编写或修改 TypeScript 代码时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"react-best-practices"})}),n.jsx("td",{children:"React/Next.js 性能优化（8 大类别共 57 条规则）"}),n.jsx("td",{children:"编写、审查或重构 React 代码时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"skill-creator"})}),n.jsx("td",{children:"创建新技能的指南和脚本"}),n.jsx("td",{children:"需要扩展 AI 能力时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"storybook-creator"})}),n.jsx("td",{children:"为工具函数创建 Storybook 演示文档"}),n.jsx("td",{children:"需要为 packages 下的工具创建 story 时"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"utils-creator"})}),n.jsx("td",{children:"工具函数开发规范"}),n.jsx("td",{children:"新增或修改工具函数时"})]})]})]}),`
`,n.jsx(e.h2,{id:"技能文件格式",children:"技能文件格式"}),`
`,n.jsxs(e.p,{children:["每个技能目录至少包含一个 ",n.jsx(e.code,{children:"SKILL.md"}),"，格式如下："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`---
name: 技能名称
description: 技能描述
---

# 标题

规则内容...
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"frontmatter"}),"：",n.jsx(e.code,{children:"name"})," 和 ",n.jsx(e.code,{children:"description"})," 用于技能注册和检索"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SKILL.md"}),"：规范摘要，包含核心规则和速查示例"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"references/"}),"：完整参考资料，供深入查阅"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"scripts/"}),"：可选的自动化脚本（如 ",n.jsx(e.code,{children:"skill-creator"})," 的初始化脚本）"]}),`
`]})]})}function j(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
