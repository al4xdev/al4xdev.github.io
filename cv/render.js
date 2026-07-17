(() => {
  const content = window.CV_CONTENT;
  let language = new URLSearchParams(window.location.search).get('lang') === 'pt-BR' ? 'pt-BR' : 'en';

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const renderLinks = (links) => links.map((link) => (
    `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
  )).join('');

  const renderExperience = (entries) => entries.map((entry) => `
    <article class="cv-entry">
      <div>
        <h3>${escapeHtml(entry.title)}</h3>
        <span>${escapeHtml(entry.meta)}</span>
      </div>
      <p>${escapeHtml(entry.body)}</p>
    </article>
  `).join('');

  const renderSystems = (systems) => systems.map((system) => `
    <li><strong>${escapeHtml(system.name)}</strong><span>${escapeHtml(system.body)}</span></li>
  `).join('');

  const renderTags = (tags) => tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('');
  const renderLines = (lines) => lines.map((line) => `<span>${escapeHtml(line)}</span>`).join('');
  const renderMentors = () => (window.MENTOR_CONTENT || []).map((mentor) => {
    const copy = mentor[language];
    const portrait = mentor.photo
      ? `<img src="${escapeHtml(mentor.photo)}" alt="">`
      : escapeHtml(mentor.initials);
    return `
      <a class="cv-mentor" href="${escapeHtml(mentor.linkedin)}" target="_blank" rel="noopener noreferrer">
        <span class="cv-mentor-portrait" aria-hidden="true">${portrait}</span>
        <span><strong>${escapeHtml(copy.name)}</strong><small>${escapeHtml(copy.note)}</small></span>
      </a>
    `;
  }).join('');

  function notifyHeight() {
    window.parent.postMessage({
      type: 'portfolio-cv:height',
      height: Math.ceil(document.documentElement.scrollHeight),
    }, '*');
  }

  function render(nextLanguage = language) {
    language = nextLanguage === 'pt-BR' ? 'pt-BR' : 'en';
    const cv = content[language];
    document.documentElement.lang = language;
    document.title = cv.documentTitle;
    document.body.innerHTML = `
      <main class="cv-page">
        <header class="cv-header">
          <div>
            <h1>${escapeHtml(cv.name)}</h1>
            <p>${escapeHtml(cv.role)}</p>
          </div>
          <nav class="public-links" aria-label="Public links">${renderLinks(cv.links)}</nav>
        </header>

        <div class="cv-body">
          <div class="main-column">
            <section class="cv-block">
              <h2>${escapeHtml(cv.profile.label)}</h2>
              <p>${escapeHtml(cv.profile.body)}</p>
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.experienceLabel)}</h2>
              ${renderExperience(cv.experience)}
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.selectedWorkLabel)}</h2>
              <ul class="system-list">${renderSystems(cv.selectedWork)}</ul>
            </section>
          </div>

          <aside class="side-column">
            <section class="cv-block">
              <h2>${escapeHtml(cv.focusLabel)}</h2>
              <ul class="tag-list">${renderTags(cv.focus)}</ul>
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.languagesLabel)}</h2>
              <p class="language-list">${renderLines(cv.languages)}</p>
            </section>
            <section class="cv-block cv-mentors">
              <h2>${language === 'pt-BR' ? 'Mentorado por' : 'Mentored by'}</h2>
              <div class="cv-mentor-list">${renderMentors()}</div>
            </section>
            <section class="cv-block placeholder-block">
              <h2>${escapeHtml(cv.educationLabel)}</h2>
              <p>${escapeHtml(cv.education)}</p>
            </section>
            <p class="mock-footnote">${escapeHtml(cv.footnote)}</p>
          </aside>
        </div>
      </main>
    `;
    requestAnimationFrame(notifyHeight);
  }

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'portfolio-cv:language') render(event.data.language);
    if (event.data?.type === 'portfolio-cv:print') window.print();
  });

  window.addEventListener('resize', notifyHeight);
  new ResizeObserver(notifyHeight).observe(document.documentElement);
  render();
})();
