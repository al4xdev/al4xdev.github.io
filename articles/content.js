window.ARTICLE_CONTENT = Object.freeze({
  'token-economics': {
    type: 'CASE STUDY',
    date: '2026-07-16',
    source: 'https://github.com/al4xdev/alex-tavern/blob/master/docs/cases/token-economics-agentic-architecture-2026-07-16.md',
    en: {
      title: 'Token economics as an architectural enabler',
      deck: 'A cache-aware cost study with explicit attribution limits and normalized provider counterfactuals.',
      sections: [
        ['Question', 'Should a multi-agent system collapse semantic responsibilities merely to reduce calls and input tokens? Alex Tavern tests the opposite choice: keep authority, privacy, validation, and failure attribution explicit, then measure whether provider-native caching makes that structure economically viable.'],
        ['Evidence window', 'Across the project-aligned account window, DeepSeek V4 Flash activity contained 73,755,780 tokens over 4,176 requests for USD 1.5172. This is an upper bound, not an exact project total, because provider exports aggregate account activity. Cache hits represented 89.57% of Flash input tokens.'],
        ['Counterfactual', 'Charging the same Flash input volume entirely at the recorded cache-miss rate yields an estimated USD 10.46 total with output unchanged. The observed total was about 14.50% of that billing counterfactual. This comparison normalizes billing, not quality, latency, compliance, or model capability.'],
        ['Decision and limit', 'For this workload, token minimization was not the first architectural constraint. Knowledge isolation and inspectable ownership came first. The result does not make extra agents free: latency, dependency topology, cache policy changes, output volume, and exact application attribution remain material limitations.'],
      ],
    },
    'pt-BR': {
      title: 'Economia de tokens como habilitadora de arquitetura',
      deck: 'Um estudo de custos sensível a cache, com limites explícitos de atribuição e contrafactuais normalizados.',
      sections: [
        ['Pergunta', 'Um sistema multiagente deve juntar responsabilidades semânticas apenas para reduzir chamadas e tokens de entrada? Alex Tavern testa a escolha oposta: manter autoridade, privacidade, validação e atribuição de falhas explícitas e então medir se o cache nativo do provedor torna essa estrutura economicamente viável.'],
        ['Janela de evidência', 'Na janela da conta alinhada ao projeto, a atividade do DeepSeek V4 Flash reuniu 73.755.780 tokens em 4.176 requisições por USD 1,5172. Esse valor é um teto, não o total exato do projeto, pois o export do provedor agrega a atividade da conta. Hits de cache foram 89,57% dos tokens de entrada Flash.'],
        ['Contrafactual', 'Cobrar o mesmo volume de entrada Flash integralmente pela taxa registrada de cache miss produz um total estimado de USD 10,46, mantendo a saída igual. O total observado foi cerca de 14,50% desse contrafactual de cobrança. A comparação normaliza preço, não qualidade, latência, compliance ou capacidade.'],
        ['Decisão e limite', 'Para essa carga, minimizar tokens não foi a primeira restrição arquitetural. Isolamento de conhecimento e ownership inspecionável vieram antes. O resultado não torna agentes extras gratuitos: latência, topologia, mudanças na política de cache, saída e atribuição exata continuam relevantes.'],
      ],
    },
  },
  'speech-audience': {
    type: 'VALIDATION REPORT',
    date: '2026-07-15',
    source: 'https://github.com/al4xdev/alex-tavern/blob/master/docs/cases/speech-audience-model-2026-07-15.md',
    en: {
      title: 'A structural audience model for speech',
      deck: 'Witnessed actions, whispers, two-level recall assertions, and blind continuity review.',
      sections: [
        ['Failure', 'Every speech record reached every present character prompt while narration could claim that a bystander had not heard it. Actions entered through a separate field could become permanently unknowable. Fiction and information flow contradicted each other.'],
        ['Structural change', 'Turn records gained an explicit audience. Public records remain visible to everyone present; whispered speech and witnessed actions reach only the declared audience and speaker. Visibility is projected before a Character call rather than requested through prompt obedience.'],
        ['Validation', 'Deterministic tests checked routing, real-model recall separated prompt exposure from reply behavior, and a clean-context critic reviewed continuity. After two bias-controlled remediation cycles, whispered content reached no outsider prompt in nine recall checks across three sessions.'],
        ['Residual boundary', 'A character may later choose to reveal a secret aloud. That is earned public knowledge and a behavioral decision, not an audience-routing leak. The architecture prevents impossible access; it does not predetermine every subjective choice.'],
      ],
    },
    'pt-BR': {
      title: 'Um modelo estrutural de audiência para fala',
      deck: 'Ações testemunhadas, sussurros, asserções de recall em dois níveis e revisão cega de continuidade.',
      sections: [
        ['Falha', 'Toda fala chegava ao prompt de cada personagem presente enquanto a narração podia afirmar que alguém não ouvira. Ações inseridas por outro campo podiam se tornar permanentemente incognoscíveis. Ficção e fluxo de informação se contradiziam.'],
        ['Mudança estrutural', 'Registros de turno receberam uma audiência explícita. Registros públicos seguem visíveis para os presentes; sussurros e ações testemunhadas chegam apenas à audiência declarada e ao falante. A visibilidade é projetada antes da chamada do personagem, não pedida por obediência ao prompt.'],
        ['Validação', 'Testes determinísticos verificaram o roteamento, recall com modelo real separou exposição no prompt de comportamento na resposta, e um crítico sem contexto revisou continuidade. Após dois ciclos controlados, nenhum sussurro chegou ao prompt de um terceiro em nove checks e três sessões.'],
        ['Fronteira residual', 'Um personagem ainda pode decidir revelar um segredo em voz alta. Isso vira conhecimento público conquistado e representa uma decisão comportamental, não um vazamento de audiência. A arquitetura impede acesso impossível; não predetermina toda escolha subjetiva.'],
      ],
    },
  },
  'secret-guard': {
    type: 'CASE STUDY',
    date: '2026-07-15',
    source: 'https://github.com/al4xdev/alex-tavern/blob/master/docs/cases/character-output-guard-2026-07-15.md',
    en: {
      title: 'Making secret handling structural',
      deck: 'A deterministic retry-then-redact guard tested against informational-payload leaks.',
      sections: [
        ['Threat', 'A model can avoid quoting a forbidden secret while still transmitting its informational payload through paraphrase, implication, or suspiciously precise behavior. Prompt rules alone cannot establish confidentiality.'],
        ['Guard', 'Character output passes through a deterministic boundary that compares generated content with protected knowledge. A violation triggers one constrained retry; a repeated violation is redacted before persistence or visibility. The model proposes, but code controls release.'],
        ['Test design', 'Positive cases contained protected payloads in varied wording. Negative controls contained related but permissible language so the guard could not pass merely by deleting an entire topic. Logs preserved attempts and decisions for replay.'],
        ['Scope', 'The mechanism addresses secrets already represented in structured state. It cannot protect facts the system never classified, and semantic similarity remains a calibrated detection problem. Its value is a final enforceable boundary, not perfect understanding.'],
      ],
    },
    'pt-BR': {
      title: 'Tornando estrutural o tratamento de segredos',
      deck: 'Uma guarda determinística de retry e redação testada contra vazamentos de carga informacional.',
      sections: [
        ['Ameaça', 'Um modelo pode evitar citar um segredo e ainda transmitir sua carga informacional por paráfrase, implicação ou comportamento preciso demais. Regras de prompt sozinhas não estabelecem confidencialidade.'],
        ['Guarda', 'A saída do personagem atravessa uma fronteira determinística que compara o conteúdo gerado com conhecimento protegido. Uma violação dispara um retry restrito; repetição é redigida antes da persistência ou visibilidade. O modelo propõe, mas o código controla a liberação.'],
        ['Desenho do teste', 'Casos positivos continham a carga protegida em formulações variadas. Controles negativos continham linguagem relacionada, porém permitida, impedindo a guarda de passar apenas apagando todo um tema. Logs preservaram tentativas e decisões para replay.'],
        ['Escopo', 'O mecanismo cobre segredos já representados no estado estruturado. Não protege fatos nunca classificados, e similaridade semântica segue sendo um problema calibrado de detecção. O valor está numa fronteira final executável, não em compreensão perfeita.'],
      ],
    },
  },
  'memory-retention': {
    type: 'CONTROLLED EXPERIMENT',
    date: '2026-07-14',
    source: 'https://github.com/al4xdev/alex-tavern/blob/master/docs/cases/multi-character-memory-retention-2026-07-14.md',
    en: {
      title: 'Multi-character memory under shifting focus',
      deck: 'A reproduction attempt that rejected the reported failure and exposed a different architectural gap.',
      sections: [
        ['Reported problem', 'A character appeared to forget information after the scene shifted toward other speakers. The intuitive diagnosis was memory loss caused by changing focus, but a single transcript could not distinguish missing context from stochastic recall or routing defects.'],
        ['Reproduction', 'Controlled sessions repeated the fact, moved conversational focus, and later probed recall. Prompt inspection and responses were evaluated separately so a model failing to say a known fact would not be confused with the system withholding it.'],
        ['Result', 'The reported retention failure did not reproduce under the defined condition. The character still received the relevant record. The experiment instead exposed a broader gap: all present characters received speech regardless of who could plausibly hear it.'],
        ['Consequence', 'The rejected hypothesis still produced useful architecture work. It led directly to a first-class audience model, witnessed actions, explicit whisper visibility, and stronger assertions at both prompt and reply levels. Negative results changed the system.'],
      ],
    },
    'pt-BR': {
      title: 'Memória multipersonagem sob mudança de foco',
      deck: 'Uma tentativa de reprodução que rejeitou a falha relatada e expôs outra lacuna arquitetural.',
      sections: [
        ['Problema relatado', 'Um personagem pareceu esquecer uma informação depois que a cena mudou o foco para outros falantes. O diagnóstico intuitivo era perda de memória, mas um transcript isolado não separava contexto ausente, recall estocástico e defeito de roteamento.'],
        ['Reprodução', 'Sessões controladas repetiram o fato, moveram o foco da conversa e depois sondaram recall. Inspeção do prompt e resposta foram avaliadas separadamente, evitando confundir um modelo que não verbalizou um fato conhecido com um sistema que ocultou o fato.'],
        ['Resultado', 'A falha de retenção relatada não se reproduziu sob a condição definida. O personagem ainda recebia o registro relevante. O experimento expôs outra lacuna: todos os presentes recebiam falas independentemente de quem plausivelmente poderia ouvi-las.'],
        ['Consequência', 'A hipótese rejeitada ainda produziu trabalho arquitetural útil. Ela levou ao modelo de audiência, ações testemunhadas, visibilidade explícita de sussurros e asserções mais fortes nos níveis de prompt e resposta. O resultado negativo mudou o sistema.'],
      ],
    },
  },
});
