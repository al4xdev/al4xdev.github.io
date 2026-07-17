/*
 * CV CONTENT SANDBOX
 *
 * Future AI edits should normally touch this file only. Keep both language variants aligned and
 * preserve the object shape consumed by render.js. Keep explicit draft markers for fields that
 * still require verification.
 */
window.CV_CONTENT = Object.freeze({
  en: {
    documentTitle: 'Alexsandro Pessoa — AI Platform Engineer CV draft',
    mockBadge: 'PUBLIC DRAFT / MOCK FIELDS PENDING',
    name: 'Alexsandro Pessoa',
    role: 'Senior AI Platform Engineer · Agentic Systems · Data Platforms · Developer Enablement',
    links: [
      { label: 'al4xdev.github.io', url: 'https://al4xdev.github.io/' },
      { label: 'github.com/al4xdev', url: 'https://github.com/al4xdev' },
    ],
    profile: {
      label: 'Profile',
      body: 'AI & Platform Engineer building reusable GenAI systems across typed LLM workflows, agent control planes, runtime platforms, and developer tooling.',
    },
    experienceLabel: 'Experience',
    experience: [
      {
        title: 'Agentic document-transformation platform',
        meta: 'Accenture · Dec 2024–Present',
        body: 'Drove substantial implementation and evolution of an agentic document-transformation platform. Built a typed multi-stage LLM framework with retries, timeouts, partial failures, and telemetry.',
      },
      {
        title: 'vLLM-based inference platform',
        meta: 'Accenture · Overlapping project work',
        body: 'Implemented runtime, deployment, observability, accounting integration, and operational automation for a vLLM-based inference platform; initial design constraints were shared.',
      },
      {
        title: 'Confidential enterprise AI/platform initiative',
        meta: 'Accenture · Current · Project role: Principal AI Platform Engineer',
        body: 'Scope withheld pending disclosure approval. Functional project role, not a formal HR title.',
      },
    ],
    selectedWorkLabel: 'Independent engineering projects',
    selectedWork: [
      {
        name: 'Crime Alley CV',
        body: 'Deterministic coding-agent control plane with typed state, recoverable transactions, integrity guards, and provider boundaries.',
      },
      {
        name: 'Alex Tavern ecosystem',
        body: 'Source-visible proprietary multi-agent system with state and information boundaries, compaction, replay/debug tooling, and a curated plugin hub.',
      },
      {
        name: 'PromptNest',
        body: 'Typed asynchronous map/consolidate/reduce library with provider-neutral adapters and failure controls.',
      },
      {
        name: 'SceneQueue',
        body: 'Local-first ComfyUI storyboard with persistent sequence editing, hybrid job synchronization, and PWA/mobile UX.',
      },
    ],
    focusLabel: 'Technical focus',
    focus: [
      'Python',
      'Typed async LLM workflows',
      'Agentic systems',
      'Deterministic control planes',
      'vLLM runtimes',
      'Observability',
      'Developer tooling',
      'Data platforms',
    ],
    languagesLabel: 'Languages',
    languages: ['Portuguese · Proficiency verification pending', 'English · Proficiency verification pending'],
    educationLabel: 'Education & certifications',
    education: 'Verification pending; legacy data was not reused.',
    footnote: 'Public draft. Contact, education, certifications, language proficiency, and confidential scope remain pending.',
  },
  'pt-BR': {
    documentTitle: 'Alexsandro Pessoa — Rascunho do currículo de engenharia de plataformas de IA',
    mockBadge: 'RASCUNHO PÚBLICO / CAMPOS MOCK PENDENTES',
    name: 'Alexsandro Pessoa',
    role: 'Engenheiro Sênior de Plataformas de IA · Sistemas Agênticos · Plataformas de Dados · Aceleração de Desenvolvedores',
    links: [
      { label: 'al4xdev.github.io', url: 'https://al4xdev.github.io/' },
      { label: 'github.com/al4xdev', url: 'https://github.com/al4xdev' },
    ],
    profile: {
      label: 'Perfil',
      body: 'Engenheiro de IA e plataformas construindo sistemas GenAI reutilizáveis entre fluxos tipados com LLMs, planos de controle para agentes, plataformas de runtime e ferramentas para desenvolvedores.',
    },
    experienceLabel: 'Experiência',
    experience: [
      {
        title: 'Plataforma agêntica de transformação de documentos',
        meta: 'Accenture · dez. 2024–atual',
        body: 'Conduziu parte substancial da implementação e evolução de uma plataforma agêntica de transformação de documentos. Criou um framework tipado de LLMs em múltiplas etapas, com retries, timeouts, falhas parciais e telemetria.',
      },
      {
        title: 'Plataforma de inferência baseada em vLLM',
        meta: 'Accenture · Trabalho de projeto sobreposto',
        body: 'Implementou runtime, deployment, observabilidade, integração de contabilização e automação operacional para uma plataforma baseada em vLLM; as restrições iniciais de design foram compartilhadas.',
      },
      {
        title: 'Iniciativa confidencial empresarial de IA/plataforma',
        meta: 'Accenture · Atual · Função no projeto: Principal AI Platform Engineer',
        body: 'Escopo retido até aprovação de divulgação. Função de projeto, não cargo formal de RH.',
      },
    ],
    selectedWorkLabel: 'Projetos independentes de engenharia',
    selectedWork: [
      {
        name: 'Crime Alley CV',
        body: 'Plano de controle determinístico para agentes de código, com estado tipado, transações recuperáveis, guardas de integridade e fronteiras de providers.',
      },
      {
        name: 'Ecossistema Alex Tavern',
        body: 'Sistema multiagente proprietário com código visível, fronteiras de estado e informação, compactação, replay/debug e um hub curado de plugins.',
      },
      {
        name: 'PromptNest',
        body: 'Biblioteca assíncrona tipada de map/consolidate/reduce, com adaptadores neutros a providers e controles de falha.',
      },
      {
        name: 'SceneQueue',
        body: 'Storyboard local-first sobre ComfyUI, com edição persistente, sincronização híbrida de jobs e UX PWA/mobile.',
      },
    ],
    focusLabel: 'Foco técnico',
    focus: [
      'Python',
      'Fluxos assíncronos tipados com LLMs',
      'Sistemas agênticos',
      'Planos de controle determinísticos',
      'Runtimes vLLM',
      'Observabilidade',
      'Ferramentas para desenvolvedores',
      'Plataformas de dados',
    ],
    languagesLabel: 'Idiomas',
    languages: ['Português · Proficiência pendente de verificação', 'Inglês · Proficiência pendente de verificação'],
    educationLabel: 'Formação e certificações',
    education: 'Verificação pendente; dados legados não foram reutilizados.',
    footnote: 'Rascunho público. Contatos, formação, certificações, proficiência de idiomas e escopo confidencial permanecem pendentes.',
  },
});
