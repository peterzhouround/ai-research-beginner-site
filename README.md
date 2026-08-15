# AI 科研入门课

面向零基础学习者的中文静态教程网站。课程不是资料清单，而是一条从第一行 Python 代码走到第一次可复现实验的 24 周路线。

在线访问：<https://peterzhouround.github.io/ai-research-beginner-site/>

## 当前内容

- 6 个单元、42 节完整课程、42 份随堂测验
- Windows 环境、Python、Git 与 GitHub
- NumPy、pandas、Matplotlib 与必要数学
- 机器学习问题定义、数据划分、Pipeline、指标和过拟合
- PyTorch Tensor、DataLoader、训练、验证、checkpoint 与推理
- MLP、CNN、RNN、Attention、Transformer、微调、LoRA 与 RAG
- 论文检索、阅读、复现、对照/消融、多种子实验和结果分析
- 24 周作品路线与毕业研究项目
- 31 份按阶段筛选的官方教程、大学公开课、B站和 YouTube 课程

课程与外部链接最近核对日期：**2026-08-16**。框架与安装命令更新较快，实际安装时请以对应官方网站当前页面为准。

## 网站功能

- 按单元组织的课程目录
- 课程关键词搜索与单元筛选
- 总体及分单元学习进度
- 浏览器本机保存学习状态
- 每课目标、讲解、代码、常见坑、任务、验收标准和资料
- 资源库按学习阶段筛选
- 深色模式、键盘与移动端适配

## 文件结构

```text
ai-research-beginner-site/
├─ index.html       # 页面结构与 SEO 信息
├─ styles.css       # 视觉样式和响应式布局
├─ curriculum.js   # 课程、资源和 24 周路线数据
├─ app.js          # 搜索、筛选、进度、路由和测验逻辑
├─ favicon.svg
└─ README.md
```

## 本地预览

这是纯静态网站，不需要数据库或 Node.js 构建步骤。直接打开 `index.html` 即可。为了更接近线上环境，也可以在项目目录运行：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 发布与更新

网站通过 GitHub Pages 从 `main` 分支根目录发布。修改后先本地检查，再提交并推送：

```powershell
git status
git diff
git add index.html styles.css curriculum.js app.js README.md
git diff --staged
git commit -m "Expand AI research curriculum"
git push
```

GitHub Pages 会自动重新部署。通常数十秒到几分钟后线上版本更新。

## 内容维护原则

1. 技术事实优先使用官方文档、原论文和大学课程。
2. 每个外部资源必须说明适用阶段和使用方式。
3. 不收录夸大速成承诺、来源不清或必须加群领取资料的课程作为主推荐。
4. 每节课都必须包含可执行任务和可判断的验收标准。
5. 科研内容强调可追溯、可复现、控制变量、负面结果和结论边界。
