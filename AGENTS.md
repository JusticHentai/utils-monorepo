# Global Preferences

- 默认使用简体中文回复用户，除非用户明确要求使用其他语言。
- 代码、命令、文件名、日志、错误信息和专有名词按技术语境保留原文；解释性文字使用中文。

# Git Workflow

- 默认只在 `main` 分支上处理后续改动。
- 不要默认新建 `codex/` 分支；只有用户明确要求使用独立分支、PR 或实验分支时才创建新分支。
- 在执行会影响分支历史的操作前，先确认当前分支和工作区状态。

# Package Development

- 修改或新增 `packages/*/src/**` 工具时，先遵循 `skills/utils-creator/SKILL.md`。
- 新增或改造 `stories/*/**` 时，先遵循 `skills/storybook-creator/SKILL.md`。
- 如果目标 package 下存在自己的 `AGENTS.md`，同时遵循该 package 的附加规则。
