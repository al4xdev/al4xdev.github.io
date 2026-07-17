const STRINGS = {
  en: {
    skip: 'Skip to systems',
    navSystems: 'Systems',
    navPrinciples: 'Principles',
    navNotes: 'Field notes',
    heroEyebrow: 'AGENTIC SYSTEMS / VISUAL AI / CONTROL PLANES',
    heroTitle: 'I build systems where AI judgment meets <em>deterministic control.</em>',
    heroLead: 'Complex ideas become usable when every decision has an owner, every boundary can be inspected, and the interface makes the system legible.',
    explore: 'Explore the systems',
    mentoredBy: 'Mentored by',
    currentWork: 'Current work',
    currentWorkValue: 'GenAI, MLOps, cloud & automation',
    operatingMode: 'Operating mode',
    operatingModeValue: 'Evidence before confidence',
    systemsEyebrow: 'SELECTED SYSTEMS / ONE CONNECTED PRACTICE',
    systemsTitle: 'Follow the architecture, not a list of logos.',
    systemsIntro: 'Select a node to inspect the problem it owns, the decision that shapes it, and the evidence behind the claim.',
    mapLabel: 'Interactive map of selected projects',
    legendSelected: 'Selected system',
    legendRelation: 'Shared design concern',
    mobileMapHint: 'Swipe to inspect',
    projectState: 'OPEN SOURCE',
    problemLabel: 'Problem',
    decisionLabel: 'Distinctive decision',
    evidenceLabel: 'Evidence',
    principlesEyebrow: 'REPEATED DECISIONS / ENGINEERING POSITION',
    principlesTitle: 'The work keeps returning to three boundaries.',
    principleOneTitle: 'Judgment lives in models. Invariants live in code.',
    principleOneBody: 'Let models interpret and propose. Let typed contracts, state machines, and deterministic guards decide what becomes real.',
    principleTwoTitle: 'Evidence before confidence.',
    principleTwoBody: 'Repeated runs, negative controls, replayable logs, and explicit limitations turn an interesting result into an engineering claim.',
    principleThreeTitle: 'Complexity needs an interface.',
    principleThreeBody: 'A difficult workflow becomes useful when people can inspect, edit, recover, and understand the state they are changing.',
    notesEyebrow: 'PAPERS / CASE STUDIES / VALIDATION REPORTS',
    noteTitle: 'Research is part of the build.',
    noteBody: 'Architecture claims are published with their measurements, negative controls, failure cases, and limits. These are engineering field notes, not peer-reviewed papers unless explicitly labeled as such.',
    publicationOneTitle: 'Token economics as an architectural enabler',
    publicationOneBody: 'A cache-aware cost study with explicit attribution limits and normalized provider counterfactuals.',
    publicationTwoTitle: 'A structural audience model for speech',
    publicationTwoBody: 'Witnessed actions, whispers, two-level recall assertions, and blind continuity review.',
    publicationThreeTitle: 'Making secret handling structural',
    publicationThreeBody: 'A deterministic retry-then-redact guard tested against informational-payload leaks.',
    publicationFourTitle: 'Multi-character memory under shifting focus',
    publicationFourBody: 'A reproduction attempt that rejected the reported failure and exposed a different architectural gap.',
    openArchive: 'Open the engineering archive',
    cvEyebrow: 'FINAL DOCUMENT / CURRICULUM VITAE',
    cvTitle: 'The résumé comes after the evidence.',
    cvIntro: 'The document is last because the work is its context. This first edition is a full structural mock, ready to receive verified career history.',
    cvRendererLabel: 'CV RENDERER / A4 OUTPUT',
    cvRendererNote: "Uses your browser's print dialog to save a PDF.",
    cvToggle: 'CV / PDF',
    cvDownload: 'Print / Save as PDF',
    cvDocumentLabel: 'Curriculum vitae mock',
    cvStandalone: 'Open standalone CV renderer',
    footerThesis: 'Curious builder turning unusual ideas into working systems.',
    footerNote: 'This portfolio is itself a small system: bilingual, inspectable, and deliberately unfinished.',
    qualityPrefix: 'Under the paper:',
    qualitySuffix: 'automated tests guard this portfolio.',
    qualityDeploy: 'Inspect the latest deployment',
    changeLanguage: 'Change language',
    github: 'Repository',
    article: 'Case study',
    pypi: 'PyPI package',
  },
  'pt-BR': {
    skip: 'Pular para os sistemas',
    navSystems: 'Sistemas',
    navPrinciples: 'Princípios',
    navNotes: 'Notas de campo',
    heroEyebrow: 'SISTEMAS AGÊNTICOS / IA VISUAL / PLANOS DE CONTROLE',
    heroTitle: 'Eu construo sistemas onde julgamento de IA encontra <em>controle determinístico.</em>',
    heroLead: 'Ideias complexas se tornam utilizáveis quando cada decisão tem um dono, cada fronteira pode ser inspecionada e a interface torna o sistema legível.',
    explore: 'Explorar os sistemas',
    mentoredBy: 'Mentorado por',
    currentWork: 'Trabalho atual',
    currentWorkValue: 'GenAI, MLOps, cloud e automação',
    operatingMode: 'Modo de operação',
    operatingModeValue: 'Evidência antes de confiança',
    systemsEyebrow: 'SISTEMAS SELECIONADOS / UMA PRÁTICA CONECTADA',
    systemsTitle: 'Siga a arquitetura, não uma lista de logos.',
    systemsIntro: 'Selecione um nó para inspecionar o problema que ele assume, a decisão que o define e a evidência por trás da afirmação.',
    mapLabel: 'Mapa interativo dos projetos selecionados',
    legendSelected: 'Sistema selecionado',
    legendRelation: 'Decisão de design compartilhada',
    mobileMapHint: 'Deslize para inspecionar',
    projectState: 'CÓDIGO ABERTO',
    problemLabel: 'Problema',
    decisionLabel: 'Decisão distintiva',
    evidenceLabel: 'Evidência',
    principlesEyebrow: 'DECISÕES RECORRENTES / POSIÇÃO DE ENGENHARIA',
    principlesTitle: 'O trabalho sempre retorna a três fronteiras.',
    principleOneTitle: 'Julgamento vive nos modelos. Invariantes vivem no código.',
    principleOneBody: 'Modelos interpretam e propõem. Contratos tipados, máquinas de estado e guardas determinísticas decidem o que se torna real.',
    principleTwoTitle: 'Evidência antes de confiança.',
    principleTwoBody: 'Execuções repetidas, controles negativos, logs reproduzíveis e limitações explícitas transformam um resultado interessante numa afirmação de engenharia.',
    principleThreeTitle: 'Complexidade precisa de uma interface.',
    principleThreeBody: 'Um fluxo difícil se torna útil quando as pessoas conseguem inspecionar, editar, recuperar e compreender o estado que estão mudando.',
    notesEyebrow: 'PAPERS / ESTUDOS DE CASO / RELATÓRIOS DE VALIDAÇÃO',
    noteTitle: 'Pesquisa faz parte da construção.',
    noteBody: 'Afirmações arquiteturais são publicadas com medições, controles negativos, casos de falha e limitações. São notas de engenharia, não papers revisados por pares, exceto quando isso estiver explícito.',
    publicationOneTitle: 'Economia de tokens como habilitadora de arquitetura',
    publicationOneBody: 'Um estudo de custos sensível a cache, com limites de atribuição e contrafactuais normalizados entre provedores.',
    publicationTwoTitle: 'Um modelo estrutural de audiência para fala',
    publicationTwoBody: 'Ações testemunhadas, sussurros, asserções de recall em dois níveis e revisão cega de continuidade.',
    publicationThreeTitle: 'Tornando estrutural o tratamento de segredos',
    publicationThreeBody: 'Uma guarda determinística de retry e redação testada contra vazamentos de carga informacional.',
    publicationFourTitle: 'Memória multipersonagem sob mudança de foco',
    publicationFourBody: 'Uma tentativa de reprodução que rejeitou a falha relatada e expôs outra lacuna arquitetural.',
    openArchive: 'Abrir o arquivo de engenharia',
    cvEyebrow: 'DOCUMENTO FINAL / CURRICULUM VITAE',
    cvTitle: 'O currículo vem depois das evidências.',
    cvIntro: 'O documento fica por último porque o trabalho é o seu contexto. Esta primeira edição é um mock estrutural completo, pronto para receber o histórico profissional verificado.',
    cvRendererLabel: 'RENDERIZADOR DE CV / SAÍDA A4',
    cvRendererNote: 'Usa a impressão do navegador para salvar um PDF.',
    cvToggle: 'CV / PDF',
    cvDownload: 'Imprimir / Salvar como PDF',
    cvDocumentLabel: 'Mock do currículo',
    cvStandalone: 'Abrir o renderizador isolado do currículo',
    footerThesis: 'Um construtor curioso transformando ideias incomuns em sistemas reais.',
    footerNote: 'Este portfólio também é um pequeno sistema: bilíngue, inspecionável e deliberadamente inacabado.',
    qualityPrefix: 'Por baixo do papel:',
    qualitySuffix: 'testes automatizados protegem este portfólio.',
    qualityDeploy: 'Inspecionar o último deploy',
    changeLanguage: 'Trocar idioma',
    github: 'Repositório',
    article: 'Estudo de caso',
    pypi: 'Pacote no PyPI',
  },
};

const PROJECTS = {
  'alex-tavern': {
    index: 'CORE / 02',
    name: 'Alex Tavern',
    links: [
      { key: 'github', url: 'https://github.com/al4xdev/alex-tavern' },
      { key: 'article', url: 'https://github.com/al4xdev/alex-tavern/blob/master/docs/cases/token-economics-agentic-architecture-2026-07-16.md' },
    ],
    en: {
      thesis: 'A multi-agent roleplay engine where no model is allowed to know which character the human controls.',
      problem: 'One omniscient Narrator becomes passive, leaks private knowledge, speaks for characters, and owns too many incompatible decisions.',
      decision: 'Split direction, physical resolution, prose, subjective characters, perspective, and memory. Code enforces agency and perception boundaries.',
      evidence: 'Typed events, acoustic zones, per-viewer identity ledgers, transactional undo, replayable JSONL, repeated live-provider benchmarks, and blind critics.',
    },
    'pt-BR': {
      thesis: 'Um motor de roleplay multiagente onde nenhum modelo pode saber qual personagem o humano controla.',
      problem: 'Um Narrador onisciente se torna passivo, vaza conhecimento privado, fala pelos personagens e acumula decisões incompatíveis.',
      decision: 'Separar direção, resolução física, prosa, subjetividade, perspectiva e memória. O código impõe agência e fronteiras de percepção.',
      evidence: 'Eventos tipados, zonas acústicas, ledgers de identidade por observador, undo transacional, JSONL reproduzível, benchmarks reais repetidos e críticos cegos.',
    },
  },
  scenequeue: {
    index: 'TOOL / 05',
    name: 'SceneQueue',
    links: [{ key: 'github', url: 'https://github.com/al4xdev/scenequeue' }],
    en: {
      thesis: 'A visual storyboard for editing, extending, and re-queueing large ComfyUI prompt batches.',
      problem: 'A generated sequence becomes a brittle JSON file as soon as one frame, transition, or continuation needs to change.',
      decision: 'Make the gallery the editor: version prompts, review diffs, insert contextual frames, and keep every AI suggestion editable.',
      evidence: 'Mobile-first PWA, WebSocket queue monitoring with fallback, local-first runtime data, CI, and AMD64/ARM64 container publishing.',
    },
    'pt-BR': {
      thesis: 'Um storyboard visual para editar, estender e recolocar em fila grandes lotes de prompts do ComfyUI.',
      problem: 'Uma sequência gerada vira um JSON frágil assim que um frame, transição ou continuação precisa mudar.',
      decision: 'Transformar a galeria no editor: versionar prompts, revisar diffs, inserir frames contextuais e manter cada sugestão de IA editável.',
      evidence: 'PWA mobile-first, monitoramento WebSocket com fallback, dados locais, CI e publicação de containers AMD64/ARM64.',
    },
  },
  promptnest: {
    index: 'LIB / 01',
    name: 'PromptNest',
    links: [
      { key: 'github', url: 'https://github.com/al4xdev/promptnest' },
      { key: 'pypi', url: 'https://pypi.org/project/promptnest/' },
    ],
    en: {
      thesis: 'Typed asynchronous nested map, consolidate, and reduce orchestration for long LLM workflows.',
      problem: 'Large documents drift, fail partially, and become expensive to regenerate when every section is processed as one opaque prompt.',
      decision: 'Preserve meaningful keys through concurrent mapping, nested consolidation, and a typed final reduction independent of model runtime.',
      evidence: 'Pydantic contracts, bounded retries, controlled concurrency, partial-failure handling, PyPI publishing, and adapters for major agent frameworks.',
    },
    'pt-BR': {
      thesis: 'Orquestração assíncrona e tipada de map, consolidate e reduce aninhados para fluxos longos com LLMs.',
      problem: 'Documentos grandes perdem consistência, falham parcialmente e ficam caros de regenerar quando tudo vira um único prompt opaco.',
      decision: 'Preservar chaves significativas durante mapeamento concorrente, consolidação aninhada e redução final tipada, independente do runtime.',
      evidence: 'Contratos Pydantic, retries limitados, concorrência controlada, falhas parciais, publicação no PyPI e adapters para frameworks de agentes.',
    },
  },
  'crime-alley': {
    index: 'LAB / 04',
    name: 'Crime Alley CV',
    links: [{ key: 'github', url: 'https://github.com/al4xdev/crime_alley_cv' }],
    en: {
      thesis: 'An actor-critic CV optimization and integrity engine built as an agentic control-plane study.',
      problem: 'Agents can improve prose while silently drifting from evidence, mutating the wrong artifact, or extending a loop beyond its budget.',
      decision: 'Judgment lives in readable agent runbooks; invariants live in a deterministic transactional state machine.',
      evidence: 'Canonical state, fresh evaluator sessions, digest-anchored guards, immutable iterations, offline replay, negative controls, and live container smokes.',
    },
    'pt-BR': {
      thesis: 'Um motor actor-critic de otimização e integridade de CV construído como estudo de plano de controle agêntico.',
      problem: 'Agentes podem melhorar a prosa enquanto se afastam da evidência, alteram o artefato errado ou estendem o loop além do orçamento.',
      decision: 'Julgamento vive em runbooks legíveis; invariantes vivem numa máquina de estado determinística e transacional.',
      evidence: 'Estado canônico, sessões novas de avaliação, guardas por digest, iterações imutáveis, replay offline, controles negativos e smokes em container.',
    },
  },
  'tavern-plugins': {
    index: 'SDK / 03',
    name: 'Tavern Plugins',
    links: [{ key: 'github', url: 'https://github.com/al4xdev/alex-tavern-plugins' }],
    en: {
      thesis: 'A curated extension ecosystem, SDK reference, and authoring surface for Alex Tavern.',
      problem: 'An extensible system needs reproducible packages and explicit contracts without pretending that trusted in-process code is sandboxed.',
      decision: 'Treat curation as full-source review and fixed hashes; expose scaffold, validate, test, pack, and trace workflows to coding agents through MCP.',
      evidence: 'Deterministic ordering DAG, immutable installed packages, composable Experiences, core-owned model gateway, contract export, and trace review.',
    },
    'pt-BR': {
      thesis: 'Um ecossistema curado de extensões, referência de SDK e superfície de autoria para o Alex Tavern.',
      problem: 'Um sistema extensível precisa de pacotes reproduzíveis e contratos explícitos sem fingir que código confiável in-process está isolado.',
      decision: 'Tratar curadoria como revisão integral e hashes fixos; expor scaffold, validação, testes, empacotamento e traces a agentes via MCP.',
      evidence: 'DAG de ordem determinística, pacotes instalados imutáveis, Experiences compostas, gateway de modelos do core, exportação de contratos e revisão de traces.',
    },
  },
  reimaginex: {
    index: 'VIS / 06',
    name: 'ReImagineX',
    links: [{ key: 'github', url: 'https://github.com/al4xdev/ReImagineX' }],
    en: {
      thesis: 'A mobile-first visual lineage workspace for ComfyUI image-to-image generation trees.',
      problem: 'Iterative image generation loses ancestry, prompts, variants, and processing decisions across folders and queues.',
      decision: 'Attach prompts, reprocessing, upscaling, queue state, and optional AI refinement to every node in a browsable lineage.',
      evidence: 'Generation trees, mobile-first interaction, ComfyUI queue integration, persisted variants, and image-level workflow history.',
    },
    'pt-BR': {
      thesis: 'Um workspace mobile-first de linhagem visual para árvores de geração image-to-image no ComfyUI.',
      problem: 'Geração iterativa perde ancestralidade, prompts, variantes e decisões de processamento entre pastas e filas.',
      decision: 'Anexar prompts, reprocessamento, upscale, estado da fila e refinamento opcional por IA a cada nó de uma linhagem navegável.',
      evidence: 'Árvores de geração, interação mobile-first, integração com a fila do ComfyUI, variantes persistidas e histórico por imagem.',
    },
  },
};

const projectOrder = ['alex-tavern', 'scenequeue', 'promptnest', 'crime-alley', 'tavern-plugins', 'reimaginex'];
const body = document.body;
const gate = document.querySelector('#language-gate');
const shell = document.querySelector('#site-shell');
const panel = document.querySelector('#inspection-panel');
let language = 'en';
let activeProject = 'alex-tavern';

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The experience remains functional when storage is unavailable.
  }
}

function translateInterface() {
  const dictionary = STRINGS[language];
  document.documentElement.lang = language;
  document.title = language === 'pt-BR'
    ? 'Alexsandro Pessoa — Portfólio de sistemas'
    : 'Alexsandro Pessoa — Systems portfolio';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-set-language]').forEach((button) => {
    const selected = button.dataset.setLanguage === language;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-article-id]').forEach((link) => {
    link.href = `articles/?article=${encodeURIComponent(link.dataset.articleId)}&lang=${encodeURIComponent(language)}`;
  });
  document.querySelector('portfolio-cv')?.setAttribute('language', language);
}

function renderMentors() {
  const mentors = window.MENTOR_CONTENT || [];
  document.querySelectorAll('[data-mentor-index]').forEach((record) => {
    const mentor = mentors[Number.parseInt(record.dataset.mentorIndex, 10)];
    if (!mentor) return;
    const copy = mentor[language];
    record.href = mentor.linkedin;
    record.querySelector('[data-mentor-name]').textContent = copy.name;
    record.querySelector('[data-mentor-note]').textContent = copy.note;
    const portrait = record.querySelector('[data-mentor-portrait]');
    portrait.replaceChildren();
    if (mentor.photo) {
      const image = document.createElement('img');
      image.src = mentor.photo;
      image.alt = '';
      portrait.append(image);
    } else {
      portrait.textContent = mentor.initials;
    }
  });
}

function renderProject(projectId, animate = true) {
  activeProject = projectId;
  const project = PROJECTS[projectId];
  const copy = project[language];

  if (animate) {
    panel.classList.remove('refreshing');
    void panel.offsetWidth;
    panel.classList.add('refreshing');
  }

  document.querySelector('#project-index').textContent = project.index;
  document.querySelector('#project-name').textContent = project.name;
  document.querySelector('#project-thesis').textContent = copy.thesis;
  document.querySelector('#project-problem').textContent = copy.problem;
  document.querySelector('#project-decision').textContent = copy.decision;
  document.querySelector('#project-evidence').textContent = copy.evidence;

  const links = document.querySelector('#project-links');
  links.replaceChildren(...project.links.map((link) => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    const label = document.createElement('span');
    label.textContent = STRINGS[language][link.key];
    const arrow = document.createElement('span');
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    anchor.append(label, arrow);
    return anchor;
  }));

  document.querySelectorAll('[data-project]').forEach((node) => {
    const selected = node.dataset.project === projectId;
    node.classList.toggle('active', selected);
    node.setAttribute('aria-pressed', String(selected));
    if (selected && animate && window.matchMedia('(max-width: 800px)').matches) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      node.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  });

  document.querySelectorAll('[data-edge]').forEach((edge) => {
    const connected = edge.dataset.edge.split(':').includes(projectId);
    edge.classList.toggle('highlighted', connected);
    edge.classList.toggle('dimmed', !connected);
  });
}

function setLanguage(nextLanguage, persist = true) {
  language = nextLanguage === 'pt-BR' ? 'pt-BR' : 'en';
  if (persist) safeStorageSet('ap-portfolio-language', language);
  translateInterface();
  renderMentors();
  renderProject(activeProject, false);
}

function enterExperience(nextLanguage) {
  setLanguage(nextLanguage);
  body.dataset.state = 'site';
  gate.setAttribute('aria-hidden', 'true');
  shell.setAttribute('aria-hidden', 'false');
  shell.classList.add('entering');
  window.setTimeout(() => shell.classList.remove('entering'), 1400);
  document.querySelector('.identity-mark').focus({ preventScroll: true });
}

function reopenLanguageGate() {
  body.dataset.state = 'gate';
  gate.setAttribute('aria-hidden', 'false');
  shell.setAttribute('aria-hidden', 'true');
  const currentChoice = gate.querySelector(`[data-choose-language="${language}"]`);
  currentChoice?.focus({ preventScroll: true });
}

document.querySelectorAll('[data-choose-language]').forEach((button) => {
  button.addEventListener('click', () => enterExperience(button.dataset.chooseLanguage));
});

document.querySelectorAll('[data-set-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.setLanguage));
});

document.querySelectorAll('[data-open-language]').forEach((button) => {
  button.addEventListener('click', reopenLanguageGate);
});

document.querySelector('[data-print-cv]')?.addEventListener('click', () => {
  document.querySelector('portfolio-cv')?.print();
});

const cvControls = document.querySelector('[data-cv-controls]');
const cvToggle = document.querySelector('[data-cv-toggle]');
const cvSection = document.querySelector('#cv');
const cvEndSentinel = document.querySelector('[data-cv-end]');
const cvDocument = document.querySelector('#cv-document');

function setCvControlsExpanded(expanded) {
  if (!cvControls || !cvToggle) return;
  cvControls.dataset.expanded = String(expanded);
  cvToggle.setAttribute('aria-expanded', String(expanded));
}

cvToggle?.addEventListener('click', () => {
  setCvControlsExpanded(cvControls.dataset.expanded !== 'true');
});

function updateCvControlsDock() {
  if (!cvSection || !cvControls) return;
  const isMobile = window.matchMedia('(max-width: 800px)').matches;
  const sectionBounds = cvSection.getBoundingClientRect();
  const sectionIsVisible = sectionBounds.top < window.innerHeight && sectionBounds.bottom > 0;
  cvControls.classList.toggle('is-active', isMobile && sectionIsVisible);
  if (!isMobile) setCvControlsExpanded(false);
}

window.addEventListener('scroll', updateCvControlsDock, { passive: true });
window.addEventListener('resize', updateCvControlsDock);
updateCvControlsDock();

if ('IntersectionObserver' in window && cvEndSentinel) {
  const cvEndObserver = new IntersectionObserver((entries) => {
    const endIsVisible = entries.some((entry) => entry.isIntersecting);
    if (
      endIsVisible
      && cvDocument?.classList.contains('cv-ready')
      && window.matchMedia('(max-width: 800px)').matches
    ) {
      setCvControlsExpanded(true);
    }
  }, { threshold: 1 });
  cvEndObserver.observe(cvEndSentinel);
}

document.querySelectorAll('[data-project]').forEach((node) => {
  node.addEventListener('click', () => renderProject(node.dataset.project));
  node.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const currentIndex = projectOrder.indexOf(node.dataset.project);
    const nextId = projectOrder[(currentIndex + direction + projectOrder.length) % projectOrder.length];
    const nextNode = document.querySelector(`[data-project="${nextId}"]`);
    nextNode?.focus();
    renderProject(nextId);
  });
});

const savedLanguage = safeStorageGet('ap-portfolio-language');
const previewLanguage = new URLSearchParams(window.location.search).get('lang');
const requestedLanguage = previewLanguage === 'pt-BR' || previewLanguage === 'pt'
  ? 'pt-BR'
  : previewLanguage === 'en' ? 'en' : null;
setLanguage(requestedLanguage || savedLanguage || (navigator.language?.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'), false);
renderProject(activeProject, false);

if (savedLanguage || requestedLanguage) {
  body.dataset.state = 'site';
  gate.setAttribute('aria-hidden', 'true');
  shell.setAttribute('aria-hidden', 'false');
} else {
  body.dataset.state = 'gate';
  gate.setAttribute('aria-hidden', 'false');
  shell.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => gate.querySelector(`[data-choose-language="${language}"]`)?.focus(), 80);
}

const paperDocuments = [...document.querySelectorAll('.paper-document')];
document.documentElement.classList.add('paper-motion-ready');

const qualityProof = document.querySelector('[data-quality-proof]');
let qualityProofHydrated = false;

async function hydrateQualityProof() {
  if (qualityProofHydrated) return;
  qualityProofHydrated = true;

  const testCount = qualityProof?.querySelector('[data-test-count]');
  const deployLink = qualityProof?.querySelector('[data-latest-deploy]');

  try {
    const metadataResponse = await fetch('site-meta.json');
    if (metadataResponse.ok) {
      const metadata = await metadataResponse.json();
      if (Number.isInteger(metadata.totalTests) && metadata.totalTests > 0 && testCount) {
        testCount.textContent = String(metadata.totalTests);
      }
    }
  } catch {
    // The visible fallback remains meaningful when static metadata is unavailable.
  }

  try {
    const runsResponse = await fetch(
      'https://api.github.com/repos/al4xdev/al4xdev.github.io/actions/runs?branch=main&status=success&per_page=30',
    );
    if (!runsResponse.ok) return;
    const runs = await runsResponse.json();
    const latestDeploy = runs.workflow_runs?.find((run) => (
      /pages.*deploy/i.test(`${run.name || ''} ${run.path || ''}`)
    ));
    if (latestDeploy?.html_url && deployLink) deployLink.href = latestDeploy.html_url;
  } catch {
    // The generic Actions URL remains available if GitHub's public API is unavailable.
  }
}

if ('IntersectionObserver' in window && qualityProof) {
  const qualityObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    hydrateQualityProof();
    observer.disconnect();
  }, { rootMargin: '160px' });
  qualityObserver.observe(qualityProof);
} else {
  hydrateQualityProof();
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  paperDocuments.forEach((documentElement) => documentElement.classList.add('paper-open'));
} else {
  const paperObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('paper-open');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  paperDocuments.forEach((documentElement) => paperObserver.observe(documentElement));
}
