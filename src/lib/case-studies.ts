import type { CaseStudy } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "enterprise-nonprofit-platform",
    title: "CG-One — Enterprise Platform",
    subtitle: "Internal Enterprise Platform — 10+ Modules, 380K+ Lines of Code",
    description:
      "Architected and built a full-featured SSO application from the ground up for a multinational nonprofit organization. The platform serves as the operational backbone, featuring role-based dashboards, API integrations, reporting, and module-level permission filtering with a dark-themed React UI.",
    techStack: [
      "Next.js",
      "React",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Railway",
      "Vercel",
      "Google OAuth 2.0",
    ],
    metrics: [
      { label: "Lines of Code", value: "380K+" },
      { label: "Modules Built", value: "10+" },
      { label: "Legacy Systems Consolidated", value: "4" },
      { label: "Role-Based Access Levels", value: "Multiple" },
    ],
    challenges: [
      {
        title: "Enterprise SSO Architecture",
        description:
          "Implemented Google OAuth 2.0 single sign-on from the ground up, supporting multi-role access (Admin, Staff, Leader, Donor) with module-level permission filtering across 10+ functional modules.",
      },
      {
        title: "PCI DSS-Compliant Donation Processing",
        description:
          "Implemented a secure donation processing pipeline that meets PCI DSS compliance requirements, including tokenized payment handling, audit logging, and encrypted data storage.",
      },
      {
        title: "Database Architecture with Row-Level Security",
        description:
          "Designed database schema with Supabase (PostgreSQL) and Row-Level Security, ensuring data isolation and access control at the database level across multiple organizational roles and tenants.",
      },
      {
        title: "Batch Operations at Scale",
        description:
          "Engineered a batch-edit interface capable of handling bulk operations on thousands of records simultaneously, with optimistic updates, conflict resolution, and rollback capabilities.",
      },
    ],
    modules: [
      {
        name: "Contact & Donor CRM",
        description:
          "Comprehensive contact management with donor tracking, giving history, and relationship mapping.",
      },
      {
        name: "Financial Processing",
        description:
          "PCI-compliant donation processing, recurring gifts, batch processing, and financial reporting.",
      },
      {
        name: "Email Campaigns",
        description:
          "Mass email system with template builder, audience segmentation, and delivery analytics.",
      },
      {
        name: "Personnel Management",
        description:
          "Staff and volunteer tracking, scheduling, role assignments, and organizational hierarchy.",
      },
      {
        name: "Project & Task Management",
        description:
          "Project planning, task assignment, progress tracking, and team collaboration tools.",
      },
      {
        name: "Reporting Dashboards",
        description:
          "Dynamic dashboards with customizable widgets, data visualization, and export capabilities.",
      },
      {
        name: "Data Import & Migration",
        description:
          "Flexible import system supporting CSV, Excel, and API-based data migration with field mapping.",
      },
      {
        name: "Page Builder",
        description:
          "Drag-and-drop page builder for creating public-facing forms, landing pages, and content.",
      },
      {
        name: "Communications",
        description:
          "Multi-channel communication hub including SMS, email, and in-app notifications.",
      },
      {
        name: "Mobilization Tracking",
        description:
          "Event and campaign mobilization tracking with volunteer coordination and impact metrics.",
      },
    ],
    isPrivate: true,
  },
  {
    slug: "sosa-community-sports",
    title: "SOSA Community Sports",
    subtitle: "Community Sports Organization Website",
    description:
      "A modern community sports organization website built with Next.js and Tailwind CSS. Features event scheduling, team management, and a public-facing site with dynamic content management.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    metrics: [
      { label: "Tech Stack", value: "Next.js" },
      { label: "Deployment", value: "Vercel" },
      { label: "Type", value: "Public" },
    ],
    challenges: [
      {
        title: "Dynamic Content Management",
        description:
          "Built a flexible content system that allows non-technical administrators to update schedules, events, and team information without developer intervention.",
      },
      {
        title: "Responsive Community Experience",
        description:
          "Designed a mobile-first experience that serves community members accessing the site from various devices, with fast load times and intuitive navigation.",
      },
    ],
    liveUrl: "https://sosabasketball.org",
    githubUrl: "https://github.com/jburchel/sosa",
    isPrivate: false,
  },
  {
    slug: "globalreach",
    title: "GlobalReach",
    subtitle: "Joshua Project People Group Research Tool",
    description:
      "A web application for researching unreached people groups worldwide using the Joshua Project API. Features advanced search with demographic, religious, and geographic filters, saved research lists with team sharing, and real-time data from the comprehensive Joshua Project database.",
    techStack: [
      "React",
      "Vite",
      "Firebase",
      "Firestore",
      "Google OAuth",
      "Tailwind CSS",
      "Joshua Project API",
    ],
    metrics: [
      { label: "Data Source", value: "Joshua Project" },
      { label: "Auth", value: "Google OAuth" },
      { label: "Database", value: "Firestore" },
      { label: "Type", value: "Public" },
    ],
    challenges: [
      {
        title: "External API Integration with Caching",
        description:
          "Built a Firebase Cloud Functions proxy layer for the Joshua Project API with 10-minute caching, retry logic with exponential backoff, and error handling to provide reliable access to external data.",
      },
      {
        title: "Advanced Search & Filtering",
        description:
          "Implemented a comprehensive search system with filters for country, language, religion, population range, unreached status, frontier status, and Joshua Project scale — all querying millions of people group records.",
      },
      {
        title: "Collaborative Research Lists",
        description:
          "Built a saved lists feature with Firestore, allowing users to curate people group collections, share them with team members via email, and export data to CSV/Excel/JSON formats.",
      },
    ],
    liveUrl: "https://global-data-grid.web.app",
    githubUrl: "https://github.com/jburchel/globalreach",
    isPrivate: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
