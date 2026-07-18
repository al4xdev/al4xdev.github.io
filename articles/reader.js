(() => {
  const parameters = new URLSearchParams(window.location.search);
  const articles = window.ARTICLE_CONTENT;
  const requestedId = parameters.get('article');
  const articleId = Object.hasOwn(articles, requestedId) ? requestedId : 'token-economics';
  let language = parameters.get('lang') === 'pt-BR' ? 'pt-BR' : 'en';
  const container = document.querySelector('#article');

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function render() {
    const article = articles[articleId];
    const copy = article[language];
    const isFirstRender = !container.hasChildNodes();
    const backLabel = language === 'pt-BR' ? 'Voltar às notas de campo' : 'Back to field notes';
    const sourceLabel = language === 'pt-BR' ? 'Inspecionar fonte original' : 'Inspect original source';
    const editionLabel = language === 'pt-BR' ? 'EDIÇÃO CURADA DO PORTFÓLIO' : 'CURATED PORTFOLIO EDITION';

    document.documentElement.lang = language;
    document.title = `${copy.title} — Alexsandro Pessoa`;
    document.querySelector('[data-back]').href = `../?lang=${encodeURIComponent(language)}#notes`;
    document.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    container.innerHTML = `
      <article class="field-note${isFirstRender ? ' note-arriving' : ''}">
        <header class="article-hero">
          <p class="article-type">${escapeHtml(article.type)} / ${escapeHtml(article.date)}</p>
          <h1>${escapeHtml(copy.title)}</h1>
          <p class="article-deck">${escapeHtml(copy.deck)}</p>
          <p class="edition-label">${escapeHtml(editionLabel)}</p>
        </header>
        <div class="article-body">
          ${copy.sections.map(([heading, body], index) => `
            <section>
              <span>${String(index + 1).padStart(2, '0')}</span>
              <div><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p></div>
            </section>
          `).join('')}
        </div>
        <footer class="article-footer">
          <a href="../?lang=${encodeURIComponent(language)}#notes">← ${escapeHtml(backLabel)}</a>
          <a href="${escapeHtml(article.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(sourceLabel)} ↗</a>
        </footer>
      </article>
    `;
    window.history.replaceState(null, '', `?article=${encodeURIComponent(articleId)}&lang=${encodeURIComponent(language)}`);
    container.focus({ preventScroll: true });
  }

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      const update = () => {
        language = button.dataset.language === 'pt-BR' ? 'pt-BR' : 'en';
        render();
      };
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion && document.startViewTransition) {
        document.startViewTransition(update);
      } else {
        update();
      }
    });
  });

  render();
})();
