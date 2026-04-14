"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Moon,
  Sun,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navItems, socialLinks } from "@/constant/navigation";
import {
  webProjects,
  designProjects,
  experienceData,
  educationData,
  certificationData,
} from "@/constant/info";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeProjectTab, setActiveProjectTab] = useState<"web" | "design">(
    "web",
  );
  const [projectSlide, setProjectSlide] = useState(0);
  const [activeExperienceTab, setActiveExperienceTab] =
    useState("certification");
  const [experienceItemIndex, setExperienceItemIndex] = useState(0);
  const [activeSkillFilter, setActiveSkillFilter] = useState<
    "all" | "languages" | "fullstack" | "data" | "qa" | "deployment"
  >("all");
  const [expandedSkillGroup, setExpandedSkillGroup] = useState<
    "languages" | "fullstack" | "data" | "qa" | "deployment" | null
  >("languages");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNoUrlDialogOpen, setIsNoUrlDialogOpen] = useState(false);

  const skillFilters = [
    { id: "all", label: "All" },
    { id: "languages", label: "Programming Languages" },
    { id: "fullstack", label: "Frontend & Backend" },
    { id: "data", label: "Databases & GIS" },
    { id: "qa", label: "QA & Automation" },
    { id: "deployment", label: "Deployment & Design" },
  ] as const;

  const skillsMatrix = [
    {
      name: "JavaScript",
      category: "languages",
      confidence: 86,
      exposure: "Daily use",
      focus: "Core language for frontend and web tooling",
    },
    {
      name: "Python",
      category: "languages",
      confidence: 78,
      exposure: "Project based",
      focus: "Automation, scripting and backend experiments",
    },
    {
      name: "PHP",
      category: "languages",
      confidence: 73,
      exposure: "Academic and practical",
      focus: "Web application fundamentals",
    },
    {
      name: "Java",
      category: "languages",
      confidence: 68,
      exposure: "Academic",
      focus: "Object-oriented programming foundations",
    },
    {
      name: "C++",
      category: "languages",
      confidence: 66,
      exposure: "Academic",
      focus: "Data structures and performance concepts",
    },
    {
      name: "Next.js",
      category: "fullstack",
      confidence: 88,
      exposure: "Primary stack",
      focus: "Building SSR/SSG apps and portfolio experiences",
    },
    {
      name: "React",
      category: "fullstack",
      confidence: 90,
      exposure: "Daily use",
      focus: "Component architecture and reusable UI patterns",
    },
    {
      name: "Node.js",
      category: "fullstack",
      confidence: 80,
      exposure: "Project based",
      focus: "APIs and service integration",
    },
    {
      name: "Express.js",
      category: "fullstack",
      confidence: 78,
      exposure: "Project based",
      focus: "REST API development",
    },
    {
      name: "FastAPI",
      category: "fullstack",
      confidence: 71,
      exposure: "Project based",
      focus: "Python API development and service endpoints",
    },
    {
      name: "PostgreSQL",
      category: "data",
      confidence: 72,
      exposure: "Project based",
      focus: "Relational schema and query optimization basics",
    },
    {
      name: "PostGIS",
      category: "data",
      confidence: 64,
      exposure: "Learning by projects",
      focus: "Spatial queries and geo-enabled datasets",
    },
    {
      name: "MySQL",
      category: "data",
      confidence: 78,
      exposure: "Academic and practical",
      focus: "CRUD and normalization practices",
    },
    {
      name: "MongoDB",
      category: "data",
      confidence: 69,
      exposure: "Project based",
      focus: "Document modeling and flexible data structures",
    },
    {
      name: "Leaflet.js",
      category: "data",
      confidence: 66,
      exposure: "Project based",
      focus: "Interactive web mapping and GIS visualization",
    },
    {
      name: "Pytest",
      category: "qa",
      confidence: 72,
      exposure: "Project based",
      focus: "Python test suites and validation workflows",
    },
    {
      name: "Playwright",
      category: "qa",
      confidence: 69,
      exposure: "Project based",
      focus: "End-to-end UI automation and regression tests",
    },
    {
      name: "Vercel",
      category: "deployment",
      confidence: 79,
      exposure: "Project based",
      focus: "Hosting and shipping Next.js applications",
    },
    {
      name: "Supabase",
      category: "deployment",
      confidence: 70,
      exposure: "Project based",
      focus: "Backend services, storage and managed database",
    },
    {
      name: "Hostinger",
      category: "deployment",
      confidence: 74,
      exposure: "Practical deployment",
      focus: "Web hosting configuration and domain setup",
    },
    {
      name: "Figma",
      category: "deployment",
      confidence: 82,
      exposure: "Regular use",
      focus: "Wireframes, UI layout and design handoff",
    },
    {
      name: "Git",
      category: "deployment",
      confidence: 85,
      exposure: "Daily use",
      focus: "Version control and team collaboration",
    },
    {
      name: "GitHub",
      category: "deployment",
      confidence: 84,
      exposure: "Daily use",
      focus: "Repository management and collaboration workflow",
    },
  ] as const;

  const projectTabs = [
    { id: "web", label: "Web Development Projects" },
    { id: "design", label: "UI/UX and Figma Designs" },
  ] as const;

  const projectData = {
    web: webProjects,
    design: designProjects,
  };

  const activeProjects = projectData[activeProjectTab];
  const activeExperienceItems =
    activeExperienceTab === "experience"
      ? experienceData
      : activeExperienceTab === "education"
        ? educationData
        : certificationData;

  const selectedExperienceItem =
    activeExperienceItems[experienceItemIndex] ?? activeExperienceItems[0];

  const filteredSkills =
    activeSkillFilter === "all"
      ? skillsMatrix
      : skillsMatrix.filter((skill) => skill.category === activeSkillFilter);

  const groupedSkillSections = skillFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => ({
      id: filter.id,
      label: filter.label,
      items: skillsMatrix.filter((skill) => skill.category === filter.id),
    }));

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "about",
        "skills",
        "projects",
        "experience",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openDemoLink = (demoUrl?: string) => {
    if (!demoUrl) {
      setIsNoUrlDialogOpen(true);
      return;
    }

    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  const goToPreviousProject = () => {
    setProjectSlide((prev) =>
      prev === 0 ? activeProjects.length - 1 : prev - 1,
    );
  };

  const goToNextProject = () => {
    setProjectSlide((prev) =>
      prev === activeProjects.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-6xl">
        {/* Transparent Sidebar */}
        <aside className="hidden w-64 shrink-0 xl:w-72 lg:block">
          <div className="sticky top-0 flex h-screen flex-col px-6 py-12">
            <div className="mb-10 flex flex-col items-center">
              <div className="mb-4 relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/10 overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Jerwin Louise Peria"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-foreground text-center">
                Jerwin Louise Peria
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                BSIT Service Management
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 gap-2 bg-transparent"
                asChild
              >
                <a
                  href="/Jerwin_Peria_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  View Resume
                </a>
              </Button>
            </div>

            <nav className="flex-1 flex flex-col items-center space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center gap-3 px-3 py-2.5 text-sm transition-all relative w-40 text-left ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-primary rounded-full" />
                    )}
                    <Icon
                      className={`h-4 w-4 ${isActive ? "text-primary" : ""}`}
                    />
                    <span
                      className={
                        isActive
                          ? "underline underline-offset-4 decoration-primary decoration-2"
                          : ""
                      }
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4">
              <div className="flex justify-center mb-2">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Moon className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                © 2025 Jerwin Louise Peria
              </p>
            </div>
          </div>
        </aside>

        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border lg:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <h1 className="text-lg font-bold">Jerwin Louise G. Peria</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 lg:mt-0 mx-auto">
            {/* Overview Section */}
            <section
              id="overview"
              className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
            >
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
                  Hi, I&apos;m Jerwin
                </h2>
                <p className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground text-balance max-w-4xl">
                  I’m an Information Technology Service Management (ITSM) major
                  focused on building and supporting reliable systems that
                  improve processes, enhance user experience, and align
                  technology with service-driven goals.
                </p>
              </div>
            </section>

            {/* About Me Section */}
            <section
              id="about"
              className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
                About Me
              </h3>
              <div className=" gap-8 lg:gap-12 items-start">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4">
                  I’m an Information Technology Service Management (ITSM) major
                  with hands-on experience in web and software development,
                  system testing, and basic IT support. Through my academic
                  projects and practical work, I have developed a solid
                  understanding of how technology solutions are designed, built,
                  tested, and maintained to meet user and business requirements.
                  My background allows me to work comfortably across both
                  technical and service-oriented tasks, ensuring systems
                  function reliably while aligning with organizational goals.
                </p>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  I am particularly interested in applying my technical and
                  service management skills to support IT projects that enhance
                  operational efficiency, system reliability, and overall user
                  experience. I value structured processes, continuous
                  improvement, and user-focused solutions, and I am motivated to
                  contribute to teams that prioritize quality, collaboration,
                  and effective service delivery. By combining technical
                  knowledge with ITSM principles, I aim to help organizations
                  deliver dependable IT services that create real value for
                  users and stakeholders.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section
              id="skills"
              className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
                Skills
              </h3>
              <div className="space-y-5 lg:space-y-6">
                <div className="flex flex-wrap gap-2">
                  {skillFilters.map((filter) => {
                    const isActive = activeSkillFilter === filter.id;

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => {
                          setActiveSkillFilter(filter.id);
                          if (filter.id !== "all") {
                            setExpandedSkillGroup(filter.id);
                          }
                        }}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>

                <div className="grid gap-6">
                  <Card className="overflow-hidden border-border/80">
                    <CardHeader className="pb-3 lg:p-6">
                      <CardTitle className="text-xl lg:text-2xl">
                        Capability Matrix
                      </CardTitle>
                      <CardDescription className="text-sm lg:text-base">
                        Filter by domain to inspect my current working stack.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 lg:px-6 lg:pb-6">
                      {activeSkillFilter === "all"
                        ? groupedSkillSections.map((section) => {
                            const isOpen = expandedSkillGroup === section.id;
                            const averageConfidence = Math.round(
                              section.items.reduce(
                                (total, skill) => total + skill.confidence,
                                0,
                              ) / section.items.length,
                            );

                            return (
                              <div
                                key={section.id}
                                className="rounded-xl border border-border/70 bg-background/30 p-3"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedSkillGroup((prev) =>
                                      prev === section.id ? null : section.id,
                                    )
                                  }
                                  className="flex w-full items-center justify-between gap-3 text-left"
                                >
                                  <div>
                                    <p className="text-sm font-semibold lg:text-base">
                                      {section.label}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {section.items.length} technologies | avg{" "}
                                      {averageConfidence}% confidence
                                    </p>
                                  </div>
                                  <ChevronDown
                                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {isOpen && (
                                  <div className="mt-3 space-y-3">
                                    {section.items.map((skill) => (
                                      <div
                                        key={skill.name}
                                        className="rounded-xl border border-border/70 bg-background/50 p-3 transition-colors hover:border-primary/40"
                                      >
                                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                          <div>
                                            <p className="text-sm font-semibold lg:text-base">
                                              {skill.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                              {skill.focus}
                                            </p>
                                          </div>
                                          <Badge
                                            variant="outline"
                                            className="text-[10px] uppercase"
                                          >
                                            {skill.category}
                                          </Badge>
                                        </div>
                                        <div className="mb-2 h-1.5 w-full rounded-full bg-muted">
                                          <div
                                            className="h-1.5 rounded-full bg-primary"
                                            style={{
                                              width: `${skill.confidence}%`,
                                            }}
                                          />
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                          <span>{skill.exposure}</span>
                                          <span>
                                            {skill.confidence}% confidence
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })
                        : filteredSkills.map((skill) => (
                            <div
                              key={skill.name}
                              className="rounded-xl border border-border/70 bg-background/40 p-3 transition-colors hover:border-primary/40"
                            >
                              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                <div>
                                  <p className="text-sm font-semibold lg:text-base">
                                    {skill.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {skill.focus}
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="text-[10px] uppercase"
                                >
                                  {skill.category}
                                </Badge>
                              </div>
                              <div className="mb-2 h-1.5 w-full rounded-full bg-muted">
                                <div
                                  className="h-1.5 rounded-full bg-primary"
                                  style={{ width: `${skill.confidence}%` }}
                                />
                              </div>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{skill.exposure}</span>
                                <span>{skill.confidence}% confidence</span>
                              </div>
                            </div>
                          ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
                Projects
              </h3>

              <div className="flex gap-2 mb-6 lg:mb-8 border-b border-border">
                {projectTabs.map((tab) => {
                  const isActive = activeProjectTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveProjectTab(tab.id);
                        setProjectSlide(0);
                      }}
                      className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="bg-transparent"
                    onClick={goToPreviousProject}
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="bg-transparent"
                    onClick={goToNextProject}
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${projectSlide * 100}%)` }}
                  >
                    {activeProjects.map((project, index) => (
                      <div key={index} className="w-full shrink-0">
                        <Card className="group hover:shadow-lg transition-shadow">
                          <CardHeader className="lg:p-6">
                            <CardTitle className="group-hover:text-primary transition-colors lg:text-xl">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="lg:text-base">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="lg:px-6 lg:pb-6">
                            <p className="text-sm lg:text-base text-muted-foreground mb-4">
                              {project.details}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="default"
                                size="sm"
                                className="flex-1 lg:text-sm"
                                onClick={() => openDemoLink(project.demoUrl)}
                              >
                                <span className="gap-2 inline-flex items-center">
                                  <ExternalLink className="h-3.5 w-3.5" />
                                  Open
                                </span>
                              </Button>
                              {project.repoUrl && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="flex-1 bg-transparent lg:text-sm"
                                  asChild
                                >
                                  <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="gap-2"
                                  >
                                    <Github className="h-3.5 w-3.5" />
                                    View Repository
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  {activeProjects.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setProjectSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        projectSlide === index
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-24 lg:mb-32 scroll-mt-24 min-h-[600px]"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
                Experience
              </h3>

              <div className="mb-6 lg:mb-8 inline-flex items-center rounded-xl border border-border bg-card p-1">
                <button
                  onClick={() => {
                    setActiveExperienceTab("certification");
                    setExperienceItemIndex(0);
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeExperienceTab === "certification"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Certification
                </button>
                <button
                  onClick={() => {
                    setActiveExperienceTab("experience");
                    setExperienceItemIndex(0);
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeExperienceTab === "experience"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => {
                    setActiveExperienceTab("education");
                    setExperienceItemIndex(0);
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeExperienceTab === "education"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Education
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-8">
                <div className="relative rounded-2xl border border-border bg-card p-4">
                  <div className="absolute bottom-5 left-6 top-5 w-px bg-border" />
                  <div className="space-y-1">
                    {activeExperienceItems.map((item, index) => {
                      const isActive = experienceItemIndex === index;

                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setExperienceItemIndex(index)}
                          className={`group relative w-full rounded-xl py-3 pl-8 pr-3 text-left transition-all ${
                            isActive ? "bg-accent/60" : "hover:bg-accent/30"
                          }`}
                        >
                          <span
                            className={`absolute left-[0.875rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 transition-all ${
                              isActive
                                ? "border-primary bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                                : "border-border bg-background group-hover:border-primary/60"
                            }`}
                          />
                          <p
                            className={`line-clamp-1 text-sm font-semibold ${
                              isActive
                                ? "text-foreground"
                                : "text-foreground/90"
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className="line-clamp-1 text-xs text-muted-foreground">
                            {item.organization}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground/80">
                            {item.period}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedExperienceItem && (
                  <Card className="border-border/80 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-300">
                    <CardHeader className="lg:p-7">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-xl lg:text-2xl">
                            {selectedExperienceItem.title}
                          </CardTitle>
                          <CardDescription className="text-base lg:text-lg">
                            {selectedExperienceItem.organization}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit text-xs">
                          {selectedExperienceItem.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    {activeExperienceTab === "certification" &&
                      "certificateUrl" in selectedExperienceItem &&
                      selectedExperienceItem.certificateUrl && (
                        <CardContent className="pt-0 lg:px-7 lg:pb-7">
                          <Button
                            variant="default"
                            size="sm"
                            className="gap-2"
                            asChild
                          >
                            <a
                              href={selectedExperienceItem.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View Certificate
                            </a>
                          </Button>
                        </CardContent>
                      )}
                  </Card>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border lg:hidden">
        <div className="container flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <AlertDialog open={isNoUrlDialogOpen} onOpenChange={setIsNoUrlDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>URL not available</AlertDialogTitle>
            <AlertDialogDescription>
              No demo URL is available right now for this project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
