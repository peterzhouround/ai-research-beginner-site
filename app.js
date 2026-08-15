const lessons = [
  {
    id: "ai-basics", number: "01", title: "AI 到底在做什么？", kicker: "第一单元 · 建立直觉", duration: "约 10 分钟",
    summary: "先不背公式。用生活中的例子看懂数据、特征、标签、模型、训练和预测。",
    goals: ["分清输入与标签", "理解训练循环", "认识 loss"],
    body: `
      <h2>先用一句话理解 AI 模型</h2>
      <p>AI 模型可以暂时理解成一个<strong>根据输入，计算输出的程序</strong>。例如：</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>图片分类</strong><span>输入一张图片，输出“猫”或“狗”</span></div>
        <div class="concept-card"><strong>房价预测</strong><span>输入面积和位置，输出预测价格</span></div>
        <div class="concept-card"><strong>文本分类</strong><span>输入一封邮件，输出“正常”或“垃圾”</span></div>
        <div class="concept-card"><strong>对话模型</strong><span>输入一个问题，输出一段回答</span></div>
      </div>
      <p>模型刚开始通常什么都不会。我们给它许多带正确答案的例子，它会不断调整内部的<strong>参数</strong>。这个过程叫训练。</p>
      <h2>训练是怎样发生的？</h2>
      <p>假设要教模型识别猫和狗。模型第一次可能把猫认成狗，这时我们会计算它的预测与正确答案相差多远。</p>
      <div class="flow"><span>读取数据</span><b>→</b><span>作出预测</span><b>→</b><span>计算错误</span><b>→</b><span>调整参数</span></div>
      <p>预测与正确答案之间的差距叫<strong>损失（loss）</strong>。训练的目标通常就是让 loss 逐渐减小。</p>
      <blockquote>模型并不是把“猫”这个概念装进脑子里，而是在大量数据中寻找能帮助判断的规律。</blockquote>
      <h2>今天只记住五个词</h2>
      <div class="concept-grid">
        <div class="concept-card"><strong>数据 Data</strong><span>提供给模型的样本集合</span></div>
        <div class="concept-card"><strong>特征 Feature</strong><span>模型用来作判断的信息</span></div>
        <div class="concept-card"><strong>标签 Label</strong><span>样本对应的正确答案</span></div>
        <div class="concept-card"><strong>模型 Model</strong><span>把输入映射成输出的计算系统</span></div>
      </div>
      <div class="practice-box"><h3>动手想一想</h3><p>“根据一封邮件的文字判断它是不是垃圾邮件”：输入是什么？标签是什么？先在心里回答，再做下面的小测验。</p></div>`,
    quiz: { question: "在垃圾邮件识别任务中，哪一项是标签？", options: ["邮件正文", "邮件发送时间", "正常邮件或垃圾邮件", "邮件字数"], answer: 2, success: "正确！标签就是模型需要学习预测的正确答案。", failure: "再想一下：标签是模型最终需要预测的“正确答案”。" }
  },
  {
    id: "python-variables", number: "02", title: "变量：给信息贴上名字", kicker: "第一单元 · Python 基础", duration: "约 12 分钟",
    summary: "学习 Python 中的变量、数字、字符串和布尔值，并写出第一组可理解的代码。",
    goals: ["创建变量", "认识 4 种数据类型", "读懂赋值符号"],
    body: `
      <h2>变量就像带名字的盒子</h2>
      <p>程序需要记住信息。我们可以给一段信息起一个名字，之后用这个名字找到它。这个名字就是<strong>变量</strong>。</p>
      <pre><code>name = "小明"\nage = 18\nscore = 92.5\nis_beginner = True</code></pre>
      <p><code>=</code> 在这里不是数学里的“相等”，而是<strong>把右边的值交给左边的变量</strong>。可以读作：“把小明存进 name”。</p>
      <h2>四种常见数据类型</h2>
      <div class="concept-grid">
        <div class="concept-card"><strong>整数 int</strong><span>例如 18、0、-3</span></div>
        <div class="concept-card"><strong>小数 float</strong><span>例如 92.5、3.14</span></div>
        <div class="concept-card"><strong>字符串 str</strong><span>文字，需要使用引号包住</span></div>
        <div class="concept-card"><strong>布尔值 bool</strong><span>只有 True 和 False 两种状态</span></div>
      </div>
      <p>使用 <code>print()</code> 可以把内容显示出来：</p>
      <pre><code>name = "小明"\nhours = 2\nprint(name)\nprint("今天学习了", hours, "小时")</code></pre>
      <h2>变量可以发生变化</h2>
      <pre><code>score = 60\nscore = score + 10\nprint(score)  # 输出 70</code></pre>
      <p>第二行的意思是：先取出 score 当前的 60，加上 10，再把结果 70 存回 score。</p>
      <div class="practice-box"><h3>纸笔练习</h3><p>为自己的姓名、每天学习小时数、是否第一次学习 Python 各创建一个变量。注意文字要加引号，True 和 False 不加引号。</p></div>`,
    quiz: { question: "下面哪一行能正确保存文字“人工智能”？", options: ["topic = 人工智能", "topic = \"人工智能\"", "\"topic\" = 人工智能", "topic == \"人工智能\""], answer: 1, success: "正确！字符串需要用引号包住，再通过 = 赋给变量。", failure: "提示：文字属于字符串，需要放在英文引号中。" }
  },
  {
    id: "python-input", number: "03", title: "让程序与你对话", kicker: "第一单元 · Python 基础", duration: "约 12 分钟",
    summary: "使用 input 接收用户输入，进行简单计算，并理解为什么有时需要类型转换。",
    goals: ["使用 input", "理解字符串输入", "完成类型转换"],
    body: `
      <h2>用 input 接收输入</h2>
      <p><code>input()</code> 会让程序暂停，等待用户键入内容：</p>
      <pre><code>name = input("你叫什么名字？")\nprint("你好，", name)</code></pre>
      <p>无论输入的是文字还是数字，<code>input()</code> 得到的结果默认都是<strong>字符串</strong>。</p>
      <h2>数字计算前需要转换</h2>
      <pre><code>hours_text = input("今天学习了几小时？")\nhours = float(hours_text)\nweek_hours = hours * 7\nprint("一周将学习", week_hours, "小时")</code></pre>
      <p><code>float()</code> 把文字形式的数字转换成小数。若只允许整数，可以使用 <code>int()</code>。</p>
      <blockquote>常见报错并不可怕。如果看到字符串不能和数字计算，第一件事就是检查数据类型。</blockquote>
      <h2>一个完整的小程序</h2>
      <pre><code>name = input("你的名字：")\ndays = int(input("每周学习几天？"))\nhours = float(input("每天学习几小时？"))\ntotal = days * hours\nprint(name, "每周计划学习", total, "小时")</code></pre>
      <div class="practice-box"><h3>修改挑战</h3><p>在程序中再询问“计划坚持多少周”，最后算出这段时间一共会学习多少小时。</p></div>`,
    quiz: { question: "用户输入 3 后，input() 默认得到的是什么？", options: ["整数 3", "小数 3.0", "字符串 \"3\"", "布尔值 True"], answer: 2, success: "正确！input() 默认得到字符串，需要转换后再计算。", failure: "记住：input() 接收到的内容默认一律按文字处理。" }
  },
  {
    id: "conditions", number: "04", title: "让程序学会判断", kicker: "第一单元 · Python 基础", duration: "约 15 分钟",
    summary: "使用 if、elif 和 else 根据不同条件执行不同代码，完成第一个学习状态判断器。",
    goals: ["写出条件判断", "理解缩进", "使用比较运算符"],
    body: `
      <h2>如果……那么……</h2>
      <p>程序经常需要根据情况做不同的事。Python 使用 <code>if</code> 表示“如果”：</p>
      <pre><code>score = 85\n\nif score &gt;= 60:\n    print("及格了")\nelse:\n    print("还需要继续努力")</code></pre>
      <p><code>&gt;=</code> 表示“大于或等于”。条件后面需要冒号；下一行前面的四个空格叫<strong>缩进</strong>，表示这行代码属于这个条件。</p>
      <h2>处理三种以上的情况</h2>
      <pre><code>hours = float(input("今天学习了几小时？"))\n\nif hours &gt;= 2:\n    print("今天完成得很扎实！")\nelif hours &gt; 0:\n    print("已经开始了，明天继续。")\nelse:\n    print("先从 10 分钟开始也可以。")</code></pre>
      <div class="concept-grid">
        <div class="concept-card"><strong>==</strong><span>判断两边是否相等</span></div>
        <div class="concept-card"><strong>!=</strong><span>判断两边是否不相等</span></div>
        <div class="concept-card"><strong>&gt; 与 &lt;</strong><span>大于与小于</span></div>
        <div class="concept-card"><strong>&gt;= 与 &lt;=</strong><span>大于等于与小于等于</span></div>
      </div>
      <blockquote><code>=</code> 是赋值；<code>==</code> 才是判断是否相等。这是初学者最常见的混淆之一。</blockquote>
      <div class="practice-box"><h3>本单元小作品</h3><p>制作“学习状态判断器”：询问今天学习多少分钟。大于等于 60 分钟输出“完成目标”，1～59 分钟输出“保持节奏”，0 分钟输出“现在学 10 分钟吧”。</p></div>`,
    quiz: { question: "在 Python 条件判断中，哪个符号表示“等于”？", options: ["=", "==", "!=", ">="], answer: 1, success: "正确！== 用于比较，= 用于给变量赋值。", failure: "提示：单个等号是赋值，判断相等需要两个等号。" }
  },
  {
    id: "git-basics", number: "05", title: "Git：给代码装上时光机", kicker: "第一单元 · 工具基础", duration: "约 18 分钟",
    summary: "理解 Git 与 GitHub 的区别，认识仓库、工作区、暂存区和提交，并完成第一次版本记录。",
    goals: ["分清 Git 与 GitHub", "理解 add 和 commit", "完成一次版本记录"],
    body: `
      <h2>Git 是什么？</h2>
      <p>写代码时，我们经常会出现这些文件：<code>最终版.py</code>、<code>最终版2.py</code>、<code>真的最终版.py</code>。Git 就是解决这个问题的<strong>版本控制工具</strong>：它会记录项目每一次有意义的变化，让你知道改了什么、为什么改，也能回到以前的版本。</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>Git</strong><span>安装在电脑上的版本控制工具，不联网也能记录历史</span></div>
        <div class="concept-card"><strong>GitHub</strong><span>托管 Git 仓库的网站，用来备份、分享和协作</span></div>
      </div>
      <blockquote>Git 不等于 GitHub。可以把 Git 想成相机，把 commit 想成拍照，把 GitHub 想成保存和分享相册的云端平台。</blockquote>

      <h2>四个必须认识的词</h2>
      <div class="concept-grid">
        <div class="concept-card"><strong>Repository 仓库</strong><span>被 Git 管理的项目文件夹</span></div>
        <div class="concept-card"><strong>Working Directory 工作区</strong><span>你正在编辑的文件</span></div>
        <div class="concept-card"><strong>Staging Area 暂存区</strong><span>准备放进下一次提交的改动</span></div>
        <div class="concept-card"><strong>Commit 提交</strong><span>带有说明的一次项目快照</span></div>
      </div>
      <div class="flow"><span>修改文件</span><b>→</b><span>git add</span><b>→</b><span>git commit</span><b>→</b><span>保存一版</span></div>

      <h2>第一次使用前的配置</h2>
      <p>名字和邮箱会写进提交记录。邮箱应使用你 GitHub 账号已验证的邮箱：</p>
      <pre><code>git config --global user.name "你的GitHub用户名"\ngit config --global user.email "你的邮箱"</code></pre>
      <p><code>--global</code> 表示这项配置适用于当前电脑上的所有 Git 项目，一般只需设置一次。</p>

      <h2>完成第一次版本记录</h2>
      <p>打开项目文件夹中的终端，按顺序运行：</p>
      <pre><code>git init\ngit status\ngit add index.html styles.css app.js favicon.svg README.md\ngit status\ngit commit -m "Create AI beginner course website"</code></pre>
      <ol>
        <li><code>git init</code>：把普通文件夹变成 Git 仓库。</li>
        <li><code>git status</code>：查看当前状态，安全且可以经常使用。</li>
        <li><code>git add</code>：选择要放进下一次提交的文件。</li>
        <li><code>git commit -m</code>：创建一次带说明的版本快照。</li>
      </ol>
      <p>提交信息要说明“这次完成了什么”，例如 <code>Add Git basics lesson</code>，不要只写 <code>update</code> 或 <code>修改</code>。</p>

      <h2>哪些文件不应该提交？</h2>
      <p>密码、AccessKey、私钥、超大数据集、模型权重和临时缓存通常不应上传。可以在项目根目录创建 <code>.gitignore</code>：</p>
      <pre><code># Python 缓存\n__pycache__/\n*.pyc\n\n# 虚拟环境\n.venv/\n\n# 密钥和本地配置\n.env\n*.pem\n\n# 大型训练产物\nmodels/\ncheckpoints/</code></pre>
      <blockquote>如果密码已经被提交，仅把文件删除还不够：它可能仍留在历史记录中。应立即撤销或更换该密码。</blockquote>

      <h2>Git 与 GitHub 怎样连接？</h2>
      <pre><code>git remote add origin https://github.com/用户名/仓库名.git\ngit branch -M main\ngit push -u origin main</code></pre>
      <p><code>origin</code> 是远程仓库常用的别名；<code>push</code> 把本地提交发送到 GitHub。以后更新通常重复“修改 → add → commit → push”。</p>
      <div class="practice-box"><h3>本课实践</h3><p>在一个只含 <code>notes.txt</code> 的练习文件夹中执行 init、add 和 commit。修改文字后再次提交，然后用 <code>git log --oneline</code> 查看两次历史。不要在重要项目上练习删除或回退命令。</p></div>`,
    quiz: { question: "修改了三个文件，但只想把其中两个放进下一次提交，应该使用哪条命令？", options: ["git add 指定的两个文件", "git commit --all", "git push", "git init"], answer: 0, success: "正确！git add 可以精确选择本次提交包含哪些改动。", failure: "提示：暂存区的作用就是选择下一次提交包含哪些改动。" }
  },
  {
    id: "git-workflow", number: "06", title: "Git 工作流：从修改到提交", kicker: "第二单元 · Git 基础", duration: "约 25 分钟",
    summary: "亲手走完工作区、暂存区和仓库三层流程，学会检查状态、查看差异并写出清楚的提交记录。",
    goals: ["理解文件的 4 种状态", "区分 diff 与 diff --staged", "写出规范 commit"],
    body: `
      <h2>Git 管理的不是“文件”，而是文件状态</h2>
      <p>同一个文件会在几个状态之间变化。理解状态，比死记命令更重要：</p>
      <div class="flow"><span>Untracked<br>未跟踪</span><b>→</b><span>Modified<br>已修改</span><b>→</b><span>Staged<br>已暂存</span><b>→</b><span>Committed<br>已提交</span></div>
      <ul>
        <li><strong>未跟踪：</strong>新文件，Git 还不知道是否需要管理它。</li>
        <li><strong>已修改：</strong>Git 认识这个文件，但工作区内容和上次提交不同。</li>
        <li><strong>已暂存：</strong>某个版本的改动已经放入下一次提交清单。</li>
        <li><strong>已提交：</strong>快照已写入本地仓库历史。</li>
      </ul>

      <h2>建立一个不会伤到真实项目的练习仓库</h2>
      <p>新建一个空文件夹 <code>git-practice</code>，在里面打开终端：</p>
      <pre><code>git init\ngit status</code></pre>
      <p><code>git init</code> 会创建隐藏的 <code>.git</code> 目录。它保存版本历史和配置；普通代码仍在原来的工作目录中。不要手动修改 <code>.git</code>。</p>
      <p>用编辑器创建 <code>notes.md</code>，写入：</p>
      <pre><code># Git 学习笔记\n\n今天认识了工作区、暂存区和仓库。</code></pre>
      <p>再次运行 <code>git status</code>，它应出现在 <strong>Untracked files</strong> 中。</p>

      <h2>暂存：精确选择下一张“照片”的内容</h2>
      <pre><code>git add notes.md\ngit status</code></pre>
      <p><code>git add</code> 不是“上传”，也不是“永久保存”。它只是把当前版本的 <code>notes.md</code> 放进暂存区。暂存之后继续修改该文件，会同时存在“已暂存版本”和“后来又修改的版本”。</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>git diff</strong><span>查看工作区与暂存区之间的差异</span></div>
        <div class="concept-card"><strong>git diff --staged</strong><span>查看暂存区与上次提交之间的差异</span></div>
      </div>
      <pre><code>git diff\ngit diff --staged</code></pre>

      <h2>提交：创建一张带说明的快照</h2>
      <pre><code>git commit -m "Add first Git learning note"</code></pre>
      <p>一次提交由快照、作者、时间、说明和唯一编号组成。好的提交尽量只完成一件事：</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>好：Add Git lesson quiz</strong><span>说明了具体新增内容</span></div>
        <div class="concept-card"><strong>差：update</strong><span>未来无法判断改了什么</span></div>
      </div>

      <h2>查看历史和某次提交</h2>
      <pre><code>git log\ngit log --oneline\ngit log --oneline --graph --decorate\ngit show HEAD</code></pre>
      <ul>
        <li><code>HEAD</code>：你当前所在位置，通常指向当前分支的最新提交。</li>
        <li><code>git log --oneline</code>：用紧凑格式查看历史。</li>
        <li><code>git show HEAD</code>：查看最新提交具体改了什么。</li>
      </ul>

      <h2>日常最可靠的循环</h2>
      <pre><code>git status\ngit diff\ngit add 指定文件\ngit diff --staged\ngit commit -m "清楚的说明"\ngit status</code></pre>
      <blockquote>初学阶段不要习惯性使用 <code>git add .</code>。先用 <code>git status</code> 看清文件，再明确添加需要提交的文件，可以避免把数据、密钥和临时文件一起提交。</blockquote>
      <div class="practice-box"><h3>本课实验：做出三次有意义的提交</h3><ol><li>提交一个只有标题的 notes.md。</li><li>增加“工作区、暂存区、仓库”的解释并提交。</li><li>增加一段常用命令并提交。</li></ol><p>最后运行 <code>git log --oneline</code>，检查三条说明是否能让陌生人理解项目如何演进。</p></div>`,
    quiz: { question: "已经执行 git add，想在提交前确认暂存区究竟包含哪些改动，应该运行什么？", options: ["git diff", "git diff --staged", "git push", "git init"], answer: 1, success: "正确！--staged 查看暂存区与上次提交之间的差异。", failure: "git diff 默认看未暂存改动；暂存区内容需要加 --staged。" }
  },
  {
    id: "git-undo", number: "07", title: "Git 修正与撤销：先看清，再动手", kicker: "第二单元 · Git 基础", duration: "约 25 分钟",
    summary: "区分尚未暂存、已经暂存、已经提交和已经推送四种场景，选择不会误删工作的修正方式。",
    goals: ["安全取消暂存", "理解 amend 与 revert", "识别危险命令"],
    body: `
      <h2>先判断错误发生在哪一层</h2>
      <p>“撤销”不是一个动作。文件所在层次不同，处理方法也不同：</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>工作区改错了</strong><span>还没有执行 git add</span></div>
        <div class="concept-card"><strong>暂存错文件</strong><span>执行了 add，但还没 commit</span></div>
        <div class="concept-card"><strong>刚提交就发现遗漏</strong><span>commit 已完成，但还没 push</span></div>
        <div class="concept-card"><strong>错误已推送</strong><span>其他人可能已经基于它工作</span></div>
      </div>
      <blockquote>任何撤销前都先运行 <code>git status</code> 和 <code>git diff</code>。未提交的改动最脆弱；Git 很难恢复从未提交过的内容。</blockquote>

      <h2>场景一：不想提交某个已暂存文件</h2>
      <pre><code>git status\ngit restore --staged notes.md\ngit status</code></pre>
      <p>这会把文件从暂存区拿回工作区，<strong>不会删除你写的内容</strong>。之后可以修改、稍后提交或加入 <code>.gitignore</code>。</p>

      <h2>场景二：彻底放弃工作区修改</h2>
      <pre><code>git diff notes.md\n# 只有确认不要这些修改后，才执行：\ngit restore notes.md</code></pre>
      <p><code>git restore notes.md</code> 会用暂存区或最近提交的版本覆盖工作区，未提交内容会丢失。本站把它标记为<strong>谨慎操作</strong>：必须先看 diff。</p>

      <h2>场景三：修正刚刚的本地提交</h2>
      <p>提交说明写错，且还没有推送：</p>
      <pre><code>git commit --amend -m "Correct commit message"</code></pre>
      <p>提交漏掉一个文件：</p>
      <pre><code>git add forgotten-file.md\ngit commit --amend --no-edit</code></pre>
      <p><code>--amend</code> 会创建一个新提交替换旧提交，因此提交编号会改变。对于已经推送、可能被别人使用的提交，不要随意 amend。</p>

      <h2>场景四：撤销已经共享的提交</h2>
      <pre><code>git log --oneline\ngit show 要撤销的提交编号\ngit revert 要撤销的提交编号</code></pre>
      <p><code>git revert</code> 不删除历史，而是创建一个“反向修改”的新提交，因此更适合公开分支和协作环境。</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>amend</strong><span>重写最近一次本地提交，适合尚未共享的历史</span></div>
        <div class="concept-card"><strong>revert</strong><span>增加反向提交，适合已经共享的历史</span></div>
      </div>

      <h2>临时切换任务：stash</h2>
      <pre><code>git stash push -m "unfinished notes"\ngit stash list\ngit stash pop</code></pre>
      <p><code>stash</code> 可以临时收起尚未提交的修改，但它不是长期备份。恢复后仍应检查、测试并正常提交。</p>

      <h2>初学阶段先避开的命令</h2>
      <pre><code>git reset --hard\ngit clean -fd\ngit push --force</code></pre>
      <p>这些命令可能丢失未提交文件或重写远程历史。教程不会让你把它们当成日常修复工具；必须在理解目标、范围和恢复方案后使用。</p>
      <div class="practice-box"><h3>本课实验：安全取消暂存</h3><p>同时修改 notes.md 和 README.md，把两者都 add。然后仅用 <code>git restore --staged README.md</code> 取消 README 的暂存。运行 status，确认两个文件内容都还存在，但只有 notes.md 等待提交。</p></div>`,
    quiz: { question: "一个错误提交已经推送到多人共用的 main 分支，通常更安全的做法是什么？", options: ["git reset --hard", "删除 .git 文件夹", "git revert 错误提交", "git push --force"], answer: 2, success: "正确！revert 用新提交抵消旧提交，不会悄悄改写共享历史。", failure: "共享历史应尽量保留可追踪性；选择创建反向提交的方法。" }
  },
  {
    id: "git-branches", number: "08", title: "Git 分支：安全地尝试新想法", kicker: "第二单元 · Git 基础", duration: "约 28 分钟",
    summary: "理解分支和 HEAD，学会创建、切换、合并分支，并用可控步骤处理一次合并冲突。",
    goals: ["创建功能分支", "把分支合入 main", "读懂冲突标记"],
    body: `
      <h2>分支不是复制整个项目文件夹</h2>
      <p>分支本质上是指向某次提交的轻量指针。创建分支很快，因为 Git 不需要复制每个文件。</p>
      <div class="flow"><span>main<br>A—B</span><b>→</b><span>创建分支</span><b>→</b><span>feature<br>A—B—C</span><b>→</b><span>合并回 main</span></div>
      <p><code>HEAD</code> 表示你当前检出的分支位置。提交会让当前分支向前移动。</p>

      <h2>为一个独立任务创建分支</h2>
      <pre><code>git status\ngit switch -c feature/add-git-lesson\ngit branch\ngit status</code></pre>
      <ul>
        <li><code>git switch -c</code>：创建并立即切换到新分支。</li>
        <li><code>git branch</code>：列出分支，星号表示当前分支。</li>
        <li>分支名称应描述任务，例如 <code>feature/add-quiz</code> 或 <code>fix/mobile-layout</code>。</li>
      </ul>
      <p>在功能分支修改并提交：</p>
      <pre><code>git add app.js styles.css\ngit commit -m "Add detailed Git lesson"</code></pre>

      <h2>把功能分支合并到 main</h2>
      <pre><code>git switch main\ngit status\ngit merge feature/add-git-lesson</code></pre>
      <p>关键规则：<strong>先切换到接收改动的分支，再 merge 要合进来的分支</strong>。这里 main 接收 feature 的改动，所以先 switch main。</p>

      <h2>为什么会发生冲突？</h2>
      <p>如果两个分支修改了同一文件的同一区域，Git 无法替你判断哪个版本正确，会暂停合并并写入冲突标记：</p>
      <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nmain 分支的内容\n=======\nfeature 分支的内容\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/add-git-lesson</code></pre>
      <p>解决步骤：</p>
      <ol>
        <li>运行 <code>git status</code> 找到冲突文件。</li>
        <li>打开文件，理解两边意图，编辑成最终正确内容。</li>
        <li>删除 <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>、<code>=======</code>、<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> 标记。</li>
        <li>运行测试或打开页面检查结果。</li>
        <li><code>git add 冲突文件</code> 标记为已解决。</li>
        <li><code>git commit</code> 完成合并。</li>
      </ol>
      <p>如果发现合并方向错了，且还没有提交合并结果，可以使用：</p>
      <pre><code>git merge --abort</code></pre>
      <p>它会退出当前合并，回到合并开始前的状态。</p>

      <h2>合并后清理分支</h2>
      <pre><code>git branch --merged\ngit branch -d feature/add-git-lesson</code></pre>
      <p><code>-d</code> 默认只删除已合并分支，比强制删除更适合初学者。删除分支并不会删除已经合入 main 的提交。</p>
      <blockquote>一个分支只处理一类改动。不要在“添加 Git 课程”的分支里顺手重构完全无关的模型代码，否则审查和撤销都会变困难。</blockquote>
      <div class="practice-box"><h3>本课实验：无冲突合并</h3><p>从 main 创建 <code>feature/add-summary</code>，只在 notes.md 末尾增加一段总结并提交。切回 main 合并该分支，确认日志中能看到新提交，再安全删除已经合并的分支。</p></div>`,
    quiz: { question: "要把 feature 分支的改动合入 main，正确顺序是什么？", options: ["在 feature 上运行 git merge main", "切到 main，再运行 git merge feature", "删除 main 后重建", "在任意分支运行 git push"], answer: 1, success: "正确！先进入接收改动的 main，再合并 feature。", failure: "想清楚哪个分支要接收改动：先切换到它，再执行 merge。" }
  },
  {
    id: "git-remotes", number: "09", title: "GitHub 协作：从本地到公开网站", kicker: "第二单元 · GitHub 实践", duration: "约 30 分钟",
    summary: "连接本地与远程仓库，理解 clone、fetch、pull、push，并走完分支、Pull Request、审查和合并流程。",
    goals: ["理解 origin", "区分 fetch 与 pull", "走完 GitHub Flow"],
    body: `
      <h2>本地仓库与远程仓库</h2>
      <p>本地仓库在你的电脑上，远程仓库位于 GitHub。远程不是“真正的仓库”，本地也不是“副本中的副本”；两边都有完整历史，只是需要同步。</p>
      <div class="concept-grid">
        <div class="concept-card"><strong>origin</strong><span>第一个远程仓库常用的别名，不是固定关键词</span></div>
        <div class="concept-card"><strong>main</strong><span>常见默认分支名称，与 origin 是不同概念</span></div>
      </div>

      <h2>两种开始方式不要混用</h2>
      <h3>方式 A：GitHub 已有仓库，克隆到电脑</h3>
      <pre><code>git clone https://github.com/用户名/仓库名.git\ncd 仓库名\ngit remote -v</code></pre>
      <p><code>clone</code> 会创建文件夹、下载文件和历史、设置名为 origin 的远程，并检出默认分支。</p>
      <h3>方式 B：本地已有项目，连接新建的空仓库</h3>
      <pre><code>git init\ngit add index.html styles.css app.js favicon.svg README.md\ngit commit -m "Create AI beginner course website"\ngit branch -M main\ngit remote add origin https://github.com/用户名/仓库名.git\ngit remote -v\ngit push -u origin main</code></pre>
      <p><code>-u</code> 建立本地 main 与远程 main 的跟踪关系。以后通常可以直接运行 <code>git push</code>。</p>

      <h2>fetch、pull、push 的方向</h2>
      <div class="concept-grid">
        <div class="concept-card"><strong>git fetch</strong><span>下载远程信息，但不自动修改当前工作分支</span></div>
        <div class="concept-card"><strong>git pull</strong><span>下载并合并，通常等于 fetch + merge</span></div>
        <div class="concept-card"><strong>git push</strong><span>把本地提交发送到远程</span></div>
        <div class="concept-card"><strong>git clone</strong><span>第一次获取完整远程仓库</span></div>
      </div>
      <pre><code>git fetch origin\ngit log --oneline --graph --all\ngit pull origin main\ngit push origin main</code></pre>
      <blockquote>运行 pull 前先提交或妥善保存本地修改，并查看 status。否则远程改动与本地未完成工作混在一起，会增加冲突处理难度。</blockquote>

      <h2>GitHub Flow：真实协作的完整路线</h2>
      <div class="flow"><span>创建分支</span><b>→</b><span>提交改动</span><b>→</b><span>推送分支</span><b>→</b><span>发起 PR</span><b>→</b><span>审查合并</span></div>
      <pre><code>git switch -c feature/git-course\n# 修改并测试\ngit add app.js index.html styles.css README.md\ngit commit -m "Expand Git course"\ngit push -u origin feature/git-course</code></pre>
      <p>然后在 GitHub 创建 Pull Request。PR 不是“上传文件”的按钮，而是<strong>提议把一个分支的提交合并到另一个分支</strong>。说明至少回答：</p>
      <ul>
        <li>改了什么？</li>
        <li>为什么要改？</li>
        <li>如何验证？</li>
        <li>是否有已知风险或后续工作？</li>
      </ul>
      <p>合并后，本地切回 main 并同步：</p>
      <pre><code>git switch main\ngit pull origin main\ngit branch -d feature/git-course</code></pre>

      <h2>身份验证与安全</h2>
      <p>GitHub 不再接受账户密码作为 Git HTTPS 推送密码。初学者可使用 GitHub CLI：</p>
      <pre><code>gh auth login\ngh auth status</code></pre>
      <p>设备验证码只能在 GitHub 官方页面输入。不要把个人访问令牌、SSH 私钥或一次性验证码发到公开仓库、聊天群或截图中。</p>

      <h2>实战：发布这个教程网站</h2>
      <ol>
        <li>在 GitHub 创建公开仓库 <code>ai-research-beginner-site</code>。</li>
        <li>在本地网站目录初始化 Git，并提交 5 个网站文件。</li>
        <li>添加 origin 并推送 main。</li>
        <li>在仓库 Settings → Pages 中选择从 main 根目录部署。</li>
        <li>等待生成公开网址，再用手机和无痕窗口检查。</li>
      </ol>
      <div class="practice-box"><h3>单元毕业标准</h3><p>你能独立完成：查看状态 → 创建分支 → 修改 → 检查 diff → 精确暂存 → 提交 → 推送 → 建 PR → 合并 → 同步 main，并能解释每一步改变了本地还是远程的什么状态。</p></div>`,
    quiz: { question: "只想下载远程最新信息进行比较，但暂时不合并到当前分支，应该使用什么？", options: ["git fetch", "git pull", "git push", "git commit"], answer: 0, success: "正确！fetch 更新远程跟踪信息，不会自动合并进当前分支。", failure: "pull 通常会继续合并；题目要求只下载信息。" }
  }
];

const storageKey = "ai-course-progress-v1";
const themeKey = "ai-course-theme-v1";
let completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
let currentIndex = 0;
const $ = selector => document.querySelector(selector);
const nav = $("#lesson-nav");
const homeView = $("#home-view");
const roadmap = $("#roadmap");
const resourcesView = $("#resources");
const lessonView = $("#lesson-view");

const relatedResources = {
  "ai-basics": [
    { label: "稍后观看", title: "3Blue1Brown：神经网络直觉", note: "先看第一集即可，不要求理解公式。", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" }
  ],
  "python-variables": [
    { label: "配套视频", title: "北理工 Python：语法元素与数字类型", note: "在课程选集中观看 2.5、4.2 与 4.4。", url: "https://www.bilibili.com/video/BV1JL4y1x7xC/" },
    { label: "查阅教程", title: "廖雪峰 Python 教程", note: "阅读 Python 基础中的数据类型和变量。", url: "https://liaoxuefeng.com/books/python/introduction/" }
  ],
  "python-input": [
    { label: "配套视频", title: "北理工 Python 语言程序设计", note: "复习输入输出，再自己修改本站的小程序。", url: "https://www.bilibili.com/video/BV1JL4y1x7xC/" },
    { label: "在线练习", title: "Kaggle Learn Python", note: "完成 Hello, Python 中的变量与数字练习。", url: "https://www.kaggle.com/learn/python" }
  ],
  "conditions": [
    { label: "配套视频", title: "北理工 Python：程序的控制结构", note: "课程选集 5.2，重点理解 if、elif 和 else。", url: "https://www.bilibili.com/video/BV1JL4y1x7xC/" },
    { label: "在线练习", title: "Kaggle：Booleans and Conditionals", note: "学完本站课程后再做，检验是否真正掌握。", url: "https://www.kaggle.com/learn/python" }
  ],
  "git-basics": [
    { label: "中文教材", title: "Pro Git：Git 基础", note: "官方开源书，重点阅读获取仓库、记录更新和远程仓库。", url: "https://git-scm.com/book/zh/v2" },
    { label: "官方入门", title: "GitHub：Getting started with Git", note: "用时间机器的比喻理解仓库、提交、分支和远程仓库。", url: "https://docs.github.com/en/get-started/learning-to-code/getting-started-with-git" }
  ],
  "git-workflow": [
    { label: "中文教材", title: "Pro Git：记录每次更新", note: "对应工作区、暂存区、文件状态、diff 与 commit。", url: "https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库" },
    { label: "速查表", title: "Git 官方命令速查表", note: "完成课程后保存，用于回忆常见命令，不建议跳过概念直接背表。", url: "https://git-scm.com/cheat-sheet.pdf" }
  ],
  "git-undo": [
    { label: "中文教材", title: "Pro Git：撤消操作", note: "重点留意不可逆操作警告，以及 amend 对提交编号的影响。", url: "https://git-scm.com/book/zh/v2/Git-基础-撤消操作" }
  ],
  "git-branches": [
    { label: "中文教材", title: "Pro Git：分支的新建与合并", note: "结合图示理解分支指针、三方合并与冲突标记。", url: "https://git-scm.com/book/zh/v2/Git-分支-分支的新建与合并" }
  ],
  "git-remotes": [
    { label: "官方文档", title: "GitHub：管理远程仓库", note: "学习 origin、remote add、remote -v 和远程地址管理。", url: "https://docs.github.com/en/get-started/git-basics/managing-remote-repositories" },
    { label: "官方实践", title: "GitHub Flow", note: "完整练习分支、提交、Pull Request、审查、合并和清理。", url: "https://docs.github.com/en/get-started/using-github/github-flow" }
  ]
};

function relatedHtml(lessonId) {
  const items = relatedResources[lessonId] || [];
  if (!items.length) return "";
  return `<section class="lesson-related"><div class="related-heading"><span>课后延伸</span><h2>只选一个继续</h2></div><div class="related-grid">${items.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer"><small>${item.label}</small><strong>${item.title}</strong><p>${item.note}</p><b>打开资源 ↗</b></a>`).join("")}</div></section>`;
}

function renderNav() {
  nav.innerHTML = lessons.map((lesson, index) => `
    ${index === 0 ? '<div class="nav-label">单元 1 · AI 与 Python 起步</div>' : ''}
    ${index === 4 ? '<div class="nav-label">单元 2 · Git 与 GitHub</div>' : ''}
    <button class="lesson-link ${currentIndex === index && !lessonView.hidden ? "active" : ""} ${completed.has(lesson.id) ? "completed" : ""}" data-index="${index}" type="button">
      <span class="lesson-number">${lesson.number}</span><span class="lesson-link-title">${lesson.title}</span><span class="lesson-check">✓</span>
    </button>`).join("");
  nav.querySelectorAll(".lesson-link").forEach(button => button.addEventListener("click", () => showLesson(Number(button.dataset.index))));
}

function updateProgress() {
  const percent = Math.round(completed.size / lessons.length * 100);
  $("#progress-text").textContent = `${percent}%`;
  $("#progress-bar").style.width = `${percent}%`;
  $("#progress-detail").textContent = `${completed.size} / ${lessons.length} 课已完成`;
  $("#continue-button").textContent = completed.size ? "继续学习 →" : "开始第一课 →";
}

function showHome() {
  homeView.hidden = false; roadmap.hidden = false; resourcesView.hidden = false; lessonView.hidden = true;
  history.replaceState(null, "", "#home"); renderNav(); closeSidebar(); window.scrollTo({top: 0, behavior: "smooth"});
}

function showLesson(index) {
  currentIndex = Math.max(0, Math.min(index, lessons.length - 1));
  const lesson = lessons[currentIndex];
  homeView.hidden = true; roadmap.hidden = true; resourcesView.hidden = true; lessonView.hidden = false;
  $("#lesson-duration").textContent = lesson.duration;
  $("#lesson-kicker").textContent = lesson.kicker;
  $("#lesson-title").textContent = lesson.title;
  $("#lesson-summary").textContent = lesson.summary;
  $("#lesson-goals").innerHTML = lesson.goals.map(goal => `<span class="goal-chip">学会：${goal}</span>`).join("");
  $("#lesson-content").innerHTML = lesson.body + relatedHtml(lesson.id);
  $("#quiz-title").textContent = lesson.quiz.question;
  $("#quiz-options").innerHTML = lesson.quiz.options.map((option, i) => `<button class="quiz-option" type="button" data-option="${i}">${String.fromCharCode(65 + i)}. ${option}</button>`).join("");
  $("#quiz-feedback").textContent = "";
  $("#quiz-options").querySelectorAll("button").forEach(button => button.addEventListener("click", answerQuiz));
  $("#previous-button").disabled = currentIndex === 0;
  $("#next-button").disabled = currentIndex === lessons.length - 1;
  updateCompleteButton(); renderNav(); closeSidebar();
  history.replaceState(null, "", `#${lesson.id}`); window.scrollTo({top: 0, behavior: "smooth"});
}

function answerQuiz(event) {
  const selected = Number(event.currentTarget.dataset.option);
  const quiz = lessons[currentIndex].quiz;
  $("#quiz-options").querySelectorAll("button").forEach((button, i) => {
    button.disabled = true;
    if (i === quiz.answer) button.classList.add("correct");
    if (i === selected && selected !== quiz.answer) button.classList.add("wrong");
  });
  $("#quiz-feedback").textContent = selected === quiz.answer ? quiz.success : quiz.failure;
}

function updateCompleteButton() {
  const done = completed.has(lessons[currentIndex].id);
  $("#complete-button").classList.toggle("done", done);
  $("#complete-button").textContent = done ? "本课已完成 ✓" : "标记本课完成 ✓";
}

function toggleComplete() {
  const id = lessons[currentIndex].id;
  completed.has(id) ? completed.delete(id) : completed.add(id);
  localStorage.setItem(storageKey, JSON.stringify([...completed]));
  updateCompleteButton(); updateProgress(); renderNav();
}

function closeSidebar() { $("#sidebar").classList.remove("open"); $("#scrim").hidden = true; }
function loadRoute() {
  const id = location.hash.slice(1);
  const index = lessons.findIndex(lesson => lesson.id === id);
  index >= 0 ? showLesson(index) : showHome();
}
function applyTheme(theme) { document.documentElement.dataset.theme = theme; localStorage.setItem(themeKey, theme); }

$("#continue-button").addEventListener("click", () => { const next = lessons.findIndex(lesson => !completed.has(lesson.id)); showLesson(next >= 0 ? next : 0); });
$("#roadmap-button").addEventListener("click", () => $("#roadmap").scrollIntoView({behavior: "smooth"}));
$("#resources-button").addEventListener("click", () => $("#resources").scrollIntoView({behavior: "smooth"}));
$("#back-button").addEventListener("click", showHome);
$("#previous-button").addEventListener("click", () => showLesson(currentIndex - 1));
$("#next-button").addEventListener("click", () => showLesson(currentIndex + 1));
$("#complete-button").addEventListener("click", toggleComplete);
$("#menu-button").addEventListener("click", () => { $("#sidebar").classList.toggle("open"); $("#scrim").hidden = !$("#sidebar").classList.contains("open"); });
$("#scrim").addEventListener("click", closeSidebar);
$("#theme-button").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
$("#reset-progress").addEventListener("click", () => {
  if (confirm("确定清除这台设备上的学习进度吗？")) { completed = new Set(); localStorage.removeItem(storageKey); updateProgress(); renderNav(); if (!lessonView.hidden) updateCompleteButton(); }
});
window.addEventListener("hashchange", loadRoute);
window.addEventListener("keydown", event => { if (event.key === "Escape") closeSidebar(); });
const savedTheme = localStorage.getItem(themeKey);
applyTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
updateProgress(); renderNav(); loadRoute();
