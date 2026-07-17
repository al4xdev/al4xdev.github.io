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
		profile: {
			label: "Profile",
			body:
				"AI & Platform Engineer who turns ambiguous GenAI architectures into deployable, observable, reusable systems: typed LLM workflows, agent control planes, vLLM runtimes, and developer tooling. Measured impact on cost, performance, and delivery speed.",
		},
		experienceLabel: "Experience",
		experienceCompany: "accenture",
		experience: [
			{
				role: "Principal AI Platform Engineer",
				tag: "project role",
				period: "2025 — Present",
				projects: [
					{
						title: "Enterprise data & AI platform",
						body:
							"Lead architecture, developer enablement, and technical direction on a confidential enterprise data/AI platform. Modernizing legacy data flows with deterministic pipelines so developers can implement and validate new rules safely and autonomously. Client, domain, stack, and metrics are withheld under confidentiality.",
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
					"Deterministic coding-agent control plane with typed state, recoverable transactions, integrity guards, and provider boundaries.",
			},
			{
				name: "Alex Tavern ecosystem",
				body:
					"Source-visible proprietary multi-agent system with state and information boundaries, compaction, replay/debug tooling, and a curated plugin hub.",
			},
			{
				name: "PromptNest",
				body:
					"Typed asynchronous map/consolidate/reduce library with provider-neutral adapters and failure controls.",
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
		focusLabel: "Technical focus",
		focus: [
			"Python",
			"Typed async LLM workflows",
			"Agentic systems",
			"Deterministic control planes",
			"vLLM runtimes",
			"Observability",
			"Developer tooling",
			"Data platforms",
		],
		languagesLabel: "Languages",
		languages: [
			"Portuguese · Native",
			"English · C2 · goFLUENT ECEFR SET, Apr 2025",
		],
		educationLabel: "Education & certifications",
		education:
			"B.Eng. Materials Engineering, UFCA (2023) · Materials Engineering studies, UFSC (2016–2019) · Machine Learning Specialization, Stanford Online & DeepLearning.AI (2024) · People Leadership Credential L1, Accenture (2025) · Consumer Electronics Industry Foundations, Primerli (2025)",
		mentorsNote:
			"People whose experience, technical judgment, and intellectual generosity are a permanent part of my formation.",
		footnote:
			"Public CV. Confidential client and project details are withheld. Impact figures reflect each project’s original scope and baseline.",
	},
	"pt-BR": {
		documentTitle:
			"Alexsandro Pessoa — Currículo de engenharia de plataformas de IA",
		name: "Alexsandro Pessoa",
		role:
			"Engenheiro Sênior de Plataformas de IA · Sistemas Agênticos · Plataformas de Dados · Aceleração de Desenvolvedores",
		links: [
			{ label: "github.com/al4xdev", url: "https://github.com/al4xdev" },
			{
				label: "linkedin.com/in/al4xdev",
				url: "https://www.linkedin.com/in/al4xdev",
			},
		],
		profile: {
			label: "Perfil",
			body:
				"Engenheiro de IA e plataformas que transforma arquiteturas GenAI ambíguas em sistemas implantáveis, observáveis e reutilizáveis: fluxos tipados com LLMs, planos de controle para agentes, runtimes vLLM e ferramentas para desenvolvedores. Impacto medido em custo, desempenho e velocidade de entrega.",
		},
		experienceLabel: "Experiência",
		experienceCompany: "accenture",
		experience: [
			{
				role: "Principal AI Platform Engineer",
				tag: "função no projeto",
				period: "2025 — atual",
				projects: [
					{
						title: "Plataforma corporativa de dados & IA",
						body:
							"Lidera arquitetura, capacitação de desenvolvedores e direção técnica em uma plataforma corporativa confidencial de dados/IA. Moderniza fluxos legados de dados com pipelines determinísticos para que desenvolvedores implementem e validem novas regras com segurança e autonomia. Cliente, domínio, stack e métricas são omitidos por confidencialidade.",
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
							"Construiu pipelines de ETL de alta vazão (Polars/Python) que melhoraram a vazão em ~50% e reduziu o custo de BigQuery em ~90% com um ORM orientado a metadados. Entregou ferramentas de validação com GenAI e serviços de RAG em infraestrutura GCP conteinerizada (Cloud Functions, Pub/Sub).",
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
					"Plano de controle determinístico para agentes de código, com estado tipado, transações recuperáveis, guardas de integridade e fronteiras de providers.",
			},
			{
				name: "Ecossistema Alex Tavern",
				body:
					"Sistema multiagente proprietário com código visível, fronteiras de estado e informação, compactação, replay/debug e um hub curado de plugins.",
			},
			{
				name: "PromptNest",
				body:
					"Biblioteca assíncrona tipada de map/consolidate/reduce, com adaptadores neutros a providers e controles de falha.",
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
		focusLabel: "Foco técnico",
		focus: [
			"Python",
			"Fluxos assíncronos tipados com LLMs",
			"Sistemas agênticos",
			"Planos de controle determinísticos",
			"Runtimes vLLM",
			"Observabilidade",
			"Ferramentas para desenvolvedores",
			"Plataformas de dados",
		],
		languagesLabel: "Idiomas",
		languages: ["Português", "Inglês · C2 · goFLUENT ECEFR SET, abr. 2025"],
		educationLabel: "Formação e certificações",
		education:
			"Bacharelado em Engenharia de Materiais, UFCA (2023) · Estudos em Engenharia de Materiais, UFSC (2016–2019) · Machine Learning Specialization, Stanford Online & DeepLearning.AI (2024) · Credencial People Leadership Nível 1, Accenture (2025) · Consumer Electronics Industry Foundations, Primerli (2025)",
		mentorsNote:
			"Pessoas cuja experiência, julgamento técnico e generosidade intelectual fazem parte permanente da minha formação.",
		footnote:
			"Currículo público. Detalhes confidenciais de clientes e projetos são omitidos. Os números de impacto refletem o escopo e a baseline originais de cada projeto.",
	},
});
