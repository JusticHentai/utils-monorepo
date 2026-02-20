# 强制修改 Git 中路径大小写

在 **Windows/macOS** 上文件系统不区分大小写，Git 可能把目录记成小写；在 **Linux**（如 GitHub Actions）上会按区分大小写解析，导致路径找不到。

当前情况：Git 中为 `packages/element-utils/src/canvas/`（小写），而代码和 story 引用的是 `Canvas`（大写），需在 Git 里把目录名改为大写。

## 方法：两步重命名

在仓库根目录执行（PowerShell 或 Git Bash）：

```bash
# 第一步：先改成临时名（避免只改大小写时 Git/文件系统不生效）
git mv packages/element-utils/src/canvas packages/element-utils/src/Canvas-temp

# 第二步：再改成目标名
git mv packages/element-utils/src/Canvas-temp packages/element-utils/src/Canvas

# 提交
git add -A
git commit -m "chore: 将 element-utils/src/canvas 在 Git 中改为 Canvas（区分大小写）"
```

## 若需改其他目录

对任意「只改大小写」的重命名都可用同样套路：

```bash
# 把 DirName 改成 dirname 或反过来
git mv path/to/DirName path/to/DirName-temp
git mv path/to/DirName-temp path/to/dirname   # 或 path/to/DirName
```

## 一次性批量改多个目录（可选）

如需同时修正多个目录大小写，可写成脚本（Git Bash）：

```bash
# 示例：canvas -> Canvas（按需增删）
for f in $(git ls-files packages/element-utils/src/canvas/); do
  git mv "$f" "${f%/*}/Canvas-temp/${f##*/}"
done
# 再整体从 Canvas-temp 改回 Canvas（或逐文件 git mv 到 Canvas/）
```

建议优先用上面的「两步重命名」单目录方式，简单可靠。

## 验证

改完后可检查 Git 中的路径：

```bash
git ls-files packages/element-utils/src/ | grep -i canvas
```

应看到 `packages/element-utils/src/Canvas/`（大写 C），而不是 `canvas/`。
