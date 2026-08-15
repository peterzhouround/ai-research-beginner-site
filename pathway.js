const pathway = {
  version: "2.0",
  totalWeeks: 42,
  lessonCount: 66,
  promise: "一次只推进一课；上一课没有完成，后面的课只能预览，不能计入完成进度。",
  rules: [
    "先会 Python 与数据处理，再进入机器学习",
    "先掌握划分、指标和过拟合，再进入 PyTorch",
    "先跑通训练与验证闭环，再学习模型架构",
    "先理解 Transformer 与预训练模型，再进入 RAG",
    "先建立检索基线和评测集，再优化 RAG",
    "最后才做论文复现、对照实验和毕业项目"
  ]
};

const upgradedModules = [
  { id: "foundation", number: "01", title: "Python 与计算基础", subtitle: "从 Windows 环境到能独立拆解小程序", color: "#e36b3d", weeks: "第 1–5 周", lessons: "01–10", prerequisite: "无", output: "3 个命令行小程序", gate: "env-notebook" },
  { id: "git", number: "02", title: "Git 与可复现习惯", subtitle: "让代码有版本、说明和可恢复历史", color: "#7259c9", weeks: "第 6–7 周", lessons: "11–15", prerequisite: "完成第 10 课", output: "公开 GitHub 仓库", gate: "git-remotes" },
  { id: "data-math", number: "03", title: "数据处理与必要数学", subtitle: "先能检查数据，再理解模型里的矩阵与梯度", color: "#167d74", weeks: "第 8–12 周", lessons: "16–21", prerequisite: "完成 Git 单元", output: "可复现 EDA 报告", gate: "probability" },
  { id: "machine-learning", number: "04", title: "经典机器学习完整闭环", subtitle: "从 baseline 到泛化、调参与错误分析", color: "#b87b13", weeks: "第 13–18 周", lessons: "22–32", prerequisite: "完成数据与数学单元", output: "无泄漏的分类项目", gate: "ml-stage-project" },
  { id: "deep-learning", number: "05", title: "PyTorch 训练基础", subtitle: "独立写出数据、模型、训练、验证和恢复流程", color: "#c54d62", weeks: "第 19–24 周", lessons: "33–41", prerequisite: "完成机器学习阶段项目", output: "FashionMNIST 训练仓库", gate: "dl-stage-project" },
  { id: "architecture", number: "06", title: "神经网络架构", subtitle: "从 CNN 和序列模型走到 Transformer", color: "#8d4f9d", weeks: "第 25–28 周", lessons: "42–46", prerequisite: "完成 PyTorch 训练闭环", output: "两个可解释架构实验", gate: "transformer-block-project" },
  { id: "llm", number: "07", title: "预训练模型与 LLM", subtitle: "分清 token、推理、微调、LoRA 与评测", color: "#3f6fb5", weeks: "第 29–32 周", lessons: "47–52", prerequisite: "完成 Transformer 阶段", output: "可复现文本任务 baseline", gate: "llm-stage-project" },
  { id: "rag", number: "08", title: "检索增强生成 RAG", subtitle: "检索先行：切分、召回、重排、引用与分段评测", color: "#24827c", weeks: "第 33–36 周", lessons: "53–59", prerequisite: "完成 LLM 基础项目", output: "带评测集的最小 RAG", gate: "rag-evaluation" },
  { id: "research", number: "09", title: "论文复现与科研表达", subtitle: "把工程结果变成可审查的研究证据", color: "#356aa0", weeks: "第 37–42 周", lessons: "60–66", prerequisite: "完成 RAG 或选择其他成熟任务", output: "复现报告与毕业项目", gate: "capstone" }
];

courseModules.splice(0, courseModules.length, ...upgradedModules);

studyPlan.splice(0, studyPlan.length,
  { weeks: "1–5", title: "Python 与环境", output: "三个小程序；能自己查错、读写文件并管理虚拟环境", lessons: "01–10", gate: "通过：从空目录运行项目" },
  { weeks: "6–7", title: "Git 与公开作品", output: "一个包含 README、分支与 Pull Request 的仓库", lessons: "11–15", gate: "通过：别人能克隆并运行" },
  { weeks: "8–12", title: "数据与数学", output: "一份含数据字典、质量检查和图表的 EDA", lessons: "16–21", gate: "通过：每个结论能追溯到数据" },
  { weeks: "13–18", title: "经典机器学习", output: "baseline、Pipeline、交叉验证、调参和错误分析", lessons: "22–32", gate: "通过：测试集只使用一次" },
  { weeks: "19–24", title: "PyTorch 训练闭环", output: "训练、验证、早停、checkpoint、恢复和推理", lessons: "33–41", gate: "通过：新环境可复现实验" },
  { weeks: "25–28", title: "架构理解", output: "CNN 与 Transformer block 的形状和消融实验", lessons: "42–46", gate: "通过：能解释每一维张量" },
  { weeks: "29–32", title: "LLM 基础", output: "tokenizer、pipeline、微调方案与离线评测", lessons: "47–52", gate: "通过：先有非 RAG 文本 baseline" },
  { weeks: "33–36", title: "RAG 专项", output: "稀疏/稠密检索、重排、引用和分段指标", lessons: "53–59", gate: "通过：检索与生成分别评估" },
  { weeks: "37–42", title: "科研闭环", output: "问题、文献、复现、对照实验、报告与展示", lessons: "60–66", gate: "通过：结论可审查、可复现" }
);

resourceLibrary.push(
  { id: "sklearn-preprocess", stage: "machine-learning", type: "官方教程", provider: "scikit-learn", title: "Preprocessing data", url: "https://scikit-learn.org/stable/modules/preprocessing.html", note: "标准化、类别编码与预处理的官方参考；与 Pipeline 一起使用。" },
  { id: "sklearn-tuning", stage: "machine-learning", type: "官方教程", provider: "scikit-learn", title: "Tuning the hyper-parameters", url: "https://scikit-learn.org/stable/modules/grid_search.html", note: "在交叉验证内部搜索参数，避免用测试集调参。" },
  { id: "pytorch-transforms", stage: "deep-learning", type: "官方教程", provider: "PyTorch", title: "Transforms", url: "https://docs.pytorch.org/tutorials/beginner/basics/transforms_tutorial.html", note: "把输入变换与标签变换写进数据管线。" },
  { id: "pytorch-performance", stage: "deep-learning", type: "官方指南", provider: "PyTorch", title: "Performance Tuning Guide", url: "https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html", note: "完成正确训练循环后，再学习性能与显存优化。" },
  { id: "hf-tokenizers", stage: "llm", type: "官方课程", provider: "Hugging Face", title: "The tokenization pipeline", url: "https://huggingface.co/learn/llm-course/en/chapter6/4", note: "在使用预训练模型前理解规范化、预分词、模型和后处理。" },
  { id: "hf-pipelines", stage: "llm", type: "官方课程", provider: "Hugging Face", title: "Transformer pipelines", url: "https://huggingface.co/learn/llm-course/en/chapter1/3", note: "先完成推理任务，再进入训练与微调。" },
  { id: "hf-finetune", stage: "llm", type: "官方文档", provider: "Hugging Face", title: "Fine-tuning", url: "https://huggingface.co/docs/transformers/main/training", note: "从数据 tokenization 到 Trainer 的完整微调示例。" },
  { id: "hf-advanced-rag", stage: "rag", type: "官方实践", provider: "Hugging Face", title: "Advanced RAG", url: "https://huggingface.co/learn/cookbook/advanced_rag", note: "完成最小检索基线后，再研究切分、embedding、重排与 reader。", featured: true },
  { id: "hf-rag-eval", stage: "rag", type: "官方实践", provider: "Hugging Face", title: "RAG Evaluation", url: "https://huggingface.co/learn/cookbook/rag_evaluation", note: "构造评测集，并分别检查检索和回答质量。" },
  { id: "ms-rag-eval", stage: "rag", type: "官方教程", provider: "Microsoft Learn", title: "Assessing RAG performance", url: "https://learn.microsoft.com/en-us/fabric/data-science/tutorial-evaluate-rag-performance", note: "展示 top-N 检索率、groundedness 与回答相关性等分段评测。" }
);

for (const resource of resourceLibrary) {
  if (resource.id === "cs231n" || resource.id === "zero-to-hero") resource.stage = "architecture";
  if (["cs224n", "hf-course"].includes(resource.id)) resource.stage = "llm";
}

const lessonNumberMap = {
  "ai-basics": "01", "setup-windows": "02", "python-variables": "03", "python-input": "04", conditions: "05", loops: "06", collections: "07", functions: "08", "files-errors": "09", "env-notebook": "10",
  "git-basics": "11", "git-workflow": "12", "git-undo": "13", "git-branches": "14", "git-remotes": "15",
  numpy: "16", pandas: "17", visualization: "18", "linear-algebra": "19", calculus: "20", probability: "21",
  "ml-problem": "22", "linear-regression": "23", classification: "24", "splits-pipeline": "26", metrics: "27", overfitting: "28",
  "torch-tensors": "33", "torch-data-model": "34", "mlp-backprop": "36", "training-loop": "37", "validation-checkpoint": "38",
  cnn: "42", "sequence-models": "44", "attention-transformer": "45", "pretrain-finetune": "50",
  "find-papers": "61", "read-paper": "62", "reproduce-repo": "63", "experiment-design": "64", "tracking-analysis": "65", capstone: "66"
};

for (const lesson of lessons) {
  lesson.number = lessonNumberMap[lesson.id] || lesson.number;
  if (["cnn", "sequence-models", "attention-transformer"].includes(lesson.id)) lesson.module = "architecture";
  if (lesson.id === "pretrain-finetune") lesson.module = "llm";
}

const expandedLessons = [
  {
    id: "categorical-features", number: "25", module: "machine-learning", title: "数值、类别特征与预处理", kicker: "第四单元 · 数据进入模型之前", duration: "85 分钟",
    summary: "区分数值量与类别编码，把缺失值、标准化和 one-hot 统一放进 Pipeline。",
    goals: ["识别字段语义", "正确编码类别变量", "防止预处理泄漏"], resources: ["sklearn-preprocess", "sklearn-start"],
    body: lessonBody({
      lead: "模型看到的是数值矩阵，但把类别编号直接当连续大小通常是错误的；预处理规则也必须只从训练数据学习。",
      concepts: [["数值特征", "差值和大小通常有意义"], ["类别特征", "值表示身份而非连续大小"], ["imputation", "按训练数据规则填补缺失"], ["ColumnTransformer", "按列类型组合不同变换"]],
      sections: [
        ["先写数据字典", `<p>为每一列记录含义、单位、允许范围、缺失原因和预测时是否可获得。身份证号即使由数字组成也不是连续数值；邮编的 20000 不代表是 10000 的两倍。</p>`],
        ["预处理必须在交叉验证内部", `<p>如果先对全部数据计算均值再切分，验证折的信息已经进入训练。正确做法是把填补、缩放、编码和模型装入同一个 Pipeline。</p>`],
        ["检查未知类别", `<p>真实推理可能遇到训练时未出现的城市或设备类型。编码器应明确处理策略，并把未知类别比例纳入数据监控。</p>`]
      ],
      code: R`numeric_features = ["age", "income"]
categorical_features = ["city", "device"]

# ColumnTransformer 分别处理两类列，再把结果交给模型
# 所有 fit 都只发生在训练折中`,
      codeTitle: "先写清列分组",
      pitfalls: ["把类别编号当连续数值", "在全量数据上先 fit scaler", "删除所有含缺失值的样本但不报告数量"],
      task: "选一份表格数据，制作数据字典和列分组，写出每列的预处理策略及理由。",
      acceptance: ["每列有语义和类型", "预处理位于 Pipeline 内", "说明未知类别与缺失值策略"]
    })
  },
  {
    id: "regularization-tuning", number: "29", module: "machine-learning", title: "正则化、超参数与调参纪律", kicker: "第四单元 · 泛化之后再调参", duration: "90 分钟",
    summary: "只在交叉验证内比较少量有理由的参数，并保留独立测试集作为最终审计。",
    goals: ["分清参数与超参数", "使用交叉验证调参", "报告选择偏差"], resources: ["sklearn-tuning", "mlcc"],
    body: lessonBody({
      lead: "调参不是不断碰测试集直到分数变高，而是预先定义搜索空间，在训练集内部验证，最后一次性评估测试集。",
      concepts: [["参数", "训练过程从数据学得"], ["超参数", "训练前设定的选择"], ["正则化", "限制复杂度以改善泛化"], ["nested logic", "选择与最终评估分离"]],
      sections: [
        ["先问调哪个变量", `<p>每个候选值都应对应假设，例如更强正则化能否缩小训练—验证差距。没有理由的大网格会放大偶然性并消耗计算。</p>`],
        ["搜索结果不是最终性能", `<p>交叉验证中的最佳分数带有选择偏差。锁定配置后，才在从未参与选择的测试集上报告一次结果。</p>`],
        ["记录完整搜索", `<p>保留所有候选、每折分数、训练时间和随机种子，不只保存冠军。接近的方案应优先选择更简单、更稳定的方案。</p>`]
      ],
      code: R`param_grid = {
    "model__C": [0.1, 1.0, 10.0],
    "model__class_weight": [None, "balanced"],
}
# GridSearchCV(pipeline, param_grid, scoring="f1", cv=cv)`,
      pitfalls: ["用测试集选择 C", "同时改十个变量后无法解释", "只报告最优均值不报告折间波动"],
      task: "为上一课的分类 Pipeline 设计一个不超过 8 组候选的搜索，并写出每个维度的假设。",
      acceptance: ["测试集不参与搜索", "搜索空间有理由且规模可控", "保存每折结果和运行配置"]
    })
  },
  {
    id: "baselines-trees", number: "30", module: "machine-learning", title: "Baseline、决策树与集成模型", kicker: "第四单元 · 先赢过简单方法", duration: "95 分钟",
    summary: "建立多数类、线性模型和树模型三层 baseline，判断复杂模型是否真的带来价值。",
    goals: ["建立朴素基线", "理解树的切分", "公平比较模型"], resources: ["sklearn-start", "mlcc"],
    body: lessonBody({
      lead: "没有 baseline 的高分没有参照物。先比较最简单可行方法，再逐步增加非线性和集成复杂度。",
      concepts: [["Dummy baseline", "用常数或频率给出最低参照"], ["线性模型", "稳定且易解释的强基线"], ["决策树", "按特征阈值递归切分"], ["集成", "组合多棵树降低方差或偏差"]],
      sections: [
        ["三层比较", `<ol><li>DummyClassifier 检查类别不平衡。</li><li>逻辑回归验证线性边界。</li><li>随机森林或梯度提升测试非线性收益。</li></ol>`],
        ["统一数据与指标", `<p>所有候选必须使用完全相同的切分、预处理和评分函数。否则模型差异与实验条件差异混在一起。</p>`],
        ["复杂度要付费", `<p>除主指标外记录训练时间、推理时间、模型大小和可解释性。小幅分数提升不一定值得更高维护成本。</p>`]
      ],
      code: R`models = {
    "dummy": DummyClassifier(strategy="most_frequent"),
    "linear": LogisticRegression(max_iter=2000),
    "forest": RandomForestClassifier(n_estimators=200, random_state=42),
}`,
      pitfalls: ["没有 Dummy baseline", "给不同模型使用不同数据切分", "只凭单次分数宣布胜者"],
      task: "在同一交叉验证器中比较三层 baseline，生成包含均值、标准差、训练时间的表。",
      acceptance: ["所有模型共享切分", "结果表含波动和成本", "能解释复杂模型是否值得"]
    })
  },
  {
    id: "error-analysis", number: "31", module: "machine-learning", title: "错误分析与数据切片", kicker: "第四单元 · 从分数回到样本", duration: "90 分钟",
    summary: "抽查假阳性与假阴性，按群体、来源和难度切片，决定下一次实验。",
    goals: ["建立错误表", "比较切片指标", "从错误提出假设"], resources: ["sklearn-start", "neurips-checklist"],
    body: lessonBody({
      lead: "总分只告诉你模型平均表现，错误分析才告诉你下一步该改数据、特征、阈值还是模型。",
      concepts: [["错误样本", "预测与真实标签不一致"], ["slice", "按有意义属性划分子集"], ["标签噪声", "真实标签本身可能不可靠"], ["行动假设", "错误模式对应的可检验改动"]],
      sections: [
        ["先保存逐样本预测", `<p>至少保存 sample_id、真实标签、预测、概率、数据来源和关键属性。没有逐样本表就无法可靠复盘。</p>`],
        ["定量与定性结合", `<p>先按切片计算指标定位异常，再人工抽查代表样本。只看几个故事容易被极端案例误导，只看均值又会掩盖系统性失败。</p>`],
        ["一次只验证一个修复", `<p>将每类错误转成假设，例如短文本召回差可能来自信息不足。下一轮只改变一个相关变量，并预先写出预期。</p>`]
      ],
      code: R`errors = predictions.query("y_true != y_pred")
slice_report = predictions.groupby("source").apply(score_slice)
errors.to_csv("results/error_cases.csv", index=False)`,
      pitfalls: ["只展示最好与最差各一例", "发现标签错却偷偷修改不留版本", "错误分析后同时改数据和模型"],
      task: "对至少 50 个错误样本编码错误类型，并生成两个有业务含义的数据切片指标。",
      acceptance: ["错误表可追溯到 sample_id", "错误类型有计数", "下一实验来自最主要错误模式"]
    })
  },
  {
    id: "ml-stage-project", number: "32", module: "machine-learning", title: "阶段项目：无泄漏的机器学习基线", kicker: "第四单元 · 解锁 PyTorch 的关卡", duration: "1–2 周",
    summary: "把问题定义、数据、Pipeline、交叉验证、调参与错误分析组装成第一个完整项目。",
    goals: ["完成端到端项目", "锁定独立测试集", "形成可复现报告"], resources: ["sklearn-start", "sklearn-tuning", "github-flow"],
    body: lessonBody({
      lead: "只有完成这个关卡，才进入深度学习；否则神经网络只会把尚未解决的数据和评估问题隐藏得更深。",
      concepts: [["baseline", "简单且可重复的参照"], ["frozen test", "直到方案锁定才打开"], ["model card", "用途、数据、指标与限制"], ["reproduction", "新环境按 README 可运行"]],
      sections: [
        ["交付目录", `<pre><code>ml-baseline/
├─ README.md
├─ data/README.md
├─ src/train.py
├─ src/evaluate.py
├─ configs/baseline.yaml
├─ results/cv_results.csv
├─ results/test_metrics.json
└─ results/error_cases.csv</code></pre>`],
        ["执行顺序", `<ol><li>冻结问题、主指标和测试集。</li><li>建立 Dummy 与线性 baseline。</li><li>在训练集内部完成预处理和交叉验证。</li><li>只做一轮有理由的调参。</li><li>锁定方案后运行测试集并做错误分析。</li></ol>`],
        ["解锁标准", `<p>测试集未被用于特征选择或调参；README 能从新环境复现主结果；报告同时写出失败案例和不能得出的结论。</p>`]
      ],
      pitfalls: ["先看测试集再返回调参", "没有简单 baseline", "Notebook 单元格依赖隐藏状态"],
      task: "完成一个表格分类或回归项目，提交仓库、结果表、错误表和一页模型卡。",
      acceptance: ["测试集只使用一次", "代码在新环境可运行", "至少比较三层 baseline", "明确限制与下一步"]
    })
  },
  {
    id: "torch-transforms", number: "35", module: "deep-learning", title: "Transforms、批次与数据管线", kicker: "第五单元 · 数据进入网络", duration: "85 分钟",
    summary: "把确定性预处理、训练增强和标签变换分开，并检查一个 batch 的范围与形状。",
    goals: ["组合 transforms", "区分训练和验证变换", "检查 batch"], resources: ["pytorch-transforms", "pytorch-basics"],
    body: lessonBody({
      lead: "训练和验证可以共享必要预处理，但随机增强只属于训练集；先可视化一个 batch，再开始训练。",
      concepts: [["transform", "对单个样本执行可组合变换"], ["augmentation", "只在训练阶段制造合理变化"], ["batch", "一次送入模型的样本集合"], ["normalization", "按约定缩放输入分布"]],
      sections: [
        ["训练与验证管线分离", `<p>训练管线可以随机裁剪、翻转或扰动；验证管线必须稳定，否则每次评估对象都不同。两者必须保持尺寸、通道和归一化约定一致。</p>`],
        ["检查数值范围", `<p>图像是 0–255、0–1 还是标准化后的值？文本 padding 使用什么 id？标签是否从 0 开始？这些接口错误比模型结构错误更常见。</p>`],
        ["数据增强也需要假设", `<p>水平翻转对自然图像可能合理，对文字和医学左右侧图像可能改变语义。每一种增强都要解释为何保持标签不变。</p>`]
      ],
      code: R`xb, yb = next(iter(train_loader))
print("input", xb.shape, xb.dtype, xb.min().item(), xb.max().item())
print("label", yb.shape, yb.dtype, yb.unique())`,
      pitfalls: ["验证集也使用随机增强", "归一化参数与预训练模型不一致", "不看样本就直接训练"],
      task: "保存训练与验证各 16 个样本的网格图，并打印 shape、dtype、范围和标签分布。",
      acceptance: ["训练/验证变换差异明确", "batch 接口有断言", "增强不会破坏标签语义"]
    })
  },
  {
    id: "optimization-debugging", number: "39", module: "deep-learning", title: "优化器、学习率与训练调试", kicker: "第五单元 · 先正确再加速", duration: "100 分钟",
    summary: "用小批次过拟合、梯度范数和学习率实验定位训练不动、发散与 NaN。",
    goals: ["完成小批次过拟合", "诊断梯度", "比较学习率"], resources: ["pytorch-basics", "d2l"],
    body: lessonBody({
      lead: "模型在完整数据上学不好时，不要立刻换架构；先证明它能把一个很小的 batch 拟合到接近零损失。",
      concepts: [["sanity check", "用最小问题验证训练链路"], ["gradient norm", "监控梯度消失或爆炸"], ["learning rate", "每次更新的步长"], ["NaN", "非法数值传播的报警信号"]],
      sections: [
        ["四步调试顺序", `<ol><li>固定随机种子和一个 batch。</li><li>关闭增强与正则化。</li><li>尝试过拟合到接近 100% 训练准确率。</li><li>再逐项恢复完整设置。</li></ol>`],
        ["记录而不是盯终端", `<p>每轮保存 loss、learning rate、梯度范数和参数范数。出现 NaN 时定位第一个异常批次和层，而不是简单降低学习率后继续。</p>`],
        ["学习率是第一超参数", `<p>先比较几个数量级，例如 1e-2、1e-3、1e-4。曲线应使用相同初始化、数据顺序和训练预算。</p>`]
      ],
      code: R`total_norm = torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
if not torch.isfinite(total_norm):
    raise RuntimeError("non-finite gradient")`,
      pitfalls: ["训练失败就增加模型规模", "一次改变优化器、学习率和 batch size", "NaN 后继续记录无效指标"],
      task: "让模型过拟合 32 个样本，并比较三个学习率的损失曲线和梯度范数。",
      acceptance: ["小批次训练损失接近零", "每次只改变学习率", "能解释发散或收敛差异"]
    })
  },
  {
    id: "reproducible-training", number: "40", module: "deep-learning", title: "设备、随机性、显存与可复现训练", kicker: "第五单元 · 记录运行条件", duration: "90 分钟",
    summary: "固定能固定的随机源，记录不能固定的环境差异，并估算训练资源。",
    goals: ["设置随机种子", "记录设备环境", "处理 OOM"], resources: ["pytorch-repro", "pytorch-performance"],
    body: lessonBody({
      lead: "同一种子不保证跨平台逐位相同；可复现的关键是完整记录代码、数据、配置、库版本和硬件。",
      concepts: [["seed", "控制部分伪随机序列"], ["determinism", "用确定性实现换取可重复性"], ["OOM", "显存不足而非模型一定错误"], ["environment", "软件与硬件运行条件"]],
      sections: [
        ["建立运行清单", `<p>保存 Git commit、Python/PyTorch/CUDA 版本、GPU 型号、数据版本、配置文件和 seed。每个结果目录都应携带这些元数据。</p>`],
        ["显存从 batch 开始调", `<p>出现 OOM 时先减小 batch size 或序列长度，再考虑梯度累积、混合精度和 checkpointing。每个改动都可能影响数值与速度。</p>`],
        ["重复运行", `<p>至少用三个种子报告均值和标准差。完全相同的输出可能说明随机性被固定，也可能说明数据顺序没有真正变化，需要检查。</p>`]
      ],
      code: R`torch.manual_seed(42)
if torch.cuda.is_available():
    torch.cuda.manual_seed_all(42)
print(torch.__version__)
print(torch.cuda.get_device_name(0) if torch.cuda.is_available() else "cpu")`,
      pitfalls: ["写了 seed 就声称完全可复现", "只保存模型文件不保存配置", "OOM 后直接换更大的云主机"],
      task: "连续运行三个种子，保存环境快照、训练时长、峰值显存和验证指标。",
      acceptance: ["结果能追溯到 commit 与配置", "报告均值和标准差", "写明仍可能存在的不确定来源"]
    })
  },
  {
    id: "dl-stage-project", number: "41", module: "deep-learning", title: "阶段项目：可恢复的 PyTorch 训练系统", kicker: "第五单元 · 解锁架构课的关卡", duration: "1–2 周",
    summary: "完成 FashionMNIST 或同规模任务，证明训练、验证、恢复和独立推理全部可用。",
    goals: ["组织训练工程", "恢复 checkpoint", "报告多种子结果"], resources: ["pytorch-basics", "pytorch-repro", "github-flow"],
    body: lessonBody({
      lead: "通过条件不是达到某个神奇分数，而是训练链路正确、结果可恢复、运行条件完整、失败可解释。",
      sections: [
        ["必须实现的命令", `<pre><code>python train.py --config configs/baseline.yaml
python evaluate.py --checkpoint checkpoints/best.pt
python predict.py --input assets/example.png</code></pre>`],
        ["必须保留的证据", `<p>训练与验证曲线、最佳 checkpoint、三个种子的结果表、混淆矩阵、至少 20 个错误样本、环境快照和运行命令。</p>`],
        ["进入架构课之前", `<p>你应该能解释 tensor shape、何时调用 train/eval、为什么要 zero_grad、checkpoint 中有什么，以及如何确认恢复后的输出一致。</p>`]
      ],
      pitfalls: ["只能在 Notebook 隐藏状态下运行", "保存 checkpoint 却没有加载测试", "只跑一个种子"],
      task: "提交一个可从空目录安装、训练、恢复和推理的 PyTorch 项目。",
      acceptance: ["四条核心命令可运行", "checkpoint 恢复输出一致", "三个种子有汇总", "包含错误分析与限制"]
    })
  },
  {
    id: "cnn-project", number: "43", module: "architecture", title: "CNN 实验：感受野、增强与消融", kicker: "第六单元 · 图像架构实践", duration: "105 分钟",
    summary: "在固定训练预算下比较 MLP、CNN、是否增强和不同卷积深度。",
    goals: ["设计架构对照", "计算感受野", "做最小消融"], resources: ["cs231n", "d2l"],
    body: lessonBody({
      lead: "学习 CNN 不止是会调用 Conv2d，而是能解释局部连接、权重共享和空间归纳偏置带来的差异。",
      sections: [
        ["固定实验预算", `<p>MLP 与 CNN 使用相同数据切分、训练轮数和主指标。参数量不必完全相同，但必须报告，避免把容量差异误认为架构优势。</p>`],
        ["只做三个对照", `<ol><li>MLP vs CNN。</li><li>CNN 无增强 vs 有增强。</li><li>两层卷积 vs 三层卷积。</li></ol>`],
        ["看错在哪里", `<p>按类别查看混淆矩阵，并可视化错误图像。检查增强是否改善某些变化，却伤害了文字方向或细粒度特征。</p>`]
      ],
      code: R`def count_parameters(model):
    return sum(p.numel() for p in model.parameters() if p.requires_grad)

print("trainable parameters:", count_parameters(model))`,
      pitfalls: ["每个模型使用不同训练时长", "只比较最好的一次运行", "增加增强同时增加网络深度"],
      task: "完成三组对照并写一页结论，指出哪项收益来自架构，哪项来自增强。",
      acceptance: ["训练预算公平", "参数量和波动已报告", "有逐类别错误分析"]
    })
  },
  {
    id: "transformer-block-project", number: "46", module: "architecture", title: "阶段项目：从张量形状组装 Transformer block", kicker: "第六单元 · 解锁 LLM 的关卡", duration: "1 周",
    summary: "亲手连接 embedding、位置编码、多头注意力、残差、归一化与前馈网络。",
    goals: ["跟踪张量形状", "实现因果 mask", "完成组件消融"], resources: ["zero-to-hero", "cs224n", "d2l"],
    body: lessonBody({
      lead: "在调用大型预训练模型之前，先让一个小 Transformer block 通过形状、mask、梯度和过拟合测试。",
      concepts: [["residual", "让子层学习增量并改善梯度传播"], ["LayerNorm", "按特征维归一化"], ["FFN", "对每个 token 独立的非线性变换"], ["causal mask", "阻止看到未来 token"]],
      sections: [
        ["四类测试", `<ul><li>输入输出 shape 相同。</li><li>未来注意力权重为零。</li><li>所有可训练参数获得有限梯度。</li><li>小序列数据可以被过拟合。</li></ul>`],
        ["最小消融", `<p>分别移除位置编码、残差或因果 mask，观察训练和验证的变化。每次只移除一项，其他设置固定。</p>`],
        ["通过后再使用预训练模型", `<p>你不需要从零训练 LLM，但必须能解释 token 序列如何经过 block，以及推理时为什么需要 attention mask。</p>`]
      ],
      code: R`x = token_embedding(input_ids) + position_embedding(position_ids)
x = x + self_attention(layer_norm_1(x), attention_mask)
x = x + feed_forward(layer_norm_2(x))`,
      pitfalls: ["mask 方向写反", "多头拆分后维度排列错误", "只看能运行不检查未来泄漏"],
      task: "实现一个小 Transformer block，写四个测试并完成一项组件消融。",
      acceptance: ["形状与 mask 测试通过", "小数据可过拟合", "消融只有一个变量", "能口头解释前向路径"]
    })
  },
  {
    id: "tokenization-context", number: "47", module: "llm", title: "Tokenization、词表与上下文长度", kicker: "第七单元 · LLM 输入接口", duration: "90 分钟",
    summary: "理解文本如何变成 input_ids，以及截断、padding、特殊 token 与成本的关系。",
    goals: ["检查 tokenizer 输出", "正确截断与 padding", "估算 token 成本"], resources: ["hf-tokenizers", "hf-course"],
    body: lessonBody({
      lead: "LLM 不直接读取字符串。tokenizer 的词表、规范化和截断策略共同决定模型真正看到的输入。",
      concepts: [["vocabulary", "token 与整数 id 的映射"], ["special token", "表示开始、结束、padding 等控制信息"], ["attention mask", "区分真实 token 与 padding"], ["context window", "一次可处理的 token 上限"]],
      sections: [
        ["先观察再训练", `<p>对中文、英文、数字、代码、空格和罕见字符分别 tokenize，打印 token、id 和长度。不同 tokenizer 的切分与成本可能差异很大。</p>`],
        ["截断是一种信息损失", `<p>不要只设置 truncation=True。统计被截断比例，检查关键信息是否常在尾部，并决定 head、tail 或滑窗策略。</p>`],
        ["padding 与 batch", `<p>动态 padding 通常比全局最大长度节省计算。分类模型还要确认 pooling 使用的位置和 padding side 与模型约定一致。</p>`]
      ],
      code: R`encoded = tokenizer(
    texts,
    padding=True,
    truncation=True,
    max_length=128,
    return_tensors="pt",
)
print(encoded["input_ids"].shape)
print(encoded["attention_mask"].sum(dim=1))`,
      pitfalls: ["忽略被截断样本比例", "不同模型混用 tokenizer", "把字符数当 token 数"],
      task: "用同一批中英混合文本比较两个 tokenizer，生成长度分布和截断报告。",
      acceptance: ["能还原 token 文本", "报告截断比例", "说明 max_length 的选择依据"]
    })
  },
  {
    id: "pretrained-models", number: "48", module: "llm", title: "预训练模型、任务头与模型输出", kicker: "第七单元 · 使用模型之前", duration: "95 分钟",
    summary: "分清 encoder、decoder 与 encoder-decoder，读懂 logits、hidden states 和任务头。",
    goals: ["选择架构类型", "读懂模型输出", "匹配任务头"], resources: ["hf-course", "cs224n"],
    body: lessonBody({
      lead: "模型名称不是能力保证。先根据任务决定需要表征、生成还是序列到序列，再选择相应架构和任务头。",
      concepts: [["encoder", "双向上下文表征，常用于分类与抽取"], ["decoder", "自回归预测后续 token"], ["seq2seq", "编码输入并生成输出"], ["task head", "把隐藏表示映射到具体任务输出"]],
      sections: [
        ["先读 model card", `<p>核对训练数据、语言、许可、上下文长度、推荐任务、已知限制和示例。不能只看参数量或排行榜。</p>`],
        ["输出不等于答案", `<p>分类模型输出 logits，需要 softmax 和标签映射；生成模型输出 token 序列，需要解码策略和停止条件。</p>`],
        ["建立形状表", `<p>记录 input_ids、attention_mask、last_hidden_state 和 logits 的 shape。遇到维度错误时先回到这张表。</p>`]
      ],
      code: R`with torch.no_grad():
    outputs = model(**encoded)
print(type(outputs))
print(outputs.logits.shape)`,
      pitfalls: ["分类任务直接使用生成模型聊天接口", "忽略 id2label 映射", "不看许可就发布模型"],
      task: "为分类、生成和翻译三个任务各选择一种架构类型，并写出输入输出 shape。",
      acceptance: ["架构选择与任务匹配", "读取 model card", "能解释 logits 到预测的过程"]
    })
  },
  {
    id: "inference-prompting", number: "49", module: "llm", title: "推理、解码与提示基线", kicker: "第七单元 · 先评估再改参数", duration: "100 分钟",
    summary: "用固定评测集比较零样本、少样本和解码参数，建立不训练模型的基线。",
    goals: ["设置解码参数", "构造提示基线", "记录推理输出"], resources: ["hf-pipelines", "hf-course"],
    body: lessonBody({
      lead: "在微调之前先证明现成模型的推理基线有多强；提示词、温度和采样策略必须像超参数一样被记录。",
      concepts: [["greedy", "每步选最高概率 token"], ["sampling", "按概率采样以增加多样性"], ["temperature", "调整概率分布尖锐程度"], ["few-shot", "在提示中提供少量示例"]],
      sections: [
        ["固定评测样本", `<p>准备至少 30 个代表问题和期望要点。开发时不能只挑能成功的演示问题。</p>`],
        ["控制生成", `<p>记录模型 revision、system prompt、模板、temperature、top_p、max_new_tokens 和随机种子。确定性任务优先使用低温或 greedy。</p>`],
        ["错误分类", `<p>区分格式错误、拒答、事实错误、指令遗漏和过度生成。只有知道失败类型，才能判断提示改写是否有效。</p>`]
      ],
      code: R`generator = pipeline("text-generation", model=model_name)
result = generator(
    prompt,
    do_sample=False,
    max_new_tokens=80,
    return_full_text=False,
)`,
      pitfalls: ["每个样本临时改提示", "用高温输出做事实评测", "只保存最终回答不保存配置"],
      task: "在固定 30 题上比较 zero-shot 与 two-shot，并编码每条失败类型。",
      acceptance: ["问题集合固定", "所有解码参数已保存", "有逐样本结果和错误统计"]
    })
  },
  {
    id: "llm-evaluation", number: "51", module: "llm", title: "LLM 评测：任务指标、人工规则与成本", kicker: "第七单元 · 不靠主观挑例子", duration: "105 分钟",
    summary: "按任务定义可重复评分，分开质量、延迟、成本、安全与失败类型。",
    goals: ["建立评测集", "设计评分规则", "报告成本与延迟"], resources: ["hf-course", "neurips-checklist"],
    body: lessonBody({
      lead: "LLM 输出开放，不代表评测可以随意。先定义问题集合、参考要点和评分规则，再比较提示、模型或微调。",
      concepts: [["exact metric", "可由程序确定的任务指标"], ["rubric", "人工或模型评审的明确标准"], ["pairwise", "对同一输入比较两个输出"], ["cost", "token、延迟与硬件开销"]],
      sections: [
        ["分层评测", `<p>能程序评分的格式、分类和抽取先用确定指标；开放问答再使用要点覆盖、人工盲评或经过校准的 judge。</p>`],
        ["校准评审者", `<p>如果使用 LLM-as-a-judge，必须用人工标注子集检查一致性，测试位置偏差和措辞偏差，并保留原始判定理由。</p>`],
        ["质量不是唯一维度", `<p>记录 p50/p95 延迟、输入输出 token、失败率、拒答率与单位样本成本。更大的模型未必是最佳系统。</p>`]
      ],
      code: R`record = {
    "id": sample_id,
    "prompt_version": "v3",
    "answer": answer,
    "task_score": score,
    "latency_ms": latency_ms,
    "input_tokens": input_tokens,
    "output_tokens": output_tokens,
}`,
      pitfalls: ["评测时继续修改提示", "把模型裁判分数当绝对真值", "不报告失败请求与成本"],
      task: "建立 50 条评测集，定义至少两个质量指标和两个运行指标，比较两个基线。",
      acceptance: ["评测集版本固定", "评分规则可复查", "报告延迟与 token", "包含人工抽查"]
    })
  },
  {
    id: "llm-stage-project", number: "52", module: "llm", title: "阶段项目：非 RAG 文本任务 baseline", kicker: "第七单元 · 解锁 RAG 的关卡", duration: "1 周",
    summary: "先完成一个不依赖检索的分类、抽取或生成 baseline，再判断是否真的需要 RAG。",
    goals: ["建立非 RAG 基线", "比较提示与微调", "做需求判断"], resources: ["hf-pipelines", "hf-finetune", "hf-course"],
    body: lessonBody({
      lead: "RAG 不是所有文本任务的默认答案。分类、抽取、格式转换和稳定风格任务往往先用提示或微调解决。",
      sections: [
        ["选择一个封闭任务", `<p>建议从情感分类、主题分类、命名实体抽取、短摘要或结构化信息提取中选择。此阶段不连接外部知识库。</p>`],
        ["比较三种基线", `<ol><li>规则或传统模型。</li><li>预训练模型 zero/few-shot。</li><li>小规模微调或 LoRA 方案设计。</li></ol>`],
        ["什么时候才需要 RAG", `<p>只有当任务依赖模型训练后新增、私有、可引用或频繁变化的知识，并且检索能提供证据时，才进入下一阶段。</p>`]
      ],
      pitfalls: ["把任何文本任务都改成知识库问答", "没有固定评测集", "微调与提示使用不同样本"],
      task: "完成一个 50 条以上评测集的非 RAG 文本任务，比较至少两个基线。",
      acceptance: ["任务不依赖外部知识库", "评测集固定且可复查", "说明提示、微调或无需训练的选择", "明确是否需要 RAG"]
    })
  },
  {
    id: "retrieval-basics", number: "53", module: "rag", title: "RAG 全景与检索评测集", kicker: "第八单元 · 先检索后生成", duration: "95 分钟",
    summary: "拆开 ingestion、retrieval、reranking 和 generation，并先构造问题—相关文档评测集。",
    goals: ["画出 RAG 数据流", "建立检索金标准", "定义 Recall@k"], resources: ["hf-advanced-rag", "ms-rag-eval"],
    body: lessonBody({
      lead: "RAG 的第一步不是调用聊天模型，而是建立一个能独立测量的搜索系统；检索不到证据时，生成模型无从补救。",
      concepts: [["corpus", "可检索的文档集合"], ["query", "用户信息需求的表达"], ["relevance", "文档是否包含回答证据"], ["Recall@k", "前 k 条是否覆盖相关证据"]],
      sections: [
        ["四段流水线", `<div class="flow"><span>文档处理</span><b>→</b><span>候选召回</span><b>→</b><span>重排</span><b>→</b><span>带证据生成</span></div>`],
        ["先做 30–50 个问题", `<p>每个问题标注至少一个支持文档或段落，并包含常见问法、缩写、否定和无法回答样本。不要由当前系统的检索结果反向定义答案。</p>`],
        ["先算检索指标", `<p>记录 Recall@1/3/5、MRR 和无证据问题的拒检表现。生成质量要等检索基线稳定后再评。</p>`]
      ],
      code: R`eval_item = {
    "query_id": "q001",
    "question": "如何重置学习进度？",
    "relevant_doc_ids": ["guide-progress"],
    "answerable": True,
}`,
      pitfalls: ["先接 LLM 再补评测", "只有成功问题没有无法回答样本", "用字符串相似度代替相关性标注"],
      task: "为一个小知识库建立至少 30 条检索评测集，并计算随机或全文扫描基线。",
      acceptance: ["每题有相关文档 id", "包含不可回答问题", "检索指标与生成指标分开"]
    })
  },
  {
    id: "chunking-metadata", number: "54", module: "rag", title: "文档解析、切分与元数据", kicker: "第八单元 · 建索引之前", duration: "105 分钟",
    summary: "保留标题、章节、来源和页码，比较固定长度与结构化切分对召回的影响。",
    goals: ["清洗文档", "设计 chunk", "保留引用元数据"], resources: ["hf-advanced-rag", "hf-rag-eval"],
    body: lessonBody({
      lead: "chunk 不是越大越好。它必须足够完整地承载证据，又足够聚焦地被检索，并且能回到原始来源。",
      concepts: [["parser", "从 PDF/HTML 等提取结构"], ["chunk", "检索与上下文的基本单元"], ["overlap", "相邻块共享的边界内容"], ["metadata", "来源、标题、时间与权限信息"]],
      sections: [
        ["先保留文档结构", `<p>标题、列表、表格和代码块常携带语义。解析后抽样对比原文，避免页眉页脚、乱码和断行污染索引。</p>`],
        ["比较两种切分", `<p>先建立固定 token 长度基线，再尝试按标题或段落递归切分。使用同一评测集比较，而不是凭视觉觉得更自然。</p>`],
        ["引用从这里开始", `<p>每个 chunk 保存 doc_id、chunk_id、source_url、section、page 和版本。生成阶段只能引用这些可追溯字段。</p>`]
      ],
      code: R`chunk = {
    "doc_id": "manual-v2",
    "chunk_id": "manual-v2::progress::003",
    "text": text,
    "section": "学习进度",
    "source": source_url,
    "version": "2026-08-16",
}`,
      pitfalls: ["丢失标题与页码", "只看平均 chunk 长度", "修改文档后不更新版本"],
      task: "对同一语料构造两套切分索引，报告 chunk 数、长度分布、重复率和 Recall@k。",
      acceptance: ["chunk 可回到原文", "解析结果经过抽样", "比较使用同一评测集"]
    })
  },
  {
    id: "sparse-retrieval", number: "55", module: "rag", title: "稀疏检索：倒排索引与 BM25 基线", kicker: "第八单元 · 不要跳过关键词检索", duration: "95 分钟",
    summary: "理解词项匹配、文档频率和长度归一化，先建立便宜、快速、可解释的 BM25 基线。",
    goals: ["理解倒排索引", "运行 BM25", "分析关键词失败"], resources: ["hf-advanced-rag", "ms-rag-eval"],
    body: lessonBody({
      lead: "稀疏检索对专有名词、错误码、型号和精确短语非常强；没有 BM25 基线，无法判断向量检索是否真的更好。",
      concepts: [["term", "经过分词后的检索单位"], ["inverted index", "从词项映射到文档"], ["IDF", "降低常见词权重"], ["BM25", "考虑词频与文档长度的相关性函数"]],
      sections: [
        ["中文分词与字段", `<p>中文可使用字符、词或子词策略。标题、正文和标签可以给予不同权重，任何分词与停用词处理都要版本化。</p>`],
        ["检查 top-k", `<p>对每个失败问题打印前 5 个结果、匹配词和分数。错误可能来自同义表达、分词、chunk 边界或语料缺失。</p>`],
        ["建立可解释报告", `<p>记录哪些问题 BM25 成功、哪些因语义改写失败。这将决定后续稠密检索与混合策略的价值。</p>`]
      ],
      code: R`tokenized_corpus = [tokenize(doc["text"]) for doc in chunks]
bm25 = BM25Okapi(tokenized_corpus)
scores = bm25.get_scores(tokenize(question))
top_ids = np.argsort(scores)[::-1][:5]`,
      pitfalls: ["看到 RAG 就直接上向量数据库", "不保存分词版本", "只展示一个成功搜索"],
      task: "在固定评测集上运行 BM25，保存逐题 top-5 和失败类型。",
      acceptance: ["有 Recall@1/3/5", "失败可追溯到检索结果", "指出 BM25 的强项与盲点"]
    })
  },
  {
    id: "dense-retrieval", number: "56", module: "rag", title: "Embedding、相似度与向量检索", kicker: "第八单元 · 在基线之后增加语义", duration: "110 分钟",
    summary: "选择与语言和领域匹配的 embedding，规范化向量并与 BM25 公平比较。",
    goals: ["生成 embedding", "选择相似度", "评估向量检索"], resources: ["hf-advanced-rag", "mlcc"],
    body: lessonBody({
      lead: "embedding 把 query 和 chunk 映射到向量空间，但相似不等于包含答案；必须用相关性标注评估。",
      concepts: [["embedding", "文本的稠密向量表示"], ["cosine", "比较向量方向相似度"], ["bi-encoder", "分别编码 query 与文档"], ["vector index", "近似查找相似向量"]],
      sections: [
        ["先选择模型", `<p>核对支持语言、最大长度、是否需要 query/document 前缀、许可和评测任务。不要因为维度更高就认为更好。</p>`],
        ["验证实现", `<p>对同一文本的向量相似度应高；归一化设置必须与索引距离一致；query 与 document 使用模型要求的不同前缀。</p>`],
        ["公平比较 BM25", `<p>使用相同 chunks、top-k 和评测集。报告逐题胜负，而不只报告平均 Recall@5。</p>`]
      ],
      code: R`doc_vectors = encoder.encode(doc_texts, normalize_embeddings=True)
query_vector = encoder.encode([question], normalize_embeddings=True)
scores = query_vector @ doc_vectors.T
top_ids = scores[0].argsort()[::-1][:5]`,
      pitfalls: ["query/document 前缀写反", "余弦与点积配置不一致", "embedding 模型截断长 chunk 却不检查"],
      task: "在同一评测集上比较 BM25 与一个 embedding 模型，列出各自独有的成功问题。",
      acceptance: ["实现有相似度 sanity check", "与 BM25 条件一致", "报告逐题差异和成本"]
    })
  },
  {
    id: "reranking-hybrid", number: "57", module: "rag", title: "混合召回、重排与 top-k", kicker: "第八单元 · 先广召回再精排序", duration: "110 分钟",
    summary: "合并稀疏和稠密候选，用重排器提升前列精度，并控制延迟与上下文预算。",
    goals: ["合并候选", "使用重排", "选择 top-k"], resources: ["hf-advanced-rag", "hf-rag-eval"],
    body: lessonBody({
      lead: "召回阶段追求别漏掉证据，重排阶段追求把证据放到前面；两者目标和成本不同。",
      concepts: [["hybrid", "结合关键词与向量候选"], ["fusion", "合并不同排名"], ["cross-encoder", "联合读取 query 与文档后打分"], ["top-k", "保留候选或上下文的数量"]],
      sections: [
        ["先合并去重", `<p>BM25 与 dense 各取 top-N，通过 Reciprocal Rank Fusion 或归一化分数合并，并按 chunk_id 去重。</p>`],
        ["重排不是免费", `<p>cross-encoder 通常更准但更慢，只对较小候选集运行。记录 Recall@k、MRR、p95 延迟和每查询成本。</p>`],
        ["top-k 用评测决定", `<p>检索更多提高覆盖概率，也会增加噪声和上下文长度。分别测候选 top-N 与最终 context top-k。</p>`]
      ],
      code: R`def rrf(rankings, k=60):
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking, start=1):
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)`,
      pitfalls: ["直接相加不同尺度的分数", "重排全部语料导致极慢", "只看 Recall 不看延迟"],
      task: "比较 BM25、dense、hybrid 和 hybrid+reranker 四组结果。",
      acceptance: ["候选合并可复现", "检索质量与延迟同时报告", "top-k 有实验证据"]
    })
  },
  {
    id: "rag-generation-citations", number: "58", module: "rag", title: "基于证据生成、拒答与引用", kicker: "第八单元 · 最后才接生成模型", duration: "105 分钟",
    summary: "将检索片段连同来源注入提示，要求只基于证据回答并验证引用。",
    goals: ["组织上下文", "实现拒答", "验证引用"], resources: ["hf-advanced-rag", "ms-rag-eval"],
    body: lessonBody({
      lead: "生成器的任务不是展示知道很多，而是忠实使用检索证据；证据不足时应明确拒答。",
      concepts: [["grounding", "回答受提供证据约束"], ["citation", "答案主张指向具体来源"], ["abstention", "证据不足时拒绝回答"], ["context budget", "可提供给模型的 token 配额"]],
      sections: [
        ["上下文有编号", `<p>每个 chunk 使用稳定编号和来源元数据。提示要求每个事实主张带 [S1] 形式引用，并禁止引用不存在的编号。</p>`],
        ["无法回答也是正确行为", `<p>评测集中加入语料外问题。系统应说明知识库中没有足够证据，而不是用模型参数中的常识补齐。</p>`],
        ["程序先验证格式", `<p>解析所有引用 id，检查是否存在、是否支持对应句子。引用存在不代表引用正确，仍需内容级抽查或评估。</p>`]
      ],
      code: R`valid_ids = {chunk["chunk_id"] for chunk in retrieved}
for citation_id in extract_citations(answer):
    assert citation_id in valid_ids, "answer cited an unretrieved source"`,
      pitfalls: ["提示中没有来源编号", "检索失败时让模型自由回答", "只检查有引用不检查引用支持主张"],
      task: "实现带来源编号的回答模板和不可回答策略，保存回答、证据和引用映射。",
      acceptance: ["引用可回到原文", "包含不可回答测试", "不存在虚构引用", "回答与证据同时保存"]
    })
  },
  {
    id: "rag-evaluation", number: "59", module: "rag", title: "RAG 分段评测与错误归因", kicker: "第八单元 · 解锁科研阶段的关卡", duration: "120 分钟",
    summary: "分别评估语料、检索、重排和生成，把失败定位到具体组件后再优化。",
    goals: ["分段评估", "归因失败", "设计对照"], resources: ["hf-rag-eval", "ms-rag-eval", "hf-advanced-rag"],
    body: lessonBody({
      lead: "端到端正确率下降时，先问证据是否存在、是否被召回、是否排进上下文、生成是否忠实，而不是整体换模型。",
      concepts: [["corpus coverage", "知识库是否包含答案证据"], ["retrieval failure", "证据存在但未召回"], ["ranking failure", "召回但未进入最终上下文"], ["generation failure", "上下文充分但回答错误"]],
      sections: [
        ["四层错误标签", `<ol><li>语料缺失。</li><li>召回失败。</li><li>重排或 top-k 失败。</li><li>生成或引用失败。</li></ol>`],
        ["最小实验矩阵", `<p>固定 reader 比较检索策略；固定检索结果比较 reader 或提示。不要同时改变 chunk、embedding、reranker 和模型。</p>`],
        ["建立发布门槛", `<p>为 Recall@5、引用有效率、groundedness、不可回答准确率和 p95 延迟设定最低门槛，并保留回归测试。</p>`]
      ],
      code: R`failure = classify_failure(
    gold_doc_ids=item["relevant_doc_ids"],
    retrieved_ids=result["retrieved_ids"],
    context_ids=result["context_ids"],
    answer=result["answer"],
)
ledger.append({"query_id": item["query_id"], "failure": failure})`,
      pitfalls: ["端到端分数低就换更大 LLM", "检索和生成一起改", "评测集与索引文档来自同一自动生成流程但不抽查"],
      task: "在至少 50 题上完成四层错误归因，比较一个单变量改动并写出结论。",
      acceptance: ["检索与生成指标分开", "每个失败有组件标签", "对照只改变一个变量", "建立回归门槛"]
    })
  },
  {
    id: "research-question", number: "60", module: "research", title: "研究问题、假设与可证伪结论", kicker: "第九单元 · 先有问题再读论文", duration: "100 分钟",
    summary: "把热门方向压缩成能用数据和实验回答的问题，并预先写出支持与反对证据。",
    goals: ["提出可测问题", "写出假设", "限定结论范围"], resources: ["neurips-checklist", "mlrc"],
    body: lessonBody({
      lead: "研究不是把新模型跑在一个数据集上，而是提出清晰问题、控制替代解释，并允许结果推翻自己的假设。",
      concepts: [["question", "实验最终要回答的具体疑问"], ["hypothesis", "可由观察支持或反驳的预期"], ["confound", "与目标变量一起变化的替代解释"], ["scope", "结论适用的数据、任务与条件"]],
      sections: [
        ["从主题缩小", `<p>“研究 RAG”太宽。“在固定 reader 与语料时，混合检索是否提高中文缩写问题的 Recall@5？”才可执行。</p>`],
        ["预先写两种结果", `<p>写出什么结果支持假设，什么结果反对假设，以及即使显著也不能推出什么。这能减少事后合理化。</p>`],
        ["列出替代解释", `<p>性能差异可能来自参数量、训练数据、推理预算、切分质量或随机波动。实验设计要逐项控制或明确承认。</p>`]
      ],
      code: R`research_question = {
    "population": "中文技术文档问答",
    "intervention": "hybrid retrieval",
    "comparison": "BM25",
    "outcome": "Recall@5",
    "controls": ["same chunks", "same top_k", "same queries"],
}`,
      pitfalls: ["先跑完结果再写假设", "把指标提高等同于现实价值", "问题同时包含多个不可分离改动"],
      task: "写一页研究预注册：问题、假设、主要指标、对照、排除条件、支持与反对结果。",
      acceptance: ["问题能由一次实验回答", "存在可反驳结果", "控制至少三个替代解释", "结论边界明确"]
    })
  }
];

lessons.push(...expandedLessons);
lessons.sort((a, b) => Number(a.number) - Number(b.number));

const pretrainLesson = lessons.find(lesson => lesson.id === "pretrain-finetune");
Object.assign(pretrainLesson, {
  number: "50",
  module: "llm",
  title: "预训练、全量微调与 LoRA",
  kicker: "第七单元 · 参数如何改变",
  duration: "110 分钟",
  summary: "分清从零预训练、继续预训练、任务微调和参数高效微调；本课不进入 RAG。",
  goals: ["区分训练范式", "估算训练成本", "设计公平微调实验"],
  resources: ["hf-finetune", "hf-course", "cs224n"],
  body: lessonBody({
    lead: "预训练、微调和 LoRA 都会改变模型参数；RAG 不改变参数而是在推理时提供外部证据，因此必须放到后续独立阶段。",
    concepts: [["pretraining", "在大规模语料上学习通用表示或下一个 token"], ["fine-tuning", "用任务数据继续更新全部或部分参数"], ["LoRA", "训练低秩适配器而冻结主体参数"], ["inference", "参数固定时生成预测"]],
    sections: [
      ["先问是否需要训练", `<p>已有模型加清晰提示就能达到目标时，不应立即微调。微调适合稳定任务格式、行为或领域分布，但需要数据、算力和回归评测。</p>`],
      ["公平比较", `<p>zero-shot、few-shot、全量微调与 LoRA 必须使用相同评测集和指标。记录可训练参数量、显存、训练时间与推理成本。</p>`],
      ["数据边界", `<p>划分训练、验证和测试，清理重复与近重复样本，记录许可和隐私。测试样本进入指令数据会造成不可见泄漏。</p>`],
      ["本阶段明确不学 RAG", `<blockquote>先完成 tokenizer、预训练模型推理、微调边界和 LLM 评测。只有通过第 52 课的非 RAG baseline，才进入第 53 课检索基础。</blockquote>`]
    ],
    code: R`trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
total = sum(p.numel() for p in model.parameters())
print("trainable ratio:", trainable / total)`,
    pitfalls: ["把 RAG 称为微调", "没有推理基线就训练", "训练集与测试集存在近重复", "只比较分数不比较成本"],
    task: "为一个文本任务写出 prompt baseline、全量微调和 LoRA 的实验表，但只选择一种训练方案实际运行。",
    acceptance: ["三种方法边界清楚", "评测集相同", "记录可训练参数和成本", "本课不连接知识库"]
  })
});

for (let index = 0; index < lessons.length; index += 1) {
  const lesson = lessons[index];
  lesson.sequenceIndex = index;
  lesson.prerequisiteId = index === 0 ? null : lessons[index - 1].id;
  lesson.nextId = index === lessons.length - 1 ? null : lessons[index + 1].id;
  const stageName = {
    foundation: "第一阶段", git: "第二阶段", "data-math": "第三阶段",
    "machine-learning": "第四阶段", "deep-learning": "第五阶段",
    architecture: "第六阶段", llm: "第七阶段", rag: "第八阶段", research: "第九阶段"
  }[lesson.module];
  const focus = lesson.kicker.includes("·") ? lesson.kicker.split("·").slice(1).join("·").trim() : "核心课程";
  lesson.kicker = `${stageName} · ${focus}`;
}

courseVersion.label = "路线 2.0 · 2026.08";
courseVersion.note = "66 课按严格先修关系组织：经典机器学习与过拟合在前，Transformer 和 LLM 居中，RAG 独立成后期专项。";
