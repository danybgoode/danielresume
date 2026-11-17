const resumeData = {
  en: {
    eyebrow: "Product Director · Fintech, Payments & AI-native Platforms",
    name: "Daniel Vásquez",
    role: "Product Director · Fintech, Payments & AI-native Platforms",
    disciplines:
      "Product executive since 2012, from zero-to-one to Fortune 100 scale. I turn product organisations from cost centres into revenue engines, with every initiative tied to the P&L.",
    email: "danielvp1987@gmail.com",
    location: "Mexico City",
    links: {
      website: { url: "https://miyagisanchez.com", label: "miyagisanchez.com" },
      linkedin: { url: "https://www.linkedin.com/in/danielvasquezparedes", label: "linkedin.com/in/danielvasquezparedes" },
      goldenfrijoles: { url: "https://goldenfrijoles.com", label: "goldenfrijoles.com" },
      github: { url: "https://github.com/danybgoode", label: "github.com/danybgoode" },
      site: { url: "https://danielresume.pages.dev", label: "danielresume.pages.dev" },
      methodology: { url: "https://goldenfrijoles.com/methodology", label: "goldenfrijoles.com/methodology" },
      board: { url: "https://goldenfrijoles.com/hub/golden-frijoles", label: "goldenfrijoles.com/hub" },
    },
    stats: [
      { figure: "Since 2012", label: "Leading product teams" },
      { figure: "$70M+", label: "Portfolio owned at AB InBev" },
      { figure: "70+", label: "People led, product & engineering" },
      { figure: "2", label: "Products running in production" },
      { figure: "3", label: "Earlier ventures founded, one acquired" },
      { figure: "MSc", label: "Finance & Investment Management, Aberdeen" },
    ],
    snapshot: [
      "I turn product organisations from cost centres into revenue engines. Every initiative carries its own line to the P&L, whether direct or indirect gross profit, retention or cost to serve. It is set before we build and read after we ship, in numbers and in the story behind them.",
      "I have led product since 2012, from zero-to-one to Fortune 100 scale: a $70M+ global rewards portfolio and a 70+ person product and engineering organisation at AB InBev, post-M&A platform integration at Linio after its acquisition by Falabella, a Bitcoin remittance platform at Telmex's technology and innovation centre (Grupo Carso) in 2012, and three ventures of my own, one of them acquired. Underneath it sits an MSc in Finance & Investment Management from the University of Aberdeen, with a dissertation on volatility forecasting and market risk.",
      "My mission is to turn every product manager into a product builder. PMs were prompting long before it had a name: PRDs, personas, epics, user stories and Gherkin acceptance criteria written so tests could run themselves. With agents, that same intent compiles into working software. I run two products in production this way, Golden Frijoles and Miyagi Sánchez, under controls a bank would recognise: risk-tiered approvals, independent review and an audit trail on every change.",
    ],
    howIWork: [
      "Plan, build, ship — one user story at a time, with a deterministic gate that has to be green before anything merges.",
      "Risk-tiered review: agents can merge low-risk work on green CI; anything touching money, auth, or database migrations is always a human merge.",
      "Cross-family review on every pull request — the diff gets an independent pass from a different model family before it lands, and every finding is fixed or answered.",
      "Model tiering by task: the stronger model grooms, plans, and reviews; once slices are approved, execution runs on the faster one.",
      "Every epic closes with a retrospective, and durable learnings are promoted into a shared digest that every new session reads first.",
      "Grooming is the front door: a raw ask is reframed onto existing platform primitives before anything new gets built.",
    ],
    experience: {
      featured: [
        {
          company: "AB InBev",
          dates: "2020 — 2023",
          title: "Global Principal Product Manager · World's largest brewer",
          chain: [
            "Built and ran the global rewards ecosystem across Central America, Europe and South Korea: incentives, loyalty economics and partner activations.",
            "Led a 70+ person product and engineering organisation through 5 managers in a matrixed, publicly listed company.",
            "Owned a $70M+ portfolio with a business case and value tracking per initiative, and campaigns activated at the Super Bowl and The Voice Brasil.",
            "Shipped in a regulated category: every market launch cleared internal legal and external counsel across jurisdictions.",
          ],
        },
        {
          company: "Linio · Falabella",
          dates: "2019 — 2020",
          title: "Group Product Manager · Mexico City",
          chain: [
            "Directed post-M&A integration of marketplace and commerce platforms after Linio's acquisition by Falabella, leading two managers.",
            "Unified multi-platform infrastructure across the merged organisations.",
          ],
        },
      ],
      earlier: [
        { company: "Wagento Commerce", title: "Head of Customer Experience & Project Management", dates: "2017 — 2019" },
        { company: "Nolte Worldwide", title: "Head of Product Management", dates: "2017 — 2018" },
        { company: "MagmaLabs", title: "Senior Product Manager", dates: "2016 — 2017" },
        { company: "CTIN · Telmex (Grupo Carso)", title: "Team Lead · Bitcoin remittance platform, 5,000+ active users", dates: "2012 — 2014" },
        { company: "Grupo Bimbo", title: "FinOps Analyst · card payment acceptance", dates: "2010 — 2011" },
        { company: "CompuCom · Accenture", title: "Tech Support · Customer Service", dates: "2006 — 2010" },
      ],
      ventures: [
        {
          company: "Golden Frijoles",
          url: "https://goldenfrijoles.com",
          dates: "2025 — Present",
          title: "Founder & Product Lead · Product management for teams that build with AI agents",
          chain: [
            "Built a platform that lets one person and their AI agents run a full product practice: decide what is worth building, ship it safely and measure whether it paid off.",
            "Replaces the patchwork of separate tools for analytics, feature releases and experiments with one connected system.",
            "Designed how agents work inside it: they investigate and propose, people approve what matters, and every action is on record.",
            "Built in the open: 87 initiatives shipped so far, all visible on a public roadmap. It also runs feature releases for Miyagi Sánchez.",
          ],
          tags: "Free tier live; paid plans and team engagements by arrangement",
        },
        {
          company: "Miyagi Sánchez",
          url: "https://miyagisanchez.com",
          dates: "2025 — Present",
          title: "Founder & Product Lead · E-commerce infrastructure for Mexico, from prompt to shop",
          chain: [
            "E-commerce infrastructure for everyone with the lowest entry point: a merchant describes their business in one sentence and gets a shop ready to take payments, free to start with 0% platform commission.",
            "One catalogue, every channel: their own domain, a catalog link, PDF and WhatsApp / Instagram feed, in-person sales, the marketplace, a widget on any page and AI shopping assistants.",
            "147 initiatives shipped across discovery, checkout, payments, shipping, trust and promotions, each closed with a written review.",
            "First revenue channel: an ad-funded print edition.",
          ],
        },
        {
          company: "Bicimensajero.com",
          dates: "2014 — 2016",
          title: "Founder · On-demand bike courier service",
          chain: [
            "Built the product myself, before today's AI tools.",
            "Grew the operation to 100+ couriers.",
            "Led the company to an acquisition.",
          ],
        },
        {
          company: "Pokapok.mx",
          dates: "2016 — 2017",
          title: "Founder · Corporate wellness platform",
          chain: [
          ],
        },
        {
          company: "Nuuch Tech",
          dates: "2012 — 2015",
          title: "Founder & Principal Consultant · E-commerce, CRM and agile consulting",
          chain: [
          ],
        },
      ],
    },
    education: [
      { school: "University of Aberdeen · Scotland", credential: "MSc (Econ) Finance & Investment Management", dates: "2023 — 2024" },
      { school: "Escuela Bancaria y Comercial · Mexico City", credential: "Bachelor's, International Trade and Business", dates: "" },
    ],
    philosophy: "I build products on purpose.",
    tldr: {
      greeting: "Hi, I'm Daniel Vásquez",
      intro: "Some things about me:",
      bullets: [
        "Learned to code in high school while managing a local computer shop",
        "Started in tech support, moved into software development, then settled in Product Management",
        "Everything I build now runs through agents — grooming, planning, building, review, shipping and reporting",
        "Built an open-source operating system for agent product work, installed once and reused across every project I build — now the open Golden Frijoles kit",
        "Run <a href=\"https://goldenfrijoles.com\" target=\"_blank\" rel=\"noopener noreferrer\">goldenfrijoles.com</a>, an agentic product-management platform, and <a href=\"https://miyagisanchez.com\" target=\"_blank\" rel=\"noopener noreferrer\">miyagisanchez.com</a>, prompt-to-shop e-commerce infrastructure for Mexico — both in production",
        "Before all that: a $70M+ portfolio and 70+ people at AB InBev, a post-M&A integration at Linio · Falabella, a Bitcoin remittance platform at Telmex (Grupo Carso) back in 2012, and three ventures of my own, one of them acquired",
        "Went back to school for an MSc in Finance & Investment Management in Scotland; wrote my dissertation on forecasting market volatility",
        "On a mission to turn every product manager into a product builder. We were prompting all along, through Jira tickets",
      ],
      punchline: "Have a knack for taking things from 0 to the whole world.",
      contactText: "Find me at:",
      contactEmail: "danielvp1987@gmail.com",
    },
    // Lane CVs: the same facts, re-led for one kind of role each. Rendered at
    // /print/a/ and /print/p/ and built to their own PDFs by `npm run pdf`.
    // Earlier career and education come from the shared blocks above.
    lanesShared: {
      titles: { summary: "Summary", current: "Current", skills: "Skills", ventures: "Earlier Ventures", languages: "Languages", download: "Download PDF" },
      ventures: [
        { company: "Bicimensajero.com · Pokapok.mx · Nuuch Tech", title: "Founder · bike courier grown to 100+ couriers and acquired; wellness platform; e-commerce consultancy", dates: "2012 — 2017" },
      ],
      dissertation: "Dissertation: “Global Shocks: Volatility Forecasting in Emerging and Developed Markets”. GARCH models on 4 markets, 2006–2024.",
      languages: "Spanish (native) · English (full professional)",
    },
    lanes: {
      // MAIN — the flagship CV behind every "Download CV" button: Product Director, fintech & banking.
      main: {
        pdfTitle: "Daniel Vasquez - CV - Product Director, Fintech",
        pdfFile: "/Daniel-Vasquez-CV.pdf",
        role: "Product Director · Fintech, Payments & AI-native Platforms",
        tagline: "Product executive since 2012, from zero-to-one to Fortune 100 scale. I turn product organisations from cost centres into revenue engines, with every initiative tied to the P&L.",
        summary: "I run product as a P&L, not a cost centre: every initiative carries a business case, a baseline and a gross profit line read after launch. I owned a $70M+ rewards portfolio and led 70+ people at AB InBev, integrated platforms after Falabella acquired Linio, and launched a Bitcoin remittance platform at Telmex (Grupo Carso) in 2012. Today I run two products with AI agent teams under bank-grade controls, and coach PMs to become product builders.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Payments-enabled commerce infrastructure and an agentic product platform, both in production",
          bullets: [
            "Miyagi Sánchez: prompt-to-shop commerce for Mexican merchants. Payments settle straight to the merchant by card, Mercado Pago, SPEI, QR or cash, with 0% platform commission; revenue comes from optional extras.",
            "Golden Frijoles: a product-management platform that ties every initiative to an outcome, a baseline and a read date.",
            "Operating model built for regulated work: agents plan, build and review; people approve anything touching money, auth, migrations or customer data, and every change leaves an audit trail.",
            "Throughput with controls: 250+ merged pull requests on Golden Frijoles backed by 650+ automated test files, and 1,000+ commits on Miyagi Sánchez.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Owned a $70M+ global rewards portfolio across Central America, Europe and South Korea: incentives, loyalty economics and partner activations, with a business case and value tracking per initiative.",
              "Led a 70+ person product and engineering organisation through 5 managers in a matrixed, publicly listed company.",
              "Shipped in a regulated category: every market launch cleared internal legal and external counsel across jurisdictions.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Directed post-M&A integration of marketplace and commerce platforms after Linio's acquisition by Falabella, leading two managers and unifying infrastructure across the merged organisations.",
            ],
          },
          {
            company: "CTIN · Telmex (Grupo Carso)", dates: "2012 — 2014",
            title: "Team Lead · Centro de Tecnología e Innovación",
            bullets: [
              "Delivered innovation projects sponsored by group executives, including a Bitcoin remittance platform launched in 2012 and grown to 5,000+ active users.",
            ],
          },
        ],
        hideEarlier: ["CTIN · Telmex (Grupo Carso)", "CompuCom · Accenture"],
        skills: [
          { label: "Fintech", text: "payments (cards, SPEI, QR, wallets), remittance, onboarding funnels, loyalty and rewards economics, marketplaces" },
          { label: "P&L", text: "initiative-level P&L attribution, business cases, unit economics (LTV / CAC), M&A integration" },
          { label: "Leadership", text: "building PM organisations, PMs as product builders, agentic delivery with risk-tiered controls" },
          { label: "Quant", text: "MSc Finance & Investment Management: econometrics, volatility and risk modelling, forecasting, A/B testing" },
        ],
      },
      // A — enterprise agentic AI platform and transformation roles.
      a: {
        pdfTitle: "Daniel Vasquez - CV - Product Leader, Agentic AI",
        pdfFile: "/Daniel-Vasquez-CV-Agentic-AI.pdf",
        role: "Product Leader · Agentic AI & Operating Models",
        tagline: "Product and engineering leader since 2012, from zero-to-one to Fortune 100 scale. I run production software with teams of AI agents, and design the controls they run under.",
        summary: "I've built an operating model where AI agents plan, build, review and ship production software under outcome-driven development, my own open product and engineering methodology. Before that I led a 70+ person product and engineering organisation and a $70M+ global portfolio at AB InBev, and a post-M&A platform integration at Linio.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Agentic product platform and commerce infrastructure, both in production",
          bullets: [
            "Designed and run an agentic delivery model: agents investigate, plan, build, review and ship; humans approve anything touching money, auth, migrations or customer data.",
            "Built it as a reusable platform, not one-off automations: an open-source kit, SDK and CLI (Apache-2.0) installed once and reused across every product.",
            "Throughput with controls: 250+ pull requests merged on Golden Frijoles in under four months, backed by 650+ automated test files, plus 1,000+ commits on Miyagi Sánchez.",
            "Independent cross-model review and written retrospectives feed each next session, so quality and controls compound instead of decaying.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards ecosystem across Central America, Europe and South Korea.",
              "Led a 70+ person cross-functional product and engineering organisation through 5 managers, in a matrixed global company.",
              "Owned a $70M+ portfolio: roadmaps, business cases and value tracking across regions.",
              "Delivered in a heavily regulated category at a publicly listed company: every market launch cleared internal legal and external counsel across jurisdictions.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Directed post-M&A systems integration after Linio's acquisition by Falabella, leading two managers.",
              "Unified multi-platform infrastructure across the merged organisations.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "Agentic AI", text: "multi-agent orchestration, tool use / MCP, retrieval (RAG), memory, evaluation, human-in-the-loop design" },
          { label: "Governance", text: "risk-tiered autonomy, approval gates, cross-model review, audit trails, escalation paths" },
          { label: "Product", text: "platform strategy, roadmaps, business cases, value realisation, agile at scale" },
        ],
      },
      // P — commerce infrastructure, payments, marketplace and AI-native platform product roles.
      p: {
        pdfTitle: "Daniel Vasquez - CV - Commerce & Platform Product Leader",
        pdfFile: "/Daniel-Vasquez-CV-Product-Platforms.pdf",
        role: "Product Leader · Commerce Infrastructure, Payments & AI-native Platforms",
        tagline: "Zero-to-one and Fortune 100 scale product leader since 2012. I build commerce and payments infrastructure where the buyer is sometimes an agent.",
        summary: "I founded and run Miyagi Sánchez, e-commerce infrastructure for everyone with the lowest possible entry point: a merchant describes their business in one sentence and gets a shop ready to take payments and share. Before that I owned a $70M+ global rewards portfolio at AB InBev, integrated commerce platforms through Linio's acquisition by Falabella, and led a Bitcoin remittance platform to 5,000+ active users.",
        current: {
          company: "Miyagi Sánchez · Golden Frijoles", dates: "2025 — Present",
          title: "Founder & Product Lead · Prompt-to-shop commerce infrastructure and agentic product platform",
          bullets: [
            "Miyagi Sánchez: e-commerce infrastructure for everyone, from prompt to shop. A merchant describes their business in one sentence and gets a shop ready to take payments, free to start and with 0% platform commission.",
            "One shop, every channel: their own domain, a catalog link, PDF and WhatsApp / Instagram feed, in-person sales (card by QR, transfers, offline cash, payment links), the marketplace and AI shopping assistants.",
            "Payments go straight to the merchant by card, Mercado Pago, SPEI or cash; the business model rests on optional extras such as custom domains and print ads, not commission.",
            "Both products built with AI agent teams: 1,000+ commits on Miyagi Sánchez since June 2026 and 250+ merged pull requests on Golden Frijoles, an agentic product platform with an open-source SDK and CLI.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Owned a $70M+ global rewards ecosystem across Central America, Europe and South Korea: incentives, partner activations and consumer economics.",
              "Led a 70+ person product and engineering organisation through 5 managers, across teams that didn't report to me.",
              "Shipped in a heavily regulated category at a publicly listed company, clearing every launch with internal legal and external counsel across markets.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Directed post-M&A integration of marketplace and commerce systems after Linio's acquisition by Falabella, leading two managers.",
            ],
          },
          {
            company: "CTIN · Telmex (Grupo Carso)", dates: "2012 — 2014",
            title: "Team Lead · Bitcoin remittance platform, grown to 5,000+ active users",
            bullets: [],
          },
        ],
        hideEarlier: ["CTIN · Telmex (Grupo Carso)", "CompuCom · Accenture"],
        skills: [
          { label: "Platforms", text: "commerce infrastructure, merchant onboarding, two-sided marketplaces, rewards and loyalty, payments and remittance" },
          { label: "Commercial", text: "pricing and incentives, unit economics, LTV / CAC, business cases, M&A integration" },
          { label: "Quant", text: "MSc Finance & Investment Management: econometrics, time-series forecasting, forecast evaluation, A/B testing" },
        ],
      },
    },
    // "Work with me" — the consulting view. Default landing view.
    work: {
      headline: "Product that pays for itself.",
      lede: "Since 2012, leading product and engineering teams. I turn product organisations into revenue engines and product managers into product builders, working alongside your team and their agents.",
      ctaPrimary: "Email me",
      ctaCv: "Download CV",
      offersTitle: "What I do",
      offers: [
        {
          title: "Bring product to life",
          body: "For leaders who know where they're going but can't get product and engineering aligned to get there. I boil a complex problem down to a crisp concept, slice it into shippable pieces, and work with your engineers until it's live — and measured.",
          shape: "Typically 6–12 weeks, 2–3 days a week",
        },
        {
          title: "Turn your product practice into a revenue engine",
          body: "Moving a team to agent-assisted delivery breaks old habits fast. In a half-day working session on one of your real initiatives, your team sees what good looks like: an outcome written before building, a date to read the result, agents working inside clear boundaries. Then we compare it with how you work today and keep what holds up.",
          shape: "Half-day session on a live project · optional 30-day follow-through",
        },
        {
          title: "Forward-deployed product engineer",
          body: "I join your team and your stack, own an outcome rather than a ticket queue, and write production code with agents. We start from the foundations — user personas, a value proposition canvas and a business model canvas — so everything we build has a reason and a way to tell if it worked.",
          shape: "Typically 4–12 weeks, embedded",
        },
      ],
      includesTitle: "Every engagement includes",
      includes: [
        "An outcome and a baseline written down before we build",
        "A date to read the result, agreed up front",
        "Working software demoed every week, not slide decks",
        "Decisions and trade-offs recorded where your team works",
        "Access scopes, NDA and data handling agreed before I touch your code",
        "A handoff your team can run without me",
      ],
      methodTitle: "Method",
      methodHeadline: "Agile, rebuilt for agents.",
      methodBody: "I've practiced agile for over a decade and grown opinionated about it. The principles hold up; many of the rituals existed to relay intent between people. With agents, intent can travel intact from idea to code to measured result. I call the practice outcome-driven development, and it's open.",
      methodSteps: [
        { name: "Consider", text: "Decide whether an idea deserves a bet: the outcome, the baseline, the appetite." },
        { name: "Operate", text: "Slice it, build it, ship it behind a flag — humans and agents inside clear boundaries." },
        { name: "Exit", text: "Read the evidence on the date you set. Keep it, change it or kill it." },
      ],
      methodLink: "Read the methodology",
      contactTitle: "Get in touch",
      contactBody: "Tell me what you're trying to ship. I'll reply with whether I can help, and how.",
      copy: "Copy",
      copied: "Copied",
      copyLabel: "Copy email address",
    },
    ui: {
      pageTitle: "Daniel Vásquez — Product Director · Fintech & AI",
      metaDesc:
        "Product Director for fintech, payments and AI-native platforms. I turn product organisations into revenue engines, with every initiative tied to the P&L. Ex-AB InBev ($70M+ portfolio, 70+ people), Linio · Falabella; MSc Finance & Investment Management.",
      snapshotTitle: "Profile",
      experienceTitle: "Experience",
      earlierTitle: "Earlier Career",
      venturesTitle: "Ventures",
      howIWorkTitle: "How I Work",
      educationTitle: "Education",
      approachTitle: "Approach",
      tldrButton: "TL;DR",
      classicButton: "Résumé",
      workButton: "Work with me",
      viewsLabel: "Choose a view",
      cvButton: "Download CV",
      cvButtonShort: "CV",
      cvFile: "/Daniel-Vasquez-CV.pdf",
      printable: "Printable version",
      lastUpdated: "Last updated November 2026",
      viewMarkdown: "View Markdown",
      markdownUrl: "/resume.md",
      downloadPdf: "PDF",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      websiteLabel: "Website",
      githubLabel: "GitHub",
      statsTitle: "At a Glance",
      pdfFooterNote: "Full profile at",
      pdfPrintButton: "Print / Save as PDF",
      pdfBackLink: "← Back to site",
    },
  },

  es: {
    eyebrow: "Director de Producto · Fintech, Pagos y Plataformas Nativas de IA",
    name: "Daniel Vásquez",
    role: "Director de Producto · Fintech, Pagos y Plataformas Nativas de IA",
    disciplines:
      "Ejecutivo de producto desde 2012, de cero-a-uno a escala Fortune 100. Convierto organizaciones de producto de centros de costo en motores de ingresos, con cada iniciativa ligada al P&L.",
    email: "danielvp1987@gmail.com",
    location: "Ciudad de México",
    links: {
      website: { url: "https://miyagisanchez.com", label: "miyagisanchez.com" },
      linkedin: { url: "https://www.linkedin.com/in/danielvasquezparedes", label: "linkedin.com/in/danielvasquezparedes" },
      goldenfrijoles: { url: "https://goldenfrijoles.com", label: "goldenfrijoles.com" },
      github: { url: "https://github.com/danybgoode", label: "github.com/danybgoode" },
      site: { url: "https://danielresume.pages.dev", label: "danielresume.pages.dev" },
      methodology: { url: "https://goldenfrijoles.com/methodology", label: "goldenfrijoles.com/methodology" },
      board: { url: "https://goldenfrijoles.com/hub/golden-frijoles", label: "goldenfrijoles.com/hub" },
    },
    stats: [
      { figure: "Desde 2012", label: "Liderando equipos de producto" },
      { figure: "$70M+", label: "Portafolio gestionado en AB InBev" },
      { figure: "70+", label: "Personas lideradas, producto e ingeniería" },
      { figure: "2", label: "Productos corriendo en producción" },
      { figure: "3", label: "Emprendimientos previos fundados, uno adquirido" },
      { figure: "MSc", label: "Finanzas y Gestión de Inversiones, Aberdeen" },
    ],
    snapshot: [
      "Convierto organizaciones de producto de centros de costo en motores de ingresos. Cada iniciativa lleva su propia línea al P&L, ya sea utilidad bruta directa o indirecta, retención o costo de servir. Se define antes de construir y se lee después de lanzar, en números y en la historia detrás de ellos.",
      "Lidero producto desde 2012, de cero-a-uno a escala Fortune 100: un portafolio global de recompensas de más de $70M USD y una organización de producto e ingeniería de más de 70 personas en AB InBev, la integración de plataformas post-M&A en Linio tras su adquisición por Falabella, una plataforma de remesas con Bitcoin en el Centro de Tecnología e Innovación de Telmex (Grupo Carso) en 2012, y tres emprendimientos propios, uno de ellos adquirido. Debajo de todo hay una Maestría en Finanzas y Gestión de Inversiones por la University of Aberdeen, con una tesis sobre pronóstico de volatilidad y riesgo de mercado.",
      "Mi misión es convertir a cada product manager en product builder. Los PMs ya hacían prompting antes de que tuviera nombre: PRDs, personas, épicas, historias de usuario y criterios de aceptación en Gherkin escritos para que las pruebas corrieran solas. Con agentes, esa misma intención se compila en software funcionando. Así opero dos productos en producción, Golden Frijoles y Miyagi Sánchez, bajo controles que un banco reconocería: aprobaciones escalonadas por riesgo, revisión independiente y trazabilidad en cada cambio.",
    ],
    howIWork: [
      "Planear, construir, entregar — una historia de usuario a la vez, con un gate determinista que debe estar en verde antes de cualquier merge.",
      "Revisión escalonada por riesgo: los agentes pueden mergear trabajo de bajo riesgo con CI en verde; todo lo que toca dinero, autenticación o migraciones de base de datos siempre lo mergea una persona.",
      "Revisión cruzada en cada pull request — el diff recibe un paso independiente de otra familia de modelos antes de aterrizar, y cada hallazgo se corrige o se responde.",
      "Modelos por tarea: el modelo más fuerte hace grooming, planea y revisa; una vez aprobadas las rebanadas, la ejecución corre en el más rápido.",
      "Cada épica cierra con una retrospectiva, y los aprendizajes duraderos se promueven a un digest compartido que toda sesión nueva lee primero.",
      "El grooming es la puerta de entrada: una petición cruda se reencuadra sobre las primitivas de plataforma que ya existen antes de construir algo nuevo.",
    ],
    experience: {
      featured: [
        {
          company: "AB InBev",
          dates: "2020 — 2023",
          title: "Global Principal Product Manager · La cervecera más grande del mundo",
          chain: [
            "Construí y operé el ecosistema global de recompensas en Centroamérica, Europa y Corea del Sur: incentivos, economía de lealtad y activaciones con socios.",
            "Lideré una organización de producto e ingeniería de más de 70 personas a través de 5 gerentes, en una empresa pública y matricial.",
            "Gestioné un portafolio de más de $70M USD con caso de negocio y seguimiento de valor por iniciativa, y campañas activadas en el Super Bowl y The Voice Brasil.",
            "Entregué en una categoría regulada: cada lanzamiento pasó por legal interno y asesores externos en cada jurisdicción.",
          ],
        },
        {
          company: "Linio · Falabella",
          dates: "2019 — 2020",
          title: "Group Product Manager · Ciudad de México",
          chain: [
            "Dirigí la integración post-M&A de las plataformas de marketplace y comercio tras la adquisición de Linio por Falabella, liderando a dos gerentes.",
            "Unifiqué la infraestructura multiplataforma de las organizaciones fusionadas.",
          ],
        },
      ],
      earlier: [
        { company: "Wagento Commerce", title: "Director de Experiencia de Cliente y Gestión de Proyectos", dates: "2017 — 2019" },
        { company: "Nolte Worldwide", title: "Head of Product Management", dates: "2017 — 2018" },
        { company: "MagmaLabs", title: "Senior Product Manager", dates: "2016 — 2017" },
        { company: "CTIN · Telmex (Grupo Carso)", title: "Líder de Equipo · plataforma de remesas con Bitcoin, más de 5,000 usuarios activos", dates: "2012 — 2014" },
        { company: "Grupo Bimbo", title: "Analista FinOps · aceptación de pagos con tarjeta", dates: "2010 — 2011" },
        { company: "CompuCom · Accenture", title: "Soporte Técnico y Servicio al Cliente", dates: "2006 — 2010" },
      ],
      ventures: [
        {
          company: "Golden Frijoles",
          url: "https://goldenfrijoles.com",
          dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Product management para equipos que construyen con agentes de IA",
          chain: [
            "Construí una plataforma que permite a una persona y sus agentes de IA operar toda una práctica de producto: decidir qué vale la pena construir, lanzarlo con seguridad y medir si dio resultado.",
            "Sustituye el mosaico de herramientas separadas de analítica, lanzamientos y experimentos por un solo sistema conectado.",
            "Diseñé cómo trabajan los agentes dentro de ella: investigan y proponen, las personas aprueban lo importante y cada acción queda registrada.",
            "Construida en abierto: 87 iniciativas entregadas hasta hoy, todas visibles en un roadmap público. También opera los lanzamientos de Miyagi Sánchez.",
          ],
          tags: "Plan gratuito en vivo; planes de pago y proyectos con equipos por acuerdo",
        },
        {
          company: "Miyagi Sánchez",
          url: "https://miyagisanchez.com",
          dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Infraestructura de e-commerce para México, de prompt a tienda",
          chain: [
            "Infraestructura de e-commerce para todos con la barrera de entrada más baja: el comerciante describe su negocio en una frase y obtiene una tienda lista para cobrar, gratis para empezar y con 0% de comisión de plataforma.",
            "Un catálogo, todos los canales: dominio propio, enlace de catálogo, PDF y feed para WhatsApp / Instagram, ventas en persona, el marketplace, un widget en cualquier página y asistentes de compra con IA.",
            "147 iniciativas entregadas en descubrimiento, checkout, pagos, envíos, confianza y promociones, cada una cerrada con una revisión escrita.",
            "Primer canal de ingresos: una edición impresa financiada con publicidad.",
          ],
        },
        {
          company: "Bicimensajero.com",
          dates: "2014 — 2016",
          title: "Fundador · Mensajería en bicicleta bajo demanda",
          chain: [
            "Construí el producto yo mismo, antes de las herramientas de IA actuales.",
            "Hice crecer la operación a más de 100 mensajeros.",
            "Llevé la empresa a una adquisición.",
          ],
        },
        {
          company: "Pokapok.mx",
          dates: "2016 — 2017",
          title: "Fundador · Plataforma de bienestar corporativo",
          chain: [
          ],
        },
        {
          company: "Nuuch Tech",
          dates: "2012 — 2015",
          title: "Fundador y Consultor Principal · Consultoría en e-commerce, CRM y agile",
          chain: [
          ],
        },
      ],
    },
    education: [
      { school: "University of Aberdeen · Escocia", credential: "MSc (Econ) en Finanzas y Gestión de Inversiones", dates: "2023 — 2024" },
      { school: "Escuela Bancaria y Comercial · Ciudad de México", credential: "Licenciatura en Comercio y Negocios Internacionales", dates: "" },
    ],
    philosophy: "Construyo productos con propósito.",
    tldr: {
      greeting: "Hola, soy Daniel Vásquez",
      intro: "Algunas cosas sobre mí:",
      bullets: [
        "Aprendí a programar en la prepa mientras administraba una tienda local de computación",
        "Empecé en soporte técnico, pasé a desarrollo de software y después me consolidé en Product Management",
        "Todo lo que construyo ahora pasa por agentes — grooming, planeación, construcción, revisión, entrega y reporteo",
        "Construí un sistema operativo open source para trabajo de producto con agentes, instalado una vez y reutilizado en cada proyecto que construyo — hoy el kit abierto de Golden Frijoles",
        "Opero <a href=\"https://goldenfrijoles.com\" target=\"_blank\" rel=\"noopener noreferrer\">goldenfrijoles.com</a>, una plataforma de product management con agentes, y <a href=\"https://miyagisanchez.com\" target=\"_blank\" rel=\"noopener noreferrer\">miyagisanchez.com</a>, una infraestructura de e-commerce de prompt a tienda para México — ambos en producción",
        "Antes de todo eso: un portafolio de $70M+ y más de 70 personas en AB InBev, una integración post-M&A en Linio · Falabella, una plataforma de remesas con Bitcoin en Telmex (Grupo Carso) allá por 2012, y tres emprendimientos propios, uno de ellos adquirido",
        "Volví a la escuela por una Maestría en Finanzas y Gestión de Inversiones en Escocia; mi tesis fue sobre pronóstico de volatilidad de mercados",
        "Mi misión: que cada product manager se convierta en product builder. Siempre hicimos prompting, solo que en tickets de Jira",
      ],
      punchline: "Tengo facilidad para llevar las cosas de 0 a todo el mundo.",
      contactText: "Encuéntrame en:",
      contactEmail: "danielvp1987@gmail.com",
    },
    lanesShared: {
      titles: { summary: "Resumen", current: "Actualidad", skills: "Habilidades", ventures: "Emprendimientos Previos", languages: "Idiomas", download: "Descargar PDF" },
      ventures: [
        { company: "Bicimensajero.com · Pokapok.mx · Nuuch Tech", title: "Fundador · mensajería con más de 100 mensajeros, adquirida; bienestar corporativo; consultoría e-commerce", dates: "2012 — 2017" },
      ],
      dissertation: "Tesis: “Global Shocks: Volatility Forecasting in Emerging and Developed Markets”. Modelos GARCH en 4 mercados, 2006–2024.",
      languages: "Español (nativo) · Inglés (profesional completo)",
    },
    lanes: {
      main: {
        pdfTitle: "Daniel Vasquez - CV - Director de Producto, Fintech",
        pdfFile: "/Daniel-Vasquez-CV-ES.pdf",
        role: "Director de Producto · Fintech, Pagos y Plataformas Nativas de IA",
        tagline: "Ejecutivo de producto desde 2012, de cero-a-uno a escala Fortune 100. Convierto organizaciones de producto de centros de costo en motores de ingresos, con cada iniciativa ligada al P&L.",
        summary: "Dirijo producto como un P&L, no como un centro de costo: cada iniciativa lleva caso de negocio, línea base y una línea de utilidad bruta que se lee tras el lanzamiento. Gestioné un portafolio de recompensas de $70M+ USD y lideré a 70+ personas en AB InBev, integré plataformas tras la adquisición de Linio por Falabella y lancé una plataforma de remesas con Bitcoin en Telmex (Grupo Carso) en 2012. Hoy opero dos productos con equipos de agentes de IA bajo controles de nivel bancario, y formo PMs como product builders.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Infraestructura de comercio con pagos y plataforma de producto agéntica, ambas en producción",
          bullets: [
            "Miyagi Sánchez: comercio de prompt a tienda para México. Los pagos llegan directo al comerciante (tarjeta, Mercado Pago, SPEI, QR, efectivo) con 0% de comisión; ingresos por extras opcionales.",
            "Golden Frijoles: plataforma de product management que liga cada iniciativa a un resultado y una línea base.",
            "Modelo operativo para trabajo regulado: los agentes planean, construyen y revisan; las personas aprueban todo lo que toca dinero, autenticación o datos de clientes, con trazabilidad en cada cambio.",
            "Velocidad con controles: 250+ pull requests y 650+ archivos de pruebas en Golden Frijoles; 1,000+ commits en Miyagi.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Gestioné un portafolio global de recompensas de $70M+ USD en Centroamérica, Europa y Corea del Sur, con caso de negocio y seguimiento de valor por iniciativa.",
              "Lideré una organización de producto e ingeniería de 70+ personas a través de 5 gerentes, en una empresa pública.",
              "Entregué en una categoría regulada: cada lanzamiento pasó por legal interno y asesores externos en cada jurisdicción.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Dirigí la integración post-M&A de plataformas de marketplace y comercio tras la adquisición de Linio por Falabella, liderando a dos gerentes.",
            ],
          },
          {
            company: "CTIN · Telmex (Grupo Carso)", dates: "2012 — 2014",
            title: "Líder de Equipo · Centro de Tecnología e Innovación",
            bullets: [
              "Proyectos de innovación para directivos del grupo, incluida una plataforma de remesas con Bitcoin lanzada en 2012 que llegó a 5,000+ usuarios activos.",
            ],
          },
        ],
        hideEarlier: ["CTIN · Telmex (Grupo Carso)", "CompuCom · Accenture"],
        skills: [
          { label: "Fintech", text: "pagos (tarjetas, SPEI, QR, wallets), remesas, funnels de onboarding, lealtad y recompensas" },
          { label: "P&L", text: "atribución de P&L por iniciativa, casos de negocio, unit economics (LTV / CAC), integración post-M&A" },
          { label: "Liderazgo", text: "organizaciones de producto, PMs como product builders, entrega agéntica con controles por riesgo" },
          { label: "Cuantitativo", text: "econometría, modelado de volatilidad y riesgo, pronósticos, pruebas A/B" },
        ],
      },
      a: {
        pdfTitle: "Daniel Vasquez - CV - Lider de Producto, IA Agentica",
        pdfFile: "/Daniel-Vasquez-CV-Agentic-AI-ES.pdf",
        role: "Líder de Producto · IA Agéntica y Modelos Operativos",
        tagline: "Líder de producto e ingeniería desde 2012, de cero-a-uno a escala Fortune 100. Opero software en producción con equipos de agentes de IA y diseño los controles bajo los que trabajan.",
        summary: "Construí un modelo operativo en el que agentes de IA planean, construyen, revisan y lanzan software en producción bajo desarrollo guiado por resultados, mi propia metodología abierta de producto e ingeniería. Antes lideré una organización de producto e ingeniería de más de 70 personas y un portafolio global de más de $70M USD en AB InBev, y una integración de plataformas post-M&A en Linio.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Plataforma de producto agéntica e infraestructura de comercio, ambas en producción",
          bullets: [
            "Diseñé y opero un modelo de entrega agéntico: los agentes investigan, planean, construyen, revisan y lanzan; las personas aprueban todo lo que toca dinero, autenticación, migraciones o datos de clientes.",
            "Lo construí como plataforma reutilizable, no como automatizaciones sueltas: un kit, SDK y CLI open source (Apache-2.0) que se instala una vez y se reutiliza en cada producto.",
            "Velocidad con controles: más de 250 pull requests en Golden Frijoles en menos de cuatro meses, con más de 650 archivos de pruebas, y más de 1,000 commits en Miyagi Sánchez.",
            "La revisión independiente entre modelos y las retrospectivas escritas alimentan cada sesión siguiente, así la calidad y los controles se acumulan en lugar de degradarse.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí el ecosistema global de recompensas en Centroamérica, Europa y Corea del Sur.",
              "Lideré una organización de producto e ingeniería de más de 70 personas a través de 5 gerentes, en una empresa global matricial.",
              "Gestioné un portafolio de más de $70M USD: roadmaps, casos de negocio y seguimiento de valor entre regiones.",
              "Entregué en una categoría altamente regulada en una empresa pública: cada lanzamiento pasó por legal interno y asesores externos.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Dirigí la integración de sistemas post-M&A durante la adquisición por Falabella, liderando a dos gerentes.",
              "Unifiqué la infraestructura multiplataforma de las organizaciones fusionadas.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "IA agéntica", text: "orquestación multi-agente, uso de herramientas / MCP, recuperación (RAG), memoria, evaluación, diseño con humano en el ciclo" },
          { label: "Gobernanza", text: "autonomía escalonada por riesgo, puntos de aprobación, revisión entre modelos, trazabilidad, rutas de escalamiento" },
          { label: "Producto", text: "estrategia de plataforma, roadmaps, casos de negocio, realización de valor, agile a escala" },
        ],
      },
      p: {
        pdfTitle: "Daniel Vasquez - CV - Lider de Producto Comercio y Plataformas",
        pdfFile: "/Daniel-Vasquez-CV-Product-Platforms-ES.pdf",
        role: "Líder de Producto · Infraestructura de Comercio, Pagos y Plataformas Nativas de IA",
        tagline: "Líder de producto de cero-a-uno a escala Fortune 100 desde 2012. Construyo infraestructura de comercio y pagos donde a veces quien compra es un agente.",
        summary: "Fundé y opero Miyagi Sánchez, infraestructura de e-commerce con la barrera de entrada más baja: el comerciante describe su negocio en una frase y obtiene una tienda lista para cobrar. Antes gestioné un portafolio de recompensas de más de $70M USD en AB InBev, integré plataformas en la adquisición de Linio por Falabella y llevé una plataforma de remesas con Bitcoin a más de 5,000 usuarios activos.",
        current: {
          company: "Miyagi Sánchez · Golden Frijoles", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Infraestructura de comercio de prompt a tienda y plataforma de producto agéntica",
          bullets: [
            "Miyagi Sánchez: infraestructura de e-commerce para todos, de prompt a tienda: una frase basta para tener una tienda lista para cobrar, gratis y con 0% de comisión.",
            "Una tienda, todos los canales: dominio propio, catálogo en enlace, PDF y WhatsApp / Instagram, ventas en persona (QR, transferencia, efectivo, ligas de pago), el marketplace y asistentes de compra con IA.",
            "Pagos directos al comerciante (tarjeta, Mercado Pago, SPEI, efectivo); el modelo se basa en extras opcionales como dominios y anuncios impresos, no en comisiones.",
            "Ambos construidos con equipos de agentes de IA: más de 1,000 commits en Miyagi Sánchez y más de 250 pull requests en Golden Frijoles, plataforma de producto agéntica con SDK y CLI open source.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Gestioné un ecosistema global de recompensas de más de $70M USD en Centroamérica, Europa y Corea del Sur: incentivos, activaciones con socios y economía del consumidor.",
              "Lideré una organización de producto e ingeniería de más de 70 personas a través de 5 gerentes, con equipos que no me reportaban.",
              "Entregué en una categoría altamente regulada dentro de una empresa pública, validando cada lanzamiento con equipos legales internos y asesores externos en cada mercado.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Dirigí la integración post-M&A de los sistemas de marketplace y comercio durante la adquisición por Falabella, liderando a dos gerentes.",
            ],
          },
          {
            company: "CTIN · Telmex (Grupo Carso)", dates: "2012 — 2014",
            title: "Líder de Equipo · Plataforma de remesas con Bitcoin, con más de 5,000 usuarios activos",
            bullets: [],
          },
        ],
        hideEarlier: ["CTIN · Telmex (Grupo Carso)", "CompuCom · Accenture"],
        skills: [
          { label: "Plataformas", text: "infraestructura de comercio, alta de comerciantes, marketplaces, lealtad, pagos y remesas" },
          { label: "Comercial", text: "precios e incentivos, unit economics, LTV / CAC, casos de negocio, integración post-M&A" },
          { label: "Cuantitativo", text: "Maestría en Finanzas y Gestión de Inversiones: econometría, series de tiempo, evaluación de pronósticos, pruebas A/B" },
        ],
      },
    },
    work: {
      headline: "Producto que se paga solo.",
      lede: "Desde 2012, liderando equipos de producto e ingeniería. Convierto organizaciones de producto en motores de ingresos y a los product managers en product builders, trabajando junto a tu equipo y sus agentes.",
      ctaPrimary: "Escríbeme",
      ctaCv: "Descargar CV",
      offersTitle: "Qué hago",
      offers: [
        {
          title: "Darle vida al producto",
          body: "Para líderes que saben a dónde van, pero no logran alinear producto e ingeniería para llegar. Reduzco un problema complejo a un concepto nítido, lo divido en piezas entregables y trabajo con tus ingenieros hasta que está en producción — y medido.",
          shape: "Normalmente de 6 a 12 semanas, 2–3 días por semana",
        },
        {
          title: "Convertir tu práctica de producto en motor de ingresos",
          body: "Pasar a un equipo a entregar con agentes rompe hábitos rápido. En una sesión de trabajo de medio día sobre una iniciativa real, tu equipo ve cómo se ve hacerlo bien: un resultado escrito antes de construir, una fecha para leerlo y agentes trabajando dentro de límites claros. Después lo comparamos con cómo trabajan hoy y se quedan con lo que funciona.",
          shape: "Sesión de medio día sobre un proyecto vivo · seguimiento opcional de 30 días",
        },
        {
          title: "Product engineer embebido (forward-deployed)",
          body: "Me integro a tu equipo y a tu stack, soy dueño de un resultado y no de una cola de tickets, y escribo código de producción con agentes. Partimos de los fundamentos — user personas, un value proposition canvas y un business model canvas — para que todo lo que construimos tenga una razón y una forma de saber si funcionó.",
          shape: "Normalmente de 4 a 12 semanas, embebido",
        },
      ],
      includesTitle: "Todo proyecto incluye",
      includes: [
        "Un resultado y una línea base por escrito antes de construir",
        "Una fecha para leer el resultado, acordada desde el inicio",
        "Software funcionando en demo cada semana, no presentaciones",
        "Decisiones y trade-offs registrados donde trabaja tu equipo",
        "Accesos, NDA y manejo de datos acordados antes de tocar tu código",
        "Una entrega que tu equipo puede operar sin mí",
      ],
      methodTitle: "Método",
      methodHeadline: "Agile, reconstruido para agentes.",
      methodBody: "Llevo más de una década practicando agile y tengo opiniones firmes al respecto. Los principios se sostienen; muchos de los rituales existían para transmitir la intención entre personas. Con agentes, la intención puede viajar intacta de la idea al código y al resultado medido. A esta práctica le llamo desarrollo guiado por resultados, y es abierta.",
      methodSteps: [
        { name: "Considerar", text: "Decidir si una idea merece una apuesta: el resultado, la línea base, el apetito." },
        { name: "Operar", text: "Dividirla, construirla y lanzarla detrás de un flag — personas y agentes dentro de límites claros." },
        { name: "Salir", text: "Leer la evidencia en la fecha acordada. Mantener, cambiar o matar." },
      ],
      methodLink: "Leer la metodología",
      contactTitle: "Hablemos",
      contactBody: "Cuéntame qué estás intentando lanzar. Te respondo si puedo ayudarte, y cómo.",
      copy: "Copiar",
      copied: "Copiado",
      copyLabel: "Copiar correo electrónico",
    },
    ui: {
      pageTitle: "Daniel Vásquez — Director de Producto · Fintech e IA",
      metaDesc:
        "Director de Producto para fintech, pagos y plataformas nativas de IA. Convierto organizaciones de producto en motores de ingresos, con cada iniciativa ligada al P&L. Ex-AB InBev ($70M+ de portafolio, 70+ personas), Linio · Falabella; Maestría en Finanzas y Gestión de Inversiones.",
      snapshotTitle: "Perfil",
      experienceTitle: "Experiencia",
      earlierTitle: "Trayectoria Previa",
      venturesTitle: "Emprendimientos",
      howIWorkTitle: "Cómo Trabajo",
      educationTitle: "Formación",
      approachTitle: "Enfoque",
      tldrButton: "TL;DR",
      classicButton: "Currículum",
      workButton: "Trabajemos",
      viewsLabel: "Elige una vista",
      cvButton: "Descargar CV",
      cvButtonShort: "CV",
      cvFile: "/Daniel-Vasquez-CV-ES.pdf",
      printable: "Versión imprimible",
      lastUpdated: "Última actualización: Noviembre 2026",
      viewMarkdown: "Ver Markdown",
      markdownUrl: "/resume-es.md",
      downloadPdf: "PDF",
      emailLabel: "Correo",
      linkedinLabel: "LinkedIn",
      websiteLabel: "Sitio Web",
      githubLabel: "GitHub",
      statsTitle: "En Cifras",
      pdfFooterNote: "Perfil completo en",
      pdfPrintButton: "Imprimir / Guardar como PDF",
      pdfBackLink: "← Volver al sitio",
    },
  },
};

// Default export has both en and es, and aliases top-level to en for backward-compatibility in templates
export default {
  ...resumeData.en,
  en: resumeData.en,
  es: resumeData.es,
};
