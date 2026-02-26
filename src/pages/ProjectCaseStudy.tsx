import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Rocket, BookOpen } from 'lucide-react'
import { projects, personalInfo } from '@/data'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const cs = project.caseStudy

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6" id="main-content">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to projects
          </Link>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{project.tagline}</p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.website && (
                <Button as="a" href={project.website} external variant="secondary" size="md">
                  <BookOpen size={16} />
                  Website
                </Button>
              )}
              {project.github && project.github !== '[GITHUB LINK]' && (
                <Button as="a" href={project.github} external variant="secondary" size="md">
                  <Github size={16} />
                  View on GitHub
                </Button>
              )}
              {project.demo && project.demo !== '[DEMO LINK]' && (
                <Button as="a" href={project.demo} external variant="primary" size="md">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              )}
            </div>
          </header>

          <div className="space-y-12">
            {/* Divider */}
            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Overview */}
            <CaseSection icon={<Rocket size={18} />} title="Overview">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{cs.overview}</p>
            </CaseSection>

            {/* Role */}
            <CaseSection icon={<CheckCircle2 size={18} />} title="Role & Responsibilities">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{cs.role}</p>
              <ul className="space-y-2">
                {cs.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark flex-shrink-0" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </CaseSection>

            {/* Challenges */}
            <CaseSection icon={<AlertTriangle size={18} />} title="Challenges & Constraints">
              <ul className="space-y-2">
                {cs.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </CaseSection>

            {/* Key Decisions */}
            <CaseSection icon={<Lightbulb size={18} />} title="Key Decisions">
              <div className="space-y-4">
                {cs.keyDecisions.map((d, i) => (
                  <div
                    key={i}
                    className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4"
                  >
                    <h4 className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-1.5">
                      {d.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{d.description}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            {/* Implementation highlights */}
            <CaseSection icon={<CheckCircle2 size={18} />} title="Implementation Highlights">
              <ul className="space-y-2">
                {cs.implementationHighlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 font-mono leading-relaxed"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </CaseSection>

            {/* Outcome */}
            <CaseSection icon={<Rocket size={18} />} title="Outcome">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{cs.outcome}</p>

              {cs.learned.length > 0 && (
                <>
                  <h4 className="font-display font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                    What I learned
                  </h4>
                  <ul className="space-y-1.5 mb-4">
                    {cs.learned.map((l, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {cs.nextSteps.length > 0 && (
                <>
                  <h4 className="font-display font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                    Next steps
                  </h4>
                  <ul className="space-y-1.5">
                    {cs.nextSteps.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CaseSection>

            {/* Footer nav */}
            <hr className="border-zinc-200 dark:border-zinc-800" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                All projects
              </Link>
              <Link
                to={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-accent dark:text-accent-dark hover:underline"
              >
                Interested? Let's talk →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function CaseSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <section aria-labelledby={`cs-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-accent dark:text-accent-dark" aria-hidden="true">
          {icon}
        </span>
        <h2
          id={`cs-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
