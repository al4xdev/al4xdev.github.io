(() => {
  const content = window.CV_CONTENT;
  const isEmbedded = window.parent !== window;
  let language = new URLSearchParams(window.location.search).get('lang') === 'pt-BR' ? 'pt-BR' : 'en';

  if (isEmbedded) document.documentElement.classList.add('cv-embedded');

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const renderLinks = (links) => links.map((link) => (
    `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
  )).join('');

  const renderProjects = (projects) => projects.map((project) => `
    <article class="cv-entry">
      <h4>${escapeHtml(project.title)}</h4>
      <p>${escapeHtml(project.body)}</p>
    </article>
  `).join('');

  const renderExperience = (roles) => roles.map((role, index) => `
    <li class="cv-role">
      <div class="cv-role-head">
        <span class="cv-role-period">${escapeHtml(role.period)}</span>
        <h3 class="cv-role-title">${escapeHtml(role.role)}${role.tag ? ` <span class="cv-role-tag">${escapeHtml(role.tag)}</span>` : ''}</h3>
      </div>
      <div class="cv-role-projects">${renderProjects(role.projects)}</div>
    </li>
    ${index < roles.length - 1 ? '<li class="cv-timeline-end cv-timeline-company-break" aria-hidden="true"></li>' : ''}
  `).join('');

  const renderSystems = (systems) => systems.map((system) => `
    <li><strong>${escapeHtml(system.name)}</strong><span>${escapeHtml(system.body)}</span></li>
  `).join('');

  const renderResearch = (studies) => studies.map((study) => `
    <li class="research-record">
      <h3>${escapeHtml(study.title)}</h3>
      <p>${escapeHtml(study.body)}</p>
    </li>
  `).join('');

  const renderTags = (tags) => tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('');
  const renderLanguages = (languages) => languages.map((item) => `
    <li class="language-record">
      <div class="language-primary">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.level)}</span>
      </div>
      ${item.certification ? `
        <small class="language-credential">
          <span>${escapeHtml(item.certification)}</span>
          <time>${escapeHtml(item.date)}</time>
        </small>
      ` : ''}
    </li>
  `).join('');
  const renderEducation = (education) => education
    .split(' · ')
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  const renderMentors = () => (window.MENTOR_CONTENT || []).map((mentor) => {
    const copy = mentor[language];
    const portrait = mentor.photo
      ? `<img src="${escapeHtml(mentor.photo)}" alt="">`
      : escapeHtml(mentor.initials);
    const record = `
      <span class="cv-mentor-portrait" aria-hidden="true">${portrait}</span>
      <span><strong>${escapeHtml(copy.name)}</strong><small>${escapeHtml(copy.note)}</small></span>
    `;
    return `
      <a class="cv-mentor cv-mentor-screen" href="${escapeHtml(mentor.linkedin)}" target="_blank" rel="noopener noreferrer">${record}</a>
      <a class="cv-mentor cv-mentor-print" href="${escapeHtml(mentor.linkedin)}" target="_blank" rel="noopener noreferrer">${record}</a>
    `;
  }).join('');

  function notifyHeight() {
    window.parent.postMessage({
      type: 'portfolio-cv:height',
      height: Math.ceil(document.documentElement.scrollHeight),
    }, '*');
  }

  function delegateScroll(deltaX, deltaY) {
    if (!isEmbedded) return;
    window.parent.postMessage({
      type: 'portfolio-cv:scroll',
      deltaX,
      deltaY,
    }, '*');
  }

  window.addEventListener('wheel', (event) => {
    const unit = event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 16
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? window.innerHeight : 1;
    delegateScroll(event.deltaX * unit, event.deltaY * unit);
  }, { passive: true });

  let previousTouch = null;
  window.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    previousTouch = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }, { passive: true });
  window.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    if (!touch || !previousTouch) return;
    if (event.cancelable) event.preventDefault();
    delegateScroll(previousTouch.x - touch.clientX, previousTouch.y - touch.clientY);
    previousTouch = { x: touch.clientX, y: touch.clientY };
  }, { passive: false });
  const endTouch = () => {
    previousTouch = null;
  };
  window.addEventListener('touchend', endTouch, { passive: true });
  window.addEventListener('touchcancel', endTouch, { passive: true });

  function updateDocument(nextLanguage = language) {
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
          <nav class="public-links" aria-label="Public links">
            <span class="screen-public-links">${renderLinks(cv.links)}</span>
            <a class="print-public-link" href="${escapeHtml(cv.portfolioLink.url)}">${escapeHtml(cv.portfolioLink.label)}</a>
          </nav>
        </header>

        <div class="cv-body">
          <div class="main-column">
            <section class="cv-block">
              <h2>${escapeHtml(cv.profile.label)}</h2>
              <p>${escapeHtml(cv.profile.body)}</p>
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.experienceLabel)}</h2>
              <ol class="cv-timeline">${renderExperience(cv.experience)}<li class="cv-timeline-end" aria-hidden="true"></li></ol>
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.selectedWorkLabel)}</h2>
              <ul class="system-list">${renderSystems(cv.selectedWork)}</ul>
            </section>
            <section class="cv-block cv-research">
              <h2>${escapeHtml(cv.selectedResearchLabel)}</h2>
              <ol class="research-list">${renderResearch(cv.selectedResearch)}</ol>
            </section>
          </div>

          <aside class="side-column">
            <section class="cv-block">
              <h2>${escapeHtml(cv.focusLabel)}</h2>
              <ul class="tag-list">${renderTags(cv.focus)}</ul>
            </section>
            <section class="cv-block">
              <h2>${escapeHtml(cv.languagesLabel)}</h2>
              <ul class="language-list">${renderLanguages(cv.languages)}</ul>
            </section>
            <section class="cv-block cv-mentors">
              <h2>${language === 'pt-BR' ? 'Mentorado por' : 'Mentored by'}</h2>
              <div class="cv-mentor-list">${renderMentors()}</div>
              <p class="cv-mentor-note">${escapeHtml(cv.mentorsNote)}</p>
            </section>
            <section class="cv-block cv-education-block">
              <h2>${escapeHtml(cv.educationLabel)}</h2>
              <ul class="edu-list">${renderEducation(cv.education)}</ul>
            </section>
            <p class="cv-footnote">${escapeHtml(cv.footnote)}</p>
          </aside>
        </div>
      </main>
    `;
    requestAnimationFrame(notifyHeight);
  }

  function render(nextLanguage = language, animate = true) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate && !reduceMotion && document.startViewTransition) {
      document.startViewTransition(() => updateDocument(nextLanguage));
      return;
    }
    updateDocument(nextLanguage);
  }

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'portfolio-cv:language') render(event.data.language);
    if (event.data?.type === 'portfolio-cv:print') window.print();
  });

  window.addEventListener('resize', notifyHeight);
  new ResizeObserver(notifyHeight).observe(document.documentElement);
  render(language, false);
})();
