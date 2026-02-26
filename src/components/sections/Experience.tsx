import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-zinc-900/30"
      aria-label="Experience"
    >
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader
            label="Experience"
            title="Where I've worked."
            description="Internships, part-time roles, and leadership experience."
          />
        </RevealWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <RevealWrapper key={i} delay={i * 0.1}>
                <div className="sm:pl-16 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-accent dark:bg-accent-dark border-2 border-zinc-50 dark:border-neutral-950 hidden sm:block"
                    aria-hidden="true"
                  />

                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-accent dark:text-accent-dark flex-shrink-0" aria-hidden="true" />
                          <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-50">{item.role}</h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                          {item.orgUrl ? (
                            <a
                              href={item.orgUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
                            >
                              {item.org}
                            </a>
                          ) : (
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.org}</span>
                          )}
                          <span className="flex items-center gap-1">
                            <MapPin size={12} aria-hidden="true" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full self-start">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>

                    <ul className="space-y-2" role="list">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark flex-shrink-0" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
