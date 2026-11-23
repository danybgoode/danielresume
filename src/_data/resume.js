const resumeData = {
  en: {
    eyebrow: "Product Director · Customer insight to shipped software",
    name: "Daniel Vásquez",
    role: "Product Director · Customer insight to shipped software",
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
      { figure: "$70M+", label: "Yearly product budget owned at AB InBev" },
      { figure: "70+", label: "People led, product, design & engineering" },
      { figure: "2", label: "Products running in production" },
      { figure: "3", label: "Earlier ventures founded, one acquired" },
      { figure: "MSc", label: "Finance & Investment Management, Aberdeen" },
    ],
    snapshot: [
      "Product leader since 2012. The work starts with a customer conversation and ends with a measured result, and I build alongside my teams in between.",
      "At AB InBev I built the global rewards platform from scratch, with a $70M+ yearly product budget and 70+ people across product, design and engineering. At Linio I ran the frontend half of the product organisation, built a reviews platform later rolled out across Falabella group's e-commerce, and led the consolidation after the acquisition. Before that, I set up and ran Wagento's Mexico City office and led product at Nolte in New York. Earlier: a Bitcoin remittance platform at Telmex (Grupo Carso) in 2012, and three ventures of my own, one of them acquired.",
      "Today I run Golden Frijoles and Miyagi Sánchez, two AI-native products in production. Golden Frijoles is my own practice turned into software, from persona research to experiments to outcome reports: agents do the work, and people approve what matters. Underneath it all, an MSc in Finance & Investment Management from the University of Aberdeen.",
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
            "Built the global rewards platform from scratch across Central America, Europe and South Korea. Led platform selection with BCG and procurement's competitive bid, and launched SessionM worldwide.",
            "Owned the $70M+ yearly product budget (headcount, tools and operations): the annual case to C-levels, budget requests during the year and resource negotiations with peer directors.",
            "Led 70+ people across product, design and engineering through 5 managers; ran hiring and the annual performance and calibration cycle.",
            "Introduced NPS as an annual goal, then moved targets to GMV, first-party data acquisition and savings from consolidating internal tools.",
            "Managed global and local agencies for marketing, branding and technology, with campaigns activated at the Super Bowl and The Voice Brasil. Every launch cleared internal legal and external counsel.",
          ],
        },
        {
          company: "Linio · Falabella",
          dates: "2019 — 2020",
          title: "Group Product Manager · Mexico City",
          chain: [
            "Hired to run the frontend half of Linio's product organisation, at a time when the company was split into frontend and backend. Grew it into Discovery, the largest team, owning web, iOS and Android end to end alongside marketing and customer support.",
            "Pitched the idea for a new reviews system, secured its funding and built it into Linio, then expanded it to all of Falabella group's e-commerce, run by my team from corporate in Santiago de Chile.",
            "Redesigned the storefront end to end, then led the consolidation of the Linio and Falabella platforms after the acquisition.",
            "Managed two product managers end to end, from hiring and performance reviews to pay and budget. On the leadership team, co-designed and implemented Linio's shift to Spotify-model squads, and mentored PMs, designers and junior engineers.",
                   ],
        },
        {
          company: "Wagento Commerce",
          dates: "2017 — 2019",
          title: "Head of Customer Experience & Project Management · Minneapolis, Austin, Mexico City",
          chain: [
            "Set up and ran the Mexico City office. Its 15 people reported to me, as did the firm's product managers, about six. I owned hiring, performance reviews and pay, and defined career paths, training and delivery practices.",
            "Took e-commerce clients, Warner Music among them, from discovery and onboarding through delivery in Mexico and abroad, usability and accessibility testing included. Owned proposals and account growth.",
            "On the leadership team of a firm of about 60 people across the US, Mexico and India, set the quarterly direction of the company.",
                   ],
        },
        {
          company: "Nolte Worldwide",
          dates: "2017 — 2018",
          title: "Head of Product Management · New York",
          chain: [
            "Ran product at a boutique digital firm: hired and led the team, set its practices and took part in quarterly planning on where the firm was going.",
            "Managed the New York Chamber of Commerce account from discovery to delivery, including its regular reports throughout the year.",
                   ],
        },
      ],
      earlier: [
        { company: "Wagento Commerce", title: "Head of Customer Experience & Project Management", dates: "2017 — 2019", siteHidden: true },
        { company: "Nolte Worldwide", title: "Head of Product Management", dates: "2017 — 2018", siteHidden: true },
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
            "Codifies my own practice: persona and PMF research, a North Star with its input metrics, A/B tests and feature flags, and reports from the daily standup to the monthly stakeholder pack. It also runs feature releases for Miyagi Sánchez.",
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
            "Live, with its first merchants signing up organically.",
            "First revenue channel: an ad-funded print edition.",
          ],
        },
        {
          company: "Bicimensajero.com",
          dates: "2014 — 2016",
          title: "Founder · On-demand bike courier service",
          chain: [
            "Worked as couriers ourselves to research the job, interviewed riders, drew the wireframes and built the platform, before today's AI tools.",
            "United independent courier groups into one network of 100+ couriers.",
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
        "Before all that: a $70M+ yearly product budget and 70+ people at AB InBev, the frontend organisation, a group-wide reviews platform and the post-M&A consolidation at Linio · Falabella, a Bitcoin remittance platform at Telmex (Grupo Carso) back in 2012, and three ventures of my own, one of them acquired",
        "Went back to school for an MSc in Finance & Investment Management in Scotland; wrote my dissertation on forecasting market volatility",
        "On a mission to turn every product manager into a product builder. We were prompting all along, through Jira tickets",
      ],
      punchline: "Have a knack for taking things from 0 to the whole world.",
      contactText: "Find me at:",
      contactEmail: "danielvp1987@gmail.com",
    },
    // Lane CVs: the same facts, re-led for one kind of role each. Rendered at
    // /print/a/ and /print/x/ and built to their own PDFs by `npm run pdf`.
    // Earlier career and education come from the shared blocks above.
    lanesShared: {
      titles: { summary: "Summary", current: "Current", skills: "Skills", ventures: "Earlier Ventures", languages: "Languages", download: "Download PDF" },
      ventures: [
        { company: "Bicimensajero.com · Pokapok.mx · Nuuch Tech", title: "Founder · 100+ courier network, acquired; wellness app; consultancy", dates: "2012 — 2017" },
      ],
      dissertation: "Dissertation: “Global Shocks: Volatility Forecasting in Emerging and Developed Markets”. GARCH models on 4 markets, 2006–2024.",
      languages: "Spanish (native) · English (full professional)",
    },
    lanes: {
      // MAIN — the flagship CV behind every "Download CV" button: Product Director, any industry (absorbed the Platforms lane).
      main: {
        pdfTitle: "Daniel Vasquez - CV - Product Director",
        pdfFile: "/Daniel-Vasquez-CV.pdf",
        role: "Product Director · Customer insight to shipped software",
        summary: "Product leader since 2012, from AB InBev's global rewards platform to Linio's consolidation with Falabella, now two AI-native products in production. The work starts with a customer conversation and ends with a measured result.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Commerce infrastructure and an agentic product platform, both in production",
          bullets: [
            "Miyagi Sánchez: prompt-to-shop commerce for Mexico. One sentence about the business becomes a shop that sells on its own domain, WhatsApp, the marketplace and AI assistants, paid by card, SPEI, Mercado Pago or cash at 0% commission.",
            "Golden Frijoles: my product practice, codified: persona and PMF research, North Star metrics, A/B tests and reports.",
            "Both run with AI agents under risk-tiered controls: people approve anything touching money, auth or customer data.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards platform from scratch across Central America, Europe and South Korea. Led platform selection with BCG and procurement's competitive bid, and launched SessionM worldwide.",
              "Owned the $70M+ yearly product budget (headcount, tools, operations): the annual C-level case and peer negotiations.",
              "Led 70+ people across product, design and engineering through 5 managers; ran hiring and performance reviews.",
              "Introduced NPS as an annual goal, then moved targets to GMV, first-party data and tool-consolidation savings.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Hired to run the frontend half of Linio's product organisation; grew it into Discovery, the largest team: web, iOS and Android with marketing and customer support. Managed two PMs: hiring, reviews, pay and budget.",
              "Pitched, funded and built a new reviews system, then rolled it out across Falabella group's e-commerce from Santiago.",
              "Redesigned the storefront end to end, then led the platform consolidation with Falabella after the acquisition.",
              "On the leadership team, co-designed the move to Spotify-model squads; mentored PMs, designers and junior engineers.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Head of Customer Experience & Project Management · Minneapolis, Austin, Mexico City",
            bullets: [
              "Set up and ran the Mexico City office (about 15 people) and led the PMs: hiring, reviews, pay and career paths.",
              "Took e-commerce clients, Warner Music among them, from discovery to delivery; owned proposals and account growth.",
              "On the leadership team of a 60-person firm across the US, Mexico and India, set quarterly direction.",
            ],
          },
          {
            company: "Nolte Worldwide", dates: "2017 — 2018",
            title: "Head of Product Management · New York",
            bullets: [
              "Hired and led the product team; ran the New York Chamber of Commerce account from discovery to its regular reports.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "Nolte Worldwide", "CompuCom · Accenture"],
        skills: [
          { label: "Product", text: "discovery and usability research, personas and segmentation, North Star metrics, A/B tests and feature flags" },
          { label: "Domain", text: "payments (cards, SPEI, QR, wallets, remittance), commerce, marketplaces, rewards and loyalty, M&A integration" },
          { label: "Leadership", text: "budget ownership, hiring and performance cycles, agency and vendor management, C-level presentations" },
          { label: "Quant", text: "MSc Finance & Investment Management: econometrics, forecasting, risk modelling, A/B test analysis" },
        ],
      },
      // A — AI-native and agentic product roles.
      a: {
        pdfTitle: "Daniel Vasquez - CV - Product Director, AI-native",
        pdfFile: "/Daniel-Vasquez-CV-Agentic-AI.pdf",
        role: "Product Director · AI-native products, agent-built under real controls",
        summary: "Product leader since 2012 who turned his own practice into software: persona research, North Star metrics, experiments and outcome reports, run by AI agents with people approving what matters. Before that, AB InBev's global rewards platform on a $70M+ yearly budget and Linio's consolidation with Falabella.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Agentic product platform and commerce infrastructure, both in production",
          bullets: [
            "Golden Frijoles: agentic product management. Agents turn a raw ask into user stories with acceptance criteria, wireframes and a sized plan, then build, test and review; people approve what touches money, auth or customer data.",
            "Codifies my own practice: a cold read and PMF narrative with sourced personas, a North Star with input metrics, risk validation, and an outcome report per initiative against a target set before building.",
            "Ships the tooling too: feature flags, A/B tests and events through an open-source SDK and CLI, in place of separate analytics, flag and experiment tools.",
            "Reports at every level, generated from the work itself: daily standup, weekly executive recap, PMO delivery metrics (including DORA) and a monthly stakeholder pack.",
            "Miyagi Sánchez: prompt-to-shop commerce for Mexico, built the same way. AI shopping assistants are one of its sales channels; payments by card, SPEI, Mercado Pago or cash.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards platform from scratch across Central America, Europe and South Korea. Led platform selection with BCG and procurement's competitive bid, and launched SessionM worldwide.",
              "Owned the $70M+ yearly product budget (headcount, tools, operations): the annual C-level case and peer negotiations.",
              "Led 70+ people across product, design and engineering through 5 managers; ran hiring and performance reviews.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Hired to run the frontend half of Linio's product organisation; grew it into Discovery, the largest team: web, iOS and Android with marketing and customer support. Managed two PMs: hiring, reviews, pay and budget.",
              "Pitched, funded and built a new reviews system, then rolled it out across Falabella group's e-commerce from Santiago.",
              "Redesigned the storefront end to end, then led the platform consolidation with Falabella after the acquisition.",
              "On the leadership team, co-designed the move to Spotify-model squads; mentored PMs, designers and junior engineers.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "Agentic AI", text: "multi-agent orchestration, tool use / MCP, retrieval (RAG), memory, evaluation, human-in-the-loop design" },
          { label: "Governance", text: "risk-tiered autonomy, approval gates, cross-model review, audit trails, escalation paths" },
          { label: "Product", text: "persona and PMF research, North Star and input metrics, experimentation, outcome reporting, platform strategy" },
        ],
      },
      // X — digital experience and CX strategy roles (banks, e.g. Citi): research-led, corporate scale first.
      x: {
        pdfTitle: "Daniel Vasquez - CV - Digital Experience Leader",
        pdfFile: "/Daniel-Vasquez-CV-Digital-Experience.pdf", hideDissertation: true,
        role: "Digital Experience Leader · Research, design and delivery across digital and in-person channels",
        summary: "Product leader since 2012 who starts with customer research and delivers through design and engineering. Built AB InBev's global rewards platform from scratch and consolidated Linio's storefront with Falabella's. Today, working prototypes reach users in minutes, built with AI agents under human approval.",
        // Corporate scale first: the current role prints after Experience on this lane.
        currentAfter: true,
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Two AI-native products in production",
          bullets: [
            "Miyagi Sánchez: prompt-to-shop commerce for Mexican merchants; live, with its first merchants joining organically.",
            "Golden Frijoles: my research-to-results practice as software: personas, A/B tests and reports, with human approval.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards platform from scratch across Central America, Europe and South Korea. Led platform selection with BCG and procurement's competitive bid, and launched SessionM worldwide.",
              "Owned the $70M+ yearly product budget (headcount, tools, operations): the annual C-level case and peer negotiations.",
              "Led 70+ people across product, design and engineering through 5 managers; ran hiring and performance reviews.",
              "Introduced NPS as an annual goal, then moved targets to GMV, first-party data and tool-consolidation savings.",
              "Managed global and local agencies for marketing, branding and tech; every launch cleared legal review.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Redesigned the storefront end to end, then led the platform consolidation with Falabella after the acquisition.",
              "Pitched, funded and built a new reviews system, then rolled it out across Falabella group's e-commerce from Santiago.",
              "Hired to run the frontend half of Linio's product organisation; grew it into Discovery, the largest team: web, iOS and Android with marketing and customer support. Managed two PMs: hiring, reviews, pay and budget.",
              "On the leadership team, co-designed the move to Spotify-model squads; mentored PMs, designers and junior engineers.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Head of Customer Experience & Project Management · Minneapolis, Austin, Mexico City",
            bullets: [
              "Set up and ran the Mexico City office (about 15 people) and led the PMs: hiring, reviews, pay and career paths.",
              "Took e-commerce clients, Warner Music among them, from discovery to delivery with usability and accessibility testing.",
              "On the leadership team of a 60-person firm across the US, Mexico and India, set quarterly direction.",
            ],
          },
          {
            company: "Nolte Worldwide", dates: "2017 — 2018",
            title: "Head of Product Management · New York",
            bullets: [
              "Hired and led the product team; ran the New York Chamber of Commerce account from discovery to its regular reports.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "Nolte Worldwide", "CompuCom · Accenture"],
        ventures: [
          { company: "Bicimensajero.com", title: "Founder · worked as couriers to research the job, then built a 100+ courier network; acquired", dates: "2014 — 2016" },
          { company: "Nuuch Tech", title: "Founder & Principal Consultant · e-commerce, CRM and agile consulting", dates: "2012 — 2015" },
        ],
        skills: [
          { label: "Research", text: "task-based usability moderation, user interviews, accessibility testing, journey mapping, design thinking" },
          { label: "Insight", text: "NPS programmes, digital analytics, A/B testing, statistics and econometrics (MSc)" },
          { label: "Leadership", text: "budget ownership, hiring and performance cycles, agency and vendor management, C-level presentations" },
          { label: "Domain", text: "payments (cards, SPEI, remittance), rewards and loyalty, e-commerce, marketplaces" },
          { label: "Tools", text: "Figma, Hotjar, Optimizely, Flagsmith, observation-room labs; built Golden Frijoles for personas and experiments" },
        ],
      },
      // C — payments, cards and partner-led programmes (e.g. Amazon Mexico co-branded card): rewards, partners and legal first.
      c: {
        pdfTitle: "Daniel Vasquez - CV - Payments Product Leader",
        pdfFile: "/Daniel-Vasquez-CV-Payments.pdf",
        role: "Product Leader · Payments, rewards and partner-led programmes",
        summary: "Product leader since 2012 who builds customer programmes with outside partners. Took AB InBev's global rewards platform from vendor selection with BCG to a worldwide launch, and today runs a Mexican commerce platform that takes card, SPEI, Mercado Pago and cash payments. MSc in Finance & Investment Management.",
        // Corporate scale first: the current role prints after Experience on this lane.
        currentAfter: true,
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · Commerce infrastructure and an agentic product platform, both in production",
          bullets: [
            "Miyagi Sánchez: prompt-to-shop commerce for Mexico. Merchants get paid by card, SPEI, Mercado Pago or cash at 0% platform commission; live, with its first merchants joining organically.",
            "Golden Frijoles: my product practice as software: personas, North Star metrics, A/B tests and reports, run by AI agents, with people approving anything that touches money.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards platform from scratch across Central America, Europe and South Korea, and launched SessionM worldwide as its engine.",
              "Chose the platform partner with BCG and procurement's competitive bid (a Dutch auction adapted for AB InBev), and negotiated with the vendors competing for the deal.",
              "Owned the $70M+ yearly product budget: the annual case to C-levels, requests during the year and resource negotiations with peer directors.",
              "Set the programme's metrics: introduced NPS as an annual goal, then moved targets to GMV, first-party data and tool-consolidation savings.",
              "Every launch cleared internal legal and external counsel; ran global and local agencies, with campaigns at the Super Bowl and The Voice Brasil.",
              "Led 70+ people across product, design and engineering through 5 managers; ran hiring and performance reviews.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "Ran the frontend half of Linio's product organisation and grew it into Discovery, the largest team: web, iOS and Android, working with marketing and customer support.",
              "Pitched, funded and built a new reviews system for customer feedback, then rolled it out across Falabella group's e-commerce from Santiago.",
              "Redesigned the storefront end to end, then led the platform consolidation with Falabella after the acquisition.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "Payments", text: "card acceptance, SPEI, QR, wallets, remittance, checkout, rewards and loyalty programmes" },
          { label: "Partners", text: "vendor selection and competitive bids, agency management, legal review, C-level business cases" },
          { label: "Product", text: "usability research, NPS programmes, North Star metrics, A/B tests and feature flags" },
          { label: "Quant", text: "MSc Finance & Investment Management: econometrics, forecasting, risk modelling" },
        ],
      },
      // M — product operating model coaching and consulting roles (e.g. Product Model Coach): operating model, coaching and training first.
      m: {
        pdfTitle: "Daniel Vasquez - CV - Product Operating Model",
        pdfFile: "/Daniel-Vasquez-CV-Product-Model.pdf",
        role: "Product leader · Building product operating models, and the teams that run them",
        summary: "Product leader since 2012 who builds how product teams work: squads, outcome goals, discovery, career paths and training. Co-designed Linio's move to Spotify-model squads, built AB InBev's global rewards product organisation from scratch, and now runs that practice as software operated by AI agents.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Present",
          title: "Founder & Product Lead · A product operating model as software, run by AI agents",
          bullets: [
            "Golden Frijoles: my product model as software: PMF and personas, North Star metrics, experiments and outcome reports.",
            "AI agents turn a raw ask into stories, plans and shipped code; people approve anything touching money, auth or data.",
            "Product ops from the work itself: daily standup, weekly exec recap, PMO and DORA metrics, monthly stakeholder pack.",
            "Miyagi Sánchez: prompt-to-shop commerce for Mexico, run on the same model; first merchants joining organically.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · World's largest brewer",
            bullets: [
              "Built the global rewards product organisation from scratch (Central America, Europe, South Korea); launched SessionM worldwide.",
              "Introduced NPS as an annual goal, then moved the team to outcome targets: GMV, first-party data, tool savings.",
              "Led 70+ people in product, design and engineering through 5 managers; ran hiring and calibration round tables.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Mexico City",
            bullets: [
              "On the leadership team, co-designed Linio's move to Spotify-model squads and coached teams through the change.",
              "Ran the frontend half of product; grew it into Discovery, the largest team: web, iOS and Android end to end.",
              "Mentored PMs, designers and junior engineers; managed two PMs end to end, from hiring and reviews to pay.",
              "Pitched, funded and built a reviews system, then rolled it out across Falabella group's e-commerce.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Head of Customer Experience & Project Management · Minneapolis, Austin, Mexico City",
            bullets: [
              "Set up the Mexico City office (about 15 people); designed and delivered career paths, training and practices.",
              "Ran discovery and onboarding for e-commerce clients like Warner Music through delivery; owned account growth.",
              "On the leadership team of a 60-person firm across the US, Mexico and India, set quarterly direction.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "CompuCom · Accenture"],
        ventures: [
          { company: "Nuuch Tech", title: "Founder & Principal Consultant · coached client teams in agile delivery; e-commerce and CRM", dates: "2012 — 2015" },
          { company: "Bicimensajero.com · Pokapok.mx", title: "Founder · 100+ courier network, acquired; corporate wellness app", dates: "2014 — 2017" },
        ],
        skills: [
          { label: "Product model", text: "operating model design, squads, outcome goals, North Star metrics, discovery and delivery" },
          { label: "Coaching", text: "training and workshop design, career paths, calibration, PM mentoring, client onboarding" },
          { label: "Product ops", text: "Jira and Jira Product Discovery, roadmaps, PMO and DORA reporting, A/B tests, feature flags" },
          { label: "AI", text: "built Golden Frijoles, AI agents running a product practice with approval gates and an audit trail" },
        ],
      },
    },
    // "Work with me" — the consulting view. Default landing view.
    work: {
      headline: "Listen to customers. Build what they need. Prove it paid off.",
      lede: "Product leader since 2012. I work with your team and its agents to find what customers need, build it and measure the result.",
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
          title: "Your product practice, rebuilt for agents",
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
      pageTitle: "Daniel Vásquez — Product Director",
      metaDesc:
        "Product Director, from customer insight to shipped software. Ex-AB InBev ($70M+ yearly product budget, 70+ people) and Linio · Falabella; two AI-native products in production; MSc Finance & Investment Management, Aberdeen.",
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
    eyebrow: "Director de Producto · Del insight del cliente al software en producción",
    name: "Daniel Vásquez",
    role: "Director de Producto · Del insight del cliente al software en producción",
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
      { figure: "$70M+", label: "Presupuesto anual de producto en AB InBev" },
      { figure: "70+", label: "Personas lideradas: producto, diseño e ingeniería" },
      { figure: "2", label: "Productos corriendo en producción" },
      { figure: "3", label: "Emprendimientos previos fundados, uno adquirido" },
      { figure: "MSc", label: "Finanzas y Gestión de Inversiones, Aberdeen" },
    ],
    snapshot: [
      "Líder de producto desde 2012. El trabajo empieza con una conversación con el cliente y termina con un resultado medido, y en medio construyo junto a mis equipos.",
      "En AB InBev construí desde cero la plataforma global de recompensas, con un presupuesto anual de producto de más de $70M USD y más de 70 personas en producto, diseño e ingeniería. En Linio dirigí la mitad frontend de la organización de producto, construí una plataforma de reseñas que después se extendió a todo el e-commerce del grupo Falabella y lideré la consolidación tras la adquisición. Antes abrí y dirigí la oficina de Wagento en Ciudad de México y lideré producto en Nolte en Nueva York. Y antes: una plataforma de remesas con Bitcoin en Telmex (Grupo Carso) en 2012 y tres emprendimientos propios, uno de ellos adquirido.",
      "Hoy opero Golden Frijoles y Miyagi Sánchez, dos productos AI-native en producción. Golden Frijoles es mi propia práctica convertida en software, de la investigación de personas a los experimentos y los reportes de resultados: los agentes hacen el trabajo y las personas aprueban lo que importa. Debajo de todo, una Maestría en Finanzas y Gestión de Inversiones por la University of Aberdeen.",
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
            "Construí desde cero la plataforma global de recompensas en Centroamérica, Europa y Corea del Sur. Dirigí la selección de plataforma con BCG y la licitación competitiva de compras, y lancé SessionM a nivel mundial.",
            "Administré el presupuesto anual de producto de $70M+ USD (estructura, herramientas y operación): el caso anual ante el C-level, solicitudes durante el año y negociación de recursos con otros directores.",
            "Lideré a 70+ personas de producto, diseño e ingeniería a través de 5 gerentes; contratación y ciclo anual de desempeño y calibración.",
            "Introduje NPS como meta anual y después moví los objetivos a GMV, adquisición de datos propios y ahorro por consolidar herramientas internas.",
            "Gestioné agencias globales y locales de marketing, marca y tecnología, con campañas activadas en el Super Bowl y The Voice Brasil. Cada lanzamiento pasó por legal interno y asesores externos.",
          ],
        },
        {
          company: "Linio · Falabella",
          dates: "2019 — 2020",
          title: "Group Product Manager · Ciudad de México",
          chain: [
            "Contratado para dirigir la mitad frontend de la organización de producto de Linio, cuando la empresa estaba dividida en frontend y backend. La convertí en Discovery, el equipo más grande, dueño de web, iOS y Android de punta a punta junto con marketing y atención a clientes.",
            "Propuse un nuevo sistema de reseñas, conseguí su financiamiento y lo construí en Linio; después lo extendí a todo el e-commerce del grupo Falabella, operado por mi equipo desde el corporativo en Santiago de Chile.",
            "Rediseñé la tienda de punta a punta y, tras la adquisición, lideré la consolidación de las plataformas de Linio y Falabella.",
            "Dirigí a dos product managers de principio a fin, de la contratación y las evaluaciones de desempeño a sueldos y presupuesto. Desde el equipo de liderazgo, co-diseñé e implementé la transición de Linio a squads al estilo Spotify y mentoreé a PMs, diseñadores e ingenieros junior.",
                   ],
        },
        {
          company: "Wagento Commerce",
          dates: "2017 — 2019",
          title: "Director de Experiencia de Cliente y Gestión de Proyectos · Minneapolis, Austin, Ciudad de México",
          chain: [
            "Abrí y dirigí la oficina de Ciudad de México. Sus 15 personas me reportaban, igual que los product managers de la firma, unos seis. Llevé contratación, evaluaciones y sueldos, y definí planes de carrera, capacitación y prácticas de entrega.",
            "Llevé a clientes de e-commerce, entre ellos Warner Music, del discovery y el onboarding a la entrega en México y el extranjero, con pruebas de usabilidad y accesibilidad. Propuestas y crecimiento de cuentas a mi cargo.",
            "En el equipo de liderazgo de una firma de unas 60 personas en EE. UU., México e India, definí la dirección trimestral de la empresa.",
                   ],
        },
        {
          company: "Nolte Worldwide",
          dates: "2017 — 2018",
          title: "Head of Product Management · Nueva York",
          chain: [
            "Dirigí producto en una firma digital boutique: contraté y lideré al equipo, definí sus prácticas y participé en la planeación trimestral sobre el rumbo de la firma.",
            "Llevé la cuenta de la Cámara de Comercio de Nueva York del discovery a la entrega, incluidos sus reportes periódicos durante el año.",
                   ],
        },
      ],
      earlier: [
        { company: "Wagento Commerce", title: "Director de Experiencia de Cliente y Gestión de Proyectos", dates: "2017 — 2019", siteHidden: true },
        { company: "Nolte Worldwide", title: "Head of Product Management", dates: "2017 — 2018", siteHidden: true },
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
            "Codifica mi propia práctica: investigación de personas y PMF, North Star con sus métricas de entrada, pruebas A/B y feature flags, y reportes del standup diario al paquete mensual para stakeholders. También opera los lanzamientos de Miyagi Sánchez.",
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
            "En vivo, con sus primeros comercios sumándose de forma orgánica.",
            "Primer canal de ingresos: una edición impresa financiada con publicidad.",
          ],
        },
        {
          company: "Bicimensajero.com",
          dates: "2014 — 2016",
          title: "Fundador · Mensajería en bicicleta bajo demanda",
          chain: [
            "Trabajamos como mensajeros para investigar el oficio, entrevisté a los mensajeros, dibujé los wireframes y construí la plataforma, antes de las herramientas de IA actuales.",
            "Uní a grupos independientes de mensajeros en una red de más de 100.",
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
        "Antes de todo eso: un presupuesto anual de producto de $70M+ y más de 70 personas en AB InBev, la organización frontend, una plataforma de reseñas para todo el grupo y la consolidación post-M&A en Linio · Falabella, una plataforma de remesas con Bitcoin en Telmex (Grupo Carso) allá por 2012, y tres emprendimientos propios, uno de ellos adquirido",
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
        { company: "Bicimensajero.com · Pokapok.mx · Nuuch Tech", title: "Fundador · red de 100+ mensajeros, adquirida; bienestar; consultoría", dates: "2012 — 2017" },
      ],
      dissertation: "Tesis: “Global Shocks: Volatility Forecasting in Emerging and Developed Markets”. Modelos GARCH en 4 mercados, 2006–2024.",
      languages: "Español (nativo) · Inglés (profesional completo)",
    },
    lanes: {
      main: {
        pdfTitle: "Daniel Vasquez - CV - Director de Producto",
        pdfFile: "/Daniel-Vasquez-CV-ES.pdf",
        role: "Director de Producto · Del insight del cliente al software en producción",
        summary: "Líder de producto desde 2012, de la plataforma global de recompensas de AB InBev a la consolidación de Linio con Falabella, y hoy dos productos nativos de IA en producción. El trabajo empieza con una conversación con el cliente y termina con un resultado medido.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Infraestructura de comercio y plataforma de producto agéntica, ambas en producción",
          bullets: [
            "Miyagi Sánchez: comercio de prompt a tienda para México. Con una frase, el comerciante tiene una tienda en su dominio, WhatsApp, el marketplace y asistentes con IA, con cobro por tarjeta, SPEI, Mercado Pago o efectivo, sin comisión.",
            "Golden Frijoles: mi práctica de producto, codificada: personas y PMF, North Star, pruebas A/B y reportes por nivel.",
            "Ambos operan con agentes de IA y controles por riesgo: las personas aprueban lo que toca dinero, accesos o datos.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí desde cero la plataforma global de recompensas en Centroamérica, Europa y Corea del Sur. Dirigí la selección de plataforma con BCG y la licitación competitiva de compras, y lancé SessionM a nivel mundial.",
              "Administré el presupuesto anual de producto de $70M+ (equipo, herramientas, operación) y lo defendí ante el C-level.",
              "Lideré a 70+ personas de producto, diseño e ingeniería con 5 gerentes; contratación y evaluación de desempeño.",
              "Introduje NPS como meta anual; después moví los objetivos a GMV, datos propios y ahorro por consolidar herramientas.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Contratado para dirigir la mitad frontend de producto; la convertí en Discovery, el equipo más grande: web, iOS y Android con marketing y soporte. Dirigí a dos PMs: contratación, evaluaciones, sueldos y presupuesto.",
              "Propuse, financié y construí un sistema de reseñas y lo llevé a todo el e-commerce del grupo Falabella.",
              "Rediseñé la tienda de punta a punta y, tras la adquisición, lideré la consolidación de plataformas con Falabella.",
              "Desde el liderazgo, co-diseñé el paso a squads estilo Spotify; mentoreé a PMs, diseñadores e ingenieros junior.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Director de Experiencia de Cliente y Gestión de Proyectos · Minneapolis, Austin, Ciudad de México",
            bullets: [
              "Abrí y dirigí la oficina de CDMX (unas 15 personas) y a los PMs: contratación, evaluaciones, sueldos y carrera.",
              "Llevé a clientes de e-commerce, entre ellos Warner Music, del discovery a la entrega; propuestas y cuentas.",
              "En el equipo de liderazgo de una firma de 60 personas en EE. UU., México e India, definí la dirección trimestral.",
            ],
          },
          {
            company: "Nolte Worldwide", dates: "2017 — 2018",
            title: "Head of Product Management · Nueva York",
            bullets: [
              "Contraté y lideré al equipo de producto; llevé la cuenta de la Cámara de Comercio de Nueva York y sus reportes.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "Nolte Worldwide", "CompuCom · Accenture"],
        skills: [
          { label: "Producto", text: "investigación y usabilidad, personas y segmentación, North Star, pruebas A/B y feature flags" },
          { label: "Dominio", text: "pagos (tarjetas, SPEI, QR, wallets, remesas), comercio y marketplaces, lealtad y recompensas, integración post-M&A" },
          { label: "Liderazgo", text: "presupuesto, contratación y desempeño, agencias y proveedores, presentaciones al C-level" },
          { label: "Cuantitativo", text: "econometría, pronósticos, modelado de riesgo, análisis de pruebas A/B" },
        ],
      },
      a: {
        pdfTitle: "Daniel Vasquez - CV - Director de Producto, IA",
        pdfFile: "/Daniel-Vasquez-CV-Agentic-AI-ES.pdf",
        role: "Director de Producto · Productos nativos de IA, construidos con agentes bajo controles reales",
        summary: "Líder de producto desde 2012 que convirtió su propia práctica en software: investigación de personas, métricas North Star, experimentos y reportes de resultados, operados por agentes de IA con personas aprobando lo importante. Antes, la plataforma global de recompensas de AB InBev con $70M+ USD de presupuesto anual y la consolidación de Linio con Falabella.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Plataforma de producto agéntica e infraestructura de comercio, ambas en producción",
          bullets: [
            "Golden Frijoles: product management agéntico. Los agentes llevan una idea a historias de usuario con criterios de aceptación, wireframes y un plan dimensionado, y construyen y prueban; las personas aprueban dinero y datos.",
            "Codifica mi propia práctica: lectura en frío y narrativa de PMF con personas sustentadas, North Star con métricas de entrada, validación de riesgos y un reporte de resultados por iniciativa contra una meta fijada antes de construir.",
            "También la herramienta: feature flags, pruebas A/B y eventos con un SDK y CLI open source, en lugar de herramientas separadas de analítica, flags y experimentos.",
            "Reportes a todos los niveles, generados desde el trabajo mismo: standup diario, resumen ejecutivo semanal, métricas de entrega PMO (incluidas DORA) y un paquete mensual para stakeholders.",
            "Miyagi Sánchez: comercio de prompt a tienda para México, construido igual. Los asistentes de compra con IA son uno de sus canales; pagos por tarjeta, SPEI, Mercado Pago o efectivo.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí desde cero la plataforma global de recompensas en Centroamérica, Europa y Corea del Sur. Dirigí la selección de plataforma con BCG y la licitación competitiva de compras, y lancé SessionM a nivel mundial.",
              "Administré el presupuesto anual de producto de $70M+ (equipo, herramientas, operación) y lo defendí ante el C-level.",
              "Lideré a 70+ personas de producto, diseño e ingeniería con 5 gerentes; contratación y evaluación de desempeño.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Contratado para dirigir la mitad frontend de producto; la convertí en Discovery, el equipo más grande: web, iOS y Android con marketing y soporte. Dirigí a dos PMs: contratación, evaluaciones, sueldos y presupuesto.",
              "Propuse, financié y construí un sistema de reseñas y lo llevé a todo el e-commerce del grupo Falabella.",
              "Rediseñé la tienda de punta a punta y, tras la adquisición, lideré la consolidación de plataformas con Falabella.",
              "Desde el liderazgo, co-diseñé el paso a squads estilo Spotify; mentoreé a PMs, diseñadores e ingenieros junior.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "IA agéntica", text: "orquestación multi-agente, herramientas / MCP, RAG, memoria, evaluación, humano en el ciclo" },
          { label: "Gobernanza", text: "autonomía por nivel de riesgo, aprobaciones, revisión entre modelos, trazabilidad, escalamiento" },
          { label: "Producto", text: "personas y PMF, North Star y métricas de entrada, experimentación, reportes de resultados, plataforma" },
        ],
      },
      x: {
        pdfTitle: "Daniel Vasquez - CV - Lider de Experiencia Digital",
        pdfFile: "/Daniel-Vasquez-CV-Digital-Experience-ES.pdf", hideDissertation: true,
        role: "Líder de Experiencia Digital · Investigación, diseño y entrega en canales digitales y presenciales",
        summary: "Líder de producto desde 2012 que empieza por la investigación con clientes y entrega con diseño e ingeniería. Construí desde cero la plataforma global de recompensas de AB InBev y consolidé la tienda de Linio con la de Falabella. Hoy, prototipos funcionales llegan a usuarios en minutos, con agentes de IA y aprobación humana.",
        // Corporate scale first: the current role prints after Experience on this lane.
        currentAfter: true,
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Dos productos nativos de IA en producción",
          bullets: [
            "Miyagi Sánchez: comercio de prompt a tienda para México; en vivo, con sus primeros comercios sumándose solos.",
            "Golden Frijoles: mi práctica de producto como software: personas, pruebas A/B y reportes, con aprobación humana.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí desde cero la plataforma global de recompensas en Centroamérica, Europa y Corea del Sur. Dirigí la selección de plataforma con BCG y la licitación competitiva de compras, y lancé SessionM a nivel mundial.",
              "Administré el presupuesto anual de producto de $70M+ (equipo, herramientas, operación) y lo defendí ante el C-level.",
              "Lideré a 70+ personas de producto, diseño e ingeniería con 5 gerentes; contratación y evaluación de desempeño.",
              "Introduje NPS como meta anual; después moví los objetivos a GMV, datos propios y ahorro por consolidar herramientas.",
              "Gestioné agencias globales y locales de marketing, marca y tecnología; cada lanzamiento pasó revisión legal.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Rediseñé la tienda de punta a punta y, tras la adquisición, lideré la consolidación de plataformas con Falabella.",
              "Propuse, financié y construí un sistema de reseñas y lo llevé a todo el e-commerce del grupo Falabella.",
              "Contratado para dirigir la mitad frontend de producto; la convertí en Discovery, el equipo más grande: web, iOS y Android con marketing y soporte. Dirigí a dos PMs: contratación, evaluaciones, sueldos y presupuesto.",
              "Desde el liderazgo, co-diseñé el paso a squads estilo Spotify; mentoreé a PMs, diseñadores e ingenieros junior.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Director de Experiencia de Cliente y Gestión de Proyectos · Minneapolis, Austin, Ciudad de México",
            bullets: [
              "Abrí y dirigí la oficina de CDMX (unas 15 personas) y a los PMs: contratación, evaluaciones, sueldos y carrera.",
              "Llevé clientes de e-commerce, como Warner Music, del discovery a la entrega con usabilidad y accesibilidad.",
              "En el equipo de liderazgo de una firma de 60 personas en EE. UU., México e India, definí la dirección trimestral.",
            ],
          },
          {
            company: "Nolte Worldwide", dates: "2017 — 2018",
            title: "Head of Product Management · Nueva York",
            bullets: [
              "Contraté y lideré al equipo de producto; llevé la cuenta de la Cámara de Comercio de Nueva York y sus reportes.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "Nolte Worldwide", "CompuCom · Accenture"],
        ventures: [
          { company: "Bicimensajero.com", title: "Fundador · fuimos mensajeros para conocer el oficio; armé una red de 100+, adquirida", dates: "2014 — 2016" },
          { company: "Nuuch Tech", title: "Fundador y Consultor Principal · consultoría en e-commerce, CRM y agile", dates: "2012 — 2015" },
        ],
        skills: [
          { label: "Investigación", text: "moderación de usabilidad, entrevistas, accesibilidad, journey mapping, design thinking" },
          { label: "Insights", text: "programas de NPS, analítica digital, pruebas A/B, estadística y econometría (MSc)" },
          { label: "Liderazgo", text: "presupuesto, contratación y desempeño, agencias y proveedores, presentaciones al C-level" },
          { label: "Dominio", text: "pagos (tarjetas, SPEI, remesas), lealtad y recompensas, e-commerce, marketplaces" },
          { label: "Herramientas", text: "Figma, Hotjar, Optimizely, Flagsmith, cámara Gesell y Golden Frijoles, construido por mí" },
        ],
      },
      c: {
        pdfTitle: "Daniel Vasquez - CV - Lider de Producto de Pagos",
        pdfFile: "/Daniel-Vasquez-CV-Payments-ES.pdf",
        role: "Líder de Producto · Pagos, recompensas y programas con socios",
        summary: "Líder de producto desde 2012 que construye programas para clientes junto con socios externos. Llevé la plataforma global de recompensas de AB InBev de la selección de proveedor con BCG al lanzamiento mundial, y hoy dirijo una plataforma de comercio en México que cobra con tarjeta, SPEI, Mercado Pago y efectivo. MSc en Finanzas y Gestión de Inversiones.",
        currentAfter: true,
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Infraestructura de comercio y plataforma de producto agéntica, ambas en producción",
          bullets: [
            "Miyagi Sánchez: comercio de prompt a tienda para México. Los comercios cobran con tarjeta, SPEI, Mercado Pago o efectivo, sin comisión de plataforma; en vivo, con sus primeros comercios sumándose solos.",
            "Golden Frijoles: mi práctica de producto como software: personas, North Star, pruebas A/B y reportes, con agentes de IA y aprobación humana en todo lo que toca dinero.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí desde cero la plataforma global de recompensas en Centroamérica, Europa y Corea del Sur, y lancé SessionM a nivel mundial como su motor.",
              "Elegí al socio de plataforma con BCG y la licitación competitiva de compras (una subasta holandesa adaptada a AB InBev), y negocié con los proveedores en competencia.",
              "Administré el presupuesto anual de producto de $70M+: el caso anual ante el C-level, solicitudes durante el año y negociación de recursos con otros directores.",
              "Definí las métricas del programa: introduje NPS como meta anual y después moví los objetivos a GMV, datos propios y ahorro por consolidar herramientas.",
              "Cada lanzamiento pasó revisión legal interna y externa; dirigí agencias globales y locales, con campañas en el Super Bowl y La Voz Brasil.",
              "Lideré a 70+ personas de producto, diseño e ingeniería con 5 gerentes; contratación y evaluación de desempeño.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Dirigí la mitad frontend de producto y la convertí en Discovery, el equipo más grande: web, iOS y Android, junto con marketing y soporte.",
              "Propuse, financié y construí un sistema de reseñas para la opinión de los clientes y lo llevé a todo el e-commerce del grupo Falabella.",
              "Rediseñé la tienda de punta a punta y, tras la adquisición, lideré la consolidación de plataformas con Falabella.",
            ],
          },
        ],
        hideEarlier: ["CompuCom · Accenture"],
        skills: [
          { label: "Pagos", text: "aceptación con tarjeta, SPEI, QR, wallets, remesas, checkout, programas de lealtad y recompensas" },
          { label: "Socios", text: "selección de proveedores y licitaciones, agencias, revisión legal, casos de negocio ante el C-level" },
          { label: "Producto", text: "investigación de usabilidad, programas de NPS, North Star, pruebas A/B y feature flags" },
          { label: "Cuantitativo", text: "MSc en Finanzas y Gestión de Inversiones: econometría, pronósticos, modelos de riesgo" },
        ],
      },
      m: {
        pdfTitle: "Daniel Vasquez - CV - Modelo Operativo de Producto",
        pdfFile: "/Daniel-Vasquez-CV-Product-Model-ES.pdf",
        role: "Líder de producto · Construyo modelos operativos de producto y los equipos que los operan",
        summary: "Líder de producto desde 2012 que construye cómo trabajan los equipos: squads, metas por resultados, discovery, planes de carrera y capacitación. Co-diseñé el paso de Linio a squads estilo Spotify, construí desde cero la organización de producto de recompensas de AB InBev y hoy opero esa práctica como software con agentes de IA.",
        current: {
          company: "Golden Frijoles · Miyagi Sánchez", dates: "2025 — Presente",
          title: "Fundador y Líder de Producto · Un modelo operativo de producto como software, con agentes de IA",
          bullets: [
            "Golden Frijoles: mi modelo de producto como software: PMF y personas, North Star, experimentos y reportes de resultados.",
            "Agentes de IA convierten una idea en historias, planes y código; las personas aprueban lo que toca dinero o datos.",
            "Product ops desde el trabajo mismo: standup diario, resumen ejecutivo, métricas PMO y DORA, paquete mensual.",
            "Miyagi Sánchez: comercio de prompt a tienda para México con el mismo modelo; primeros comercios sumándose solos.",
          ],
        },
        experience: [
          {
            company: "AB InBev", dates: "2020 — 2023",
            title: "Global Principal Product Manager · La cervecera más grande del mundo",
            bullets: [
              "Construí desde cero la organización de producto de recompensas (Centroamérica, Europa, Corea); lancé SessionM global.",
              "Introduje NPS como meta anual y luego moví al equipo a metas de resultado: GMV, datos propios, ahorro.",
              "Lideré a 70+ personas de producto, diseño e ingeniería con 5 gerentes; contratación y mesas de calibración.",
            ],
          },
          {
            company: "Linio · Falabella", dates: "2019 — 2020",
            title: "Group Product Manager · Ciudad de México",
            bullets: [
              "Desde el liderazgo, co-diseñé el paso de Linio a squads estilo Spotify y acompañé a los equipos en el cambio.",
              "Dirigí la mitad frontend de producto; la convertí en Discovery, el equipo más grande: web, iOS y Android.",
              "Mentoreé a PMs, diseñadores e ingenieros junior; dirigí a dos PMs: contratación, evaluaciones y sueldos.",
              "Propuse, financié y construí un sistema de reseñas y lo llevé a todo el e-commerce del grupo Falabella.",
            ],
          },
          {
            company: "Wagento Commerce", dates: "2017 — 2019",
            title: "Director de Experiencia de Cliente y Gestión de Proyectos · Minneapolis, Austin, CDMX",
            bullets: [
              "Abrí la oficina de CDMX (unas 15 personas); diseñé e impartí planes de carrera, capacitación y prácticas.",
              "Llevé discovery y onboarding de clientes de e-commerce, como Warner Music, hasta la entrega.",
              "En el liderazgo de una firma de 60 personas en EE. UU., México e India, definí la dirección trimestral.",
            ],
          },
        ],
        hideEarlier: ["Wagento Commerce", "CompuCom · Accenture"],
        ventures: [
          { company: "Nuuch Tech", title: "Fundador y Consultor Principal · coaching ágil a equipos de clientes; e-commerce y CRM", dates: "2012 — 2015" },
          { company: "Bicimensajero.com · Pokapok.mx", title: "Fundador · red de 100+ mensajeros, adquirida; app de bienestar", dates: "2014 — 2017" },
        ],
        skills: [
          { label: "Modelo de producto", text: "diseño de modelo operativo, squads, metas por resultados, North Star, discovery y entrega" },
          { label: "Coaching", text: "diseño de capacitación y talleres, planes de carrera, calibración, mentoría de PMs" },
          { label: "Product ops", text: "Jira y Jira Product Discovery, roadmaps, reportes PMO y DORA, pruebas A/B, feature flags" },
          { label: "IA", text: "construí Golden Frijoles: agentes de IA que operan una práctica de producto, con aprobaciones" },
        ],
      },
    },
    work: {
      headline: "Escuchar al cliente. Construir lo que necesita. Demostrar que valió la pena.",
      lede: "Líder de producto desde 2012. Trabajo con tu equipo y sus agentes para descubrir qué necesitan tus clientes, construirlo y medir el resultado.",
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
          title: "Tu práctica de producto, reconstruida para agentes",
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
      pageTitle: "Daniel Vásquez — Director de Producto",
      metaDesc:
        "Director de Producto, del insight del cliente al software en producción. Ex-AB InBev ($70M+ USD de presupuesto anual de producto, 70+ personas) y Linio · Falabella; dos productos nativos de IA en producción; Maestría en Finanzas, Aberdeen.",
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
