# 夏布绣专家面谈网站

这是一个适合面谈现场直接展示的静态网页演示稿，已按 GitHub Pages 兼容方式整理，不依赖打包工具。

## 文件结构

- `index.html`：主页面
- `styles.css`：视觉样式
- `script.js`：翻页、导航、备注、全屏交互
- `assets/`：当前演示用示意图与后续可替换图片位置
- `.nojekyll`：确保 GitHub Pages 以纯静态方式处理

## 本地打开方式

最简单的方法：

1. 直接双击 `index.html`
2. 或在该目录启动一个本地服务器

PowerShell 示例：

```powershell
cd "C:\LEE\2026 艺术基金\2026.04.20_夏布绣专家面谈网站"
python -m http.server 8080
```

然后打开：

- `http://localhost:8080`

## GitHub Pages 发布方式

如果你要把它作为 GitHub 仓库网页来展示，可以这样做：

1. 新建一个 GitHub 仓库
2. 把本目录内所有文件上传到仓库根目录
3. 进入 GitHub 仓库的 `Settings`
4. 打开 `Pages`
5. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. 保存后等待 GitHub 生成页面链接

更详细的远程连接和发布说明见：

- `GITHUB_PUBLISH_GUIDE.md`
- `publish_to_github.ps1`

## 演示时的快捷操作

- `右方向键 / 下方向键 / 空格`：下一页
- `左方向键 / 上方向键`：上一页
- `N`：显示/关闭演讲备注
- `F`：全屏

## 建议的会前处理

- 如果你想替换为更具体的专家姓名、工作室名称、日期或联系方式，直接修改 `index.html` 中对应文字即可。
- 如果需要加入真实照片、作品图、路线图或视频，可以直接查看 `assets/IMAGES.md` 后替换当前示意图。
