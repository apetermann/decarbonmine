# DeCarbonMine — Website Institucional

Website institucional da **DeCarbonMine**, plataforma de ativos industriais de descarbonização.
Site estático (HTML/CSS/JS), bilíngue (PT-BR / EN), publicado via **GitHub Pages** em [decarbonmine.com](https://decarbonmine.com).

## Estrutura

```
index.html            Home (hero em vídeo, problema, parceiros, vídeo de marca, flywheel, CTA)
solucao.html          Solução — plataforma, pilares e frentes de atuação
como-atuamos.html     Como Atuamos — 4 camadas + flywheel
contato.html          Contato — formulário funcional
privacidade.html      Política de Privacidade (LGPD)
404.html              Página de erro

styles.css            Design system (paleta petrol, tipografia, motion, responsivo)
script.js             Interações (nav, reveals, menu, vídeo, formulário)
i18n.js               Motor de tradução PT/EN
analytics.js          Analytics + consentimento (privacy-first, desativado por padrão)

robots.txt · sitemap.xml · site.webmanifest
assets/               Logos, vídeos, poster, OG image, favicons, logos de parceiros
```

## Configuração necessária

Dois pontos para o site ficar 100% operacional (1 linha cada):

1. **Formulário de contato** — em `script.js`, troque `FORM_ENDPOINT` pelo endpoint real
   (Formspree, Web3Forms ou API própria). Enquanto contém `REPLACE`, roda em modo demo.

2. **Analytics** — em `analytics.js`, defina `ANALYTICS.provider` (`"plausible"` ou `"ga4"`)
   e o ID. Nada é rastreado até isso ser configurado **e** o visitante aceitar o consentimento.

## Desenvolvimento local

Qualquer servidor estático serve. Exemplo:

```bash
python -m http.server 8123
# abra http://localhost:8123
```

## Deploy

Publicado automaticamente pelo GitHub Pages a partir da branch `main`.
O domínio customizado está em `CNAME` (`decarbonmine.com`); `.nojekyll` desativa o Jekyll.
