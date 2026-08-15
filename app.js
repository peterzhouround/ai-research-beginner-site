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

function moduleById(id) {
  return courseModules.find(module => module.id === id);
}

function lessonsInModule(id) {
  return lessons.filter(lesson => lesson.module === id);
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
    html += `<div class="nav-label"><span>${module.number} · ${module.title}</span><small>${done}/${moduleLessons.length}</small></div>`;
    html += moduleLessons.map(lesson => {
      const index = lessons.findIndex(item => item.id === lesson.id);
      return `<button class="lesson-link ${currentIndex === index && !lessonView.hidden ? "active" : ""} ${completed.has(lesson.id) ? "completed" : ""}" data-index="${index}" type="button">
        <span class="lesson-number">${lesson.number}</span><span class="lesson-link-title">${lesson.title}</span><span class="lesson-check">✓</span>
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
    return `<article class="roadmap-card" style="--module-color:${module.color}">
      <div class="roadmap-top"><span>${module.number}</span><small>${module.weeks}</small></div>
      <h3>${module.title}</h3><p>${module.subtitle}</p>
      <div class="module-progress"><span style="width:${percent}%"></span></div>
      <div class="roadmap-meta"><small>${moduleLessons.length} 课 · ${done} 课完成</small><button type="button" data-open-module="${module.id}">${done ? "继续" : "开始"} →</button></div>
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
    <small>对应课程 ${phase.lessons}</small>
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
  return `<a class="resource-card ${resource.featured ? "featured" : ""}" href="${resource.url}" target="_blank" rel="noopener noreferrer">
    <div><span class="platform ${typeClass(resource.type)}">${resource.type}</span><span class="level">${resource.provider}</span></div>
    <h4>${resource.title}</h4><p>${resource.note}</p><strong>打开资源 ↗</strong>
  </a>`;
}

function renderResources() {
  const items = resourceStage === "all" ? resourceLibrary : resourceLibrary.filter(resource => resource.stage === resourceStage);
  $("#resource-grid").innerHTML = items.map(resourceCard).join("");
}

function renderRelated(lesson) {
  const items = lesson.resources.map(id => resourceLibrary.find(resource => resource.id === id)).filter(Boolean);
  const module = moduleById(lesson.module);
  $("#lesson-related").innerHTML = `<div class="related-heading"><span>本课延伸资料</span><h2>先完成任务，再选一个深入</h2><p>这些资料已按“与本课直接相关”筛选，不要求全部看完。</p></div>
    <div class="related-grid">${items.map(resource => `<a href="${resource.url}" target="_blank" rel="noopener noreferrer">
      <small>${resource.type} · ${resource.provider}</small><strong>${resource.title}</strong><p>${resource.note}</p><b>打开资源 ↗</b>
    </a>`).join("")}</div>
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
}

function showHome() {
  homeContainer.hidden = false;
  lessonView.hidden = true;
  document.title = "AI 科研入门课 · 42 课完整路线";
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
  $("#lesson-goals").innerHTML = lesson.goals.map(goal => `<span class="goal-chip">学会：${goal}</span>`).join("");
  $("#lesson-content").innerHTML = lesson.body;
  renderRelated(lesson);
  $("#quiz-title").textContent = lesson.quiz.question;
  $("#quiz-options").innerHTML = lesson.quiz.options.map((option, i) => `<button class="quiz-option" type="button" data-option="${i}">${String.fromCharCode(65 + i)}. ${option}</button>`).join("");
  $("#quiz-feedback").textContent = "";
  $("#quiz-options").querySelectorAll("button").forEach(button => button.addEventListener("click", answerQuiz));
  $("#previous-button").disabled = currentIndex === 0;
  $("#next-button").disabled = currentIndex === lessons.length - 1;
  updateCompleteButton();
  renderNav();
  closeSidebar();
  localStorage.setItem(lastLessonKey, lesson.id);
  document.title = `${lesson.number} ${lesson.title} · AI 科研入门课`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function answerQuiz(event) {
  const selected = Number(event.currentTarget.dataset.option);
  const quiz = lessons[currentIndex].quiz;
  $("#quiz-options").querySelectorAll("button").forEach((button, index) => {
    button.disabled = true;
    if (index === quiz.answer) button.classList.add("correct");
    if (index === selected && selected !== quiz.answer) button.classList.add("wrong");
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
renderModuleFilters();
renderNav();
renderPlan();
renderResourceFilters();
renderResources();
updateProgress();
const savedTheme = localStorage.getItem(themeKey);
applyTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
loadRoute();
