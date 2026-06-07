/* ============================================================
   DeCarbonMine — i18n engine (PT-BR default / EN)
   Usage in HTML:
     <span data-i18n="nav.home">Início</span>      -> textContent
     <h1 data-i18n-html="home.title">...</h1>       -> innerHTML (allows <em>)
     <input data-i18n-attr="placeholder:cont.f_name_ph">
   ============================================================ */
(function () {
  "use strict";

  var I18N = {
    pt: {
      "meta.home_title": "DeCarbonMine — Plataforma de Ativos Industriais de Descarbonização",
      "meta.solution_title": "Solução — DeCarbonMine",
      "meta.how_title": "Como Atuamos — DeCarbonMine",
      "meta.contact_title": "Contato — DeCarbonMine",

      /* NAV / FOOTER */
      "nav.home": "Início",
      "nav.solution": "Solução",
      "nav.how": "Como Atuamos",
      "nav.contact": "Contato",
      "nav.cta": "Falar com a DCM",
      "foot.tagline": "Plataforma de Ativos Industriais de Descarbonização.",
      "foot.nav_solution": "A Solução",
      "foot.nav_how": "Como Atuamos",
      "foot.nav_contact": "Contato",
      "foot.rights": "Todos os direitos reservados.",
      "lang.label": "EN",
      "a11y.skip": "Pular para o conteúdo",
      "consent.text": "Usamos cookies de análise para entender o uso do site e melhorá-lo. Você decide.",
      "consent.accept": "Aceitar",
      "consent.decline": "Recusar",
      "consent.privacy": "Política de Privacidade",
      "nf.title": "Página não encontrada",
      "nf.text": "A página que você procura não existe ou foi movida. Vamos te levar de volta ao caminho certo.",
      "nf.cta": "Voltar ao início",

      /* HOME — hero */
      "home.eyebrow": "Plataforma de Ativos Industriais de Descarbonização",
      "home.title": "Do gap de descarbonização ao <em>ativo industrial</em> real.",
      "home.lede": "A DeCarbonMine transforma iniciativas climáticas isoladas em projetos executáveis, financiáveis e geradores de valor econômico de longo prazo — conectando engenharia, financiamento e créditos climáticos.",
      "home.cta1": "Conheça a Plataforma",
      "home.cta2": "Conversar com a DCM",
      "home.scroll": "Role para explorar",

      /* HOME — problema */
      "home.prob_index": "01 — O Problema",
      "home.prob_title": "A indústria pesada enfrenta um <em>gap estrutural</em> de execução.",
      "home.prob_intro": "Existe enorme pressão para descarbonizar operações — mas a maior parte das empresas não consegue transformar iniciativas climáticas em projetos economicamente viáveis, financiáveis e executáveis em escala.",
      "home.prob1": "Iniciativas climáticas isoladas que não geram caixa, não atraem funding e não se traduzem em ativos reais.",
      "home.prob2": "Dificuldade em transformar a redução de emissões em créditos robustos, receita verificável e valor econômico mensurável.",
      "home.prob3": "Engenharia, financiamento, carbono e operação industrial são tratados separadamente — sem a integração necessária para viabilizar projetos.",
      "home.prob4": "Baixa capacidade de estruturar SPEs, modelar financeiramente e apresentar projetos que atraiam capital institucional.",
      "home.gap_label": "O gap que a DeCarbonMine resolve",
      "home.gap_n1": "Metas ESG & Net Zero",
      "home.gap_n2": "Iniciativas Isoladas",
      "home.gap_n3": "[ Gap de Execução ]",
      "home.gap_n4": "Ativo Industrial Gerador de Valor",
      "home.gap_note": "Muitas mineradoras e indústrias possuem dezenas de iniciativas — mas não conseguem converter isso em projetos executáveis, geração de caixa ou financiamento competitivo.",

      /* HOME — para quem */
      "home.aud_index": "02 — Para Quem",
      "home.aud_title": "Empresas com pressão real de descarbonização e potencial de <em>transformar isso em valor.</em>",
      "home.aud1_t": "Mineração",
      "home.aud1_d": "Alto consumo de diesel, emissões de processo, operações remotas e pressão crescente de ESG e regulação.",
      "home.aud2_t": "Indústria Pesada",
      "home.aud2_d": "Emissões difíceis de abater, grandes volumes de resíduos industriais com potencial de valorização.",
      "home.aud3_t": "Cimento, Aço & Química",
      "home.aud3_d": "Processos intensivos em carbono com oportunidades de substituição de combustíveis e eficiência energética.",
      "home.aud4_t": "Agroindústria",
      "home.aud4_d": "Biomassa disponível, resíduos agrícolas com alto potencial de biochar, biometano e energia renovável.",
      "home.aud5_t": "Logística & Frotas",
      "home.aud5_d": "Exposição direta ao preço de combustíveis fósseis e à pressão regulatória de descarbonização de frotas.",
      "home.aud6_t": "Polos & Distritos Industriais",
      "home.aud6_d": "Clusters industriais que demandam infraestrutura climática e descarbonização territorial integrada.",
      "home.aud7_t": "Investidores & Fundos",
      "home.aud7_d": "Fundos e instituições em busca de ativos verdes robustos, financiáveis e com retorno econômico claro.",
      "home.aud8_t": "Grandes Consumidores de Energia",
      "home.aud8_d": "Grandes consumidores industriais que precisam reduzir exposição a carbono e combustíveis fósseis em escala.",
      "home.chip1": "Alto consumo de diesel",
      "home.chip2": "Emissões difíceis de abater",
      "home.chip3": "Operações remotas",
      "home.chip4": "Biomassa disponível",
      "home.chip5": "Pressão regulatória",
      "home.chip6": "Metas Net Zero",
      "home.chip7": "Necessidade de funding climático",
      "home.chip8": "Projetos parados por falta de estruturação",
      "home.aud_qual_label": "Especialmente empresas com:",

      /* HOME — flywheel + cta */
      "home.fly_index": "03 — O Flywheel",
      "home.fly_title": "O <em>flywheel</em> da DeCarbonMine.",
      "home.fly_intro": "Cada projeto gera retorno que financia o próximo. A lógica do flywheel garante que a descarbonização industrial se torna progressivamente mais viável e escalável.",
      "home.fly1_t": "Pressão",
      "home.fly1_d": "Metas ESG, regulação, custos de carbono e exposição a combustíveis fósseis criam urgência.",
      "home.fly2_t": "Estruturação",
      "home.fly2_d": "Originação, engenharia, financiamento e SPE transformam a oportunidade em ativo bancável.",
      "home.fly3_t": "Operação",
      "home.fly3_d": "O ativo opera gerando créditos de carbono, venda de energia/combustível e economia operacional.",
      "home.fly4_t": "Reinvestimento",
      "home.fly4_d": "Retornos financiam novos projetos, expandindo o portfólio de ativos industriais climáticos.",
      "home.cta_eyebrow": "Vamos construir",
      "home.cta_title": "Estruturando o próximo ciclo da <em>descarbonização industrial.</em>",
      "home.cta_lede": "Conectamos engenharia, financiamento e ativos climáticos para transformar projetos industriais em plataformas de valor de longo prazo.",
      "home.cta_btn": "Conversar com a DeCarbonMine",
      "home.partners_label": "Parceiros e operações",
      "home.video_label": "Conheça",
      "home.video_title": "A DeCarbonMine em movimento.",
      "home.video_play": "Reproduzir vídeo",

      /* SOLUÇÃO */
      "sol.hero_index": "Solução",
      "sol.hero_title": "Uma plataforma de desenvolvimento de <em>ativos de descarbonização.</em>",
      "sol.hero_lede": "A solução da DCM não é apenas consultoria, nem apenas crédito de carbono. É uma plataforma integrada que origina oportunidades, estrutura SPEs, desenvolve engenharia, conecta financiamento, implementa projetos, monetiza créditos de carbono e participa economicamente dos ativos desenvolvidos.",
      "sol.pillars_title": "Mais que consultoria. Um sócio de ativos.",
      "sol.pillar1": "A DCM não vende apenas relatório. Ela ajuda a <strong>construir negócios industriais</strong> de descarbonização.",
      "sol.pillar2": "A DCM <strong>participa economicamente</strong> dos ativos que desenvolve — alinhando incentivos com os resultados reais.",
      "sol.pillar3": "Entregamos projetos <strong>executáveis e financiáveis</strong> — não apenas diagnósticos ou recomendações.",
      "sol.pillar4": "Capturamos valor via <strong>dividendos de SPEs</strong>, créditos de carbono e receita operacional dos ativos.",
      "sol.serv_index": "Frentes de atuação",
      "sol.serv_title": "Seis frentes para gerar ativos reais.",
      "sol.serv1_t": "Combustíveis Renováveis",
      "sol.serv1_d": "Produção e fornecimento de diesel renovável (HVO) para frotas de mineração, reduzindo consumo de fósseis e gerando créditos de carbono.",
      "sol.serv2_t": "Bioenergia Industrial",
      "sol.serv2_d": "Aproveitamento de resíduos orgânicos e biomassa para produção de biometano com certificação e monetização.",
      "sol.serv3_t": "Carbon Removals",
      "sol.serv3_d": "Produção de biochar a partir de biomassa residual, gerando créditos de remoção permanente verificados.",
      "sol.serv4_t": "Transição Energética",
      "sol.serv4_d": "Projetos integrados de substituição de diesel e gás natural por fontes renováveis em operações industriais.",
      "sol.serv5_t": "Eficiência & Economia Circular",
      "sol.serv5_d": "Identificação e estruturação de projetos de eficiência com financiamento via economia gerada e créditos de carbono.",
      "sol.serv6_t": "Financiamento Climático",
      "sol.serv6_d": "Acesso a linhas de crédito climático, debêntures verdes, fundos e incentivos públicos para viabilizar projetos industriais.",

      /* COMO ATUAMOS */
      "how.hero_index": "Como Atuamos",
      "how.hero_title": "Quatro camadas integradas de <em>entrega.</em>",
      "how.hero_lede": "Da identificação da oportunidade à monetização do ativo — cada camada é projetada para gerar resultado econômico real.",
      "how.l1_e": "01 — Originação",
      "how.l1_t": "Identificação de Oportunidades",
      "how.l1_1": "Mapeamento de consumo de diesel",
      "how.l1_2": "Inventário de emissões",
      "how.l1_3": "Avaliação de resíduos e biomassa",
      "how.l1_4": "Gargalos energéticos",
      "how.l1_5": "Projetos existentes paralisados",
      "how.l2_e": "02 — Estruturação",
      "how.l2_t": "Viabilidade Técnico-Financeira",
      "how.l2_1": "Engenharia conceitual",
      "how.l2_2": "Modelagem CAPEX/OPEX",
      "how.l2_3": "Modelagem financeira",
      "how.l2_4": "Elegibilidade e adicionalidade",
      "how.l2_5": "Estruturação de SPE",
      "how.l2_6": "Incentivos públicos",
      "how.l3_e": "03 — Implementação",
      "how.l3_t": "Execução via Ecossistema",
      "how.l3_1": "Engenharia e EPC",
      "how.l3_2": "Tecnologia e equipamentos",
      "how.l3_3": "Certificadoras de carbono",
      "how.l3_4": "Bancos e estruturadores",
      "how.l3_5": "Operadores industriais",
      "how.l3_6": "Fornecedores estratégicos",
      "how.l4_e": "04 — Monetização",
      "how.l4_t": "Captura de Valor & Escala",
      "how.l4_1": "Créditos de carbono",
      "how.l4_2": "Dividendos das SPEs",
      "how.l4_3": "Venda de energia e combustível",
      "how.l4_4": "Economia operacional",
      "how.l4_5": "Valorização dos ativos",
      "how.l4_6": "Expansão do portfólio",

      /* CONTATO */
      "cont.hero_index": "Contato",
      "cont.hero_title": "Vamos estruturar o próximo <em>ativo de descarbonização.</em>",
      "cont.hero_lede": "Conte sobre sua operação, suas metas climáticas e os projetos parados. Respondemos com um caminho prático para transformar isso em ativo.",
      "cont.info_email_l": "E-mail",
      "cont.info_subject_l": "Para quê",
      "cont.info_subject_v": "Originação, estruturação, financiamento e monetização de ativos de descarbonização.",
      "cont.info_resp_l": "Resposta",
      "cont.info_resp_v": "Retornamos em até 2 dias úteis.",
      "cont.f_name": "Nome",
      "cont.f_name_ph": "Seu nome",
      "cont.f_email": "E-mail",
      "cont.f_email_ph": "voce@empresa.com",
      "cont.f_company": "Empresa",
      "cont.f_company_ph": "Nome da empresa",
      "cont.f_segment": "Segmento",
      "cont.f_seg_opt0": "Selecione…",
      "cont.f_seg_min": "Mineração",
      "cont.f_seg_ind": "Indústria Pesada",
      "cont.f_seg_agro": "Agroindústria",
      "cont.f_seg_log": "Logística & Frotas",
      "cont.f_seg_inv": "Investidor / Fundo",
      "cont.f_seg_other": "Outro",
      "cont.f_message": "Mensagem",
      "cont.f_message_ph": "Descreva sua operação, metas e projetos…",
      "cont.f_submit": "Enviar mensagem",
      "cont.f_sending": "Enviando…",
      "cont.f_success": "Mensagem enviada. Retornaremos em breve.",
      "cont.f_error": "Não foi possível enviar agora. Tente novamente ou escreva para contato@decarbonmine.com.",
      "cont.err_required": "Campo obrigatório.",
      "cont.err_email": "Informe um e-mail válido."
    },

    en: {
      "meta.home_title": "DeCarbonMine — Industrial Decarbonization Asset Platform",
      "meta.solution_title": "Solution — DeCarbonMine",
      "meta.how_title": "How We Work — DeCarbonMine",
      "meta.contact_title": "Contact — DeCarbonMine",

      "nav.home": "Home",
      "nav.solution": "Solution",
      "nav.how": "How We Work",
      "nav.contact": "Contact",
      "nav.cta": "Talk to DCM",
      "foot.tagline": "Industrial Decarbonization Asset Platform.",
      "foot.nav_solution": "The Solution",
      "foot.nav_how": "How We Work",
      "foot.nav_contact": "Contact",
      "foot.rights": "All rights reserved.",
      "lang.label": "PT",
      "a11y.skip": "Skip to content",
      "consent.text": "We use analytics cookies to understand site usage and improve it. Your choice.",
      "consent.accept": "Accept",
      "consent.decline": "Decline",
      "consent.privacy": "Privacy Policy",
      "nf.title": "Page not found",
      "nf.text": "The page you're looking for doesn't exist or was moved. Let's get you back on track.",
      "nf.cta": "Back to home",

      "home.eyebrow": "Industrial Decarbonization Asset Platform",
      "home.title": "From the decarbonization gap to a real <em>industrial asset</em>.",
      "home.lede": "DeCarbonMine turns isolated climate initiatives into executable, financeable projects that generate long-term economic value — connecting engineering, financing and carbon credits.",
      "home.cta1": "Explore the Platform",
      "home.cta2": "Talk to DCM",
      "home.scroll": "Scroll to explore",

      "home.prob_index": "01 — The Problem",
      "home.prob_title": "Heavy industry faces a <em>structural execution gap</em>.",
      "home.prob_intro": "There is enormous pressure to decarbonize operations — but most companies cannot turn climate initiatives into economically viable, financeable and executable projects at scale.",
      "home.prob1": "Isolated climate initiatives that generate no cash, attract no funding and never become real assets.",
      "home.prob2": "Difficulty turning emission reductions into robust credits, verifiable revenue and measurable economic value.",
      "home.prob3": "Engineering, financing, carbon and industrial operations are handled separately — without the integration projects require.",
      "home.prob4": "Low capacity to structure SPEs, build financial models and present projects that attract institutional capital.",
      "home.gap_label": "The gap DeCarbonMine solves",
      "home.gap_n1": "ESG & Net Zero Targets",
      "home.gap_n2": "Isolated Initiatives",
      "home.gap_n3": "[ Execution Gap ]",
      "home.gap_n4": "Value-Generating Industrial Asset",
      "home.gap_note": "Many miners and industries have dozens of initiatives — but cannot convert them into executable projects, cash generation or competitive financing.",

      "home.aud_index": "02 — Who It's For",
      "home.aud_title": "Companies under real decarbonization pressure with the potential to <em>turn it into value.</em>",
      "home.aud1_t": "Mining",
      "home.aud1_d": "High diesel consumption, process emissions, remote operations and growing ESG and regulatory pressure.",
      "home.aud2_t": "Heavy Industry",
      "home.aud2_d": "Hard-to-abate emissions and large volumes of industrial waste with value-recovery potential.",
      "home.aud3_t": "Cement, Steel & Chemicals",
      "home.aud3_d": "Carbon-intensive processes with opportunities for fuel substitution and energy efficiency.",
      "home.aud4_t": "Agribusiness",
      "home.aud4_d": "Available biomass and agricultural residues with high potential for biochar, biomethane and renewable energy.",
      "home.aud5_t": "Logistics & Fleets",
      "home.aud5_d": "Direct exposure to fossil-fuel prices and to regulatory pressure to decarbonize fleets.",
      "home.aud6_t": "Industrial Parks & Districts",
      "home.aud6_d": "Industrial clusters that need climate infrastructure and integrated territorial decarbonization.",
      "home.aud7_t": "Investors & Funds",
      "home.aud7_d": "Funds and institutions seeking robust, financeable green assets with clear economic returns.",
      "home.aud8_t": "Large Energy Consumers",
      "home.aud8_d": "Large industrial consumers that need to cut carbon and fossil-fuel exposure at scale.",
      "home.chip1": "High diesel consumption",
      "home.chip2": "Hard-to-abate emissions",
      "home.chip3": "Remote operations",
      "home.chip4": "Available biomass",
      "home.chip5": "Regulatory pressure",
      "home.chip6": "Net Zero targets",
      "home.chip7": "Need for climate funding",
      "home.chip8": "Projects stalled for lack of structuring",
      "home.aud_qual_label": "Especially companies with:",

      "home.fly_index": "03 — The Flywheel",
      "home.fly_title": "The DeCarbonMine <em>flywheel</em>.",
      "home.fly_intro": "Each project generates returns that finance the next. The flywheel logic ensures industrial decarbonization becomes progressively more viable and scalable.",
      "home.fly1_t": "Pressure",
      "home.fly1_d": "ESG targets, regulation, carbon costs and fossil-fuel exposure create urgency.",
      "home.fly2_t": "Structuring",
      "home.fly2_d": "Origination, engineering, financing and SPE turn the opportunity into a bankable asset.",
      "home.fly3_t": "Operation",
      "home.fly3_d": "The asset operates, generating carbon credits, energy/fuel sales and operational savings.",
      "home.fly4_t": "Reinvestment",
      "home.fly4_d": "Returns finance new projects, expanding the portfolio of industrial climate assets.",
      "home.cta_eyebrow": "Let's build",
      "home.cta_title": "Structuring the next cycle of <em>industrial decarbonization.</em>",
      "home.cta_lede": "We connect engineering, financing and climate assets to turn industrial projects into long-term value platforms.",
      "home.cta_btn": "Talk to DeCarbonMine",
      "home.partners_label": "Partners and operations",
      "home.video_label": "Watch",
      "home.video_title": "DeCarbonMine in motion.",
      "home.video_play": "Play video",

      "sol.hero_index": "Solution",
      "sol.hero_title": "A platform for developing <em>decarbonization assets.</em>",
      "sol.hero_lede": "DCM's solution is not just consulting, nor just carbon credits. It is an integrated platform that originates opportunities, structures SPEs, develops engineering, connects financing, implements projects, monetizes carbon credits and takes an economic stake in the assets it develops.",
      "sol.pillars_title": "More than consulting. An asset partner.",
      "sol.pillar1": "DCM doesn't just sell reports. It helps <strong>build industrial decarbonization businesses</strong>.",
      "sol.pillar2": "DCM <strong>takes an economic stake</strong> in the assets it develops — aligning incentives with real results.",
      "sol.pillar3": "We deliver <strong>executable, financeable projects</strong> — not just diagnostics or recommendations.",
      "sol.pillar4": "We capture value through <strong>SPE dividends</strong>, carbon credits and operational asset revenue.",
      "sol.serv_index": "Areas of work",
      "sol.serv_title": "Six fronts to generate real assets.",
      "sol.serv1_t": "Renewable Fuels",
      "sol.serv1_d": "Production and supply of renewable diesel (HVO) for mining fleets, cutting fossil consumption and generating carbon credits.",
      "sol.serv2_t": "Industrial Bioenergy",
      "sol.serv2_d": "Use of organic waste and biomass to produce biomethane with certification and monetization.",
      "sol.serv3_t": "Carbon Removals",
      "sol.serv3_d": "Biochar production from residual biomass, generating verified permanent-removal credits.",
      "sol.serv4_t": "Energy Transition",
      "sol.serv4_d": "Integrated projects replacing diesel and natural gas with renewable sources in industrial operations.",
      "sol.serv5_t": "Efficiency & Circular Economy",
      "sol.serv5_d": "Identifying and structuring efficiency projects financed through generated savings and carbon credits.",
      "sol.serv6_t": "Climate Financing",
      "sol.serv6_d": "Access to climate credit lines, green debentures, funds and public incentives to enable industrial projects.",

      "how.hero_index": "How We Work",
      "how.hero_title": "Four integrated layers of <em>delivery.</em>",
      "how.hero_lede": "From spotting the opportunity to monetizing the asset — each layer is designed to generate real economic results.",
      "how.l1_e": "01 — Origination",
      "how.l1_t": "Opportunity Identification",
      "how.l1_1": "Diesel consumption mapping",
      "how.l1_2": "Emissions inventory",
      "how.l1_3": "Waste and biomass assessment",
      "how.l1_4": "Energy bottlenecks",
      "how.l1_5": "Existing stalled projects",
      "how.l2_e": "02 — Structuring",
      "how.l2_t": "Technical-Financial Feasibility",
      "how.l2_1": "Conceptual engineering",
      "how.l2_2": "CAPEX/OPEX modeling",
      "how.l2_3": "Financial modeling",
      "how.l2_4": "Eligibility and additionality",
      "how.l2_5": "SPE structuring",
      "how.l2_6": "Public incentives",
      "how.l3_e": "03 — Implementation",
      "how.l3_t": "Execution via Ecosystem",
      "how.l3_1": "Engineering and EPC",
      "how.l3_2": "Technology and equipment",
      "how.l3_3": "Carbon certifiers",
      "how.l3_4": "Banks and arrangers",
      "how.l3_5": "Industrial operators",
      "how.l3_6": "Strategic suppliers",
      "how.l4_e": "04 — Monetization",
      "how.l4_t": "Value Capture & Scale",
      "how.l4_1": "Carbon credits",
      "how.l4_2": "SPE dividends",
      "how.l4_3": "Energy and fuel sales",
      "how.l4_4": "Operational savings",
      "how.l4_5": "Asset appreciation",
      "how.l4_6": "Portfolio expansion",

      "cont.hero_index": "Contact",
      "cont.hero_title": "Let's structure the next <em>decarbonization asset.</em>",
      "cont.hero_lede": "Tell us about your operation, your climate targets and the stalled projects. We respond with a practical path to turn them into an asset.",
      "cont.info_email_l": "Email",
      "cont.info_subject_l": "What for",
      "cont.info_subject_v": "Origination, structuring, financing and monetization of decarbonization assets.",
      "cont.info_resp_l": "Response",
      "cont.info_resp_v": "We reply within 2 business days.",
      "cont.f_name": "Name",
      "cont.f_name_ph": "Your name",
      "cont.f_email": "Email",
      "cont.f_email_ph": "you@company.com",
      "cont.f_company": "Company",
      "cont.f_company_ph": "Company name",
      "cont.f_segment": "Segment",
      "cont.f_seg_opt0": "Select…",
      "cont.f_seg_min": "Mining",
      "cont.f_seg_ind": "Heavy Industry",
      "cont.f_seg_agro": "Agribusiness",
      "cont.f_seg_log": "Logistics & Fleets",
      "cont.f_seg_inv": "Investor / Fund",
      "cont.f_seg_other": "Other",
      "cont.f_message": "Message",
      "cont.f_message_ph": "Describe your operation, targets and projects…",
      "cont.f_submit": "Send message",
      "cont.f_sending": "Sending…",
      "cont.f_success": "Message sent. We'll get back to you soon.",
      "cont.f_error": "Couldn't send right now. Please try again or email contato@decarbonmine.com.",
      "cont.err_required": "Required field.",
      "cont.err_email": "Enter a valid email."
    }
  };

  var STORAGE_KEY = "dcm-lang";

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "pt" || saved === "en") return saved;
    return "pt";
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.pt;
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    // textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    // innerHTML (allows <em>/<strong>)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    // attributes: "placeholder:key" or "aria-label:key" (comma-separated)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2 && dict[parts[1].trim()] != null) {
          el.setAttribute(parts[0].trim(), dict[parts[1].trim()]);
        }
      });
    });
    // <title>
    var titleEl = document.querySelector("title[data-i18n-title]");
    if (titleEl) {
      var tk = titleEl.getAttribute("data-i18n-title");
      if (dict[tk] != null) document.title = dict[tk];
    }
    // toggle button label
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.textContent = dict["lang.label"];
      btn.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para Português");
    });
  }

  function init() {
    var lang = getLang();
    apply(lang);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = getLang();
        setLang(current === "pt" ? "en" : "pt");
      });
    });
  }

  // expose minimal API
  window.DCMi18n = {
    setLang: setLang,
    getLang: getLang,
    t: function (key) {
      var d = I18N[getLang()] || I18N.pt;
      return d[key] != null ? d[key] : key;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
