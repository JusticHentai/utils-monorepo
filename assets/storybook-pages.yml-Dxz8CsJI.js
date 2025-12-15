import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-cWiy7Bet.js";import{C as d}from"./blocks-DWl2brnh.js";import"./iframe-C0m4eGTF.js";import"./index-CDLX9aEH.js";const r=`name: Deploy Storybook to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:  # 允许手动触发

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v4

      # 安装 Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24   # 可根据你的项目修改

      # 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10

      # 安装依赖
      - name: Install dependencies
        run: |
         pnpm install

      # 构建 Storybook
      - name: Build Storybook
        run: pnpm md:build

      # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: storybook-static     # Storybook 打包后默认目录`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"storybook-pagesyml",children:"storybook-pages.yml"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"GitHub Actions 工作流配置文件"}),`
`]}),`
`,n.jsx(s.h2,{id:"配置",children:"配置"}),`
`,n.jsx(d,{language:"yaml",children:r}),`
`,n.jsx(s.h2,{id:"配置详解",children:"配置详解"}),`
`,n.jsx(s.h3,{id:"工作流基本信息",children:"工作流基本信息"}),`
`,n.jsx(s.h4,{id:"name-deploy-storybook-to-github-pages",children:n.jsx(s.code,{children:"name: Deploy Storybook to GitHub Pages"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：工作流名称"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：用于在 GitHub Actions 界面中显示"]}),`
`]}),`
`,n.jsx(s.h3,{id:"触发条件",children:"触发条件"}),`
`,n.jsx(s.h4,{id:"on",children:n.jsx(s.code,{children:"on:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义工作流的触发条件"]}),`
`]}),`
`,n.jsx(s.h5,{id:"push-branches---main",children:n.jsx(s.code,{children:"push: branches: - main"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：当代码推送到 ",n.jsx(s.code,{children:"main"})," 分支时触发"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["每次推送到 ",n.jsx(s.code,{children:"main"})," 分支都会自动部署"]}),`
`,n.jsx(s.li,{children:"确保生产环境的 Storybook 始终是最新版本"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h5,{id:"workflow_dispatch",children:n.jsx(s.code,{children:"workflow_dispatch:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：允许手动触发工作流"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"在 GitHub Actions 界面中可以手动运行"}),`
`,n.jsx(s.li,{children:"用于测试部署流程或重新部署"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"任务配置",children:"任务配置"}),`
`,n.jsx(s.h4,{id:"jobs-build-and-deploy",children:n.jsx(s.code,{children:"jobs: build-and-deploy:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：定义构建和部署任务"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：包含所有部署步骤"]}),`
`]}),`
`,n.jsx(s.h5,{id:"runs-on-ubuntu-latest",children:n.jsx(s.code,{children:"runs-on: ubuntu-latest"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：指定运行环境"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用最新的 Ubuntu 系统作为运行环境"]}),`
`]}),`
`,n.jsx(s.h3,{id:"步骤详解",children:"步骤详解"}),`
`,n.jsx(s.h4,{id:"1-checkout拉取代码",children:"1. Checkout（拉取代码）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Checkout
  uses: actions/checkout@v4
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：从仓库拉取代码"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：使用 ",n.jsx(s.code,{children:"actions/checkout@v4"})," 将代码检出到工作目录"]}),`
`]}),`
`,n.jsx(s.h4,{id:"2-setup-nodejs安装-nodejs",children:"2. Setup Node.js（安装 Node.js）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 24
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：安装指定版本的 Node.js"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"actions/setup-node@v4"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"node-version: 24"}),"：安装 Node.js 24 版本"]}),`
`,n.jsx(s.li,{children:"可根据项目需求修改版本号"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"3-install-pnpm安装-pnpm",children:"3. Install pnpm（安装 pnpm）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Install pnpm
  uses: pnpm/action-setup@v3
  with:
    version: 10
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：安装 pnpm 包管理器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"pnpm/action-setup@v3"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"version: 10"}),"：安装 pnpm 10 版本"]}),`
`,n.jsx(s.li,{children:"pnpm 是 monorepo 项目的包管理器"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"4-install-dependencies安装依赖",children:"4. Install dependencies（安装依赖）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Install dependencies
  run: |
    pnpm install
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：安装项目依赖"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["运行 ",n.jsx(s.code,{children:"pnpm install"})," 安装所有依赖"]}),`
`,n.jsx(s.li,{children:"包括 workspace 中所有包的依赖"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"5-build-storybook构建-storybook",children:"5. Build Storybook（构建 Storybook）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Build Storybook
  run: pnpm md:build
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：构建 Storybook 静态站点"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["运行 ",n.jsx(s.code,{children:"pnpm md:build"})," 命令"]}),`
`,n.jsxs(s.li,{children:["对应 ",n.jsx(s.code,{children:"package.json"})," 中的 ",n.jsx(s.code,{children:'md:build: "storybook build"'})]}),`
`,n.jsxs(s.li,{children:["生成静态文件到 ",n.jsx(s.code,{children:"storybook-static"})," 目录"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h4,{id:"6-deploy-to-github-pages部署到-github-pages",children:"6. Deploy to GitHub Pages（部署到 GitHub Pages）"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-yaml",children:`- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: \${{ secrets.GITHUB_TOKEN }}
    publish_dir: storybook-static
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"作用"}),"：将构建产物部署到 GitHub Pages"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"说明"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["使用 ",n.jsx(s.code,{children:"peaceiris/actions-gh-pages@v4"})," 进行部署"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"github_token"}),"：使用 GitHub 自动生成的 token（无需手动配置）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"publish_dir: storybook-static"}),"：指定部署目录（Storybook 默认输出目录）"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"部署流程",children:"部署流程"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"代码推送"}),"：开发者推送代码到 ",n.jsx(s.code,{children:"main"})," 分支"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"自动触发"}),"：GitHub Actions 自动触发工作流"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"环境准备"}),"：安装 Node.js 和 pnpm"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"依赖安装"}),"：安装项目依赖"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"构建"}),"：构建 Storybook 静态站点"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"部署"}),"：将构建产物部署到 GitHub Pages"]}),`
`]}),`
`,n.jsx(s.h3,{id:"访问地址",children:"访问地址"}),`
`,n.jsx(s.p,{children:"部署成功后，Storybook 可以通过以下地址访问："}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"https://<用户名>.github.io/<仓库名>/"})}),`
`]}),`
`,n.jsx(s.h3,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"权限设置"}),"：确保仓库的 GitHub Pages 功能已启用"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"分支设置"}),"：GitHub Pages 通常使用 ",n.jsx(s.code,{children:"gh-pages"})," 分支或 ",n.jsx(s.code,{children:"docs"})," 目录"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Token 权限"}),"：",n.jsx(s.code,{children:"GITHUB_TOKEN"})," 需要写入权限才能部署"]}),`
`]})]})}function x(e={}){const{wrapper:s}={...l(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
