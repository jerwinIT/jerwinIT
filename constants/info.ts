export const clientProjects = [
  {
    title:
      "GeoSME Batangas – SME Research Data Platform & Fintech Mapping Dashboard",
    description:
      "GeoSME Batangas is a research data management platform built for the CABE Research Department in Batangas. It gives researchers a structured dashboard to record and maintain SME profiles — business details, asset size, years of operation, and financial technology usage — collected through their DTI-based fieldwork. The interactive GIS map and analytics dashboards are a live reflection of that stored data, letting researchers see the distribution and fintech adoption patterns emerge from the records they maintain, rather than a separate manually-updated visualization.",
    details:
      "Built a Prisma/PostgreSQL-backed dashboard where CABE researchers manage the actual SME dataset — business profiles, municipality assignments, and financial technology associations — as the single source of truth. The Leaflet-based GIS map and analytics panels query that same data directly, so markers, municipality boundaries, and choropleth density views update automatically as records are added or edited, with no separate step to keep the map in sync with the underlying research data.",
    problem:
      "The CABE Research Department lacked a centralized way to record SME data from their fieldwork and track how those businesses were adopting financial technologies across Batangas municipalities, relying instead on scattered spreadsheets and manual reports that made both data upkeep and trend analysis slow and error-prone.",
    features: [
      "Structured dashboard for researchers to record and maintain SME profiles, municipality assignments, and financial technology usage",
      "Interactive GIS map that reflects the live dataset — SME markers, municipality boundaries, and fintech density all update as records change",
      "Data visualization dashboards for trend and comparative analysis across the studied SMEs",
      "Filterable datasets so researchers can drill into specific municipalities, business categories, or fintech types",
      "RESTful API layer connecting the dashboard and mapping frontend to structured PostgreSQL data",
    ],
    technologies: [
      "Next.js Fullstack",
      "TypeScript",
      "PostgreSQL",
      "RestAPI",
      "LeafletJS",
    ],
    demoUrl: "https://geosme-batangas.com",
    repoUrl: "https://github.com/jerwinIT/geosme-batangas-map",
    repoPrivate: false,
    previewImage: "/images/geosme.png",
    status: "Live",
  },
  {
    title: "ProHealth Diagnostic Laboratory Landing Page",

    description:
      "A modern, responsive landing page developed for ProHealth Diagnostic Laboratory to establish a professional online presence. The website showcases the laboratory's services, provides essential contact information, integrates Google Maps for easy navigation, and features clear call-to-action buttons that allow patients to call, message via Facebook, or locate the laboratory with ease.",

    details:
      "Designed and developed a responsive single-page website that serves as the laboratory's digital front desk. The landing page centralizes important information such as available diagnostic services, operating details, contact information, and location, making it easier for patients to connect with the laboratory. Built with performance, accessibility, and search engine optimization (SEO) in mind to increase online visibility and provide a seamless experience across desktop and mobile devices.",

    problem:
      "The laboratory relied primarily on Facebook for its online presence, making it difficult for new patients to quickly find essential information such as available services, contact numbers, business location, and directions. There was no centralized, professional platform that patients could easily access from search engines or share with others.",

    features: [
      "Responsive landing page optimized for desktop, tablet, and mobile devices",
      "Service showcase with clear descriptions of diagnostic laboratory offerings",
      "Click-to-call buttons for instant phone inquiries",
      "Facebook Messenger integration for quick patient communication",
      "Embedded Google Maps with location marker for easy navigation",
      "Contact section with phone numbers, address, and business information",
      "Call-to-action sections encouraging patients to call, message, or visit the laboratory",
      "Search Engine Optimization (SEO) for improved Google visibility",
      "Fast-loading and accessible user interface for a better patient experience",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LeafletJS",
      "React",
    ],

    demoUrl: "https://prohealth-vert.vercel.app/",
    repoUrl: "",
    repoPrivate: false,
    previewImage: "/images/prohealth.png",
    status: "Live",
  },
];

export const sideProjects = [
  {
    title:
      "SparStock – Resource Generation Office Product Catalog & Reservation System",
    description:
      "SparStock is a web-based product catalog and reservation system developed for the Resource Generation Office (RGO) of Batangas State University. It provides students with a centralized platform to browse available products, reserve pickup schedules, and streamline over-the-counter purchasing without requiring online payments.",
    details:
      "Unlike a traditional e-commerce platform, SparStock is designed as a catalog-based reservation system. Students can explore a directory of university products—including uniforms, school supplies, and official merchandise—check product availability, and reserve a preferred claiming schedule before completing payment at the Resource Generation Office. The system helps reduce long queues, improves inventory visibility, and simplifies the product claiming process for both students and RGO personnel. Administrative features include inventory management, product management, reservation scheduling, sales monitoring, and reporting, allowing staff to efficiently manage daily operations through a centralized dashboard.",
    learnings:
      "Working on SparStock taught me how to design a reservation-based workflow instead of a typical checkout flow — modeling stock holds, pickup slots, and status transitions without needing payment integration. I got hands-on experience building an admin dashboard that had to serve non-technical staff, which pushed me to think more about usability and clear data presentation, and I strengthened my REST API design skills connecting a PHP/MySQL backend to a Next.js frontend.",
    features: [
      "Browsable product catalog with real-time availability for uniforms, supplies, and merchandise",
      "Pickup scheduling so students can reserve a claiming slot ahead of time",
      "Over-the-counter payment flow — no online payment gateway required",
      "Admin dashboard for inventory, reservations, sales monitoring, and reporting",
    ],
    technologies: ["Next.js", "Laravel", "TypeScript", "MySQL", "RestAPI"],
    demoUrl: "",
    repoUrl: "https://github.com/jerwinIT/resource-generation-office",
    previewImage: "/images/sparstock.png",
    status: "Ongoing",
  },
  {
    title: "Resume AI – AI-Powered Resume Builder & Optimizer",
    description:
      "Resume AI is a web application that helps users create and refine professional resumes with the help of AI. Users can generate tailored resume content, get suggestions for phrasing and structure, and switch between multiple AI providers depending on availability, cost, or output quality.",
    details:
      "Built a Next.js and Tailwind CSS frontend for composing and previewing resumes, backed by a FastAPI service that handles AI requests. The backend integrates multiple AI providers — OpenAI, Groq, and Gemini — behind a single interface, with logic to switch between provider API keys so the app can fall back to an alternative provider if one is rate-limited, slow, or unavailable.",
    learnings:
      "Building Resume AI taught me how to design a provider-agnostic AI integration layer in FastAPI, so switching between OpenAI, Groq, and Gemini doesn't require touching the frontend at all. I learned to handle differences in each provider's request/response format and rate limits, manage API keys securely on the backend, and structure prompts to reliably produce well-formatted resume content. It also gave me practical experience connecting a Next.js/Tailwind frontend to a Python backend across a clean REST boundary.",
    features: [
      "AI-generated resume content based on user input (experience, skills, target role)",
      "Real-time provider switching between OpenAI, Groq, and Gemini",
      "Resume preview and editing interface built with Next.js and Tailwind CSS",
      "FastAPI backend handling prompt construction, provider routing, and API key management",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "Python",
      "OpenAI API",
      "Groq API",
      "Gemini API",
    ],
    demoUrl: "",
    repoUrl: "https://github.com/jerwinIT/resume-ai",
    repoPrivate: false,
    previewImage: "/images/resumeai.png",
    status: "Ongoing",
  },
];

export const experienceData = [
  {
    title: "Backend Developer Intern",
    organization: "Tech Executive Labs",
    period: "February 2025 - April 2025",
    description:
      "Leading frontend development for enterprise applications. Building and maintaining critical components across the platform, ensuring accessibility standards and best practices. Collaborating with cross-functional teams to deliver high-quality user experiences.",
  },
];

export const educationData = [
  {
    title: "Bachelor of Information Technology Major in Service Management",
    organization: "Batangas State University",
    period: "August 2022 - Present",
    description:
      "Dean’s Lister with a strong foundation in web development, software engineering, and IT service management.",
  },
];

export const certificationData = [
  {
    title: "Introduction to Red Hat OpenShift AI (AI262F - RHA) - Ver. 2.13",
    organization: "Red Hat",
    period: "July 2025",
    certificateUrl:
      "https://www.credly.com/badges/7984f0ff-ee48-450a-93a7-362783a434dc/public_url",
  },
  {
    title:
      "Red Hat Application Development I: Programming in Java EE (AD183 - RHA) - Ver. 7.0",
    organization: "Red Hat",
    period: "July 2025",
    certificateUrl:
      "https://www.credly.com/badges/7984f0ff-ee48-450a-93a7-362783a434dc/public_url",
  },
  {
    title: "Next.js App Router Fundamentals ",
    organization: "Vercel",
    period: "May 2025",
    certificateUrl: "https://aws.amazon.com/certification",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    organization: "Udemy",
    period: "January 2026",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-6cd0c234-715d-49ba-829c-9388f60527f1/?lid=832xombx7j48&utm_source=braze&utm_campaign=250611_Student-MX_EM-Lifecycle_Course-Completion-MVP_T1&utm_medium=email&utm_term=MultiLANG_Hero-12-CTA_Secondary-color&utm_audience=MX&utm_content=udemy_braze.1cb6d7b71b9ac5f2f9c5c49038dcb84c",
  },
];
