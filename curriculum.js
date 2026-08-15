const courseVersion = {
  label: "2026.08",
  verifiedAt: "2026-08-16",
  note: "课程链接与工具版本已于 2026 年 8 月核对。框架更新很快，安装命令以对应官网当前页面为准。"
};

const courseModules = [
  { id: "foundation", number: "01", title: "AI 与 Python 地基", subtitle: "从运行第一行代码，到能独立写小程序", color: "#e36b3d", weeks: "第 1–4 周" },
  { id: "git", number: "02", title: "Git 与协作", subtitle: "让代码可追踪、可分享、可恢复", color: "#7259c9", weeks: "第 5–6 周" },
  { id: "data-math", number: "03", title: "数据与必要数学", subtitle: "只学会真正用于建模的数学与数据工具", color: "#167d74", weeks: "第 7–10 周" },
  { id: "machine-learning", number: "04", title: "机器学习", subtitle: "建立规范的训练、验证和评价思维", color: "#b87b13", weeks: "第 11–14 周" },
  { id: "deep-learning", number: "05", title: "PyTorch 与深度学习", subtitle: "独立写出完整训练、保存和推理流程", color: "#c54d62", weeks: "第 15–19 周" },
  { id: "research", number: "06", title: "论文复现与科研", subtitle: "把能运行的代码变成可信的实验结论", color: "#356aa0", weeks: "第 20–24 周" }
];

const resourceLibrary = [
  { id: "python-docs", stage: "foundation", type: "官方文档", provider: "Python", title: "Python 3.14 中文教程", url: "https://docs.python.org/zh-cn/3.14/tutorial/index.html", note: "当前中文官方教程；适合学习数据结构、函数、文件、异常、模块与虚拟环境。", featured: true },
  { id: "python-mooc", stage: "foundation", type: "B站", provider: "北京理工大学", title: "嵩天：Python 语言程序设计", url: "https://www.bilibili.com/video/BV1JL4y1x7xC/", note: "中文系统公开课。建议按本站知识点选看，不必从头连续刷完。", featured: true },
  { id: "kaggle-python", stage: "foundation", type: "交互练习", provider: "Kaggle", title: "Kaggle Learn Python", url: "https://www.kaggle.com/learn/python", note: "在浏览器直接运行代码，适合学完语法后用短练习巩固。" },
  { id: "jupyter", stage: "foundation", type: "官方工具", provider: "Project Jupyter", title: "Try Jupyter", url: "https://jupyter.org/try", note: "无需先配置本机环境即可体验 Notebook；正式项目仍应保存为脚本并使用 Git。" },
  { id: "missing-semester", stage: "foundation", type: "公开课", provider: "MIT", title: "计算机教育中缺失的一课", url: "https://missing.csail.mit.edu/", note: "补齐命令行、编辑器、Git、调试和自动化等大学课程常省略的工具能力。" },
  { id: "git-book", stage: "git", type: "官方教材", provider: "Git", title: "Pro Git 中文版", url: "https://git-scm.com/book/zh/v2", note: "Git 官方站点提供的完整中文开源书；先读起步、Git 基础和分支。", featured: true },
  { id: "github-flow", stage: "git", type: "官方文档", provider: "GitHub", title: "GitHub Flow", url: "https://docs.github.com/en/get-started/using-github/github-flow", note: "分支、提交、Pull Request、评审和合并的轻量协作流程。" },
  { id: "github-pages", stage: "git", type: "官方文档", provider: "GitHub", title: "GitHub Pages 入门", url: "https://docs.github.com/en/pages/getting-started-with-github-pages", note: "用 GitHub 仓库发布静态网站；本站就是这种方式。" },
  { id: "numpy-beginner", stage: "data-math", type: "官方教程", provider: "NumPy", title: "NumPy 初学者绝对基础", url: "https://numpy.org/doc/stable/user/absolute_beginners.html", note: "从 ndarray、shape、索引、轴到基本数组操作的官方入门。", featured: true },
  { id: "pandas-start", stage: "data-math", type: "官方教程", provider: "pandas", title: "pandas 入门教程", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/", note: "覆盖表格读写、筛选、统计、缺失值、合并和时间序列。" },
  { id: "matplotlib", stage: "data-math", type: "官方教程", provider: "Matplotlib", title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html", note: "从快速绘图到图形生命周期；实验图应标注坐标、单位和图例。" },
  { id: "cs229-math", stage: "data-math", type: "讲义", provider: "Stanford", title: "CS229 数学复习讲义", url: "https://web.stanford.edu/class/cs229/section/cs229-linalg.pdf", note: "线性代数复习；只在需要更严谨推导时查阅，不要求零基础一次看完。" },
  { id: "mlcc", stage: "machine-learning", type: "交互课程", provider: "Google", title: "新版 Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", note: "已更新的回归、分类、数据、泛化、过拟合与神经网络交互课程。", featured: true },
  { id: "sklearn-start", stage: "machine-learning", type: "官方教程", provider: "scikit-learn", title: "scikit-learn Getting Started", url: "https://scikit-learn.org/stable/getting_started.html", note: "用统一的 fit/predict API 学习预处理、Pipeline、划分和交叉验证。" },
  { id: "andrew-ml", stage: "machine-learning", type: "B站", provider: "DeepLearning.AI", title: "吴恩达 2022 机器学习专项课（中英字幕）", url: "https://www.bilibili.com/video/BV19B4y1W76i/", note: "线性回归、逻辑回归、神经网络和推荐系统；本站建议按课题选看。" },
  { id: "cs229", stage: "machine-learning", type: "公开课", provider: "Stanford", title: "CS229 Machine Learning", url: "https://see.stanford.edu/Course/CS229", note: "理论进阶参考，含讲义和公开视频；完成本站机器学习单元后再进入。" },
  { id: "pytorch-basics", stage: "deep-learning", type: "官方教程", provider: "PyTorch", title: "PyTorch Learn the Basics", url: "https://docs.pytorch.org/tutorials/beginner/basics/intro.html", note: "2026 年更新的完整入门链路：Tensor、数据、模型、自动微分、优化、保存加载。", featured: true },
  { id: "d2l", stage: "deep-learning", type: "中文教材", provider: "D2L", title: "《动手学深度学习》", url: "https://zh.d2l.ai/", note: "把数学、代码与实验放在一起的免费中文主教材。", featured: true },
  { id: "d2l-video", stage: "deep-learning", type: "B站", provider: "李沐", title: "《动手学深度学习》配套视频", url: "https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497", note: "优先选择李沐官方账号系列，与 D2L 教材配合使用。" },
  { id: "3b1b-nn", stage: "deep-learning", type: "YouTube", provider: "3Blue1Brown", title: "Neural Networks 动画系列", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", note: "用动画建立神经网络、梯度下降和反向传播的直觉。" },
  { id: "zero-to-hero", stage: "deep-learning", type: "YouTube", provider: "Andrej Karpathy", title: "Neural Networks: Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html", note: "从 micrograd 手写反向传播，一直构建到 GPT；要求已掌握 Python 和基础导数。" },
  { id: "cs231n", stage: "deep-learning", type: "课程讲义", provider: "Stanford", title: "CS231n 2025", url: "https://cs231n.stanford.edu/2025/schedule.html", note: "计算机视觉进阶：训练神经网络、CNN、架构与视觉 Transformer。" },
  { id: "cs224n", stage: "deep-learning", type: "课程讲义", provider: "Stanford", title: "CS224N 2026", url: "https://web.stanford.edu/class/cs224n/", note: "NLP 与大模型进阶，包含 Transformer、预训练、评测、推理与开放问题。" },
  { id: "hf-course", stage: "deep-learning", type: "中文课程", provider: "Hugging Face", title: "Hugging Face LLM Course 中文版", url: "https://huggingface.co/learn/llm-course/zh-CN/chapter1/1", note: "Transformer、Datasets、Tokenizers、微调与常见 NLP 任务。" },
  { id: "arxiv", stage: "research", type: "论文平台", provider: "arXiv", title: "arXiv Advanced Search", url: "https://arxiv.org/search/advanced", note: "按标题、作者、摘要、类别和时间组合检索预印本；再核对正式发表版本。" },
  { id: "semantic-scholar", stage: "research", type: "论文工具", provider: "Semantic Scholar", title: "Semantic Scholar", url: "https://www.semanticscholar.org/", note: "用引用网络、相关论文和作者主页扩展检索，不以单一推荐结果替代系统搜索。" },
  { id: "zotero", stage: "research", type: "文献管理", provider: "Zotero", title: "Zotero Quick Start", url: "https://www.zotero.org/support/quick_start_guide", note: "管理 PDF、元数据、笔记和引用；从第一篇论文起就建立规范文献库。" },
  { id: "pytorch-repro", stage: "research", type: "官方指南", provider: "PyTorch", title: "PyTorch Reproducibility", url: "https://docs.pytorch.org/docs/stable/notes/randomness.html", note: "解释随机种子、确定性算法、硬件和版本差异；同一种子不等于跨平台完全一致。" },
  { id: "neurips-checklist", stage: "research", type: "科研规范", provider: "NeurIPS", title: "NeurIPS Paper Checklist", url: "https://neurips.cc/public/guides/PaperChecklist", note: "用真实会议清单检查假设、实验细节、统计、数据代码、限制、伦理和可复现性。", featured: true },
  { id: "mlrc", stage: "research", type: "科研实践", provider: "NeurIPS", title: "ML Reproducibility Challenge 2026", url: "https://neurips.cc/Conferences/2026/CallForReproducibility", note: "了解正式复现研究如何选择论文、核查结论并形成可审查报告。" },
  { id: "mlflow", stage: "research", type: "官方工具", provider: "MLflow", title: "MLflow Tracking Quickstart", url: "https://mlflow.org/docs/latest/ml/getting-started/quickstart/", note: "记录参数、指标、代码版本和产物；初学时也可先用 CSV 实验表。" }
];

const studyPlan = [
  { weeks: "1–4", title: "Python 地基", output: "3 个命令行小程序 + 可复用函数文件", lessons: "01–10" },
  { weeks: "5–6", title: "Git 与公开作品", output: "一个有清晰提交历史和 README 的仓库", lessons: "11–15" },
  { weeks: "7–10", title: "数据与数学", output: "一份数据清洗与探索性分析 Notebook", lessons: "16–21" },
  { weeks: "11–14", title: "机器学习", output: "一个无数据泄漏的分类 baseline", lessons: "22–27" },
  { weeks: "15–19", title: "深度学习", output: "FashionMNIST 完整训练、保存、加载和推理项目", lessons: "28–36" },
  { weeks: "20–24", title: "科研闭环", output: "复现报告 + 对照实验 + 10 页汇报材料", lessons: "37–42" }
];

function escapeCourseCode(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function lessonBody({ lead, concepts = [], sections = [], code = "", codeTitle = "最小示例", pitfalls = [], task, acceptance = [] }) {
  return `
    <div class="lesson-lead"><strong>本课结论</strong><p>${lead}</p></div>
    ${concepts.length ? `<h2>先建立核心概念</h2><div class="concept-grid">${concepts.map(([name, text]) => `<div class="concept-card"><strong>${name}</strong><span>${text}</span></div>`).join("")}</div>` : ""}
    ${sections.map(([title, html]) => `<h2>${title}</h2>${html}`).join("")}
    ${code ? `<h2>${codeTitle}</h2><pre><code>${escapeCourseCode(code)}</code></pre>` : ""}
    ${pitfalls.length ? `<div class="pitfall-box"><h3>常见坑</h3><ul>${pitfalls.map(item => `<li>${item}</li>`).join("")}</ul></div>` : ""}
    <div class="practice-box"><h3>本课动手任务</h3><p>${task}</p>${acceptance.length ? `<strong>验收标准</strong><ul>${acceptance.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}</div>`;
}

const lessons = [
  {
    id: "ai-basics", number: "01", module: "foundation", title: "AI 到底在做什么？", kicker: "第一单元 · 建立直觉", duration: "25 分钟",
    summary: "从任务、数据、模型、损失到泛化，建立一张不会被热词带偏的 AI 地图。",
    goals: ["分清任务、特征与标签", "说出训练循环", "理解泛化比背答案重要"], resources: ["mlcc", "3b1b-nn"],
    body: lessonBody({
      lead: "模型是一个带参数的计算系统。训练用数据调整参数，评估用未见数据检查它能否泛化。",
      concepts: [["任务", "先明确输入、期望输出和使用场景"], ["数据", "样本、特征与可能存在噪声的标签"], ["模型", "把输入映射为输出的参数化函数"], ["损失", "把预测错误变成可优化的数值"]],
      sections: [
        ["训练循环不是魔法", `<div class="flow"><span>取一批数据</span><b>→</b><span>前向预测</span><b>→</b><span>计算损失</span><b>→</b><span>反向求梯度</span><b>→</b><span>更新参数</span></div><p>重复很多轮后，训练损失通常下降。但训练集表现好不代表真实场景表现好，所以还需要验证集和测试集。</p>`],
        ["先问对问题", `<p>“做一个 AI”不是可执行任务。“输入邮件正文，输出垃圾邮件概率，并在独立测试集上报告 F1”才是任务。科研中还要说明数据来自哪里、指标为何合适、失败会造成什么影响。</p><blockquote>模型学到的是数据中能降低损失的模式，不等于它理解了人类概念，也不保证因果关系。</blockquote>`]
      ],
      pitfalls: ["把调用现成模型等同于已经理解训练原理", "只看训练准确率，不保留独立测试集", "先选最热门模型，再倒推问题"],
      task: "任选一个场景（垃圾邮件、房价、图像分类或文本问答），写出输入、输出、标签来源、评价指标和一种可能失败的情况。",
      acceptance: ["任务能用一句具体的话描述", "输入和标签没有混淆", "至少指出一个数据偏差或使用风险"]
    }),
    quiz: { question: "训练集准确率 99%，能否直接说明模型在真实用户数据上也有 99%？", options: ["能，训练集最大", "不能，还要看独立数据上的泛化", "能，只要模型够大", "不能，因为准确率永远不能用"], answer: 1, success: "正确。训练表现与泛化表现是两件事。", failure: "训练数据参与了参数学习，不能单独证明对未见数据有效。" }
  },
  {
    id: "git-basics", number: "11", module: "git", title: "Git：给项目装上时光机", kicker: "第二单元 · 版本控制", duration: "35 分钟",
    summary: "分清 Git 与 GitHub，理解仓库、工作区、暂存区和提交，创建第一段可追踪历史。",
    goals: ["分清 Git/GitHub", "理解 add/commit", "保护密钥与大文件"], resources: ["git-book", "missing-semester"],
    body: lessonBody({
      lead: "Git 在本机记录版本；GitHub 托管和分享 Git 仓库。commit 是有说明的项目快照，不是上传。",
      concepts: [["Repository", "由 Git 管理的项目目录"], ["Working Tree", "正在编辑的文件状态"], ["Staging Area", "下一次提交要包含的精确改动"], ["Commit", "带作者、时间、说明和唯一编号的快照"]],
      sections: [
        ["先配置身份", `<p>提交作者信息会进入历史。使用 GitHub 验证邮箱或 noreply 邮箱可正确关联账号。配置后用 <code>git config --list</code> 检查。</p>`],
        ["敏感信息不会因删除而消失", `<p><code>.env</code>、AccessKey、私钥、大型数据集和模型权重通常不应提交。若密钥曾进入 commit，删除文件仍可能留在历史中，应立即撤销密钥并更换。</p>`]
      ],
      code: `git config --global user.name "你的用户名"\ngit config --global user.email "你的验证邮箱"\n\ngit init\ngit status\ngit add README.md\ngit diff --staged\ngit commit -m "Add project overview"\ngit log --oneline`,
      pitfalls: ["把 GitHub 当作 Git 本身", "不看 status 就一次暂存全部文件", "把 .env、数据和模型权重提交到公开仓库"],
      task: "在空练习目录创建 README.md，做两次内容不同、说明清楚的提交，再用 log 查看。",
      acceptance: ["有且只有练习文件被提交", "两条提交信息说明具体变化", "能指出 .git 目录的作用但不手动修改它"]
    }),
    quiz: { question: "git commit 的主要作用是什么？", options: ["把代码上传互联网", "创建本地版本快照", "安装 GitHub", "删除未跟踪文件"], answer: 1, success: "正确，commit 首先写入本地仓库。", failure: "上传由 push 完成；commit 是本地版本记录。" }
  },
  {
    id: "git-workflow", number: "12", module: "git", title: "Git 日常循环：status、diff、add、commit", kicker: "第二单元 · 版本控制", duration: "40 分钟",
    summary: "看清文件状态和差异，只提交本次相关改动，并写出以后看得懂的历史。",
    goals: ["判断 4 种文件状态", "区分两种 diff", "组织小而清楚的提交"], resources: ["git-book", "missing-semester"],
    body: lessonBody({
      lead: "安全工作流是先观察再修改状态：status 看清范围，diff 审查内容，明确 add，最后 commit。",
      concepts: [["Untracked", "新文件尚未纳入版本控制"], ["Modified", "已跟踪文件发生变化"], ["Staged", "某一版改动进入提交清单"], ["Committed", "快照已写入仓库历史"]],
      sections: [["两个 diff 看不同层", `<p><code>git diff</code> 比较工作区与暂存区；<code>git diff --staged</code> 比较暂存区与上次提交。add 后继续修改同一文件时，它可能同时有已暂存和未暂存两部分。</p>`]],
      code: `git status\ngit diff\ngit add app.py README.md\ngit diff --staged\ngit commit -m "Add evaluation command"\ngit status\ngit show HEAD`,
      pitfalls: ["习惯性 git add . 把缓存和密钥带入", "提交信息只写 update", "一个提交混合功能、格式化和无关重构"],
      task: "在同一文件先暂存一次，再继续修改。分别运行两种 diff，口头说明两个版本各在哪里。",
      acceptance: ["能展示 staged 与 unstaged 同时存在", "提交前检查过 staged diff", "最终工作区状态符合预期"]
    }),
    quiz: { question: "提交前查看已经暂存的具体改动，应使用？", options: ["git diff", "git diff --staged", "git push", "git init"], answer: 1, success: "正确，--staged 查看将进入提交的改动。", failure: "git diff 默认看尚未暂存的工作区改动。" }
  },
  {
    id: "git-undo", number: "13", module: "git", title: "Git 修正与撤销：先保护未提交内容", kicker: "第二单元 · 安全操作", duration: "45 分钟",
    summary: "按改动所处层级选择 restore、amend、revert 或 stash，并避开破坏性命令。",
    goals: ["取消暂存不丢内容", "安全撤销共享提交", "识别高风险命令"], resources: ["git-book"],
    body: lessonBody({
      lead: "先用 status 和 diff 判断错误位于工作区、暂存区、本地提交还是共享历史，再选择最小动作。",
      concepts: [["restore --staged", "取消暂存，保留工作区内容"], ["commit --amend", "修正尚未共享的最近提交"], ["revert", "用新提交抵消旧提交，适合共享历史"], ["stash", "临时收起已跟踪改动"]],
      sections: [
        ["风险从哪里来", `<p>Git 最难恢复的是从未提交的工作区内容。<code>git restore 文件</code> 会覆盖它；<code>reset --hard</code>、<code>clean -fd</code>、<code>push --force</code> 风险更高，初学阶段不要把它们当常规解决方案。</p>`],
        ["共享历史不要随意改写", `<p>已经推送并被他人使用的提交，通常用 <code>git revert 编号</code> 创建反向提交。这样审计清楚，也不会让其他人的分支突然失去共同历史。</p>`]
      ],
      code: `git status\ngit diff\n\n# 取消暂存，但保留文件内容\ngit restore --staged notes.md\n\n# 安全抵消已共享提交\ngit log --oneline\ngit show <commit-id>\ngit revert <commit-id>`,
      pitfalls: ["复制不理解的 reset --hard 命令", "密钥泄露后只做 revert 而不更换密钥", "在未提交重要工作时尝试清理命令"],
      task: "在练习仓库同时暂存两个文件，只取消其中一个的暂存，确认两个文件内容都还在。",
      acceptance: ["操作前后都运行 status", "能解释为何内容未丢失", "能说明 revert 与删除历史的区别"]
    }),
    quiz: { question: "错误提交已推送到多人使用的 main，通常优先选择？", options: ["git reset --hard", "删除 .git", "git revert", "git push --force"], answer: 2, success: "正确，revert 保留共享历史并创建抵消提交。", failure: "公开历史应优先选择不改写既有提交的方式。" }
  },
  {
    id: "git-branches", number: "14", module: "git", title: "分支、合并与冲突", kicker: "第二单元 · 协作基础", duration: "50 分钟",
    summary: "用短生命周期分支隔离任务，完成合并，并在冲突时理解双方改动再决定。",
    goals: ["创建和切换分支", "理解 merge 方向", "手动解决简单冲突"], resources: ["git-book", "github-flow"],
    body: lessonBody({
      lead: "分支是指向提交的轻量指针。一个分支只处理一类改动，审查、撤销与合并都会更容易。",
      sections: [
        ["合并方向", `<p>想把 feature 的变化放进 main，要先切到接收者 main，再运行 <code>git merge feature</code>。合并前先保证工作区清楚，并拉取远端最新变化。</p>`],
        ["冲突不是文件损坏", `<p>冲突表示两个分支修改了同一区域，Git 不知道保留哪边。打开冲突文件，理解 <code>HEAD</code> 与另一分支的内容，编辑成真正需要的最终版本，删除标记，测试后 add 和 commit。</p>`]
      ],
      code: `git switch -c feature/add-metrics\n# 修改、测试、add、commit\ngit switch main\ngit merge feature/add-metrics\n\n# 若冲突：编辑文件并测试\ngit status\ngit add <resolved-file>\ngit commit`,
      pitfalls: ["没看当前分支就修改和提交", "把冲突标记一起提交", "一个分支长期堆积很多无关任务"],
      task: "建立 feature 分支并修改 notes.md；回到 main 修改同一行，尝试合并，手动整理成同时保留两项信息的最终文本。",
      acceptance: ["冲突标记全部移除", "合并后的内容符合意图", "git log --graph 能看到分支历史"]
    }),
    quiz: { question: "要把 feature 合入 main，通常正确的顺序是？", options: ["切到 main，再 merge feature", "切到 feature，再删 main", "任意位置 push", "先 reset --hard"], answer: 0, success: "正确，先进入接收改动的 main。", failure: "merge 把指定分支合入当前分支。" }
  },
  {
    id: "git-remotes", number: "15", module: "git", title: "GitHub Flow、Pull Request 与 Pages", kicker: "第二单元 · 公开协作", duration: "55 分钟",
    summary: "连接远程仓库，区分 fetch/pull/push，走完分支—PR—审查—合并—发布流程。",
    goals: ["理解 origin 与跟踪分支", "提交 Pull Request", "用 Pages 发布静态网站"], resources: ["github-flow", "github-pages", "git-book"],
    body: lessonBody({
      lead: "远程仓库是协作副本；push 发送本地提交，fetch 获取远端信息，pull 通常获取并整合。",
      concepts: [["origin", "默认远程仓库常用别名"], ["fetch", "下载远程提交和分支信息，不直接改工作区"], ["pull", "获取并整合到当前分支"], ["push", "把本地提交发送到远端"]],
      sections: [
        ["Pull Request 是讨论入口", `<p>PR 不只是“请求合并”，还记录动机、范围、验证方式、评审意见和最终决策。标题说明完整变化，正文写清为什么改、如何验证和已知限制。</p>`],
        ["静态网站与服务器", `<p>HTML/CSS/JS 静态站可直接由 GitHub Pages 托管，不需要自己维护服务器。需要数据库、登录或后端 API 时，才需要额外的服务或云服务器。</p>`]
      ],
      code: `git remote add origin https://github.com/用户名/仓库.git\ngit remote -v\ngit push -u origin main\n\n# 日常功能分支\ngit switch -c feature/new-lesson\ngit push -u origin feature/new-lesson`,
      pitfalls: ["在认证页面输入别人发送的设备代码", "把 pull 理解为简单下载而忽略可能合并", "未经检查直接向 main 推送大量混合改动"],
      task: "为练习仓库创建功能分支、推送并发起一个 PR；正文至少写变化、原因和验证。若是静态站，再开启 Pages。",
      acceptance: ["远端 URL 与账号正确", "PR 只包含目标改动", "Pages 地址能从无登录浏览器打开"]
    }),
    quiz: { question: "哪个命令只获取远端变化信息，通常不直接修改当前工作区？", options: ["git fetch", "git pull", "git commit", "git add"], answer: 0, success: "正确，fetch 适合先观察远端状态。", failure: "pull 通常还会把获取的变化整合进当前分支。" }
  },
  {
    id: "numpy", number: "16", module: "data-math", title: "NumPy：数组、shape、axis 与向量化", kicker: "第三单元 · 数据工具", duration: "60 分钟",
    summary: "从 Python 列表过渡到 ndarray，掌握形状、索引、轴、广播与向量化。",
    goals: ["创建和检查 ndarray", "沿正确轴计算", "读懂广播与形状错误"], resources: ["numpy-beginner", "d2l"],
    body: lessonBody({
      lead: "深度学习代码最常见的问题不是公式，而是 shape。每一步都写出张量维度，很多错误会提前暴露。",
      concepts: [["shape", "每个维度的长度"], ["dtype", "元素的数据类型"], ["axis", "沿哪个维度聚合"], ["broadcast", "兼容形状之间的自动扩展规则"]],
      sections: [
        ["把样本排成矩阵", `<p>常见监督学习特征 <code>X</code> 形状是 <code>(样本数, 特征数)</code>，标签 <code>y</code> 是 <code>(样本数,)</code>。矩阵乘法要求内部维度匹配，逐元素乘法则要求形状相同或可广播。</p>`],
        ["向量化不是炫技", `<p>数组运算把循环交给底层高效实现，代码更接近数学表达。但先保证含义和维度正确，再考虑速度。</p>`]
      ],
      code: `import numpy as np\n\nX = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])\nw = np.array([0.2, -0.1])\nb = 0.5\n\npred = X @ w + b\nprint(X.shape, w.shape, pred.shape)\nprint(X.mean(axis=0))  # 每个特征的均值`,
      pitfalls: ["把 * 当矩阵乘法，或把 @ 当逐元素乘法", "axis 选反导致统计含义改变", "看到 shape mismatch 就盲目 reshape"],
      task: "构造 4×3 的成绩矩阵，计算每名学生平均分、每门课平均分，并用布尔索引找出总平均≥80 的学生。",
      acceptance: ["每次计算前写出预期 shape", "两个平均结果长度正确", "没有使用不必要的 Python 循环"]
    }),
    quiz: { question: "X.shape 为 (100, 20)，通常表示？", options: ["20 个样本、100 个特征", "100 个样本、20 个特征", "100 个标签", "20 个模型"], answer: 1, success: "正确，常见约定是行对应样本、列对应特征。", failure: "监督学习特征矩阵通常是 (样本数, 特征数)。" }
  },
  {
    id: "pandas", number: "17", module: "data-math", title: "pandas：读取、检查与清洗表格", kicker: "第三单元 · 数据工具", duration: "65 分钟",
    summary: "用 DataFrame 完成读写、选择、缺失值、重复值、类型检查与分组统计。",
    goals: ["读写 CSV", "系统检查数据质量", "避免链式赋值"], resources: ["pandas-start", "numpy-beginner"],
    body: lessonBody({
      lead: "加载数据后的第一步不是训练，而是检查形状、列名、类型、缺失、重复、范围和标签分布。",
      concepts: [["DataFrame", "二维带行列标签的表"], ["Series", "一列带索引的数据"], ["missing", "缺失不等于数值 0"], ["groupby", "按组拆分、计算再合并"]],
      sections: [["建立数据体检清单", `<p>依次查看 <code>shape</code>、<code>head()</code>、<code>info()</code>、<code>describe()</code>、<code>isna().sum()</code>、<code>duplicated().sum()</code> 和标签 <code>value_counts()</code>。任何删除或填补都要记录规则与数量。</p>`]],
      code: `import pandas as pd\n\ndf = pd.read_csv("samples.csv")\nprint(df.shape)\nprint(df.dtypes)\nprint(df.isna().sum())\nprint(df.duplicated().sum())\nprint(df["label"].value_counts(dropna=False))\n\nclean = df.drop_duplicates().copy()\nclean["text"] = clean["text"].fillna("").str.strip()`,
      pitfalls: ["把测试集和训练集合并后一起清洗拟合", "用 0 填补缺失却不考虑含义", "清洗后不记录删除了多少样本"],
      task: "选择一个小 CSV，生成数据体检报告：行列数、类型、缺失、重复、数值范围和标签分布，并保存 cleaned.csv。",
      acceptance: ["原始文件保持不变", "每个清洗决定有理由和数量", "保存后重新读取，行列与类型符合预期"]
    }),
    quiz: { question: "发现年龄列缺失值，最正确的第一步是？", options: ["全部填 0", "先理解缺失比例、原因和业务含义", "删除整张表", "直接开始训练"], answer: 1, success: "正确，处理策略必须基于含义和缺失机制。", failure: "0 可能代表真实年龄或产生严重偏差，不能默认填补。" }
  },
  {
    id: "visualization", number: "18", module: "data-math", title: "可视化与探索性数据分析", kicker: "第三单元 · 数据工具", duration: "55 分钟",
    summary: "选择合适图形检查分布、类别、关系和异常，并制作可用于报告的实验图。",
    goals: ["按问题选择图表", "识别异常和偏斜", "制作信息完整的图"], resources: ["matplotlib", "pandas-start"],
    body: lessonBody({
      lead: "图表不是装饰，而是对一个明确问题的回答；标题、坐标、单位、图例和数据范围都是结论的一部分。",
      concepts: [["直方图", "连续变量分布"], ["柱状图", "类别数量或汇总"], ["散点图", "两个数值变量的关系"], ["折线图", "有顺序的变化，如 epoch 曲线"]],
      sections: [["训练前和训练后都要画", `<p>训练前看标签不平衡、异常值与数据漂移；训练中看 loss 与指标曲线；训练后看混淆矩阵和错误样本。不要通过截断坐标轴夸大差异。</p>`]],
      code: `import matplotlib.pyplot as plt\n\nepochs = [1, 2, 3, 4]\ntrain_loss = [0.90, 0.62, 0.43, 0.31]\nval_loss = [0.95, 0.70, 0.58, 0.61]\nplt.plot(epochs, train_loss, marker="o", label="train")\nplt.plot(epochs, val_loss, marker="o", label="validation")\nplt.xlabel("Epoch")\nplt.ylabel("Cross-entropy loss")\nplt.title("Training and validation loss")\nplt.legend()\nplt.tight_layout()\nplt.savefig("loss_curve.png", dpi=160)`,
      pitfalls: ["图没有单位或图例", "类别变量硬画折线暗示连续关系", "只保存截图，不保存生成图的代码与原始指标"],
      task: "为一个表格数据集制作三张图：标签分布、一个数值分布、两个变量关系；每张图写一句观察与一句不能确定的事情。",
      acceptance: ["图形类型匹配问题", "坐标和图例完整", "观察与因果结论严格区分"]
    }),
    quiz: { question: "展示训练 loss 随 epoch 的变化，通常最适合？", options: ["饼图", "折线图", "词云", "地图"], answer: 1, success: "正确，epoch 有顺序，折线图便于观察趋势。", failure: "这里关注有序过程中的变化。" }
  },
  {
    id: "linear-algebra", number: "19", module: "data-math", title: "线性代数：向量、矩阵与维度", kicker: "第三单元 · 必要数学", duration: "70 分钟",
    summary: "用模型中的真实计算理解向量、点积、矩阵乘法、转置和线性变换。",
    goals: ["解释点积", "手算矩阵形状", "连接公式与 NumPy"], resources: ["cs229-math", "d2l", "3b1b-nn"],
    body: lessonBody({
      lead: "线性层做的核心事情是加权求和：输入特征与权重做点积，再加偏置。维度就是这段计算的接口。",
      concepts: [["标量", "单个数"], ["向量", "一维数值序列"], ["矩阵", "按行列组织的二维数组"], ["点积", "对应元素相乘再求和"]],
      sections: [
        ["先推形状再算数字", `<p>若一批输入 <code>X</code> 是 <code>(B, D)</code>、权重 <code>W</code> 是 <code>(D, H)</code>，则 <code>XW</code> 是 <code>(B, H)</code>。内部的 D 必须一致，B 个样本各自得到 H 个输出。</p>`],
        ["几何直觉", `<p>点积既是加权求和，也与两个向量方向的相似程度有关。矩阵可以看作把向量旋转、拉伸、压缩或投影到新空间的线性变换。</p>`]
      ],
      code: `import numpy as np\n\nX = np.array([[1.0, 2.0, 3.0], [0.5, 1.0, -1.0]])  # (2, 3)\nW = np.array([[0.1, 0.2], [0.3, -0.1], [0.4, 0.5]]) # (3, 2)\nb = np.array([0.0, 0.1])                            # (2,)\nY = X @ W + b                                        # (2, 2)\nprint(Y, Y.shape)`,
      pitfalls: ["只背乘法规则，不写每个轴的含义", "随意转置让代码不报错却改变语义", "混淆样本维、特征维和类别维"],
      task: "为 B=4、输入特征 D=3、隐藏单元 H=5 的线性层写出 X、W、b 和输出的形状，并用随机数组验证。",
      acceptance: ["内部维度匹配", "偏置广播到每个样本", "能用一句话解释每个轴"]
    }),
    quiz: { question: "X 为 (32, 128)，W 为 (128, 10)，X@W 的形状是？", options: ["(128,128)", "(32,10)", "(10,32)", "无法计算"], answer: 1, success: "正确，内部 128 消去，保留 32 和 10。", failure: "矩阵乘法 (a,b)@(b,c) 得到 (a,c)。" }
  },
  {
    id: "calculus", number: "20", module: "data-math", title: "导数、梯度与链式法则", kicker: "第三单元 · 必要数学", duration: "75 分钟",
    summary: "用斜率和计算图理解模型如何知道参数该往哪个方向调整。",
    goals: ["解释导数与梯度", "应用简单链式法则", "理解学习率作用"], resources: ["3b1b-nn", "d2l", "zero-to-hero"],
    body: lessonBody({
      lead: "梯度告诉我们损失对每个参数最敏感的上升方向；梯度下降沿反方向迈一小步。",
      concepts: [["导数", "一个输入微小变化引起输出变化的速率"], ["偏导数", "只改变一个变量时的变化率"], ["梯度", "所有偏导数组成的向量"], ["链式法则", "复合计算沿路径相乘传播影响"]],
      sections: [
        ["从一元函数到网络", `<p>对 <code>L=(w-3)²</code>，导数是 <code>2(w-3)</code>。当 w 小于 3，梯度为负，减去负数会让 w 增大；当 w 大于 3，更新会让它减小。</p>`],
        ["学习率控制步长", `<p><code>w ← w - lr × gradient</code>。学习率太大可能震荡或发散，太小则收敛很慢。梯度为 0 也不一定是全局最优，可能是局部极值或平坦区域。</p>`]
      ],
      code: `w = 0.0\nlr = 0.1\nfor step in range(10):\n    loss = (w - 3) ** 2\n    grad = 2 * (w - 3)\n    w = w - lr * grad\n    print(step, round(w, 4), round(loss, 4))`,
      pitfalls: ["把梯度当成参数更新量而忘记负号和学习率", "只会符号推导，不检查数值变化", "认为 loss 每一步都必须严格下降"],
      task: "分别用 lr=0.01、0.1、1.1 运行示例，画 loss 曲线并解释三种行为。",
      acceptance: ["实验只改变学习率", "曲线和解释一致", "能说明链式法则在多层网络中的作用"]
    }),
    quiz: { question: "梯度下降为什么通常减去梯度？", options: ["梯度指向最快上升方向", "梯度等于损失", "为了让参数变负", "减法运行更快"], answer: 0, success: "正确，反梯度方向通常使损失局部下降。", failure: "梯度指向局部最快上升，下降要走反方向。" }
  },
  {
    id: "probability", number: "21", module: "data-math", title: "概率与统计：从样本到不确定性", kicker: "第三单元 · 必要数学", duration: "75 分钟",
    summary: "理解均值、方差、分布、条件概率、抽样误差与置信区间，不被单次结果迷惑。",
    goals: ["计算均值和方差", "区分概率与频率", "报告多次实验波动"], resources: ["cs229-math", "mlcc", "d2l"],
    body: lessonBody({
      lead: "单个平均数会隐藏波动；科研结果至少要说明样本数、随机性来源和不确定程度。",
      concepts: [["均值", "数据中心位置的一种描述"], ["方差/标准差", "数据围绕均值的波动"], ["条件概率", "已知某事件后另一个事件的概率"], ["抽样", "用有限观测推断更大总体"]],
      sections: [
        ["指标也是随机变量", `<p>随机初始化、数据顺序和抽样都会让训练结果变化。报告三个或更多种子的均值与标准差，比挑最好的一次更诚实。</p>`],
        ["相关不等于因果", `<p>两个变量同时变化可能来自共同原因、选择偏差或偶然。观察数据可以提出假设，但不能自动证明干预效果。</p>`]
      ],
      code: `import numpy as np\n\nscores = np.array([0.812, 0.835, 0.821, 0.829, 0.806])\nprint("mean:", scores.mean())\nprint("sample std:", scores.std(ddof=1))\nprint("min/max:", scores.min(), scores.max())`,
      pitfalls: ["只报告最好一次", "样本很少却给出过度精确的小数", "把相关图直接解释为因果关系"],
      task: "模拟或收集 5 次实验分数，报告均值、样本标准差、最小最大值，并写出一个可能的随机来源。",
      acceptance: ["使用 ddof=1 计算样本标准差", "保留合理小数位", "没有把不确定性隐藏在单一分数后"]
    }),
    quiz: { question: "同一模型 5 个种子的 F1 不同，最合适的报告方式通常是？", options: ["只报最高值", "报均值和波动并说明种子数", "只报最后一次", "删掉较低结果"], answer: 1, success: "正确，多次实验应展示中心趋势和波动。", failure: "挑最好一次会系统性高估方法表现。" }
  },
  {
    id: "setup-windows", number: "02", module: "foundation", title: "Windows 学习环境：终端、Python 与编辑器", kicker: "第一单元 · 环境准备", duration: "35 分钟",
    summary: "认识终端、路径、解释器和编辑器，搭好最小且可检查的 Python 环境。",
    goals: ["在终端确认 Python", "读懂绝对与相对路径", "运行一个 .py 文件"], resources: ["python-docs", "missing-semester", "jupyter"],
    body: lessonBody({
      lead: "环境配置的目标不是装最多软件，而是能回答：我在哪个目录、正在调用哪个 Python、代码文件在哪里。",
      concepts: [["终端", "输入命令并查看程序输出的窗口"], ["解释器", "真正执行 Python 代码的程序"], ["编辑器", "编写与管理代码文件，例如 VS Code"], ["路径", "文件在磁盘上的位置，例如 E:\\ai-study"]],
      sections: [
        ["先做三项检查", `<ol><li>在开始菜单打开 PowerShell。</li><li>运行 <code>python --version</code>；若不可用再试 <code>py --version</code>。</li><li>运行 <code>Get-Location</code> 确认当前目录，使用 <code>Get-ChildItem</code> 查看文件。</li></ol><p>安装 Python 时要从 python.org 获取，并留意安装器中的 PATH 选项。框架安装命令会变化，尤其是 PyTorch 与 CUDA，必须到官网根据设备生成命令。</p>`],
        ["脚本与 Notebook 的分工", `<p><strong>Notebook</strong> 适合探索数据、逐段运行和展示图表；<strong>.py 脚本</strong> 适合可靠重复、命令行运行和组织工程。学习初期两者都用，但最终训练流程应能通过一条命令执行。</p>`]
      ],
      code: `# hello.py\nname = "科研新手"\nprint(f"你好，{name}！")\n\n# PowerShell 中进入文件所在目录后运行：\npython hello.py`,
      codeTitle: "创建并运行第一份脚本",
      pitfalls: ["文件实际叫 hello.py.txt，因为 Windows 隐藏了扩展名", "在错误目录运行命令，提示找不到文件", "电脑有多个 Python，却不知道当前命令调用哪一个"],
      task: "在 E 盘建立 ai-study 文件夹，创建 hello.py，并从该文件夹的 PowerShell 中运行。再故意输错文件名，观察报错最后一行。",
      acceptance: ["能说出脚本的绝对路径", "python --version 或 py --version 有明确输出", "能解释一次‘找不到文件’报错的原因"]
    }),
    quiz: { question: "终端提示找不到 hello.py，第一步最应该检查什么？", options: ["立刻重装 Windows", "当前目录和文件名", "更换显卡", "删除所有 Python"], answer: 1, success: "正确。路径和文件名是最常见原因。", failure: "先用 Get-Location 和 Get-ChildItem 看清当前位置与文件。" }
  },
  {
    id: "python-variables", number: "03", module: "foundation", title: "变量、类型与表达式", kicker: "第一单元 · Python 基础", duration: "30 分钟",
    summary: "掌握数字、字符串、布尔值、赋值与 f-string，并学会检查类型。",
    goals: ["创建与更新变量", "认识常见类型", "使用 f-string 输出"], resources: ["python-docs", "python-mooc", "kaggle-python"],
    body: lessonBody({
      lead: "变量是对象的名字，类型决定这个值支持什么操作；遇到奇怪结果先检查值和类型。",
      concepts: [["int", "整数，如 18"], ["float", "浮点数，如 0.01"], ["str", "文字序列，需要引号"], ["bool", "True 或 False"]],
      sections: [
        ["赋值与比较不同", `<p><code>=</code> 把右侧结果绑定给左侧名字；<code>==</code> 比较两个值是否相等。变量名应表达含义，例如 <code>learning_rate</code> 比 <code>x1</code> 更易复现实验。</p>`],
        ["浮点数不是精确小数", `<p>计算机通常以二进制近似保存浮点数，因此 <code>0.1 + 0.2</code> 可能显示为接近 0.3 的长小数。训练中通常关心合理误差范围，而不是用 <code>==</code> 比较浮点结果。</p>`]
      ],
      code: `experiment = "baseline"\nepochs = 10\nlearning_rate = 0.001\nis_training = True\n\nepochs = epochs + 5\nprint(f"实验={experiment}, 轮数={epochs}, 学习率={learning_rate}")\nprint(type(learning_rate))`,
      pitfalls: ["字符串忘记加引号", "把 = 当成数学等号", "变量名覆盖内置函数，例如 list = [...]"],
      task: "创建实验名、数据量、学习率、是否使用 GPU 四个变量，用一条 f-string 输出，并用 type() 检查每个变量。",
      acceptance: ["四个变量类型合理", "变量名能看出含义", "输出包含变量值而不是变量名文字"]
    }),
    quiz: { question: "哪行代码是在比较 score 是否等于 90？", options: ["score = 90", "score == 90", "score := 90", "90 = score"], answer: 1, success: "正确，== 用于相等比较。", failure: "单等号用于赋值，双等号用于比较。" }
  },
  {
    id: "python-input", number: "04", module: "foundation", title: "输入、输出与类型转换", kicker: "第一单元 · Python 基础", duration: "25 分钟",
    summary: "接收用户输入，安全转换数字，用格式化输出制作学习时间计算器。",
    goals: ["使用 input", "转换 int/float", "写出友好输出"], resources: ["python-docs", "python-mooc"],
    body: lessonBody({
      lead: "input() 得到的永远是字符串；需要计算时要明确转换，并考虑用户输错的情况。",
      sections: [["数据从边界进入程序", `<p>用户输入、CSV 文件和网络响应都是程序边界。不要默认它们一定正确。先读取，再验证，再转换，最后计算。科研脚本也应在数据入口检查列名、形状和缺失值。</p>`]],
      code: `name = input("你的名字：").strip()\ndays = int(input("每周学习几天："))\nhours = float(input("每天学习几小时："))\ntotal = days * hours\nprint(f"{name} 每周计划学习 {total:.1f} 小时")`,
      pitfalls: ["直接把 input() 结果与数字相加", "用户输入空格导致后续匹配失败", "没有说明输入单位，例如分钟还是小时"],
      task: "完成学习计划计算器：额外询问坚持周数，输出总小时；再测试 0、2.5 和错误文字三种输入。",
      acceptance: ["正常数字能正确计算", "输出明确写出单位", "能描述错误文字会触发哪类异常"]
    }),
    quiz: { question: "用户输入 3，input() 默认返回什么？", options: ["整数 3", "浮点数 3.0", "字符串 '3'", "布尔值 True"], answer: 2, success: "正确，input() 默认返回字符串。", failure: "需要 int() 或 float() 才能把数字文字转为数值。" }
  },
  {
    id: "conditions", number: "05", module: "foundation", title: "条件判断与布尔逻辑", kicker: "第一单元 · Python 基础", duration: "30 分钟",
    summary: "使用 if/elif/else、比较与逻辑运算，让程序根据情况采取不同路径。",
    goals: ["写多分支判断", "正确使用缩进", "组合 and/or/not"], resources: ["python-docs", "python-mooc", "kaggle-python"],
    body: lessonBody({
      lead: "条件判断把规则翻译成可执行分支；顺序很重要，范围要完整且互不意外重叠。",
      concepts: [["and", "所有条件都为真"], ["or", "至少一个条件为真"], ["not", "反转真假"], ["in", "检查成员是否存在"]],
      sections: [["从最具体的条件开始", `<p><code>if/elif</code> 从上往下检查，命中一个分支后不会再检查后续分支。处理分数区间时，先写最高区间通常更清楚。</p>`]],
      code: `score = 86\nhas_report = True\n\nif score >= 90 and has_report:\n    level = "优秀且完整"\nelif score >= 60:\n    level = "达到基础要求"\nelse:\n    level = "需要复查实验"\n\nprint(level)`,
      pitfalls: ["条件末尾忘记冒号", "Tab 与空格混用造成缩进错误", "把多个范围写出空洞或重叠"],
      task: "写一个实验质量检查器：只有验证集 F1≥0.8、报告已完成且没有数据泄漏时输出‘可以汇报’，否则说明最先发现的问题。",
      acceptance: ["至少有三个分支", "所有输入组合都有结果", "能解释为什么条件顺序会影响输出"]
    }),
    quiz: { question: "A 和 B 必须同时满足，应使用哪个运算符？", options: ["or", "and", "not", "in"], answer: 1, success: "正确，and 要求两侧都为真。", failure: "or 只要求至少一个为真；同时满足要用 and。" }
  },
  {
    id: "loops", number: "06", module: "foundation", title: "循环：批量处理样本", kicker: "第一单元 · Python 基础", duration: "35 分钟",
    summary: "用 for、range、while、enumerate 重复工作，并理解训练 epoch 的循环直觉。",
    goals: ["遍历序列", "使用 enumerate", "避免无限循环"], resources: ["python-docs", "python-mooc", "kaggle-python"],
    body: lessonBody({
      lead: "循环用于对一组对象重复相同逻辑；深度学习训练本质上也是对 epoch 和 batch 的嵌套循环。",
      concepts: [["for", "遍历一个可迭代对象"], ["range", "生成整数序列"], ["enumerate", "同时得到编号和元素"], ["while", "条件为真时持续执行"]],
      sections: [["累积与状态", `<p>循环常见模式是初始化一个累计量，每次迭代更新它。要明确变量在循环前、循环中和循环后的含义。<code>break</code> 提前结束，<code>continue</code> 跳过本轮。</p>`]],
      code: `losses = [0.92, 0.71, 0.54, 0.48]\ntotal = 0.0\n\nfor epoch, loss in enumerate(losses, start=1):\n    total += loss\n    print(f"epoch={epoch}, loss={loss:.2f}")\n\nprint(f"平均 loss={total / len(losses):.3f}")`,
      pitfalls: ["修改正在遍历的列表", "range 右端不包含在结果中", "while 条件永远不变导致无限循环"],
      task: "遍历一组验证损失，打印最低损失出现的轮次；连续两轮没有改善时提前停止。",
      acceptance: ["轮次从 1 开始显示", "正确找出最小值而不是最后一个值", "提前停止条件可以用语言解释"]
    }),
    quiz: { question: "range(1, 4) 会产生哪些整数？", options: ["1,2,3", "1,2,3,4", "0,1,2,3", "只有 4"], answer: 0, success: "正确，range 的结束位置不包含。", failure: "Python 切片和 range 通常都是左闭右开。" }
  },
  {
    id: "collections", number: "07", module: "foundation", title: "列表、元组、字典与集合", kicker: "第一单元 · Python 基础", duration: "40 分钟",
    summary: "选择合适的数据结构保存样本、配置和唯一标签，并学会切片与推导式。",
    goals: ["操作 list/dict", "理解索引和切片", "根据用途选结构"], resources: ["python-docs", "python-mooc", "kaggle-python"],
    body: lessonBody({
      lead: "数据结构不是四套语法，而是四种意图：有序可变、固定记录、键值映射、唯一成员。",
      concepts: [["list", "有序、可修改，适合样本序列"], ["tuple", "有序、通常不修改，适合形状和固定记录"], ["dict", "键到值的映射，适合实验配置"], ["set", "不重复成员，适合去重与集合运算"]],
      sections: [["索引、切片与安全访问", `<p>索引从 0 开始，<code>items[:3]</code> 取前三项但不含位置 3。字典访问不确定键时优先用 <code>config.get("seed", 42)</code> 提供默认值，避免无说明的 KeyError。</p>`]],
      code: `scores = [0.81, 0.84, 0.83]\nconfig = {"model": "logistic", "lr": 0.01, "seed": 42}\nlabels = {"cat", "dog", "cat"}\n\nbest = max(scores)\nrun_name = f"{config['model']}-seed{config['seed']}"\nprint(best, run_name, labels)\nprint([score for score in scores if score >= 0.83])`,
      pitfalls: ["用不存在的列表索引", "把字典键和值混淆", "以为 set 会保留重复项和固定顺序"],
      task: "用字典描述一次实验配置，用列表保存三次随机种子的 F1，用集合统计出现过的标签，并计算平均 F1。",
      acceptance: ["每种结构用途合理", "能访问与更新某个配置", "结果包含平均值和唯一标签数"]
    }),
    quiz: { question: "保存 learning_rate、batch_size、seed 这组带名字的配置，最合适的是？", options: ["字符串", "字典", "集合", "布尔值"], answer: 1, success: "正确，字典适合键值配置。", failure: "需要通过名字访问每项设置，因此使用字典。" }
  },
  {
    id: "functions", number: "08", module: "foundation", title: "函数：把步骤封装成能力", kicker: "第一单元 · Python 基础", duration: "40 分钟",
    summary: "定义参数、返回值与作用域，把重复代码整理成可测试的函数。",
    goals: ["定义和调用函数", "区分 print 与 return", "写清输入输出"], resources: ["python-docs", "python-mooc"],
    body: lessonBody({
      lead: "好函数只做一件清楚的事，输入和输出明确；return 交回结果，print 只是显示。",
      concepts: [["参数", "调用者传入的数据"], ["返回值", "函数计算后交出的结果"], ["作用域", "变量在哪些位置可见"], ["文档字符串", "说明功能、参数和返回值"]],
      sections: [["先写契约再写实现", `<p>在函数前先写一句：输入是什么、输出是什么、异常情况是什么。训练项目中可分别写 <code>load_data</code>、<code>train_one_epoch</code>、<code>evaluate</code>，而不是把所有代码塞进一个文件顶层。</p>`]],
      code: `def mean(values):\n    """返回非空数值序列的算术平均值。"""\n    if not values:\n        raise ValueError("values 不能为空")\n    return sum(values) / len(values)\n\nval_scores = [0.81, 0.84, 0.83]\nresult = mean(val_scores)\nprint(f"平均分={result:.3f}")`,
      pitfalls: ["函数只 print 没 return，外部得到 None", "可变默认参数写成 []", "函数同时加载数据、训练、画图和保存，难以测试"],
      task: "实现 precision(tp, fp) 和 recall(tp, fn) 两个函数，并处理分母为 0 的情况。",
      acceptance: ["每个函数有文档字符串", "返回数值而不是只打印", "至少测试正常情况和分母为 0"]
    }),
    quiz: { question: "希望函数计算结果还能被其他代码继续使用，应主要依靠？", options: ["print", "return", "input", "break"], answer: 1, success: "正确，return 把结果交给调用者。", failure: "print 只负责显示；return 才返回可继续使用的值。" }
  },
  {
    id: "files-errors", number: "09", module: "foundation", title: "文件、异常与调试", kicker: "第一单元 · Python 基础", duration: "45 分钟",
    summary: "安全读写文本与 JSON，读懂 traceback，并用小范围异常处理定位问题。",
    goals: ["使用 with 读写文件", "读懂报错最后一行", "正确使用 try/except"], resources: ["python-docs", "python-mooc"],
    body: lessonBody({
      lead: "报错是程序给出的定位报告。先看异常类型和最后一行，再沿 traceback 回到自己的代码。",
      concepts: [["SyntaxError", "代码结构不符合语法"], ["TypeError", "操作与数据类型不匹配"], ["FileNotFoundError", "路径下没有目标文件"], ["ValueError", "类型可接受但值不合法"]],
      sections: [
        ["文件要用上下文管理", `<p><code>with open(...)</code> 会在代码块结束时关闭文件。文本编码明确写 <code>encoding="utf-8"</code>，结构化配置可用 JSON。路径问题要打印当前目录和目标绝对路径。</p>`],
        ["不要吞掉错误", `<p>避免写空的 <code>except:</code>。只捕获你知道如何处理的具体异常，输出足够上下文；未知错误应继续暴露，不能静默假装成功。</p>`]
      ],
      code: `import json\nfrom pathlib import Path\n\npath = Path("config.json")\nconfig = {"model": "mlp", "seed": 42}\npath.write_text(json.dumps(config, ensure_ascii=False, indent=2), encoding="utf-8")\n\ntry:\n    loaded = json.loads(path.read_text(encoding="utf-8"))\n    print(loaded["model"])\nexcept FileNotFoundError:\n    print(f"找不到文件：{path.resolve()}")`,
      pitfalls: ["使用相对路径却不知道当前工作目录", "捕获所有异常后什么也不做", "根据 traceback 第一行猜原因，而不看最后一行"],
      task: "把实验配置保存为 JSON，再读取并打印。故意改错文件名和 JSON 内容，各记录一次异常类型、位置与修复方法。",
      acceptance: ["文件使用 UTF-8", "错误记录包含异常类型", "修复后脚本能重复运行"]
    }),
    quiz: { question: "阅读 Python traceback 时，通常先看哪里最有效？", options: ["窗口颜色", "最后一行的异常类型与信息", "电脑时间", "第一行 Python 版本"], answer: 1, success: "正确，最后一行通常概括错误类型与原因。", failure: "先看异常类型和消息，再向上定位自己代码的行号。" }
  },
  {
    id: "env-notebook", number: "10", module: "foundation", title: "模块、虚拟环境、pip 与 Notebook", kicker: "第一单元 · 工程起步", duration: "50 分钟",
    summary: "为每个项目隔离依赖，理解 import、包版本与 Notebook 的正确使用方式。",
    goals: ["创建和激活 .venv", "安装并记录依赖", "正确重启 Notebook 内核"], resources: ["python-docs", "jupyter", "missing-semester"],
    body: lessonBody({
      lead: "一个项目一个虚拟环境；记录版本和启动命令，才能减少‘我电脑能跑’问题。",
      sections: [
        ["环境是一组可追踪条件", `<p>至少记录操作系统、Python、核心库版本、硬件、代码提交、数据版本和运行命令。虚拟环境隔离 Python 包，但不能自动固定 CUDA、驱动或操作系统。</p>`],
        ["Notebook 的隐藏状态", `<p>Notebook 可以乱序执行单元格，所以最终检查要执行“Restart Kernel and Run All”。训练主体应逐渐移动到 .py 文件，Notebook 保留数据探索和结果展示。</p>`]
      ],
      code: `# PowerShell：在项目根目录执行\npython -m venv .venv\n.\\.venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip\npython -m pip install numpy pandas matplotlib jupyterlab\npython -m pip freeze > requirements.txt\n\n# 检查当前解释器\npython -c "import sys; print(sys.executable)"`,
      pitfalls: ["直接使用 pip，不确认它属于哪个 Python", "把 .venv 上传 GitHub", "Notebook 单元格乱序，重启后无法复现"],
      task: "建立 sandbox 项目与 .venv，安装 NumPy，保存 requirements.txt，新开终端重新激活后成功 import numpy。",
      acceptance: ["解释器路径指向项目 .venv", "requirements.txt 记录版本", ".venv 已加入 .gitignore"]
    }),
    quiz: { question: "为什么推荐每个项目单独使用虚拟环境？", options: ["让代码自动变快", "隔离不同项目的依赖版本", "替代 Git", "自动获得 GPU"], answer: 1, success: "正确，虚拟环境主要解决 Python 依赖隔离。", failure: "它不会提供 GPU，也不替代版本控制；核心作用是隔离依赖。" }
  },
  {
    id: "ml-problem", number: "22", module: "machine-learning", title: "定义机器学习问题与 baseline", kicker: "第四单元 · 建模方法", duration: "60 分钟",
    summary: "把模糊想法写成可验证任务，明确样本、标签、指标、约束并建立简单基线。",
    goals: ["写任务定义", "选择合理 baseline", "识别数据泄漏"], resources: ["mlcc", "sklearn-start", "neurips-checklist"],
    body: lessonBody({
      lead: "先定义问题、数据和成功标准，再选模型；baseline 的价值是告诉你复杂方法是否真的带来增益。",
      concepts: [["样本单位", "一行到底代表用户、文档还是一次事件"], ["目标变量", "模型在预测时真正未知的结果"], ["baseline", "简单、可解释、可稳定复现的参照"], ["约束", "时延、算力、隐私、公平性与错误成本"]],
      sections: [
        ["任务定义模板", `<p>输入：预测时能获得哪些信息？输出：类别、数值还是排序？标签何时产生？指标为何对应真实目标？部署数据与训练数据是否同分布？</p>`],
        ["泄漏会制造虚假高分", `<p>如果某特征只有结果发生后才出现，或预处理在全数据上拟合，模型就偷看了答案。重复用户、同源文档和时间相邻样本也可能跨集合泄漏。</p>`]
      ],
      code: `# 一个可审查的任务配置\ntask = {\n    "sample": "一封收到的邮件",\n    "input": "收件时可见的正文与标题",\n    "target": "spam / normal",\n    "primary_metric": "f1",\n    "baseline": "多数类 + TF-IDF 逻辑回归",\n    "split": "按时间划分，避免未来信息"\n}\nfor key, value in task.items():\n    print(f"{key}: {value}")`,
      pitfalls: ["把当前已有字段全部喂给模型，不检查产生时间", "没有 baseline 就宣称复杂模型有效", "成功标准只写‘准确率越高越好’"],
      task: "为自己的一个 AI 想法填写任务卡：样本、输入、标签、划分、主指标、baseline、错误成本和一个泄漏风险。",
      acceptance: ["输入在预测时确实可获得", "baseline 能在一天内实现", "主指标与实际错误成本相符"]
    }),
    quiz: { question: "预测贷款违约时，把‘逾期后催收次数’作为特征属于什么问题？", options: ["正则化", "数据泄漏", "欠拟合", "随机种子"], answer: 1, success: "正确，这是结果发生后才产生的信息。", failure: "预测时无法获得的未来信息会让离线指标虚高。" }
  },
  {
    id: "linear-regression", number: "23", module: "machine-learning", title: "线性回归、损失与梯度下降", kicker: "第四单元 · 监督学习", duration: "75 分钟",
    summary: "从预测公式、均方误差到参数更新，用 NumPy 手写第一种可训练模型。",
    goals: ["解释线性模型", "计算 MSE", "实现梯度下降"], resources: ["mlcc", "andrew-ml", "d2l"],
    body: lessonBody({
      lead: "线性回归用特征的加权和预测连续值；训练就是寻找让预测误差最小的一组权重。",
      concepts: [["权重 w", "每个特征对预测的线性贡献"], ["偏置 b", "所有特征为 0 时的基准"], ["MSE", "平方误差的平均，较大错误受罚更重"], ["残差", "真实值与预测值之差"]],
      sections: [
        ["公式与代码对齐", `<p><code>ŷ = Xw + b</code>。对 n 个样本，MSE 是残差平方的平均。训练集 loss 用于更新，验证集指标用于选模型，测试集只做最终一次公正评估。</p>`],
        ["先用小数据验证实现", `<p>手写算法时先构造已知规律的合成数据，检查 loss 是否下降、权重是否接近真实值，再换真实数据。</p>`]
      ],
      code: `import numpy as np\n\nX = np.array([[1.0], [2.0], [3.0], [4.0]])\ny = np.array([3.0, 5.0, 7.0, 9.0])  # y = 2x + 1\nw, b, lr = np.zeros(1), 0.0, 0.05\n\nfor step in range(500):\n    pred = X @ w + b\n    error = pred - y\n    loss = np.mean(error ** 2)\n    grad_w = 2 * X.T @ error / len(X)\n    grad_b = 2 * error.mean()\n    w -= lr * grad_w\n    b -= lr * grad_b\n\nprint(w, b, loss)`,
      pitfalls: ["特征尺度差异大却不检查优化行为", "在测试集上反复挑学习率", "只看 loss，不看预测与残差"],
      task: "运行手写线性回归，改变数据噪声和学习率，画出 loss；再与 sklearn LinearRegression 结果比较。",
      acceptance: ["无噪声时参数接近 2 和 1", "能解释学习率过大的现象", "手写与库模型比较使用相同数据"]
    }),
    quiz: { question: "线性回归常用于预测哪类目标？", options: ["连续数值", "文件路径", "随机种子", "Git 分支"], answer: 0, success: "正确，典型目标是房价、温度等连续值。", failure: "二分类通常用逻辑回归；线性回归预测连续数值。" }
  },
  {
    id: "classification", number: "24", module: "machine-learning", title: "逻辑回归与分类概率", kicker: "第四单元 · 监督学习", duration: "70 分钟",
    summary: "把线性得分映射成概率，理解交叉熵、阈值与多分类的基本思路。",
    goals: ["解释 sigmoid 概率", "理解分类阈值", "区分概率与最终类别"], resources: ["mlcc", "andrew-ml", "sklearn-start"],
    body: lessonBody({
      lead: "逻辑回归输出条件概率估计，阈值才把概率变成类别；阈值应由错误成本和验证数据决定。",
      concepts: [["logit", "线性模型产生的未归一化分数"], ["sigmoid", "把任意实数压到 0–1"], ["交叉熵", "对正确类别低概率施加较大惩罚"], ["threshold", "把概率转为类别的决策边界"]],
      sections: [
        ["0.5 不是自然法则", `<p>疾病筛查可能更怕漏诊，垃圾邮件过滤可能更怕误杀。相同概率模型在不同阈值下会有不同 precision 与 recall。</p>`],
        ["概率需要校准", `<p>模型输出 0.9 不一定代表同类样本约 90% 为真。分类排序能力与概率校准是不同问题，重要决策要单独评估。</p>`]
      ],
      code: `from sklearn.datasets import load_breast_cancer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = load_breast_cancer(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42\n)\nmodel = make_pipeline(StandardScaler(), LogisticRegression(max_iter=2000))\nmodel.fit(X_train, y_train)\nprob = model.predict_proba(X_test)[:, 1]\npred = (prob >= 0.4).astype(int)`,
      pitfalls: ["把 predict_proba 当作确定事实", "类别不平衡时只看 accuracy", "标准化在全数据上先 fit"],
      task: "在同一测试概率上比较阈值 0.3、0.5、0.7 的混淆矩阵，并说明哪类错误增加。",
      acceptance: ["模型只在训练集拟合", "三组结果来自同一概率输出", "阈值建议与错误成本相连"]
    }),
    quiz: { question: "降低二分类正类阈值通常会怎样？", options: ["预测为正的样本减少", "预测为正的样本增加", "模型重新训练", "测试集消失"], answer: 1, success: "正确，更低阈值通常接受更多正类。", failure: "达到较低门槛的样本更多，因此正类预测通常增加。" }
  },
  {
    id: "splits-pipeline", number: "25", module: "machine-learning", title: "数据划分、交叉验证与 Pipeline", kicker: "第四单元 · 评估规范", duration: "80 分钟",
    summary: "正确使用训练/验证/测试集，让预处理只从训练数据学习，并用交叉验证稳定比较方案。",
    goals: ["说明三类数据职责", "用 Pipeline 防泄漏", "正确使用交叉验证"], resources: ["sklearn-start", "mlcc", "neurips-checklist"],
    body: lessonBody({
      lead: "测试集不是调参工具。预处理、特征选择和阈值选择都属于训练过程，只能利用训练/验证信息。",
      concepts: [["训练集", "拟合模型参数"], ["验证集", "选择超参数、阈值与停止时机"], ["测试集", "方案冻结后的最终估计"], ["交叉验证", "多次轮换验证折，减少单次划分偶然性"]],
      sections: [
        ["划分必须尊重数据生成过程", `<p>普通独立样本可随机分层划分；时间序列应按时间；同一用户、病人或文档的相关样本应按组划分。否则近重复内容可能跨集合。</p>`],
        ["Pipeline 的方法学价值", `<p>将标准化、特征选择和模型封装在 Pipeline 中，交叉验证每一折都会只在该折训练部分拟合预处理，避免把验证信息泄漏进去。</p>`]
      ],
      code: `from sklearn.model_selection import cross_validate, StratifiedKFold\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipe = make_pipeline(StandardScaler(), LogisticRegression(max_iter=2000))\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nresult = cross_validate(\n    pipe, X_train, y_train, cv=cv,\n    scoring=["accuracy", "precision", "recall", "f1"]\n)\nprint(result["test_f1"].mean(), result["test_f1"].std())`,
      pitfalls: ["先在全数据标准化，再交叉验证", "使用测试集比较几十组超参数", "有关联的样本被随机分到不同集合"],
      task: "为一个分类数据集画出划分流程，比较普通随机划分、分层划分和适合该数据的组/时间划分。",
      acceptance: ["测试集不参与模型选择", "预处理在 Pipeline 内", "选择划分策略的理由来自样本依赖关系"]
    }),
    quiz: { question: "为什么标准化应放进交叉验证 Pipeline？", options: ["让代码更长", "确保每折只从训练部分学习均值方差", "提高显卡频率", "替代模型"], answer: 1, success: "正确，这可以避免验证折信息泄漏。", failure: "在全数据拟合预处理会让验证折信息进入训练。" }
  },
  {
    id: "metrics", number: "26", module: "machine-learning", title: "评价指标：从混淆矩阵到 F1", kicker: "第四单元 · 评估规范", duration: "75 分钟",
    summary: "根据任务代价选择 accuracy、precision、recall、F1、ROC-AUC 或 PR-AUC，并检查每类表现。",
    goals: ["读懂混淆矩阵", "计算 P/R/F1", "按错误成本选指标"], resources: ["mlcc", "sklearn-start"],
    body: lessonBody({
      lead: "指标不是越多越科学。先确定主指标，再用辅助指标和错误案例解释它。",
      concepts: [["Precision", "预测为正的样本中有多少真的为正"], ["Recall", "真实正类中有多少被找出"], ["F1", "precision 与 recall 的调和平均"], ["Support", "每类真实样本数量"]],
      sections: [
        ["不平衡数据的陷阱", `<p>若 99% 样本为正常，永远预测正常也有 99% accuracy，却完全找不到异常。此时要看少数类 recall、precision、PR 曲线和实际错误成本。</p>`],
        ["macro、micro 与 weighted", `<p>macro 对每个类别等权，能暴露小类表现；weighted 按类别数量加权；micro 汇总所有样本决策。报告时要写明平均方式。</p>`]
      ],
      code: `from sklearn.metrics import confusion_matrix, classification_report\n\nprint(confusion_matrix(y_test, pred))\nprint(classification_report(y_test, pred, digits=3))\n\n# 永远同时检查错误样本\nwrong_indices = (pred != y_test).nonzero()[0]\nprint("错误数:", len(wrong_indices))`,
      pitfalls: ["没有写正类定义", "只贴一张 classification_report 不分析", "在同一个测试集上反复选阈值"],
      task: "为医学筛查和垃圾邮件两个场景分别选择主指标，并解释一次假阳性和假阴性的代价。",
      acceptance: ["明确哪个标签是正类", "指标选择与错误成本一致", "至少检查 10 个错误案例而非只看汇总分数"]
    }),
    quiz: { question: "疾病筛查中最担心漏掉患者，通常优先关注？", options: ["Recall", "文件大小", "训练速度", "Git commit 数"], answer: 0, success: "正确，recall 衡量真实患者被找出的比例。", failure: "漏诊对应假阴性，recall 对此最直接。" }
  },
  {
    id: "overfitting", number: "27", module: "machine-learning", title: "过拟合、正则化与误差诊断", kicker: "第四单元 · 泛化能力", duration: "80 分钟",
    summary: "用训练/验证曲线识别欠拟合和过拟合，按证据选择数据、模型或正则化改进。",
    goals: ["诊断拟合状态", "解释正则化", "建立误差分析循环"], resources: ["mlcc", "sklearn-start", "d2l"],
    body: lessonBody({
      lead: "训练误差低、验证误差高通常提示过拟合；训练和验证都差通常提示欠拟合或数据/实现问题。",
      concepts: [["欠拟合", "模型连训练规律都没学好"], ["过拟合", "过度适应训练细节，未见数据变差"], ["正则化", "限制复杂度或参数规模"], ["Early stopping", "验证表现不再改善时停止"]],
      sections: [
        ["按证据改进", `<p>先确认数据与评估无 bug，再看学习曲线和错误类别。更多高质量数据、合适增强、简化模型、L2、dropout 和早停可能有帮助，但没有一种方法保证对所有任务有效。</p>`],
        ["不要用测试集诊断", `<p>误差分析和方案迭代主要基于训练/验证数据。反复查看测试错误并调整，会把测试集也变成训练信息。</p>`]
      ],
      code: `# 伪代码：验证集负责选最佳轮次\nbest_val = float("inf")\npatience, stale = 3, 0\nfor epoch in range(max_epochs):\n    train_loss = train_one_epoch(model, train_loader)\n    val_loss = evaluate(model, val_loader)\n    if val_loss < best_val:\n        best_val, stale = val_loss, 0\n        save_checkpoint(model, "best.pt")\n    else:\n        stale += 1\n        if stale >= patience:\n            break`,
      pitfalls: ["验证变差就不断看测试集", "只靠增加模型容量解决一切", "早停保存的是最后一轮而不是最佳轮"],
      task: "画出三组假想训练/验证 loss：欠拟合、正常、过拟合；为每组列出第一项检查和一个可能改进。",
      acceptance: ["诊断基于两条曲线而非单点", "先排查数据与实现", "改进动作与诊断相匹配"]
    }),
    quiz: { question: "训练 loss 继续下降，而验证 loss 持续上升，最可能提示？", options: ["过拟合", "文件损坏必然", "Git 冲突", "标签一定正确"], answer: 0, success: "正确，这是常见的过拟合信号。", failure: "模型继续适应训练集，但对未见验证样本变差。" }
  },
  {
    id: "torch-tensors", number: "28", module: "deep-learning", title: "PyTorch Tensor、设备与自动微分", kicker: "第五单元 · PyTorch", duration: "75 分钟",
    summary: "掌握 Tensor 的 shape、dtype、device 和 autograd，理解梯度何时产生与清零。",
    goals: ["创建和移动 Tensor", "使用 autograd", "避免设备与 dtype 错误"], resources: ["pytorch-basics", "d2l", "zero-to-hero"],
    body: lessonBody({
      lead: "Tensor 是带 dtype 和 device 的多维数组；autograd 记录计算图并自动应用链式法则。",
      concepts: [["shape", "张量各轴长度"], ["dtype", "float32、int64 等元素类型"], ["device", "CPU、CUDA 或其他计算设备"], ["requires_grad", "是否追踪对该张量的梯度"]],
      sections: [
        ["梯度会累积", `<p>调用 <code>backward()</code> 后梯度加到 <code>.grad</code>，不会自动替换。训练每个 batch 前必须 <code>optimizer.zero_grad()</code>，除非你明确在做梯度累积。</p>`],
        ["设备必须一致", `<p>参与同一次运算的模型参数和输入通常要在同一设备。不要在循环中频繁把数据来回搬动；选择设备后集中移动。</p>`]
      ],
      code: `import torch\n\ndevice = "cuda" if torch.cuda.is_available() else "cpu"\nx = torch.tensor([1.0, 2.0, 3.0], device=device)\nw = torch.tensor([0.1, 0.2, 0.3], device=device, requires_grad=True)\ny = (x * w).sum()\ny.backward()\nprint(y.item(), w.grad, x.shape, x.dtype, x.device)`,
      pitfalls: ["标签分类任务使用错误 dtype", "NumPy 数组和 GPU Tensor 直接混算", "忘记清梯度导致更新异常"],
      task: "手算 y=sum(x*w²) 对 w 的梯度，再用 PyTorch 验证；分别打印值、shape、dtype、device 和 grad。",
      acceptance: ["手算与 autograd 一致", "代码能在无 GPU 电脑运行", "能解释梯度为何只出现在 requires_grad 参数上"]
    }),
    quiz: { question: "为什么训练循环中通常每个 batch 要 zero_grad？", options: ["PyTorch 梯度默认累积", "删除模型", "提高图片分辨率", "保存 checkpoint"], answer: 0, success: "正确，不清零会把不同 batch 梯度继续相加。", failure: "除非故意累积，新的 batch 前应清除旧梯度。" }
  },
  {
    id: "torch-data-model", number: "29", module: "deep-learning", title: "Dataset、DataLoader 与 nn.Module", kicker: "第五单元 · PyTorch", duration: "85 分钟",
    summary: "把数据读取、批处理和模型定义拆成清楚组件，写出可检查的前向传播。",
    goals: ["理解 Dataset/DataLoader", "定义 nn.Module", "检查 batch 形状"], resources: ["pytorch-basics", "d2l", "d2l-video"],
    body: lessonBody({
      lead: "Dataset 定义如何取得一个样本，DataLoader 负责组成 batch；nn.Module 定义参数与前向计算。",
      concepts: [["Dataset", "实现样本数量和按索引取样"], ["DataLoader", "批处理、打乱与并行加载"], ["nn.Module", "可组合、可保存的模型基类"], ["forward", "输入如何变成输出"]],
      sections: [
        ["先让一个 batch 跑通", `<p>正式训练前取一个 batch，打印输入与标签 shape、dtype、范围，做一次 forward 并检查输出 shape。分类 logits 通常是 <code>(batch, classes)</code>。</p>`],
        ["shuffle 的边界", `<p>训练集通常打乱，验证和测试不必打乱。时间序列或特殊采样任务不能机械套用；划分逻辑应在 DataLoader 之前确定。</p>`]
      ],
      code: `import torch\nfrom torch import nn\nfrom torch.utils.data import DataLoader, TensorDataset\n\nX = torch.randn(100, 20)\ny = torch.randint(0, 3, (100,))\nloader = DataLoader(TensorDataset(X, y), batch_size=16, shuffle=True)\nmodel = nn.Sequential(nn.Linear(20, 32), nn.ReLU(), nn.Linear(32, 3))\n\nxb, yb = next(iter(loader))\nlogits = model(xb)\nprint(xb.shape, yb.shape, logits.shape)`,
      pitfalls: ["输出层类别数与标签不一致", "把 softmax 放进模型后又给 CrossEntropyLoss", "验证 DataLoader 仍使用随机数据增强"],
      task: "创建 100×20 的合成三分类数据，建立两层 MLP，并写 shape 注释验证一次 forward。",
      acceptance: ["标签是 int64 且形状为 (B,)", "logits 形状为 (B,3)", "模型参数能通过 list(model.parameters()) 查看"]
    }),
    quiz: { question: "Dataset 与 DataLoader 的主要区别是？", options: ["前者定义单个样本获取，后者组织批次", "二者完全相同", "前者训练 GPU，后者写论文", "DataLoader 保存 Git"], answer: 0, success: "正确，它们分别负责样本接口与批处理迭代。", failure: "把数据内容与批处理机制分开，代码更易复用。" }
  },
  {
    id: "training-loop", number: "30", module: "deep-learning", title: "完整训练循环：forward 到 optimizer.step", kicker: "第五单元 · 模型训练", duration: "95 分钟",
    summary: "按正确顺序实现训练一轮，统计按样本加权的 loss，并避免训练/评估模式混淆。",
    goals: ["写 train_one_epoch", "正确更新参数", "统计 epoch 指标"], resources: ["pytorch-basics", "d2l", "d2l-video"],
    body: lessonBody({
      lead: "标准顺序是 train 模式、清梯度、前向、计算损失、反向、更新；每一步都应能单独检查。",
      sections: [
        ["训练一步的因果链", `<div class="flow"><span>zero_grad</span><b>→</b><span>forward</span><b>→</b><span>loss</span><b>→</b><span>backward</span><b>→</b><span>step</span></div>`],
        ["正确汇总 epoch loss", `<p>若最后一个 batch 较小，不能简单平均每个 batch 的 loss。把每批平均 loss 乘 batch 大小累加，最后除以样本数。</p>`]
      ],
      code: `def train_one_epoch(model, loader, loss_fn, optimizer, device):\n    model.train()\n    loss_sum, correct, count = 0.0, 0, 0\n    for x, y in loader:\n        x, y = x.to(device), y.to(device)\n        optimizer.zero_grad()\n        logits = model(x)\n        loss = loss_fn(logits, y)\n        loss.backward()\n        optimizer.step()\n\n        batch = y.size(0)\n        loss_sum += loss.item() * batch\n        correct += (logits.argmax(1) == y).sum().item()\n        count += batch\n    return {"loss": loss_sum / count, "accuracy": correct / count}`,
      pitfalls: ["忘记 optimizer.step 导致参数不变", "在 backward 前把 loss 转成 item", "训练指标计算图未分离导致显存不断增长"],
      task: "对合成数据训练 5 轮，每轮记录 loss、accuracy 和学习率；额外检查第一轮前后一个权重确实变化。",
      acceptance: ["参数发生更新", "loss 汇总按样本数加权", "训练函数不直接依赖全局变量"]
    }),
    quiz: { question: "哪一步真正根据梯度更新模型参数？", options: ["loss.backward()", "optimizer.step()", "model.train()", "argmax()"], answer: 1, success: "正确，backward 计算梯度，step 应用更新。", failure: "backward 只求梯度，optimizer.step 才改变参数。" }
  },
  {
    id: "validation-checkpoint", number: "31", module: "deep-learning", title: "验证、早停、checkpoint 与推理", kicker: "第五单元 · 模型训练", duration: "95 分钟",
    summary: "正确切换 eval/no_grad，保存最佳权重与训练状态，关闭程序后重新加载推理。",
    goals: ["写 evaluate", "保存最佳 checkpoint", "独立加载推理"], resources: ["pytorch-basics", "pytorch-repro", "d2l"],
    body: lessonBody({
      lead: "可用模型必须能在新进程里凭配置和 checkpoint 恢复；只在内存中得到高分不算完成。",
      concepts: [["model.eval()", "让 dropout/BatchNorm 使用评估行为"], ["no_grad", "评估时不构建梯度图"], ["state_dict", "模型参数的可移植字典"], ["checkpoint", "参数、优化器、轮次和指标等恢复信息"]],
      sections: [
        ["保存最佳而非最后", `<p>根据验证集主指标保存最佳 checkpoint。若要继续训练，还需保存 optimizer、scheduler、epoch 和随机状态；若只推理，模型 state_dict 与配置通常更简洁。</p>`],
        ["加载时先重建结构", `<p>state_dict 不包含 Python 模型类定义。新进程要用同样配置建立模型，再 load_state_dict，并调用 eval。</p>`]
      ],
      code: `def evaluate(model, loader, loss_fn, device):\n    model.eval()\n    loss_sum, correct, count = 0.0, 0, 0\n    with torch.no_grad():\n        for x, y in loader:\n            x, y = x.to(device), y.to(device)\n            logits = model(x)\n            loss = loss_fn(logits, y)\n            loss_sum += loss.item() * y.size(0)\n            correct += (logits.argmax(1) == y).sum().item()\n            count += y.size(0)\n    return loss_sum / count, correct / count\n\ntorch.save({"model": model.state_dict(), "epoch": epoch, "val_loss": val_loss}, "best.pt")`,
      pitfalls: ["验证时忘记 eval", "保存整个临时对象却没有代码和环境", "加载后不做独立样本推理检查"],
      task: "训练一个小模型，保存最佳 checkpoint，结束 Python 进程后运行 predict.py 加载并预测 10 个样本。",
      acceptance: ["加载前重建相同结构", "推理使用 eval/no_grad", "预测类别映射与训练时一致"]
    }),
    quiz: { question: "model.eval() 主要影响哪些层的行为？", options: ["Dropout 和 BatchNorm 等", "所有 Linear 参数归零", "删除优化器", "改变标签"], answer: 0, success: "正确，部分层在训练和评估模式行为不同。", failure: "eval 不删除参数；它切换特定模块的运行方式。" }
  },
  {
    id: "mlp-backprop", number: "32", module: "deep-learning", title: "MLP、激活函数与反向传播", kicker: "第五单元 · 神经网络", duration: "85 分钟",
    summary: "理解隐藏层为什么需要非线性，沿计算图解释反向传播与梯度问题。",
    goals: ["解释隐藏层与激活", "追踪前向 shape", "理解梯度消失/爆炸"], resources: ["3b1b-nn", "zero-to-hero", "d2l"],
    body: lessonBody({
      lead: "多个纯线性层仍等价于一个线性层；激活函数引入非线性，使网络能表示弯曲的决策边界。",
      concepts: [["隐藏层", "输入与输出之间学习中间表示"], ["ReLU", "max(0,x)，简单且常用"], ["反向传播", "链式法则在计算图上的高效应用"], ["初始化", "决定训练初期信号与梯度尺度"]],
      sections: [
        ["前向与反向是同一张图", `<p>前向保存必要的中间量并得到 loss，反向从 loss 出发计算每个参数的梯度。梯度太小会让早期层学得慢，太大会使数值不稳定。</p>`],
        ["网络加深不一定更好", `<p>容量、数据量、正则化和优化要平衡。先建立小模型 baseline，确认训练流程正确，再逐步增加宽度或深度。</p>`]
      ],
      code: `class MLP(nn.Module):\n    def __init__(self, input_dim, hidden_dim, classes):\n        super().__init__()\n        self.net = nn.Sequential(\n            nn.Linear(input_dim, hidden_dim),\n            nn.ReLU(),\n            nn.Dropout(0.2),\n            nn.Linear(hidden_dim, classes),\n        )\n\n    def forward(self, x):\n        return self.net(x)`,
      pitfalls: ["输出分类 logits 前手动 softmax 又用 CrossEntropyLoss", "模型增大后只比较最好一轮", "不检查梯度是否为 NaN 或接近 0"],
      task: "在同一数据上比较无隐藏层、1 层 MLP、3 层 MLP，保持训练预算一致，记录参数量与验证指标。",
      acceptance: ["比较使用同一划分", "报告参数量和至少 3 个种子", "不因复杂模型没赢而删除结果"]
    }),
    quiz: { question: "为什么隐藏层之间通常需要激活函数？", options: ["否则多层线性组合仍是线性变换", "为了保存 Git", "让标签变多", "强制使用 GPU"], answer: 0, success: "正确，非线性激活扩展了可表示函数。", failure: "纯线性层叠加不会得到真正新的非线性能力。" }
  },
  {
    id: "cnn", number: "33", module: "deep-learning", title: "CNN：局部感受野、卷积与图像分类", kicker: "第五单元 · 核心模型", duration: "90 分钟",
    summary: "理解卷积如何共享参数提取局部模式，计算图像张量与特征图尺寸。",
    goals: ["读懂 NCHW", "解释卷积优势", "建立小型 CNN"], resources: ["d2l", "cs231n", "d2l-video"],
    body: lessonBody({
      lead: "卷积核在空间位置共享参数，擅长检测局部模式；深层特征逐渐组合成更大范围的结构。",
      concepts: [["NCHW", "批次、通道、高、宽"], ["kernel", "滑动的局部权重"], ["stride", "卷积核移动步长"], ["padding", "边缘补值以控制输出尺寸"]],
      sections: [
        ["输出尺寸要会算", `<p>单维输出可按 <code>floor((输入+2×padding-kernel)/stride)+1</code> 估算。实际编码仍要打印 shape，因为池化、奇数尺寸和实现参数会影响结果。</p>`],
        ["数据增强只用于训练", `<p>随机裁剪、翻转等增强帮助泛化，但验证/测试应使用确定性预处理。增强必须符合任务语义，例如数字 6 不一定能随意翻转。</p>`]
      ],
      code: `class SmallCNN(nn.Module):\n    def __init__(self, classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(1, 16, 3, padding=1), nn.ReLU(),\n            nn.MaxPool2d(2),\n            nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(),\n            nn.AdaptiveAvgPool2d((1, 1)),\n        )\n        self.classifier = nn.Linear(32, classes)\n\n    def forward(self, x):\n        x = self.features(x).flatten(1)\n        return self.classifier(x)`,
      pitfalls: ["把 HWC 图片直接当 NCHW", "验证集仍做随机增强", "尺寸变化靠试到不报错而不理解"],
      task: "在 FashionMNIST 训练 SmallCNN，与同参数预算附近的 MLP 比较准确率、训练时间和主要错误类别。",
      acceptance: ["输入 shape 明确为 (B,1,28,28)", "比较划分一致", "保存混淆矩阵和错误样本图"]
    }),
    quiz: { question: "CNN 参数共享的直接好处之一是？", options: ["同一局部检测器可用于不同空间位置", "自动获得标签", "测试集不再需要", "所有图像尺寸相同"], answer: 0, success: "正确，卷积核在空间上复用。", failure: "共享参数让同一局部模式检测可跨位置应用。" }
  },
  {
    id: "sequence-models", number: "34", module: "deep-learning", title: "Embedding、RNN 与序列建模", kicker: "第五单元 · 核心模型", duration: "90 分钟",
    summary: "把离散 token 映射成向量，理解循环状态、变长序列、掩码以及 RNN 的局限。",
    goals: ["解释 embedding", "追踪序列 shape", "理解 RNN 长程依赖问题"], resources: ["d2l", "cs224n", "hf-course"],
    body: lessonBody({
      lead: "Embedding 是可学习的查找表；RNN 按顺序更新隐藏状态，但长距离信息传递和并行训练受限。",
      concepts: [["token", "序列离散单位"], ["embedding", "token id 到稠密向量的映射"], ["hidden state", "截至当前位置的压缩状态"], ["mask", "区分真实 token 与 padding"]],
      sections: [
        ["形状先行", `<p>若输入 token id 为 <code>(B,T)</code>，embedding 后常为 <code>(B,T,D)</code>。分类可以取最终有效状态、池化或特殊 token 表示，但必须排除 padding。</p>`],
        ["RNN 为什么被 Transformer 大量取代", `<p>循环依赖限制时间维并行，长链条的梯度更难传播。LSTM/GRU 用门控缓解，但自注意力能直接建立任意位置之间的连接。</p>`]
      ],
      code: `vocab_size, dim, hidden = 5000, 64, 128\nembedding = nn.Embedding(vocab_size, dim, padding_idx=0)\nrnn = nn.GRU(dim, hidden, batch_first=True)\n\ntokens = torch.randint(1, vocab_size, (8, 30))\nx = embedding(tokens)       # (8, 30, 64)\nout, h = rnn(x)             # out: (8, 30, 128)\nprint(x.shape, out.shape, h.shape)`,
      pitfalls: ["token id 用 float dtype", "平均池化时把 padding 也算进去", "训练和推理使用不同 tokenizer 或词表"],
      task: "构造变长句子 batch，加入 padding 和 mask，计算不含 padding 的平均 embedding。",
      acceptance: ["padding_idx 处理明确", "mask 形状可广播", "句子变长不会改变词表与标签映射"]
    }),
    quiz: { question: "Embedding 层的输入通常是什么？", options: ["token 的整数编号", "任意网页 URL", "Git commit", "已经 softmax 的概率"], answer: 0, success: "正确，Embedding 按整数 id 查找可学习向量。", failure: "离散 token 先映射为 id，再查找对应向量。" }
  },
  {
    id: "attention-transformer", number: "35", module: "deep-learning", title: "Attention 与 Transformer", kicker: "第五单元 · 核心模型", duration: "110 分钟",
    summary: "从 Q/K/V、缩放点积、自注意力到多头、位置和掩码，读懂 Transformer 数据流。",
    goals: ["解释 Q/K/V", "计算 attention shape", "区分 padding 与 causal mask"], resources: ["d2l", "cs224n", "hf-course", "zero-to-hero"],
    body: lessonBody({
      lead: "注意力让每个位置根据内容从其他位置聚合信息；Transformer 用自注意力和前馈层构建并行序列模型。",
      concepts: [["Query", "当前位置想寻找什么"], ["Key", "每个位置提供的匹配线索"], ["Value", "匹配后实际聚合的信息"], ["Multi-head", "在不同表示子空间学习多组关系"]],
      sections: [
        ["缩放点积", `<p><code>Attention(Q,K,V)=softmax(QKᵀ/√dₖ)V</code>。除以平方根是为了控制点积尺度，避免维度大时 softmax 过度饱和、梯度变差。</p>`],
        ["位置与掩码", `<p>自注意力本身不包含顺序，需要位置表示。padding mask 阻止关注填充；causal mask 阻止生成位置看到未来 token。Encoder 与自回归 Decoder 的掩码目的不同。</p>`],
        ["计算成本", `<p>标准全注意力对序列长度的注意力矩阵通常是二次规模。长上下文方法会使用稀疏、分块、线性化或高效内核，但先理解标准版本。</p>`]
      ],
      code: `import math\nimport torch\n\nB, T, D = 2, 5, 8\nQ = torch.randn(B, T, D)\nK = torch.randn(B, T, D)\nV = torch.randn(B, T, D)\nscores = Q @ K.transpose(-2, -1) / math.sqrt(D)  # (B,T,T)\nweights = scores.softmax(dim=-1)\noutput = weights @ V                              # (B,T,D)\nprint(scores.shape, output.shape, weights.sum(-1))`,
      pitfalls: ["softmax 轴选错", "忘记 mask 导致模型偷看未来或 padding", "只会背结构名，无法写出张量维度"],
      task: "手写单头自注意力，加入 4×4 causal mask，验证每一行被允许位置权重和为 1、未来位置权重为 0。",
      acceptance: ["scores 是 (B,T,T)", "mask 在 softmax 前应用", "能用自己的话解释除以 √dₖ"]
    }),
    quiz: { question: "自回归语言模型使用 causal mask 的主要原因是？", options: ["防止当前位置看到未来 token", "删除词表", "强制 CPU", "减少类别数"], answer: 0, success: "正确，训练时不能泄漏未来答案。", failure: "它维护逐 token 生成时的信息边界。" }
  },
  {
    id: "pretrain-finetune", number: "36", module: "deep-learning", title: "预训练、微调、LoRA 与 RAG 的边界", kicker: "第五单元 · 大模型基础", duration: "100 分钟",
    summary: "理解推理、提示、检索增强、全量微调和参数高效微调分别改变什么。",
    goals: ["区分 RAG 与微调", "解释 LoRA", "设计离线评测"], resources: ["hf-course", "cs224n", "pytorch-basics"],
    body: lessonBody({
      lead: "RAG 在推理时补充外部证据，微调改变模型参数与行为；二者解决的问题不同，也可以组合。",
      concepts: [["预训练", "在大规模数据上学习通用表示或生成能力"], ["微调", "在特定任务/领域继续优化参数"], ["LoRA", "学习低秩增量，减少可训练参数与显存"], ["RAG", "检索证据后把上下文交给生成模型"]],
      sections: [
        ["先判断缺口在哪里", `<p>知识需要频繁更新且能检索，优先考虑 RAG；需要稳定输出格式、语气或任务行为，可考虑微调；只是少量示例能说明任务，先试提示学习。</p>`],
        ["不要只做主观演示", `<p>建立冻结评测集，分别测检索 Recall@k/MRR、答案正确性、引用支持率、拒答、时延和成本。LLM-as-judge 也要校准并抽样人工复核。</p>`],
        ["许可与隐私", `<p>使用模型、数据集和代码前核对许可证；敏感数据不能因为“只用于训练”就忽略授权、脱敏和访问控制。</p>`]
      ],
      code: `# 选择方法的最小决策记录（不是训练代码）\ndecision = {\n    "problem": "回答内部文档中的最新规定",\n    "candidate": "RAG",\n    "reason": "知识频繁更新且回答必须带来源",\n    "baseline": "关键词检索 + 原文片段",\n    "metrics": ["Recall@5", "答案正确率", "引用支持率", "延迟"],\n    "risks": ["越权检索", "无证据生成", "文档过期"]\n}`,
      pitfalls: ["把 RAG 说成模型学会了文档", "没有 baseline 就直接 LoRA", "用测试问题反复修改提示和索引"],
      task: "选择一个真实需求，用决策表比较提示、RAG、LoRA 和全量微调的知识更新、数据、成本、可解释性与评测要求。",
      acceptance: ["推荐方法与问题缺口匹配", "至少包含一个简单 baseline", "评测集与开发样例分离"]
    }),
    quiz: { question: "需求是回答每天更新的公司制度并给出原文依据，通常先考虑？", options: ["RAG", "从零预训练大模型", "只调学习率", "删除知识库"], answer: 0, success: "正确，RAG 适合更新频繁且需要证据的知识。", failure: "频繁变化的外部知识更适合检索，而不是反复重训参数。" }
  },
  {
    id: "find-papers", number: "37", module: "research", title: "检索与筛选论文：从问题到文献地图", kicker: "第六单元 · 论文阅读", duration: "90 分钟",
    summary: "构造关键词和检索式，沿引用网络扩展，核对版本、代码、数据与评价设置。",
    goals: ["构造检索式", "筛选可复现论文", "建立文献管理库"], resources: ["arxiv", "semantic-scholar", "zotero", "cs224n"],
    body: lessonBody({
      lead: "不要搜索‘最好的论文’；从具体问题、同义词、方法词、数据集和指标构造可重复的检索过程。",
      concepts: [["关键词组", "问题、方法、数据、指标及其同义词"], ["前向引用", "后来哪些工作引用它"], ["后向引用", "它建立在哪些工作上"], ["版本核对", "预印本、会议版和代码提交可能不同"]],
      sections: [
        ["三轮阅读筛选", `<ol><li>标题、摘要、图表：判断相关性。</li><li>引言、方法、实验：回答问题、贡献、假设和证据。</li><li>附录、代码、数据：确认细节与复现成本。</li></ol>`],
        ["第一篇复现论文怎么选", `<p>优先选择有正式论文、官方代码、公开数据、清晰指标、README 完整、单卡或 CPU 可做缩小实验的工作。不要第一篇就挑战需要数百卡的大模型预训练。</p>`],
        ["引用必须人工核对", `<p>AI 工具可以辅助提取关键词和整理摘要，但论文标题、作者、年份、DOI、结论和引文必须回到原文核验。不存在的引用会直接损害科研可信度。</p>`]
      ],
      code: `# 文献卡片建议字段（保存为 Markdown/表格/Zotero 笔记）\npaper_card = {\n    "problem": "解决什么问题？",\n    "gap": "以前方法哪里不足？",\n    "idea": "核心改动是什么？",\n    "data": "使用什么数据与划分？",\n    "baselines": "与谁比较？",\n    "evidence": "哪张表最支持结论？",\n    "limits": "已知限制与未回答问题",\n    "repro_cost": "代码、算力、数据许可"\n}`,
      pitfalls: ["只按下载量或标题选论文", "引用二手博客而未核对原论文", "收藏几十篇却没有筛选记录"],
      task: "围绕一个具体问题检索 20 篇候选，保留 5 篇核心论文，为每篇完成八问卡片并画出引用关系。",
      acceptance: ["记录检索词和日期", "每条引用已打开原文核对", "明确首选复现论文与放弃其他候选的原因"]
    }),
    quiz: { question: "第一次复现最适合优先选择哪类论文？", options: ["无代码且需数百张 GPU", "代码数据公开、指标清楚、成本可控", "标题最夸张", "作者最多"], answer: 1, success: "正确，可获得的证据与可控成本最重要。", failure: "第一轮目标是建立完整复现闭环，而不是挑战最大规模。" }
  },
  {
    id: "read-paper", number: "38", module: "research", title: "读懂论文：主张、方法与证据", kicker: "第六单元 · 论文阅读", duration: "100 分钟",
    summary: "把论文拆成研究问题、假设、方法、实验设置、结果、限制和可验证主张。",
    goals: ["写六问摘要", "区分主张与证据", "读懂核心结果表"], resources: ["neurips-checklist", "cs229", "cs224n"],
    body: lessonBody({
      lead: "读论文不是逐句翻译。先找到作者的核心主张，再检查实验是否真的能支持它。",
      sections: [
        ["六问阅读卡", `<ol><li>论文解决什么具体问题？</li><li>已有方法有什么不足？</li><li>核心改动是什么？</li><li>用了什么数据、划分和指标？</li><li>与哪些 baseline 公平比较？</li><li>哪项证据最能支持主结论？</li></ol>`],
        ["公式的四步读法", `<p>先写每个符号含义与 shape；再用语言描述输入输出；然后代入一个最小例子；最后连接到代码位置。不要在符号没定义时硬推。</p>`],
        ["审查实验有效性", `<p>检查是否控制训练预算、数据、调参机会和预训练资源；是否报告多种子波动；消融是否只改变一个因素；指标是否对应主张；是否诚实讨论负面结果与限制。</p>`]
      ],
      code: `# 一条“主张—证据—保留意见”记录\nclaim = {\n    "claim": "方法 A 提升长文本问答",\n    "evidence": "表 2 在两个长文本数据集上优于同规模 baseline",\n    "controls": "相同模型、训练步数、数据和评测脚本",\n    "caveat": "只报告单次结果，且未测试跨领域泛化",\n    "next_check": "运行 3 个种子并增加域外测试"\n}`,
      pitfalls: ["摘要复述得很流畅却不知道实验设置", "看见显著提升就忽略额外数据和算力", "把作者推测写成已被证实事实"],
      task: "选择一篇论文，做一页阅读卡：六问、核心图、关键公式 shape、主张—证据表和三个限制。",
      acceptance: ["内容用自己的话表达", "每个结论能定位到具体表/图/段落", "至少一个限制来自你的审查而非照抄作者"]
    }),
    quiz: { question: "判断论文主张是否可信，最关键的动作是？", options: ["只看摘要措辞", "把主张对应到具体实验和控制条件", "统计作者数量", "只看模型参数量"], answer: 1, success: "正确，主张必须由设计合适的证据支持。", failure: "摘要是作者概括，验证需要回到实验设计与结果。" }
  },
  {
    id: "reproduce-repo", number: "39", module: "research", title: "复现仓库：环境记录与最小闭环", kicker: "第六单元 · 复现实践", duration: "120 分钟",
    summary: "记录硬件与版本，从最小数据、单 batch、单 epoch 到正式实验逐层验证。",
    goals: ["建立环境清单", "执行最小闭环", "定位复现差异"], resources: ["mlrc", "pytorch-repro", "git-book", "neurips-checklist"],
    body: lessonBody({
      lead: "先让 1% 数据走完加载—训练—保存—评估—推理，再投入数小时正式训练。",
      concepts: [["代码版本", "仓库 URL 与精确 commit"], ["环境", "OS、Python、框架、CUDA、GPU"], ["数据版本", "来源、校验、划分与预处理"], ["启动命令", "完整参数和配置文件"]],
      sections: [
        ["四级冒烟测试", `<ol><li>能 import 并显示 --help。</li><li>一个样本/一个 batch shape 正确。</li><li>极小数据过拟合，证明模型有学习能力。</li><li>单 epoch 完成并能保存、加载、评估。</li></ol>`],
        ["差异不是自动失败", `<p>论文结果与复现不同，先比较数据版本、预处理、代码 commit、依赖、随机种子、硬件、训练预算和指标实现。能定位差异来源本身就是研究成果。</p>`],
        ["环境隔离", `<p>每篇论文使用独立环境。不要为了满足一个旧仓库而升级整个常用环境；记录安装顺序与必要补丁，补丁单独 commit。</p>`]
      ],
      code: `# env_report.py\nimport platform, sys, torch\nprint("OS:", platform.platform())\nprint("Python:", sys.version)\nprint("PyTorch:", torch.__version__)\nprint("CUDA runtime:", torch.version.cuda)\nprint("CUDA available:", torch.cuda.is_available())\nif torch.cuda.is_available():\n    print("GPU:", torch.cuda.get_device_name(0))\n\n# 另外保存：git rev-parse HEAD、数据校验值、完整启动命令`,
      pitfalls: ["一上来跑完整数据几个小时", "依赖冲突时无记录地反复安装", "只说‘版本差不多’而不保存精确版本"],
      task: "选择一个小型官方仓库，建立 reproduction-log.md，完成四级冒烟测试并记录每级的命令、输出、耗时和问题。",
      acceptance: ["记录精确 commit 和依赖版本", "最小数据能保存并重新加载", "所有本地补丁有独立 diff 与理由"]
    }),
    quiz: { question: "复现训练仓库时，为什么先用极小数据？", options: ["快速验证全流程并尽早暴露路径/shape/保存问题", "让最终指标必然更高", "避免记录环境", "代替完整实验"], answer: 0, success: "正确，最小闭环用于低成本排错。", failure: "它不能代替正式实验，但能避免长时间后才发现基础错误。" }
  },
  {
    id: "experiment-design", number: "40", module: "research", title: "对照、消融、随机种子与公平比较", kicker: "第六单元 · 实验设计", duration: "110 分钟",
    summary: "把想法变成可证伪假设，一次改变一个因素，公平比较 baseline 并报告不确定性。",
    goals: ["写可验证假设", "设计对照与消融", "报告多种子结果"], resources: ["neurips-checklist", "mlrc", "pytorch-repro"],
    body: lessonBody({
      lead: "好实验不是把方法跑一遍，而是排除其他解释，让结果能回答一个具体问题。",
      concepts: [["研究假设", "明确、可测量、可能被结果否定"], ["对照实验", "新方法与合理 baseline 比较"], ["消融实验", "移除或替换一个组件判断贡献"], ["公平预算", "数据、调参、训练步数和计算资源可比"]],
      sections: [
        ["一次只改变一个主要变量", `<p>比较 RAG 检索策略时，固定 chunk size、top-k、重排、生成模型与评测集，只替换 BM25、Dense 或 Hybrid。否则无法知道提升来自哪里。</p>`],
        ["预先写实验表", `<p>在运行前列出实验 ID、假设、变量、固定项、种子、主指标、停止规则和失败条件。这样能减少看到结果后不断改变解释。</p>`],
        ["多次运行与统计", `<p>至少用多个固定种子报告均值与标准差；若差异与波动同量级，就不能只凭最好一次宣称稳定提升。统计检验也不能弥补有偏的实验设计。</p>`]
      ],
      code: `experiments = [\n    {"id": "A", "retriever": "BM25",  "chunk": 512, "top_k": 5, "rerank": False},\n    {"id": "B", "retriever": "Dense", "chunk": 512, "top_k": 5, "rerank": False},\n    {"id": "C", "retriever": "Hybrid","chunk": 512, "top_k": 5, "rerank": False},\n    {"id": "D", "retriever": "Hybrid","chunk": 512, "top_k": 5, "rerank": True},\n]\nseeds = [17, 42, 2026]`,
      pitfalls: ["新方法获得更多调参机会", "同时换模型、数据和指标却归因于一个组件", "结果不理想就换主指标"],
      task: "围绕一个可验证问题预注册 4 组实验表，写明主指标、固定变量、3 个种子和结果会如何支持/反驳假设。",
      acceptance: ["每次比较只有一个主要变化", "baseline 强且实现公平", "负面结果也有预定解释路径"]
    }),
    quiz: { question: "消融实验的核心目的是什么？", options: ["判断某个组件是否真正贡献效果", "让表格更长", "避免 baseline", "隐藏失败结果"], answer: 0, success: "正确，消融用于隔离组件贡献。", failure: "它通过移除/替换组件来检验因果贡献。" }
  },
  {
    id: "tracking-analysis", number: "41", module: "research", title: "实验追踪、结果表与错误分析", kicker: "第六单元 · 结果分析", duration: "105 分钟",
    summary: "记录配置、指标、代码和产物，用切片与错误案例解释模型为何成功或失败。",
    goals: ["建立实验台账", "比较运行结果", "进行系统错误分析"], resources: ["mlflow", "neurips-checklist", "pytorch-repro"],
    body: lessonBody({
      lead: "每个结果都要能追溯到代码、数据、配置、随机种子和产物；否则高分只是无法验证的截图。",
      concepts: [["run", "一次完整执行及其元数据"], ["parameter", "运行前设定的超参数"], ["metric", "运行中或结束后计算的数值"], ["artifact", "模型、图、日志、预测和配置文件"]],
      sections: [
        ["先用简单 CSV 也可以", `<p>初学不必马上搭复杂平台。一个 experiments.csv 加规范结果目录就能工作：run_id、commit、data_version、seed、params、metrics、runtime、notes。规模变大后再使用 MLflow。</p>`],
        ["错误分析比总分更接近研究", `<p>按类别、长度、来源、难度和人群切片；抽样假阳性/假阴性；标注错误类型；统计每类数量；决定下一项实验。不要只展示最好案例。</p>`],
        ["RAG 的两段评估", `<p>分别评估检索与生成。检索失败时生成模型没有证据；检索成功但回答错误，则要查上下文组织、提示、推理或引用验证。</p>`]
      ],
      code: `import mlflow\n\nmlflow.set_experiment("rag-retrieval-study")\nwith mlflow.start_run():\n    mlflow.log_params({"retriever": "hybrid", "top_k": 5, "seed": 42})\n    # 运行训练或评估……\n    mlflow.log_metrics({"recall_at_5": 0.84, "mrr": 0.71})\n    mlflow.log_artifact("results/error_cases.csv")\n    mlflow.log_artifact("configs/experiment.yaml")`,
      pitfalls: ["只记录最终分数，不记录 commit 和数据版本", "手工复制结果时列错实验", "错误分析只挑几个有趣案例"],
      task: "建立实验台账，导入至少 6 次运行；制作主结果表、均值/标准差图和错误类型统计表，提出下一项最有信息量的实验。",
      acceptance: ["任一行都能找到对应配置和产物", "表格没有只挑最佳 seed", "下一步实验来自错误分布而非直觉猜测"]
    }),
    quiz: { question: "一个可信实验结果最少应能追溯到什么？", options: ["代码、数据、配置与运行条件", "漂亮截图", "课程收藏数", "文件名 final2"], answer: 0, success: "正确，可追溯性是复现和审查的基础。", failure: "单独截图无法说明结果如何产生。" }
  },
  {
    id: "capstone", number: "42", module: "research", title: "毕业项目：完成一次小型 AI 研究闭环", kicker: "第六单元 · 科研表达", duration: "4–6 周",
    summary: "从研究问题、baseline、对照实验和误差分析，到仓库、复现报告与三分钟表达。",
    goals: ["完成可复现实验", "写出诚实报告", "清楚表达贡献与限制"], resources: ["neurips-checklist", "mlrc", "github-flow", "mlflow", "zotero"],
    body: lessonBody({
      lead: "毕业标准不是模型分数多高，而是别人能按说明复现，你能解释为什么做、如何验证、结果说明什么和还不能说明什么。",
      sections: [
        ["推荐题目：小型 RAG 检索研究", `<p><strong>问题：</strong>不同检索与切分策略如何影响垂直领域问答？固定生成模型与评测集，比较 BM25、Dense、Hybrid、是否重排，以及少量 chunk size/top-k 设置。</p>`],
        ["最终仓库结构", `<pre><code>research-project/\n├─ README.md\n├─ configs/\n├─ data/README.md\n├─ src/\n│  ├─ train.py\n│  ├─ evaluate.py\n│  └─ predict.py\n├─ tests/\n├─ results/\n│  ├─ metrics.csv\n│  └─ error_cases.csv\n├─ requirements.txt\n├─ CITATION.cff\n└─ report.pdf</code></pre>`],
        ["报告结构", `<ol><li>摘要与研究问题</li><li>相关工作</li><li>方法与假设</li><li>数据和实验设置</li><li>主结果、消融与统计</li><li>错误分析</li><li>限制、伦理与资源成本</li><li>结论和复现说明</li></ol>`],
        ["三分钟表达", `<p>按“为什么做 → 现有缺口 → 我的假设 → 如何控制变量 → 得到什么 → 哪些还不能确定”组织。导师通常更看重你是否理解实验，而不是项目名称多热门。</p>`]
      ],
      code: `# 一条命令应能重现主结果（示例）\npython -m src.evaluate --config configs/main.yaml --output results/main\n\n# README 必须记录\n# 1. 环境安装  2. 数据准备  3. 训练/评估命令\n# 4. 主结果表  5. 已知限制  6. 许可证与引用`,
      pitfalls: ["只做聊天网页，没有研究问题和对照", "为了显得成功而省略失败实验", "README 缺少精确命令与数据说明", "使用 AI 生成引用但不核对原文"],
      task: "在 4–6 周内提交四件作品：公开或可审查仓库、6–8 页复现/研究报告、10 页汇报 PPT、三分钟录音或讲稿。",
      acceptance: ["新环境可按 README 跑通主结果", "至少一个强 baseline、一个消融、三个种子", "报告主张与表格证据一一对应", "明确限制、许可、数据风险和 AI 工具使用边界"]
    }),
    quiz: { question: "哪项最能说明你完成了科研训练闭环？", options: ["收藏很多课程", "代码可复现、实验可审查、结论有边界", "项目名字包含大模型", "只展示一次最高分"], answer: 1, success: "正确，这才是从工程运行走向可信研究。", failure: "科研能力体现在问题、证据、可复现性与诚实解释。" }
  },
].sort((a, b) => Number(a.number) - Number(b.number));
