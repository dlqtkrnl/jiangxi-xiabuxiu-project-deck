# GitHub 发布整理

这个目录已经适合直接作为一个独立 GitHub Pages 仓库使用。

当前已完成：

- 静态网页结构整理完成
- `.nojekyll` 已添加
- `.gitignore` 已添加
- 本地 `git` 仓库已初始化

## 一、为什么之前 `git status` 会报错

当前仓库曾出现过 Git 的 `dubious ownership` 提示。  
如果你在自己的终端里遇到同样问题，执行一次下面命令即可：

```powershell
git config --global --add safe.directory "C:/LEE/2026 艺术基金/2026.04.20_夏布绣专家面谈网站"
```

## 二、首次提交推荐命令

在该目录打开终端后执行：

```powershell
git config --global --add safe.directory "C:/LEE/2026 艺术基金/2026.04.20_夏布绣专家面谈网站"
git add .
git commit -m "Create expert meeting presentation site"
```

## 三、连接远程仓库

把下面的 `YOUR_REPO_URL` 替换为你的 GitHub 仓库地址：

```powershell
git remote add origin YOUR_REPO_URL
git push -u origin main
```

示例：

```powershell
git remote add origin https://github.com/yourname/xiabuxiu-meeting-site.git
git push -u origin main
```

## 四、GitHub Pages 设置

本仓库已经包含 `.github/workflows/pages.yml`，推荐使用 GitHub Actions 部署。

上传完成后：

1. 进入 GitHub 仓库
2. 打开 `Settings`
3. 打开 `Pages`
4. 如果页面要求选择来源，选择 `GitHub Actions`
5. 回到 `Actions` 页面，等待 `Deploy GitHub Pages` 工作流跑完

公开地址通常会是：

```text
https://dlqtkrnl.github.io/jiangxi-xiabuxiu-project-deck/
```

## 五、上线前最后建议

- 先把 `assets` 中的示意图替换成真实照片或作品图
- 把 `index.html` 里的专家称呼和具体信息再核对一遍
- 如果现场网络不稳定，仍建议保留本地 `index.html` 作为离线备用
