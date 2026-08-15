const $ = selector => document.querySelector(selector);
const homeContainer = $("#home-container");
const lessonView = $("#lesson-view");
const nav = $("#lesson-nav");
const storageKey = "ai-course-progress-v1";
const themeKey = "ai-course-theme-v1";
const lastLessonKey = "ai-course-last-lesson-v2";

let completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
let currentIndex = 0;
let activeModule = "all";
let resourceStage = "all";
let searchTerm = "";

function escapeCodeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inferLanguage(code, lesson) {
  const text = code.trim();
  if (/^(git |gh )/m.test(text)) return "git";
  if (/^(winget |Get-|New-Item|Set-|python -m|\.\\)/m.test(text)) return "powershell";
  if (/^(# |## |\|.+\|)/m.test(text)) return "markdown";
  if (/^(experiment_name:|seed:|data:|model:|train:)/m.test(text)) return "yaml";
  if (lesson.module === "git") return "git";
  return "python";
}

function codeLabHtml(lessonId) {
  const lab = codeLabs[lessonId];
  if (!lab) return "";
  return `<section class="code-lab" aria-labelledby="code-lab-title">
    <header class="code-lab-heading">
      <span>MARKDOWN 跟着敲</span>
      <h2 id="code-lab-title">${lab.title}</h2>
      <p>${lab.intro}</p>
    </header>
    <div class="code-lab-steps">${lab.steps.map((step, index) => `<article class="code-step">
      <div class="code-step-copy">
        <span>第 ${index + 1} 步</span>
        <h3>${step.title}</h3>
        <p>${step.note}</p>
      </div>
      <div class="code-block" data-language="${step.lang}">
        <div class="code-toolbar"><span>${step.lang}</span><button class="copy-code" type="button">复制代码</button></div>
        <pre><code>${escapeCodeHtml(step.code)}</code></pre>
      </div>
    </article>`).join("")}</div>
  </section>`;
}

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("浏览器拒绝复制");
}

async function copyCode(button) {
  const code = button.closest(".code-block").querySelector("code").textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      copyWithFallback(code);
    }
    button.textContent = "已复制 ✓";
    button.classList.add("copied");
  } catch (error) {
    button.textContent = "复制失败，请手动选择";
  }
  window.setTimeout(() => {
    button.textContent = "复制代码";
    button.classList.remove("copied");
  }, 1800);
}

function enhanceCodeBlocks(lesson) {
  const content = $("#lesson-content");
  content.querySelectorAll("pre").forEach(pre => {
    if (pre.closest(".code-block")) return;
    const code = pre.querySelector("code") || pre;
    const language = inferLanguage(code.textContent, lesson);
    const wrapper = document.createElement("div");
    wrapper.className = "code-block lesson-code-block";
    wrapper.dataset.language = language;
    wrapper.innerHTML = `<div class="code-toolbar"><span>${language}</span><button class="copy-code" type="button">复制代码</button></div>`;
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
  });
  content.querySelectorAll(".copy-code").forEach(button => {
    button.addEventListener("click", () => copyCode(button));
  });
}

function moduleById(id) {
  return courseModules.find(module => module.id === id);
}

function lessonsInModule(id) {
  return lessons.filter(lesson => lesson.module === id);
}

function isLessonUnlocked(index) {
  if (index <= 0) return true;
  if (completed.has(lessons[index].id)) return true;
  return completed.has(lessons[index - 1].id);
}

function firstLessonIndex(moduleId) {
  return lessons.findIndex(lesson => lesson.module === moduleId);
}

function isModuleUnlocked(moduleId) {
  return isLessonUnlocked(firstLessonIndex(moduleId));
}

function currentLearningIndex() {
  const firstIncomplete = lessons.findIndex(lesson => !completed.has(lesson.id));
  return firstIncomplete >= 0 ? firstIncomplete : lessons.length - 1;
}

function renderSequence() {
  const currentLesson = lessons[currentLearningIndex()];
  const currentModule = moduleById(currentLesson.module);
  $("#pathway-promise").textContent = pathway.promise;
  $("#current-step").innerHTML = `<span>你当前应学习</span><strong>第 ${currentLesson.number} 课 · ${currentLesson.title}</strong><small>${currentModule.title} · 完成后才解锁下一课</small>`;
  $("#sequence-rail").innerHTML = courseModules.map((module, index) => {
    const unlocked = isModuleUnlocked(module.id);
    const moduleLessons = lessonsInModule(module.id);
    const done = moduleLessons.filter(lesson => completed.has(lesson.id)).length;
    const complete = done === moduleLessons.length;
    return `<article class="sequence-stage ${unlocked ? "unlocked" : "locked"} ${complete ? "complete" : ""}">
      <div><b>${module.number}</b><span>${complete ? "已完成" : unlocked ? "可学习" : "待解锁"}</span></div>
      <h3>${module.title}</h3>
      <p>${module.lessons} · ${module.weeks}</p>
      <small>${index === 0 ? "起点：无需先修" : `先修：${module.prerequisite}`}</small>
    </article>`;
  }).join("");
  $("#sequence-rules").innerHTML = pathway.rules.map((rule, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><p>${rule}</p></div>`).join("");
}

function typeClass(type) {
  if (type.includes("B站")) return "bilibili";
  if (type.includes("YouTube")) return "youtube";
  if (type.includes("交互")) return "practice";
  if (type.includes("Git")) return "git";
  if (type.includes("官方")) return "official";
  if (type.includes("科研")) return "research";
  return "reading";
}

function navigateToLesson(index) {
  const safeIndex = Math.max(0, Math.min(index, lessons.length - 1));
  location.hash = lessons[safeIndex].id;
}

function renderModuleFilters() {
  const filters = [{ id: "all", title: "全部" }, ...courseModules];
  $("#module-filter").innerHTML = filters.map(item => {
    const count = item.id === "all" ? lessons.length : lessonsInModule(item.id).length;
    return `<button type="button" class="filter-chip ${activeModule === item.id ? "active" : ""}" data-module="${item.id}">${item.title}<small>${count}</small></button>`;
  }).join("");
  $("#module-filter").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeModule = button.dataset.module;
    renderModuleFilters();
    renderNav();
  }));
}

function renderNav() {
  const normalized = searchTerm.trim().toLowerCase();
  let html = "";
  let matches = 0;
  courseModules.forEach(module => {
    const moduleLessons = lessons.filter(lesson => {
      const inModule = lesson.module === module.id;
      const moduleAllowed = activeModule === "all" || activeModule === module.id;
      const searchable = `${lesson.number} ${lesson.title} ${lesson.summary} ${lesson.goals.join(" ")}`.toLowerCase();
      return inModule && moduleAllowed && (!normalized || searchable.includes(normalized));
    });
    if (!moduleLessons.length) return;
    matches += moduleLessons.length;
    const done = moduleLessons.filter(lesson => completed.has(lesson.id)).length;
    const moduleUnlocked = isModuleUnlocked(module.id);
    html += `<div class="nav-label ${moduleUnlocked ? "" : "locked"}"><span>${module.number} · ${module.title}</span><small>${moduleUnlocked ? `${done}/${moduleLessons.length}` : "待前置"}</small></div>`;
    html += moduleLessons.map(lesson => {
      const index = lessons.findIndex(item => item.id === lesson.id);
      const unlocked = isLessonUnlocked(index);
      return `<button class="lesson-link ${currentIndex === index && !lessonView.hidden ? "active" : ""} ${completed.has(lesson.id) ? "completed" : ""} ${unlocked ? "" : "locked"}" data-index="${index}" type="button" title="${unlocked ? "打开课程" : `预览课程；先完成第 ${lessons[index - 1].number} 课`}">
        <span class="lesson-number">${lesson.number}</span><span class="lesson-link-title">${lesson.title}</span><span class="lesson-check">${unlocked ? "✓" : "锁"}</span>
      </button>`;
    }).join("");
  });
  nav.innerHTML = html || `<p class="empty-state">没有找到“${searchTerm}”相关课程。换一个关键词试试。</p>`;
  nav.setAttribute("aria-label", `课程目录，共显示 ${matches} 课`);
  nav.querySelectorAll(".lesson-link").forEach(button => button.addEventListener("click", () => navigateToLesson(Number(button.dataset.index))));
}

function renderRoadmap() {
  $("#roadmap-grid").innerHTML = courseModules.map(module => {
    const moduleLessons = lessonsInModule(module.id);
    const done = moduleLessons.filter(lesson => completed.has(lesson.id)).length;
    const percent = Math.round(done / moduleLessons.length * 100);
    const unlocked = isModuleUnlocked(module.id);
    return `<article class="roadmap-card ${unlocked ? "unlocked" : "locked"}" style="--module-color:${module.color}">
      <div class="roadmap-top"><span>${module.number}</span><small>${unlocked ? module.weeks : "🔒 待解锁"}</small></div>
      <h3>${module.title}</h3><p>${module.subtitle}</p>
      <div class="roadmap-prerequisite"><span>先修</span><b>${module.prerequisite}</b></div>
      <div class="roadmap-output"><span>阶段作品</span><b>${module.output}</b></div>
      <div class="module-progress"><span style="width:${percent}%"></span></div>
      <div class="roadmap-meta"><small>${module.lessons} · ${done}/${moduleLessons.length} 完成</small><button type="button" data-open-module="${module.id}">${unlocked ? (done ? "继续" : "开始") : "预览"} →</button></div>
    </article>`;
  }).join("");
  $("#roadmap-grid").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const candidates = lessonsInModule(button.dataset.openModule);
    const target = candidates.find(lesson => !completed.has(lesson.id)) || candidates[0];
    navigateToLesson(lessons.findIndex(lesson => lesson.id === target.id));
  }));
}

function renderPlan() {
  $("#plan-grid").innerHTML = studyPlan.map((phase, index) => `<article class="plan-card">
    <span>阶段 ${index + 1} · 第 ${phase.weeks} 周</span>
    <h3>${phase.title}</h3>
    <p>${phase.output}</p>
    <small>课程 ${phase.lessons}</small>
    <b>${phase.gate}</b>
  </article>`).join("");
}

function renderResourceFilters() {
  const filters = [{ id: "all", title: "全部资源" }, ...courseModules];
  $("#resource-filters").innerHTML = filters.map(item => `<button type="button" class="filter-chip ${resourceStage === item.id ? "active" : ""}" data-stage="${item.id}">${item.title}</button>`).join("");
  $("#resource-filters").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    resourceStage = button.dataset.stage;
    renderResourceFilters();
    renderResources();
  }));
}

function resourceCard(resource) {
  const stage = moduleById(resource.stage);
  const unlocked = stage ? isModuleUnlocked(stage.id) : true;
  const tag = stage ? `第 ${stage.number} 阶段` : "补充资料";
  if (!unlocked) {
    return `<article class="resource-card locked" aria-label="${resource.title}，尚未解锁">
      <div><span class="platform ${typeClass(resource.type)}">${resource.type}</span><span class="level">${tag} · 待解锁</span></div>
      <h4>${resource.title}</h4><p>${resource.note}</p><strong>先完成前置阶段</strong>
    </article>`;
  }
  return `<a class="resource-card ${resource.featured ? "featured" : ""}" href="${resource.url}" target="_blank" rel="noopener noreferrer">
    <div><span class="platform ${typeClass(resource.type)}">${resource.type}</span><span class="level">${tag} · ${resource.provider}</span></div>
    <h4>${resource.title}</h4><p>${resource.note}</p><strong>打开资源 ↗</strong></a>`;
}

function renderResources() {
  const items = resourceStage === "all" ? resourceLibrary : resourceLibrary.filter(resource => resource.stage === resourceStage);
  $("#resource-grid").innerHTML = items.map(resourceCard).join("");
}

function renderRelated(lesson) {
  const items = lesson.resources.map(id => resourceLibrary.find(resource => resource.id === id)).filter(Boolean);
  const module = moduleById(lesson.module);
  const unlocked = isLessonUnlocked(lessons.findIndex(item => item.id === lesson.id));
  $("#lesson-related").innerHTML = `<div class="related-heading"><span>本课延伸资料</span><h2>先完成任务，再选一个深入</h2><p>这些资料已按“与本课直接相关”筛选，不要求全部看完。</p></div>
    <div class="related-grid">${items.map(resource => unlocked ? `<a href="${resource.url}" target="_blank" rel="noopener noreferrer">
      <small>${resource.type} · ${resource.provider}</small><strong>${resource.title}</strong><p>${resource.note}</p><b>打开资源 ↗</b>
    </a>` : `<article class="related-locked"><small>${resource.type} · 待前置</small><strong>${resource.title}</strong><p>完成上一课后解锁这份资料。</p><b>尚未解锁</b></article>`).join("")}</div>
    <div class="source-note">所属单元：${module.title} · 资料链接核对日期：${courseVersion.verifiedAt}</div>`;
}

function updateProgress() {
  completed = new Set([...completed].filter(id => lessons.some(lesson => lesson.id === id)));
  const percent = Math.round(completed.size / lessons.length * 100);
  $("#progress-text").textContent = `${percent}%`;
  $("#progress-bar").style.width = `${percent}%`;
  $("#progress-detail").textContent = `${completed.size} / ${lessons.length} 课已完成`;
  $("#continue-button").textContent = completed.size ? "继续下一节未完成课程 →" : "开始第一课 →";
  renderRoadmap();
  renderSequence();
  renderPlan();
  renderResources();
}

function showHome() {
  homeContainer.hidden = false;
  lessonView.hidden = true;
  document.title = "AI 科研入门课 · 66 课严格路线";
  renderNav();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLesson(index) {
  currentIndex = Math.max(0, Math.min(index, lessons.length - 1));
  const lesson = lessons[currentIndex];
  homeContainer.hidden = true;
  lessonView.hidden = false;
  $("#lesson-position").textContent = `第 ${currentIndex + 1} / ${lessons.length} 课`;
  $("#lesson-duration").textContent = lesson.duration;
  $("#lesson-kicker").textContent = lesson.kicker;
  $("#lesson-title").textContent = lesson.title;
  $("#lesson-summary").textContent = lesson.summary;
  const unlocked = isLessonUnlocked(currentIndex);
  const previous = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  $("#lesson-prerequisite").className = `lesson-prerequisite ${unlocked ? "ready" : "locked"}`;
  $("#lesson-prerequisite").innerHTML = currentIndex === 0
    ? `<b>起点课程</b><span>无需先修。完成本课后按顺序进入第 02 课。</span>`
    : unlocked
      ? `<b>先修已满足</b><span>上一课：${previous.number} ${previous.title}</span>`
      : `<b>预览模式 · 尚未解锁</b><span>请先完成第 ${previous.number} 课《${previous.title}》。你可以阅读，但本课不能计入完成进度。</span>`;
  $("#lesson-goals").innerHTML = lesson.goals.map(goal => `<span class="goal-chip">学会：${goal}</span>`).join("");
  $("#lesson-content").innerHTML = lesson.body + codeLabHtml(lesson.id);
  enhanceCodeBlocks(lesson);
  renderRelated(lesson);
  $("#previous-button").disabled = currentIndex === 0;
  $("#next-button").disabled = currentIndex === lessons.length - 1;
  updateCompleteButton();
  renderNav();
  closeSidebar();
  localStorage.setItem(lastLessonKey, lesson.id);
  document.title = `${lesson.number} ${lesson.title} · AI 科研入门课`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateCompleteButton() {
  const done = completed.has(lessons[currentIndex].id);
  const unlocked = isLessonUnlocked(currentIndex);
  $("#complete-button").classList.toggle("done", done);
  $("#complete-button").disabled = !unlocked;
  $("#complete-button").textContent = done ? "本课已完成 ✓" : unlocked ? "标记本课完成 ✓" : `先完成第 ${lessons[currentIndex - 1].number} 课`;
}

function toggleComplete() {
  if (!isLessonUnlocked(currentIndex)) return;
  const id = lessons[currentIndex].id;
  completed.has(id) ? completed.delete(id) : completed.add(id);
  localStorage.setItem(storageKey, JSON.stringify([...completed]));
  updateCompleteButton();
  updateProgress();
  renderNav();
}

function closeSidebar() {
  $("#sidebar").classList.remove("open");
  $("#scrim").hidden = true;
}

function loadRoute() {
  const id = decodeURIComponent(location.hash.slice(1));
  const index = lessons.findIndex(lesson => lesson.id === id);
  index >= 0 ? showLesson(index) : showHome();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeKey, theme);
  $("#theme-button").setAttribute("aria-label", theme === "dark" ? "切换到浅色主题" : "切换到深色主题");
}

$("#continue-button").addEventListener("click", () => {
  const next = lessons.findIndex(lesson => !completed.has(lesson.id));
  const savedId = localStorage.getItem(lastLessonKey);
  const savedIndex = lessons.findIndex(lesson => lesson.id === savedId);
  navigateToLesson(next >= 0 ? next : (savedIndex >= 0 ? savedIndex : 0));
});
$("#roadmap-button").addEventListener("click", () => $("#roadmap").scrollIntoView({ behavior: "smooth" }));
$("#resources-button").addEventListener("click", () => $("#resources").scrollIntoView({ behavior: "smooth" }));
$("#back-button").addEventListener("click", () => { location.hash = "home"; });
$("#previous-button").addEventListener("click", () => navigateToLesson(currentIndex - 1));
$("#next-button").addEventListener("click", () => navigateToLesson(currentIndex + 1));
$("#complete-button").addEventListener("click", toggleComplete);
$("#menu-button").addEventListener("click", () => {
  $("#sidebar").classList.toggle("open");
  $("#scrim").hidden = !$("#sidebar").classList.contains("open");
});
$("#scrim").addEventListener("click", closeSidebar);
$("#theme-button").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
$("#course-search").addEventListener("input", event => { searchTerm = event.target.value; renderNav(); });
$("#reset-progress").addEventListener("click", () => {
  if (confirm("确定清除这台设备上的全部学习进度吗？课程内容不会被删除。")) {
    completed = new Set();
    localStorage.removeItem(storageKey);
    updateProgress();
    renderNav();
    if (!lessonView.hidden) updateCompleteButton();
  }
});
window.addEventListener("hashchange", loadRoute);
window.addEventListener("keydown", event => { if (event.key === "Escape") closeSidebar(); });

$("#version-badge").textContent = courseVersion.label;
$("#verified-note").textContent = `链接核对：${courseVersion.verifiedAt}`;
$("#stat-lessons").textContent = lessons.length;
$("#stat-modules").textContent = courseModules.length;
$("#stat-resources").textContent = resourceLibrary.length;
$("#stat-weeks").textContent = pathway.totalWeeks;
renderModuleFilters();
renderNav();
renderPlan();
renderResourceFilters();
renderResources();
updateProgress();
const savedTheme = localStorage.getItem(themeKey);
applyTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
loadRoute();
