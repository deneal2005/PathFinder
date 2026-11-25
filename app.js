const DEMO_PROFILE = "Built a Python project to forecast monthly sales. Cleaned and explored data with pandas and SQL, trained a basic machine learning model, and made a Power BI dashboard for the results. Used Git to track project changes and presented findings to my class.";

const LEVELS = { Learning: 0.35, Comfortable: 0.7, Confident: 1 };
const SKILLS = [
  { name: 'Python', taxonomy: 'Programming · ESCO', level: 'Comfortable', aliases: ['python', 'py'] },
  { name: 'SQL', taxonomy: 'Data querying · O*NET', level: 'Comfortable', aliases: ['sql', 'postgresql', 'mysql', 'sqlite'] },
  { name: 'Pandas', taxonomy: 'Data analysis · ESCO', level: 'Comfortable', aliases: ['pandas'] },
  { name: 'Machine learning', taxonomy: 'Artificial intelligence · ESCO', level: 'Learning', aliases: ['machine learning', 'ml model', 'ml models', 'predictive model', 'predictive modeling'] },
  { name: 'Data visualization', taxonomy: 'Data presentation · O*NET', level: 'Comfortable', aliases: ['data visualization', 'data visualisation', 'visualized data', 'visualised data', 'dashboard', 'dashboards'] },
  { name: 'Power BI', taxonomy: 'Business intelligence · ESCO', level: 'Learning', aliases: ['power bi', 'powerbi'] },
  { name: 'Git', taxonomy: 'Version control · ESCO', level: 'Learning', aliases: ['git', 'github', 'version control'] },
  { name: 'Communication', taxonomy: 'Presentation · O*NET', level: 'Confident', aliases: ['communication', 'presented findings', 'presentation', 'presenting'] },
  { name: 'Statistics', taxonomy: 'Statistical analysis · ESCO', level: 'Learning', aliases: ['statistics', 'statistical', 'statistical analysis', 'hypothesis testing'] },
  { name: 'PyTorch', taxonomy: 'Machine learning tools · ESCO', level: 'Learning', aliases: ['pytorch', 'torch'] },
  { name: 'REST APIs', taxonomy: 'Software development · O*NET', level: 'Learning', aliases: ['rest api', 'rest apis', 'api development', 'apis'] },
  { name: 'Docker', taxonomy: 'Cloud and deployment · ESCO', level: 'Learning', aliases: ['docker', 'containerization', 'containers'] },
  { name: 'Cloud platforms', taxonomy: 'Cloud computing · ESCO', level: 'Learning', aliases: ['cloud', 'aws', 'azure', 'gcp'] },
  { name: 'Excel', taxonomy: 'Spreadsheet software · O*NET', level: 'Learning', aliases: ['excel', 'spreadsheets'] },
  { name: 'Data structures', taxonomy: 'Computer science · ESCO', level: 'Learning', aliases: ['data structures', 'algorithms'] },
  { name: 'Tableau', taxonomy: 'Business intelligence · ESCO', level: 'Learning', aliases: ['tableau'] },
  { name: 'JavaScript', taxonomy: 'Programming · ESCO', level: 'Learning', aliases: ['javascript', 'js'] },
  { name: 'React', taxonomy: 'Web development · ESCO', level: 'Learning', aliases: ['react', 'react.js', 'reactjs'] },
  { name: 'Scikit-learn', taxonomy: 'Machine learning tools · ESCO', level: 'Learning', aliases: ['scikit-learn', 'sklearn'] },
  { name: 'NumPy', taxonomy: 'Data analysis · ESCO', level: 'Learning', aliases: ['numpy'] },
];

const ROLES = [
  { id: 'data-analyst', name: 'Data Analyst', family: 'Data & insights', code: 'DA', level: 'Early career', skills: { SQL: 30, Python: 22, Excel: 12, 'Power BI': 17, 'Data visualization': 19 }, courses: { Excel: ['Excel for data analysis', 'Practice with a small sales dataset'], 'Power BI': ['Build a first Power BI report', 'Turn a messy CSV into a clear dashboard'], SQL: ['SQL joins and aggregations', 'Answer five business questions from a dataset'], Python: ['Python for data analysis', 'Explore and explain one public dataset'], 'Data visualization': ['Principles of clear data visualization', 'Redesign one chart you already made'] } },
  { id: 'data-scientist', name: 'Data Scientist', family: 'Data & insights', code: 'DS', level: 'Early career', skills: { Python: 23, Statistics: 16, SQL: 13, Pandas: 14, 'Machine learning': 21, 'Data visualization': 8, Git: 5 }, courses: { Statistics: ['Statistics for practical data work', 'Test a hypothesis with a public dataset'], 'Machine learning': ['An introduction to supervised learning', 'Compare two models and explain the difference'], SQL: ['SQL for data analysis', 'Write queries for a dataset you know'], Git: ['Git essentials for project work', 'Put one existing project under version control'], Pandas: ['Working with tables in pandas', 'Clean and document a dataset'] } },
  { id: 'ml-engineer', name: 'Machine Learning Engineer', family: 'AI & engineering', code: 'ML', level: 'Early career', skills: { Python: 19, 'Machine learning': 20, PyTorch: 16, 'REST APIs': 12, Docker: 12, Git: 10, 'Cloud platforms': 11 }, courses: { 'Machine learning': ['Machine learning foundations', 'Train and evaluate a small model'], PyTorch: ['Build a neural network with PyTorch', 'Reproduce one tutorial model'], 'REST APIs': ['Build a small REST API', 'Serve a model prediction from an endpoint'], Docker: ['Containers for beginners', 'Package a simple Python app'], Git: ['Git essentials for project work', 'Document a clean project history'], 'Cloud platforms': ['Cloud fundamentals', 'Deploy a small demo application'] } },
  { id: 'bi-analyst', name: 'Business Intelligence Analyst', family: 'Business & insights', code: 'BI', level: 'Early career', skills: { SQL: 24, 'Power BI': 25, 'Data visualization': 20, Excel: 14, Python: 9, Communication: 8 }, courses: { 'Power BI': ['Design a useful Power BI dashboard', 'Add filters and explain your choices'], Excel: ['Excel for reporting and analysis', 'Build a monthly reporting sheet'], SQL: ['SQL joins for reporting', 'Create a reusable reporting query'], Python: ['Python basics for analysts', 'Automate one repeatable data task'], 'Data visualization': ['Tell a story with data', 'Present one clear insight in a chart'], Communication: ['Presenting technical findings clearly', 'Give a two-minute walkthrough of your dashboard'] } },
  { id: 'software-engineer', name: 'Software Engineer', family: 'Software & product', code: 'SE', level: 'Early career', skills: { Python: 20, 'Data structures': 18, 'REST APIs': 20, Git: 12, SQL: 12, Docker: 8, Communication: 10 }, courses: { 'Data structures': ['Data structures and problem solving', 'Implement a small set of core structures'], 'REST APIs': ['Build and document a REST API', 'Add validation and error handling'], Git: ['Git essentials for project work', 'Collaborate on a small repository'], Docker: ['Containers for beginners', 'Package an app and write its run steps'], SQL: ['Relational databases and SQL', 'Model a simple application database'], Communication: ['Working in a software team', 'Write a short technical project overview'] } },
];

const stored = (() => { try { return JSON.parse(localStorage.getItem('pathfinder-prototype') || '{}'); } catch { return {}; } })();
let skillState = Array.isArray(stored.skills) ? stored.skills.filter(s => s && typeof s.name === 'string') : SKILLS.slice(0, 8).map(({ name, level }) => ({ name, level }));
let profileText = typeof stored.profile === 'string' ? stored.profile : DEMO_PROFILE;
let activeRole = ROLES.some(r => r.id === stored.activeRole) ? stored.activeRole : 'data-scientist';
let completeSteps = Array.isArray(stored.completeSteps) ? stored.completeSteps : [];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toKey = value => value.trim().toLowerCase();

function save() {
  localStorage.setItem('pathfinder-prototype', JSON.stringify({ skills: skillState, profile: profileText, activeRole, completeSteps }));
}

function skillMeta(name) {
  const exact = SKILLS.find(item => toKey(item.name) === toKey(name));
  if (exact) return exact;
  return { name, taxonomy: 'Added by you · Custom skill', aliases: [toKey(name)] };
}

function scoreRole(role) {
  const totalWeight = Object.values(role.skills).reduce((sum, weight) => sum + weight, 0);
  const current = skillState.reduce((acc, skill) => ({ ...acc, [toKey(skill.name)]: skill.level }), {});
  let earned = 0;
  const matched = [];
  const gaps = [];
  for (const [name, weight] of Object.entries(role.skills)) {
    const level = current[toKey(name)];
    if (level) {
      earned += weight * LEVELS[level];
      matched.push({ name, level, weight });
    }
    if (!level || level === 'Learning') gaps.push({ name, weight, level: level || null });
  }
  return { score: totalWeight ? Math.round(earned / totalWeight * 100) : 0, matched, gaps: gaps.sort((a, b) => b.weight - a.weight), totalWeight };
}

function scores() {
  return ROLES.map(role => ({ role, ...scoreRole(role) })).sort((a, b) => b.score - a.score || a.role.name.localeCompare(b.role.name));
}

function renderStats() {
  $('#nav-skill-count').textContent = skillState.length;
  $('#skills-total').textContent = skillState.length;
  $('#career-count').textContent = ROLES.length;
  const leading = scores()[0];
  $('#snapshot-role').textContent = leading.role.name;
  $('#snapshot-score').textContent = `${leading.score}%`;
  $('#snapshot-route-fill').style.width = `${leading.score}%`;
  $('#snapshot-gap').textContent = leading.gaps[0]?.name || 'Build project evidence';
  const strengths = leading.matched.filter(skill => skill.level !== 'Learning').sort((a, b) => b.weight - a.weight).slice(0, 3);
  $('#snapshot-strengths').textContent = strengths.length ? strengths.map(skill => skill.name).join(' · ') : 'Add experience to build a match';
  $('#snapshot-explore').setAttribute('aria-label', `Explore the ${leading.role.name} path`);
}

function roleRow(item) {
  return `<div class="role-row" role="button" tabindex="0" data-role-open="${item.role.id}" aria-label="Explore ${item.role.name}, ${item.score}% readiness">
    <div class="role-name"><span class="role-mark" aria-hidden="true">${item.role.code}</span><div><b>${item.role.name}</b><span>${item.role.family}</span></div></div>
    <div class="role-bar-wrap" aria-label="${item.score}% readiness"><div class="role-track"><div class="role-fill" style="width:${item.score}%"></div></div><span class="role-percent">${item.score}%</span></div>
    <span class="role-readiness">readiness</span><span class="row-arrow" aria-hidden="true">→</span>
  </div>`;
}

function renderOverview() {
  $('#overview-role-list').innerHTML = scores().slice(0, 3).map(roleRow).join('');
  bindRoleRows();
}

function renderSkills() {
  const ordered = skillState.slice().sort((a, b) => a.name.localeCompare(b.name));
  $('#skill-list').innerHTML = ordered.map(skill => {
    const meta = skillMeta(skill.name);
    return `<div class="skill-item"><div class="skill-item-name">${escapeHTML(skill.name)}<small>${escapeHTML(meta.taxonomy)}</small></div><div class="level-control" role="group" aria-label="${escapeHTML(skill.name)} proficiency">
      ${['Learning', 'Comfortable', 'Confident'].map(level => `<button type="button" class="level-button ${skill.level === level ? 'selected' : ''}" data-skill-level="${escapeHTML(skill.name)}" data-level="${level}" aria-pressed="${skill.level === level}">${level}</button>`).join('')}
    </div></div>`;
  }).join('');
  $$('#skill-list [data-skill-level]').forEach(button => button.addEventListener('click', () => {
    const skill = skillState.find(item => toKey(item.name) === toKey(button.dataset.skillLevel));
    if (!skill) return;
    skill.level = button.dataset.level;
    save();
    renderAll();
  }));
  renderStats();
}

function renderCareerResults() {
  $('#career-role-list').innerHTML = scores().map(item => {
    const present = item.matched.filter(s => s.level !== 'Learning').sort((a, b) => b.weight - a.weight).slice(0, 3);
    const missing = item.gaps.slice(0, 2);
    const positive = present.map(skill => `<span class="skill-chip">✓ ${escapeHTML(skill.name)}</span>`).join('');
    const gaps = missing.map(skill => `<span class="gap-chip">Next: ${escapeHTML(skill.name)}</span>`).join('');
    return `<article class="career-card"><div class="career-card-top"><div class="role-name"><span class="role-mark" aria-hidden="true">${item.role.code}</span><div><b>${item.role.name}</b><span>${item.role.family} · ${item.matched.length} of ${Object.keys(item.role.skills).length} skills found</span></div></div><div class="score-block"><b>${item.score}%</b><span>readiness</span></div><span class="role-level-tag">${item.role.level}</span></div><div class="career-card-bottom"><span class="contribution-label">Your fit</span>${positive}${gaps}<button class="career-card-action" data-roadmap-role="${item.role.id}">Build this path →</button></div></article>`;
  }).join('');
  $$('[data-roadmap-role]').forEach(button => button.addEventListener('click', () => {
    activeRole = button.dataset.roadmapRole;
    save();
    showView('roadmap');
  }));
  renderRoleSelect();
}

function renderRoleSelect() {
  const select = $('#roadmap-role');
  select.innerHTML = scores().map(({ role }) => `<option value="${role.id}" ${activeRole === role.id ? 'selected' : ''}>${role.name}</option>`).join('');
  renderRoadmap();
}

function renderRoadmap() {
  const role = ROLES.find(item => item.id === activeRole) || ROLES[0];
  const result = scoreRole(role);
  const steps = result.gaps.slice(0, 3);
  const stateKey = role.id;
  const planIntro = `<section class="roadmap-intro"><div class="section-kicker">Your starting point</div><h2>${role.name}</h2><p>${steps.length ? `You already have a foundation here. These ${steps.length} skills are the clearest next steps based on this role’s requirements.` : 'You have covered the listed requirements at a comfortable level. Keep practicing and look for a project that stretches you.'}</p><div class="readiness-strip"><strong>${result.score}%</strong><span>readiness from your current skill levels</span></div></section>`;
  const stepsHtml = steps.length ? `<div class="steps-list">${steps.map((step, index) => {
    const done = completeSteps.includes(`${stateKey}:${step.name}`);
    const suggestions = role.courses[step.name] || [`Build a small project using ${step.name}`, `Practice ${step.name} with a public example`];
    return `<article class="roadmap-step"><span class="step-number">${done ? '✓' : String(index + 1).padStart(2, '0')}</span><div class="step-content"><h3>${escapeHTML(step.name)}${step.level ? ' · build confidence' : ' · get started'}</h3><p>${step.level ? `You have a starting point in ${escapeHTML(step.name)}. A little applied practice will make it more reliable.` : `This skill carries ${step.weight}% of this role’s requirements and is one of the most useful gaps to close.`}</p><div class="course-line"><span>↗</span><div><b>Try:</b> ${escapeHTML(suggestions[0])}<br /><b>Make:</b> ${escapeHTML(suggestions[1])}</div></div></div><button class="level-button ${done ? 'selected' : ''}" data-step-toggle="${escapeHTML(step.name)}" aria-pressed="${done}">${done ? 'Done' : 'Mark done'}</button></article>`;
  }).join('')}</div>` : `<section class="panel roadmap-intro"><h2>Keep building your evidence.</h2><p>For this sample role, you have no beginner-level skill gaps left. Add another skill or choose a different role to explore your next step.</p></section>`;
  $('#roadmap-content').innerHTML = planIntro + stepsHtml;
  $$('[data-step-toggle]').forEach(button => button.addEventListener('click', () => {
    const key = `${stateKey}:${button.dataset.stepToggle}`;
    completeSteps = completeSteps.includes(key) ? completeSteps.filter(step => step !== key) : [...completeSteps, key];
    save();
    renderRoadmap();
  }));
}

function renderAll() {
  renderStats();
  renderOverview();
  renderSkills();
  renderCareerResults();
}

function bindRoleRows() {
  $$('[data-role-open]').forEach(row => {
    const open = () => { activeRole = row.dataset.roleOpen; save(); showView('roadmap'); };
    row.addEventListener('click', open);
    row.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  });
}

function showView(view) {
  if (view === 'roadmap') renderRoleSelect();
  $$('.view').forEach(section => section.classList.toggle('active-view', section.id === `view-${view}`));
  $$('.nav-item').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  const labels = { overview: 'Overview', skills: 'My skills', careers: 'Career matches', roadmap: 'Learning plan' };
  $('#crumb-current').textContent = labels[view] || 'Overview';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function extractSkills(text) {
  const normalized = text.toLowerCase().replace(/[’']/g, "'");
  const found = [];
  for (const meta of SKILLS) {
    const matched = meta.aliases.some(alias => {
      const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`(^|[^a-z0-9+#.])${escaped}($|[^a-z0-9+#.])`, 'i').test(normalized);
    });
    if (matched && !found.some(skill => toKey(skill.name) === toKey(meta.name))) found.push(meta);
  }
  return found;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function analyzeProfile() {
  const text = $('#profile-input').value.trim();
  if (!text) {
    $('#analysis-message').textContent = 'Add a resume or project summary first, and I’ll look for the skills mentioned.';
    $('#profile-input').focus();
    return;
  }
  const detected = extractSkills(text);
  if (!detected.length) {
    $('#analysis-message').textContent = 'I couldn’t find a skill from the current sample catalogue. Try naming tools or skills directly, like Python, SQL, or dashboards.';
    return;
  }
  const previousLevels = new Map(skillState.map(skill => [toKey(skill.name), skill.level]));
  skillState = detected.map(skill => ({ name: skill.name, level: previousLevels.get(toKey(skill.name)) || skill.level || 'Learning' }));
  profileText = text;
  save();
  renderAll();
  $('#analysis-message').textContent = `Found ${detected.length} ${detected.length === 1 ? 'skill' : 'skills'} in your text. New skills start at Learning; adjust levels in My skills.`;
}

// Initialize saved or example profile text and its character counter.
$('#profile-input').value = profileText;
$('#char-count').textContent = `${profileText.length.toLocaleString()} / 2,000`;
$('#profile-input').addEventListener('input', event => {
  if (event.target.value.length > 2000) event.target.value = event.target.value.slice(0, 2000);
  $('#char-count').textContent = `${event.target.value.length.toLocaleString()} / 2,000`;
});
$('#profile-input').addEventListener('blur', event => { profileText = event.target.value; save(); });
$('#analyze-button').addEventListener('click', analyzeProfile);
$('#resume-file').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > 1000000) { $('#analysis-message').textContent = 'That text file is over 1 MB. Please choose a smaller .txt file.'; event.target.value = ''; return; }
  $('#profile-input').value = await file.text();
  $('#profile-input').dispatchEvent(new Event('input'));
  $('#analysis-message').textContent = `${file.name} is ready. Choose “Find my skills” to continue.`;
  event.target.value = '';
});

$$('[data-view]').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
$('#edit-profile-shortcut').addEventListener('click', () => { $('#profile-input').focus(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
$('#snapshot-explore').addEventListener('click', () => { activeRole = scores()[0].role.id; save(); showView('roadmap'); });
$('#roadmap-role').addEventListener('change', event => { activeRole = event.target.value; save(); renderRoadmap(); });
$('#why-score').addEventListener('click', () => $('#scoring-dialog').showModal());
$('.dialog-close').addEventListener('click', () => $('#scoring-dialog').close());
$('#scoring-dialog').addEventListener('click', event => { if (event.target === $('#scoring-dialog')) $('#scoring-dialog').close(); });
$('#print-plan').addEventListener('click', () => window.print());
$('#add-skill-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = $('#new-skill');
  const name = input.value.trim().replace(/\s+/g, ' ');
  if (!name) return;
  if (skillState.some(skill => toKey(skill.name) === toKey(name))) { input.setCustomValidity('This skill is already in your list.'); input.reportValidity(); return; }
  input.setCustomValidity('');
  skillState.push({ name, level: 'Learning' });
  input.value = '';
  save();
  renderAll();
});
$('#new-skill').addEventListener('input', event => event.target.setCustomValidity(''));

renderAll();
