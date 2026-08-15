const R = String.raw;

const codeLabs = {
  "setup-windows": {
    title: "确认目录、解释器和脚本位置",
    intro: "每运行一段就停下来读输出，不要一次把全部命令粘贴进去。",
    steps: [
      { lang: "powershell", title: "查看当前位置和文件", note: "先回答“我在哪里、这里有什么”。", code: R`Get-Location
Get-ChildItem

# 路径有空格时保留引号
Set-Location -LiteralPath "E:\ai-study"
Get-Location` },
      { lang: "powershell", title: "确认 Python 解释器", note: "分别显示版本和真正被调用的程序。", code: R`python --version
python -c "import sys; print(sys.executable)"` },
      { lang: "python", title: "运行可修改的小脚本", note: "保存为 system_check.py，再运行 python system_check.py。", code: R`from pathlib import Path
import platform
import sys

print("系统：", platform.platform())
print("Python：", sys.version)
print("脚本：", Path(__file__).resolve())
print("工作目录：", Path.cwd())` }
    ]
  },
  "loops": {
    title: "从普通循环写到早停判断",
    intro: "先运行基础版，再逐行加入 best_loss、stale 和 break。",
    steps: [
      { lang: "python", title: "记录每轮损失", note: "enumerate 同时给出轮次和数值。", code: R`losses = [0.92, 0.71, 0.60, 0.61, 0.63]

for epoch, loss in enumerate(losses, start=1):
    print(f"epoch={epoch:02d}  loss={loss:.3f}")` },
      { lang: "python", title: "加入 patience=2 的早停", note: "连续两轮没有改善时结束。", code: R`best_loss = float("inf")
stale = 0
patience = 2

for epoch, loss in enumerate(losses, start=1):
    if loss < best_loss:
        best_loss = loss
        stale = 0
        print(epoch, "保存最佳结果", best_loss)
    else:
        stale += 1
        print(epoch, "没有改善", stale)

    if stale >= patience:
        print("提前停止于第", epoch, "轮")
        break` }
    ]
  },
  "functions": {
    title: "写出可测试的指标函数",
    intro: "函数先返回结果，显示格式交给调用者处理。",
    steps: [
      { lang: "python", title: "实现 precision 和 recall", note: "分母为零时返回明确结果。", code: R`def safe_divide(numerator, denominator, zero_division=0.0):
    if denominator == 0:
        return zero_division
    return numerator / denominator


def precision(tp, fp):
    """预测为正的样本中，真实为正的比例。"""
    return safe_divide(tp, tp + fp)


def recall(tp, fn):
    """真实正类中，被模型找出的比例。"""
    return safe_divide(tp, tp + fn)` },
      { lang: "python", title: "不用框架也能先做测试", note: "assert 失败时会指出预期没有满足。", code: R`assert precision(8, 2) == 0.8
assert recall(8, 2) == 0.8
assert precision(0, 0) == 0.0
assert recall(0, 0) == 0.0

print("全部测试通过")` }
    ]
  },
  "files-errors": {
    title: "保存配置，再故意制造一次错误",
    intro: "保留原始报错，再写针对性的错误说明。",
    steps: [
      { lang: "python", title: "写入并读取 JSON", note: "ensure_ascii=False 让中文保持可读。", code: R`import json
from pathlib import Path

path = Path("configs") / "baseline.json"
path.parent.mkdir(parents=True, exist_ok=True)

config = {"model": "mlp", "epochs": 10, "seed": 42}
path.write_text(
    json.dumps(config, ensure_ascii=False, indent=2),
    encoding="utf-8",
)

loaded = json.loads(path.read_text(encoding="utf-8"))
print(loaded)` },
      { lang: "python", title: "为路径错误补充上下文", note: "只捕获你知道怎么说明的异常。", code: R`missing = Path("configs") / "missing.json"

try:
    text = missing.read_text(encoding="utf-8")
except FileNotFoundError as error:
    print("当前目录：", Path.cwd())
    print("目标绝对路径：", missing.resolve())
    print("原始错误：", error)` }
    ]
  },
  "env-notebook": {
    title: "建立一个能重新创建的项目环境",
    intro: "在新文件夹里运行，每完成一步都检查提示符和解释器路径。",
    steps: [
      { lang: "powershell", title: "创建并激活虚拟环境", note: "激活后提示符通常会出现 (.venv)。", code: R`python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -c "import sys; print(sys.executable)"` },
      { lang: "powershell", title: "安装并记录依赖", note: "python -m pip 可减少 pip 指向错误解释器的概率。", code: R`python -m pip install --upgrade pip
python -m pip install numpy pandas matplotlib jupyterlab
python -m pip freeze > requirements.txt
Get-Content requirements.txt` },
      { lang: "gitignore", title: "创建 .gitignore", note: "环境、缓存和本地秘密不要进入仓库。", code: R`.venv/
__pycache__/
*.pyc
.env
checkpoints/
data/raw/` }
    ]
  },
  "git-basics": {
    title: "做出三次有含义的提交",
    intro: "每次只改一件事，先 status 和 diff，再选择文件提交。",
    steps: [
      { lang: "powershell", title: "初始化并检查", note: "不要在已有重要目录里练习。", code: R`New-Item -ItemType Directory git-practice
Set-Location git-practice
git init
git status` },
      { lang: "git", title: "精确暂存和提交", note: "把 notes.md 换成你实际创建的文件。", code: R`git status
git diff
git add notes.md
git diff --staged
git commit -m "Add learning goals"
git log --oneline` }
    ]
  },
  "git-workflow": {
    title: "观察同一文件的两个版本",
    intro: "这个实验专门帮助你区分工作区与暂存区。",
    steps: [
      { lang: "git", title: "暂存后继续修改", note: "执行到每一行时都观察输出变化。", code: R`# 第一次修改 notes.md 后
git add notes.md

# 再次修改同一个 notes.md，然后运行
git status
git diff
git diff --staged` },
      { lang: "markdown", title: "写下观察记录", note: "保存为 git-observation.md。", code: R`# Git 状态观察

- git diff 展示：
- git diff --staged 展示：
- 当前工作区版本与暂存版本的差异：
- 我准备提交哪一部分，为什么：` }
    ]
  },
  "git-undo": {
    title: "只练安全的取消暂存",
    intro: "本实验不会丢掉文件内容，但仍应在独立练习仓库完成。",
    steps: [
      { lang: "git", title: "取消一个文件的暂存", note: "最后检查两个文件的内容仍然存在。", code: R`git add notes.md README.md
git status

git restore --staged README.md
git status
git diff README.md
git diff --staged notes.md` },
      { lang: "markdown", title: "撤销前检查清单", note: "遇到真实项目问题时先填写。", code: R`## 撤销前检查

- [ ] 我已运行 git status
- [ ] 我已运行 git diff
- [ ] 未提交内容是否有备份？
- [ ] 改动在工作区、暂存区还是提交历史？
- [ ] 提交是否已经推送并被他人使用？
- [ ] 我理解命令会覆盖什么吗？` }
    ]
  },
  "git-branches": {
    title: "创建功能分支并查看图形历史",
    intro: "一个分支完成一个小目标，合并后再删除。",
    steps: [
      { lang: "git", title: "在功能分支完成修改", note: "提交前确认当前分支名。", code: R`git switch -c feature/add-summary
git branch --show-current

# 修改 README.md 后
git add README.md
git commit -m "Add project summary"` },
      { lang: "git", title: "回到 main 合并", note: "main 是接收改动的分支。", code: R`git switch main
git merge feature/add-summary
git log --oneline --graph --decorate --all
git branch -d feature/add-summary` }
    ]
  },
  "git-remotes": {
    title: "完成一次可审查的 GitHub 更新",
    intro: "远端仓库已存在时，先确认 remote，再推送功能分支。",
    steps: [
      { lang: "git", title: "检查远端和同步状态", note: "先 fetch，再决定是否需要整合。", code: R`git remote -v
git fetch origin
git status -sb
git log --oneline --decorate --graph --all -12` },
      { lang: "git", title: "推送当前功能分支", note: "-u 建立跟踪关系，以后可直接 git push。", code: R`git branch --show-current
git push -u origin feature/add-summary` },
      { lang: "markdown", title: "Pull Request 正文模板", note: "说明变化、原因和验证。", code: R`## 改了什么

- <填写一个具体变化>

## 为什么修改


## 如何验证

- [ ] 本地运行通过
- [ ] 页面或脚本行为已检查

## 已知限制

` }
    ]
  },
  "numpy": {
    title: "把 shape 写在每一步旁边",
    intro: "先预测输出形状，再运行代码核对。",
    steps: [
      { lang: "python", title: "索引、聚合与广播", note: "分别解释每个 axis 的含义。", code: R`import numpy as np

scores = np.array([
    [78, 82, 91],
    [88, 76, 85],
    [92, 90, 89],
    [65, 72, 70],
])  # (学生, 科目) = (4, 3)

student_mean = scores.mean(axis=1)  # (4,)
subject_mean = scores.mean(axis=0)  # (3,)
centered = scores - subject_mean    # (4,3) - (3,) 广播

print(student_mean)
print(subject_mean)
print(centered.shape)` },
      { lang: "python", title: "检查而不是盲目 reshape", note: "assert 会在数据接口错误时尽早停止。", code: R`X = np.random.randn(32, 20)
w = np.random.randn(20, 5)

assert X.ndim == 2
assert X.shape[1] == w.shape[0]

logits = X @ w
assert logits.shape == (32, 5)
print("shape 检查通过：", logits.shape)` }
    ]
  },
  "pandas": {
    title: "生成一份可重复的数据体检报告",
    intro: "把检查代码保存为 inspect_data.py，而不是只在 Notebook 临时运行。",
    steps: [
      { lang: "python", title: "读取后先检查", note: "把 samples.csv 换成你的文件。", code: R`from pathlib import Path
import pandas as pd

path = Path("data") / "samples.csv"
df = pd.read_csv(path)

print("文件：", path.resolve())
print("形状：", df.shape)
print("列名：", df.columns.tolist())
print("\n类型：\n", df.dtypes)
print("\n缺失：\n", df.isna().sum())
print("\n重复行：", df.duplicated().sum())` },
      { lang: "python", title: "清洗时记录数量变化", note: "原始文件保持不变，结果写到新文件。", code: R`before = len(df)
clean = df.drop_duplicates().copy()
clean["text"] = clean["text"].fillna("").str.strip()
clean = clean[clean["text"].ne("")]

print("原始行数：", before)
print("清洗后行数：", len(clean))
print("删除行数：", before - len(clean))

output = Path("data") / "cleaned.csv"
clean.to_csv(output, index=False, encoding="utf-8-sig")` }
    ]
  },
  "visualization": {
    title: "画出能放入实验报告的曲线",
    intro: "图和生成它的代码、CSV 指标一起保存。",
    steps: [
      { lang: "python", title: "从指标表生成双曲线", note: "使用明确坐标、图例、标题和 dpi。", code: R`from pathlib import Path
import matplotlib.pyplot as plt
import pandas as pd

metrics = pd.read_csv("results/metrics.csv")

fig, ax = plt.subplots(figsize=(7, 4))
ax.plot(metrics["epoch"], metrics["train_loss"], marker="o", label="train")
ax.plot(metrics["epoch"], metrics["val_loss"], marker="o", label="validation")
ax.set(xlabel="Epoch", ylabel="Cross-entropy loss", title="Loss by epoch")
ax.legend()
ax.grid(alpha=0.2)
fig.tight_layout()

Path("results/figures").mkdir(parents=True, exist_ok=True)
fig.savefig("results/figures/loss_curve.png", dpi=180)` }
    ]
  },
  "calculus": {
    title: "亲手验证一次梯度",
    intro: "先算解析梯度，再用有限差分做数值检查。以后手写损失函数时，这个习惯非常有用。",
    steps: [
      { lang: "python", title: "写出函数与解析梯度", note: "这里的函数是 f(x)=x²+3x，导数是 2x+3。", code: R`def f(x):
    return x ** 2 + 3 * x

def grad_f(x):
    return 2 * x + 3

x = 2.0
print("函数值:", f(x))
print("解析梯度:", grad_f(x))` },
      { lang: "python", title: "用有限差分复核", note: "把 eps 改成 1e-2、1e-6，观察误差如何变化。", code: R`eps = 1e-5
numeric_grad = (f(x + eps) - f(x - eps)) / (2 * eps)
analytic_grad = grad_f(x)

print("数值梯度:", numeric_grad)
print("绝对误差:", abs(numeric_grad - analytic_grad))
assert abs(numeric_grad - analytic_grad) < 1e-6` }
    ]
  },
  "ml-problem": {
    title: "把一个想法写成可计算的问题",
    intro: "先完成问题卡，再写模型。空白处必须能由数据、代码或实验回答。",
    steps: [
      { lang: "markdown", title: "复制问题定义卡", note: "新建 problem-card.md，并替换尖括号中的内容。", code: R`# 问题定义卡

## 目标
用 <输入 X> 预测 <目标 y>，帮助 <使用者> 做出 <决策>。

## 样本与标签
- 一个样本：<具体到一行数据或一张图片>
- 标签来源：<人工标注 / 系统日志 / 公开数据>
- 预测时可获得的信息：<字段列表>

## 成功标准
- 主指标：<指标名称与目标值>
- 基线：<最简单可用方法>
- 不能接受的错误：<例如漏诊、误报或数据泄漏>

## 切分原则
按 <时间 / 用户 / 患者 / 随机> 切分，原因是 <一句话>。` },
      { lang: "python", title: "把字段约束写成断言", note: "断言是最早、最便宜的数据质量检查。", code: R`required_columns = {"sample_id", "feature", "label"}
actual_columns = {"sample_id", "feature", "label"}  # 换成 df.columns

missing = required_columns - actual_columns
assert not missing, f"缺少字段: {sorted(missing)}"
print("字段检查通过")` }
    ]
  },
  "linear-regression": {
    title: "从零训练一条直线",
    intro: "只用 NumPy 写预测、损失和参数更新，再与现成库的结果对照。",
    steps: [
      { lang: "python", title: "生成数据并做梯度下降", note: "运行后 w 应接近 3，b 应接近 2。", code: R`import numpy as np

rng = np.random.default_rng(42)
X = rng.uniform(-2, 2, size=200)
y = 3 * X + 2 + rng.normal(0, 0.3, size=200)

w, b = 0.0, 0.0
lr = 0.05
for epoch in range(500):
    pred = w * X + b
    error = pred - y
    loss = np.mean(error ** 2)
    dw = 2 * np.mean(error * X)
    db = 2 * np.mean(error)
    w -= lr * dw
    b -= lr * db

print({"loss": round(loss, 4), "w": round(w, 3), "b": round(b, 3)})` },
      { lang: "python", title: "用 sklearn 交叉检查", note: "两个结果接近，说明手写训练逻辑大概率正确。", code: R`from sklearn.linear_model import LinearRegression

model = LinearRegression().fit(X.reshape(-1, 1), y)
print({"w": model.coef_[0], "b": model.intercept_})
assert abs(w - model.coef_[0]) < 0.05
assert abs(b - model.intercept_) < 0.05` }
    ]
  },
  "classification": {
    title: "观察阈值怎样改变模型行为",
    intro: "同一组预测概率，阈值不同会得到不同的召回率与精确率。",
    steps: [
      { lang: "python", title: "比较三个阈值", note: "先猜哪个阈值召回率最高，再运行验证。", code: R`from sklearn.metrics import precision_score, recall_score

y_true = [1, 0, 1, 1, 0, 0, 1, 0]
y_prob = [0.92, 0.72, 0.66, 0.48, 0.41, 0.25, 0.22, 0.08]

for threshold in [0.3, 0.5, 0.7]:
    y_pred = [int(p >= threshold) for p in y_prob]
    precision = precision_score(y_true, y_pred, zero_division=0)
    recall = recall_score(y_true, y_pred, zero_division=0)
    print(threshold, "precision=", round(precision, 2), "recall=", round(recall, 2))` },
      { lang: "markdown", title: "写下选择依据", note: "不要只写“0.5 是默认值”，要联系真实代价。", code: R`## 阈值决策
- 采用阈值：<0.3 / 0.5 / 0.7>
- 更在意：<精确率 / 召回率>
- 一个假阳性的代价：<具体描述>
- 一个假阴性的代价：<具体描述>
- 因此这个阈值适合当前场景，因为：<一句完整理由>` }
    ]
  },
  "splits-pipeline": {
    title: "用 Pipeline 封住数据泄漏",
    intro: "标准化只能在训练折上学习。Pipeline 会让交叉验证按正确顺序执行。",
    steps: [
      { lang: "python", title: "完成一条可复现管线", note: "random_state 固定随机过程，StratifiedKFold 保持类别比例。", code: R`from sklearn.datasets import load_breast_cancer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import StratifiedKFold, cross_validate
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

X, y = load_breast_cancer(return_X_y=True)
pipeline = make_pipeline(
    StandardScaler(),
    LogisticRegression(max_iter=2000, random_state=42),
)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_validate(pipeline, X, y, cv=cv, scoring=["accuracy", "f1"])

print("accuracy:", scores["test_accuracy"].mean())
print("f1:", scores["test_f1"].mean())` },
      { lang: "python", title: "加入最低质量门槛", note: "门槛不是追求高分，而是让异常结果立即显眼。", code: R`mean_f1 = scores["test_f1"].mean()
std_f1 = scores["test_f1"].std()

assert mean_f1 > 0.90, f"F1 异常偏低: {mean_f1:.3f}"
print(f"F1 = {mean_f1:.3f} ± {std_f1:.3f}")` }
    ]
  },
  "metrics": {
    title: "不用库手算一次分类指标",
    intro: "只有亲手数过 TP、FP、FN、TN，指标才不会只是四个缩写。",
    steps: [
      { lang: "python", title: "计算混淆矩阵四格", note: "先在纸上数一遍，再核对输出。", code: R`y_true = [1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 1, 0, 0, 1, 0]

tp = sum(t == 1 and p == 1 for t, p in zip(y_true, y_pred))
fp = sum(t == 0 and p == 1 for t, p in zip(y_true, y_pred))
fn = sum(t == 1 and p == 0 for t, p in zip(y_true, y_pred))
tn = sum(t == 0 and p == 0 for t, p in zip(y_true, y_pred))
print({"TP": tp, "FP": fp, "FN": fn, "TN": tn})` },
      { lang: "python", title: "从四格得到 P、R、F1", note: "再和 sklearn.metrics 的结果比较。", code: R`precision = tp / (tp + fp)
recall = tp / (tp + fn)
f1 = 2 * precision * recall / (precision + recall)

print(f"precision={precision:.3f}")
print(f"recall={recall:.3f}")
print(f"f1={f1:.3f}")` }
    ]
  },
  "overfitting": {
    title: "让早停留下证据",
    intro: "早停不是凭感觉中断。每轮都记录训练损失、验证损失和当前最佳轮次。",
    steps: [
      { lang: "python", title: "实现最小早停器", note: "把模拟损失替换成你的真实验证损失即可。", code: R`val_losses = [0.91, 0.73, 0.62, 0.58, 0.57, 0.59, 0.63]
patience = 2
best_loss = float("inf")
best_epoch = -1
bad_epochs = 0

for epoch, val_loss in enumerate(val_losses, start=1):
    if val_loss < best_loss:
        best_loss, best_epoch, bad_epochs = val_loss, epoch, 0
    else:
        bad_epochs += 1
    print(epoch, val_loss, "bad_epochs=", bad_epochs)
    if bad_epochs >= patience:
        print("early stop; best epoch =", best_epoch)
        break` },
      { lang: "markdown", title: "记录过拟合证据", note: "将观察和下一步分开写，避免事后合理化。", code: R`## 过拟合检查
- 训练损失最低轮次：
- 验证损失最低轮次：
- 两条曲线开始分离的位置：
- 本次采用的 checkpoint：
- 下一轮只改变一个变量：
- 预期变化与理由：` }
    ]
  },
  "torch-tensors": {
    title: "看见 autograd 真正在算什么",
    intro: "用一个足够小的张量，把前向计算、反向传播和手算结果对齐。",
    steps: [
      { lang: "python", title: "计算并检查梯度", note: "y=sum(x*w²)，所以 dy/dw=2*x*w。", code: R`import torch

x = torch.tensor([2.0, 3.0])
w = torch.tensor([1.5, -2.0], requires_grad=True)
y = torch.sum(x * w ** 2)
y.backward()

expected = 2 * x * w.detach()
print("y:", y.item())
print("autograd:", w.grad)
print("手算:", expected)
assert torch.allclose(w.grad, expected)` },
      { lang: "python", title: "观察梯度累加", note: "连续 backward 会累加梯度；训练循环因此必须清零。", code: R`y = torch.sum(x * w ** 2)
y.backward()
print("累加后:", w.grad)

w.grad.zero_()
print("清零后:", w.grad)` }
    ]
  },
  "torch-data-model": {
    title: "先让一个 batch 完整跑通",
    intro: "正式训练前做冒烟测试：输入、标签、输出和损失的形状全部明确。",
    steps: [
      { lang: "python", title: "构造 DataLoader 与小模型", note: "这一段不下载数据，离线也能运行。", code: R`import torch
from torch import nn
from torch.utils.data import DataLoader, TensorDataset

torch.manual_seed(42)
X = torch.randn(96, 20)
y = torch.randint(0, 3, (96,))
loader = DataLoader(TensorDataset(X, y), batch_size=16, shuffle=True)
model = nn.Sequential(nn.Linear(20, 32), nn.ReLU(), nn.Linear(32, 3))

xb, yb = next(iter(loader))
logits = model(xb)
print(xb.shape, yb.shape, logits.shape)
assert logits.shape == (16, 3)` },
      { lang: "python", title: "完成一次反向传播", note: "检查每个可训练参数都获得了梯度。", code: R`loss = nn.CrossEntropyLoss()(logits, yb)
loss.backward()

for name, parameter in model.named_parameters():
    print(name, parameter.grad.shape, parameter.grad.norm().item())
    assert parameter.grad is not None` }
    ]
  },
  "training-loop": {
    title: "写一份可复用的 PyTorch 训练循环",
    intro: "把四个关键动作固定下来：清梯度、前向、反向、更新。",
    steps: [
      { lang: "python", title: "定义单轮训练函数", note: "函数返回平均损失，方便记录和画图。", code: R`def train_one_epoch(model, loader, loss_fn, optimizer, device="cpu"):
    model.train()
    total_loss = 0.0
    for xb, yb in loader:
        xb, yb = xb.to(device), yb.to(device)
        optimizer.zero_grad()
        logits = model(xb)
        loss = loss_fn(logits, yb)
        loss.backward()
        optimizer.step()
        total_loss += loss.item() * xb.size(0)
    return total_loss / len(loader.dataset)` },
      { lang: "python", title: "训练五轮并检查参数变化", note: "先保存旧参数，防止出现“代码在跑但模型没学”的假象。", code: R`from copy import deepcopy

loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
before = deepcopy(model.state_dict())

for epoch in range(1, 6):
    loss = train_one_epoch(model, loader, loss_fn, optimizer)
    print(f"epoch={epoch:02d} loss={loss:.4f}")

changed = any(not torch.equal(before[k], model.state_dict()[k]) for k in before)
assert changed, "参数没有更新，请检查 backward 和 optimizer.step"` }
    ]
  },
  "validation-checkpoint": {
    title: "保存并重新加载最佳模型",
    intro: "checkpoint 必须经过重新加载测试；只看到文件存在并不等于可以恢复。",
    steps: [
      { lang: "python", title: "保存完整训练状态", note: "state_dict 比直接保存整个模型更稳定。", code: R`from pathlib import Path
import torch

Path("checkpoints").mkdir(exist_ok=True)
checkpoint = {
    "epoch": 5,
    "model_state": model.state_dict(),
    "optimizer_state": optimizer.state_dict(),
    "val_loss": 0.42,
}
torch.save(checkpoint, "checkpoints/best.pt")` },
      { lang: "python", title: "加载到新实例并比对输出", note: "model_factory 应返回与训练时相同的网络结构。", code: R`def model_factory():
    return nn.Sequential(nn.Linear(20, 32), nn.ReLU(), nn.Linear(32, 3))

loaded = torch.load("checkpoints/best.pt", map_location="cpu")
restored_model = model_factory()
restored_model.load_state_dict(loaded["model_state"])
restored_model.eval()

model.eval()
with torch.no_grad():
    assert torch.allclose(model(xb), restored_model(xb))
print("恢复成功，epoch =", loaded["epoch"])
` }
    ]
  },
  "cnn": {
    title: "逐层打印 CNN 的形状",
    intro: "用 forward hook 看见特征图如何变化，定位尺寸错误比猜测快得多。",
    steps: [
      { lang: "python", title: "搭建最小卷积网络", note: "输入使用 8 张 28×28 的灰度图。", code: R`import torch
from torch import nn

cnn = nn.Sequential(
    nn.Conv2d(1, 8, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(8, 16, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.AdaptiveAvgPool2d(1),
    nn.Flatten(),
    nn.Linear(16, 10),
)
x = torch.randn(8, 1, 28, 28)` },
      { lang: "python", title: "注册 hook 并前向一次", note: "把输出形状抄到笔记里，确认 batch 维始终是 8。", code: R`handles = []
for name, layer in cnn.named_children():
    def show_shape(module, inputs, output, layer_name=name):
        print(f"{layer_name:>2} {module.__class__.__name__:<18} -> {tuple(output.shape)}")
    handles.append(layer.register_forward_hook(show_shape))

logits = cnn(x)
for handle in handles:
    handle.remove()
assert logits.shape == (8, 10)` }
    ]
  },
  "attention-transformer": {
    title: "手写一次缩放点积注意力",
    intro: "从 Q、K、V 到注意力权重，只保留最核心的矩阵运算。",
    steps: [
      { lang: "python", title: "计算注意力权重", note: "每一行权重之和应为 1。", code: R`import math
import torch

torch.manual_seed(42)
batch, tokens, dim = 2, 4, 8
Q = torch.randn(batch, tokens, dim)
K = torch.randn(batch, tokens, dim)
V = torch.randn(batch, tokens, dim)

scores = Q @ K.transpose(-2, -1) / math.sqrt(dim)
weights = torch.softmax(scores, dim=-1)
output = weights @ V

print("weights:", weights.shape)
print("output:", output.shape)
assert torch.allclose(weights.sum(-1), torch.ones(batch, tokens))` },
      { lang: "python", title: "加入因果遮罩", note: "未来位置被设为负无穷，softmax 后权重接近 0。", code: R`mask = torch.triu(torch.ones(tokens, tokens, dtype=torch.bool), diagonal=1)
masked_scores = scores.masked_fill(mask, float("-inf"))
causal_weights = torch.softmax(masked_scores, dim=-1)

future_weights = causal_weights.masked_select(mask)
assert torch.all(future_weights < 1e-7)
print(causal_weights[0])` }
    ]
  },
  "pretrain-finetune": {
    title: "先做一个无需大模型的检索基线",
    intro: "微调或 RAG 之前，先建立能解释、能测量的关键词检索基线。",
    steps: [
      { lang: "python", title: "实现最小检索器", note: "它不够聪明，但能暴露语料与评测问题。", code: R`documents = [
    "梯度下降通过损失函数的梯度更新参数",
    "交叉验证用于估计模型在未见数据上的表现",
    "注意力机制根据相关性加权聚合信息",
]

def retrieve(query, docs, top_k=1):
    query_chars = set(query)
    scored = [(len(query_chars & set(doc)), doc) for doc in docs]
    return sorted(scored, reverse=True)[:top_k]

print(retrieve("怎么用验证数据评价模型", documents))` },
      { lang: "markdown", title: "建立十题评测表", note: "比较基线、RAG、微调时始终使用同一组问题。", code: R`| id | 问题 | 期望要点 | 基线命中 | RAG 命中 | 备注 |
|---|---|---|---:|---:|---|
| q01 | 什么是数据泄漏？ | 验证信息进入训练 | 0 |  |  |
| q02 | 为什么划分测试集？ | 无偏估计泛化能力 | 1 |  |  |

评分规则：答案包含全部期望要点记 1，否则记 0。` }
    ]
  },
  "find-papers": {
    title: "留下可复查的论文检索记录",
    intro: "检索式、筛选原因和最终入选论文都写下来，避免只靠浏览器历史。",
    steps: [
      { lang: "markdown", title: "建立检索日志", note: "每次修改关键词都新增一行，不覆盖旧记录。", code: R`# 文献检索日志

## 研究问题
<一句话写清对象、方法和目标>

| 日期 | 数据库 | 检索式 | 结果数 | 调整原因 |
|---|---|---|---:|---|
| YYYY-MM-DD | Google Scholar | "关键词 A" AND "关键词 B" |  | 首次检索 |

## 纳入标准
- 与研究问题直接相关
- 方法和评测描述足够完整
- 优先原论文与近年的高质量综述

## 排除标准
- 只有摘要，无法核对方法
- 数据或任务与当前问题不一致` },
      { lang: "markdown", title: "用四句话读一篇论文", note: "先抓主线，再决定是否精读公式和附录。", code: R`## 论文速读卡
- 论文与链接：
- 它解决什么问题：
- 核心方法是什么：
- 用什么数据和指标证明有效：
- 我仍不相信或不明白的地方：
- 与我的项目最直接的连接：` }
    ]
  },
  "reproduce-repo": {
    title: "把复现过程变成别人能重复的记录",
    intro: "从环境快照开始，每一个偏离原仓库的改动都留下理由。",
    steps: [
      { lang: "powershell", title: "导出 Windows 环境快照", note: "在已激活项目环境的 PowerShell 中运行。", code: R`New-Item -ItemType Directory -Force -Path .\artifacts | Out-Null
python --version | Out-File .\artifacts\environment.txt -Encoding utf8
python -m pip --version | Out-File .\artifacts\environment.txt -Append -Encoding utf8
python -m pip freeze | Out-File .\artifacts\requirements-lock.txt -Encoding utf8
git rev-parse HEAD | Out-File .\artifacts\source-commit.txt -Encoding utf8
Get-Content .\artifacts\environment.txt` },
      { lang: "markdown", title: "填写复现日志", note: "失败也要记录；失败原因本身就是研究结果。", code: R`# 复现日志

- 原仓库 URL：
- 固定 commit：
- 数据版本与下载日期：
- 操作系统 / Python / CUDA：
- 原论文报告指标：
- 我的复现指标：

## 与原仓库不同之处
| 改动 | 原因 | 对结果可能造成的影响 |
|---|---|---|
|  |  |  |

## 当前结论
<成功复现 / 部分复现 / 未复现，以及证据>` }
    ]
  },
  "experiment-design": {
    title: "用配置文件固定一次实验",
    intro: "配置、随机种子、代码版本和输出目录共同决定一次实验身份。",
    steps: [
      { lang: "yaml", title: "新建 config.yaml", note: "一次只修改一个研究变量，其余保持不变。", code: R`experiment_name: baseline_lr_1e-3
seed: 42
data:
  train_path: data/train.csv
  valid_path: data/valid.csv
model:
  hidden_dim: 128
  dropout: 0.2
train:
  epochs: 30
  batch_size: 64
  learning_rate: 0.001
output_dir: runs/baseline_lr_1e-3` },
      { lang: "python", title: "保存元数据与指标", note: "需要安装 pyyaml；输出 JSON 便于之后自动汇总。", code: R`import json
import subprocess
from pathlib import Path
import yaml

config = yaml.safe_load(Path("config.yaml").read_text(encoding="utf-8"))
run_dir = Path(config["output_dir"])
run_dir.mkdir(parents=True, exist_ok=True)
metadata = {
    "config": config,
    "git_commit": subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip(),
    "metrics": {"val_f1": 0.812, "test_f1": None},
}
(run_dir / "metadata.json").write_text(
    json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8"
)` }
    ]
  },
  "tracking-analysis": {
    title: "让实验表自动回答比较问题",
    intro: "不要在文件名里猜结果。用一行代表一次实验，再按变量分组汇总。",
    steps: [
      { lang: "python", title: "创建实验台账", note: "真实项目中每轮训练结束后追加一行。", code: R`import pandas as pd

runs = pd.DataFrame([
    {"run": "a1", "seed": 1, "lr": 1e-3, "dropout": 0.2, "val_f1": 0.81},
    {"run": "a2", "seed": 2, "lr": 1e-3, "dropout": 0.2, "val_f1": 0.83},
    {"run": "b1", "seed": 1, "lr": 3e-4, "dropout": 0.2, "val_f1": 0.84},
    {"run": "b2", "seed": 2, "lr": 3e-4, "dropout": 0.2, "val_f1": 0.82},
])
runs.to_csv("runs.csv", index=False)
print(runs)` },
      { lang: "python", title: "按学习率汇总均值与波动", note: "只有多个随机种子时，均值和标准差才有解释力。", code: R`summary = (
    runs.groupby("lr")["val_f1"]
    .agg(["count", "mean", "std"])
    .sort_values("mean", ascending=False)
)
print(summary)
assert summary["count"].min() >= 2` }
    ]
  },
  "capstone": {
    title: "把结课项目整理成可展示作品",
    intro: "一个好项目不仅能运行，还能让别人迅速理解、复现并判断结果。",
    steps: [
      { lang: "markdown", title: "补齐 README 主体", note: "所有数字都链接到对应实验或结果文件。", code: R`# 项目名称

一句话：用 <方法> 在 <数据> 上解决 <问题>。

## 结果摘要
| 模型 | 验证指标 | 测试指标 | 运行配置 |
|---|---:|---:|---|
| baseline |  |  | configs/baseline.yaml |

## 复现
1. 创建环境并安装 requirements.txt
2. 运行数据检查：python scripts/check_data.py
3. 训练：python train.py --config configs/baseline.yaml
4. 评估：python evaluate.py --checkpoint checkpoints/best.pt

## 限制
- 数据代表性：
- 失败案例：
- 目前不能得出的结论：` },
      { lang: "markdown", title: "准备三分钟讲解", note: "每一部分最多三句话，并用一张核心结果图辅助。", code: R`## 0:00–0:30 问题
谁遇到什么问题，为什么值得解决？

## 0:30–1:15 方法
数据如何获得？基线是什么？你只改变了什么？

## 1:15–2:15 结果
主指标、对照实验、最典型的成功与失败案例。

## 2:15–3:00 结论
现在能得出什么、不能得出什么、下一步最值得验证什么。` }
    ]
  }
};
