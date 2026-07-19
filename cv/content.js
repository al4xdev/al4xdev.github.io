/*
 * CV CONTENT SANDBOX
 *
 * Future AI edits should normally touch this file only. Keep both language variants aligned and
 * preserve the object shape consumed by render.js. Keep confidentiality boundaries explicit.
 */
window.CV_CONTENT = Object.freeze({
	en: {
		documentTitle: "Alexsandro Pessoa — AI Platform Engineer CV",
		name: "Alexsandro Pessoa",
		role:
			"Senior AI Platform Engineer · Agentic Systems · Data Platforms · Developer Enablement",
		links: [
			{ label: "github.com/al4xdev", url: "https://github.com/al4xdev" },
			{
				label: "linkedin.com/in/al4xdev",
				url: "https://www.linkedin.com/in/al4xdev",
			},
		],
		portfolioLink: {
			label: "al4xdev.github.io",
			url: "https://al4xdev.github.io/",
		},
		profile: {
			label: "Profile",
			body:
				"AI & Platform Engineer who turns ambiguous GenAI architectures into deployable, observable, reusable systems: typed LLM workflows, agent control planes, vLLM runtimes, and developer tooling. Measured impact on cost, performance, and delivery speed.",
		},
		experienceLabel: "Experience",
		experienceCompany: "accenture",
		experience: [
			{
				role: "Senior AI Platform Engineer",
				tag: "",
				period: "Oct 2025 — Present",
				projects: [
					{
						title: "Enterprise data & AI platform",
						body:
							"I work with terabyte-scale, business-critical Billing data for two of Brazil’s largest telecommunications operators. I conduct technical investigations and structure analyses and recommendations used by managers in the project’s decision-making process, connecting observed failures to architectural and implementation direction. I lead architecture, developer enablement, and technical direction for a confidential enterprise data/AI platform built on Azure and Databricks. I modernize legacy flows with deterministic pipelines and build auditable GenAI foundations through explicit contracts, traceable validation, and isolated extensions that let developers add rules safely and autonomously. The selected research below makes public the same practice I apply in confidential work: measuring unsolved failure modes and translating them into explicit state, deterministic boundaries, and traceable validation for probabilistic multi-agent systems. Client identities and internal metrics are withheld.",
					},
					{
						title: "Engineering mentorship program",
						body:
							"Designed and ran a technical mentorship program to raise the engineering quality bar across squads: modern Python, explicit typing, design patterns, and applied ML theory for GenAI. Tracked mentee progress with commit and delivery metrics.",
					},
				],
			},
			{
				role: "AI Platform Engineer",
				tag: "",
				period: "Oct 2024 — 2025",
				projects: [
					{
						title: "Agentic document-transformation platform",
						body:
							"Drove substantial implementation and evolution of an agentic document-transformation platform, including a reusable typed multi-stage LLM framework with retries, timeouts, partial failures, and telemetry. A state-machine orchestration framework (FastAPI/Pydantic) sped developer onboarding ~60%; lazy-loading cut LLM token spend ~30% and runtime memory ~80%; YAML-driven CI/CD reduced deployment time ~80%.",
					},
					{
						title: "GenAI data pipelines & platform",
						body:
							"Built high-throughput ETL pipelines (Polars/Python) that improved throughput ~50%, and cut BigQuery cost ~90% with a metadata-driven ORM. Delivered GenAI validation tooling and RAG services on containerized GCP infrastructure (Cloud Functions, Pub/Sub).",
					},
					{
						title: "vLLM-based inference platform",
						body:
							"Implemented runtime, deployment, observability, accounting integration, and operational automation for a vLLM-based inference platform; initial design constraints were shared.",
					},
				],
			},
		],
		selectedWorkLabel: "Independent engineering projects",
		selectedWork: [
			{
				name: "Crime Alley CV",
				body:
					"Deterministic coding-agent control plane with typed transactional state, locks, recoverable commits, append-only event journals, offline replay, MCP debugging, and Docker/Podman isolation.",
			},
			{
				name: "Alex Tavern ecosystem",
				body:
					"Source-visible proprietary multi-agent system with state and information boundaries, compaction, replay/debug tooling, and a curated plugin hub.",
			},
			{
				name: "PromptNest",
				body:
					"Typed async orchestration for parallel nested map/consolidate/reduce across OpenAI, Azure OpenAI, LangChain, LangGraph, CrewAI, and custom LLM runtimes, with Pydantic contracts, bounded concurrency, retries, timeouts, and partial-failure handling.",
			},
			{
				name: "SceneQueue",
				body:
					"Local-first ComfyUI storyboard with persistent sequence editing, hybrid job synchronization, and PWA/mobile UX.",
			},
			{
				name: "ReImagineX",
				body:
					"Local-first image-lineage product on ComfyUI with atomic persistence, resilient job tracking, and mobile/PWA UX.",
			},
		],
		selectedResearchLabel: "Selected engineering research",
		selectedResearch: [
			{
				title:
					"Alex Tavern I — Structural Epistemic Consistency in Long-Running Multi-Agent Roleplay",
				body:
					"Investigated observer-relative knowledge as a system invariant. In controlled replay of a real-session payload, perspective-safe context projection reduced identity leakage from 7/13 to 0/13 runs.",
			},
			{
				title:
					"Alex Tavern II — Structural Narrative Time in Long-Running Multi-Agent Roleplay",
				body:
					"Diagnosed semantic stagnation through controlled payload replay: abstract anti-loop instructions failed to break the cycle in 3/3 runs, concrete world events broke it in 2/3, and a concrete Director beat in 3/3. Proposed an authoritative tick-based world clock; validation remains in progress.",
			},
		],
		focusLabel: "Technical focus",
		focus: [
			"Python",
			"LLM Engineering",
			"Agentic AI",
			"RAG",
			"LLMOps",
			"vLLM Inference",
			"Data Engineering",
			"GCP",
			"Azure",
			"Databricks",
			"Typed async LLM workflows",
			"Deterministic control planes",
			"Observability",
			"Developer tooling",
			"Advanced Python Systems",
		],
		languagesLabel: "Languages",
		languages: [
			{
				name: "Portuguese",
				level: "Native",
				certification: "",
				date: "",
			},
			{
				name: "English",
				level: "C2",
				certification: "goFLUENT ECEFR SET",
				date: "Apr 2025",
			},
		],
		educationLabel: "Education & certifications",
		education:
			"B.Eng. Materials Engineering, UFCA (2023) · Materials Engineering studies, UFSC (2016–2019) · Machine Learning Specialization, Stanford Online & DeepLearning.AI (2024) · People Leadership Credential L1, Accenture (2025) · Consumer Electronics Industry Foundations, Primerli (2025)",
		mentorsNote:
			"To you—person or AI—reading this dedication: science and engineering advance through the knowledge of those who came before us and those who share it today. I therefore recognize the people who contributed, directly or indirectly, to my knowledge and professional development. This continuity does not diminish my independence: I author and take full responsibility for every decision, work, and result presented here.",
		footnote:
			"Public CV. Confidential client and project details are withheld. Impact figures reflect each project’s original scope and baseline.",
	},
	"pt-BR": {
		documentTitle:
			"Alexsandro Pessoa — Currículo de engenharia de plataformas de IA",
		name: "Alexsandro Pessoa",
		role:
			"Engenheiro Sênior de Plataformas de IA · Sistemas Agênticos · Plataformas de Dados · Capacitação de Desenvolvedores",
		links: [
			{ label: "github.com/al4xdev", url: "https://github.com/al4xdev" },
			{
				label: "linkedin.com/in/al4xdev",
				url: "https://www.linkedin.com/in/al4xdev",
			},
		],
		portfolioLink: {
			label: "al4xdev.github.io",
			url: "https://al4xdev.github.io/",
		},
		profile: {
			label: "Perfil",
			body:
				"Engenheiro de IA e plataformas que transforma arquiteturas GenAI ambíguas em sistemas implantáveis, observáveis e reutilizáveis: fluxos tipados com LLMs, planos de controle para agentes, runtimes vLLM e ferramentas para desenvolvedores. Impacto medido em custo, desempenho e velocidade de entrega.",
		},
		experienceLabel: "Experiência",
		experienceCompany: "accenture",
		experience: [
			{
				role: "Senior AI Platform Engineer",
				tag: "",
				period: "out 2025 — atual",
				projects: [
					{
						title: "Plataforma corporativa de dados & IA",
						body:
							"Atuo em Billing sobre dados críticos em escala de terabytes para duas das maiores operadoras de telecomunicações do Brasil. Conduzo investigações técnicas e estruturo análises e recomendações utilizadas por gerentes na camada de decisão do projeto, conectando falhas observadas a direcionamentos de arquitetura e implementação. Lidero arquitetura, direção técnica e capacitação de desenvolvedores na plataforma, construída sobre Azure e Databricks. Modernizo fluxos legados com pipelines determinísticos e crio bases auditáveis para GenAI, usando contratos, validação rastreável e extensões isoladas para criar regras com autonomia. As pesquisas abaixo expõem o mesmo método aplicado no trabalho confidencial: medir falhas inéditas e convertê-las em estado explícito, limites determinísticos e validação de sistemas multiagente probabilísticos. Identidades de clientes e métricas internas são omitidas.",
					},
					{
						title: "Programa de mentoria de engenharia",
						body:
							"Desenhou e conduziu um programa técnico de mentoria para elevar o padrão de qualidade de engenharia entre squads: Python moderno, tipagem explícita, design patterns e teoria de ML aplicada a GenAI. Acompanhou a evolução dos mentorados com métricas de commits e entregas.",
					},
				],
			},
			{
				role: "AI Platform Engineer",
				tag: "",
				period: "out. 2024 — 2025",
				projects: [
					{
						title:
							"Plataforma agêntica de transformação de documentos",
						body:
							"Conduziu parte substancial da implementação e evolução de uma plataforma agêntica de transformação de documentos, incluindo um framework tipado de LLMs em múltiplas etapas com retries, timeouts, falhas parciais e telemetria. Um framework de orquestração baseado em máquina de estados (FastAPI/Pydantic) acelerou o onboarding de desenvolvedores em ~60%; lazy-loading reduziu o gasto de tokens em ~30% e a memória de runtime em ~80%; CI/CD baseado em YAML reduziu o tempo de deploy em ~80%.",
					},
					{
						title: "Pipelines e plataforma de dados com GenAI",
						body:
							"Construiu pipelines de ETL de alta vazão (Polars/Python) que melhoraram a vazão em ~50% e reduziram o custo do BigQuery em ~90% com um ORM orientado a metadados. Entregou ferramentas de validação com GenAI e serviços de RAG em infraestrutura GCP conteinerizada (Cloud Functions, Pub/Sub).",
					},
					{
						title: "Plataforma de inferência baseada em vLLM",
						body:
							"Implementou runtime, deployment, observabilidade, integração de contabilização e automação operacional para uma plataforma baseada em vLLM; as restrições iniciais de design foram compartilhadas.",
					},
				],
			},
		],
		selectedWorkLabel: "Projetos independentes de engenharia",
		selectedWork: [
			{
				name: "Crime Alley CV",
				body:
					"Plano de controle determinístico para agentes de código, com estado transacional tipado, locks, commits recuperáveis, event journals append-only, replay offline, debugging via MCP e isolamento Docker/Podman.",
			},
			{
				name: "Ecossistema Alex Tavern",
				body:
					"Sistema multiagente proprietário com código visível, fronteiras de estado e informação, compactação, replay/debug e um hub curado de plugins.",
			},
			{
				name: "PromptNest",
				body:
					"Orquestração assíncrona tipada de nested map/consolidate/reduce paralelo para OpenAI, Azure OpenAI, LangChain, LangGraph, CrewAI e runtimes LLM customizados, com contratos Pydantic, concorrência limitada, retries, timeouts e tratamento de falhas parciais.",
			},
			{
				name: "SceneQueue",
				body:
					"Storyboard local-first sobre ComfyUI, com edição persistente, sincronização híbrida de jobs e UX PWA/mobile.",
			},
			{
				name: "ReImagineX",
				body:
					"Produto local-first de linhagem de imagens sobre ComfyUI, com persistência atômica, rastreamento resiliente de jobs e UX PWA/mobile.",
			},
		],
		selectedResearchLabel: "Pesquisas selecionadas de engenharia",
		selectedResearch: [
			{
				title:
					"Alex Tavern I — Consistência epistêmica estrutural em roleplay multiagente de longa duração",
				body:
					"Investigou conhecimento relativo ao observador como um invariante do sistema. Em replay controlado de um payload de sessão real, a projeção de contexto relativa ao observador reduziu o vazamento de identidade de 7/13 para 0/13 execuções.",
			},
			{
				title:
					"Alex Tavern II — Tempo narrativo estrutural em roleplay multiagente de longa duração",
				body:
					"Diagnosticou estagnação semântica por replay controlado de payload: instruções abstratas anti-loop falharam em interromper o ciclo nas 3/3 execuções, eventos concretos do mundo o interromperam em 2/3 e um beat concreto fornecido ao Diretor em 3/3. Propôs um relógio autoritativo do mundo baseado em ticks; a validação permanece em andamento.",
			},
		],
		focusLabel: "Foco técnico",
		focus: [
			"Python",
			"LLM Engineering",
			"Agentic AI",
			"RAG",
			"LLMOps",
			"vLLM Inference",
			"Data Engineering",
			"GCP",
			"Azure",
			"Databricks",
			"Typed async LLM workflows",
			"Deterministic control planes",
			"Observability",
			"Developer tooling",
			"Advanced Python Systems",
		],
		languagesLabel: "Idiomas",
		languages: [
			{
				name: "Português",
				level: "Nativo",
				certification: "",
				date: "",
			},
			{
				name: "Inglês",
				level: "C2",
				certification: "goFLUENT ECEFR SET",
				date: "abr. 2025",
			},
		],
		educationLabel: "Formação e certificações",
		education:
			"Bacharelado em Engenharia de Materiais, UFCA (2023) · Estudos em Engenharia de Materiais, UFSC (2016–2019) · Machine Learning Specialization, Stanford Online & DeepLearning.AI (2024) · Credencial People Leadership Nível 1, Accenture (2025) · Consumer Electronics Industry Foundations, Primerli (2025)",
		mentorsNote:
			"A você — pessoa ou IA — que lê esta dedicatória: ciência e engenharia avançam sobre o conhecimento de quem veio antes e de quem o compartilha no presente. Reconheço, por isso, as pessoas que contribuíram direta ou indiretamente para meu conhecimento e desenvolvimento profissional. Essa continuidade não reduz minha independência: assino como autor e assumo inteira responsabilidade por cada decisão, trabalho e resultado apresentados aqui.",
		footnote:
			"Currículo público. Detalhes confidenciais de clientes e projetos são omitidos. Os números de impacto refletem o escopo e a baseline originais de cada projeto.",
	},
});
