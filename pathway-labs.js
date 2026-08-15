Object.assign(codeLabs, {
  "categorical-features": {
    title: "用 ColumnTransformer 建立无泄漏预处理",
    intro: "从混合类型表格开始，把缺失值、缩放、one-hot 和模型封装成一条管线。",
    steps: [
      { lang: "python", title: "构造混合类型数据", note: "先观察每一列的语义和缺失值。", code: R`import pandas as pd

df = pd.DataFrame({
    "age": [22, 35, None, 41, 29, 54],
    "income": [4200, 8800, 6100, None, 7200, 12000],
    "city": ["北京", "上海", "北京", "深圳", None, "上海"],
    "device": ["mobile", "desktop", "mobile", "tablet", "desktop", "mobile"],
    "label": [0, 1, 0, 1, 1, 1],
})
print(df)
print(df.isna().sum())` },
      { lang: "python", title: "在 Pipeline 内完成全部 fit", note: "handle_unknown 避免推理时遇到新类别报错。", code: R`from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric = ["age", "income"]
categorical = ["city", "device"]
preprocess = ColumnTransformer([
    ("num", make_pipeline(SimpleImputer(strategy="median"), StandardScaler()), numeric),
    ("cat", make_pipeline(SimpleImputer(strategy="most_frequent"),
                          OneHotEncoder(handle_unknown="ignore")), categorical),
])
pipeline = make_pipeline(preprocess, LogisticRegression())
pipeline.fit(df[numeric + categorical], df["label"])
print(pipeline.predict(df[numeric + categorical]))` }
    ]
  },
  "regularization-tuning": {
    title: "在交叉验证里搜索少量超参数",
    intro: "测试集保持封存，只用训练数据比较 C 与 class_weight。",
    steps: [
      { lang: "python", title: "建立训练与测试边界", note: "从这一行以后，搜索阶段不要再访问 X_test。", code: R`from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split

X, y = load_breast_cancer(return_X_y=True, as_frame=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
print(X_train.shape, X_test.shape)` },
      { lang: "python", title: "搜索并保存全部候选", note: "先查看 cv_results_，锁定配置后才打开测试集。", code: R`import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV, StratifiedKFold
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

model = make_pipeline(StandardScaler(), LogisticRegression(max_iter=3000))
search = GridSearchCV(
    model,
    {"logisticregression__C": [0.1, 1.0, 10.0],
     "logisticregression__class_weight": [None, "balanced"]},
    scoring="f1", cv=StratifiedKFold(5, shuffle=True, random_state=42),
    return_train_score=True,
)
search.fit(X_train, y_train)
results = pd.DataFrame(search.cv_results_)
print(results[["params", "mean_test_score", "std_test_score"]])` }
    ]
  },
  "baselines-trees": {
    title: "公平比较三层 baseline",
    intro: "所有模型共享同一切分、同一指标和同一交叉验证器。",
    steps: [
      { lang: "python", title: "定义候选模型", note: "Dummy 是最低参照，线性模型是强基线，森林测试非线性。", code: R`from sklearn.dummy import DummyClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

models = {
    "dummy": DummyClassifier(strategy="most_frequent"),
    "linear": make_pipeline(StandardScaler(), LogisticRegression(max_iter=3000)),
    "forest": RandomForestClassifier(n_estimators=200, random_state=42),
}` },
      { lang: "python", title: "输出均值、波动和耗时", note: "不要只挑最好一次运行。", code: R`from sklearn.model_selection import cross_validate, StratifiedKFold

cv = StratifiedKFold(5, shuffle=True, random_state=42)
rows = []
for name, model in models.items():
    scores = cross_validate(model, X_train, y_train, cv=cv, scoring="f1")
    rows.append({
        "model": name,
        "f1_mean": scores["test_score"].mean(),
        "f1_std": scores["test_score"].std(),
        "fit_seconds": scores["fit_time"].sum(),
    })
print(pd.DataFrame(rows).sort_values("f1_mean", ascending=False))` }
    ]
  },
  "error-analysis": {
    title: "生成逐样本错误台账",
    intro: "先保存概率和元数据，再按有意义切片比较错误。",
    steps: [
      { lang: "python", title: "保存 out-of-fold 预测", note: "交叉验证外预测让每个训练样本都由未见过它的模型预测。", code: R`from sklearn.model_selection import cross_val_predict

best_model = models["linear"]
prob = cross_val_predict(
    best_model, X_train, y_train, cv=cv, method="predict_proba"
)[:, 1]
pred = (prob >= 0.5).astype(int)

ledger = X_train.copy()
ledger["y_true"] = y_train.to_numpy()
ledger["prob"] = prob
ledger["y_pred"] = pred
ledger["is_error"] = ledger["y_true"] != ledger["y_pred"]` },
      { lang: "python", title: "比较两个年龄切片", note: "把切片换成与你的数据来源或场景有关的属性。", code: R`from sklearn.metrics import f1_score

ledger["age_slice"] = pd.cut(
    ledger["mean radius"], bins=[0, 12, 18, float("inf")],
    labels=["small", "medium", "large"]
)
report = ledger.groupby("age_slice", observed=True).apply(
    lambda part: pd.Series({
        "count": len(part),
        "f1": f1_score(part["y_true"], part["y_pred"]),
        "errors": part["is_error"].sum(),
    })
)
print(report)
ledger.query("is_error").to_csv("error_cases.csv", index=False)` }
    ]
  },
  "ml-stage-project": {
    title: "搭起经典机器学习项目骨架",
    intro: "把数据说明、配置、训练、评估和结果目录分开。",
    steps: [
      { lang: "powershell", title: "创建目录", note: "在空目录中运行，并逐个说明每个文件的职责。", code: R`New-Item -ItemType Directory -Force -Path .\ml-baseline | Out-Null
Set-Location .\ml-baseline
New-Item -ItemType Directory -Force -Path .\data, .\src, .\configs, .\results | Out-Null
New-Item -ItemType File -Force -Path README.md, requirements.txt, .gitignore | Out-Null
New-Item -ItemType File -Force -Path .\data\README.md | Out-Null
New-Item -ItemType File -Force -Path .\src\train.py, .\src\evaluate.py | Out-Null
New-Item -ItemType File -Force -Path .\configs\baseline.yaml | Out-Null
Get-ChildItem -Recurse` },
      { lang: "markdown", title: "写测试集使用声明", note: "把这段放进 README，实际执行日期只能填写一次。", code: R`## 数据划分承诺

- 划分单位：<样本 / 用户 / 时间 / 患者>
- 训练集：用于拟合参数和交叉验证
- 验证方式：<5 折分层交叉验证>
- 测试集：在配置锁定前不读取
- 首次并唯一一次测试日期：<尚未运行>
- 测试前锁定的 Git commit：<尚未运行>` }
    ]
  },
  "torch-transforms": {
    title: "检查训练与验证数据管线",
    intro: "用 FashionMNIST 演示训练增强、验证确定性和 batch 冒烟测试。",
    steps: [
      { lang: "python", title: "定义两套 transforms", note: "RandomAffine 只用于训练数据。", code: R`from torchvision import transforms

train_transform = transforms.Compose([
    transforms.RandomAffine(degrees=8, translate=(0.05, 0.05)),
    transforms.ToTensor(),
    transforms.Normalize((0.2860,), (0.3530,)),
])
valid_transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.2860,), (0.3530,)),
])
print(train_transform)
print(valid_transform)` },
      { lang: "python", title: "断言 batch 接口", note: "先检查形状、类型与有限数值，再交给网络。", code: R`xb, yb = next(iter(train_loader))
assert xb.ndim == 4 and xb.shape[1:] == (1, 28, 28)
assert yb.ndim == 1 and yb.dtype == torch.int64
assert torch.isfinite(xb).all()
assert yb.min() >= 0 and yb.max() < 10
print(xb.shape, yb.shape, xb.min().item(), xb.max().item())` }
    ]
  },
  "optimization-debugging": {
    title: "用小 batch 定位训练故障",
    intro: "关闭随机增强和正则化，先证明模型有能力记住 32 个样本。",
    steps: [
      { lang: "python", title: "固定一个小 batch", note: "训练循环始终重复这 32 个样本。", code: R`torch.manual_seed(42)
small_x, small_y = next(iter(train_loader))
small_x, small_y = small_x[:32], small_y[:32]

optimizer = torch.optim.Adam(model.parameters(), lr=1e-2)
loss_fn = torch.nn.CrossEntropyLoss()
for step in range(300):
    optimizer.zero_grad()
    logits = model(small_x)
    loss = loss_fn(logits, small_y)
    loss.backward()
    grad_norm = torch.nn.utils.clip_grad_norm_(model.parameters(), 5.0)
    optimizer.step()
    if step % 50 == 0:
        accuracy = (logits.argmax(1) == small_y).float().mean()
        print(step, loss.item(), accuracy.item(), grad_norm.item())` },
      { lang: "python", title: "遇到非有限值立即停", note: "异常要定位到第一步，而不是让 NaN 继续传播。", code: R`if not torch.isfinite(loss):
    raise RuntimeError("loss became NaN or Inf")

for name, parameter in model.named_parameters():
    if parameter.grad is not None and not torch.isfinite(parameter.grad).all():
        raise RuntimeError("non-finite gradient in " + name)` }
    ]
  },
  "reproducible-training": {
    title: "为每次训练保存环境指纹",
    intro: "随机种子只是元数据的一部分，代码、配置、数据和硬件同样必须记录。",
    steps: [
      { lang: "python", title: "集中设置随机源", note: "确定性选项可能降低速度，需在报告中说明。", code: R`import os
import random
import numpy as np
import torch

def seed_everything(seed):
    os.environ["PYTHONHASHSEED"] = str(seed)
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(seed)

seed_everything(42)` },
      { lang: "python", title: "导出环境 JSON", note: "和指标文件放在同一个 run 目录。", code: R`import json
import platform
import subprocess
from pathlib import Path

metadata = {
    "python": platform.python_version(),
    "torch": torch.__version__,
    "cuda": torch.version.cuda,
    "device": torch.cuda.get_device_name(0) if torch.cuda.is_available() else "cpu",
    "git_commit": subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip(),
    "seed": 42,
}
Path("runs/run-001").mkdir(parents=True, exist_ok=True)
Path("runs/run-001/environment.json").write_text(
    json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8"
)` }
    ]
  },
  "dl-stage-project": {
    title: "验证 checkpoint 真能恢复",
    intro: "训练脚本和独立评估脚本不得共享内存中的模型对象。",
    steps: [
      { lang: "python", title: "保存模型、优化器与配置", note: "checkpoint 同时保存恢复训练和复查所需信息。", code: R`checkpoint = {
    "epoch": epoch,
    "model_state": model.state_dict(),
    "optimizer_state": optimizer.state_dict(),
    "best_val_loss": best_val_loss,
    "config": config,
    "class_names": class_names,
}
torch.save(checkpoint, "checkpoints/best.pt")` },
      { lang: "python", title: "在新模型实例中加载", note: "比较同一 batch 的 logits，而不只是预测类别。", code: R`saved = torch.load("checkpoints/best.pt", map_location="cpu")
restored = build_model(saved["config"])
restored.load_state_dict(saved["model_state"])
restored.eval()

model.cpu().eval()
with torch.no_grad():
    before = model(xb.cpu())
    after = restored(xb.cpu())
assert torch.allclose(before, after, atol=1e-6)
print("checkpoint restored exactly")` }
    ]
  },
  "cnn-project": {
    title: "统一预算比较 MLP 与 CNN",
    intro: "同一数据、训练器、优化器和轮数，只替换模型结构。",
    steps: [
      { lang: "python", title: "统计可训练参数", note: "参数量是比较架构时必须报告的条件。", code: R`def count_parameters(model):
    return sum(p.numel() for p in model.parameters() if p.requires_grad)

for name, candidate in {"mlp": mlp, "cnn": cnn}.items():
    print(name, count_parameters(candidate))` },
      { lang: "python", title: "建立实验矩阵", note: "每一行只对应一个明确对照。", code: R`experiments = [
    {"name": "mlp_no_aug", "model": "mlp", "augmentation": False},
    {"name": "cnn_no_aug", "model": "cnn", "augmentation": False},
    {"name": "cnn_aug", "model": "cnn", "augmentation": True},
]

for experiment in experiments:
    print("run", experiment["name"], "with seed 42")
    # train_with_config(experiment, seed=42)` }
    ]
  },
  "transformer-block-project": {
    title: "实现并测试一个 Transformer block",
    intro: "首先验证 shape 和因果 mask，然后才训练。",
    steps: [
      { lang: "python", title: "搭建 Pre-Norm block", note: "batch_first=True 让输入保持 (batch, tokens, dim)。", code: R`import torch
from torch import nn

class TransformerBlock(nn.Module):
    def __init__(self, dim=64, heads=4, dropout=0.1):
        super().__init__()
        self.norm1 = nn.LayerNorm(dim)
        self.attn = nn.MultiheadAttention(dim, heads, dropout=dropout, batch_first=True)
        self.norm2 = nn.LayerNorm(dim)
        self.ffn = nn.Sequential(
            nn.Linear(dim, 4 * dim), nn.GELU(), nn.Linear(4 * dim, dim)
        )

    def forward(self, x, mask=None):
        h = self.norm1(x)
        x = x + self.attn(h, h, h, attn_mask=mask, need_weights=False)[0]
        return x + self.ffn(self.norm2(x))` },
      { lang: "python", title: "写形状和梯度测试", note: "因果 mask 的上三角是负无穷。", code: R`block = TransformerBlock()
x = torch.randn(3, 12, 64, requires_grad=True)
mask = torch.triu(torch.full((12, 12), float("-inf")), diagonal=1)

y = block(x, mask)
assert y.shape == x.shape
y.square().mean().backward()
assert x.grad is not None and torch.isfinite(x.grad).all()
for parameter in block.parameters():
    assert parameter.grad is not None
print("shape and gradient tests passed")` }
    ]
  },
  "tokenization-context": {
    title: "比较文本的 token 长度",
    intro: "字符数相近的中文、英文和代码可能产生完全不同的 token 数。",
    steps: [
      { lang: "python", title: "打印 token 与 id", note: "需要安装 transformers；可更换为你要使用的模型。", code: R`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-multilingual-cased")
samples = [
    "机器学习不是背答案。",
    "Machine learning is not memorization.",
    "for epoch in range(10): loss.backward()",
]
for text in samples:
    ids = tokenizer.encode(text, add_special_tokens=True)
    print(text)
    print(tokenizer.convert_ids_to_tokens(ids))
    print("characters=", len(text), "tokens=", len(ids))` },
      { lang: "python", title: "统计截断比例", note: "不要让 truncation=True 静默丢失大量样本。", code: R`lengths = [len(tokenizer.encode(text, add_special_tokens=True)) for text in texts]
max_length = 128
truncated = sum(length > max_length for length in lengths)
print("samples:", len(lengths))
print("max tokens:", max(lengths))
print("truncation rate:", truncated / len(lengths))

assert truncated / len(lengths) < 0.05, "截断比例过高，请重新设计 max_length"` }
    ]
  },
  "pretrained-models": {
    title: "读懂预训练模型的输入输出",
    intro: "从 tokenizer 到 logits，明确每一个张量的形状。",
    steps: [
      { lang: "python", title: "运行文本分类模型", note: "首次运行会下载模型；没有网络时可先阅读形状逻辑。", code: R`import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model_name = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

batch = tokenizer(["This course is useful.", "The result is unreliable."],
                  padding=True, return_tensors="pt")
with torch.no_grad():
    outputs = model(**batch)
print("input_ids", batch["input_ids"].shape)
print("attention_mask", batch["attention_mask"].shape)
print("logits", outputs.logits.shape)` },
      { lang: "python", title: "从 logits 得到标签", note: "使用模型配置中的映射，不要自己猜 0 和 1。", code: R`probabilities = outputs.logits.softmax(dim=-1)
for probability in probabilities:
    label_id = probability.argmax().item()
    print({
        "label": model.config.id2label[label_id],
        "confidence": probability[label_id].item(),
    })` }
    ]
  },
  "inference-prompting": {
    title: "固定提示版本与逐样本输出",
    intro: "把 prompt 当作代码版本管理，而不是在聊天框里随手修改。",
    steps: [
      { lang: "markdown", title: "保存提示模板", note: "新建 prompts/topic-classifier-v1.md。", code: R`# System
你是文本主题分类器。只能输出 JSON，不解释。

# Labels
- ai
- biology
- economics
- other

# Output schema
{"label": "<one label>", "evidence": "<short phrase from input>"}

# User
{{text}}` },
      { lang: "python", title: "为每条结果保存配置", note: "后续比较提示时才能知道输出来自哪一版。", code: R`result = {
    "sample_id": sample["id"],
    "model": model_name,
    "model_revision": revision,
    "prompt_version": "topic-classifier-v1",
    "temperature": 0.0,
    "max_new_tokens": 80,
    "raw_output": raw_output,
    "parsed_output": parsed_output,
}
results.append(result)` }
    ]
  },
  "llm-evaluation": {
    title: "建立可复查的 LLM 评测台账",
    intro: "同一批问题同时记录任务质量、格式、延迟和 token。",
    steps: [
      { lang: "python", title: "定义确定性评分", note: "分类与 JSON 格式优先用程序评分。", code: R`import json

def score_output(raw_output, expected_label):
    try:
        parsed = json.loads(raw_output)
    except json.JSONDecodeError:
        return {"valid_json": 0, "correct": 0}
    return {
        "valid_json": 1,
        "correct": int(parsed.get("label") == expected_label),
    }

print(score_output('{"label":"ai"}', "ai"))` },
      { lang: "python", title: "汇总质量与成本", note: "p95 能暴露少量特别慢的请求。", code: R`import pandas as pd

df = pd.DataFrame(results)
summary = {
    "samples": len(df),
    "accuracy": df["correct"].mean(),
    "valid_json_rate": df["valid_json"].mean(),
    "latency_p50_ms": df["latency_ms"].quantile(0.50),
    "latency_p95_ms": df["latency_ms"].quantile(0.95),
    "input_tokens": int(df["input_tokens"].sum()),
    "output_tokens": int(df["output_tokens"].sum()),
}
print(summary)` }
    ]
  },
  "llm-stage-project": {
    title: "用证据判断是否需要 RAG",
    intro: "先完成非 RAG baseline，再填写进入 RAG 的决策记录。",
    steps: [
      { lang: "markdown", title: "创建模型比较表", note: "所有候选必须用同一评测集。", code: R`| 方法 | 训练参数 | 主指标 | 格式正确率 | p95 延迟 | 单样本成本 |
|---|---:|---:|---:|---:|---:|
| 规则 baseline | 0 |  |  |  |  |
| zero-shot | 0 |  |  |  |  |
| few-shot | 0 |  |  |  |  |
| LoRA（可选） |  |  |  |  |  |` },
      { lang: "markdown", title: "填写 RAG 准入判断", note: "四项中至少三项为“是”才进入下一阶段。", code: R`## 是否需要 RAG

- [ ] 任务依赖模型训练后新增或频繁变化的知识
- [ ] 答案必须引用私有或指定来源
- [ ] 目标知识可以整理成可检索语料
- [ ] 现有模型的主要失败来自缺少知识，而不是格式或推理

结论：<进入 RAG / 暂不进入>
证据：<引用错误分析中的具体数量>` }
    ]
  },
  "retrieval-basics": {
    title: "从零计算 Recall@k 与 MRR",
    intro: "不接 LLM，先验证检索结果是否包含答案证据。",
    steps: [
      { lang: "python", title: "实现两个检索指标", note: "relevant_ids 可以包含多个正确文档。", code: R`def recall_at_k(retrieved_ids, relevant_ids, k):
    relevant = set(relevant_ids)
    found = relevant.intersection(retrieved_ids[:k])
    return len(found) / len(relevant) if relevant else 0.0

def reciprocal_rank(retrieved_ids, relevant_ids):
    relevant = set(relevant_ids)
    for rank, doc_id in enumerate(retrieved_ids, start=1):
        if doc_id in relevant:
            return 1.0 / rank
    return 0.0

print(recall_at_k(["d3", "d1", "d8"], ["d1"], 3))
print(reciprocal_rank(["d3", "d1", "d8"], ["d1"]))` },
      { lang: "python", title: "汇总逐题检索结果", note: "必须保留逐题 top-k，不能只保存平均数。", code: R`rows = []
for item in evaluation_set:
    retrieved = retrieve(item["question"], top_k=5)
    ids = [doc["chunk_id"] for doc in retrieved]
    rows.append({
        "query_id": item["query_id"],
        "retrieved_ids": ids,
        "recall_at_5": recall_at_k(ids, item["relevant_doc_ids"], 5),
        "mrr": reciprocal_rank(ids, item["relevant_doc_ids"]),
    })
print("mean recall@5", sum(row["recall_at_5"] for row in rows) / len(rows))` }
    ]
  },
  "chunking-metadata": {
    title: "实现可追溯的递归切分",
    intro: "每个 chunk 带稳定 id、标题、来源和版本。",
    steps: [
      { lang: "python", title: "按段落递归切分", note: "示例使用纯 Python，便于理解切分逻辑。", code: R`def split_text(text, max_chars=500):
    paragraphs = [part.strip() for part in text.split("\n\n") if part.strip()]
    chunks, current = [], ""
    for paragraph in paragraphs:
        candidate = current + ("\n\n" if current else "") + paragraph
        if len(candidate) <= max_chars:
            current = candidate
        else:
            if current:
                chunks.append(current)
            current = paragraph
    if current:
        chunks.append(current)
    return chunks` },
      { lang: "python", title: "添加稳定元数据", note: "修改文档版本后 chunk id 也应变化。", code: R`from hashlib import sha1

records = []
for index, text in enumerate(split_text(document_text)):
    digest = sha1(text.encode("utf-8")).hexdigest()[:10]
    records.append({
        "chunk_id": "guide-v2-" + str(index).zfill(3) + "-" + digest,
        "doc_id": "guide-v2",
        "source": source_url,
        "section": section_title,
        "text": text,
    })
print(records[0])` }
    ]
  },
  "sparse-retrieval": {
    title: "搭建 BM25 关键词基线",
    intro: "使用 rank-bm25，保存分词、分数和 top-k。",
    steps: [
      { lang: "powershell", title: "安装最小依赖", note: "先在项目虚拟环境中运行。", code: R`python -m pip install rank-bm25 jieba
python -m pip freeze | Select-String "rank-bm25|jieba"` },
      { lang: "python", title: "运行中文 BM25", note: "生产项目应把分词规则与词典一起版本化。", code: R`import jieba
import numpy as np
from rank_bm25 import BM25Okapi

def tokenize(text):
    return [token.strip() for token in jieba.lcut(text.lower()) if token.strip()]

corpus_tokens = [tokenize(chunk["text"]) for chunk in chunks]
bm25 = BM25Okapi(corpus_tokens)
scores = bm25.get_scores(tokenize(question))
top_indices = np.argsort(scores)[::-1][:5]
for index in top_indices:
    print(chunks[index]["chunk_id"], round(scores[index], 3), chunks[index]["text"][:80])` }
    ]
  },
  "dense-retrieval": {
    title: "实现最小向量检索",
    intro: "使用 sentence-transformers 归一化向量，并以矩阵乘法计算余弦相似度。",
    steps: [
      { lang: "powershell", title: "安装 embedding 库", note: "模型首次加载需要联网下载。", code: R`python -m pip install sentence-transformers
python -c "import sentence_transformers; print(sentence_transformers.__version__)"` },
      { lang: "python", title: "编码并检索 top-5", note: "中文语料请选择明确支持中文的模型并核对 model card。", code: R`import numpy as np
from sentence_transformers import SentenceTransformer

encoder = SentenceTransformer("sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2")
doc_vectors = encoder.encode(
    [chunk["text"] for chunk in chunks], normalize_embeddings=True
)
query_vector = encoder.encode([question], normalize_embeddings=True)[0]
scores = doc_vectors @ query_vector
top_indices = np.argsort(scores)[::-1][:5]
for index in top_indices:
    print(chunks[index]["chunk_id"], round(float(scores[index]), 3))` }
    ]
  },
  "reranking-hybrid": {
    title: "用 RRF 合并两路召回",
    intro: "BM25 与 dense 各自排名，不直接相加原始分数。",
    steps: [
      { lang: "python", title: "实现 Reciprocal Rank Fusion", note: "k 是平滑常数，不是最终 top-k。", code: R`def reciprocal_rank_fusion(rankings, k=60):
    fused = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking, start=1):
            fused[doc_id] = fused.get(doc_id, 0.0) + 1.0 / (k + rank)
    return sorted(fused, key=fused.get, reverse=True)

bm25_ids = ["d1", "d8", "d3", "d5"]
dense_ids = ["d3", "d2", "d8", "d9"]
print(reciprocal_rank_fusion([bm25_ids, dense_ids]))` },
      { lang: "python", title: "比较四种策略", note: "同一 query 集合和 top-k 才能公平比较。", code: R`strategies = ["bm25", "dense", "hybrid", "hybrid_rerank"]
report = []
for strategy in strategies:
    metrics = evaluate_retriever(strategy, evaluation_set, top_k=5)
    report.append({
        "strategy": strategy,
        "recall_at_5": metrics["recall_at_5"],
        "mrr": metrics["mrr"],
        "p95_latency_ms": metrics["p95_latency_ms"],
    })
print(pd.DataFrame(report))` }
    ]
  },
  "rag-generation-citations": {
    title: "生成可验证引用的回答",
    intro: "上下文编号、回答引用和拒答逻辑缺一不可。",
    steps: [
      { lang: "python", title: "组装编号上下文", note: "只向模型提供最终选中的 chunks。", code: R`def build_context(chunks):
    blocks = []
    for index, chunk in enumerate(chunks, start=1):
        source_id = "S" + str(index)
        blocks.append(
            "[" + source_id + "] " + chunk["text"] +
            "\nSOURCE=" + chunk["source"]
        )
    return "\n\n".join(blocks)

context = build_context(retrieved_chunks)
print(context)` },
      { lang: "python", title: "拒绝虚构引用", note: "格式检查只能发现不存在的引用，内容支持仍需另行评估。", code: R`import re

def validate_citations(answer, chunk_count):
    cited = {int(number) for number in re.findall(r"\[S(\d+)\]", answer)}
    valid = set(range(1, chunk_count + 1))
    invalid = cited - valid
    if invalid:
        raise ValueError("invalid citations: " + str(sorted(invalid)))
    return cited

citations = validate_citations(answer, len(retrieved_chunks))
print("cited sources:", sorted(citations))` }
    ]
  },
  "rag-evaluation": {
    title: "把 RAG 失败归因到具体组件",
    intro: "证据存在性、召回、上下文选择和生成逐层判断。",
    steps: [
      { lang: "python", title: "实现四层归因", note: "has_corpus_evidence 需要由金标准或人工核对提供。", code: R`def classify_failure(item, result):
    if not item["has_corpus_evidence"]:
        return "corpus_missing"
    gold = set(item["relevant_doc_ids"])
    if not gold.intersection(result["retrieved_ids"]):
        return "retrieval_failure"
    if not gold.intersection(result["context_ids"]):
        return "ranking_failure"
    if not result["answer_supported"]:
        return "generation_failure"
    return "success"` },
      { lang: "python", title: "生成错误分布", note: "下一次实验只针对数量最多、影响最大的组件。", code: R`from collections import Counter

failures = []
for item, result in zip(evaluation_set, system_results):
    failures.append(classify_failure(item, result))

counts = Counter(failures)
for label, count in counts.most_common():
    print(label, count, round(count / len(failures), 3))

assert counts["success"] / len(failures) >= 0.70, "未达到发布门槛"` }
    ]
  },
  "research-question": {
    title: "写一份一页研究预注册",
    intro: "在运行实验前固定问题、假设、指标、排除条件和结论边界。",
    steps: [
      { lang: "markdown", title: "填写研究问题", note: "尽量包含对象、改动、对照、指标与条件。", code: R`# 研究预注册

## 问题
在 <数据/任务> 上，固定 <控制条件> 时，<方法 A> 相比 <方法 B>
是否提高 <主指标>？

## 假设
- H1：
- 支持 H1 的结果：
- 反对 H1 的结果：

## 主要指标
- 主指标：
- 次要指标：
- 不能用来下结论的指标：` },
      { lang: "markdown", title: "锁定分析规则", note: "完成后提交到 Git，再开始正式实验。", code: R`## 实验控制
- 固定数据版本：
- 固定切分：
- 固定训练/推理预算：
- 随机种子：
- 唯一改变的变量：

## 排除与停止规则
- 排除运行的条件：
- 发现 bug 后如何处理：
- 最大实验次数：

## 结论边界
即使 H1 被支持，也不能推出：

git add research-plan.md
git commit -m "Register research plan"` }
    ]
  }
});
