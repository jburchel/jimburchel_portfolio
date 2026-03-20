import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock } from "react-icons/fi";
import { getCaseStudy, CASE_STUDIES } from "@/lib/case-studies";
import TechBadge from "@/components/shared/TechBadge";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Jim Burchel`,
    description: study.description.slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <FiArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            {study.isPrivate && (
              <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500">
                <FiLock size={14} />
                Private / Anonymized
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 text-xl text-muted">{study.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <FiExternalLink size={16} />
                View Live Site
              </a>
            )}
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
              >
                <FiGithub size={16} />
                View Source
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-muted">{study.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Key Metrics</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-surface p-4 text-center"
              >
                <p className="text-2xl font-bold text-accent">{metric.value}</p>
                <p className="mt-1 text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        {study.modules && study.modules.length > 0 && (
          <div className="mb-12 rounded-xl border border-border bg-surface p-6">
            <ArchitectureDiagram modules={study.modules} />
          </div>
        )}

        {/* Technical Challenges */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">Technical Challenges</h2>
          <div className="space-y-6">
            {study.challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="mb-3 text-lg font-semibold">{challenge.title}</h3>
                <p className="leading-relaxed text-muted">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <h2 className="text-xl font-semibold">Interested in working together?</h2>
          <p className="mt-2 text-muted">
            I&apos;m available for freelance projects and would love to discuss
            how I can help with yours.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
