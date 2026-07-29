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
      "SparStock is a web-based product catalog and reservation system developed for the Resource Generation Office (RGO) of Batangas State University. It enables students to browse available university products, reserve pickup schedules, and streamline over-the-counter purchasing while allowing RGO personnel to manage products and reservation slots through Google Sheets.",

    details:
      "SparStock is designed as a catalog-based reservation system rather than a traditional e-commerce platform. Students can explore university products—including school uniforms, school supplies, and official merchandise—view product details, and reserve an available pickup schedule before completing payment at the Resource Generation Office. To simplify operations, product information and reservation schedules are managed through Google Sheets, eliminating the need for a dedicated administrative dashboard. The Laravel backend synchronizes data from Google Sheets, ensuring students always have access to up-to-date product information and reservation availability while reducing long queues and improving the pickup experience.",

    learnings:
      "Building SparStock is helping me deepen my understanding of full-stack application architecture using Next.js and Laravel. Through this project, I'm learning how to design RESTful APIs, model reservation workflows, integrate Google OAuth authentication, and synchronize application data with Google Sheets using the Google Sheets API. It also provides hands-on experience implementing business logic, database relationships, and backend services while creating a solution that is practical for non-technical users.",

    features: [
      "Browse university products with category filtering and search functionality",
      "View product details, images, and available variations",
      "Reserve available pickup dates and time slots online",
      "Google OAuth authentication restricted to BatState student accounts",
      "Google Sheets integration for managing products and reservation schedules",
      "Automatic synchronization between Google Sheets and the application database",
    ],

    technologies: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Google OAuth",
      "Google Sheets API",
      "REST API",
    ],

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
    status: "Archived",
  },
  {
    title: "TaskFlow – Private Task Management Application",

    description:
      "TaskFlow is a private task management web application that allows users to securely organize their personal tasks using Firebase Authentication and Cloud Firestore. Each user's tasks are isolated through Firestore security rules, ensuring complete privacy.",

    details:
      "TaskFlow is a full-stack task management application built with Next.js App Router and Firebase. Users can register, sign in, and manage their own tasks through a clean and responsive interface. The application supports creating, editing, completing, filtering, and deleting tasks while leveraging Cloud Firestore for real-time data storage. Security is enforced at the database level using Firestore Security Rules, ensuring every user can only access their own data. An optional Firebase Cloud Function records activity whenever tasks are created or completed.",

    learnings:
      "Building TaskFlow strengthened my understanding of Firebase as a Backend-as-a-Service platform. I gained hands-on experience implementing email/password authentication, designing secure Firestore data models, writing Firestore Security Rules for user-level authorization, and creating reusable React hooks for real-time CRUD operations. It also improved my understanding of protected routing, state management with React Context, and integrating cloud services into a modern Next.js application.",

    features: [
      "Email/password authentication with Firebase Authentication",
      "Create, edit, complete, filter, and delete personal tasks",
      "Private task management enforced through Firestore Security Rules",
      "Real-time task synchronization using Cloud Firestore",
      "Protected dashboard accessible only to authenticated users",
      "Responsive interface optimized for desktop and mobile devices",
      "Optional Firebase Cloud Function for task activity logging",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Hosting",
      "Firebase Cloud Functions",
      "React Context API",
    ],

    demoUrl: "",
    repoUrl: "https://github.com/jerwinIT/taskflow-firebase",
    previewImage: "/images/taskflow.png",
    status: "Archived",
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
